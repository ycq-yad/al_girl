import AnimationManager_Als from "../../../manager/AnimationManager";
import Als_SoundManager from "../../../common/SoundManager";
import GameHomeView_Als from "../../GameHomeView";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";
import GameStateManager_Als from "../../../games/GameStateManager";
import { EnterGameType } from "../../../games/CommonDefine";
import { PlayerDataManager_Als } from "../../../common/GameDataManager";
import GameView_Als from "../../GameView";
import { LevelManager_Als } from "../../../manager/LevelManager";
import ConfigManager_Als from "../../../games/ConfigManager";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";
import GameLogicProcessingManager_Als from "../../../games/GameLogicProcessingManager";
import { Als_GameData } from "../../../common/GameData";
import MoreGameOperRequest_Als from "../MoreGameOperRequest";
import MoreGameView_Als from "../moregame/MoreGameView";
import ShareRecordVideoView_Als from "../Als_PopView/ShareRecordVideoView";
import SuccessfulEntryOneView_Als from "../Als_PopView/SuccessfulEntryOneView";
import SuccessfulEntryThreeView_Als from "../Als_PopView/SuccessfulEntryThreeView";
import SuccessfulEntryOneViewTwo_Als from "../Als_PopView/SuccessfulEntryOneViewTwo";
import FailEntryOneView_Als from "../Als_PopView/SettlementVew/FailEntryOneView";

/**
 * 第一关
 */
export class LevelBase_Als extends BaseSceneUISkin {
    className_key = "LevelScene";

    public constructor(data_) {
        super();
        this.viewData_ = this.mapData = data_;
        // this.skin = 'game/Level1Scene.json';
    }
    public box_player: Laya.Box;
    public boxDialog: Laya.Box;
    //场景的动画
    public box_enb: Laya.Box;

    //是否返回了主界面
    public bReturbToHome: boolean;

    //动画是否已经销毁
    public bAniDestory: boolean = false;

    //场景移动的动画
    public box_game: Laya.Box;
    public onAddStage() {
        super.onAddStage();
    }

    public childrenCreated(): void {
        console.log(this.className_key + " childrenCreated!!");
        this.createLabelIcon();
        this.initView();
        this.addEvent();
    }

    /**
     * 初始化角色播放状态
     */
    public async initPlayerStatus() {
        if (this.mapData.player.status) {
            (!this.ani_player) && (this.ani_player = await this.createSkeleton(this.mapData.player.url));
            if (this.box_player.getChildIndex(this.ani_player) == -1) {
                this.ani_player.x = this.mapData.player.status.x;
                this.ani_player.y = this.mapData.player.status.y;
                this.box_player.addChild(this.ani_player);
                this.ani_player.play(this.mapData.player.status.aniN, this.mapData.player.status.loop);
            }
        }
    }

    public icon_showLabel: Laya.Image;
    public lableValue: Laya.Label;
    public createLabelIcon() {
        let skin = 'resource/assets/img/ui/game/gameinterface_baseboard_8.png';
        this.icon_showLabel = new Laya.Image();
        this.icon_showLabel.skin = skin;
        // icon_showLabel.centerY = -300;
        // icon_showLabel.x = 190;
        this.icon_showLabel.visible = false;
        //this.icon_showLabel.zOrder = 10;

        this.lableValue = new Laya.Label();
        this.lableValue.centerX = 0;
        this.lableValue.centerY = -25;
        this.lableValue.fontSize = 30;
        this.lableValue.wordWrap = true;
        this.lableValue.width = 250;
        this.icon_showLabel.addChild(this.lableValue);
        //this.box_game.addChild(this.icon_showLabel)
        this.boxDialog.addChild(this.icon_showLabel)
    }
    /**
     * 节点索引
     */
    public index: number = 0;

    public mapData: any;
    public setData(data) {
        this.viewData_ = data;
        this.mapData = data;
    }
    /**
     * 展示对话框的场景
     */
    public showLabelObj = {};
    /**
     * 声音
     */
    public showSoundObj = {};

    /**已经播放的音效名称 */
    public listPlayedSoundName = [];


    public aniArr: Laya.Skeleton[] = [];

    /**GameView */
    public pGameView: GameView_Als;

    /**初始化游戏相关信息 */
    public initView() {
        this.bReturbToHome = false;
        this.index = 0;
        this.box_player.x = (this.index) * 1080;
        this.box_game.x = (this.index) * -1080;
        //清理动画
        this.destroyAni();
        //清理声音
        this.showSoundObj = [];
        this.listPlayedSoundName = [];
        if (this.pGameView) {
            this.pGameView.removeSelf();
        }
        this.pGameView = null;
        // if (this.popChooseScene == null) {
        //     this.popChooseScene = new PopChooseScene();
        //     this.addChild(this.popChooseScene);
        // }
        // this.popChooseScene.visible = false;

        this.box_player.removeChildren();
        this.box_enb.removeChildren();

        ViewChangeManager_Als.getInstance().CurLevelBase = this;
        this.refreshViewInLevel();
        this.bAniDestory = false;
    }

    public localAniName: string = null;

    public ani_player: Laya.Skeleton;

    /**
     * 播放动画
     */
    public playAni(aniName: any, callBack: Function, isLoop = false) {
        //console.log("aniName>>>>>>>>>>>>", aniName, "curtime = ", GameLogicProcessingManager.GetCurTime());
        this.localAniName = aniName;
        if (this.ani_player != null) {
            // this.ani_player.player.stop() ;
            this.ani_player.visible = true;
            if (callBack) {
                this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete)
                this.ani_player.player.once(Laya.Event.STOPPED, this, this.onComplete, [aniName, callBack])
            }
            this.ani_player.play(aniName, isLoop);

        } else {
            callBack && callBack(aniName)

        }
    }
    public onComplete(aniName: string, callBack: Function) {
        //console.log("onComplete aniName =", aniName, "curtime = ", GameLogicProcessingManager.GetCurTime());
        callBack && callBack(aniName);
    }

    /**
     * 创建龙骨动画
     * @param url 1
     */
    public async createSkeleton(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationManager_Als.instance.showSkeletonAnimation(url, (boomAnimation: Laya.Skeleton) => {
                // this.addChild(boomAnimation);
                boomAnimation.player.playbackRate = 1;
                boomAnimation.autoSize = true;
                // boomAnimation.pivotX = boomAnimation.width / 2;
                // boomAnimation.pivotY = boomAnimation.height / 2;
                boomAnimation.scale(1, 1);
                // boomAnimation.play(0, true);
                this.aniArr.push(boomAnimation);
                resolve(boomAnimation);
            }, 0);
        })

    }
    public localData = null
    /**
     * 播放一次后结束的
    */
    public onPlayOnce() {
        this.localData = this.mapData.player.ani[this.localAniName];
        if (this.localData) {//弹出选择
            if (this.localData.pop) {
                this.popChoose();
                if (this.localData.loop) {
                    this.playAni(this.localData.aniName, () => {
                    }, true);
                }
            } else {
                if (this.localData.isWin == 1) {//成功
                    //alert('win');
                    this.onSuccess();
                    return
                } else if (this.localData.isWin == 2) {//失败
                    // this.popChooseScene.showResultIcon(false)
                    this.pGameView.showResultIcon_alse(false);
                    /// alert('fail');
                    //按要求延时1秒弹出窗口
                    Laya.timer.once(1000, this, () => {

                        this.onFail();
                    })

                    return

                }
                this.playAni(this.localData.next, () => {
                    this.onPlayOnce();
                });

            }
        }
    }
    //public popChooseScene: PopChooseScene;
    /**
     * 弹出选择框
     */
    public popChoose() {
        console.log("int pop choose!")
        if (!this.pGameView) {
            return;
        }
        let self = this;
        // this.popChooseScene.visible = true;
        // this.mouseEnabled = true;
        // this.popChooseScene.setData({
        //     data: this.mapData.player.choose, callBack: (right: boolean, aniName: string) => {
        //         self.callBack(right, aniName);
        //     }
        // })
        this.pGameView.showChoseView_alse({
            data: this.mapData.player.choose[this.index], callBack: (right: boolean, aniName: string) => {
                self.callBack(right, aniName);
            }
        })
    }

    /**
     * 游戏开始
     */
    public onStart() {
        let start = this.mapData.player.start;
        this.localData = this.mapData.player.ani[start[this.index]];
        //console.log("11111 this.index = ", this.index, "this.localData = ", this.localData);
        let bFlag = false;
        // if(this.localData.loop){
        //     bFlag = this.localData.loop;
        // // }
        this.playAni(this.localData.aniName, () => {
            this.onPlayOnce();
        }, bFlag);
    }

    /**
     *选择回调
     */
    public callBack(right: boolean, aniName: string) {
        if (right) {
            //this.popChooseScene.showResultIcon(right)
            if (this.index < this.mapData.player.choose.length) {
                this.index++;
            }
            //刷新下进度
            this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
            this.pGameView.showResultIcon_alse(right);
        } else {

        }
        this.playAni(aniName, () => {
            this.onPlayOnce();
        });
    }

    public onPlayLabel(evt: { audioValue: string, floatValue: number, intValue: number, name: string, stringValue: number, time: number }) {
        if (this.bAniDestory) return;
        // sound_girlafraid_1
        if (evt.name != 'undefined' || evt.name != undefined || evt.name != null) {
            // console.log(evt.name);
            if (evt.name.indexOf('sound') > -1) {
                this.playSound(evt);
            } else if (evt.name.indexOf('show') > -1) {
                this.showLable(evt)
            }
        }
    }

    private showLable(evt) {
        let showArr = evt.name.split("_");
        let id = showArr[1];
        if (!this.showLabelObj[id]) {
            this.showLabelObj[id] = true;
            this.showLabelView(parseInt(id));
        }
    }


    private playSound(evt) {
        let soundArr = evt.name.split('_');
        let count = soundArr[2];
        let soundName = soundArr[1];
        let index = null
        let soundObj = this.showSoundObj[this.localAniName];
        if (soundObj == null) {
            soundObj = {}
            index = 1;
            if (Number(count) == 0) {
                (count) = 1 + '';
            }
        } else {
            index = soundObj[soundName];
            if (index == null) {
                index = 1;
                if (Number(count) == 0) {
                    (count) = 1 + '';
                }
            } else {
                if (Number(count) == 0) {
                    (count) = 1 + '';
                } else {
                    return;
                }
            }
        }
        //没有播过的音效记录下名称
        let pData = soundObj[soundName];
        if (!pData) {
            this.listPlayedSoundName.push(soundName);
        }
        soundObj[soundName] = index
        this.showSoundObj[this.localAniName] = soundObj

        //console.log('播放声音', count, soundName);
        // Laya.SoundManager.playSound();
        Als_SoundManager.getInstance().playEffect(soundName, Number(count))
    }

    /**
     * 展示对话框
     */
    public showLabelView(id: number) {
        let self = this;
        if (self.icon_showLabel) {
            Laya.timer.clearAll(self.icon_showLabel);
            let stAnyData = ConfigManager_Als.getInstance().getDialogInfo(id);
            if (stAnyData) {
                if (stAnyData.nR == 1) {
                    self.icon_showLabel.scaleX = -1;
                    self.lableValue.scaleX = -1;
                } else {
                    self.icon_showLabel.scaleX = 1;
                    self.lableValue.scaleX = 1;
                }

                self.icon_showLabel.x = stAnyData.nX;
                self.icon_showLabel.y = stAnyData.nY;
                console.log("len = ", stAnyData.desc.length);
                let nWith = stAnyData.desc.length * 30;
                if (nWith > 250) {
                    nWith = 250;
                }
                self.lableValue.width = nWith;
                self.lableValue.text = stAnyData.desc;
                self.icon_showLabel.visible = true;

                Laya.timer.once(1000, self.icon_showLabel, (icon_showLabel) => {
                    icon_showLabel.visible = false;
                }, [self.icon_showLabel]);
            }
        }
    }
    /**
     * 销毁动画
     */
    public destroyAni() {
        this.bAniDestory = true;
        let aniArr = this.aniArr;
        let len = aniArr.length;
        for (let i = 0; i < len; i++) {
            let ani = aniArr[i];
            if (ani) {
                Laya.loader.clearRes(ani.url);
                ani.stop();
                ani.removeSelf();
                ani.destroy(true);
            }
            ani = null;
        }
        aniArr.splice(0, len);
        this.showLabelObj = {};
        this.ani_player = null;
    }

    /**摧毁音效 */
    public destorySound() {
        let nLen = this.listPlayedSoundName.length;
        for (let i = 0; i < nLen; ++i) {
            Als_SoundManager.getInstance().destoryOneSound(this.listPlayedSoundName[i]);
        }
    }

    public addEvent() {

    }

    public removeEvent() {

    }

    public removeSelf() {
        // GameManager.instance.showTopBar(ShowType.showAll)
        return super.removeSelf();
    }
    /**
    * 当从父节点移除时候
    */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        //增加销毁动画
        this.destroyAni();
        //增加销毁音效
        //this.destorySound();
    }

    /**显示GameHome游戏界面 */
    public showGameHome() {
        this.initPlayerStatus();
        ViewManager.getInstance().showView(GameHomeView_Als);
    }

    /**显示Game*/
    public showGameView() {

    }

    /**游戏逻辑控制 */
    public startGame() {
        ViewChangeManager_Als.getInstance().CommonView.rmobtev_alt();
        //开启录制视频
        MiniManeger_Als.instance.StartRecorderVideo();
        this.bReturbToHome = false;
        this.pGameView = ViewManager.getInstance().showView(GameView_Als) as GameView_Als;
        this.pGameView.startVideoImage_alse();
        this.pGameView.refreshChoose();
        this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
        if (!PlayerDataManager_Als.getInstance().checkDyLogIndexrecorded(PlayerDataManager_Als.getInstance().getCurLevelToChallenge())) {
            ViewChangeManager_Als.getInstance().startGame();
        }
    }

    /**停止游戏 */
    public stopGame() {

    }

    /**重新开始游戏 */
    public restartGame(bReStartAll: boolean = true) {
        //开启录制视频
        MiniManeger_Als.instance.StartRecorderVideo();
        this.bReturbToHome = false;
        this.showSoundObj = [];
        this.showLabelObj = [];
        //this.pGameView  = ViewManager.getInstance().showView(GameView) as GameView;
        if (this.pGameView) {
            this.pGameView.startVideoImage_alse();
            this.pGameView.hideChoseView_als();
            this.pGameView.refreshChoose();
            this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
        } else {
            console.error("can not find pGameView!");
        }
    }


    /**返回主页 */
    public returnToGameHome() {
        MiniManeger_Als.instance.StopVideo();
        this.bReturbToHome = true;
        //Laya.Tween.clearAll(this);
        //增加销毁动画
        this.destroyAni();
        //返回主界面关闭对话框
        if (this.icon_showLabel) {
            this.icon_showLabel.visible = false;
        }
        //如果当前就是最大关卡
        if (PlayerDataManager_Als.getInstance().getCurLevelToChallenge() == PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel()) {
            this.initView();
        } else {
            //打开别的界面前先删除自己的游戏界面
            if (this.pGameView) {
                this.pGameView.removeSelf();
            }
            this.pGameView = null;
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
            LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel());
        }
    }

    /**一些必要的数据清理 */
    public clearData() {
        this.box_player.removeChildren();
        this.box_enb.removeChildren();
    }

    /**游戏成功 */
    public onSuccess() {
        if (this.bReturbToHome) {
            return;
        }
        console.log("Level Success!")
        //2020.7.13-1-1  1.从第4关后，每关开始游戏都会弹砸金蛋误点。
        if (!MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigManager_Als.getInstance().getTreasureByCurLevel() == 1) {
                ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
            } else {
                if (PlayerDataManager_Als.getInstance().getCurLevelToChallenge() % 2 == 1) {
                    console.log("PlayerDataManager.getInstance().getCurLevelToChallenge() = ", PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
                    ViewManager.getInstance().showView(SuccessfulEntryOneViewTwo_Als);
                } else {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                }
            }
        } else {
            //2020.7.13-5
            if (LevelManager_Als.getInstance().nCurLevel >= 3) {
                MoreGameView_Als.bSuccess = true;
                ViewManager.getInstance().showView(MoreGameView_Als);
            } else {
                ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
            }
            //2020.7.13-2
            this.pGameView.closeWeCatMoreGameView();
            PlayerDataManager_Als.getInstance().nGotoLevel = 0;
        }


        if (!PlayerDataManager_Als.getInstance().checkDyLogIndexrecorded(PlayerDataManager_Als.getInstance().getCurLevelToChallenge())) {
            ViewChangeManager_Als.getInstance().endGame();
            PlayerDataManager_Als.getInstance().recordDyLogIndex(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
        }
    }

    /**游戏失败 */
    public onFail() {
        if (this.bReturbToHome) {
            return;
        }
        //2020.7.13-2
        if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
            this.pGameView.closeWeCatMoreGameView();
            PlayerDataManager_Als.getInstance().nGotoLevel = 0;
        }
        console.log("Level Fail!");
        ViewManager.getInstance().showView(FailEntryOneView_Als);
        if (!PlayerDataManager_Als.getInstance().checkDyLogIndexrecorded(PlayerDataManager_Als.getInstance().getCurLevelToChallenge())) {
            ViewChangeManager_Als.getInstance().endGame();
            PlayerDataManager_Als.getInstance().recordDyLogIndex(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
        }
    }

    /**关闭游戏界面 */
    public closeGameView() {
        if (this.pGameView) {
            this.pGameView.removeSelf();
            this.pGameView = null;
        }
    }

    /**刷新关卡中的界面 */
    public refreshViewInLevel() {
        let nCurState = GameStateManager_Als.getInstance().levelState;
        if (nCurState == EnterGameType.enum_EnterGameType_GameHome) {
            this.showGameHome();
            if (this.pGameView) {
                this.pGameView.removeSelf();
            }
        } else {
            if (nCurState == EnterGameType.enum_EnterGameType_Next
                || nCurState == EnterGameType.enum_EnterGameType_ChooseLevel) {
                this.startGame();
            }
        }
    }

    /**获取当前的选择信息 */
    public getCurChooseInfo(): any {
        return this.mapData.player.choose[this.index];
    }

    /**关卡显示*/
    public levelOnShow() {

    }

    /**关卡隐藏 */
    public levelOnHide() {

    }
}