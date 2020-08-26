import { Als_GameData } from "../../common/GameData";
import PlatformDY from "../../../PlatformDY";
import MoreGameOperRequest_Als from "./MoreGameOperRequest";
import MoreGameOperRequestTwo_Als from "./MoreGameOperRequestTwo";
import MoreGameOperRequestTemp_Als from "./MoreGameOperRequestTemp";
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class WeCatMoreGameItemOne713_Als extends BaseSceneUISkin {
    public className_key = "WeCatMoreGameItemOne713";
    public imageIcon: Laya.Image;
    public lableGameName: Laya.Label;

    private nIndex: number;
    private stGameIndex: any;
    constructor(data: any) {
        super();
        this.nIndex = data;

        this.skin = "game/uiView/WeCatMoreGameItemOne713.json";
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

    

    private initView() {
        let weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo
        if (this.nIndex < 0 || this.nIndex >=weCatMiniIconsInfo.length) {
            this.nIndex = weCatMiniIconsInfo.length - 1;
            if (this.nIndex < 0) return;
        }
        let alsDate = weCatMiniIconsInfo[this.nIndex]
        this.lableGameName.text = alsDate.name;
        this.imageIcon.skin = alsDate.ad_img;
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
        //             //2020.7.13-1-4
        //             // if(DeviceUtil.isWXMiniGame()){
        //             //     ViewManager.getInstance().showView(MoreGameOperRequestTwo);
        //             // }
        //             ViewManager.getInstance().showView(MoreGameOperRequestTemp_Als);
        //         }
        //     };
        //     platform.navigateToMiniProgram(data);     
       // }
       GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex,MoreGameOperRequestTemp_Als);
    }
}