import ConfigManager_Als from "../../../games/ConfigManager";
import SuccessfulEntryOneView_Als from "./SuccessfulEntryOneView";
import SuccessfulEntryThreeView_Als from "./SuccessfulEntryThreeView";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";
import { PlayerDataManager_Als } from "../../../common/GameDataManager";
import { GoodsType } from "../../../games/CommonDefine";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";
import { PopBaseScene } from "../../base/PopBaseScene";

/** 分享录屏 */
export default class ShareRecordVideoView_Als extends PopBaseScene {
    className_key = "ShareRecordVideoView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
    private btn_shareVideo: Laya.Button;
    private btn_cancel: Laya.Button;
    private shareGlodCount: Laya.Image;
    private als_nGlodCount = 50;

    public constructor(data: any) {
        super(data);
        this.skin = "game/uiView/ShareRecordVideoSkinView.json";
    }

    protected childrenCreated() { }


    setData(data: any) {
        super.setData(data);
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }
    private refreshUiView() {
        /** 刷新分享的金币 */
        let stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(18);
        if (stGameConfig) {
            this.als_nGlodCount = parseInt(stGameConfig.strValue);
        }
        BitmapLabelUtils.setLabel(this.shareGlodCount, this.als_nGlodCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
    }

    public initView() {
        console.log("ShareRecordVideoView data ->", this.viewData_);
        ViewChangeManager_Als.getInstance().CommonView.rmobtev_alt();
        this.refreshUiView();
        this.yanChiXianshi();
        MiniManeger_Als.instance.showBannerAd();
    }

    public addEvent() {
        this.registerEvent(this.btn_shareVideo, Laya.Event.CLICK, this.onMouse_Click_als, this);
        this.registerEvent(this.btn_cancel, Laya.Event.CLICK, this.onMouse_Click_als, this);
    }



    onRemoved() {
        this.removeEvent();
        ViewChangeManager_Als.getInstance().CommonView.abte_alt();
        if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigManager_Als.getInstance().getTreasureByCurLevel() == 1) {
            ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
        } else {
            ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
        }
    }

    private shareDouYin() {
        let self = this;
        MiniManeger_Als.instance.bFlagDouYin = true;
        MiniManeger_Als.instance.shareAppMessage({
            sucFun: () => {
                console.log("发布录制视频成功");
                TipsManager.getInstance().showDefaultTips('分享成功');
                if (MiniManeger_Als.instance.onShareVideoSuccess) {
                    return;
                }
                PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, self.als_nGlodCount);
                self.btn_shareVideo.mouseEnabled = self.btn_cancel.mouseEnabled = true;
                self.removeUs();
            },
            failFun: () => {
                console.log("发布录制视频失败");
                TipsManager.getInstance().showDefaultTips('分享失败');
                self.btn_shareVideo.mouseEnabled = self.btn_cancel.mouseEnabled = true;
            }
        });
    }

    private shVideo_als() {
        let self = this;
        self.btn_shareVideo.mouseEnabled = self.btn_cancel.mouseEnabled = false;
        if (DeviceUtil.isTTMiniGame()) {
            let info = platform.getSystemInfoSync() as any;
            if (info.appName.toUpperCase() == 'DOUYIN') {
                this.shareDouYin();
            } else {
                this.shareTT();
            }
        } else {
            MiniManeger_Als.instance.shareAppMessage();
        }
    }

    private shareTT() {
        let self = this;
        MiniManeger_Als.instance.shareGameVideo({
            successFun: () => {
                PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, self.als_nGlodCount);
                self.btn_shareVideo.mouseEnabled = self.btn_cancel.mouseEnabled = true;
                self.removeUs();
            }, failFun: () => {
                self.btn_shareVideo.mouseEnabled = self.btn_cancel.mouseEnabled = true;
            }, errorFun: () => {
                self.btn_shareVideo.mouseEnabled = self.btn_cancel.mouseEnabled = true;
            }
        })
    }

    removeUs() {
        super.removeUs();
    }
    /**延迟显示 */
    private yanChiXianshi() {
        this.btn_cancel.visible = false;
        Laya.timer.once(2000, this, () => {
            this.btn_cancel.visible = true;
        });
    }

    private onMouse_Click_als(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btn_shareVideo:
                this.shVideo_als();
                break
            case this.btn_cancel:
                this.removeUs();
                break
        }
    }
}