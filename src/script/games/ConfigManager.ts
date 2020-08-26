import { Als_ConfigSignDataIndex, Als_GameConfigIndex, Als_LevelPsIndex, Als_DialogBoxIndex, Als_InviteConfigIndex } from "./ConfigDefine";
import { PlayerDataManager_Als } from "../common/GameDataManager";
import { Als_GameData } from "../common/GameData";

/*配置表相关逻辑*/
export default class ConfigManager_Als {
    //单例
    private static instance: ConfigManager_Als;
    public static getInstance(): ConfigManager_Als {
        if (!ConfigManager_Als.instance) {
            ConfigManager_Als.instance = new ConfigManager_Als();
        }
        return ConfigManager_Als.instance;
    }

    constructor() {

    }

    //配置中的数据
    private aryGameConfig: Als_GameConfigIndex[];
    private arySignData: Als_ConfigSignDataIndex[];
    private aryLevelPsData: Als_LevelPsIndex[];
    private aryDialogBoxIndex: Als_DialogBoxIndex[];
    private aryInviteConfigIndex: Als_InviteConfigIndex[];

    private mapDialogBoxIndex: any = {};

    /**初始化配置表信息 */
    public initConfigInfo(): Promise<void> {
        let self = ConfigManager_Als.instance;
        return new Promise((resolve) => {
            let count: number = 0;
            let len: number = 5;
            let loadConfigSucc = function () {
                count++;
                if (count >= len) {
                    resolve();
                }
            };
            //GameConfig
            Laya.loader.load('resource/assets/config/GameConfig.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, (json: any) => {
                if (typeof (json) == "string") {
                    self.aryGameConfig = JSON.parse(json);
                } else {
                    self.aryGameConfig = json;
                }

                loadConfigSucc();
            }));

            //SignData
            Laya.loader.load('resource/assets/config/SignConfig.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, (json: any) => {
                if (typeof (json) == "string") {
                    self.arySignData = JSON.parse(json);
                } else {
                    self.arySignData = json;
                }

                loadConfigSucc();
            }));

            //DialogBox
            Laya.loader.load('resource/assets/config/DialogBox.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, (json: any) => {
                if (typeof (json) == "string") {
                    self.aryDialogBoxIndex = JSON.parse(json);
                } else {
                    self.aryDialogBoxIndex = json;
                }

                let nLen = self.aryDialogBoxIndex.length;
                for (let i = 0; i < nLen; ++i) {
                    self.mapDialogBoxIndex[self.aryDialogBoxIndex[i].id] = self.aryDialogBoxIndex[i];
                }

                loadConfigSucc();
            }));
            //LevelPs
            Laya.loader.load('resource/assets/config/LevelPsInfo.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, (json: any) => {

                if (typeof (json) == "string") {
                    self.aryLevelPsData = JSON.parse(json);
                } else {
                    self.aryLevelPsData = json;
                }
                loadConfigSucc();
            }));



            //InviteConfigIndex
            Laya.loader.load('resource/assets/config/InviteConfig.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, (json: any) => {
                if (typeof (json) == "string") {
                    self.aryInviteConfigIndex = JSON.parse(json);
                } else {
                    self.aryInviteConfigIndex = json;
                }

                loadConfigSucc();
            }));

        });
    }

    /**获取邀请的数据信息 */
    public getInviteConfigInfo() {
        return ConfigManager_Als.instance.aryInviteConfigIndex;
    }

    /**获取签到的配置数据信息*/
    public getSignDataAll(): Als_ConfigSignDataIndex[] {
        return ConfigManager_Als.instance.arySignData;
    }

    /**通过签到编号获取签到数据*/
    public getSignDataBySignID(nIndex: number): Als_ConfigSignDataIndex {
        if (nIndex < 0 || nIndex >= ConfigManager_Als.instance.arySignData.length) {
            return null;
        }
        return ConfigManager_Als.instance.arySignData[nIndex];
    }


    /**通过ID获取GameConfig中的配置数据 */
    public getGameConfigDataByID(nID: number): Als_GameConfigIndex {
        if (nID > ConfigManager_Als.instance.aryGameConfig.length || nID <= 0) {
            return null;
        }
        let nRealID = nID - 1;
        return ConfigManager_Als.instance.aryGameConfig[nRealID];
    }

    /**通过当前关卡获取宝箱信息 */
    public getTreasureByCurLevel(): number {
        let nRealIndex = PlayerDataManager_Als.getInstance().getCurLevel();
        if (nRealIndex < 0 || ConfigManager_Als.instance.aryLevelPsData.length < 0) {
            return 0
        }
        nRealIndex = nRealIndex >= ConfigManager_Als.instance.aryLevelPsData.length ? ConfigManager_Als.instance.aryLevelPsData.length - 1 : nRealIndex;
        return ConfigManager_Als.instance.aryLevelPsData[nRealIndex].nPs;
    }

    /**通过对话空ID获得坐标和描述信息 */
    public getDialogInfo(nDialogID: number): any {
        return ConfigManager_Als.instance.mapDialogBoxIndex[nDialogID];
    }
}