import GameLogicProcessingManager_Als from "../../../games/GameLogicProcessingManager";
import { PlayerDataManager_Als } from "../../../common/GameDataManager";
import ConfigManager_Als from "../../../games/ConfigManager";
import Als_SoundManager from "../../../common/SoundManager";
import { GoodsType } from "../../../games/CommonDefine";
import { MiniManeger_Als } from "../../../minigame/MiniManeger";
import { PopBaseScene } from "../../base/PopBaseScene";
import AnimationManager_Als from "../../../manager/AnimationManager";

export default class SignView_Als extends PopBaseScene {

    public className_key = "SignView_Als";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;


    public imageBtSign: Laya.Image;
    public spBtClose: Laya.Sprite;
    public boxDouble: Laya.Box;
    public btDouble: Laya.Sprite;
    public spDouble: Laya.Sprite;
    public boxItem: Laya.Box;
    public spWorldLeft: Laya.Sprite;
    public spWorldRight: Laya.Sprite;
    public spTomorrow: Laya.Sprite;

    private als_nCurTime: number;
    private als_bDouble: boolean;
    private als_bIsRunning: boolean;

    constructor() {
        super();
        this.als_bIsRunning = false;
        this.skin = "game/uiView/SignView.json";
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.als_bIsRunning = false;
        Laya.Tween.clearAll(this.imageBtSign);
        Laya.timer.clearAll(this);

    }

    public addEvent(): void {
        this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.spBtClose, Laya.Event.CLICK, this.onMousClck_Als, this);
        this.registerEvent(this.boxDouble, Laya.Event.CLICK, this.onMousClck_Als, this);
    }


    public initView() {
        this.als_nCurTime = 0;
        this.als_bDouble = false;
        this.als_bIsRunning = true;
        this.refhSD_Als();
        this.refhSV_Als();
        this.refhSiReBt_Als();
        this.initDb_Als();
        MiniManeger_Als.instance.showBannerAd();
    }
    /**刷新数据 */
    private refhSD_Als() {
        //判断当前是否能签到
        this.als_nCurTime = GameLogicProcessingManager_Als.GetCurTime();
        if (Utils.judgeIsOnTheSameDay(PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignTimeLast, this.als_nCurTime)) {
            this.btDouble.visible = false;
            return;
        }
        //7天后轮回
        if (PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex >= 7) {
            PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex = 0;
        }
    }

    private onMousClck_Als(evt: Laya.Event): void {
        Als_SoundManager.getInstance().playEffect("button", 1);
        switch (evt.currentTarget) {
            case this.spBtClose:
                this.removeSelf();
                break
            case this.imageBtSign:
                this.onSid_Als();
                break;
            case this.boxDouble:
                this.onSigDb_Als();
                break;
        }
    }


    /**双倍奖励的标签处理 */
    private onSigDb_Als() {
        this.spDouble.visible = !this.spDouble.visible;
        this.als_bDouble = !this.spDouble.visible;
    }



    private refreshSignInfoSix(stImageTemp: any, stData: any) {
        //更新奖励图片
        let stSpriteGoods = stImageTemp.getChildAt(2) as Laya.Sprite;
        if (stSpriteGoods) {
            let str = ''
            if (stData.nType == 1) {
                str = "resource/assets/img/common/maininterface_icon_7.png";
            } else if (stData.nType == 2) {
                str = "resource/assets/img/common/maininterface_icon_6.png";
            }
            stSpriteGoods.loadImage(str);

        }
        //刷新数量
        let stBox = stImageTemp.getChildByName("boxWorld");
        if (stBox) {
            let spNum = stBox.getChildByName("spWorld") as Laya.Sprite;
            if (spNum) {
                BitmapLabelUtils.setLabel(spNum, stData.nCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            }
        }
    }

    private isSigned(stImageTemp: any, i: number) {
        let spSigned: Laya.Image = stImageTemp.getChildByName("spSigned") as Laya.Image;
        if (spSigned) {
            if (i < PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex) {
                spSigned.visible = true;
            } else {
                spSigned.visible = false;
            }
        }
    }
    /**双倍标签的初始状态*/
    private initDb_Als() {

        if (BaseConst.infos.gameInfo.openPsAward && BaseConst.infos.gameInfo.openPsAward == 1) {
            this.spDouble.visible = false;
        } else {
            this.spDouble.visible = true;
        }
        this.als_bDouble = !this.spDouble.visible;
    }

    /**初始化界面信息 */
    private refhSV_Als() {
        let arySignData = ConfigManager_Als.getInstance().getSignDataAll();
        let nLen = arySignData.length;
        let stImageTemp: Laya.Image = null;
        let stSpriteGoods: Laya.Sprite = null;
        for (let i = 0; i < nLen; ++i) {
            stImageTemp = this.boxItem.getChildAt(i) as Laya.Image;
            if (stImageTemp) {
                if (i < 6) {
                    this.refreshSignInfoSix(stImageTemp, arySignData[i]);
                } else {
                    BitmapLabelUtils.setLabel(this.spWorldLeft, arySignData[i].nCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
                    BitmapLabelUtils.setLabel(this.spWorldRight, arySignData[i].nCount7.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
                }
                this.isSigned(stImageTemp, i);
            }
        }
    }

    /**请求签到 */
    private onSid_Als() {
        if (this.als_bDouble) {
            let self = this;
            MiniManeger_Als.instance.playViderAd({
                successFun: () => {
                    self.pSData_Als();
                }
            });
        } else {
            this.pSData_Als();
        }
    }

    /**刷新领奖按钮的逻辑*/
    private refhSiReBt_Als() {
        this.als_nCurTime = GameLogicProcessingManager_Als.GetCurTime();;
        // this.lableSigned.visible = false;
        this.boxDouble.visible = true;
        this.btDouble.visible = true;
        this.spTomorrow.visible = true;
        this.imageBtSign.visible = true;
        //如果是同一天
        if (Utils.judgeIsOnTheSameDay(PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignTimeLast, this.als_nCurTime)) {
            this.boxDouble.visible = false;
            this.btDouble.visible = false;
            this.imageBtSign.visible = false;
        } else {
            this.spTomorrow.visible = false;
            this.startSIBTSA_Als();
        }
    }



    private refreshSignUIData() {
        //增加体力值
        let stSignData = ConfigManager_Als.getInstance().getSignDataBySignID(PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex);
        if (stSignData) {
            let nValue = stSignData.nCount;
            if (this.als_bDouble) {
                nValue *= 2;
            }
            PlayerDataManager_Als.getInstance().AddGoods(stSignData.nType, nValue);
            if (stSignData.nType == GoodsType.enum_GoodsType_Sp) {
                TipsManager.getInstance().showDefaultTips("体力+" + nValue.toString());
            }
            if (PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex == 6) {
                let nValue = stSignData.nCount7;
                if (this.als_bDouble) {
                    nValue *= 2;
                }
                PlayerDataManager_Als.getInstance().AddGoods(stSignData.nType7, nValue);
            }
        }
    }

    private startSIBTSA_Als() {
        Laya.timer.clearAll(this.imageBtSign);
        AnimationManager_Als.instance.zoomTweena(this.imageBtSign, this.imageBtSign);
    }


    /**签到的数据处理 */
    private pSData_Als() {
        this.refreshSignUIData();
        //签到标签增加
        PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex += 1;
        //记录签到时间
        PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignTimeLast = GameLogicProcessingManager_Als.GetCurTime();
        //保存数据
        PlayerDataManager_Als.getInstance().SaveData();
        //刷新界面信息
        this.refhSV_Als();
        this.refhSiReBt_Als();
    }
}