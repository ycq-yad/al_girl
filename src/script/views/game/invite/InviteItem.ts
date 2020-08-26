import { localData } from "../../../common/GameDataType";
import { Als_GameData } from "../../../common/GameData";
import { PlayerDataManager_Als } from "../../../common/GameDataManager";
import Als_SoundManager from "../../../common/SoundManager";
import GameEvent_Als from "../../../games/GameEvent";
import { GoodsType } from "../../../games/CommonDefine";

/**
* 邀请item
*/
export default class InviteItem_Als extends BaseSceneUISkin {
    public className_key = "InviteItem";

    private img_index: Laya.Image;
    private img_null: Laya.Image;
    private img_head: Laya.Image;
    // private img_headMask: Laya.Image;
    private img_award: Laya.Image;
    private img_get: Laya.Image;
    private img_no: Laya.Image;

    public data: localData.Als_InviteData

    constructor(_data: localData.Als_InviteData) {
        super();
        this.data = _data;
        this.skin = "game/uiView/InviteFriendsIndexView.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        this.size(735, 128);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.img_get.on(Laya.Event.CLICK, this, this.onGet);
        this.img_null.on(Laya.Event.CLICK, this, this.onInvite);
    }

    /** 设置数据 */
    public setData(data: localData.Als_InviteData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        let data = this.data;
        this.img_get.visible = this.img_no.visible = false;
        BitmapLabelUtils.setLabel(this.img_index, data.id + "", "resource/assets/img/ui/invite/invite_number1/invite_number1_", -10, ".png", "center");
        if (data.head && data.head != "") {
            this.img_head.skin = data.head;
            // this.img_head.mask = this.img_headMask;
        } else {
            this.img_head.skin = "";
        }

        BitmapLabelUtils.setLabel(this.img_award, data.reward + "", "resource/assets/img/common/level_number1/level_number1_", 0);

        if (data.lingqued) {//已领取
            this.img_get.visible = true;
            this.img_get.mouseEnabled = false;
            this.img_get.skin = "resource/assets/img/ui/invite/invite_button_2.png"
            this.img_null.visible = false;
            this.img_head.visible = true;
        } else {
            if (data.canLingqu) {//可领取
                this.img_get.visible = true;
                this.img_get.mouseEnabled = true;
                this.img_get.skin = "resource/assets/img/ui/invite/invite_button_1.png"
                this.img_null.visible = false;
                this.img_head.visible = true;
            } else {
                this.img_no.visible = true;
                this.img_null.visible = true;
                this.img_head.visible = false;
            }
        }
    }

    private onGet() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Sp, this.data.reward);
        PlayerDataManager_Als.getInstance().stPlayerDataBase.inviteId.push(this.data.id);
        PlayerDataManager_Als.getInstance().SaveData();
        EventMgr.getInstance().sendEvent(GameEvent_Als.REFRESH_INVITE);
    }

    private onInvite() {
        // MiniManeger.instance.shareAppMessage({
        //     sucFun: () => {
        //         TaskManager.instance.updateTask(TaskEnum.TASK_2008, 1);
        //     }
        // });
    }

    /** 移除事件 */
    private removeEvent() {
        this.img_get.off(Laya.Event.CLICK, this, this.onGet);
        this.img_null.off(Laya.Event.CLICK, this, this.onInvite);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.data = null;
        this.removeEvent();
    }
}