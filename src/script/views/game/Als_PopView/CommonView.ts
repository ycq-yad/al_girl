import GameEvent_Als from "../../../games/GameEvent";
import { PlayerDataManager_Als } from "../../../common/GameDataManager";
import ConfigManager_Als from "../../../games/ConfigManager";
import Als_SoundManager from "../../../common/SoundManager";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";
import AddPsView_Als from "./AddPsView";
import GameCenterManager_Als from "../../../manager/GameCenterManager";

export default class CommonView_Als extends BaseSceneUISkin {
    public className_key = "CommonView";

    public imageBtToHome: Laya.Image;
    public spNum: Laya.Sprite;
    public imageSpFull: Laya.Image;
    public imageBtAttSp: Laya.Image;
    public stLableTime: Laya.Label;
    public imageBtGoldAdd: Laya.Image;
    public glodNum: Laya.Sprite;
    public sp: Laya.Image;

    constructor() {
        super();
        this.skin = "game/uiView/CommonView.json";
        this.width = 600;
        this.height = 200;
    }

    /**界面数值的属性 */
    /**增加界面数值的刷新 */
    private addEventUpdateView() {
        this.sp.on(Laya.Event.CLICK, this, this.openAddSp_Als);
        EventMgr.getInstance().addEvent(GameEvent_Als.ON_PS_CHANGE, this, this.refreshSPV_Als);
        EventMgr.getInstance().addEvent(GameEvent_Als.ON_GLOD_CHANGE, this, this.refreshGV_Als);
        EventMgr.getInstance().addEvent(GameEvent_Als.ON_SP_UPDOWN_TIME, this, this.refreshTLT_Als);
        EventMgr.getInstance().addEvent(GameEvent_Als.PS_LIMITLESS, this, this.refreshPSLL_Als);
    }

    onAddStage(): void {
        if (!this.isCreate) {
            return
        }
        this.refreshSPV_Als();
        this.refreshGV_Als();
        this.refreshTV_Als();
        this.addEventUpdateView();
        this.refreshPSLL_Als();
    }

    public onRemoved() {
        this.removeEUV();
    }

    

    /**删除界面数值的刷新*/
    private removeEUV() {
        this.sp.off(Laya.Event.CLICK, this, this.openAddSp_Als);
        EventMgr.getInstance().removeEvent(GameEvent_Als.ON_PS_CHANGE, this, this.refreshSPV_Als);
        EventMgr.getInstance().removeEvent(GameEvent_Als.ON_GLOD_CHANGE, this, this.refreshGV_Als);
        EventMgr.getInstance().removeEvent(GameEvent_Als.ON_SP_UPDOWN_TIME, this, this.refreshTLT_Als);
        EventMgr.getInstance().removeEvent(GameEvent_Als.PS_LIMITLESS, this, this.refreshPSLL_Als)
    }

    public abte_alt() {
        this.imageBtAttSp.visible = true;
        this.sp && this.sp.on(Laya.Event.CLICK, this, this.openAddSp_Als);
    }

    public rmobtev_alt() {
        this.imageBtAttSp.visible = false;
        this.sp && this.sp.off(Laya.Event.CLICK, this, this.openAddSp_Als);
    }

    

    /**刷新体力 */
    private refreshSPV_Als() {
        if (!this.isCreate) {
            return
        }


        if (!PlayerDataManager_Als.getInstance().isPsLimitlessState()) {
            BitmapLabelUtils.setLabel(this.spNum, PlayerDataManager_Als.getInstance().stPlayerDataBase.nPS.toString(), "resource/assets/img/ui/gamehome/maininterface_number1/maininterface_number1_", 0, ".png", "center");
            this.refreshTV_Als();
        }
    }

    /**打开体力不足界面 */
    private openAddSp_Als() {
        Als_SoundManager.getInstance().playEffect("button", 1);
        GameCenterManager_Als.getInstance().oppenAddSpView();
    }

    

    /**刷新时间 */
    private refreshTV_Als() {
        if(PlayerDataManager_Als.getInstance().isPsLimitlessState()){
            return;
        }
        let nSpTimeMax = 5;
        let stGameData = ConfigManager_Als.getInstance().getGameConfigDataByID(1);
        if (stGameData) {
            nSpTimeMax = parseInt(stGameData.strValue);
        }
        if (nSpTimeMax <= PlayerDataManager_Als.getInstance().stPlayerDataBase.nPS) {
            this.imageSpFull.visible = true;
            this.stLableTime.visible = false;
            this.stLableTime.text = "";
        } else {
            this.imageSpFull.visible = false;
            this.stLableTime.visible = true;
        }
    }

    /**刷新金币 */
    private refreshGV_Als() {
        if (!this.isCreate) {
            return
        }
        BitmapLabelUtils.setLabel(this.glodNum, PlayerDataManager_Als.getInstance().stPlayerDataBase.nGlodCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
    }

    /**进入无限体力状态 */
    public refreshPSLL_Als() {
        if (!PlayerDataManager_Als.getInstance().isPsLimitlessState()) {
            return;
        }
        this.stLableTime.visible = false;
        this.spNum.visible = false;
        this.imageSpFull.visible = true;
        this.imageSpFull.skin = "resource/assets/img/ui/gamehome/maininterface_word_3.png";
        this.sp.skin = "resource/assets/img/ui/gamehome/maininterface_baseboard_1_2.png";
    }

    /**时间的更新 */
    private refreshTLT_Als() {
        if(PlayerDataManager_Als.getInstance().isPsLimitlessState()){
            return;
        }
        this.imageSpFull.visible = false;
        this.stLableTime.visible = true;
        this.stLableTime.text = PlayerDataManager_Als.getInstance().getSpLastTime();
    }

}