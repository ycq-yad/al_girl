import { LevelManager_Als } from "../../../manager/LevelManager";
import { PlayerDataManager_Als } from "../../../common/GameDataManager";
import GameStateManager_Als from "../../../games/GameStateManager";
import { EnterGameType, GoodsType, MoreGameIndex_Als } from "../../../games/CommonDefine";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";
import ConfigManager_Als from "../../../games/ConfigManager";
import AnimationManager_Als from "../../../manager/AnimationManager";
import Als_SoundManager from "../../../common/SoundManager";
import AddPsView_Als from "../Als_PopView/AddPsView";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";
import { Als_GameData } from "../../../common/GameData";
import WeCatMoreGameItemOne_Als from "../WeCatMoreGameItemOne";
import MoreGameOperReqIndex_Als from "../MoreGameOperReqIndex";
import MoreGameOperRequest_Als from "../MoreGameOperRequest";
import PlatformDY from "../../../../PlatformDY";
import WeCatOperReqItem713_Als from "../WeCatOperReqItem713";
import { LotterySelScene } from "../lottery/LotterySelScene";
import { PopBaseScene } from "../../base/PopBaseScene";
import GameCenterManager_Als from "../../../manager/GameCenterManager";

export default class SuccessfulEntryThreeView_Als extends PopBaseScene {
    public className_key = "SuccessfulEntryThreeView_Als";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    public btNextLevel: Laya.Image;
    public spGlodAdd: Laya.Sprite;
    public btLable: Laya.Sprite;
    public imageRecv: Laya.Box;
    public imageGoodsType: Laya.Image;
    public spCountAddMore: Laya.Sprite;
    public spCost: Laya.Sprite;
    public imageBtShare: Laya.Box;
    public imageBtRestart: Laya.Box;
    public btDouble: Laya.Sprite;
    public spDouble: Laya.Sprite;
    public lableDesc: Laya.Label;
    public imageBtToHome: Laya.Image;
    public imageGoodsTypeUp: Laya.Image;
    public spCostPs: Laya.Sprite;
    public imageShareGameName: Laya.Image;
    private nGlodAddByWathcVideo: number;


    private shareGlodCount: Laya.Sprite;
    private imageShareIcon: Laya.Image;

    private ttGoodsType: Laya.Image;
    private ttSpecial: Laya.Sprite;
    private box_lable: Laya.Box;
    //2020.7.13-4
    private box_nextLevel: Laya.Box;
    private box_wecat: Laya.Box;
    private image_hand: Laya.Image;
    private nBtNextLevel: number = 320;
    private nBtNextLevelSp: number = 100;

    public aniReal: Laya.Skeleton;

    public imageWeCatMoreGame: Laya.Image;
    public panelWeCatMoreGame: Laya.Panel;

    /**一些数据 */
    private nGlodAdd: number;    //通关后增加的金币
    private nGlodRadio: number;  //看视频后增加的倍数

    private bIsRunning: boolean;
    private bRecvAward: boolean;

    private bOpneBox2: boolean;

    constructor() {
        super();
        this.nGlodAdd = 50;
        this.nGlodRadio = 4;
        this.bIsRunning = false;
        this.bRecvAward = false;
        this.bOpneBox2 = false;
        //2020.7.13-4
        this.image_hand = null;
        this.skin = 'game/uiView/SuccessfulEntryThreeView.json';
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        //处理适配推荐高度
        this.grp_center.width = this.width;
        this.grp_center.height = this.height;
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.bIsRunning = false;
        Laya.Tween.clearAll(this.imageBtShare);
        Laya.timer.clearAll(this);
        if (this.aniReal) {
            this.aniReal.stop();
            this.aniReal.removeSelf();
        }
        //2020.7.13-4
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }

    private initDouble() {
        //初始化双倍领奖的按钮
        if (BaseConst.infos.gameInfo.openPsAward && BaseConst.infos.gameInfo.openPsAward == 1) {
            this.spDouble.visible = false;
        } else {
            this.spDouble.visible = true;
        }

    }

    public initMiniGame() {
        //2020.7.13-4
        // if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
        this.spDouble.visible = true;
        // }

        // if (DeviceUtil.isQQMiniGame()) {
        //     if (Math.random() < BaseConst.infos.gameInfo.siginC) {//qq的平台单独使用概率配置
        //         this.spDouble.visible = false;
        //     } else {
        //         this.spDouble.visible = true;
        //     }
        // }

        // if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
        //     MiniManeger_Als.instance.showBoxAd()

        //     if (this.selLotteryScene == null) {
        //         this.selLotteryScene = new LotterySelScene(null);

        //     }
        //     this.box_content.visible = true;
        //     this.box_content.addChild(this.selLotteryScene);
        // }
    }




    private initGlodRadio() {
        //初始化看视频增加的倍数
        let pGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(13);
        if (pGameConfig) {
            this.nGlodRadio = parseInt(pGameConfig.strValue);
            //更新描述
            this.lableDesc.text = pGameConfig.strDesc;
        }
        BitmapLabelUtils.setLabel(this.spCost, this.nGlodRadio.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
    }

    private initGlod() {
        //初始化通关加的金币
        let pGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(12);
        if (pGameConfig) {
            this.nGlodAdd = parseInt(pGameConfig.strValue);
        }
    }




    private box_content: Laya.Box;

    private selLotteryScene: LotterySelScene;


    //2020.7.13-4
    private opReGoNeLvAni_Als() {
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            if (BaseConst.infos.gameInfo.openPsAward == 1) {
                this.box_nextLevel.bottom = this.nBtNextLevelSp;
                MiniManeger_Als.instance.bFlagSpecialView = false;
                MiniManeger_Als.instance.hideBanner();
                //一秒后显示binner
                Laya.timer.once(1000, this, () => {
                    MiniManeger_Als.instance.bFlagSpecialView = true;
                    MiniManeger_Als.instance.showBannerAd();
                    //按钮滑动动制定位置
                    Laya.Tween.to(this.box_nextLevel, { bottom: this.nBtNextLevel }, 500, null);
                })
                return;
            } else {
                this.box_nextLevel.bottom = this.nBtNextLevel;
            }
        }
        MiniManeger_Als.instance.showBannerAd();
    }

    private initTotal() {
        //总数
        let bAddMore = this.nGlodAdd * this.nGlodRadio;
        BitmapLabelUtils.setLabel(this.spCountAddMore, bAddMore.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        if (!this.spDouble.visible) {
            let nReal = this.nGlodAdd * this.nGlodRadio;
            BitmapLabelUtils.setLabel(this.spGlodAdd, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        } else {
            BitmapLabelUtils.setLabel(this.spGlodAdd, this.nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        }
    }



    private initSubPs() {
        //扣除的体力数值
        let nCost = 1;
        let pGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
        if (pGameConfig) {
            nCost = parseInt(pGameConfig.strValue);
        }
        BitmapLabelUtils.setLabel(this.spCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
    }

    private onMousClck_Als(evt: Laya.Event): void {
        Als_SoundManager.getInstance().playEffect("button", 1);
        switch (evt.currentTarget) {
            case this.btLable:
                this.succEnterSanNeLv_Als();
                break
            case this.imageBtToHome:
                this.reGoToHo_Als();
                break;
            case this.imageBtShare:
                this.sucShG_Als();
                break;
            case this.imageBtRestart:
                this.sucsReSt_Als();
                break;
            case this.imageRecv:
                this.sucRecAw_Als();
                break;
            case this.btDouble:
                this.onDouGld_Als();
                break;
            case this.box_nextLevel:
                this.recvAwAfWv_Als();
                break;
        }
    }

    public addEvent() {
        this.btLable.on(Laya.Event.CLICK, this, this.succEnterSanNeLv_Als);
        this.imageBtToHome.on(Laya.Event.CLICK, this, this.reGoToHo_Als);
        this.imageBtShare.on(Laya.Event.CLICK, this, this.sucShG_Als);
        this.imageBtRestart.on(Laya.Event.CLICK, this, this.sucsReSt_Als);
        this.imageRecv.on(Laya.Event.CLICK, this, this.sucRecAw_Als);
        this.btDouble.on(Laya.Event.CLICK, this, this.onDouGld_Als);
        // if (DeviceUtil.isTTMiniGame()) {
        //     this.panelWeCatMoreGame.on(Laya.Event.CLICK, this, this.onShowMoreGame);
        // }
        //2020.7.13-4
        this.box_nextLevel.on(Laya.Event.CLICK, this, this.recvAwAfWv_Als);
        this.registerEvent(this.btLable, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtToHome, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtRestart, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageRecv, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.btDouble, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.box_nextLevel, Laya.Event.CLICK, this.onMousClck_Als, this);
    }


    //2020.7.13-4
    private weCatGotToNextLevel() {
        this.succEnterSanNeLv_Als();
    }



    /**分享 */
    private sucShG_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        let self = this;
        MiniManeger_Als.instance.bFlagDouYin = false;
        if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.isDY) {
            MiniManeger_Als.instance.shareAppMessage({
                sucFun: () => {
                    ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                },
                failFun: () => {
                    ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                }
            });
        } else {
            MiniManeger_Als.instance.shareAppMessage();
        }
    }

    private onDouGld_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        this.spDouble.visible = !this.spDouble.visible;
        if (!this.spDouble.visible) {
            let nReal = this.nGlodAdd * this.nGlodRadio;
            BitmapLabelUtils.setLabel(this.spGlodAdd, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        } else {
            BitmapLabelUtils.setLabel(this.spGlodAdd, this.nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        }
    }

    /**下一关 */
    //2020.7.13-5
    private nCountGoToLevel: number = 0;
    private succEnterSanNeLv_Als() {
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
        } else {
            this.removeEvent();
            //2020.7.13-1-1
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                //2020.7.13-5
                //5、新玩家通关第1关过关，过关页—随机盒子继续游戏—进入下一关。
                if (LevelManager_Als.getInstance().nCurLevel == 1) {
                    this.curLevelOne();
                } else if (LevelManager_Als.getInstance().nCurLevel >= 2) { //6、玩家进入第2关过关后， 过关页—随机盒子—热门推荐盒子页—进入下一关。
                    this.bigOne();
                }

            } else {
                //扣除体力
                PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                ViewChangeManager_Als.getInstance().goToNextLevel();
                //2020.7.13-4
                MiniManeger_Als.instance.bFlagSpecialView = true;
                this.removeSelf();
            }
        }
    }

    /**重新开始 */
    private sucsReSt_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
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
        //重新开始游戏
        ViewChangeManager_Als.getInstance().restartGame(true);
        //2020.7.13-4
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }

    private _isShowBox: boolean = false;
    /**接受奖励 */
    private sucRecAw_Als() {
        let self = this
        Als_SoundManager.getInstance().playEffect("button", 1);
        if (DeviceUtil.isQQMiniGame() && !self._isShowBox && Math.random() < BaseConst.infos.gameInfo.succShowBox) {//qq 开关有开启结算弹起盒子广告
            MiniManeger_Als.instance.showBoxAd(() => {
                self._isShowBox = true;
            });
            return;
        }
        if (this.bRecvAward) {  //体力不足的情况才会领取了奖励还在当前界面
            //领完奖励执行切换到下一关的逻辑
            this.succEnterSanNeLv_Als();
            return;
        }
        if (!this.spDouble.visible) {
            MiniManeger_Als.instance.playViderAd({
                successFun: () => {
                    this.recvAwAfWv_Als();
                }
            });
        } else {
            this.nGlodRadio = 1;
            this.recvAwAfWv_Als();
        }
    }



    /**看视频成功后获得奖励 */
    private recvAwAfWv_Als() {
        this.bRecvAward = true;
        this.fgs_Als();
        //2020.7.13
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            this.nGlodRadio = 1;
        }
        let nGlodAddTemp = this.nGlodAdd * this.nGlodRadio;
        PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, nGlodAddTemp);
        //领完奖励执行切换到下一关的逻辑
        this.succEnterSanNeLv_Als();
    }

    private curLevelOne() {
        if (!this.bRecvAward) {
            Laya.timer.once(1000, this, () => {
                MoreGameOperRequest_Als.bGotoNextGame = true;
                ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                //2020.7.13-4
                MiniManeger_Als.instance.bFlagSpecialView = true;
                this.removeSelf();
            });
        } else {
            MoreGameOperRequest_Als.bGotoNextGame = true;
            ViewManager.getInstance().showView(MoreGameOperRequest_Als);
            //2020.7.13-4
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        }
    }

    private bigOne() {
        MoreGameOperRequest_Als.bGotoNextGame = true;
        MoreGameOperRequest_Als.bEnterHotBox = true;
        ViewManager.getInstance().showView(MoreGameOperRequest_Als);
        //2020.7.13-4
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }


    private goToHome() {
        //进入主页
        ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
        PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
        GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
        LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
        //2020.7.13-4
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }

    /**返回主页 */
    private reGoToHo_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);

        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            if (PlayerDataManager_Als.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                BaseConst.infos.gameInfo.glodegg == 0) {
                MoreGameOperRequest_Als.toHome = true;
                ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                //2020.7.13-4
                MiniManeger_Als.instance.bFlagSpecialView = true;
                this.removeSelf();

            } else {
                this.goToHome();
                //ViewChangeManager.getInstance().restartEnterGameHome();
            }
            return;
        }

        ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
        PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
        GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
        LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
        //2020.7.13-4
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }

    private startSuccessImageBtShareAni() {
        if (!this.bIsRunning) {
            return;
        }
        Laya.timer.clearAll(this.imageRecv);
        AnimationManager_Als.instance.zoomTweena(this.imageRecv, this.imageRecv);
    }

    public async  csk_als(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationManager_Als.instance.showSkeletonAnimation(url, (boomAnimation: Laya.Skeleton) => {
                this.aniReal = boomAnimation;
                this.aniReal.player.playbackRate = 1;
                this.aniReal.autoSize = true;
                this.aniReal.scale(1, 1);
                this.aniReal.play(0, false);
                this.aniReal.x = this.grp_center.width / 2;
                this.aniReal.y = this.grp_center.height / 2;
                this.grp_center.addChild(this.aniReal);
                resolve(boomAnimation)
            }, 0);
        });
    }


    /**飞金币 */
    private fgs_Als() {
        let stPoint = new Laya.Point();
        stPoint.x = this.imageGoodsTypeUp.x;
        stPoint.y = this.imageGoodsTypeUp.y;
        let stBoxParent = this.imageGoodsTypeUp.parent as Laya.Box;
        stPoint = stBoxParent.localToGlobal(stPoint);
        AnimationManager_Als.instance.flayGlod(stPoint.x, stPoint.y, 341, 105);
    }


    /**控制更多游戏的函数 */
    private proceMg_Als() {
        //微信平台
        if (DeviceUtil.isTTMiniGame()) {

        } else if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            if (BaseConst.infos.gameInfo.openalllevel == 1) {
                this.box_wecat.removeChildren();
                this.box_wecat.addChild(GameCenterManager_Als.getInstance().showMoreGameinView_als(true));
            }
        }
    }

    /**头条的特殊界面初始化 */
    private initPlV_Als() {
        if (DeviceUtil.isTTMiniGame()) {
            // this.imageShareGameName.skin = "resource/assets/img/ui/success/failure_word_8.png";
            // this.imageShareIcon.skin = "resource/assets/img/common/succeed_icon_3.png";
            // this.imageShareGameName.y = 15;
            // this.shareGlodCount.visible = true;
            // this.ttGoodsType.visible = true;
            // this.ttSpecial.visible = true;
            /**刷新分享的金币 */
            // let nGlodCount = 50;
            // let stGameConfig = ConfigManager.getInstance().getGameConfigDataByID(18);
            // if(stGameConfig){
            //     nGlodCount = parseInt(stGameConfig.strValue)
            // }
            // BitmapLabelUtils.setLabel(this.shareGlodCount, nGlodCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            this.imageShareGameName.skin = "resource/assets/img/ui/success/failure_word_2.png";
            this.imageShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
            this.shareGlodCount.visible = false;
            this.ttGoodsType.visible = false;
            this.ttSpecial.visible = false;
            this.imageShareGameName.y = 38;
        } else {
            this.imageShareGameName.skin = "resource/assets/img/ui/success/failure_word_2.png";
            this.imageShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
            this.shareGlodCount.visible = false;
            this.ttGoodsType.visible = false;
            this.ttSpecial.visible = false;
            this.imageShareGameName.y = 38;
        }
        //2020.7.13-4
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            this.imageWeCatMoreGame.visible = false;
            this.btNextLevel.visible = false;
            this.imageRecv.visible = false;
            this.imageBtShare.visible = false;
            this.box_nextLevel.visible = true;
            this.spDouble.visible = true;
            this.box_wecat.visible = true;
            this.box_lable.visible = false;
        }
    }

    // /**看视频领奖非金币的动画 */
    // private flayGR_Alt() {
    //     console.log("flayGR_Alt");
    //     let pPoint = new Laya.Point();
    //     pPoint.x = this.ttGoodsType.x;
    //     pPoint.y = this.ttGoodsType.y;
    //     let stParent = this.ttGoodsType.parent as Laya.Image;
    //     pPoint = stParent.localToGlobal(pPoint);
    //     AnimationManager_Als.instance.flayGlod(pPoint.x, pPoint.y, 341, 105);
    // }
    /**初始化一些信息 */
    public initView() {

        ViewChangeManager_Als.getInstance().CommonView.abte_alt();
        this._isShowBox = false;
        MiniManeger_Als.instance.showInterstitialAd();
        this.opReGoNeLvAni_Als();

        //2020.7.13-5
        this.nCountGoToLevel = 0;
        this.bOpneBox2 = false;
        this.proceMg_Als();
        MiniManeger_Als.instance.onShareVideoSuccess = false;
        MiniManeger_Als.instance.StopVideo();
        this.initPlV_Als();
        Als_SoundManager.getInstance().playEffect("win", 1);
        this.bRecvAward = false;
        if (!this.aniReal) {
            this.csk_als("resource/assets/img/ani/celebrate/celebrate.sk");
        } else {
            this.aniReal.play(0, false);
            this.grp_center.addChild(this.aniReal);
        }

        this.initDouble();

        this.bIsRunning = true;
        this.initGlod();

        //BitmapLabelUtils.setLabel(this.spGlodAdd, this.nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        this.initGlodRadio();

        this.initSubPs();
        this.initTotal();

        /**刷新分享的金币 */
        // let nGlodCount = 50;
        // stGameConfig = ConfigManager.getInstance().getGameConfigDataByID(18);
        // if(stGameConfig){
        //     nGlodCount = parseInt(stGameConfig.strValue)
        // }
        // BitmapLabelUtils.setLabel(this.shareGlodCount, nGlodCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        //开启缩放动画
        this.startSuccessImageBtShareAni();

    }

}