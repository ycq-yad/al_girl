import { PlayerDataManager_Als } from "../../../../common/GameDataManager";
import GameStateManager_Als from "../../../../games/GameStateManager";
import { EnterGameType, GoodsType } from "../../../../games/CommonDefine";
import { LevelManager_Als } from "../../../../manager/LevelManager";
import LevelView_Als from "./LevelView";
import ViewChangeManager_Als from "../../../../games/ViewChangeManager";
import ConfigManager_Als from "../../../../games/ConfigManager";
import Als_SoundManager from "../../../../common/SoundManager";
import { MiniManeger_Als } from "../../../../minigame/MiniManeger";
import AddPsView_Als from "../AddPsView";
import { BaseUIScene } from "../../../base/BaseUIScene";
import GameCenterManager_Als from "../../../../manager/GameCenterManager";

export default class LevelViewItem_Als extends BaseUIScene {
    public className_key = "LevelViewItem";

    public spBg: Laya.Sprite;
    public levelNum: Laya.Sprite;
    public spG: Laya.Sprite;

    private _nCurLeve: number;
    private _pParentView_Alst: LevelView_Als;
    private _bAni_Als: boolean;
    constructor(data_: number) {
        super();
        this._nCurLeve = data_;
        this.width = 285;
        this.height = 316;
        this.pivotX = 285 / 2;
        this.pivotY = 316 / 2;
        this.skin = "game/uiView/LevelIndexView.json";
    }

    onDisable(): void {
        this.off(Laya.Event.CLICK, this, this.enterL_Als);
        Laya.Tween.clearAll(this);
        Laya.timer.clearAll(this.openLIA_Als);
    }


    onEnable(): void {
        this.on(Laya.Event.CLICK, this, this.enterL_Als);
    }

   

    protected childrenCreated(): void {
        this.refreshV_Als();
    }

    private refresUIInfo(){
        //刷新关卡节点的数字
        BitmapLabelUtils.setLabel(this.levelNum, this._nCurLeve.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "center");
        //刷新界面
        if (this._nCurLeve <= PlayerDataManager_Als.getInstance().getCurLevelMax()) {
            this.spG.visible = true;
            this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_1.png");
        }
        else if (this._nCurLeve == PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevelForLevelView()) {
            this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_2.png");
            this._bAni_Als = true;
        } else {
            this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_3.png");
        }
    }

    public enterL_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        if (this._nCurLeve > PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevelForLevelView()) {
            TipsManager.getInstance().showDefaultTips("未解锁");
            return;
        }

        /**2020.6.1运营需求增加消息推送授权 */
        if (DeviceUtil.isWXMiniGame()) {
            if (!MiniManeger_Als.instance.bPushMsgShowFlagChooseLevel) {
                MiniManeger_Als.instance.wxPushMsg();
                MiniManeger_Als.instance.bPushMsgShowFlagChooseLevel = true;
            }
        }

        let nSpCost = 1;
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
        if (stGameConfig) {
            nSpCost = parseInt(stGameConfig.strValue);
        }

        //检测体力是否足够
        let b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
        if (!b) {
            GameCenterManager_Als.getInstance().oppenAddSpView();
            return;
        }
        //扣除体力
        PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);

        //2020.7.13-2-4
        // if (MiniManeger.instance.isWxMiniGameForOperReq()
        //     && PlayerDataManager.getInstance().isSecondEnterGame()
        //     && BaseConst.infos.gameInfo.openPsAward == 1) {
        //     this.wxOper71324();
        // } else {
            //2020.7.13-1-1
            this.enterOp_Als();
       // }
        // PlayerDataManager.getInstance().setCurLevel(this._nCurLeve-1);
        // GameStateManager.getInstance().levelState = EnterGameType.enum_EnterGameType_ChooseLevel;
        // LevelManager.getInstance().createLevelScene(this._nCurLeve);
        this._pParentView_Alst.closeVWGTL_Als();
    }

    private refreshV_Als() {
        this.spG.visible = false;
        this._bAni_Als = false;
        this.refresUIInfo();
        this.openLIA_Als();
    }

    public setData(data_: number) {
        this._nCurLeve = data_;
        this.refreshV_Als();
    }

   

    public setPV_Als(_pParentView_Alst: LevelView_Als) {
        this._pParentView_Alst = _pParentView_Alst;
    }

     //2020.7.13-1-1
     private enterOp_Als() {
        // //2020.7.13-1-1
        // if (MiniManeger_Als.instance.isWxMiniGameForOperReq()
        //     && this._nCurLeve >= BaseConst.infos.gameInfo.splevel
        //     && BaseConst.infos.gameInfo.openPsAward == 1) {
        //     //打开体力宝箱界面
        //     // PlayerDataManager.getInstance().bEnterGameFromGameHome = false;
        //     // PlayerDataManager.getInstance().nGotoLevel = this._nCurLeve;
        //     // ViewManager.getInstance().showView(SuccessfulEntryOneView);
        //     ViewChangeManager_Als.getInstance().gotoLevel(this._nCurLeve);
        // } else {
        //     ViewChangeManager_Als.getInstance().gotoLevel(this._nCurLeve);
        // }
        ViewChangeManager_Als.getInstance().gotoLevel(this._nCurLeve);
    }

    /**开启一个缩放的动画 */
    private openLIA_Als() {
        if (this._nCurLeve == PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel() && this._bAni_Als) {
            Laya.Tween.clearAll(this);
            Laya.Tween.to(this, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
                Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
                    Laya.timer.once(0, this, this.openLIA_Als);
                }));
            }));
        } else {
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this.openLIA_Als);
        }
    }

    // //2020.7.13-2-4
    // private wxOper71324() {
    //     if (!MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
    //         return;
    //     }
    //     if (!PlayerDataManager_Als.getInstance().isSecondEnterGame()) {
    //         return;
    //     }
    //     MiniManeger_Als.instance.playViderAd({
    //         successFun: () => {
    //             this.enterOp_Als();
    //         },
    //         failFun: () => {
    //             this.enterOp_Als();
    //         },
    //         errorFun: () => {
    //             this.enterOp_Als();
    //         }
    //     });
    // }

   
}