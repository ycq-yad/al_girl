import SMGItem_Als from "./ShouMoreGameItem";
import PlatformDY from "../../../../PlatformDY";
import { BaseUIScene } from "../../base/BaseUIScene";
import { Als_GameData } from "../../../common/GameData";
import GameCenterManager_Als from "../../../manager/GameCenterManager";

export default class SMGIView extends BaseUIScene {
    public className_key = "SMGIView";
    constructor() {
        super();
        this.skin = "game/uiView/WeCatAls/ShowMoreGameInfoInView.json";
        this._image_hand_als = null;
        this._bAni_als = true;
        this.height = 860;
        this.width = 800;
    }

    private _bAni_als: boolean;


    public set ani(b: boolean) {
        this._bAni_als = b;
    }

    public initView() {
        this.refreshWCMG_Als();
    }

    private _image_hand_als: Laya.Image;
    public box_wecat: Laya.Box;

    private refreshHead(xTemp: number, yTemp: number) {
        if (!this._image_hand_als) {
            this._image_hand_als = new Laya.Image("resource/assets/img/wecat/failed_icon_1.png");
            this.box_wecat.addChild(this._image_hand_als);
        }
        //刷新手的位置
        this._image_hand_als.visible = true;
        this._image_hand_als.x = xTemp;
        this._image_hand_als.y = yTemp;
    }

    private showItem(pWeCatMoreGameItemOne: SMGItem_Als, aryInfo: any, nCount: number, nXAddTemp: number, nYAddTemp: number, i: number) {
        if (pWeCatMoreGameItemOne) {
            pWeCatMoreGameItemOne.setAni(this._bAni_als);
            pWeCatMoreGameItemOne.setData(aryInfo[i]);
        } else {
            pWeCatMoreGameItemOne = new SMGItem_Als(aryInfo[i], 375, 430);
            pWeCatMoreGameItemOne.setAni(false);
            let nAddX = Math.floor(i % nCount);
            let nYAdd = Math.floor(i / nCount);
            pWeCatMoreGameItemOne.x = pWeCatMoreGameItemOne.pivotX + nXAddTemp * nAddX
            pWeCatMoreGameItemOne.y = pWeCatMoreGameItemOne.pivotY + nYAddTemp * nYAdd;
            this.box_wecat.addChild(pWeCatMoreGameItemOne);
        }
    }
    ////2020.7.13-4
    public refreshWCMG_Als() {
        let nXAddTemp = 425;
        let nYAddTemp = 450;
        let aryInfo: number[] = [];
        let nCount = 2;
        aryInfo = GameCenterManager_Als.getInstance().getRandomIndex_num_alt(4);
        let nLen = 4;
        let nRandomNum = Utils.random(0, nLen - 1);
        let nHandX = 0;
        let nHandY = 0;
        nLen = nLen >= aryInfo.length ? aryInfo.length : nLen;
        for (let i = 0; i < nLen; ++i) {
            let pWeCatMoreGameItemOne: SMGItem_Als = this.box_wecat.getChildAt(i) as SMGItem_Als;
            this.showItem(pWeCatMoreGameItemOne, aryInfo, nCount, nXAddTemp, nYAddTemp, i);
            if (nRandomNum == i) {
                nHandX = pWeCatMoreGameItemOne.x;
                nHandY = pWeCatMoreGameItemOne.y;
            }
        }
        this.refreshHead(nHandX, nHandY);
        GameCenterManager_Als.getInstance().refreshGameList_Als();
    }

}