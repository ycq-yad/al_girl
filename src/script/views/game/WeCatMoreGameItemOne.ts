import { Als_GameData } from "../../common/GameData";
import PlatformDY from "../../../PlatformDY";
import MoreGameOperRequest_Als from "./MoreGameOperRequest";
import MoreGameOperRequestTwo_Als from "./MoreGameOperRequestTwo";
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class WeCatMoreGameItemOne_Als extends BaseSceneUISkin {
    public className_key = "WeCatMoreGameItemOne";
    public imageIcon: Laya.Image;
    public lableGameName: Laya.Label;

    private nIndex: number;
    private stGameIndex: any;
    constructor(data: any) {
        super();
        this.nIndex = data;

        this.skin = "game/uiView/WeCatMoreGameItemOne.json";
        this.width = 320;
        this.height = 390;
    }

    onAddStage(): void {
        super.onAddStage();
        this.addEvent();
        this.initView()
    }

    onRemoved() {
        this.removeEvent();
    }

    setData(data: any): void {
        this.nIndex = data;
        this.initView();
    }

    private removeEvent() {
        this.off(Laya.Event.CLICK, this, this.gotoGame);
    }

    private initView() {
        let weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo
        if (this.nIndex < 0 || this.nIndex >= weCatMiniIconsInfo.length) {
            this.nIndex = weCatMiniIconsInfo.length - 1;
            if (this.nIndex < 0) return;
        }
        this.lableGameName.text = weCatMiniIconsInfo[this.nIndex].name;
        this.imageIcon.skin = weCatMiniIconsInfo[this.nIndex].ad_img;
        this.stGameIndex = weCatMiniIconsInfo[this.nIndex];
    }

    private gotoGame() {
        
        GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex,MoreGameOperRequest_Als);
    }

    private addEvent() {
        if (!DeviceUtil.isTTMiniGame()) {
            this.on(Laya.Event.CLICK, this, this.gotoGame);
        }
    }
}