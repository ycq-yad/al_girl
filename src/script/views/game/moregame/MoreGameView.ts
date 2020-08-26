import { Als_GameData } from "../../../common/GameData";
import MoreGameItemView_Als from "./MoreGameItemView";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";
import PlatformDY from "../../../../PlatformDY";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";
import SuccessfulEntryThreeView_Als from "../Als_PopView/SuccessfulEntryThreeView";
import FailEntryTwoView_Als from "../Als_PopView/SettlementVew/FailEntryTwoView";

export default class MoreGameView_Als extends BaseSceneUISkinPopView {
    public className_key = "MoreGameView";
    constructor() {
        super();
        this.skin = "game/uiView/MoreGameView.json";
    }

    public ITEM_H: number = 200;
    public panel: Laya.Panel;
    public tlabel: Laya.Label;
    public baokuanImg: Laya.Image;
    public image_back: Laya.Image;
    public static bSuccess: boolean = false;
    public static bSpeical: boolean = false;

    protected createChildren(): void {
        super.createChildren();
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    onAddStage(): void {
        this.initView();
        this.addEvent();
        ViewChangeManager_Als.getInstance().hideCommonView();
        MiniManeger_Als.instance.hideBanner();
        //2020-7-13
        MiniManeger_Als.instance.bFlagSpecialView = false;
        ViewChangeManager_Als.getInstance().hideImageExitTemp();
    }

    onRemoved() {
        this.removeEvent();
        this.panel.removeChildren();
        Laya.timer.clearAll(this);
        ViewChangeManager_Als.getInstance().showImageExitTemp();
    }

    private addEvent() {
        //this.btnHome.on(Laya.Event.CLICK, this, this.levelViewReturnToHome);
        this.panel.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.panel.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        this.panel.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.image_back.on(Laya.Event.CLICK, this, this.onBack);
    }

    private removeEvent() {
        //this.btnHome.off(Laya.Event.CLICK, this, this.levelViewReturnToHome);
        this.panel.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.panel.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        this.panel.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.image_back.off(Laya.Event.CLICK, this, this.onBack);
    }

    private onBack() {
        //ViewChangeManager.getInstance().CommonView.visible = true;
        if (!MoreGameView_Als.bSpeical) {
            if (MoreGameView_Als.bSuccess) {
                ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
            } else {
                ViewManager.getInstance().showView(FailEntryTwoView_Als);
            }
        }
        this.removeSelf();
        //2020-7-13
        MiniManeger_Als.instance.bFlagSpecialView = true;
        MoreGameView_Als.bSpeical = false;
    }

    public isAuto: boolean = true;
    private stx: number;
    private sty: number;

    private mouseDown(e: Laya.Event): void {
        this.isAuto = false;
        //记录起始点
        this.stx = e.stageX;
        this.sty = e.stageY;
    }

    private mouseMove(e: Laya.Event): void {
        let dy: number = e.stageY - this.sty;
        for (let i: number = 0; i < this.panel.numChildren; i++) {
            let item: MoreGameItemView_Als = this.panel.getChildAt(i) as MoreGameItemView_Als;
            item.y += dy;
        }
        this.sty = e.stageY;
        this.dir = dy > 0 ? 1 : -1;
        this.refresh();
    }
    private mouseUp(e: Laya.Event): void {
        this.isAuto = true;
        this.dir = -1;
    }


    private initView() {
        //添加定时器
        Laya.timer.frameLoop(1, this, this.updata);
        let canuseHeight: number = Laya.stage.height - 280;
        this.maxCount = Math.ceil(canuseHeight / this.ITEM_H);
        //this.panel.bottom = canuseHeight - this.maxCount * this.ITEM_H;
        this.dataArr = Als_GameData.getInstance().weCatMiniIconsInfo;
        console.log(Als_GameData.getInstance().weCatMiniIconsInfo);
        //初始化条目
        this.initItem();
        //2020.6.2运营需求  每次使用后刷新下游戏列表
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.refreshGameList();
        }
    }

    private initItem() {
        let didnex: number = 0;
        for (let i: number = 0; i < this.maxCount + 1; i++) {
            let item: MoreGameItemView_Als = new MoreGameItemView_Als();
            item.index = didnex;
            item.setData(this.dataArr[item.index]);
            didnex++;
            if (didnex >= this.dataArr.length) {
                didnex = 0;
            }
            item.y = i * this.ITEM_H;
            this.panel.addChild(item);
        }
    }
    public dataArr: Array<any> = [{ t: 0 }, { t: 1 }, { t: 2 }, { t: 3 }];
    public speed: number = 2;
    public dir: number = -1;

    public getUpIndexforCurIndex(index: number): number {
        if (index >= this.dataArr.length || index < 0) return 0;
        return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
    }

    public getDownIndexforCurIndex(index: number): number {
        if (index >= this.dataArr.length || index < 0) return 0;
        return index + 1 < this.dataArr.length ? index + 1 : 0;
    }

    public updata(dt): void {
        if (!this.isAuto) return;
        for (let i: number = 0; i < this.panel.numChildren; i++) {
            let item: MoreGameItemView_Als = this.panel.getChildAt(i) as MoreGameItemView_Als;
            item.y += this.speed * this.dir;
        }
        this.refresh();

    }


    private refresh(): void {
        let startItem: MoreGameItemView_Als;
        let lastItem: MoreGameItemView_Als;
        startItem = this.panel.getChildAt(0) as MoreGameItemView_Als;
        lastItem = this.panel.getChildAt(this.maxCount) as MoreGameItemView_Als;
        if (this.dir == -1)//向上
        {
            if (startItem.y < -this.ITEM_H) {
                startItem.y = lastItem.y + lastItem.height;
                startItem.zOrder = lastItem.zOrder + 1;
                startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                startItem.refreshData(this.dataArr[startItem.index]);

                console.log('idnex-=======>', startItem.index);
            }
        }
        else//向下
        {
            if (lastItem.y > this.maxCount * this.ITEM_H) {
                lastItem.y = startItem.y - startItem.height;
                lastItem.zOrder = startItem.zOrder - 1;
                lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                lastItem.refreshData(this.dataArr[lastItem.index]);
            }
        }
    }

    public maxCount: number;


}