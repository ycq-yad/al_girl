import ConfigManager_Als from "../../../games/ConfigManager";
import { Als_PlayerDataBase, PlayerDataManager_Als } from "../../../common/GameDataManager";
import { GoodsType } from "../../../games/CommonDefine";
import Als_SoundManager from "../../../common/SoundManager";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";
import { PopBaseScene } from "../../base/PopBaseScene";

export default class AddPsView_Als extends PopBaseScene {
    className_key = "AddPsView";
    public grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
    public spNum: Laya.Sprite;
    public imageBtGet: Laya.Image;
    public btLable: Laya.Label;

    private _nPsAdd: number;

    static bShowMoreGame: boolean = false;

    public box_qq: Laya.Box;
    public box_index: Laya.Box;
    public box_up: Laya.Box;
    public box_down: Laya.Box;
    public box_lable: Laya.Box;
    public lable_number: Laya.Label;

    constructor() {
        super();
        this.skin = "game/uiView/AddSpView.json";
    }

    protected createChildren(): void {
        super.createChildren();
    }

    private refreshPsShow(){
        //初始化体力的数值
        this._nPsAdd = 5;
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(3);
        if (stGameConfig) {
            this._nPsAdd = parseInt(stGameConfig.strValue);
        }
        BitmapLabelUtils.setLabel(this.spNum, this._nPsAdd.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
    }

    public initView() {
        MiniManeger_Als.instance.showInterstitialAd();
        ViewChangeManager_Als.getInstance().CommonView.rmobtev_alt();
         MiniManeger_Als.instance.showBannerAd();
        this.refreshPsLLView_Als();
        this.refreshPsShow();
        this.onThinks();
    }

    private onThinks(){
        //不了谢谢的按钮
        this.btLable.visible = false;
        //两秒后显示出来
        Laya.timer.once(2000, this, () => {
            this.btLable.visible = true;
        })
    }

    private onClick(evt: Laya.Event) {
        Als_SoundManager.getInstance().playEffect("button", 1);
        switch (evt.currentTarget) {
            case this.imageBtGet:
                this.addPsWv_Als();
                break;
            case this.btLable:
                this.onClose();

                break;
        }
    }

    public addEvent() {
        this.registerEvent(this.imageBtGet, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btLable, Laya.Event.CLICK, this.onClick, this);
    }

    /**查看视频增加体力 */
    private addPsWv_Als() {
        
        // this.imageBtGet.off(Laya.Event.CLICK, this, this.addPsWatchVideo);
        MiniManeger_Als.instance.playViderAd({
            successFun: () => {
                // this.imageBtGet.on(Laya.Event.CLICK, this, this.addPsWatchVideo);
                ViewChangeManager_Als.getInstance().CommonView.abte_alt();
                this.addPsF_Als();
            }
            // failFun: () => {
            //     this.imageBtGet.on(Laya.Event.CLICK, this, this.addPsWatchVideo);
            // },
            // errorFun: () => {
            //     this.imageBtGet.on(Laya.Event.CLICK, this, this.addPsWatchVideo);
            // }
        });
    }

    /**增加体力 */
    private addPsF_Als() {
        //MiniManeger.instance.hideBanner();
        PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Sp, this._nPsAdd);
        AddPsView_Als.bShowMoreGame = false;
        PlayerDataManager_Als.getInstance().addWatchVideoAddSpTime();
        this.removeSelf();
    }

    /**不了谢谢 */
    private onClose() {
        //MiniManeger.instance.hideBanner();
        ViewChangeManager_Als.getInstance().CommonView.abte_alt();
        AddPsView_Als.bShowMoreGame = false;
        this.removeSelf();
    }

    private refreshUp() {
        //刷新进度
        let nLen = this.box_up.numChildren > PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime ? PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime : this.box_up.numChildren;
        for (let i = 0; i < nLen; ++i) {
            let pData = this.box_up.getChildAt(i) as Laya.Image;
            if (pData) {
                pData.visible = true;
            }
        }
    }

    private refreshMid() {
        //刷新进度显示
        let nLastCount = PlayerDataManager_Als.getInstance().getPsLimitlessStateLastTime();
        if (nLastCount <= 0) {
            this.box_lable.visible = false;
        } else {
            this.lable_number.text = nLastCount.toString();
        }
    }

    /**无限体力刷新 */
    private refreshPsLLView_Als() {
        this.refreshUp();
        this.refreshDown();
        this.refreshMid();
    }

    private refreshDown() {
        let nLen = this.box_down.numChildren > PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime ? PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime : this.box_down.numChildren;
        for (let i = 0; i < nLen; ++i) {
            let pData = this.box_down.getChildAt(i) as Laya.Image;
            if (pData) {
                pData.visible = true;
            }
        }
    }
}