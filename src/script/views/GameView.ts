import GameStateManager_Als from "../games/GameStateManager";
import { EnterGameType } from "../games/CommonDefine";
import ViewChangeManager_Als from "../games/ViewChangeManager";
import GameEvent_Als from "../games/GameEvent";
import { PlayerDataManager_Als } from "../common/GameDataManager";
import ConfigManager_Als from "../games/ConfigManager";
import { LevelManager_Als } from "../manager/LevelManager";
import Als_SoundManager from "../common/SoundManager";
import { MiniManeger_Als } from "../minigame/MiniManeger";
import MiniEventConst_Als from "../minigame/MiniEventConst";
import GuessLike_Als from "./game/GuessLike";
import WeCatMoreGameView_Als from "./game/WeCatMoreGameView";
import { Als_GameData } from "../common/GameData";

export default class GameView_Als extends BaseSceneUISkinPopView {
    className_key = "GameView";
    public bg_img_res = null

    //public grp_center:Laya.Box;
    public grp_center: Laya.Box;
    public boxBtList: Laya.Box;
    public imageBtGotoNextLevel: Laya.Image;
    public imageBtTip: Laya.Image;
    public imageBtRestart: Laya.Image;
    public imageBtToHome: Laya.Image;
    public hBoxIndex: Laya.HBox;
    public box_choose: Laya.Box;
    public icon_chooseLeft: Laya.Image;
    public icon_chooseRight: Laya.Image;
    public icon_left: Laya.Image;
    public icon_right: Laya.Image;
    public spNum: Laya.Sprite;
    public imageSpFull: Laya.Image;
    public imageBtAttSp: Laya.Image;
    public stLableTime: Laya.Label;
    public imageBtGoldAdd: Laya.Image;
    public glodNum: Laya.Sprite;
    public spLevelLeft: Laya.Sprite;
    public spLevelRight: Laya.Sprite;
    public icon_chooseLeft_shdow: Laya.Image;
    public icon_chooseRight_shdow: Laya.Image;
    public imageHand: Laya.Image;
    public boxLevelInfo: Laya.HBox;
    public imageTTVideo: Laya.Image;

    //2020.7.13-2
    public imageWeCatMoreGame: Laya.Image;


    //一些数据控制
    public bHanderAniShow: boolean;
    public bIsRunning: boolean;

    //当前关卡是否已经结束
    public bLevelOver: boolean;

    constructor() {
        super();
        this.bHanderAniShow = false;
        this.bIsRunning = false;
        this.bLevelOver = false;
        this.skin = "game/GameView.json";
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        let self = this;
        //2020.7.13-3
        if (!self.guessLike && MiniManeger_Als.instance.isWxMiniGameForOperReq() && BaseConst.infos.gameInfo.openPsAward == 1) {//微信需要增加滑动推荐
            MiniManeger_Als.instance.createGuessLike(self).then((guessLike) => {
                if (!guessLike) {
                    return;
                }
                self.guessLike = guessLike;
                self.guessLike.x = (Laya.stage.width - self.guessLike.width) / 2;
                self.guessLike.y = 300;
            });
        }
    }

    private guessLike: GuessLike_Als;//推广位
    onAddStage(): void {
        MiniManeger_Als.instance.showInterstitialAd();
        EventMgr.getInstance().addEvent(GameEvent_Als.CHANGE_VIDEO_IMAGE, this, this.stopVideoImage_alse);
        this.initView();

        // if (DeviceUtil.isTTMiniGame()) {
        //     MiniManeger_Als.instance.hideBanner();
        // } else if (DeviceUtil.isQQMiniGame()) {
        //     MiniManeger_Als.instance.showBannerAd();
        // } else if (DeviceUtil.isWXMiniGame()) {

        // }
        MiniManeger_Als.instance.showBannerAd();//2020.7.13
    }

    onEnable() {
        //2020.7.13-2
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            if (PlayerDataManager_Als.getInstance().isSecondEnterGame()) {
                Laya.timer.once(1000, this, () => {
                    this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView_Als) as WeCatMoreGameView_Als;
                    this.addEvent();
                    this.imageWeCatMoreGame.visible = true;
                });
            } else {
                this.imageWeCatMoreGame.visible = true;
                this.addEvent();
            }
        } else {
            this.addEvent();
        }
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.bIsRunning = false;
        Laya.Tween.clearAll(this.imageBtTip);
        Laya.timer.clearAll(this);

    }

    private pWeCatMoreGameView: WeCatMoreGameView_Als;
    private initView() {
        //this.initPlView();
        this.bLevelOver = false;
        this.bIsRunning = true;
        //this.refreshUpIndeInfo(2,3);
        this.refreshChoose();
        this.startimageBtTipAni_als();
        // this.refreshSPValue();
        // this.refreshGoldValue();
        // this.refreshTimeView();
        this.imageBtTip.visible = false;
        this.imageBtGotoNextLevel.visible = false;

    }


    /**初始化一下选择的的显示 */
    public refreshChoose() {
        this.box_choose.visible = false;
        this.initViewInfo_als();
    }


    private addEvent() {
        this.imageBtToHome.on(Laya.Event.CLICK, this, this.returnToGameHome_als);
        this.imageBtTip.on(Laya.Event.CLICK, this, this.onGameViewShareGame_als);
        this.imageBtRestart.on(Laya.Event.CLICK, this, this.gameViewRestartGame_als);
        this.imageBtGotoNextLevel.on(Laya.Event.CLICK, this, this.onGameViewWatchVideoNextLevel_als);
        //2020.7.13-2
        this.imageWeCatMoreGame.on(Laya.Event.CLICK, this, this.weCatViewOper);
    }

    private removeEvent() {
        this.imageBtToHome.off(Laya.Event.CLICK, this, this.returnToGameHome_als);
        this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
        this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
        this.imageBtTip.off(Laya.Event.CLICK, this, this.onGameViewShareGame_als);
        this.imageBtRestart.off(Laya.Event.CLICK, this, this.gameViewRestartGame_als);
        this.imageBtGotoNextLevel.off(Laya.Event.CLICK, this, this.onGameViewWatchVideoNextLevel_als);
        EventMgr.getInstance().removeEvent(GameEvent_Als.CHANGE_VIDEO_IMAGE, this, this.stopVideoImage_alse);
        //2020.7.13-2
        this.imageWeCatMoreGame.off(Laya.Event.CLICK, this, this.weCatViewOper);
        //this.removeEnentUpdateView();
    }
    //2020.7.13-2
    private weCatViewOper() {
        this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView_Als) as WeCatMoreGameView_Als;
    }

    public closeWeCatMoreGameView() {
        if (WeCatMoreGameView_Als.isOpen && this.pWeCatMoreGameView) {
            this.pWeCatMoreGameView.removeSelf();
        }
    }

    /**下一关 */
    private onGameViewWatchVideoNextLevel_als() {
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAME_UP, 1);
        Als_SoundManager.getInstance().playEffect("button", 1);
        //this.imageBtGotoNextLevel.off(Laya.Event.CLICK, this, this.onGameViewWatchVideoNextLevel_als);
        MiniManeger_Als.instance.playViderAd({
            successFun: () => {
                this.onGameViewNextLevel_als();
           //     this.imageBtGotoNextLevel.on(Laya.Event.CLICK, this, this.onGameViewWatchVideoNextLevel_als);
            }
        });

    }

    private onGameViewNextLevel_als() {
        if (this.bLevelOver) {
            return;
        }
        // this.removeSelf();
        ViewChangeManager_Als.getInstance().goToNextLevel();
    }


    /**重新开始游戏 */
    private gameViewRestartGame_als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        if (this.bLevelOver) {
            return;
        }
        ViewChangeManager_Als.getInstance().restartGame(true);
    }


    /**返回主页 */
    private returnToGameHome_als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
        ViewChangeManager_Als.getInstance().CurLevelBase.returnToGameHome();
        this.removeSelf();
    }

    public onClick_alse(evt: Laya.Event) {
        Als_SoundManager.getInstance().playEffect("button", 1);
        let tar = (evt.currentTarget as Laya.Image)
        let data = this.viewData_.data;
        let icon_name = ''
        switch (evt.currentTarget) {
            case this.icon_chooseLeft:
                icon_name = data.chooseLeftName;
                this.chooseLeft = 'left';
                this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);//关闭右边的事件
                break;
            case this.icon_chooseRight:
                icon_name = data.chooseRightName;
                this.chooseLeft = 'right';
                this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);//关闭左边的点击事件
                break;
        }
        this.viewData_.callBack(icon_name == data.rightName, icon_name);
        tar.skin = 'resource/assets/img/level/baseboard2.png';
        //this.mouseEnabled = false;
        this.imageBtTip.visible = false;
        this.imageBtGotoNextLevel.visible = false;
        //重置一下手相关的数据
        // this.initViewInfo();
    }

    public chooseLeft: 'left' | "right" = null

    /**
     * 显示正确或者错误
     */
    public showResultIcon_alse(isRight: boolean) {
        this.createChooseAnswer_als(isRight)
        if (isRight) {
            Als_SoundManager.getInstance().playEffect("right", 1);
            Laya.timer.once(1000, this, () => {

                this.hideChoseView_als()
            })
        } else {
            Als_SoundManager.getInstance().playEffect("wrong", 1);
        }
    }

    public createChooseAnswer_als(isRight: boolean) {
        let tar: Laya.Image;
        let skin = 'resource/assets/img/choose/gameinterface_icon_4.png';
        if (!isRight) {
            skin = 'resource/assets/img/choose/gameinterface_icon_5.png';
        }
        if (this.chooseLeft == 'left') {
            tar = this.icon_left;
        } else {
            tar = this.icon_right;

        }
        let img = new Laya.Image();
        img.skin = skin;
        img.centerX = img.centerY = 0;
        tar.addChild(img);
    }

    public showChoseView_alse(data: any) {
        this.imageBtTip.visible = true;
        this.imageBtGotoNextLevel.visible = true;
        //展示的时候初始化数据
        this.initViewInfo_als();
        this.viewData_ = data;
        this.box_choose.visible = true;
        this.refreshViewChose_als();
        this.icon_chooseLeft.once(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
        this.icon_chooseRight.once(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
        // ViewChangeManager.getInstance().CommonView.removeBtEvent();
        //2020.7.13-2
        this.imageWeCatMoreGame.off(Laya.Event.CLICK, this, this.weCatViewOper);
    }


    public hideChoseView_als() {
        this.imageBtTip.visible = false;
        this.imageBtGotoNextLevel.visible = false;
        Laya.Tween.to(this.box_choose, { scaleX: 0, scaleY: 0 }, 500, Laya.Ease.backIn);
        this.box_choose.visible = false;
        this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
        this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
        //隐藏的时候初始化数据的时候初始化数据
        this.initViewInfo_als();
        //2020.7.13-2
        this.imageWeCatMoreGame.on(Laya.Event.CLICK, this, this.weCatViewOper);
        // ViewChangeManager.getInstance().CommonView.addBtEvent();
    }


    public refreshViewChose_als() {
        //this.mouseEnabled = true;
        this.box_choose.scale(0.2, 0.2);
        Laya.Tween.to(this.box_choose, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.backIn);
        this.icon_chooseRight.skin = 'resource/assets/img/level/baseboard1.png';
        this.icon_left.removeChildren();
        this.icon_chooseRight.removeChildren();
        this.icon_right.removeChildren();
        this.icon_chooseLeft.skin = 'resource/assets/img/level/baseboard1.png';
        this.icon_chooseLeft.removeChildren();
        this.icon_left.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseLeft + '.png'
        this.icon_right.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseRight + '.png';
    }

    public removeSelf() {
        // GameManager.instance.showTopBar(ShowType.showAll)
        return super.removeSelf();
    }


    /****************************游戏顶部的节数更新**************************** */
    public refreshUpIndeInfo_als(nIndexCur: number, nIndexMax: number) {
        let nIndexTemp = 0;
        //刷新左右两边的关卡数值
        let nCur = PlayerDataManager_Als.getInstance().stPlayerDataBase.nCurLevel;
        nCur = nCur >= PlayerDataManager_Als.getInstance().nMaxLevelCount ? PlayerDataManager_Als.getInstance().getCurLevelMax() - 1 : nCur;
        //如果没达到最大关卡就显示
        if (!PlayerDataManager_Als.getInstance().allCustomsClearance()) {
            this.spLevelLeft.visible = true;
            this.spLevelRight.visible = true;
            BitmapLabelUtils.setLabel(this.spLevelLeft, (nCur + 1).toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
            BitmapLabelUtils.setLabel(this.spLevelRight, (nCur + 2).toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
        } else {
            this.spLevelLeft.visible = false;
            this.spLevelRight.visible = false;
        }

        let func = () => {
            let nCount = this.hBoxIndex.numChildren;
            for (let i = 0; i < nCount; ++i) {
                let stImageInfo = this.hBoxIndex.getChildAt(i) as Laya.Image;
                if (stImageInfo) {
                    //显示小结
                    if (i < nIndexMax) {
                        stImageInfo.visible = true;
                    } else {
                        stImageInfo.visible = false;
                    }
                    //显示小结完成的进度
                    let pImageFinish = stImageInfo.getChildAt(0) as Laya.Image;
                    if (pImageFinish) {
                        if (i < nIndexCur) {
                            pImageFinish.visible = true;
                            ++nIndexTemp;
                        } else {
                            pImageFinish.visible = false;
                        }
                    }
                }
            }
            if (nIndexTemp >= nIndexMax) {
                this.bLevelOver = true;
            }
            //刷新下长度
            this.boxLevelInfo.width = 108 + 20 + this.hBoxIndex.width + 20 + 108;
        }

        func();
    }

    /**提示相关的功能*/
    private onGameViewShareGame_als() {
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAME_TIP, 1);
        Als_SoundManager.getInstance().playEffect("button", 1);
        if (!this.box_choose.visible && !this.bHanderAniShow) {
            console.log("box choose not show!");
            return;
        }
        //TODO 分享
        let self = this;
        MiniManeger_Als.instance.bFlagDouYin = false;
        MiniManeger_Als.instance.shareAppMessage({
            sucFun: () => {
                self.onShareGameSuccess_als();
            }
        });
    }

    /**分享成功后的操作 */
    private onShareGameSuccess_als() {
        let data = ViewChangeManager_Als.getInstance().CurLevelBase.getCurChooseInfo();
        let nHandX = 0;
        let nHandY = 0;
        if (!data) {
            return;
        }
        if (data.chooseLeftName == data.rightName) { //如果正确值是左边
            this.icon_chooseRight.skin = 'resource/assets/img/level/baseboard2.png';
            this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);//关闭右边的点击事件
            nHandX = this.icon_chooseLeft.x + this.icon_chooseLeft.width / 2;
            nHandY = this.icon_chooseLeft.y + this.icon_chooseLeft.height / 2;
        } else { //反之遮住左边
            this.icon_chooseLeft.skin = 'resource/assets/img/level/baseboard2.png';
            nHandX = this.icon_chooseRight.x + this.icon_chooseRight.width / 2;
            nHandY = this.icon_chooseRight.y + this.icon_chooseRight.height / 2;
            this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);//关闭左边的点击事件
        }
        //显示小手
        this.imageHand.x = nHandX;
        this.imageHand.y = nHandY;
        this.bHanderAniShow = true;
        this.imageHand.visible = true;
        //手的一个小动画
        this.handAni_als();
    }

    /**小手的动画 */
    private handAni_als() {
        if (!this.bHanderAniShow) {
            return;
        }
        this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_1.png";
        Laya.timer.once(500, this, () => {
            this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_2.png";
            Laya.timer.once(500, this, this.handAni_als);
        })
    }
    /**初始化数据 */
    private initViewInfo_als() {
        // this.icon_chooseLeft_shdow.visible = false;
        // this.icon_chooseRight_shdow.visible = false;
        this.imageHand.visible = false;
        this.bHanderAniShow = false;
        this.bLevelOver = false;
    }

    private startimageBtTipAni_als() {
        if (!this.bIsRunning) {
            return;
        }
        Laya.Tween.clearAll(this.imageBtTip);
        Laya.Tween.to(this.imageBtTip, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
            Laya.Tween.to(this.imageBtTip, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
                Laya.timer.once(0, this, this.startimageBtTipAni_als);
            }));
        }));
    }

    // /**头条平台的界面初始化 */
    // private initPlView() {
    //     if (DeviceUtil.isTTMiniGame()) {
    //         this.imageTTVideo.visible = true;
    //     }
    // }

    /**开始录屏的界面设置*/
    public startVideoImage_alse() {
        this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_4.png";
    }

    /**关闭视频录制 */
    public stopVideoImage_alse() {
        console.log("stopVideoImage");
        this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_5.png";
    }
}