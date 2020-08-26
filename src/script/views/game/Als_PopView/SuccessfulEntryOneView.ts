import ConfigManager_Als from "../../../games/ConfigManager";
import { PlayerDataManager_Als } from "../../../common/GameDataManager";
import { GoodsType } from "../../../games/CommonDefine";
import SuccessfulEntryThreeView_Als from "./SuccessfulEntryThreeView";
import Als_SoundManager from "../../../common/SoundManager";
import GameLogicProcessingManager_Als from "../../../games/GameLogicProcessingManager";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";
import MoreGameOperRequestTwo_Als from "../MoreGameOperRequestTwo";
import { PopBaseScene } from "../../base/PopBaseScene";

export default class SuccessfulEntryOneView_Als extends PopBaseScene {

    public className_key = "SuccessfulEntryOneView_Als";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    public imageBt: Laya.Image;
    public imageHand: Laya.Image;
    public imageParValue: Laya.Image;
    public spTimeDown: Laya.Sprite;
    private _nTimeDown: number;
    private _nCountMax: number;
    private _nPsAdd: number;
    private _nAddPerOne: number;
    private _nCurCount: number;
    private _bTimeOver: boolean;
    private _bAniRunning: boolean;
    private _bFirst: boolean;
    private _nTimeOverTemp: number;
    private _nLastClickTime: number;

    constructor() {
        super();
        this._nTimeDown = 5;
        this._nCountMax = 5;
        this._nPsAdd = 1;
        this._nAddPerOne = 0;
        this._nCurCount = 0;
        this._bTimeOver = false;
        this._bAniRunning = false;
        this._bFirst = true;
        this._nTimeOverTemp = 0;
        this._nLastClickTime = 0;
        this.skin = "game/uiView/SuccessfulEntryOneView.json";
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    private initBaseData() {
        this._nTimeDown = 5;
        this._nCountMax = 5;
        this._nPsAdd = 1;
        this._nAddPerOne = 0;
        this._nCurCount = 0;
        this._bTimeOver = false;
        this._bAniRunning = true;
        this._bFirst = true;
        this._nCurentCountSecond = 0;
    }

    private initAfter() {
        MiniManeger_Als.instance.showInterstitialAd();
        ViewChangeManager_Als.getInstance().CommonView.visible = false;
        this.imageBt.bottom = 0;
        this.moveBtnTween = null;
        MiniManeger_Als.instance.bFlagSpecialView = false;
        MiniManeger_Als.instance.hideBanner();
    }

    private sign_als_check_c() {
        if (this._nCurCount >= this._nCountMax) {
            Laya.timer.clear(this, this.timeDownView);
            this.procLgOv_Als();
        }
        if (this._nCurCount >= 7) {
            MiniManeger_Als.instance.bFlagSpecialView = true;
            MiniManeger_Als.instance.showBannerAd();
            if (!this.moveBtnTween) {
                this.moveBtnTween = Laya.Tween.to(this.imageBt, { bottom: 200 }, 1000);
            }
        }
    }

    /**初始化一些数据 */
    public initView() {
        this.initAfter();
        Als_SoundManager.getInstance().playEffect("win", 1);
        //初始化数据
        this.initBaseData();
        this.initUpTimeDown();
        this.initClickCountMax();
        this.initPsCount();
        this.initSubTime();
        this._nAddPerOne = Math.floor(870 / this._nCountMax);
        this.imageParValue.width = 0;
        this.ope_nTimeDown();
        // this.spTimeDown.visible = false;
        this.openHA_Als();
    }

    public addEvent() {
        this.registerEvent(this.imageBt, Laya.Event.CLICK, this.sign_click_recv_aw_als, this);
    }

    /**启动一个倒计时 */
    private ope_nTimeDown() {
        BitmapLabelUtils.setLabel(this.spTimeDown, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
        Laya.timer.loop(1000, this, this.timeDownView);
        Laya.timer.loop(this._nTimeOverTemp, this, this.als_sing_sun_count);
    }

    /**点击宝箱增加进度 */
    private _nCurentCountSecond: number = 0;
    private sign_click_recv_aw_als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        if (this._bTimeOver) {
            return;
        }
        this._nCurentCountSecond += 1;
        this._nCurCount += 1;
        let nWithCur = this._nCurCount * this._nAddPerOne;
        this.imageParValue.width = nWithCur;
        this.sign_als_check_c();
        this._nLastClickTime = GameLogicProcessingManager_Als.GetCurTime();
    }

    //移动 btn
    private moveBtnTween: Laya.Tween;

    /**倒计时相关的处理 */
    private timeDownView() {
        this._nCurentCountSecond = 0;
        this._nTimeDown -= 1;
        let nTemp = this._nTimeDown;
        nTemp = nTemp < 0 ? 0 : nTemp;
        BitmapLabelUtils.setLabel(this.spTimeDown, nTemp.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
        if (this._nTimeDown < 0) {
            this._bTimeOver = true;
            this.procLgOv_Als();
        }
    }


    /**处理时间回退 */
    private als_sing_sun_count() {
        this._nCurCount -= 1;
        this._nCurCount = this._nCurCount < 0 ? 0 : this._nCurCount;
        let nWithCur = this._nCurCount * this._nAddPerOne;
        // Laya.Tween.to(this.imageParValue, { width: nWithCur }, 700)
        this.imageParValue.width = nWithCur;
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this._bFirst = false;
        this._bAniRunning = false;
        Laya.Tween.clearAll(this.imageHand);
        Laya.timer.clearAll(this);
        MiniManeger_Als.instance.bFlagSpecialView = true;
    }


    private gotoView() {
        //2020.7.13-1-1 1.从第4关后，每关开始游戏都会弹砸金蛋误点。
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {

            if (PlayerDataManager_Als.bGlobEnterGame) {
                ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
            } else {
                if (PlayerDataManager_Als.getInstance().nGotoLevel != 0) {
                    ViewChangeManager_Als.getInstance().gotoLevel(PlayerDataManager_Als.getInstance().nGotoLevel);
                } else if (PlayerDataManager_Als.getInstance().bEnterGameFromGameHome) {
                    ViewChangeManager_Als.getInstance().CurLevelBase.startGame();
                } else {
                    ViewChangeManager_Als.getInstance().goToNextLevel();
                }
            }
        } else {
            ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
        }
    }

    private procLogicOverDown() {
        this.removeSelf();
        MiniManeger_Als.instance.bFlagSpecialView = true;
        //2020.7.13-1-1
        PlayerDataManager_Als.getInstance().bEnterGameFromGameHome = false;
        PlayerDataManager_Als.getInstance().nGotoLevel = 0;
        ViewChangeManager_Als.getInstance().CommonView.visible = true;
    }

    /**手上下动的动画 */
    private openHA_Als() {
        if (!this._bAniRunning) {
            return;
        }
        let yTemp = this.imageHand.y;
        Laya.Tween.clearAll(this.imageHand);
        Laya.Tween.to(this.imageHand, { y: yTemp - 25 }, 300, null, Laya.Handler.create(this, (args) => {
            Laya.Tween.to(this.imageHand, { y: yTemp }, 300, null, Laya.Handler.create(this, (args) => {
                Laya.timer.once(0, this, this.openHA_Als);
            }));
        }));
    }

    /**结束的相关处理 */
    private procLgOv_Als() {
        Laya.timer.clear(this, this.timeDownView);
        if (this._nCurCount >= this._nCountMax) {
            PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Sp, this._nPsAdd);
            TipsManager.getInstance().showDefaultTips("体力+" + this._nPsAdd.toString());
        }
        if (this._bTimeOver) {
            TipsManager.getInstance().showDefaultTips("领取失败");
        }
        this.gotoView();
        this.procLogicOverDown();
    }


    private initUpTimeDown() {
        //点击倒计时
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(9);
        if (stGameConfig) {
            this._nTimeDown = parseInt(stGameConfig.strValue);
        }
        // this._nTimeDown = 2;
        //先要把倒计时显示出来
        BitmapLabelUtils.setLabel(this.spTimeDown, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");

    }

    private initClickCountMax() {
        //点击次数最大值
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(10);
        if (stGameConfig) {
            this._nCountMax = parseInt(stGameConfig.strValue);
        }
    }

    private initPsCount() {
        //增加的体力
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(11);
        if (stGameConfig) {
            this._nPsAdd = parseInt(stGameConfig.strValue);
        }
    }

    private initSubTime() {
        //没有点击就扣次数
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(14);
        if (stGameConfig) {
            this._nTimeOverTemp = parseInt(stGameConfig.strValue);
        }
    }

}