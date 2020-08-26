import ViewChangeManager_Als from "../../../../games/ViewChangeManager";
import GameStateManager_Als from "../../../../games/GameStateManager";
import { EnterGameType, GoodsType } from "../../../../games/CommonDefine";
import { LevelManager_Als } from "../../../../manager/LevelManager";
import { PlayerDataManager_Als } from "../../../../common/GameDataManager";
import ConfigManager_Als from "../../../../games/ConfigManager";
import Als_SoundManager from "../../../../common/SoundManager";
import { MiniManeger_Als } from "../../../../minigame/MiniManeger";
import AnimationManager_Als from "../../../../manager/AnimationManager";
import GameEvent_Als from "../../../../games/GameEvent";
import { Als_GameData } from "../../../../common/GameData";
import WeCatMoreGameItemOne_Als from "../../WeCatMoreGameItemOne";
import AddPsView_Als from "../../Als_PopView/AddPsView";
import MiniEventConst_Als from "../../../../minigame/MiniEventConst";
import PlatformDY from "../../../../../PlatformDY";
import MoreGameOperRequestTwo_Als from "../../MoreGameOperRequestTwo";
import WeCatOperReqItem713_Als from "../../WeCatOperReqItem713";
import MoreGameOperRequest_Als from "../../MoreGameOperRequest";
import { LotterySelScene } from "../../lottery/LotterySelScene";
import { PopBaseScene } from "../../../base/PopBaseScene";
import GameCenterManager_Als from "../../../../manager/GameCenterManager";

export default class FailEntryTwoView_Als extends PopBaseScene {
    public className_key = "FailEntryTwoView_Als";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    private box_content: Laya.Box;

    public imageRecv: Laya.Image;
    public imageGoodsType: Laya.Image;
    public btLable: Laya.Label;
    public imageBtRestart: Laya.Image;
    public imageBtShare: Laya.Image;
    public imageBtToHome: Laya.Image;
    public spCount: Laya.Sprite;
    public spCost: Laya.Sprite;
    public imageShareName: Laya.Image;

    private nGlodAddByWathcVideo: number;
    private bIsRunning: boolean;
    private shareGlodCount: Laya.Sprite;
    private imageShareIcon: Laya.Image;

    private ttGoodsType: Laya.Image;
    private ttSpecial: Laya.Sprite;

    public imageWeCatMoreGame: Laya.Image;
    public panelWeCatMoreGame: Laya.Panel;


    private bRecvAward: boolean;
    private bShareAward: boolean;
    private bOpneBox2: boolean;


    private selLotteryScene: LotterySelScene;
    constructor() {
        super();
        this.nGlodAddByWathcVideo = 200;
        this.bIsRunning = false;
        this.bRecvAward = false;
        this.bShareAward = false;
        this.bOpneBox2 = false;
        this.skin = 'game/uiView/FailEntryTwoView.json';
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        //处理适配推荐高度
        this.grp_center.width = this.width;
        this.grp_center.height = this.height;
        this.bOpneBox2 = false;
    }

    public initMiniGame() {

    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.bIsRunning = false;
        this.bRecvAward = false;
        Laya.Tween.clearAll(this.imageBtShare);
        Laya.timer.clearAll(this);

        EventMgr.getInstance().removeEvent(GameEvent_Als.EVENT_FLAY_GLOD, this, this.flayGFS_Als);
        // if (DeviceUtil.isTTMiniGame()) {
        //     this.panelWeCatMoreGame.off(Laya.Event.CLICK, this, this.onShowMoreGame);
        // }
    }

    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.imageBtRestart:
                this.failEntryTReSG_Als();
                break;
            case this.imageBtToHome:
                this.returnTGH_Als();
                break;
            case this.imageBtShare:
                this.failSG_Als();

                break;
            case this.imageRecv:
                this.onWVRA_Als();
                break;
        }
    }

    private shareDouYin() {
        let self = this;
        MiniManeger_Als.instance.bFlagDouYin = true;
        MiniManeger_Als.instance.shareAppMessage({
            sucFun: () => {
                console.log("发布录制视频成功");
                self.addEvent();
                self.bShareAward = true;
                TipsManager.getInstance().showDefaultTips('分享成功');
                if (MiniManeger_Als.instance.onShareVideoSuccess) {
                    return;
                }
                let nGlodCount = 50;
                let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(18);
                if (stGameConfig) {
                    nGlodCount = parseInt(stGameConfig.strValue);
                }
                PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, nGlodCount);
                MiniManeger_Als.instance.onShareVideoSuccess = true;
                Laya.timer.once(1000, self, () => {
                    self.flayGFS_Als();
                })

                //EventMgr.getInstance().sendEvent(GameEvent.EVENT_FLAY_GLOD);
            },
            failFun: () => {
                self.addEvent();
                console.log("发布录制视频失败");
                TipsManager.getInstance().showDefaultTips('分享失败');
            }
        });
    }

    public addEvent() {
        this.registerEvent(this.imageBtRestart, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.imageBtToHome, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.imageRecv, Laya.Event.CLICK, this.onClick, this);
    }



    private shareTT() {
        let self = this;
        MiniManeger_Als.instance.onShareVideo({
            successFun: () => {
                console.log("发布录制视频成功");
                self.addEvent();
                self.bShareAward = true;
                if (MiniManeger_Als.instance.onShareVideoSuccess) {
                    return;
                }
                let nGlodCount = 50;
                let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(18);
                if (stGameConfig) {
                    nGlodCount = parseInt(stGameConfig.strValue);
                }
                PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, nGlodCount);
                MiniManeger_Als.instance.onShareVideoSuccess = true;
                self.flayGFS_Als();
            },
            failFun: () => {
                console.log("发布录制视频失败");
                self.addEvent();
            }
        });
    }

    /**分享游戏 */
    private failSG_Als() {
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAMEOVER_SHARE, 1);
        Als_SoundManager.getInstance().playEffect("button", 1);
        let self = this;

        if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.isDY) {
            this.shareWeCat();
        } else {
            MiniManeger_Als.instance.shareAppMessage();
        }

    }

    private shareWeCat() {
        MiniManeger_Als.instance.shareAppMessage({
            sucFun: () => {
                ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
            },
            failFun: () => {
                ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
            }
        });
    }



    private failEntry_end_Als() {
        let nSpCost = 1;
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
        if (stGameConfig) {
            nSpCost = parseInt(stGameConfig.strValue);
        }
        //2020.7.13-9
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            MoreGameOperRequest_Als.bReStartGame = true;
            MoreGameOperRequest_Als.bEnterHotBox = true;
            ViewManager.getInstance().showView(MoreGameOperRequest_Als);
        } else {
            //扣除体力
            PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            //重新开始游戏
            ViewChangeManager_Als.getInstance().restartGame(true);
        }
        //2020.7.13-9
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }

    /**返回主页 */
    private returnTGH_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        //PlayerDataManager.getInstance().setCurLevel(PlayerDataManager.getInstance().getCurLevelMax());
        //2020.6.1 用户点击左上角【主页】按钮，先弹盒子2。
        if (BaseConst.infos.gameInfo.isDY) {
            if (PlayerDataManager_Als.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                BaseConst.infos.gameInfo.glodegg == 0) {
                MoreGameOperRequestTwo_Als.toHome = true;
                ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
            } else {
                GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                ViewChangeManager_Als.getInstance().CurLevelBase.returnToGameHome();
                //ViewChangeManager.getInstance().restartEnterGameHome();
            }
        } else {
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
            ViewChangeManager_Als.getInstance().CurLevelBase.returnToGameHome();
        }
        //2020.7.13-9
        MiniManeger_Als.instance.bFlagSpecialView = true;
        this.removeSelf();
    }

    /**开始游戏 */
    private failEntryTReSG_Als() {
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAMEOVER_AGIN, 1);
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
        this.failEntry_end_Als();
    }



    // /**初始话pinnel***/
    // private initPanel() {
    //     if (!DeviceUtil.isWXMiniGame()) {
    //         this.panelWeCatMoreGame.vScrollBarSkin = "";
    //         this.panelWeCatMoreGame.elasticEnabled = true;
    //         this.panelWeCatMoreGame.vScrollBar.elasticDistance = 200;
    //         this.panelWeCatMoreGame.vScrollBar.elasticBackTime = 100;
    //     }
    // }

    public refreshUIData() {
        //刷新视频领取奖励的数值
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(7);
        if (stGameConfig) {
            this.nGlodAddByWathcVideo = parseInt(stGameConfig.strValue);
        }
        BitmapLabelUtils.setLabel(this.spCount, this.nGlodAddByWathcVideo.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        //扣除的体力数值
        let nCost = 1;
        stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
        if (stGameConfig) {
            nCost = parseInt(stGameConfig.strValue);
        }
        BitmapLabelUtils.setLabel(this.spCost, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
    }

    private startbtShareAni_Als() {
        //2020.7.13-9
        if (!this.bIsRunning || MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            return;
        }
        AnimationManager_Als.instance.zoomTweena(this.imageBtShare, this.imageBtShare);
    }

    /**刷新界面 */
    public initView() {

        //MiniManeger.instance.showBannerAd();
        this.bOpneBox2 = false;
        ViewChangeManager_Als.getInstance().CommonView.abte_alt();
        MiniManeger_Als.instance.showInterstitialAd();
        MiniManeger_Als.instance.onShareVideoSuccess = false;
        this.initPlV_Als();
        //2020.7.13-9
        this.initVFOP_Als();
        this.proceMG_Als();
        this.bIsRunning = true;
        this.bRecvAward = false;
        this.bShareAward = false;
        this.refreshUIData();
        //开启放大缩小的动画
        this.startbtShareAni_Als();
        //this.btLable.on(Laya.Event.CLICK, this, this.failSharGame);
        EventMgr.getInstance().addEvent(GameEvent_Als.EVENT_FLAY_GLOD, this, this.flayGFS_Als);

    }

    private addGDRel_Als() {
        this.bRecvAward = true;
        //增加金币
        PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, this.nGlodAddByWathcVideo);
        this.flayGR_Als();
    }

    private onWVRA_Als() {
        if (this.bRecvAward) {
            TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
            return;
        }
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAMEOVER_GET, 1);
        MiniManeger_Als.instance.playViderAd({
            successFun: () => {
                this.addGDRel_Als();
                this.imageRecv.on(Laya.Event.CLICK, this, this.onWVRA_Als);
            }
        });
    }



    /**看视频领奖非金币的动画 */
    private flayGR_Als() {
        console.log("flayGlodRecv");
        let pPoint = new Laya.Point();
        pPoint.x = this.imageGoodsType.x;
        pPoint.y = this.imageGoodsType.y;
        let stParent = this.imageGoodsType.parent as Laya.Image;
        pPoint = stParent.localToGlobal(pPoint);
        AnimationManager_Als.instance.flayGlod(pPoint.x, pPoint.y, 341, 105);
    }

    /**头条的特殊界面初始化 */
    private initPlV_Als() {

        this.imageShareName.skin = "resource/assets/img/ui/success/failure_word_2.png";
        this.imageShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
        this.shareGlodCount.visible = false;
        this.ttGoodsType.visible = false;
        this.ttSpecial.visible = false;
        this.imageShareName.y = 38;
    }

    /*分享游戏飞金币的动画 */
    private flayGFS_Als() {
        console.log("flayGlodFileShare");
        let pPoint = new Laya.Point();
        pPoint.x = this.ttGoodsType.x;
        pPoint.y = this.ttGoodsType.y;
        let stParent = this.ttGoodsType.parent as Laya.Image;
        pPoint = stParent.localToGlobal(pPoint);
        AnimationManager_Als.instance.flayGlod(pPoint.x, pPoint.y, 341, 105);
        console.log("pPoint.x = ", pPoint.x, "pPoint.y = ", pPoint.y);
    }



    //2020.7.13-9
    private box_wecat: Laya.Box;
    private nBtNextLevel: number = 300;
    private nBtNextLevelSp: number = 100;
    private initVFOP_Als() {
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            this.refreshWeCatData();
            if (BaseConst.infos.gameInfo.openPsAward == 1) {
                this.imageBtRestart.bottom = this.nBtNextLevelSp;
                MiniManeger_Als.instance.bFlagSpecialView = false;
                MiniManeger_Als.instance.hideBanner();
                //一秒后显示binner
                Laya.timer.once(1000, this, () => {
                    MiniManeger_Als.instance.bFlagSpecialView = true;
                    MiniManeger_Als.instance.showBannerAd();
                    //按钮滑动动制定位置
                    Laya.Tween.to(this.imageBtRestart, { bottom: this.nBtNextLevel }, 500, null);
                })
                return;
            } else {
                this.imageBtRestart.bottom = this.nBtNextLevel;
            }
        } else {
            MiniManeger_Als.instance.showBannerAd();
        }
    }

    /**控制更多游戏的函数 */
    private proceMG_Als() {

        if (BaseConst.infos.gameInfo.openalllevel == 1) {
            this.box_wecat.removeChildren();
            this.box_wecat.addChild(GameCenterManager_Als.getInstance().showMoreGameinView_als(true));
        }

    }



    private refreshWeCatData() {
        this.imageBtShare.scaleX = 0.6;
        this.imageBtShare.scaleY = 0.6;
        this.imageBtShare.bottom = 470;
        this.imageBtShare.left = 100;
        this.imageRecv.scaleX = 0.6;
        this.imageRecv.scaleY = 0.6;
        this.imageRecv.right = 100;
        this.imageRecv.bottom = 470;
        this.imageBtRestart.width = 370;
        this.imageBtRestart.height = 125;
        this.box_wecat.visible = true;
    }
}