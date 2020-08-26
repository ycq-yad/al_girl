import ConfigManager_Als from "../../../../games/ConfigManager";
import { PlayerDataManager_Als } from "../../../../common/GameDataManager";
import { GoodsType } from "../../../../games/CommonDefine";
import FailEntryTwoView_Als from "./FailEntryTwoView";
import ViewChangeManager_Als from "../../../../games/ViewChangeManager";
import AnimationManager_Als from "../../../../manager/AnimationManager";
import Als_SoundManager from "../../../../common/SoundManager";
import { MiniManeger_Als } from "../../../../minigame/MiniManeger";
import MoreGameOperRequest_Als from "../../MoreGameOperRequest";
import MoreGameOperRequestTwo_Als from "../../MoreGameOperRequestTwo";
import WeCatOperReqItem713_Als from "../../WeCatOperReqItem713";
import PlatformDY from "../../../../../PlatformDY";
import { Als_GameData } from "../../../../common/GameData";
import MoreGameView_Als from "../..//moregame/MoreGameView";
import { PopBaseScene } from "../../../base/PopBaseScene";
import GameCenterManager_Als from "../../../../manager/GameCenterManager";

export default class FailEntryOneView_Als extends PopBaseScene {
    public className_key = "FailEntryOneView_Als";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
    public imageBtSign: Laya.Image;

    public imageRecv: Laya.Image;
    public imageGoodsType: Laya.Image;
    public spGlod: Laya.Image;
    public boxAni: Laya.Box;
    public aniReal: Laya.Skeleton;
    public img_back: Laya.Image;

    //2020.7.13-8
    public btLable: Laya.Image;
    public box_wecat: Laya.Image;
    private _nBtNextLevel: number = 320;
    private _nBtNextLevelSp: number = 100;
    private image_hand: Laya.Image;

    /**数据 */
    private nGlodCost: number;

    private bFlag: boolean;

    constructor() {
        super();
        this.nGlodCost = 200;
        this.bFlag = false;
        this.skin = "game/uiView/FailEntryOneView.json";
    }

    protected childrenCreated(): void {
        super.childrenCreated();

    }

    public initView() {
        MiniManeger_Als.instance.showInterstitialAd();
        MiniManeger_Als.instance.bFlagSpecialView = false;
        this.bFlag = false;
        this.refreshL_Als();
        MiniManeger_Als.instance.StopVideo();
        // this.playFailAni();
        //刷新金币数量
        this.refreshRBG_Als();

        this.img_back.visible = false;
        //2020.7.13-8
        this.initVFoR_Als();
        this.proceMG_Als();
        Laya.timer.clearAll(this.imageBtSign)
        AnimationManager_Als.instance.zoomTween(this.imageBtSign, this.imageBtSign)
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        if (this.aniReal) {
            this.aniReal.stop();
        }

    }

    // private playFailAni() {
    //     if (!this.aniReal) {
    //         this.createSk_Als("resource/assets/img/ani/failure/failure.sk");
    //     } else {
    //         this.aniReal.play(0, true);
    //     }
    // }



    /**
    * 点击返回
    */
    private onBack_Alt(): void {
        MoreGameOperRequestTwo_Als.bOperFlag = true;
        MoreGameOperRequestTwo_Als.bSuccess = false;
        ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
        //2020.7.13-8
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }

    private onClick(evt: Laya.Event) {
        Als_SoundManager.getInstance().playEffect("button", 1);        
        switch (evt.currentTarget) {
            case this.imageRecv:
                this.onCGR_Als();
                break;
            case this.imageBtSign:
                this.onWWTR_Als();

                break;
            case this.btLable:
                this.onNT_Als();

                break;
            case this.img_back:
                this.onBack_Alt();

                break;
        }
    }

    public addEvent() {
        this.registerEvent(this.imageRecv, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btLable, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.img_back, Laya.Event.CLICK, this.onClick, this);
    }



    private onVo_Als(bSuccess: boolean, self: any) {
        if (bSuccess) {
            self.onFailRestartGame();
        }
        self.imageBtSign.on(Laya.Event.CLICK, self, self.onWWTR_Als);
        if (ViewChangeManager_Als.getInstance().CurLevelBase) {
            ViewChangeManager_Als.getInstance().CurLevelBase.levelOnShow();
        }
    }

    /**看视频复活 */
    private onWWTR_Als() {
        
        if (ViewChangeManager_Als.getInstance().CurLevelBase) {
            ViewChangeManager_Als.getInstance().CurLevelBase.levelOnHide();
        }
        let self = this;
        MiniManeger_Als.instance.playViderAd({
            successFun: () => {
                Laya.timer.once(100, self, () => {
                    self.onVo_Als(true, self);
                })
            }
        });

    }



    /**花费金币复活 */
    private onCGR_Als() {
        //检测金币是否足够
        let b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Glod, this.nGlodCost);
        if (!b) {
            return;
        }
        //花费金币
        PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Glod, this.nGlodCost);
        //开启游戏
        this.onFRG_Als();
    }

    private onFRG_Als() {
        MiniManeger_Als.instance.hideBanner();
        ViewChangeManager_Als.getInstance().restartGame(false);
        //2020.7.13-8
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }



    /**刷新金币复活的信息 */
    private refreshRBG_Als() {
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(6);
        if (stGameConfig) {
            this.nGlodCost = parseInt(stGameConfig.strValue);
        }
        //检测金币是否足够
        let b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Glod, this.nGlodCost);
        if (!b) {
            this.imageRecv.visible = false;
            return;
        }
        this.imageRecv.visible = true;
        BitmapLabelUtils.setLabel(this.spGlod, this.nGlodCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
    }

    /**不了谢谢 */
    private onNT_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        //2020.7.13-8
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            MoreGameView_Als.bSuccess = false;
            ViewManager.getInstance().showView(MoreGameView_Als);
        } else {
            //打开失败界面2
            ViewManager.getInstance().showView(FailEntryTwoView_Als);
        }
        //2020.7.13-8
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }



    //2020.7.13-8
    private initVFoR_Als() {
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            this.someChange();
            if (BaseConst.infos.gameInfo.openPsAward == 1) {
                this.openClick_Als();
                return;
            } else {
                this.btLable.bottom = this._nBtNextLevel;
            }
        } else {
            MiniManeger_Als.instance.showBannerAd();
        }
    }

    /**不了谢谢延迟显示 */
    private refreshL_Als() {
        this.btLable.visible = false;
        //2020.7.13-8
        if (!MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            Laya.timer.once(3000, this, () => {
                this.btLable.visible = true;
            });
        } else {
            //两秒后显示出来
            Laya.timer.once(2000, this, () => {
                this.btLable.visible = true;
            })
        }
    }

    private someChange() {
        this.boxAni.visible = false;
        this.box_wecat.visible = true;
        if (this.imageRecv.visible) {
            this.imageBtSign.left = 30;
            this.imageRecv.bottom = this.imageBtSign.bottom;
            this.imageRecv.right = 30
        }
    }

    private openClick_Als() {
        this.btLable.bottom = this._nBtNextLevelSp;
        MiniManeger_Als.instance.bFlagSpecialView = false;
        MiniManeger_Als.instance.hideBanner();
        //一秒后显示binner
        Laya.timer.once(1000, this, () => {
            MiniManeger_Als.instance.bFlagSpecialView = true;
            MiniManeger_Als.instance.showBannerAd();
            //按钮滑动动制定位置
            Laya.Tween.to(this.btLable, { bottom: this._nBtNextLevel }, 500, null);
        })
    }

    /**控制更多游戏的函数 */
    private proceMG_Als() {
        //2020.7.13-8
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            if (BaseConst.infos.gameInfo.openalllevel == 1) {
                this.box_wecat.removeChildren();
                this.box_wecat.addChild(GameCenterManager_Als.getInstance().showMoreGameinView_als(true));
            }
        }
    }

}