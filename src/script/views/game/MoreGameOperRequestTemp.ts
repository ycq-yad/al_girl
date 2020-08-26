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
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class MoreGameOperRequestTemp_Als extends BaseSceneUISkinPopView {
    className_key = "MoreGameOperRequestTemp";
    public imageBtReturn: Laya.Image;
    public imageBtConGame: Laya.Image;
    public moreGamePanel: Laya.Box;
    public lableTitle: Laya.Label;
    private nRandomIndxe: number;
    private panel_gamelist: Laya.Panel;
    private moreGamePanel2: Laya.Box;

    public static nOpenNum: number;

    constructor() {
        super();
        this.skin = "game/uiView/MoreGameOperRequestTemp.json";
        this.nRandomIndxe = 0;
        MoreGameOperRequestTemp_Als.nOpenNum = 0;
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        // this.moreGamePanel.height = Laya.stage.height - (1920 - 1640);
        this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
        // this.initView();
        // this.addEvent();
    }

    onAddStage(): void {
        MoreGameOperRequestTemp_Als.nOpenNum += 1;
        super.onAddStage();
        MiniManeger_Als.instance.hideBanner();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
        if ((MoreGameOperRequestTemp_Als.nOpenNum >= 2 || !PlayerDataManager_Als.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
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
            this.removeSelf();
        } else {
            this.goToGame();
        }
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }

    private addEvent() {
        this.imageBtReturn.on(Laya.Event.CLICK, this, this.onBackTemp);
        this.imageBtConGame.on(Laya.Event.CLICK, this, this.onSpeical);
        this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
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

    private removeEvent() {
        this.imageBtReturn.off(Laya.Event.CLICK, this, this.onBackTemp);
        this.imageBtConGame.off(Laya.Event.CLICK, this, this.onSpeical);
    }

    //2020.7.13-5
    private initView() {
        Laya.timer.clear(this, this.onMove);
        //ViewChangeManager.getInstance().CommonView.visible = false;
        let nXStart = 0;
        let nYStart = 0;
        let nCount = 3;
        let aryInfo: number[] = [];
        aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(18);

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

        func(this.moreGamePanel);
        this.moreGamePanel2.y = this.moreGamePanel.height;
        this.moreGamePanel2.removeChildren();
        func(this.moreGamePanel2);
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
        if (this.moreGamePanel2.y <= -nHight) {
            this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
        }
        if (this.moreGamePanel.y <= -nHight) {
            this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
        }

    }

    private onBackTemp() {
        MoreGameView_Als.bSpeical = true;
        ViewManager.getInstance().showView(MoreGameView_Als);
    }

    private goToGame() {
        GameCenterManager_Als.getInstance().toGameRandom();
    }

    //2020.7.13-5
    private onBack() {

    }

    
}