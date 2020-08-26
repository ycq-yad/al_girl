
import { GameManager_Als } from "./GameManager";
import { LevelScene1_Als } from "../views/game/level/LevelScene1";
import { LevelScene2_Als } from "../views/game/level/LevelScene2";
import { LevelScene3_Als } from "../views/game/level/LevelScene3";
import { LevelScene4_Als } from "../views/game/level/LevelScene4";
import { LevelScene5_Als } from "../views/game/level/LevelScene5";
import { LevelScene6_Als } from "../views/game/level/LevelScene6";
import LevelScene7_Als from "../views/game/level/LevelScene7";
import _Als from "../views/game/level/LevelScene8";
import LevelScene9_Als from "../views/game/level/LevelScene9";
import LevelScene10_Als from "../views/game/level/LevelScene10";
import LevelScene11_Als from "../views/game/level/LevelScene11";
import LevelScene12_Als from "../views/game/level/LevelScene12";
import { PlayerDataManager_Als } from "../common/GameDataManager";
import ViewChangeManager_Als from "../games/ViewChangeManager";
import { MiniManeger_Als } from "../minigame/MiniManeger";
import LevelScence13_Als from "../views/game/level/LevelScene13";
import LevelScene14_Als from "../views/game/level/LevelScene14";
import LevelScene16_Als from "../views/game/level/LevelScene16";
import LevelScene17_Als from "../views/game/level/LevelScene17";
import LevelScene18_Als from "../views/game/level/LevelScene18";
import LevelScene19_Als from "../views/game/level/LevelScene19";
import LevelScene15_Als from "../views/game/level/LevelScene15";
import { LevelBase_Als } from "../views/game/level/LevelBase";
import LevelScene21_Als from "../views/game/level/LevelScene21";
import LevelScene22_Als from "../views/game/level/LevelScene22";
import LevelScene20_Als from "../views/game/level/LevelScene20";
import { Als_GameData } from "../common/GameData";
import MiniEventConst_Als from "../minigame/MiniEventConst";
import LevelScene23_Als from "../views/game/level/LevelScene23";
import LevelScene24_Als from "../views/game/level/LevelScene24";
import LevelScene25 from "../views/game/level/LevelScene25";
import LevelScene26_Als from "../views/game/level/LevelScene26";
import LevelScene27_Als from "../views/game/level/LevelScene27";
import LevelScene28_Als from "../views/game/level/LevelScene28";
import LevelScene29_Als from "../views/game/level/LevelScene29";
import LevelScene30_Als from "../views/game/level/LevelScene30";
import LevelScene31_Als from "../views/game/level/LevelScene31";
import LevelScene32_Als from "../views/game/level/LevelScene32";
import LevelScene33_Als from "../views/game/level/LevelScene33";
import LevelScene34_Als from "../views/game/level/LevelScene34";
import LevelScene35_Als from "../views/game/level/LevelScene35";
import LevelScene36_Als from "../views/game/level/LevelScene36";
import LevelScene37_Als from "../views/game/level/LevelScene37";
import LevelScene40_Als from "../views/game/level/LevelScene40";
import LevelScene39_Als from "../views/game/level/LevelScene39";
import LevelScene38_Als from "../views/game/level/LevelScene38";


export class LevelManager_Als {
    private static ins: LevelManager_Als;

    public static getInstance(): LevelManager_Als {
        if (!LevelManager_Als.ins) LevelManager_Als.ins = new LevelManager_Als();
        return LevelManager_Als.ins;
    }

    /**当前场景 */
    public currentGameScence: LevelBase_Als;

    private levelBaseUrl = 'resource/assets/configs/map/map';

    /*当前关卡 */
    public nCurLevel: number = 0;

    /**修改 */
    /**
     * 创建关卡
     */
    public async createLevelScene(level: number) {
        let classKey: any;
        switch (level) {
            case 1:
                classKey = LevelScene1_Als;
                break
            case 2:
                classKey = LevelScene2_Als;
                break
            case 3:
                classKey = LevelScene3_Als;
                break
            case 4:
                classKey = LevelScene4_Als;
                break
            case 5:
                classKey = LevelScene5_Als;
                break
            case 6:
                classKey = LevelScene6_Als;
                break;
            case 7:
                classKey = LevelScene7_Als;
                break;
            case 8:
                classKey = _Als;
                break;
            case 9:
                classKey = LevelScene9_Als;
                break;
            case 10:
                classKey = LevelScene10_Als;
                break;
            case 11:
                classKey = LevelScene11_Als;
                break;
            case 12:
                classKey = LevelScene12_Als;
                break;
            case 13:
                classKey = _Als;
                break;
            case 14:
                classKey = LevelScene14_Als;
                break;
            case 15:
                classKey = _Als;
                break;
            case 16:
                classKey = LevelScene16_Als;
                break;
            case 17:
                classKey = LevelScene17_Als;
                break;
            case 18:
                classKey = LevelScene18_Als;
                break;
            case 19:
                classKey = LevelScene19_Als;
                break;
            case 21:
                classKey = LevelScene21_Als;
                break;
            case 20:
                classKey = LevelScene20_Als;
                break;
            case 22:
                classKey = LevelScene22_Als;
                break;
            case 23:
                classKey = LevelScene23_Als;
                break;
            case 24:
                classKey = LevelScene24_Als;
                break;
            case 25:
                classKey = LevelScene25;
                break
            case 26:
                classKey = LevelScene26_Als;
                break
            case 27:
                classKey = LevelScene27_Als;
                break
            case 28:
                classKey = _Als;
                break
            case 29:
                classKey = LevelScene29_Als;
                break;
            case 30:
                classKey = LevelScene30_Als;
                break;
            case 31:
                classKey = LevelScene31_Als;
                break;
            case 32:
                classKey = LevelScene32_Als;
                break;
            case 33:
                classKey = LevelScene33_Als;
                break;
            case 34:
                classKey = LevelScene34_Als;
                break;
            case 35:
                classKey = LevelScene35_Als;
                break;
            case 36:
                classKey = LevelScene36_Als;
                break;
            case 37:
                classKey = LevelScene37_Als;
                break;
            case 38:
                classKey = LevelScene38_Als;
                break;
            case 39:
                classKey = LevelScene39_Als;
                break;
            case 40:
                classKey = LevelScene40_Als;
                break;
            default:
                classKey = LevelScene1_Als;
                break
        }
        PlayerDataManager_Als.getInstance().setCurLevel(level - 1);
        MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAME_PLAY_LEVEL + "_" + level, 1);//记录每一关玩的次数
        //为了头条的提审 隐藏binner可能会有延迟 
        if (DeviceUtil.isTTMiniGame()) {
            MiniManeger_Als.instance.hideBanner();
        }
        // let mapLevelStr = level;
        // if (mapLevelStr >= 24) {//24关用25关代替
        //     mapLevelStr += 1;
        // }
        let jsonPath = this.levelBaseUrl + level + '.json';
        console.log("jsonPath: ", jsonPath);
        let data = await GameManager_Als.instance.loadCongigs(jsonPath)
        let stGroup = [];
        stGroup.push(level.toString())
        ViewChangeManager_Als.getInstance().showBufferLoadingView();
        let self = this;
        ResUtil.getIntance().loadGroups(stGroup, () => {

            if (self.currentGameScence) {
                self.currentGameScence.destroyAni();
                if (this.nCurLevel != 0) {
                    self.currentGameScence.destroy();
                    //下一关清理上一关卡   //为了一关动画问题的奇怪修改2020.5.29
                    if (this.nCurLevel != level) {
                        let lastLevel = this.nCurLevel;//level - 1;
                        ResUtil.getIntance().destoryGroup("" + lastLevel);
                        Laya.Resource.destroyUnusedResources();
                    }
                }
                self.currentGameScence = null;
            }
            this.nCurLevel = level;
            self.currentGameScence = new classKey(data);
            self.currentGameScence.viewData_ = data;
            self.currentGameScence.mapData = data;
            SceneManager.getInstance().openSceneInstance(self.currentGameScence);
            // SceneManager.getInstance().openGameScene(classKey, data);
            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
        });
        Laya.timer.once(2000, this, () => {//进游戏后2s后加载下关资源
            //加载下一关的场景 
            if (level < PlayerDataManager_Als.getInstance().getLevelNumMakeOver()) {
                stGroup = [];
                //为了一关动画问题的奇怪修改2020.5.29
                let nNextLevel = level + 1;
                stGroup.push((nNextLevel).toString());
                ResUtil.getIntance().loadGroups(stGroup);
            }
        });
    }
}