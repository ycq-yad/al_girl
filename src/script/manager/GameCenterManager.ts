import { Als_GameData } from "../common/GameData";
import { PlayerDataManager_Als } from "../common/GameDataManager";
import { MiniManeger_Als } from "../minigame/MiniManeger";
import PlatformDY from "../../PlatformDY";
import InviteManager_Als from "./InviteManager";
import ConfigManager_Als from "../games/ConfigManager";
import ViewChangeManager_Als from "../games/ViewChangeManager";
import GameStateManager_Als from "../games/GameStateManager";
import { EnterGameType, MoreGameIndex_Als } from "../games/CommonDefine";
import { LevelManager_Als } from "./LevelManager";
import GamePreLoadingView_Als from "../loading/GamePreLoadingView";
import Als_SoundManager from "../common/SoundManager";
import AddPsView_Als from "../views/game/Als_PopView/AddPsView";
import MoreGameView_Als from "../views/game/moregame/MoreGameView";
import SMGIView from "../views/game/WeCatAls/ShouMoreGameInView";
import MoreGameOperRequestTemp_Als from "../views/game/MoreGameOperRequestTemp";
import MoreGameOperRequest_Als from "../views/game/MoreGameOperRequest";

export default class GameCenterManager_Als {

    private static ins: GameCenterManager_Als;

    public static getInstance(): GameCenterManager_Als {
        if (!GameCenterManager_Als.ins) GameCenterManager_Als.ins = new GameCenterManager_Als();
        return GameCenterManager_Als.ins;
    }
    constructor() { }

    public pLoadingView: GamePreLoadingView_Als;
    /**界面功能整合*/
    public oppenAddSpView() {
        TipsManager.getInstance().showDefaultTips("体力不足");
        ViewChangeManager_Als.getInstance().showBufferLoadingView();
        ResUtil.getIntance().loadGroups(["adsp"], async () => {
            ViewManager.getInstance().showView(AddPsView_Als);
            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
        });
    }

    /**跳转到其他游戏 */
    public GameCenterGotoGame_als(stData: any, fail: Function) {
        //
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.clickGame(stData.ad_id);
        }
        let self = this;
        let data = {
            appId: stData.ad_appid,
            path: stData.url,
            success: function () {
                console.log("navigateToMiniProgram success!");
                //
                if (BaseConst.infos.gameInfo.isDY) {
                    PlatformDY.toGame(stData.ad_id);
                }
            },
            fail
        };
        platform.navigateToMiniProgram(data);
    }

    /**随机得到n个又是数据 */
    /**运营要改成随机6个游戏 */
    //2020.7.13-4
    public getRandomIndex_num_alt(nNum: number): number[] {
        if (Als_GameData.getInstance().weCatMiniIconsInfo.length - 1 < 0) {
            return [];
        }
        let nRandom = Utils.random(0, Als_GameData.getInstance().weCatMiniIconsInfo.length - 1);
        let nCount = nNum;
        let aryInfo: number[] = [];
        for (let i = 0; i < nCount; ++i) {
            aryInfo.push(nRandom);
            nRandom += 1;
            if (nRandom >= Als_GameData.getInstance().weCatMiniIconsInfo.length) {
                nRandom = 0;
            }
        }
        return aryInfo;
    }

    /**刷新游戏列表 */
    public refreshGameList_Als() {
        //2020.6.2运营需求  每次使用后刷新下游戏列表
        if (BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame()) {
            PlatformDY.refreshGameList();
        }
    }

    private pSMGInView: SMGIView;
    public showMoreGameinView_als(bAni: boolean = true) {
        if (!this.pSMGInView) {
            this.pSMGInView = new SMGIView();
        } else {
            this.pSMGInView.refreshWCMG_Als();
        }
        this.pSMGInView.ani = bAni;
        return this.pSMGInView;
    }


    /**平台登录梳理 */
    /**
	 * 平台登陆
	 */
    private async platformLogin_Als() {
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            console.log("开始登录");
            let res, self = this;
            let enter = async () => {

                if (BaseConst.infos.gameInfo.isDY) {
                    await self.loginWeCatDy(res);
                }

            }

            if (BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame()) {
                res = await platform.DYlogin();
            } else {
                res = await platform.login();
                res = JSON.parse(res);
            }
            enter();

        } else {
            Als_GameData.getInstance().userInfo.openId = Als_GameData.getInstance().userInfo.sessionKey = DeviceUtil.getDeviceNo();
            PlayerDataManager_Als.getInstance().GetData();
        }
    }

    /**的登录逻辑 */
    private async loginWeCatDy(stRes: any) {
        let res = stRes;
        let isAuthorize = await platform.checkIsAuthorize();
        let userinfo = null;
        if (isAuthorize) {
            userinfo = await MiniManeger_Als.instance.initUserTemp();
        }
        if (userinfo == null) {//如果没授权 就是纯净模式
            userinfo = { nickName: '', avatarUrl: '', gender: '' };
        }

        let obj = Als_GameData.getInstance().enterGameInfo;
        let scene = obj.query.scene == undefined ? null : obj.query.scene;
        PlatformDY.getOpenidAndAuthorzia({
            code: res, nickName: userinfo.nickName, avatarUrl: userinfo.avatarUrl, gender:
                userinfo.gender, scene: decodeURIComponent(scene)
        }).then((dyUser) => {
            Als_GameData.getInstance().userInfo.openId = dyUser.openid;
            Als_GameData.getInstance().strOpenIDWx = dyUser.openid;
            console.log("GameData.getInstance().strOpenIDWx = ", Als_GameData.getInstance().strOpenIDWx);
            let strOpenIdOther = Als_GameData.getInstance().enterGameInfo.query["openid"];
            console.log("strOpenIdOther = ", strOpenIdOther);
            if (strOpenIdOther && strOpenIdOther != "") {
                InviteManager_Als.getInstance().judgeInvite();
                console.log("createUserInfoButton 用户信息 : ", Als_GameData.getInstance().userInfo);
            }

            //
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }

            //加载玩家数据
            PlayerDataManager_Als.getInstance().GetData();
        });
    }

    /**加载资源 */
    public async loadRes_Als() {
        await this.platformLogin_Als();
        console.log("loadRes---");
        let loadresUrl = "";
        await ResUtil.getIntance().loadThms(loadresUrl + "resource/default.thm.json" + Als_GameData.getInstance().randomTime);
        await ResUtil.getIntance().loadRESConfig(loadresUrl + "resource/default.res.json" + Als_GameData.getInstance().randomTime);
        this.loadLayOutInfo();
        let group = ["panel", "common", "gamehome"];
        let alsInstance = PlayerDataManager_Als.getInstance()
        //加入当前关卡的数据
        group.push(alsInstance.getCurLevelToChallenge().toString());
        ResUtil.getIntance().loadGroups(group, async () => {
            await ConfigManager_Als.getInstance().initConfigInfo();
            this.enterGame()
            this.onPlayMusic_Als();
            ResUtil.getIntance().loadGroups(["lottery", 'success', 'game', 'hit', 'moregame']);
        }, (cur, total) => {
            this.pLoadingView.progress(cur, total);
        });
    }

    private enterGame() {
        let alsInstance = PlayerDataManager_Als.getInstance()

        alsInstance.initGoods();
        alsInstance.refreshOffLinePS();
        ViewChangeManager_Als.getInstance().rigestBufferLoadingView();

        //Laya.stage.on(Laya.Event.CLICK, this, this.onPlayMusic)
        if (!alsInstance.isNewPlayer) {
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
        } else {
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_ChooseLevel;
            alsInstance.SaveData();
        }
        alsInstance.setCurLevel(alsInstance.getLevelToChangeMaxLevel() - 1);
        LevelManager_Als.getInstance().createLevelScene(alsInstance.getLevelToChangeMaxLevel());
        ViewChangeManager_Als.getInstance().showCommonView();
        ViewChangeManager_Als.getInstance().showImageExit();
        ViewChangeManager_Als.bGameOpen = true;
    }
    public onPlayMusic_Als() {
        Als_SoundManager.getInstance().bgm = 'bg';
        // SoundManager.getInstance().playBgMusic()
        Laya.stage.off(Laya.Event.CLICK, this, this.onPlayMusic_Als);
    }

    /**加载固定的导出资源 */
    private loadLayOutInfo() {
        let resUrl = "";
        //加载微信的运营需求
        // if (DeviceUtil.isWXMiniGame() && !BaseConst.infos.gameInfo.isDY) {
        //     Laya.loader.load(resUrl + "configs/wxmoregame.json?v=" + Math.random(), Laya.Handler.create(this, (res) => {
        //         if (typeof (res) == "string") {
        //             res = JSON.parse(res);
        //         }
        //         // let infos = [];
        //         // for (let i = 0, len = res.iconList.length; i < len; i++) {
        //         //     res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/" + res.iconList[i].ad_img;
        //         // }
        //         // Als_GameData.getInstance().weCatMiniIconsInfo = res.iconList;
        //         this.initMoreGame(res, "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/")

        //     }));
        // } else if (DeviceUtil.isTTMiniGame()) {
        //     Laya.loader.load(resUrl + "configs/ttmoregame.json?v=" + Math.random(), Laya.Handler.create(this, (res) => {
        //         if (typeof (res) == "string") {
        //             res = JSON.parse(res);
        //         }
        //         // let infos = [];
        //         // for (let i = 0, len = res.iconList.length; i < len; i++) {
        //         //     res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/tt/moregame/" + res.iconList[i].ad_img;
        //         // }
        //         // Als_GameData.getInstance().weCatMiniIconsInfo = res.iconList;
        //         this.initMoreGame(res, "https://package.32yx.com/ecy_game_small/laya/girl/tt/moregame/")
        //     }));
        // } else {
        //     Laya.loader.load(resUrl + "configs/wxmoregame.json?v=" + Math.random(), Laya.Handler.create(this, (res) => {
        //         if (typeof (res) == "string") {
        //             res = JSON.parse(res);
        //         }
        //         let infos = [];
        //         //2020.7.13-3
        //         Als_GameData.getInstance().weCatMiniIconsInfo = [];
        //         for (let i = 0, len = res.iconList.length; i < len; i++) {
        //             let stData = new MoreGameIndex_Als();
        //             stData.ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/" + res.iconList[i].ad_img;;
        //             stData.name = res.iconList[i].name;
        //             Als_GameData.getInstance().weCatMiniIconsInfo.push(stData);
        //         }
        //     }));
        // }
    }


    private initMoreGame(res: any, resUrl: string) {
        let infos = [];
        //2020.7.13-3
        for (let i = 0, len = res.iconList.length; i < len; i++) {
            res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/tt/moregame/" + res.iconList[i].ad_img;
        }
        Als_GameData.getInstance().weCatMiniIconsInfo = res.iconList;
    }

    public gotoGame(stGameIndex: any, stScene: any = null) {
        //
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.clickGame(stGameIndex.ad_id);
        }
        let self = this;
        let data = {
            appId: stGameIndex.ad_appid,
            path: stGameIndex.url,
            success: function () {
                console.log("navigateToMiniProgram success");
                //
                if (BaseConst.infos.gameInfo.isDY) {
                    console.log("self.nIndex = ", stGameIndex.ad_id);
                    PlatformDY.toGame(stGameIndex.ad_id);
                }
            },
            fail: function (e) {
                console.log("navigateToMiniProgram fail e =", e); //
                if (stScene) {
                    ViewManager.getInstance().showView(stScene);
                }
            }
        };
        platform.navigateToMiniProgram(data);
    }

    // public gotoGameTemp(stGameIndex: any, ) {
    //     //
    //     if (BaseConst.infos.gameInfo.isDY) {
    //         PlatformDY.clickGame(stGameIndex.ad_id);
    //     }
    //     let self = this;
    //     let data = {
    //         appId: stGameIndex.ad_appid,
    //         path: stGameIndex.url,
    //         success: function () {
    //             console.log("navigateToMiniProgram success!");
    //             //
    //             if (BaseConst.infos.gameInfo.isDY) {
    //                 console.log("self.nIndex = ", stGameIndex.ad_id);
    //                 PlatformDY.toGame(stGameIndex.ad_id);
    //             }
    //         },
    //         fail: function (e) {
    //             console.log("navigateToMiniProgram fail e =", e);
    //             ViewManager.getInstance().showView(MoreGameOperRequest_Als);
    //         }
    //     };
    //     platform.navigateToMiniProgram(data);
    // }

    public getRandomIndex(nMax: number): number[] {
        if (Als_GameData.getInstance().weCatMiniIconsInfo.length - 1 < 0) {
            return [];
        }
        let nRandom = Utils.random(0, Als_GameData.getInstance().weCatMiniIconsInfo.length - 1);
        let nCount = Als_GameData.getInstance().weCatMiniIconsInfo.length % 3;
        if (nCount > 0) {
            nCount = 3 - nCount;
        }

        nCount = Als_GameData.getInstance().weCatMiniIconsInfo.length + nCount;
        if (nCount <= nMax) {
            nCount = nMax;
        }
        let aryInfo: number[] = [];
        for (let i = 0; i < nCount; ++i) {
            aryInfo.push(nRandom);
            nRandom += 1;
            if (nRandom >= Als_GameData.getInstance().weCatMiniIconsInfo.length) {
                nRandom = 0;
            }
        }
        return aryInfo;
    }

    public toGameRandom() {
        //this.onClickOper();
        if (Als_GameData.getInstance().weCatMiniIconsInfo.length <= 0) {
            return;
        }
        let nRandomIndxe = Utils.random(0, Als_GameData.getInstance().weCatMiniIconsInfo.length - 1);
        //
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.clickGame(Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].ad_id);
        }
        let self = this;
        let data = {
            appId: Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].ad_appid,
            path: Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].url,
            success: function () {
                console.log("navigateToMiniProgram success");
                //
                if (BaseConst.infos.gameInfo.isDY) {
                    console.log("self.nIndex = ", nRandomIndxe);
                    PlatformDY.toGame(Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].ad_id);
                }
            },
            fail: function (e) {
                console.log("navigateToMiniProgram fail e =", e); //
                ViewManager.getInstance().showView(MoreGameOperRequestTemp_Als);
            }
        };
        platform.navigateToMiniProgram(data);
    }

    public toGameRandomNotOpenView() {
        let self = this;

        let aryCatMiniIconsInfoTemp = Als_GameData.getInstance().weCatMiniIconsInfo;
        //this.onClickOper();
        if (aryCatMiniIconsInfoTemp.length <= 0) {
            return;
        }

        let nRandomIndxe = Utils.random(0, aryCatMiniIconsInfoTemp.length - 1);
        //
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.clickGame(aryCatMiniIconsInfoTemp[nRandomIndxe].ad_id);
        }
        let idata = aryCatMiniIconsInfoTemp[nRandomIndxe]
        let data = {
            appId: idata.ad_appid,
            path: idata.url,
            success: function () {
                console.log("navigateToMiniProgram success");
                //
                if (BaseConst.infos.gameInfo.isDY) {
                    console.log("self.nIndex = ", nRandomIndxe);
                    PlatformDY.toGame(idata.ad_id);
                }
            },
            fail: function (e) {
                console.log("navigateToMiniProgram fail e =", e); //
            }
        };
        platform.navigateToMiniProgram(data);
    }
}