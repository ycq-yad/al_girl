import GameConfig from "./GameConfig";
import { Als_GameData } from "./script/common/GameData";
import GamePreLoadingView_Als from "./script/loading/GamePreLoadingView";
import Als_SoundManager from "./script/common/SoundManager";

import { LevelManager_Als } from "./script/manager/LevelManager";
import GameStateManager_Als from "./script/games/GameStateManager";
import { EnterGameType, MoreGameIndex_Als } from "./script/games/CommonDefine";
import { PlayerDataManager_Als } from "./script/common/GameDataManager";
import ConfigManager_Als from "./script/games/ConfigManager";
import ViewChangeManager_Als from "./script/games/ViewChangeManager";
import { MiniManeger_Als } from "./script/minigame/MiniManeger";
import InviteManager_Als from "./script/manager/InviteManager";
import PlatformDY from "./PlatformDY";
import GameCenterManager_Als from "./script/manager/GameCenterManager";

declare var VConsole;
declare var loadLib;

class Main extends BaseContent {

	constructor() {
		super({ width: 1080, height: 1920, exportSceneToJson: true });
		//
		GameConfig.init();

		// let s = Utils

		let onShow = function (obj) {
			console.log("onShow...", obj);
			Als_SoundManager.getInstance().playBgMusic();
			if (ViewChangeManager_Als.bGameOpen) {
				if (ViewChangeManager_Als.getInstance().CurLevelBase) {
					ViewChangeManager_Als.getInstance().CurLevelBase.levelOnShow();
				}
			}
		}

		let onHide = function () {
			console.log("onHide...");
			Als_SoundManager.getInstance().pauseBgm();
			if (ViewChangeManager_Als.getInstance().CurLevelBase) {
				ViewChangeManager_Als.getInstance().CurLevelBase.levelOnHide();
			}
		}

		let onAudioInterruptionBegin = (res) => {
			console.log("onAudioInterruptionBegin");
			// SoundManager.getInstance().stopBgMusic();
			Als_SoundManager.getInstance().pauseBgm();
		};

		let onAudioInterruptionEnd = (res) => {
			console.log("onAudioInterruptionEnd");
			Als_SoundManager.getInstance().playBgMusic();
			// SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
		};

		if (DeviceUtil.isMiniGame()) {
			Als_GameData.getInstance().enterGameInfo = platform.getLaunchOptionsSync();
			MiniManeger_Als.instance.onShow(onShow);
			MiniManeger_Als.instance.onHide(onHide);
			MiniManeger_Als.instance.onAudioInterruptionBegin(onAudioInterruptionBegin);
			MiniManeger_Als.instance.onAudioInterruptionEnd(onAudioInterruptionEnd);
			MiniManeger_Als.instance.initMiniGame();
		} else {
			Laya.stage.on(Laya.Event.FOCUS, this, () => {
				console.log("获取焦点");
				onShow(null);
				//EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
			});
			Laya.stage.on(Laya.Event.BLUR, this, () => {
				console.log("失去焦点");
				onHide();
				//EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
			});
		}
	}

	/**
	 * 检验平台
	 */
	public checkPlatform(): void {
		GameCenterManager_Als.getInstance().pLoadingView = new GamePreLoadingView_Als();
		SceneManager.getInstance().openSceneInstance(GameCenterManager_Als.getInstance().pLoadingView);
		//
		console.log("检验平台---");
		let self = this;
		//h5
		if (window["loadingH5"]) {
			window["loadingH5"](100);
			// 初始化

			// loadLib("vconsole.min.js");
		}

		//判断平台使用不同的地址资源
		let resUrl: string = "./";
		if (DeviceUtil.isQQMiniGame()) {
			//开启定时回收触发
			Als_GameData.getInstance().gameId = "1044";//qq的游戏id
			resUrl = Als_GameData.getInstance().perFixUrl +"/qq_res/qq_res_v_z_3_7/";
		} else if (DeviceUtil.isWXMiniGame()) {
			Als_GameData.getInstance().gameId = "1043";//微信的游戏id
			resUrl = Als_GameData.getInstance().perFixUrl +"/wx_res_remp/wx_res_v_z_1_0/";
		} else if (DeviceUtil.isTTMiniGame()) {
			//GameData.getInstance().gameId = "1043"
			resUrl = Als_GameData.getInstance().perFixUrl +"/tt/tt_res_v_z_3_4/";
		} else {
			//剩余其他的平台
			self.initDebug();
		}

		if (DeviceUtil.isMiniGame()) {
			//开启定时回收触发
			if (!DeviceUtil.isVIVOMiniGame()) {
				Laya.timer.loop(10000, window, () => {
					console.log("tt加速回收---");
					platform.triggerGC();
				});
			}

			ResUtil.getIntance().defaultOriginUrl = resUrl;
			ResUtil.getIntance().addVersionPrefix(resUrl);
		}

		self.loadPreLoadRes(resUrl + "configs/infos.json?v=" + Math.random());

	}

	/**
	 * 加载预加载资源
	 */
	private async loadPreLoadRes(resUrl: string) {
		//
		this.initInfos(resUrl);
		Laya.timer.once(5000, this, this.loadPreLoadRes, [resUrl]);
	}

	private isFlage: boolean = false;

	protected enableFileConfig(): void {
		Laya.timer.clearAll(this)
		if (this.isFlage) {
			return
		}
		this.isFlage = true;
		console.log(BaseConst.infos);
		//
		Als_GameData.getInstance().initConfig(BaseConst.infos);
		MiniManeger_Als.instance.showBannerAd();
		//
		let resUrl = "";//
		// if (DeviceUtil.isWXMiniGame()) {
		// 	resUrl = Als_GameData.getInstance().wxMiniGameResUrl;
		// }
		if (DeviceUtil.isQQMiniGame()) {
		//	resUrl = Als_GameData.getInstance().qqMiniGameResUrl;
			MiniManeger_Als.instance.initBoxAd();
		}
		// if (DeviceUtil.isTTMiniGame()) {
		// 	resUrl = ResUtil.getIntance().defaultOriginUrl = Als_GameData.getInstance().ttMiniGameResUrl;
		// }
		// if (DeviceUtil.isMiniGame()) {
		// 	ResUtil.getIntance().defaultOriginUrl = resUrl;
		// 	ResUtil.getIntance().addVersionPrefix(resUrl);
		// }
		this.loadFileConfig("fileconfig.json");
		MiniManeger_Als.instance.checkCityInfo();
	}

	

	/**
	 * 加载资源
	 */

	protected async loadRes() {
		GameCenterManager_Als.getInstance().loadRes_Als();
	}
}
//激活启动类
new Main();
