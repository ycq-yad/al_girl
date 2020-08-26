import { Als_GameData } from "../../common/GameData";
import PlatformDY from "../../../PlatformDY";
import MoreGameOperRequestTwo_Als from "./MoreGameOperRequestTwo";
import MoreGameOperRequest_Als from "./MoreGameOperRequest";
import GameCenterManager_Als from "../../manager/GameCenterManager";

export default class WeCatOperReqItem713_Als extends BaseSceneUISkin {
    public className_key = "WeCatOperReqItem713";
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    public image_icon: Laya.Image;
    public lable_name: Laya.Label;
    private nIndex: number;
    private stGameIndex: any;
    private bAni: boolean;
    constructor(data: any, nWith: number, nHeight: number) {
        super();
        this.nIndex = data;
        this.skin = "game/uiView/WeCatOperReqItem713.json";
        this.width = nWith;//375;
        this.height = nHeight;//430;
        this.pivotX = this.width / 2;
        this.pivotY = this.height / 2;
        this.bAni = false;
    }

    onAddStage(): void {
        super.onAddStage();
        this.addEvent();
        this.initView()
    }

    onRemoved() {
        this.removeEvent();
        Laya.Tween.clearAll(this);
    }

    setData(data: any): void {
        this.nIndex = data;
        this.initView();
    }

    setAni(bAni: boolean) {
        this.bAni = bAni;
    }

    private initView() {
        if (this.nIndex < 0 || this.nIndex >= Als_GameData.getInstance().weCatMiniIconsInfo.length) {
            this.nIndex = Als_GameData.getInstance().weCatMiniIconsInfo.length - 1;
            if (this.nIndex < 0) return;
        }
        let stData = Als_GameData.getInstance().weCatMiniIconsInfo;
        let stDataIndex = Als_GameData.getInstance().weCatMiniIconsInfo[this.nIndex];
        this.lable_name.text = stDataIndex.name;
        this.image_icon.skin = stDataIndex.ad_img;
        this.stGameIndex = Als_GameData.getInstance().weCatMiniIconsInfo[this.nIndex];
        this.startOperAni_als();
    }

    private addEvent() {
        if (!DeviceUtil.isTTMiniGame()) {
            this.on(Laya.Event.CLICK, this, this.gotoGame_als);
        }
    }

    private removeEvent() {
        this.off(Laya.Event.CLICK, this, this.gotoGame_als);
    }

    private gotoGame_als() {
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

    /**摇摆的动画 */
    private startOperAni_als() {
        if (!this.bAni) {
            return;
        }
        this.operAni_als();
    }

    private operAni_als() {
        Laya.Tween.clearAll(this);
        Laya.Tween.to(this, { rotation: -5 }, 500, null, Laya.Handler.create(this, (args) => {
            Laya.Tween.to(this, { rotation: 5 }, 500, null, Laya.Handler.create(this, (args) => {
                Laya.timer.once(0, this, this.operAni_als);
            }));
        }));
    }
}