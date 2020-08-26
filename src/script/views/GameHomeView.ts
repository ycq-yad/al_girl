import ViewChangeManager_Als from "../games/ViewChangeManager";
import { PlayerDataManager_Als } from "../common/GameDataManager";
import ConfigManager_Als from "../games/ConfigManager";
import GameEvent_Als from "../games/GameEvent";
import { GoodsType } from "../games/CommonDefine";
import Als_SoundManager from "../common/SoundManager";
import InviteView_Als from "./game/invite/InviteView";
import { MiniManeger_Als } from "../minigame/MiniManeger";

import { Als_GameData } from "../common/GameData";
import WeCatMoreGameItemTwo_Als from "./game/WeCatMoreGameItemTwo";
import WeCatMoreGameView_Als from "./game/WeCatMoreGameView";
import MoreGameOperRequest_Als from "./game/MoreGameOperRequest";
import MiniEventConst_Als from "../minigame/MiniEventConst";
import MoreGameOperRequestTwo_Als from "./game/MoreGameOperRequestTwo";

import MoreGameView_Als from "./game/moregame/MoreGameView";
import { LotteryScene } from "./game/lottery/LotteryScene";
import GuessLike_Als from "./game/GuessLike";
import AddPsView_Als from "./game/Als_PopView/AddPsView";
import { LevelBase_Als } from "./game/level/LevelBase";
import LevelView_Als from "./game/Als_PopView/LevelView/LevelView";
import SignView_Als from "./game/Als_PopView/SignView";
import { GameManager_Als } from "../manager/GameManager";
import { BasePopScene } from "./base/BasePopScene";
import { BaseUIScene } from "./base/BaseUIScene";


export default class GameHomeView_Als extends BaseUIScene {
    className_key = "GameHomeView";

    public spNum: Laya.Sprite;
    public imageSpFull: Laya.Image;
    public imageBtAttSp: Laya.Image;
    public glodNum: Laya.Sprite;
    public imageBtGoldAdd: Laya.Image;
    public imageBtStartGame: Laya.Image;
    public imageBtFreeSkin: Laya.Image;
    public imageFreeSkin: Laya.Image;
    public imageBtShare: Laya.Image;
    public imageBtChoseLevel: Laya.Image;
    public imageBtSign: Laya.Image;
    public imageBtInvital: Laya.Image;
    public boxLevel: Laya.Box;
    public spLevelNum: Laya.Sprite;
    public stLableTime: Laya.Label;
    public boxFun: Laya.Box;
    public btn_more: Laya.Sprite;
    public imageWeCatMoreGame: Laya.Image;
    public more_games: Laya.Sprite;
    public back_btn: Laya.Sprite;

    //2020.7.13-2
    public imageRed: Laya.Image;

    /**数据控制 */
    private bIsRunning: boolean;
    private bWeCatShow: boolean;


    private btn_lottery: Laya.Button;

    private btn_colorSign: Laya.Button;

    private guessLike: GuessLike_Als;//推广位

    constructor() {
        super();
        this.skin = "game/GameHomeView.json";
        this.bIsRunning = false;
        this.bWeCatShow = false;
    }
    protected childrenCreated(): void {
        super.childrenCreated();
        this.initMiniGame();
    }

    public onRemoved() {
        this.bIsRunning = false;
        super.onRemoved();
        this.removeEvent();
        Laya.Tween.clearAll(this.imageBtStartGame);

    }

    public initMiniGame() {
        this.btn_more.visible = false;
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            this.btn_more.visible = true;
            this.more_games.visible = this.back_btn.visible = false;
        }
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            this.imageWeCatMoreGame.visible = true;
            this.more_games.visible = true;
            //this.back_btn.visible = true;
            //(this.getChildByName("imageHead") as Laya.Image).skin = "resource/assets/preloading/loading_logo_wx.png";
            (this.getChildByName("imageHead") as Laya.Image).visible = false;
        }

        let self = this;
        if (!self.guessLike && MiniManeger_Als.instance.isWxMiniGameForOperReq() && BaseConst.infos.gameInfo.openPsAward == 1) {//微信需要增加滑动推荐
            MiniManeger_Als.instance.createGuessLike(self).then((guessLike) => {
                if (!guessLike) {
                    return;
                }
                self.guessLike = guessLike;
                self.guessLike.x = (Laya.stage.width - self.guessLike.width) / 2;
                self.guessLike.y = 300;
            });
        }
    }
    private bEnterGameHomeNotNewPlayer: boolean = false;

    onAddStage(): void {

        this.initView();
        //this.addEvent();
        //MiniManeger.instance.showInterstitialAd();
        //this.imageWeCatMoreGame.visible = true;
        //if(!this.bEnterGameHomeNotNewPlayer){
        ViewChangeManager_Als.getInstance().restartEnterGameHome();
        //this.bEnterGameHomeNotNewPlayer = true;
        //}
    }

   
    private onColorSign_als() {
        MiniManeger_Als.instance.addColorSign({
            success: (res) => {
                console.log(res);
                this.btn_colorSign.visible = false;

            }
        })
    }

    private onLottery_als() {
        //Als_SoundManager.getInstance().playEffect("button", 1);
        ViewChangeManager_Als.getInstance().showBufferLoadingView();
        ResUtil.getIntance().loadGroups(["lottery"], async () => {
            ViewManager.getInstance().showView(LotteryScene);
            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
        });
    }
    public addEvent() {
        // this.btn_lottery.on(Laya.Event.CLICK, this, this.onLottery);
        // this.btn_colorSign.on(Laya.Event.CLICK, this, this.onColorSign);
        // this.imageBtStartGame.on(Laya.Event.CLICK, this, this.gameHomeStartGame);
        // this.btn_more.on(Laya.Event.CLICK, this, this.onMoreGame);
        // this.imageBtChoseLevel.on(Laya.Event.CLICK, this, this.openLevelView);
        // this.imageBtSign.on(Laya.Event.CLICK, this, this.openSignView);
        // this.imageBtShare.on(Laya.Event.CLICK, this, this.onGameHomeShare);
        // this.imageBtInvital.on(Laya.Event.CLICK, this, this.onInvite);
        // //this.imageBtAttSp.on(Laya.Event.CLICK,this,this.openAddSpAddSp);
        // // this.imageBtFreeSkin.on(Laya.Event.CLICK, this, this.onGetFreeSkin);
        // this.imageWeCatMoreGame.on(Laya.Event.CLICK, this, this.weCatViewOper);
        // this.more_games.on(Laya.Event.CLICK, this, this.wxShowMoreGame);
        // this.back_btn.on(Laya.Event.CLICK, this, this.wxShowMoreGame);

        this.registerEvent(this.btn_lottery, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.btn_colorSign, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtStartGame, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.btn_more, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtChoseLevel, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageBtInvital, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.imageWeCatMoreGame, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.more_games, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.back_btn, Laya.Event.CLICK, this.onMousClck_Als, this);
    }

    private onMousClck_Als(evt: Laya.Event): void {
        Als_SoundManager.getInstance().playEffect("button", 1);
        switch (evt.currentTarget) {
            case this.btn_lottery:
                this.onLottery_als();
                break
            case this.btn_colorSign:
                this.onColorSign_als();
                break;
            case this.imageBtStartGame:
                this.gameHomeStartGame_als();
                break;
            case this.btn_more:
                this.onMoreGame_als();
                break;
            case this.imageBtChoseLevel:
                this.openLevelView_als();
                break;
            case this.imageBtSign:
                this.openSignView_als();
                break;
            case this.imageBtShare:
                this.onGameHomeShare_als();
                break;
            case this.imageBtInvital:
                this.onInvite_als();
                break;
            case this.imageWeCatMoreGame:
                this.weCatViewOper_als();
                break;
            case this.more_games:
                this.wxShowMoreGame_als();
                break;
            case this.back_btn:
                this.wxShowMoreGame_als();
                break;
        }
    }

    private onMoreGame_als(): void {
        // if (DeviceUtil.isQQMiniGame()) {
        //     MiniManeger_Als.instance.showBoxAd();
        // } else if (DeviceUtil.isTTMiniGame()) {
        //     MiniManeger_Als.instance.showMoreGamesModal();
        // }
    }

    /**
     * 显示更多游戏
     */
    private wxShowMoreGame_als(): void {
        ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
    }


    /**开始游戏 */
    private gameHomeStartGame_als() {
        //Als_SoundManager.getInstance().playEffect("button", 1);
        //ViewChangeManager.getInstance().getCommonView().removeSelf();
        let nSpCost = 1;
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
        if (stGameConfig) {
            nSpCost = parseInt(stGameConfig.strValue);
        }
        //检测体力是否足够
        let b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
        if (!b) {
            GameManager_Als.instance.powerIsEnough();
            return;
        }
        //扣除体力
        PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);

        //为了头条的提审 隐藏binner可能会有延迟 
        if (DeviceUtil.isTTMiniGame()) {
            MiniManeger_Als.instance.hideBanner();
        }
        //开始游戏
        //2020.7.13-2-4
        // if (MiniManeger.instance.isWxMiniGameForOperReq()
        //     && PlayerDataManager.getInstance().isSecondEnterGame()
        //     && BaseConst.infos.gameInfo.openPsAward == 1) {
        //     this.wxOper71324();
        // } else {
        //2020.7.13-1-1
        this.enterOper();
        //}
        this.removeSelf();
    }

    //2020.7.13-1-1
    private enterOper() {
        //2020.7.13-1-1  1.从第4关后，每关开始游戏都会弹砸金蛋误点。
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()
            && PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel
            && BaseConst.infos.gameInfo.openPsAward == 1) {
            // PlayerDataManager.getInstance().bEnterGameFromGameHome = true;
            // ViewManager.getInstance().showView(SuccessfulEntryOneView);
            ViewChangeManager_Als.getInstance().CurLevelBase.startGame();
        } else {
            ViewChangeManager_Als.getInstance().CurLevelBase.startGame();
        }
    }

    //2020.7.13-2-4
    // private wxOper71324() {
    //     if (!MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
    //         return;
    //     }
    //     if (!PlayerDataManager_Als.getInstance().isSecondEnterGame()) {
    //         return;
    //     }
    //     //删除事件
    //     this.removeEvent();
    //     MiniManeger_Als.instance.playViderAd({
    //         successFun: () => {
    //             this.enterOper();
    //         },
    //         failFun: () => {
    //             this.enterOper();
    //         },
    //         errorFun: () => {
    //             this.enterOper();
    //         }
    //     });
    // }


    /**初始化界面 */
    public initView() {
        MiniManeger_Als.instance.showBannerAd();
        this.bIsRunning = true;
        this.startGameAni_als();
        this.PlInitView_als();
        this.showSignView_als();
        BitmapLabelUtils.setLabel(this.spLevelNum, PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel().toString(), "resource/assets/img/ui/gamehome/maininterface_number1/maininterface_number1_", 0, ".png", "center");
        // this.addChild(ViewChangeManager.getInstance().getCommonView());

        if (DeviceUtil.isQQMiniGame()) {
            this.btn_lottery.visible = true;
            let flag = MiniManeger_Als.instance.isColorSignExistSync();
            if (!flag) {//可以显示
                this.btn_colorSign.visible = true;
            } else {//不可以显示
                this.btn_colorSign.visible = false;

            }
        }
        if (BaseConst.infos.gameInfo.openPsAward == 0) {
            this.btn_lottery.visible = false;
        }
    }

     /**打开签到界面 */
     private openSignView_als() {
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_SIGIN, 1);
        //Als_SoundManager.getInstance().playEffect("button", 1);
        ViewChangeManager_Als.getInstance().showBufferLoadingView();
        ResUtil.getIntance().loadGroups(["sign"], async () => {
            ViewManager.getInstance().showView(SignView_Als);
            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
        });


        // ViewManager.getInstance().showView(MoreGameOperRequest);
    }

    /**打开选关界面 */
    private openLevelView_als() {
        // //测试---------------
        // ViewChangeManager.getInstance().showBufferLoadingView();
        // ViewChangeManager.getInstance().hideCommonView();
        // ResUtil.getIntance().loadGroups(["moregame"], async () => {
        //     ViewManager.getInstance().showView(MoreGameView);
        //     ViewChangeManager.getInstance().hideBufferLoadingView();
        // });  
        // return;
        // //测试---------------


        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_LEVEL, 1);
        Als_SoundManager.getInstance().playEffect("button", 1);
        ViewChangeManager_Als.getInstance().showBufferLoadingView();
        ResUtil.getIntance().loadGroups(["levelview"], async () => {
            LevelView_Als.pHomeView = this;
            ViewManager.getInstance().showView(LevelView_Als);
            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
        });

        // ViewManager.getInstance().showView(SuccessfulEntryThreeView);
    }

   

    

    private onInvite_als() {
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_INVATE, 1);
        //Als_SoundManager.getInstance().playEffect("button", 1);
        ViewChangeManager_Als.getInstance().showBufferLoadingView();
        ResUtil.getIntance().loadGroups(["invite"], async () => {
            ViewManager.getInstance().showView(InviteView_Als);
            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
        });
    }

    /**分享 */
    private onGameHomeShare_als() {
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_SHARE, 1);
       // Als_SoundManager.getInstance().playEffect("button", 1);
        MiniManeger_Als.instance.bFlagDouYin = false;
        MiniManeger_Als.instance.shareAppMessage();
        // if (DeviceUtil.isWXMiniGame()) {
        //     ViewManager.getInstance().showView(MoreGameOperRequest);
        // }

        // MiniManeger.instance.shareAppMessage({
        //     sucFun: () => {
        //         console.log("分享成功");
        //         TipsManager.getInstance().showDefaultTips('分享成功');
        //     },
        //     failFun: () => {
        //         console.log("分享失败");
        //         TipsManager.getInstance().showDefaultTips('分享失败');
        //     }
        // });
        //ViewManager.getInstance().showView(SuccessfulEntryOneView);
    }

    private startGameAni_als() {
        if (!this.bIsRunning) {
            return;
        }
        Laya.Tween.clearAll(this.imageBtStartGame);
        Laya.Tween.to(this.imageBtStartGame, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
            Laya.Tween.to(this.imageBtStartGame, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
                Laya.timer.once(0, this, this.startGameAni_als);
            }));
        }));
    }


    /**判断下是否弹出签到 */
    private showSignView_als() {
        //如果是新玩家 不打开签到界面
        // if (PlayerDataManager.getInstance().isSign()) {
        //     ViewChangeManager.getInstance().showBufferLoadingView();
        //     ResUtil.getIntance().loadGroups(["sign"], async () => {
        //         ViewManager.getInstance().showView(SignView);
        //         ViewChangeManager.getInstance().hideBufferLoadingView();
        //         this.addEvent();
        //     });
        // } else {
        this.addEvent();
        //}
    }


     /**平台界面的刷新 */
     private PlInitView_als() {
        if (DeviceUtil.isTTMiniGame()) {
            this.imageBtInvital.visible = false;
            this.boxFun.width = 650;
        }
    }

    private weCatViewOper_als() {
        //2020.6.2 打开盒子2
        //ViewManager.getInstance().showView(MoreGameOperRequestTwo);
        //this.wxShowMoreGame();

        ViewManager.getInstance().showView(WeCatMoreGameView_Als);
    }
}