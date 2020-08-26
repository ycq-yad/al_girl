import { Als_GameData } from "../../common/GameData";
import MoreGameOperReqIndex_Als from "./MoreGameOperReqIndex";
import PlatformDY from "../../../PlatformDY";
import ViewChangeManager_Als from "../../games/ViewChangeManager";
import { MiniManeger_Als } from "../../minigame/MiniManeger";
import ConfigManager_Als from "../../games/ConfigManager";
import { Als_PlayerDataBase, PlayerDataManager_Als } from "../../common/GameDataManager";
import { GoodsType, EnterGameType } from "../../games/CommonDefine";
import AddPsView_Als from "./Als_PopView/AddPsView";
import GameStateManager_Als from "../../games/GameStateManager";
import { LevelManager_Als } from "../../manager/LevelManager";
import GuessLike_Als from "./GuessLike";
import WeCatMoreGameItemOne713Big_Als from "./WeCatMoreGameItemOne713Big";
import MoreGameView_Als from "./moregame/MoreGameView";
import MoreGameOperRequestTemp_Als from "./MoreGameOperRequestTemp";
import WeCatMoreGameView_Als from "./WeCatMoreGameView";
import FailEntryTwoView_Als from "./Als_PopView/SettlementVew/FailEntryTwoView";
import SuccessfulEntryThreeView_Als from "./Als_PopView/SuccessfulEntryThreeView";
import SuccessfulEntryOneView_Als from "./Als_PopView/SuccessfulEntryOneView";
import { GameManager_Als } from "../../manager/GameManager";
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class MoreGameOperRequestTwo_Als extends BaseSceneUISkinPopView {
    className_key = "MoreGameOperRequestTwo";
    public imageBtReturn: Laya.Image;
    public imageBtConGame: Laya.Image;
    public moreGamePanel: Laya.Box;
    public lableTitle: Laya.Label;
    private nRandomIndxe: number;
    private moreGamePanel2: Laya.Box;
    private panel_gamelist: Laya.Panel;

    static bOperFlag: boolean = false;       //2020.5.25 修改运营 新的导出需求 true 表示在结算界面之前进入  false 表示从其他情况进入
    static bSuccess: boolean = false;       //2020.5.25 修改运营 true 表示当前成功   false 表示当前失败
    static toHome: boolean = false;       //2020.5.28 修改运营 true 表示当前成功   false 表示当前失败 直接进入主页
    static bGotoNextGame: boolean = false;   //是否到下一关
    //2020.7.13-9
    static bReStartGame: boolean = false;

    private guessLike: GuessLike_Als;//推广位

    public aryCatMiniIconsInfoTemp: any[];
    public static isOpen: boolean = false;
    public nOpenNum: number;
    constructor() {
        super();
        this.skin = "game/uiView/MoreGameOperRequestTwo.json";
        this.nRandomIndxe = 0;
        this.aryCatMiniIconsInfoTemp = [];
        this.nOpenNum = 0;
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
        this.initView();
        this.addEvent();
    }

    onAddStage(): void {
        super.onAddStage();
        this.nOpenNum += 1;
        MiniManeger_Als.instance.hideBanner();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
            this.imageBtReturn.visible = false;
            Laya.timer.once(3000, this, () => {
                this.imageBtReturn.visible = true;
            })
            MoreGameOperRequestTwo_Als.isOpen = true;
            //this.moreGameShowBinner(this.imageBtConGame.bottom);
        }
        if ((this.nOpenNum >= 2 || !PlayerDataManager_Als.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
            this.timerChangerImage();
        } else {
            this.changeImage();
        }

        if (BaseConst.infos.gameInfo.spbt == 0) {
            this.imageBtReturn.visible = false;
        }
        //2020-7-13
        MiniManeger_Als.instance.bFlagSpecialView = false;
    }

    private bContinue: boolean = false;
    /**5秒后变化图标 */
    private timerChangerImage() {
        this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_2.png";
        this.bContinue = false;
        Laya.timer.clear(this, this.changeImage);
        Laya.timer.once(5000, this, this.changeImage);
    }
    private changeImage() {
        this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_3.png";
        this.bContinue = true;
    }
    private onSpeical_als() {
        if (this.bContinue) {
            //2020-8-4
            this.onClickOper_als();
        } else {
            this.goToGame_als();
        }
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        MoreGameOperRequestTwo_Als.isOpen = false;
        // this.panel_gamelist.sc
        //MiniManeger.instance.showBannerAd();
    }

    private addEvent() {
        this.imageBtReturn.on(Laya.Event.CLICK, this, this.onBackTemp);
        this.imageBtConGame.on(Laya.Event.CLICK, this, this.onSpeical_als);
        this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown_als);
    }
    private nStartY: number = 0;
    protected mousedown_als(evt: Laya.Event) {
        this.nStartY = evt.currentTarget.mouseY;
        let self = this;
        function mouseMove(evt1: Laya.Event) {
            let nYTemp = self.nStartY - evt1.currentTarget.mouseY;
            self.moreGamePanel.y -= nYTemp;
            self.moreGamePanel2.y -= nYTemp;
            self.nStartY = evt1.currentTarget.mouseY;

            if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                self.moreGamePanel.y = 0;
                self.moreGamePanel2.y = self.moreGamePanel.height;
            }
        }
        function mouseUp(evt1: Laya.Event) {
            this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
        }
        this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
        this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
    }

    private removeEvent() {
        this.imageBtReturn.off(Laya.Event.CLICK, this, this.onBackTemp);
        this.imageBtConGame.off(Laya.Event.CLICK, this, this.onSpeical_als);
    }
    /**初始话pinnel***/
    private initPanel() {
        // this.panel_gamelist.vScrollBarSkin = '';
        // this.panel_gamelist.elasticEnabled = true;
        // this.panel_gamelist.vScrollBar.elasticDistance = 200;
        // this.panel_gamelist.vScrollBar.elasticBackTime = 100;
    }

    private initView() {
        Laya.timer.clear(this, this.onMove);
        this.aryCatMiniIconsInfoTemp = [];
        this.aryCatMiniIconsInfoTemp = Als_GameData.getInstance().weCatMiniIconsInfo;
        ViewChangeManager_Als.getInstance().hideCommonView();
        this.initPanel();
        let nXStart = 0;
        let nYStart = 0;
        let nCount = 2;
        let aryInfo: number[] = [];
        aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(18);
        let func = (pannel:Laya.Box)=>{
            for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
                let pWeCatMoreGameItemOne: WeCatMoreGameItemOne713Big_Als = pannel.getChildAt(i) as WeCatMoreGameItemOne713Big_Als;
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                } else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713Big_Als(aryInfo[i]);
    
                    let nAddX = Math.floor(i % nCount);
                    let nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    pannel.addChild(pWeCatMoreGameItemOne);
                    pannel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
        }
        func(this.moreGamePanel);
        this.moreGamePanel2.y = this.moreGamePanel.height;
        this.moreGamePanel2.removeChildren();
        func(this.moreGamePanel2);
        // this.initMorePanel(aryInfo, nCount, nXStart, nYStart);
        // this.initMorePanel2(aryInfo, nCount, nXStart, nYStart);
        // if(this.moreGamePanel.vScrollBar.max <= 1){
        //     this.moreGamePanel.vScrollBar.max = 50;
        // }
        //this.panelScrollAni();

        // let self = this;
        // if (!self.guessLike && DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {//微信需要增加滑动推荐
        //     MiniManeger.instance.createGuessLike(self).then((guessLike) => {
        //         console.log("show guessLike");
        //         if (!guessLike) {
        //             console.log("show guessLike error！");
        //             return;
        //         }
        //         self.guessLike = guessLike;
        //         self.guessLike.x = (Laya.stage.width - self.guessLike.width) / 2;
        //         self.guessLike.y = 44;
        //     });
        // }

        //2020.6.2运营需求  每次使用后刷新下游戏列表
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.refreshGameList();
        }
        Laya.timer.frameLoop(1, this, this.onMove);
    }

    // private initMorePanel(aryInfo, nCount, nXStart, nYStart) {
    //     this.moreGamePanel.removeChildren();
    //     aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(18);
    //     this.moreGamePanel.y = 0;
    //     for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
    //         let pWeCatMoreGameItemOne: WeCatMoreGameItemOne713Big_Als = this.moreGamePanel.getChildAt(i) as WeCatMoreGameItemOne713Big_Als;
    //         if (pWeCatMoreGameItemOne) {
    //             pWeCatMoreGameItemOne.setData(aryInfo[i]);
    //         } else {
    //             pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713Big_Als(aryInfo[i]);
    //             let nAddX = Math.floor(i % nCount);
    //             let nYAdd = Math.floor(i / nCount);
    //             pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 50 * nAddX;
    //             pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
    //             this.moreGamePanel.addChild(pWeCatMoreGameItemOne);
    //             this.moreGamePanel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
    //         }
    //     }
    // }

    // private initMorePanel2(aryInfo, nCount, nXStart, nYStart) {

    //     this.moreGamePanel2.y = this.moreGamePanel.height;
    //     this.moreGamePanel2.removeChildren();
    //     for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
    //         let pWeCatMoreGameItemOne: WeCatMoreGameItemOne713Big_Als = this.moreGamePanel2.getChildAt(i) as WeCatMoreGameItemOne713Big_Als;
    //         if (pWeCatMoreGameItemOne) {
    //             pWeCatMoreGameItemOne.setData(aryInfo[i]);
    //         } else {
    //             pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713Big_Als(aryInfo[i]);
    //             let nAddX = Math.floor(i % nCount);
    //             let nYAdd = Math.floor(i / nCount);
    //             pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 50 * nAddX;
    //             pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
    //             this.moreGamePanel2.addChild(pWeCatMoreGameItemOne);
    //             this.moreGamePanel2.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
    //         }
    //     }
    // }

    public onMove() {
        let nHight = this.moreGamePanel.height;
        this.moreGamePanel2.y -= 2;
        this.moreGamePanel.y -= 2;
        if (this.moreGamePanel.y <= -nHight) {
            this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
        }
        if (this.moreGamePanel2.y <= -nHight) {
            this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
        }
    }

    private onBackTemp() {
        MoreGameView_Als.bSpeical = true;
        ViewManager.getInstance().showView(MoreGameView_Als);
    }

    private onBack() {
        this.onClickOper_als();
        // this.removeSelf();
    }

    private goToGame_als() {

        GameCenterManager_Als.getInstance().toGameRandom();

    }

    /**2020.5.25 新的运营需求 */
    // static bOperFlag:boolean = false; //2020.5.25 修改运营 新的导出需求 true 表示在结算界面之前进入  false 表示从其他情况进入
    // static bSuccess:boolean  = false; //2020.5.25 修改运营 true 表示当前成功   false 表示当前失败
    private onClickOper_als() {
        //2020-7-13
        MiniManeger_Als.instance.bFlagSpecialView = true;
        if (PlayerDataManager_Als.bGlobEnterGame) {

            ViewManager.getInstance().showView(WeCatMoreGameView_Als);
        } else {
            //如果是进入下一关
            if (MoreGameOperRequestTwo_Als.bGotoNextGame) {
                let nSpCost = 1;
                let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
                if (stGameConfig) {
                    nSpCost = parseInt(stGameConfig.strValue);
                }
                //检测体力是否足够
                let b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                if (!b) {
                    GameManager_Als.instance.powerIsEnough()
                    return;
                }
                //扣除体力
                PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                //2020.7.13-1-1
                if (PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel
                    && BaseConst.infos.gameInfo.openPsAward == 1) {
                    //打开体力宝箱界面
                    PlayerDataManager_Als.getInstance().bEnterGameFromGameHome = false;
                    ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                } else {
                    ViewChangeManager_Als.getInstance().goToNextLevel();
                }
            } else {
                //如果是从结算界面之前进入
                if (MoreGameOperRequestTwo_Als.bOperFlag) {
                    //成功
                    if (MoreGameOperRequestTwo_Als.bSuccess) {
                        //2020.7.13-1-1
                        if (BaseConst.infos.gameInfo.openPsAward == 1
                            && PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel) {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                        } else {
                            ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                        }
                    } else {//失败
                        //打开失败界面2
                        ViewManager.getInstance().showView(FailEntryTwoView_Als);
                    }
                }
            }

            if (MoreGameOperRequestTwo_Als.toHome) {
                //进入主页
                ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
                PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
                GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
            }
            //2020.7.13-9
            if (MoreGameOperRequestTwo_Als.bReStartGame) {
                //扣除体力
                PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, 1);
                //重新开始游戏
                ViewChangeManager_Als.getInstance().restartGame(true);
            }
        }

        this.removeSelf();
        Laya.timer.clearAll(this);
        //MiniManeger.instance.resetBinnerOper();
        MiniManeger_Als.instance.showBannerAd();
        //执行操作后清理数据
        MoreGameOperRequestTwo_Als.bOperFlag = false;
        MoreGameOperRequestTwo_Als.bSuccess = false;
        MoreGameOperRequestTwo_Als.bGotoNextGame = false;
        //2020.7.13-5
        MoreGameOperRequestTwo_Als.toHome = false;
        ViewChangeManager_Als.getInstance().showCommonView();
    }
}