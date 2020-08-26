import { LevelBase_Als } from "../views/game/level/LevelBase";
import GameStateManager_Als from "./GameStateManager";
import { PlayerDataManager_Als } from "../common/GameDataManager";
import { EnterGameType } from "./CommonDefine";
import { LevelManager_Als } from "../manager/LevelManager";
import GameBufferLoading_Als from "../loading/GameBufferLoading";
import { MiniManeger_Als } from "../minigame/MiniManeger";
import PlatformDY from "../../PlatformDY";
import { Als_GameData } from "../common/GameData";
import MoreGameView_Als from "../views/game/moregame/MoreGameView";
import WeCatMoreGameView_Als from "../views/game/WeCatMoreGameView";
import MoreGameOperRequest_Als from "../views/game/MoreGameOperRequest";
import CommonView_Als from "../views/game/Als_PopView/CommonView";

export default class ViewChangeManager_Als {

    private static instance: ViewChangeManager_Als;
    public static getInstance(): ViewChangeManager_Als {
        if (!ViewChangeManager_Als.instance) {
            ViewChangeManager_Als.instance = new ViewChangeManager_Als();
        }
        return ViewChangeManager_Als.instance;
    }

    public static bGameOpen: boolean = false;

    constructor() {
        EventMgr.getInstance().addEvent("onRemove", this, this.onRemove)
    }

    /**
     * 展示插屏
     */
    private onRemove() {
        if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
            MiniManeger_Als.instance.showInsertAd({})
        }
    }
    /**当前关卡场景的引用*/
    private pCurLevelBase: LevelBase_Als;

    private pCommonView: CommonView_Als;

    public get CommonView() {
        if (!this.pCommonView) {
            this.pCommonView = new CommonView_Als();
            this.pCommonView.x = 0;
            this.pCommonView.y = 0;
        }
        return this.pCommonView;
    }

    public get CurLevelBase() {
        return this.pCurLevelBase;
    }

    public set CurLevelBase(pCurLevelBase: any) {
        this.pCurLevelBase = pCurLevelBase;
    }

    public showCommonView() {
        Laya.stage.addChild(this.CommonView);
    }

    public hideCommonView() {
        this.CommonView.parent && Laya.stage.removeChild(this.CommonView);
    }



    public gotoLevel(nCurLevel: number) {
        PlayerDataManager_Als.getInstance().setCurLevel(nCurLevel - 1);
        GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_ChooseLevel;
        LevelManager_Als.getInstance().createLevelScene(nCurLevel);
    }

    /**切换到下一关 */
    public goToNextLevel() {
        MiniManeger_Als.instance.StopVideo();
        //ViewChangeManager.getInstance().CurLevelBase.closeGameView();
        this.pCurLevelBase.closeGameView();
        GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_Next;
        PlayerDataManager_Als.getInstance().addLevel();
        //
        LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
    }

    /**全部重新开始 */
    public restartGame(bAll: boolean = true) {
        //开始游戏
        GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_ReStart;
        //ViewChangeManager.getInstance().CurLevelBase.restartGame(false);
        this.pCurLevelBase.restartGame(bAll);
    }


    public rigestBufferLoadingView(): void {
        BufferLoadingManger.getInstance().registerOneBuffer("gamebuffer", new GameBufferLoading_Als());
    }

    public showBufferLoadingView(): void {
        BufferLoadingManger.getInstance().showBuffer("gamebuffer");
        Laya.timer.clear(this, this.hideBufferLoadingView)
        Laya.timer.once(30000, this, this.hideBufferLoadingView)
    }

    public hideBufferLoadingView(): void {
        Laya.timer.clear(this, this.hideBufferLoadingView)
        BufferLoadingManger.getInstance().hiddBuffer("gamebuffer");
    }

    /**
     * 进入游戏
     */
    public startGame(): void {
        if (!BaseConst.infos.gameInfo.isDY) {
            return;
        }
        if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame()) return
        PlatformDY.startGame();
    }

    /**
     * 游戏结束
     */
    public endGame(): void {
        if (!BaseConst.infos.gameInfo.isDY) {
            return;
        }
        if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame()) return
        PlatformDY.endGame({ id: PlatformDY.nGameID, level: PlayerDataManager_Als.getInstance().getCurLevelToChallenge() });
    }


    /**全局增加一个退出按钮 */
    private image_exit: Laya.Image = null;
    public showImageExit() {
        if (!DeviceUtil.isWXMiniGame()) {
            return;
        }
        if (PlayerDataManager_Als.getInstance().stOperData0807.bSpecial == false) {
            console.log("GameDataMgr.getInstance().enterGameInfo", Als_GameData.getInstance().enterGameInfo);
            if (Als_GameData.getInstance().enterGameInfo == {}) {
                return;
            }
            if (!Als_GameData.getInstance().enterGameInfo.referrerInfo.appId) {
                return;
            }
            if ("wxcff7381e631cf54e" == Als_GameData.getInstance().enterGameInfo.referrerInfo.appId) {
                return;
            }
        }
        PlayerDataManager_Als.getInstance().stOperData0807.bSpecial = true;
        //if(GameDataMgr.getInstance().enterGameInfo.referrerInfo.appId)
        if (this.image_exit) {
            return;
        }
        this.image_exit = new Laya.Image();
        this.image_exit.skin = "resource/assets/img/wecat/button.png";
        this.image_exit.right = 23;
        this.image_exit.top = 220;
        Laya.stage.addChild(this.image_exit);
        this.image_exit.on(Laya.Event.CLICK, this, this.onImageExit);
        PlayerDataManager_Als.getInstance().SaveData();
    }

    private onImageExit() {
        MoreGameView_Als.bSpeical = true;
        ViewManager.getInstance().showView(MoreGameView_Als);
    }

    public showImageExitTemp() {
        if (this.image_exit) {
            this.image_exit.visible = true;
        }
    }

    public hideImageExitTemp() {
        if (this.image_exit) {
            this.image_exit.visible = false;
        }
    }

    public restartEnterGameHome() {

        if (!DeviceUtil.isWXMiniGame()) {
            return;
        }

        if (PlayerDataManager_Als.getInstance().bIsNewPlayer) {
            PlayerDataManager_Als.bGlobEnterGame = false;
            return;
        }

        if (BaseConst.infos.gameInfo.openPsAward == 0) {
            PlayerDataManager_Als.bGlobEnterGame = false;
            return;
        }
        PlayerDataManager_Als.bGlobEnterGame = true;
        WeCatMoreGameView_Als.nEnterCount = 0;
        ViewManager.getInstance().showView(MoreGameOperRequest_Als);
        // this.CommonView.visible = false;
        this.hideCommonView();
    }

    /**如果不是新玩家的进入游戏流程*/
    public enterGameHomeNotNewPlayer() {
        //全局流程走完了  或者是新玩家 就不走这个逻辑了
        if (!PlayerDataManager_Als.bGlobEnterGame || PlayerDataManager_Als.getInstance().bIsNewPlayer) {
            return;
        }
        ViewManager.getInstance().showView(MoreGameOperRequest_Als);
        this.hideCommonView();
    }
}