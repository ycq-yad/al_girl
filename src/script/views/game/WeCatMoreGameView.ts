import { Als_GameData } from "../../common/GameData";
import WeCatMoreGameItemTwo_Als from "./WeCatMoreGameItemTwo";
import PlatformDY from "../../../PlatformDY";
import { PlayerDataManager_Als } from "../../common/GameDataManager";
import { MiniManeger_Als } from "../../minigame/MiniManeger";
import ViewChangeManager_Als from "../../games/ViewChangeManager";
import SuccessfulEntryOneView_Als from "./Als_PopView/SuccessfulEntryOneView";
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class WeCatMoreGameView_Als extends BaseSceneUISkinPopView {
    public className_key = "WeCatMoreGameView";
    public boxWeCatMoreGame: Laya.Box;
    public imageBg: Laya.Image;

    public imageBtWeCat: Laya.Image;
    private moreGamePanel2: Laya.Box;
    public moreGamePanel: Laya.Box;
    private panel_gamelist: Laya.Panel;
    //2020.7.13-2
    public static isOpen: boolean = false;
    // private bWeCatShow: boolean;
    public static nEnterCount: number = 0;

    constructor() {
        super();
        this.skin = "game/uiView/WeCatMoreGameView.json";
    }


    onAddStage(): void {
        super.onAddStage();
        this.addEvent();
        this.initView()
        this.viewAniIn();
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }

    /**初始话pinnel***/
    private initPanel() {

    }

    private initView() {

        let nXStart = 0;
        let nYStart = 0;
        let nCount = 3;
        let aryInfo: number[] = [];
        aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(12);
        let func = (pannel: Laya.Box) => {
            for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
                let pWeCatMoreGameItemOne: WeCatMoreGameItemTwo_Als = pannel.getChildAt(i) as WeCatMoreGameItemTwo_Als;
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                } else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemTwo_Als(aryInfo[i]);

                    let nAddX = Math.floor(i % nCount);
                    let nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 15 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    pannel.addChild(pWeCatMoreGameItemOne);
                    pannel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height + 10;
                }
            }
        }
        //  this.initMorePanel(aryInfo, nCount, nXStart, nYStart);
        //  this.moreGamePanel2.y = this.moreGamePanel.height;
        // this.moreGamePanel2.removeChildren();
        //  this.initMorePanel2(aryInfo, nCount, nXStart, nYStart);
        this.moreGamePanel.removeChildren();
        this.moreGamePanel.y = 0;
        func(this.moreGamePanel);
        this.moreGamePanel2.y = this.moreGamePanel.height;
        func(this.moreGamePanel2);
        //2020.6.2运营需求  每次使用后刷新下游戏列表
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.refreshGameList();
        }

        Laya.timer.frameLoop(1, this, this.onMove);
    }

    // private initMorePanel(aryInfo, nCount, nXStart, nYStart) {
    //     aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(12);
    //     this.moreGamePanel.removeChildren();
    //     this.moreGamePanel.y = 0;
    //     for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
    //         let pWeCatMoreGameItemOne: WeCatMoreGameItemTwo_Als = this.moreGamePanel.getChildAt(i) as WeCatMoreGameItemTwo_Als;
    //         if (pWeCatMoreGameItemOne) {
    //             pWeCatMoreGameItemOne.setData(aryInfo[i]);
    //         } else {
    //             pWeCatMoreGameItemOne = new WeCatMoreGameItemTwo_Als(aryInfo[i]);

    //             let nAddX = Math.floor(i % nCount);
    //             let nYAdd = Math.floor(i / nCount);
    //             pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 15 * nAddX;
    //             pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
    //             this.moreGamePanel.addChild(pWeCatMoreGameItemOne);
    //             this.moreGamePanel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height + 10;
    //         }
    //     }
    // }

    // private initMorePanel2(aryInfo, nCount, nXStart, nYStart) {

    //     for (let i = 0; i < aryInfo.length; ++i) {//WeCatMoreGameItemOne MoreGameOperReqIndex
    //         let pWeCatMoreGameItemOne: WeCatMoreGameItemTwo_Als = this.moreGamePanel2.getChildAt(i) as WeCatMoreGameItemTwo_Als;
    //         if (pWeCatMoreGameItemOne) {
    //             pWeCatMoreGameItemOne.setData(aryInfo[i]);
    //         } else {
    //             pWeCatMoreGameItemOne = new WeCatMoreGameItemTwo_Als(aryInfo[i]);

    //             let nAddX = Math.floor(i % nCount);
    //             let nYAdd = Math.floor(i / nCount);
    //             pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 15 * nAddX;
    //             pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
    //             this.moreGamePanel2.addChild(pWeCatMoreGameItemOne);
    //             this.moreGamePanel2.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height + 10;
    //         }
    //     }

    // }

    public onMove() {
        let nHight = this.moreGamePanel.height;
        this.moreGamePanel2.y -= 1.5;
        this.moreGamePanel.y -= 1.5;
        if (this.moreGamePanel.y <= -nHight) {
            this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
        }
        if (this.moreGamePanel2.y <= -nHight) {
            this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
        }
    }


    // private getRandomIndex(nMax: number): number[] {
    //     let weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo
    //     if (weCatMiniIconsInfo.length - 1 < 0) {
    //         return [];
    //     }
    //     let nRandom = Utils.random(0, weCatMiniIconsInfo.length - 1);
    //     let nCount = weCatMiniIconsInfo.length % 3;
    //     if (nCount > 0) {
    //         nCount = 3 - nCount;
    //     }

    //     nCount = weCatMiniIconsInfo.length + nCount;
    //     if (nCount <= nMax) {
    //         nCount = nMax;
    //     }
    //     let aryInfo: number[] = [];
    //     for (let i = 0; i < nCount; ++i) {
    //         aryInfo.push(nRandom);
    //         nRandom += 1;
    //         if (nRandom >= weCatMiniIconsInfo.length) {
    //             nRandom = 0;
    //         }
    //     }
    //     return aryInfo;
    // }

    private addEvent() {
        this.imageBtWeCat.on(Laya.Event.CLICK, this, this.viewAniOut);
        this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
    }

    private removeEvent() {
        this.imageBtWeCat.off(Laya.Event.CLICK, this, this.viewAniOut);
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
    private bWeCatShow: boolean = false;
    private weCatViewOper() {
        this.bWeCatShow = !this.bWeCatShow;
        this.imageBtWeCat.off(Laya.Event.CLICK, this, this.weCatViewOper);
        if (this.bWeCatShow) {
            Laya.Tween.to(this.boxWeCatMoreGame, { x: -713 }, 1000, null, Laya.Handler.create(this, (args) => {
                this.imageBtWeCat.on(Laya.Event.CLICK, this, this.weCatViewOper);
                this.imageBtWeCat.skin = "resource/assets/img/common/game_button_2.png";
            }));
        } else {
            Laya.Tween.to(this.boxWeCatMoreGame, { x: 0 }, 1000, null, Laya.Handler.create(this, (args) => {
                this.imageBtWeCat.on(Laya.Event.CLICK, this, this.weCatViewOper);
                this.imageBtWeCat.skin = "resource/assets/img/common/game_button_3.png";
            }));
        }
    }

    private viewAniIn() {
        this.boxWeCatMoreGame.x = -713;
        //2020.7.13-2
        WeCatMoreGameView_Als.isOpen = true;
        Laya.Tween.to(this.boxWeCatMoreGame, { x: 0 }, 500, null, Laya.Handler.create(this, (args) => {
            // this.imageBtWeCat.on(Laya.Event.CLICK, this,this.viewAniOut);
            this.addEvent();
            this.imageBtWeCat.skin = "resource/assets/img/common/game_button_3.png";
        }));
    }

    private viewAniOut() {
        this.boxWeCatMoreGame.x = 0;
        Laya.Tween.to(this.boxWeCatMoreGame, { x: -713 }, 500, null, Laya.Handler.create(this, (args) => {
            this.imageBtWeCat.skin = "resource/assets/img/common/game_button_2.png";

            WeCatMoreGameView_Als.nEnterCount += 1;
            if (WeCatMoreGameView_Als.nEnterCount >= 2) {
                if (PlayerDataManager_Als.bGlobEnterGame) {
                    ViewChangeManager_Als.getInstance().showCommonView();
                }
                PlayerDataManager_Als.bGlobEnterGame = false;
            }
            if (PlayerDataManager_Als.bGlobEnterGame) {
                MiniManeger_Als.instance.playViderAd({
                    successFun: () => {
                        ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                        this.removeSelf();
                        //2020.7.13-2
                        WeCatMoreGameView_Als.isOpen = false;
                    },
                    failFun: () => {
                        ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                        this.removeSelf();
                        //2020.7.13-2
                        WeCatMoreGameView_Als.isOpen = false;
                    },
                    errorFun: () => {
                        ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                        this.removeSelf();
                        //2020.7.13-2
                        WeCatMoreGameView_Als.isOpen = false;
                    }
                });
            } else {
                this.removeSelf();
                //2020.7.13-2
                WeCatMoreGameView_Als.isOpen = false;
            }
        }));
    }
}