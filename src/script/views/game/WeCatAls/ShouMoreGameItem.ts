import { BaseUIScene } from "../../base/BaseUIScene";
import PlatformDY from "../../../../PlatformDY";
import { Als_GameData } from "../../../common/GameData";
import MoreGameOperRequest_Als from "../MoreGameOperRequest";
import GameCenterManager_Als from "../../../manager/GameCenterManager";


export default class SMGItem_Als extends BaseUIScene {
    public className_key = "ShouMoreGameItem";
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    public image_icon: Laya.Image;
    public lable_name: Laya.Label;
    private _nIndex: number;
    private _stGameIndex: any;
    private _bAni: boolean;
    constructor(data: any, nWith: number, nHeight: number) {
        super();
        this.skin = "game/uiView/WeCatAls/ShowMoreGameInfoItem.json";
        this._nIndex = data;
        this.width = nWith;//375;
        this.height = nHeight;//430;
        this.pivotX = this.width / 2;
        this.pivotY = this.height / 2;
        this._bAni = true;
    }

    setData(data: any): void {
        this.removeEvent();
        this.addEvent();
        this._nIndex = data;
        this.initView();
    }

    onRemoved() {
        this.removeEvent();
        Laya.Tween.clearAll(this);
    }





    initView() {
        let stData = Als_GameData.getInstance().weCatMiniIconsInfo;

        if (this._nIndex < 0 || this._nIndex >= stData.length) {
            this._nIndex = stData.length - 1;
            if (this._nIndex < 0) return;
        }
        let stDataIndex = stData[this._nIndex];
        this.lable_name.text = stDataIndex.name;
        this.image_icon.skin = stDataIndex.ad_img;
        this._stGameIndex = stData[this._nIndex];
        this.startOperAni_als();
    }

    setAni(b: boolean) {
        this._bAni = b;
    }

    addEvent() {
        this.registerEvent(this, Laya.Event.CLICK, this.gotoGame_als, this);
    }

    private funcFial_als() {
        if (DeviceUtil.isWXMiniGame()) {
            //2020.7.13-1-4
            ViewManager.getInstance().showView(MoreGameOperRequest_Als);
        }
    }

    private gotoGame_als() {
        GameCenterManager_Als.getInstance().GameCenterGotoGame_als(this._stGameIndex, this.funcFial_als);
    }


    private operAni_als() {
        Laya.Tween.clearAll(this);
        Laya.Tween.to(this, { rotation: -5 }, 500, null, Laya.Handler.create(this, (args) => {
            Laya.Tween.to(this, { rotation: 5 }, 500, null, Laya.Handler.create(this, (args) => {
                Laya.timer.once(0, this, this.startOperAni_als);
            }));
        }));
    }


    /**摇摆的动画 */
    private startOperAni_als() {
        if (!this._bAni) {
            return;
        }
        this.operAni_als();
    }
}