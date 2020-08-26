import { Als_GameData } from "../../common/GameData";
import PlatformDY from "../../../PlatformDY";
import MoreGameOperRequest_Als from "./MoreGameOperRequest";
import MoreGameOperRequestTwo_Als from "./MoreGameOperRequestTwo";
import { MiniManeger_Als } from "../../minigame/MiniManeger";
import GameCenterManager_Als from "../../manager/GameCenterManager";
//2020.7.13-2
export default class WeCatMoreGameItemTwo_Als extends BaseSceneUISkin {
    public className_key = "WeCatMoreGameItemTwo";
    public imageIcon: Laya.Image;
    public lableGameName: Laya.Label;

    private nIndex: number;
    private stGameIndex: any;
    constructor(data: any) {
        super();
        this.nIndex = data;
        this.skin = "game/uiView/WeCatMoreGameItemTwo.json";

    }
    public adaptationStage() {
        this.width = 210;
        this.height = 258;
    }

    onAddStage(): void {
        super.onAddStage();
        this.addEvent();
        this.initView();
    }

    onRemoved() {
        this.removeEvent();
    }

    private initView() {
        let weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo
        if (this.nIndex < 0 || this.nIndex >= weCatMiniIconsInfo.length) {
            this.nIndex = Als_GameData.getInstance().weCatMiniIconsInfo.length - 1;
            if (this.nIndex < 0) return;
        }
        // let stData = Als_GameData.getInstance().weCatMiniIconsInfo;
        let stDataTemp = weCatMiniIconsInfo[this.nIndex];
        this.lableGameName.text = weCatMiniIconsInfo[this.nIndex].name;
        this.imageIcon.skin = weCatMiniIconsInfo[this.nIndex].ad_img;
        this.stGameIndex = weCatMiniIconsInfo[this.nIndex];
    }

    setData(data: any): void {
        this.nIndex = data;
        this.initView();
    }
   

    private removeEvent() {
        this.off(Laya.Event.CLICK, this, this.gotoGame);
    }

    private addEvent() {
        if (!DeviceUtil.isTTMiniGame()) {
            this.on(Laya.Event.CLICK, this, this.gotoGame);
        }
    }

   

    private gotoGame() {
        // if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
        //     // //判断下数据是否存在
        //     // if(this.nIndex < 0 ||　this.nIndex　>= GameData.getInstance().weCatMiniIconsInfo.length){
        //     //     return;
        //     // }
        //     // let stData = GameData.getInstance().weCatMiniIconsInfo[this.nIndex];
        //     // if(!stData){
        //     //     return;
        //     // }
        //     //
        //     if (BaseConst.infos.gameInfo.isDY) {
        //         PlatformDY.clickGame(this.stGameIndex.ad_id);
        //     }
        //     let self = this;
        //     let data = {
        //         appId: this.stGameIndex.ad_appid,
        //         path: this.stGameIndex.url,
        //         success: function () {
        //             console.log("navigateToMiniProgram success!");
        //             //
        //             if (BaseConst.infos.gameInfo.isDY) {
        //                 console.log("self.nIndex = ", self.nIndex);
        //                 PlatformDY.toGame(self.stGameIndex.ad_id);
        //             }
        //         },
        //         fail: function (e) {
        //             console.log("navigateToMiniProgram fail e =", e);
        //             // //
        //             // if(BaseConst.infos.gameInfo.isDY){
        //             //     console.log("self.nIndex = ",self.nIndex);
        //             //     PlatformDY.toGame(GameData.getInstance().weCatMiniIconsInfo[self.nIndex].ad_id);
        //             // }

        //             if (DeviceUtil.isWXMiniGame()) {
        //                 //2020.7.13-1-4
        //                 ViewManager.getInstance().showView(MoreGameOperRequest_Als);
        //             }
        //         }
        //     };
        //     platform.navigateToMiniProgram(data);
        // }

        GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex,MoreGameOperRequest_Als);
    }
}