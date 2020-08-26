import InviteManager_Als from "../../../manager/InviteManager";
import InviteItem_Als from "./InviteItem";
import Als_SoundManager from "../../../common/SoundManager";
import GameEvent_Als from "../../../games/GameEvent";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";

/**
 * 邀请界面
 */
export default class InviteView_Als extends BaseSceneUISkinPopView {
    public className_key = "InviteView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;

    // private box_content: Laya.Box;

    private btn_close: Laya.Image;
    private panelInva: Laya.Panel;
    private boxInva: Laya.Box;
    private imageBtInvite: Laya.Button;

    constructor() {
        super();
        this.skin = "game/uiView/InviteFriendsView.json";
    }

    protected childrenCreated() {
        super.childrenCreated();

    }
    private initList(){
        this.boxInva.removeChildren();
        this.panelInva.vScrollBarSkin = "";
        this.panelInva.elasticEnabled = true;
        this.panelInva.vScrollBar.elasticDistance = 100;
        this.panelInva.vScrollBar.elasticBackTime = 100;
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
        MiniManeger_Als.instance.showBannerAd();
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose_asls);
        this.imageBtInvite.on(Laya.Event.CLICK, this, this.onInvite_als);
        EventMgr.getInstance().addEvent(GameEvent_Als.REFRESH_INVITE, this, this.refreshUI_als);
    }

    private initView() {
        
        this.getInvitePlayer_als();
        this.initList();
    }

    /** 获取邀请玩家数据 */
    private getInvitePlayer_als() {
        InviteManager_Als.getInstance().selectInfo((code) => {
            if (code == '0') {
                this.refreshUI_als();
            }
        }, this);
    }

    private refreshUI_als() {
        let dataArr = InviteManager_Als.getInstance().getInviteAwardData();
        console.log("InviteView >>>>>>> refreshUI", dataArr);
        for (let i = 0, len = dataArr.length; i < len; i++) {
            let item = <InviteItem_Als>this.boxInva.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = new InviteItem_Als(dataArr[i]);
                item.x = 0;
                item.y = (128 + 20) * i;
                this.boxInva.addChild(item);
            }
        }
    }

    private onInvite_als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        MiniManeger_Als.instance.bFlagDouYin = false;
        MiniManeger_Als.instance.shareAppMessage();
    }

    private onClose_asls() {
        this.removeEvent();
        Als_SoundManager.getInstance().playEffect("button", 1);
        this.removeUs();
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose_asls);
        this.imageBtInvite.off(Laya.Event.CLICK, this, this.onInvite_als);
        EventMgr.getInstance().removeEvent(GameEvent_Als.REFRESH_INVITE, this, this.refreshUI_als);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }
}