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
import WeCatOperReqItem713_Als from "./WeCatOperReqItem713";
import WeCatMoreGameItemOne713_Als from "./WeCatMoreGameItemOne713";
import MoreGameOperRequestTwo_Als from "./MoreGameOperRequestTwo";
import MoreGameView_Als from "./moregame/MoreGameView";
import WeCatMoreGameView_Als from "./WeCatMoreGameView";
import MoreGameOperRequestTemp_Als from "./MoreGameOperRequestTemp";
import FailEntryTwoView_Als from "./Als_PopView/SettlementVew/FailEntryTwoView";
import SuccessfulEntryThreeView_Als from "./Als_PopView/SuccessfulEntryThreeView";
import SuccessfulEntryOneView_Als from "./Als_PopView/SuccessfulEntryOneView";
import { GameManager_Als } from "../../manager/GameManager";
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class MoreGameOperRequest_Als extends BaseSceneUISkinPopView {
    className_key = "MoreGameOperRequest";
    public imageBtReturn: Laya.Image;
    public imageBtConGame: Laya.Image;
    public moreGamePanel: Laya.Box;
    public lableTitle: Laya.Label;
    private nRandomIndxe: number;
    private panel_gamelist: Laya.Panel;
    private moreGamePanel2: Laya.Box;

    static bOperFlag: boolean = false;       //2020.5.25 修改运营 新的导出需求 true 表示在结算界面之前进入  false 表示从其他情况进入
    static bSuccess: boolean = false;       //2020.5.25 修改运营 true 表示当前成功   false 表示当前失败
    static toHome: boolean = false;       //2020.5.28 修改运营 true 表示当前成功   false 表示当前失败 直接进入主页
    static bGotoNextGame: boolean = false;   //是否到下一关
    static bEnterHotBox: boolean = false;
    static bReStartGame: boolean = false;

    private bAniOver: boolean;

    private imageRandom: Laya.Image;

    public nOpenNum: number;

    constructor() {
        super();
        this.skin = "game/uiView/MoreGameOperRequest.json";
        this.nRandomIndxe = 0;
        this.bAniOver = false;
        this.nOpenNum = 0;
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        // this.moreGamePanel.height = Laya.stage.height - (1920 - 1640);
        this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
        // this.initView();
        // this.addEvent();
    }

    onAddStage(): void {
        this.nOpenNum += 1;
        super.onAddStage();
        MiniManeger_Als.instance.hideBanner();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
            //this.moreGameShowBinner(this.imageBtConGame.bottom);
        }
        //2020-7-13
        MiniManeger_Als.instance.bFlagSpecialView = false;

        //this.timerChangerImage();
        if ((this.nOpenNum >= 2 || !PlayerDataManager_Als.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
            this.timerChangerImage();
        } else {
            this.changeImage();
        }
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

    private onSpeical() {
        if (this.bContinue) {
            this.onSpecialGotoGame();
        } else {
            this.goToGame();
        }
    }

    private onSpecialGotoGame() {
        // //2020.8.4
        if (PlayerDataManager_Als.bGlobEnterGame) {
            ViewManager.getInstance().showView(WeCatMoreGameView_Als);
            this.removeSelf();
            Laya.timer.clearAll(this);
            //执行操作后清理数据
            MoreGameOperRequest_Als.bOperFlag = false;
            MoreGameOperRequest_Als.bSuccess = false;
            MoreGameOperRequest_Als.bGotoNextGame = false;
            MoreGameOperRequest_Als.toHome = false;
            MoreGameOperRequest_Als.bEnterHotBox = false;
            MoreGameOperRequest_Als.bReStartGame = false;
            return
        }
        this.onClickOper();
    }

    private nStartY: number = 0;
    protected mousedown(evt: Laya.Event) {
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

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        //MiniManeger.instance.showBannerAd();
        this.bAniOver = true;
    }

    private addEvent() {
        this.imageBtReturn.on(Laya.Event.CLICK, this, this.onBackTemp);
        this.imageBtConGame.on(Laya.Event.CLICK, this, this.onSpeical);
        this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
        this.imageRandom.on(Laya.Event.CLICK, this, this.goToGameRandom);
    }
   

   
    /**初始话pinnel***/
    private initPanel() {
        // this.panel_gamelist.vScrollBarSkin = '';
        // this.panel_gamelist.elasticEnabled = true;
        // this.panel_gamelist.vScrollBar.elasticDistance = 200;
        // this.panel_gamelist.vScrollBar.elasticBackTime = 100;
    }
    //2020.7.13-5
    private initView() {
        Laya.timer.clear(this, this.onMove);
        ViewChangeManager_Als.getInstance().hideCommonView();
        this.initPanel();
        let nXStart = 0;
        let nYStart = 0;
        let nCount = 3;
        let aryInfo: number[] = [];
        aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(18);
        this.moreGamePanel.removeChildren();
        this.moreGamePanel.y = 0;

        let func = (pannel:Laya.Box)=>{
            for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
                let pWeCatMoreGameItemOne: WeCatMoreGameItemOne713_Als = pannel.getChildAt(i) as WeCatMoreGameItemOne713_Als;
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                } else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713_Als(aryInfo[i]);
    
                    let nAddX = Math.floor(i % nCount);
                    let nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    pannel.addChild(pWeCatMoreGameItemOne);
                    pannel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
        }
        // for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
        //     let pWeCatMoreGameItemOne: WeCatMoreGameItemOne713_Als = this.moreGamePanel.getChildAt(i) as WeCatMoreGameItemOne713_Als;
        //     if (pWeCatMoreGameItemOne) {
        //         pWeCatMoreGameItemOne.setData(aryInfo[i]);
        //     } else {
        //         pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713_Als(aryInfo[i]);

        //         let nAddX = Math.floor(i % nCount);
        //         let nYAdd = Math.floor(i / nCount);
        //         pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
        //         pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
        //         this.moreGamePanel.addChild(pWeCatMoreGameItemOne);
        //         this.moreGamePanel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
        //     }
        // }
        func(this.moreGamePanel);
        this.moreGamePanel2.y = this.moreGamePanel.height;
        this.moreGamePanel2.removeChildren();
        func(this.moreGamePanel2);
        // for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
        //     let pWeCatMoreGameItemOne: WeCatMoreGameItemOne713_Als = this.moreGamePanel2.getChildAt(i) as WeCatMoreGameItemOne713_Als;
        //     if (pWeCatMoreGameItemOne) {
        //         pWeCatMoreGameItemOne.setData(aryInfo[i]);
        //     } else {
        //         pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713_Als(aryInfo[i]);

        //         let nAddX = Math.floor(i % nCount);
        //         let nYAdd = Math.floor(i / nCount);
        //         pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
        //         pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
        //         this.moreGamePanel2.addChild(pWeCatMoreGameItemOne);
        //         this.moreGamePanel2.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height
        //     }
        // }

        //2020.6.2运营需求  每次使用后刷新下游戏列表
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.refreshGameList();
        }
        Laya.timer.frameLoop(1, this, this.onMove);
    }

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

    private goToGame() {
        GameCenterManager_Als.getInstance().toGameRandom();
    }

    private onBackTemp() {
        MoreGameView_Als.bSpeical = true;
        ViewManager.getInstance().showView(MoreGameView_Als);
    }

    //2020.7.13-5
    private onBack() {
        let funcBefore = () => {
            MoreGameOperRequestTwo_Als.bOperFlag = MoreGameOperRequest_Als.bOperFlag
            MoreGameOperRequestTwo_Als.bSuccess = MoreGameOperRequest_Als.bSuccess
            MoreGameOperRequestTwo_Als.bGotoNextGame = MoreGameOperRequest_Als.bGotoNextGame
            MoreGameOperRequestTwo_Als.toHome = MoreGameOperRequest_Als.toHome;
            MoreGameOperRequestTwo_Als.bReStartGame = MoreGameOperRequest_Als.bReStartGame;
        }

        let funcMid = () => {
            MiniManeger_Als.instance.bFlagSpecialView = false;
            ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
            this.removeSelf();
            Laya.timer.clearAll(this);
        }

        let funcAfter = () => {
            //执行操作后清理数据
            MoreGameOperRequest_Als.bOperFlag = false;
            MoreGameOperRequest_Als.bSuccess = false;
            MoreGameOperRequest_Als.bGotoNextGame = false;
            MoreGameOperRequest_Als.toHome = false;
            MoreGameOperRequest_Als.bEnterHotBox = false;
            MoreGameOperRequest_Als.bReStartGame = false;
        }
        funcBefore();
        funcMid();
        funcAfter();
    }


    // public aryCatMiniIconsInfoTemp: any[];
    private goToGameRandom() {
        // let self = this;

        // self.aryCatMiniIconsInfoTemp = Als_GameData.getInstance().weCatMiniIconsInfo;
        // //this.onClickOper();
        // if (self.aryCatMiniIconsInfoTemp.length <= 0) {
        //     return;
        // }

        // self.nRandomIndxe = Utils.random(0, self.aryCatMiniIconsInfoTemp.length - 1);
        // //
        // if (BaseConst.infos.gameInfo.isDY) {
        //     PlatformDY.clickGame(self.aryCatMiniIconsInfoTemp[self.nRandomIndxe].ad_id);
        // }
        // let idata = self.aryCatMiniIconsInfoTemp[self.nRandomIndxe]
        // let data = {
        //     appId: idata.ad_appid,
        //     path: idata.url,
        //     success: function () {
        //         console.log("navigateToMiniProgram success");
        //         //
        //         if (BaseConst.infos.gameInfo.isDY) {
        //             console.log("self.nIndex = ", self.nRandomIndxe);
        //             PlatformDY.toGame(idata.ad_id);
        //         }
        //     },
        //     fail: function (e) {
        //         console.log("navigateToMiniProgram fail e =", e); //
        //     }
        // };
        // platform.navigateToMiniProgram(data);
        GameCenterManager_Als.getInstance().toGameRandomNotOpenView();

    }


    /**2020.5.25 新的运营需求 */
    // static bOperFlag:boolean = false; //2020.5.25 修改运营 新的导出需求 true 表示在结算界面之前进入  false 表示从其他情况进入
    // static bSuccess:boolean  = false; //2020.5.25 修改运营 true 表示当前成功   false 表示当前失败
    private onClickOper() {

        let func = () => {
            this.removeSelf();
            Laya.timer.clearAll(this);
            //MiniManeger.instance.resetBinnerOper();
            MiniManeger_Als.instance.showBannerAd();

            //执行操作后清理数据
            MoreGameOperRequest_Als.bOperFlag = false;
            MoreGameOperRequest_Als.bSuccess = false;
            MoreGameOperRequest_Als.bGotoNextGame = false;
            //2020.7.13-5
            MoreGameOperRequest_Als.toHome = false;
            MoreGameOperRequest_Als.bEnterHotBox = false;
            MoreGameOperRequest_Als.bReStartGame = false;
        }
        // //2020.7.13-5  6、过关页—随机盒子—热门推荐盒子页—进入下一关。
        if (!MoreGameOperRequest_Als.bEnterHotBox) {
            //2020-7-13
            MiniManeger_Als.instance.bFlagSpecialView = true;
            //如果是进入下一关
            if (MoreGameOperRequest_Als.bGotoNextGame) {
                let nSpCost = 1;
                let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
                if (stGameConfig) {
                    nSpCost = parseInt(stGameConfig.strValue);
                }
                //检测体力是否足够
                let b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                if (!b) {
                    GameManager_Als.instance.powerIsEnough()
                    return
                }
                /**2020.6.1运营需求增加消息推送授权 */
                if (DeviceUtil.isWXMiniGame()) {
                    if (!MiniManeger_Als.instance.bPushMsgShowFlagTen && PlayerDataManager_Als.getInstance().getCurLevelToChallenge() + 1 == 10) {
                        MiniManeger_Als.instance.wxPushMsg();
                        MiniManeger_Als.instance.bPushMsgShowFlagTen = true;
                    }
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
                if (MoreGameOperRequest_Als.bOperFlag) {
                    //成功
                    if (MoreGameOperRequest_Als.bSuccess) {
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

            if (MoreGameOperRequest_Als.toHome) {
                //进入主页
                ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
                PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
                GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
            }
            //ViewChangeManager.getInstance().CommonView.visible = true;
            ViewChangeManager_Als.getInstance().showCommonView();
        } else {
            this.onBack(); ////2020.7.13-5 6、过关页—随机盒子—热门推荐盒子页—进入下一关。
        }
        func();
    }

    private removeEvent() {
        this.imageBtReturn.off(Laya.Event.CLICK, this, this.onBackTemp);
        this.imageBtConGame.off(Laya.Event.CLICK, this, this.onSpeical);
        this.imageRandom.off(Laya.Event.CLICK, this, this.goToGameRandom);
    }
}