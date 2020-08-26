import LevelViewItem_Als from "./LevelViewItem";
import GameHomeView_Als from "../../../GameHomeView";
import ViewChangeManager_Als from "../../../../games/ViewChangeManager";
import Als_SoundManager from "../../../../common/SoundManager";
import { MiniManeger_Als } from "../../../../minigame/MiniManeger";
import { PlayerDataManager_Als } from "../../../../common/GameDataManager";
import { PopBaseScene } from "../../../base/PopBaseScene";

export default class LevelView_Als extends PopBaseScene {
    public className_key = "LevelView";
    public grp_center: Laya.Box;
    public imageBtHome: Laya.Image;
    public levelPanel: Laya.Panel;
    public levelBox: Laya.Box;

    public xStart: number;
    public xAdd: number;
    public yStart: number;
    public yAdd: number;

    public static pHomeView: GameHomeView_Als;

    constructor() {
        super();
        this.skin = "game/uiView/LevelView.json";
        this.xStart = 69 + 285 / 2;
        this.xAdd = 44 + 285;
        this.yStart = 316 / 2;
        this.yAdd = 316 + 35;
    }

    public addEvent() {
        this.registerEvent(this.imageBtHome, Laya.Event.CLICK, this.levelVRTH_Als, this);
    }

    private initDataCommon() {
        this.levelPanel.vScrollBarSkin = "";
        this.levelPanel.elasticEnabled = true;
        this.levelPanel.vScrollBar.elasticDistance = 130;
        MiniManeger_Als.instance.showInterstitialAd();
        ViewChangeManager_Als.getInstance().CommonView.visible = false;
        MiniManeger_Als.instance.showBannerAd();
    }

    private initItem(xStart, xAdd, yStart, yAdd) {
        for (let i = 0, len = PlayerDataManager_Als.getInstance().nMaxLevelCount; i < len; i++) {
            let item = this.levelBox.getChildAt(i) as LevelViewItem_Als;
            if (item) {
                item.setData(i + 1);
            } else {
                item = new LevelViewItem_Als(i + 1);
                item.width = item.height = 210;
                item.x = (i % 3) * xAdd + xStart;
                item.y = Math.floor(i / 3) * yAdd + yStart;
                this.levelBox.addChild(item);
            }
            item.setPV_Als(this);
        }
    }

    public initView() {
        this.initDataCommon();
        this.initItem(this.xStart, this.xAdd, this.yStart, this.yAdd);
    }

     //在这个界面点击了前往某个关卡需要关闭界面
     public closeVWGTL_Als() {
        ViewChangeManager_Als.getInstance().CommonView.visible = true;
        this.removeSelf();
        LevelView_Als.pHomeView.removeSelf();
    }

    private levelVRTH_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        ViewChangeManager_Als.getInstance().CommonView.visible = true;
        this.removeSelf();
    }

   
}