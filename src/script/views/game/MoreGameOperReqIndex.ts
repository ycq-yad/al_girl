import { Als_GameData } from "../../common/GameData";
import PlatformDY from "../../../PlatformDY";
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class MoreGameOperReqIndex_Als extends BaseSceneUISkin {
    className_key = "MoreGameOperReqIndex";
    public imageIcon: Laya.Image;
    public lableGameName: Laya.Label;
    public lableCount: Laya.Label;
    private nIndex: number;
    private stGameIndex: any;
    constructor(data: any) {
        super();
        this.nIndex = data;
        // this.width  = 300;
        // this.height = 380;
        this.skin = "game/uiView/MoreGameOperReqIndex.json";
        this.width = 300;
        this.height = 380;
    }

    onAddStage(): void {
        super.onAddStage();
        this.initView();
        this.addEvent();
    }

    private removeEvent() {
        this.off(Laya.Event.CLICK, this, this.gotoGame);
    }

    onRemoved() {
        this.removeEvent();
    }

    private addEvent() {
        this.on(Laya.Event.CLICK, this, this.gotoGame);
    }

   

    setData(data: any): void {
        this.nIndex = data;
        this.initView();
    }

    private gotoGame() {
        // //
        // if (BaseConst.infos.gameInfo.isDY) {
        //     PlatformDY.clickGame(this.stGameIndex.ad_id);
        // }
        // let self = this;
        // let data = {
        //     appId: this.stGameIndex.ad_appid,
        //     path: this.stGameIndex.url,
        //     success: function () {
        //         console.log("navigateToMiniProgram success");
        //         //
        //         if (BaseConst.infos.gameInfo.isDY) {
        //             console.log("self.nIndex = ", self.nIndex);
        //             PlatformDY.toGame(self.stGameIndex.ad_id);
        //         }
        //     },
        //     fail: function (e) {
        //         console.log("navigateToMiniProgram fail e =", e); //
        //     }
        // };
        // platform.navigateToMiniProgram(data);
        GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex);
    }

    /**初始化界面 */
    private initView() {
        let weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo
        if (this.nIndex < 0 || this.nIndex >= weCatMiniIconsInfo.length) {
            this.nIndex = weCatMiniIconsInfo.length - 1;
            if (this.nIndex < 0) return;
        }
        let alsDate = weCatMiniIconsInfo[this.nIndex]
        this.lableGameName.text = alsDate.name;
        this.imageIcon.skin = alsDate.ad_img;
        let nCount = Utils.random(100000, 200000);
        this.lableCount.text = nCount.toString() + "人正在玩";
        this.stGameIndex = Als_GameData.getInstance().weCatMiniIconsInfo[this.nIndex];
    }
}