(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var CustemButton = (function (_super) {
        __extends(CustemButton, _super);
        function CustemButton() {
            return _super.call(this) || this;
        }
        return CustemButton;
    }(CustomScaleComponent));

    var GameConfig = (function () {
        function GameConfig() {
        }
        GameConfig.init = function () {
            var reg = Laya.ClassUtils.regClass;
            reg("script/tool/CustemButton.ts", CustemButton);
        };
        GameConfig.width = 640;
        GameConfig.height = 1136;
        GameConfig.scaleMode = "fixedwidth";
        GameConfig.screenMode = "none";
        GameConfig.alignV = "top";
        GameConfig.alignH = "left";
        GameConfig.startScene = "game/GameHomeView.scene";
        GameConfig.sceneRoot = "";
        GameConfig.debug = false;
        GameConfig.stat = false;
        GameConfig.physicsDebug = false;
        GameConfig.exportSceneToJson = true;
        return GameConfig;
    }());
    GameConfig.init();

    var localData;
    (function (localData) {
        var Als_InviteData = (function () {
            function Als_InviteData() {
            }
            return Als_InviteData;
        }());
        localData.Als_InviteData = Als_InviteData;
    })(localData || (localData = {}));
    var netData;
    (function (netData) {
        var Als_UserInfos = (function () {
            function Als_UserInfos() {
                this.openId = "";
                this.nick = "";
                this.avatarUrl = "";
                this.sex = 0;
                this.sessionKey = "";
                this.accessToken = "";
            }
            return Als_UserInfos;
        }());
        netData.Als_UserInfos = Als_UserInfos;
        var Als_PlayerData = (function () {
            function Als_PlayerData() {
                this.lastTime = null;
                this.gold = 2000;
                this.snacks = 0;
                this.lottery = { fish: 0, fishVideo: 1 };
                this.curMaxCompLv = 1;
            }
            return Als_PlayerData;
        }());
        netData.Als_PlayerData = Als_PlayerData;
        var Als_Invite = (function () {
            function Als_Invite() {
                this.inviteId = [];
            }
            return Als_Invite;
        }());
        netData.Als_Invite = Als_Invite;
        var Als_Inviter = (function () {
            function Als_Inviter() {
            }
            return Als_Inviter;
        }());
        netData.Als_Inviter = Als_Inviter;
    })(netData || (netData = {}));

    var Als_GameData = (function () {
        function Als_GameData() {
            this.gameId = "1043";
            this.userInfo = new netData.Als_UserInfos();
            this.isByCollection = false;
            this.isByShare = false;
            this.deadTime = 1500;
            this.codeVersion_ = "t.v.4.3.3";
            this.perFixUrl = "";
            this.debug_ = (this.serverConf_ != "wzs");
            this.guanQiaArr = [30, 50, 20, 50, 50];
            this.tips = "你的网络已断开，请检查设置。";
            this.videoTips = "视频观看完整才能获得奖励哦";
            this.URL_DELETE_DATA = "";
            this.URL_DELETE_DATA_TEST = "https://172.17.3.217:8090/DelMiniGameData.fcgi";
            this.URL_SAVE_DATA = "";
            this.URL_SAVE_DATA_TEST = "http://172.17.3.217:8090/MiniGameData.fcgi";
            this.URL_OF_RANK = "";
            this.URL_OF_RANK_TEST = "http://172.17.3.217:8090/MiniGameRank.fcgi";
            this.URL_OF_INVITE = "";
            this.URL_OF_INVITE_TEST = "http://172.17.3.217:8090/Invitation.fcgi";
            this.URL_TIMESTAMP = "";
            this.URL_WX_REQ = "";
            this.URL_WX_REQ_TEST = "http://172.17.3.217:8090/MiniGame.fcgi";
            this.bannerId = new Array();
            this.videoId = Array();
            this.longVideoId = Array();
            this.randomTime = '?v=' + Date.now();
        }
        Als_GameData.getInstance = function () {
            if (!Als_GameData.instance) {
                Als_GameData.instance = new Als_GameData();
            }
            return Als_GameData.instance;
        };
        Object.defineProperty(Als_GameData.prototype, "serverConf", {
            set: function (sc) {
                this.serverConf_ = sc;
                this.initServer();
            },
            enumerable: true,
            configurable: true
        });
        Als_GameData.prototype.initServer = function () {
            switch (Als_GameData.instance.serverConf_) {
                case "nts":
                    this.URL_SAVE_DATA = this.URL_SAVE_DATA_TEST;
                    this.URL_OF_RANK = this.URL_OF_RANK_TEST;
                    this.URL_OF_INVITE = this.URL_OF_INVITE_TEST;
                    this.URL_DELETE_DATA = this.URL_DELETE_DATA_TEST;
                    break;
                case "wts":
                    break;
                case "wzs":
                    break;
            }
        };
        Object.defineProperty(Als_GameData.prototype, "codeVersion", {
            get: function () {
                return this.codeVersion_ + " " + this.serverConf_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Als_GameData.prototype, "debug", {
            get: function () {
                return (this.serverConf_ != "wzs");
            },
            enumerable: true,
            configurable: true
        });
        Als_GameData.prototype.initConfig = function (res) {
            if (res) {
                this.bannerId = res.gameInfo.bannerId;
                this.videoId = res.gameInfo.videoId;
                this.longVideoId = res.gameInfo.longVideoId;
                this.boxId = res.gameInfo.boxId;
            }
            else {
                console.error("GameData.initConfig res error!");
            }
        };
        return Als_GameData;
    }());

    var AnimationManager_Als = (function () {
        function AnimationManager_Als() {
        }
        Object.defineProperty(AnimationManager_Als, "instance", {
            get: function () {
                if (AnimationManager_Als.ins == null) {
                    AnimationManager_Als.ins = new AnimationManager_Als();
                }
                return AnimationManager_Als.ins;
            },
            enumerable: true,
            configurable: true
        });
        AnimationManager_Als.prototype.getAtlasAnimation = function (url, fex) {
            url = url + fex;
            return new Promise(function (resolve) {
                var roleAni = new Laya.Animation();
                roleAni.loadAtlas(url, Laya.Handler.create(null, function () {
                    resolve(roleAni);
                }));
            });
        };
        AnimationManager_Als.prototype.scaleTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.visible = true;
            target.scale(0.8, 0.8);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager_Als.prototype.scaleBTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.scale(1.1, 1.1);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager_Als.prototype.upToDownTween = function (target, props, duration, caller, ease, complete) {
            Laya.Tween.to(target, props, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager_Als.prototype.showSkeletonAnimation = function (url, callBack, aniMode) {
            console.log(url);
            var boomAnimation = new Laya.Skeleton();
            boomAnimation.load(url, Laya.Handler.create(this, function () {
                if (boomAnimation.player == null)
                    return;
                boomAnimation.player.playbackRate = 1;
                callBack && callBack(boomAnimation);
            }), aniMode);
        };
        AnimationManager_Als.prototype.show2dBoonAnimation = function (url, dbBox, index, loop, rate, x, y, rotation) {
            var _this = this;
            return new Promise(function (resolve) {
                var self = _this;
                dbBox.removeChildren();
                var boomAnimation = new Laya.Skeleton();
                boomAnimation.load(url, Laya.Handler.create(self, function () {
                    if (!boomAnimation.player) {
                        resolve();
                        return;
                    }
                    boomAnimation.player.playbackRate = rate;
                    boomAnimation.player.once(Laya.Event.STOPPED, self, function () {
                        resolve();
                    });
                    boomAnimation.scale(2, 2);
                    dbBox.addChild(boomAnimation);
                    boomAnimation.x = x;
                    boomAnimation.y = y;
                    boomAnimation.rotation = rotation;
                    boomAnimation.play(index, loop);
                }));
            });
        };
        AnimationManager_Als.prototype.displayTwinkle = function (target, prefix, caller) {
            var index = 1;
            Laya.timer.loop(500, caller, function () {
                target.skin = prefix + index + ".png";
                index = index == 1 ? 2 : 1;
            });
        };
        AnimationManager_Als.prototype.frameAni = function (target, prefix, caller, frameNum, time) {
            if (time === void 0) { time = 100; }
            var index = 1;
            Laya.timer.loop(time, caller, function () {
                target.skin = prefix + index + ".png";
                index++;
                if (index > frameNum)
                    index = 1;
            });
        };
        AnimationManager_Als.prototype.zoomTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.1 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager_Als.prototype.zoomImgTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.02 + 1;
                target.rotation += Math.sin(scaleDelta) * 0.02;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager_Als.prototype.titleImgTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                target.rotation += Math.sin(scaleDelta) * 0.2;
            });
        };
        AnimationManager_Als.prototype.VTween = function (target, caller, ds) {
            if (ds === void 0) { ds = 1; }
            var xDelta = 0;
            Laya.timer.loop(20, caller, function () {
                xDelta += 0.04;
                var xVaule = Math.sin(xDelta) * ds;
                target.x += xVaule;
            });
        };
        AnimationManager_Als.prototype.flaTween = function (target, caller) {
            var alp = 0;
            Laya.timer.loop(20, caller, function () {
                alp += 0.04;
                var alpVaule = Math.abs(Math.sin(alp) * 0.5) + 0.5;
                target.alpha = alpVaule;
            });
        };
        AnimationManager_Als.prototype.swingHeadTween = function (target, caller) {
            var scaleDelta = 0;
            var posY = target.y;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 6;
                target.y = scaleVaule + posY;
            });
        };
        AnimationManager_Als.prototype.swingBodyTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.05 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager_Als.prototype.cardEnter = function (xs, target, caller, complete) {
            var x = xs;
            var wid = target.width;
            var w = 0.6;
            target.width = wid * w;
            Laya.timer.loop(20, caller, function onLoop() {
                w += 0.01;
                target.width = wid * w;
                target.x += 10;
                if (target.x >= x) {
                    target.width = wid;
                    Laya.timer.clear(caller, onLoop);
                    complete && complete();
                }
            });
        };
        AnimationManager_Als.prototype.fallAni = function (target, caller, duration) {
            var disY = 1920 - target.y;
            var time = (duration / 20) + 1;
            var vX = Math.random() * 10 - 5;
            var vY = -Math.random() * 30;
            var aY = (disY - vY * time) * 2 / (time * time);
            var x = target.x;
            var y = target.y;
            var t = 0;
            var r = 360 / time;
            Laya.timer.loop(20, caller, function onLoop() {
                vY += aY;
                x += vX;
                y += vY;
                t += 20;
                target.pos(x, y);
                target.rotation += r;
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    target.destroy();
                }
            });
        };
        AnimationManager_Als.prototype.riseAni = function (target, caller, duration) {
            var vY = -Math.random() * 2;
            var t = 0;
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function onLoop() {
                target.y += vY;
                t += 20;
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.5 + 0.1;
                target.scale(scaleVaule, scaleVaule);
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    target.destroy();
                }
            });
        };
        AnimationManager_Als.prototype.CardFly = function (target, startPoint, targetPoint, duration, caller, complete) {
            var disX = targetPoint.x - startPoint.x;
            var disY = targetPoint.y - startPoint.y;
            var time = (duration / 30) + 1;
            var vX = (disX / time);
            var vY = -30;
            var aY = (disY - vY * time) * 2 / (time * time);
            var x = target.x;
            var y = target.y;
            var t = 0;
            var r = 360 / time;
            Laya.timer.loop(30, caller, function onLoop() {
                vY += aY;
                x += vX;
                y += vY;
                t += 30;
                target.pos(x, y);
                target.rotation += r;
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    complete && complete();
                }
            });
        };
        AnimationManager_Als.prototype.flayGlod = function (xSrc, ySrc, xObj, yObj) {
            var _this = this;
            var iTeme = 30;
            var nCount = 10;
            var goldArr = [];
            for (var i = 0; i < nCount; i++) {
                var goldImg = Laya.Pool.getItem("goods");
                if (!goldImg)
                    goldImg = new Laya.Image();
                goldImg.skin = "resource/assets/img/common/maininterface_icon_6.png";
                Laya.stage.addChild(goldImg);
                goldImg.x = xSrc;
                goldImg.y = ySrc;
                goldArr.push(goldImg);
            }
            var _loop_1 = function (i) {
                Laya.timer.once(i * iTeme, this_1, function () {
                    Laya.Tween.to(goldArr[i], { x: xObj, y: yObj }, 200, null, Laya.Handler.create(_this, function () {
                        Laya.stage.removeChild(goldArr[i]);
                        Laya.Pool.recover("goods", goldArr[i]);
                    }));
                });
            };
            var this_1 = this;
            for (var i = 0; i < goldArr.length; i++) {
                _loop_1(i);
            }
        };
        AnimationManager_Als.prototype.zoomTweena = function (target, caller, scaleD) {
            if (scaleD === void 0) { scaleD = 0.08; }
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += scaleD;
                var scaleVaule = Math.sin(scaleDelta) * 0.1 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        return AnimationManager_Als;
    }());

    var GamePreLoadingView_Als = (function (_super) {
        __extends(GamePreLoadingView_Als, _super);
        function GamePreLoadingView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "GamePreLoadingView";
            _this.img_bg = new Laya.Image();
            _this.img_bg.skin = "resource/assets/preloading/loading_bg.jpg";
            _this.img_bg.width = Laya.stage.width;
            _this.img_bg.height = Laya.stage.height;
            _this.img_bg.x = 0;
            _this.img_bg.y = 0;
            _this.addChild(_this.img_bg);
            _this.img_head = new Laya.Image();
            if (DeviceUtil.isWXMiniGame()) {
                _this.img_head.skin = "resource/assets/preloading/loading_logo_6_6.png";
            }
            else {
                _this.img_head.skin = "resource/assets/preloading/loading_logo.png";
            }
            _this.img_head.top = 300;
            _this.img_head.centerX = 0;
            _this.addChild(_this.img_head);
            _this.img_jdt_db = new Laya.Image();
            _this.img_jdt_db.skin = "resource/assets/preloading/loading_baseboard_1.png";
            _this.img_jdt_db.sizeGrid = "10,10,10,10";
            _this.img_jdt_db.width = 706;
            _this.img_jdt_db.height = 50;
            _this.img_jdt_db.bottom = 400;
            _this.img_jdt_db.centerX = 0;
            _this.addChild(_this.img_jdt_db);
            _this.img_jdt = new Laya.Image();
            _this.img_jdt.skin = "resource/assets/preloading/loading_baseboard_2.png";
            _this.img_jdt.sizeGrid = "10,10,10,10";
            _this.img_jdt.width = 691;
            _this.img_jdt.height = 36;
            _this.img_jdt.x = 8;
            _this.img_jdt.centerY = 0;
            _this.img_jdt_db.addChild(_this.img_jdt);
            _this.img_load = new Laya.Image();
            _this.img_load.skin = "resource/assets/preloading/loading_word.png";
            _this.img_load.bottom = 300;
            _this.img_load.centerX = 0;
            _this.addChild(_this.img_load);
            _this.aniBox = new Laya.Box();
            _this.aniBox.width = 500;
            _this.aniBox.height = 700;
            _this.aniBox.x = Laya.stage.width / 2;
            _this.aniBox.y = Laya.stage.height / 2;
            _this.addChild(_this.aniBox);
            _this.createSkeleton("resource/assets/preloading/loading.sk");
            _this.progress(1, 100);
            return _this;
        }
        GamePreLoadingView_Als.prototype.childrenCreated = function () { };
        GamePreLoadingView_Als.prototype.createSkeleton = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationManager_Als.instance.showSkeletonAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, true);
                    _this.aniBox.y = Laya.stage.height / 2 + boomAnimation.height / 2 - 50;
                    _this.aniBox.addChild(boomAnimation);
                    resolve(boomAnimation);
                }, 0);
            });
        };
        GamePreLoadingView_Als.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        GamePreLoadingView_Als.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
            this.img_bg.scaleX = this.img_bg.scaleY = DeviceUtil.getScalePix();
        };
        GamePreLoadingView_Als.prototype.progress = function (index, len) {
            if (this.img_jdt) {
                this.img_jdt.width = 691 * (index / len);
            }
        };
        GamePreLoadingView_Als.prototype.remove = function () {
            Laya.timer.clearAll(this);
        };
        return GamePreLoadingView_Als;
    }(BaseSceneUISkin));

    var Als_SoundConst = (function () {
        function Als_SoundConst() {
        }
        Als_SoundConst.getKeyUrl = function (key) {
            return "resource/assets/sounds/" + key + Als_SoundConst.sufix;
        };
        Als_SoundConst.Bgm = "bgm";
        Als_SoundConst.Btn_1 = "btn_1";
        Als_SoundConst.sufix = ".mp3";
        return Als_SoundConst;
    }());

    var Als_SoundManager = (function () {
        function Als_SoundManager() {
            this._shakeIsOpen = true;
            this._soundIsOpen = true;
            this.effectPool = {};
            this._musicOpen = true;
            this._bgvolume = 1;
            this.effectPools = {};
            this.onPlaySoundNum = 0;
            this.effectVolume = 1;
            this._soundOpen = true;
        }
        Als_SoundManager.getInstance = function () {
            if (!Als_SoundManager.instance) {
                Als_SoundManager.instance = new Als_SoundManager();
            }
            return Als_SoundManager.instance;
        };
        Object.defineProperty(Als_SoundManager.prototype, "shakeIsOpen", {
            get: function () {
                return this._shakeIsOpen;
            },
            set: function (isOpen) {
                this._shakeIsOpen = isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Als_SoundManager.prototype, "soundIsOpen", {
            get: function () {
                return this._soundIsOpen;
            },
            set: function (isOpen) {
                this._soundIsOpen = isOpen;
                this.musicOpen = isOpen;
                this.soundOpen = isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Als_SoundManager.prototype, "musicOpen", {
            get: function () {
                return this._musicOpen;
            },
            set: function (value) {
                this._musicOpen = value;
                if (value) {
                    this.playBgMusic();
                }
                else {
                    this.stopBgMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Als_SoundManager.prototype, "bgm", {
            get: function () {
                return this._bgm;
            },
            set: function (bgm) {
                if (!this._bgm || this._bgm != bgm) {
                    this._bgm = bgm;
                    this.playBgMusic();
                }
                else if (this._bgm == bgm) {
                    this.stopBgMusic();
                    this.playBgMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Als_SoundManager.prototype, "bgvolume", {
            get: function () {
                return this._bgvolume;
            },
            set: function (value) {
                this.musicChannel && (this.musicChannel.volume = value);
                this._bgvolume = value;
            },
            enumerable: true,
            configurable: true
        });
        Als_SoundManager.prototype.playBgMusic = function () {
            console.log("playBgm >>>", this._bgm, this.musicOpen);
            if (!this._bgm)
                return;
            if (!this.musicOpen)
                return;
            this.playMusic();
        };
        Als_SoundManager.prototype.playMusic = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _url, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.soundChannel) return [3, 1];
                            this.soundChannel.resume();
                            return [3, 3];
                        case 1:
                            _url = ResUtil.getIntance().defaultOriginUrl + "resource/assets/sounds/" + this._bgm + ".mp3";
                            console.log("bgm url >>>", _url);
                            _a = this;
                            return [4, Laya.SoundManager.playMusic(_url, 0)];
                        case 2:
                            _a.soundChannel = _b.sent();
                            _b.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        Als_SoundManager.prototype.pauseBgm = function () {
            console.log("pauseBgm >>>");
            this.soundChannel && this.soundChannel.pause();
        };
        Als_SoundManager.prototype.stopBgMusic = function () {
            console.log("stopBgm >>>");
            Laya.SoundManager.stopMusic();
        };
        Object.defineProperty(Als_SoundManager.prototype, "soundOpen", {
            get: function () {
                return this._soundOpen;
            },
            set: function (_soundOpen) {
                this._soundOpen = _soundOpen;
            },
            enumerable: true,
            configurable: true
        });
        Als_SoundManager.prototype.destoryOneSound = function (soundName) {
            var _url = Als_SoundConst.getKeyUrl(soundName);
            if (DeviceUtil.isMiniGame()) {
                _url = Laya.URL.basePath + _url;
            }
            Laya.loader.clearRes(_url);
            if (!DeviceUtil.isQQMiniGame() && !DeviceUtil.isWXMiniGame()) {
                this.effectPool[_url].destroy();
                this.effectPool[_url] = null;
            }
            this.effectPools[_url].destroy();
            this.effectPools[_url] = null;
        };
        Als_SoundManager.prototype.playEffect = function (soundUrl, times) {
            return __awaiter(this, void 0, void 0, function () {
                var _url, sound, soundChannel, soundChannel;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _url = Als_SoundConst.getKeyUrl(soundUrl);
                            if (this._soundOpen == false || !soundUrl || soundUrl == "")
                                return [2];
                            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                                this.playMiniGameEffect(Laya.URL.basePath + _url);
                                return [2];
                            }
                            sound = this.effectPool[soundUrl];
                            if (!(!sound || !sound.audioBuffer || !sound._disposed)) return [3, 5];
                            return [4, ResUtil.getIntance().getAsyncRESByUrl(_url)];
                        case 1:
                            sound = _a.sent();
                            if (!sound) return [3, 2];
                            this.effectPool[soundUrl] = sound;
                            soundChannel = sound.play(0, times);
                            soundChannel.volume = this.effectVolume;
                            return [3, 4];
                        case 2: return [4, ResUtil.getIntance().getAsyncRESByUrl(_url).then(function () {
                                _this.playEffect(soundUrl, times);
                            })];
                        case 3:
                            _a.sent();
                            return [2];
                        case 4: return [3, 6];
                        case 5:
                            soundChannel = sound.play(0, times);
                            if (soundChannel) {
                                soundChannel.play();
                            }
                            soundChannel.volume = this.effectVolume;
                            _a.label = 6;
                        case 6: return [2];
                    }
                });
            });
        };
        Als_SoundManager.prototype.stopEffect = function (soundUrl) {
            var stLayaSound = this.effectPool[soundUrl];
            if (stLayaSound) {
                stLayaSound.dispose;
            }
        };
        Als_SoundManager.prototype.playMiniGameEffect = function (soundUrl) {
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame()) {
                var innerAudioContext_1 = this.effectPools[soundUrl];
                if (!innerAudioContext_1) {
                    Als_SoundManager.getInstance().effectPools[soundUrl] = innerAudioContext_1 = platform.createInnerAudioContext();
                    innerAudioContext_1.autoplay = true;
                    innerAudioContext_1.src = soundUrl;
                    innerAudioContext_1.onError(function () {
                        innerAudioContext_1.destroy();
                        Als_SoundManager.getInstance().effectPools[soundUrl] = null;
                    });
                    innerAudioContext_1.onStop(function () {
                        innerAudioContext_1.destroy();
                        Als_SoundManager.getInstance().effectPools[soundUrl] = null;
                    });
                }
                innerAudioContext_1.play();
                return;
            }
            var miniSounds = this.effectPools[soundUrl];
            if (!miniSounds) {
                this.effectPools[soundUrl] = miniSounds = [];
            }
            var miniSound;
            if (miniSounds.length < 1) {
                miniSound = new MiniGameSound();
                miniSound.create(soundUrl);
            }
            else {
                miniSound = miniSounds.shift();
                if (miniSound.isEnded == false) {
                    miniSound = new MiniGameSound();
                    miniSound.create(soundUrl);
                }
                else {
                    miniSound.play();
                }
            }
            this.onPlaySoundNum += 1;
        };
        return Als_SoundManager;
    }());
    var MiniGameSound = (function () {
        function MiniGameSound() {
        }
        MiniGameSound.prototype.create = function (soundUrl) {
            var _this = this;
            this.innerAudioContext = platform.createInnerAudioContext();
            this.innerAudioContext.onEnded(function () {
                _this.isEnded = true;
                Als_SoundManager.getInstance().effectPools[_this.soundUrl].push(_this);
                Als_SoundManager.getInstance().onPlaySoundNum -= 1;
            });
            this.isEnded = false;
            this.soundUrl = soundUrl;
            this.innerAudioContext.src = soundUrl;
            this.innerAudioContext.autoplay = true;
        };
        MiniGameSound.prototype.play = function () {
            this.innerAudioContext.play();
        };
        return MiniGameSound;
    }());

    var EnterGameType;
    (function (EnterGameType) {
        EnterGameType[EnterGameType["enum_EnterGameType_GameHome"] = 1] = "enum_EnterGameType_GameHome";
        EnterGameType[EnterGameType["enum_EnterGameType_Next"] = 2] = "enum_EnterGameType_Next";
        EnterGameType[EnterGameType["enum_EnterGameType_ReStart"] = 3] = "enum_EnterGameType_ReStart";
        EnterGameType[EnterGameType["enum_EnterGameType_ChooseLevel"] = 4] = "enum_EnterGameType_ChooseLevel";
    })(EnterGameType || (EnterGameType = {}));
    var GoodsType;
    (function (GoodsType) {
        GoodsType[GoodsType["enum_GoodsType_Sp"] = 1] = "enum_GoodsType_Sp";
        GoodsType[GoodsType["enum_GoodsType_Glod"] = 2] = "enum_GoodsType_Glod";
    })(GoodsType || (GoodsType = {}));
    var SkinState;
    (function (SkinState) {
        SkinState[SkinState["enum_SkinState_Have"] = 1] = "enum_SkinState_Have";
        SkinState[SkinState["enum_SkinState_NotOwned"] = 2] = "enum_SkinState_NotOwned";
        SkinState[SkinState["enum_SkinState_Used"] = 3] = "enum_SkinState_Used";
    })(SkinState || (SkinState = {}));
    var MoreGameIndex_Als = (function () {
        function MoreGameIndex_Als() {
            this.ad_id = 0;
            this.ad_img = "";
            this.name = "";
            this.ad_appid = "";
            this.url = "";
        }
        return MoreGameIndex_Als;
    }());

    var GameStateManager_Als = (function () {
        function GameStateManager_Als() {
            this.nLevelState = EnterGameType.enum_EnterGameType_GameHome;
        }
        GameStateManager_Als.getInstance = function () {
            if (!GameStateManager_Als.instance) {
                GameStateManager_Als.instance = new GameStateManager_Als();
            }
            return GameStateManager_Als.instance;
        };
        Object.defineProperty(GameStateManager_Als.prototype, "levelState", {
            get: function () {
                return this.nLevelState;
            },
            set: function (nState) {
                this.nLevelState = nState;
            },
            enumerable: true,
            configurable: true
        });
        return GameStateManager_Als;
    }());

    var ConfigManager_Als = (function () {
        function ConfigManager_Als() {
            this.mapDialogBoxIndex = {};
        }
        ConfigManager_Als.getInstance = function () {
            if (!ConfigManager_Als.instance) {
                ConfigManager_Als.instance = new ConfigManager_Als();
            }
            return ConfigManager_Als.instance;
        };
        ConfigManager_Als.prototype.initConfigInfo = function () {
            var self = ConfigManager_Als.instance;
            return new Promise(function (resolve) {
                var count = 0;
                var len = 5;
                var loadConfigSucc = function () {
                    count++;
                    if (count >= len) {
                        resolve();
                    }
                };
                Laya.loader.load('resource/assets/config/GameConfig.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, function (json) {
                    if (typeof (json) == "string") {
                        self.aryGameConfig = JSON.parse(json);
                    }
                    else {
                        self.aryGameConfig = json;
                    }
                    loadConfigSucc();
                }));
                Laya.loader.load('resource/assets/config/SignConfig.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, function (json) {
                    if (typeof (json) == "string") {
                        self.arySignData = JSON.parse(json);
                    }
                    else {
                        self.arySignData = json;
                    }
                    loadConfigSucc();
                }));
                Laya.loader.load('resource/assets/config/DialogBox.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, function (json) {
                    if (typeof (json) == "string") {
                        self.aryDialogBoxIndex = JSON.parse(json);
                    }
                    else {
                        self.aryDialogBoxIndex = json;
                    }
                    var nLen = self.aryDialogBoxIndex.length;
                    for (var i = 0; i < nLen; ++i) {
                        self.mapDialogBoxIndex[self.aryDialogBoxIndex[i].id] = self.aryDialogBoxIndex[i];
                    }
                    loadConfigSucc();
                }));
                Laya.loader.load('resource/assets/config/LevelPsInfo.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, function (json) {
                    if (typeof (json) == "string") {
                        self.aryLevelPsData = JSON.parse(json);
                    }
                    else {
                        self.aryLevelPsData = json;
                    }
                    loadConfigSucc();
                }));
                Laya.loader.load('resource/assets/config/InviteConfig.json' + Als_GameData.getInstance().randomTime, new Laya.Handler(self, function (json) {
                    if (typeof (json) == "string") {
                        self.aryInviteConfigIndex = JSON.parse(json);
                    }
                    else {
                        self.aryInviteConfigIndex = json;
                    }
                    loadConfigSucc();
                }));
            });
        };
        ConfigManager_Als.prototype.getInviteConfigInfo = function () {
            return ConfigManager_Als.instance.aryInviteConfigIndex;
        };
        ConfigManager_Als.prototype.getSignDataAll = function () {
            return ConfigManager_Als.instance.arySignData;
        };
        ConfigManager_Als.prototype.getSignDataBySignID = function (nIndex) {
            if (nIndex < 0 || nIndex >= ConfigManager_Als.instance.arySignData.length) {
                return null;
            }
            return ConfigManager_Als.instance.arySignData[nIndex];
        };
        ConfigManager_Als.prototype.getGameConfigDataByID = function (nID) {
            if (nID > ConfigManager_Als.instance.aryGameConfig.length || nID <= 0) {
                return null;
            }
            var nRealID = nID - 1;
            return ConfigManager_Als.instance.aryGameConfig[nRealID];
        };
        ConfigManager_Als.prototype.getTreasureByCurLevel = function () {
            var nRealIndex = PlayerDataManager_Als.getInstance().getCurLevel();
            if (nRealIndex < 0 || ConfigManager_Als.instance.aryLevelPsData.length < 0) {
                return 0;
            }
            nRealIndex = nRealIndex >= ConfigManager_Als.instance.aryLevelPsData.length ? ConfigManager_Als.instance.aryLevelPsData.length - 1 : nRealIndex;
            return ConfigManager_Als.instance.aryLevelPsData[nRealIndex].nPs;
        };
        ConfigManager_Als.prototype.getDialogInfo = function (nDialogID) {
            return ConfigManager_Als.instance.mapDialogBoxIndex[nDialogID];
        };
        return ConfigManager_Als;
    }());

    var GameLogicProcessingManager_Als = (function () {
        function GameLogicProcessingManager_Als() {
        }
        GameLogicProcessingManager_Als.getInstance = function () {
            if (!GameLogicProcessingManager_Als.instance) {
                GameLogicProcessingManager_Als.instance = new GameLogicProcessingManager_Als();
            }
            return GameLogicProcessingManager_Als.instance;
        };
        GameLogicProcessingManager_Als.GetCurTime = function () {
            return Laya.Browser.now();
        };
        Object.defineProperty(GameLogicProcessingManager_Als.prototype, "PSRecoveryOpen", {
            get: function () {
                return this.bPSRecoveryOpen;
            },
            set: function (b) {
                this.bPSRecoveryOpen = b;
            },
            enumerable: true,
            configurable: true
        });
        return GameLogicProcessingManager_Als;
    }());

    var GameEvent_Als = (function () {
        function GameEvent_Als() {
        }
        GameEvent_Als.ON_PS_CHANGE = "ON_PS_CHANGE";
        GameEvent_Als.ON_GLOD_CHANGE = "ON_GLOD_CHANGE";
        GameEvent_Als.ON_SP_UPDOWN_TIME = "ON_SP_UPDOWN_TIME";
        GameEvent_Als.REFRESH_INVITE = "REFRESH_INVITE";
        GameEvent_Als.EVENT_FLAY_GLOD = "EVENT_FLAY_GLOD";
        GameEvent_Als.CHANGE_VIDEO_IMAGE = "CHANGE_VIDEO_IMAGE";
        GameEvent_Als.PS_LIMITLESS = "PS_LIMITLISS";
        return GameEvent_Als;
    }());
    window['GameEvent'] = GameEvent_Als;

    var Als_PlayerDataBase = (function () {
        function Als_PlayerDataBase() {
            this.inviteId = [];
            this.nMaxLevel = 0;
            this.nCurLevel = 0;
            this.nCurIndex = 0;
            this.nSignTimeLast = 0;
            this.nSignIndex = 0;
            this.nLotteryTimeLast = 0;
            this.nLotteryCount = 0;
            this.nGlodCount = 0;
            this.nPS = 5;
            this.nPsTime = 0;
        }
        return Als_PlayerDataBase;
    }());
    var Als_DYLogData = (function () {
        function Als_DYLogData() {
            this.aryIndex = [];
        }
        return Als_DYLogData;
    }());
    var Als_NewFuncPsLimitless = (function () {
        function Als_NewFuncPsLimitless() {
            this.nRefreshTime = 0;
            this.nCurTime = 0;
            this.nMaxTime = 5;
        }
        return Als_NewFuncPsLimitless;
    }());
    var NewOperData = (function () {
        function NewOperData() {
            this.nMaxLevelNew = 0;
            this.nLastMaxLevel = 0;
        }
        return NewOperData;
    }());
    var NewOperData713 = (function () {
        function NewOperData713() {
            this.nSecond = 0;
        }
        return NewOperData713;
    }());
    var OperData0807 = (function () {
        function OperData0807() {
            this.bSpecial = false;
        }
        return OperData0807;
    }());
    var PlayerDataManager_Als = (function () {
        function PlayerDataManager_Als() {
            this.nMaxLevelCount = 40;
            this.bEnterGameFromGameHome = false;
            this.nGotoLevel = 0;
            this.stPlayerDataBase = new Als_PlayerDataBase();
            this.stDYLogData = new Als_DYLogData();
            this.stNewOperData = new NewOperData();
            this.stNewOperData713 = new NewOperData713();
            this.stNewFuncPsLimitless = new Als_NewFuncPsLimitless();
            this.stOperData0807 = new OperData0807();
            this.nPsRecoveryTime = 0;
            this.nPsTimeCountDown = 0;
            this.strUpDownTime = "";
            this.bIsNewPlayer = false;
        }
        PlayerDataManager_Als.getInstance = function () {
            if (!this.instance) {
                this.instance = new PlayerDataManager_Als();
            }
            return this.instance;
        };
        PlayerDataManager_Als.prototype.addLevel = function () {
            this.stPlayerDataBase.nCurLevel += 1;
            if (this.stNewOperData.nMaxLevelNew < this.stPlayerDataBase.nCurLevel) {
                this.stNewOperData.nMaxLevelNew = this.stPlayerDataBase.nCurLevel;
                this.stNewOperData.nMaxLevelNew = this.stNewOperData.nMaxLevelNew >= this.nMaxLevelCount ? this.nMaxLevelCount : this.stNewOperData.nMaxLevelNew;
            }
            this.stPlayerDataBase.nCurLevel = this.stPlayerDataBase.nCurLevel < this.nMaxLevelCount ? this.stPlayerDataBase.nCurLevel : this.nMaxLevelCount - 1;
            if (this.stPlayerDataBase.nMaxLevel < this.stPlayerDataBase.nCurLevel) {
                this.stPlayerDataBase.nMaxLevel = this.stPlayerDataBase.nCurLevel;
            }
            this.SaveData();
        };
        PlayerDataManager_Als.prototype.getCurLevel = function () {
            return this.stPlayerDataBase.nCurLevel;
        };
        PlayerDataManager_Als.prototype.getCurLevelMax = function () {
            return this.stPlayerDataBase.nMaxLevel;
        };
        Object.defineProperty(PlayerDataManager_Als.prototype, "isNewPlayer", {
            get: function () {
                return this.bIsNewPlayer;
            },
            enumerable: true,
            configurable: true
        });
        PlayerDataManager_Als.prototype.setCurLevel = function (nLevel) {
            this.stPlayerDataBase.nCurLevel = nLevel;
            this.SaveData();
        };
        PlayerDataManager_Als.prototype.getCurLevelToChallenge = function () {
            var nRealData = this.stPlayerDataBase.nCurLevel + 1;
            if (nRealData > this.nMaxLevelCount) {
                nRealData = this.nMaxLevelCount;
            }
            if (this.allCustomsClearance()) {
                nRealData = Utils.random(1, this.nMaxLevelCount);
            }
            return nRealData;
        };
        PlayerDataManager_Als.prototype.getLevelToChangeMaxLevel = function () {
            var nRealData = this.stPlayerDataBase.nMaxLevel + 1;
            if (nRealData > this.nMaxLevelCount) {
                nRealData = this.nMaxLevelCount;
            }
            if (this.allCustomsClearance()) {
                nRealData = this.stPlayerDataBase.nCurLevel + 1;
                if (nRealData > this.nMaxLevelCount) {
                    nRealData = this.nMaxLevelCount;
                }
            }
            return nRealData;
        };
        PlayerDataManager_Als.prototype.getLevelToChangeMaxLevelForLevelView = function () {
            var nRealData = this.stPlayerDataBase.nMaxLevel + 1;
            if (nRealData > this.nMaxLevelCount) {
                nRealData = this.nMaxLevelCount;
            }
            return nRealData;
        };
        PlayerDataManager_Als.prototype.SaveData = function () {
            var str = JSON.stringify(this.stPlayerDataBase);
            Laya.LocalStorage.setItem(Als_GameData.getInstance().userInfo.openId + "BaseData", str);
            var stra = Laya.LocalStorage.getItem(Als_GameData.getInstance().userInfo.openId + "BaseData");
            console.log("stra>>>", stra);
            str = JSON.stringify(this.stNewFuncPsLimitless);
            Laya.LocalStorage.setItem(Als_GameData.getInstance().userInfo.openId + "NewFuncPsLimitless", str);
            str = JSON.stringify(this.stNewOperData);
            Laya.LocalStorage.setItem(Als_GameData.getInstance().userInfo.openId + "task20200611", str);
            str = JSON.stringify(this.stNewOperData713);
            Laya.LocalStorage.setItem(Als_GameData.getInstance().userInfo.openId + "stNewOperData713", str);
            var strNewOper0807 = JSON.stringify(this.stOperData0807);
            Laya.LocalStorage.setItem(Als_GameData.getInstance().userInfo.openId + "OperData0807", strNewOper0807);
        };
        PlayerDataManager_Als.prototype.GetData = function () {
            var str = Laya.LocalStorage.getItem(Als_GameData.getInstance().userInfo.openId + "BaseData");
            if (str) {
                try {
                    this.stPlayerDataBase = JSON.parse(str);
                    this.bIsNewPlayer = false;
                    PlayerDataManager_Als.bGlobEnterGame = true;
                }
                catch (e) {
                    this.bIsNewPlayer = true;
                    this.stPlayerDataBase = new Als_PlayerDataBase();
                }
            }
            else {
                this.bIsNewPlayer = true;
                PlayerDataManager_Als.bGlobEnterGame = false;
            }
            str = Laya.LocalStorage.getItem(Als_GameData.getInstance().userInfo.openId + "task20200611");
            if (str) {
                try {
                    this.stNewOperData = JSON.parse(str);
                }
                catch (e) {
                    console.log("error player data : ", e);
                    this.stNewOperData = new NewOperData();
                }
            }
            str = Laya.LocalStorage.getItem(Als_GameData.getInstance().userInfo.openId + "NewFuncPsLimitless");
            if (str) {
                try {
                    this.stNewFuncPsLimitless = JSON.parse(str);
                }
                catch (e) {
                    console.log("error player data : ", e);
                    this.stNewFuncPsLimitless = new Als_NewFuncPsLimitless();
                }
            }
            str = Laya.LocalStorage.getItem(Als_GameData.getInstance().userInfo.openId + "stNewOperData713");
            if (str) {
                try {
                    this.stNewOperData713 = JSON.parse(str);
                    this.stNewOperData713.nSecond += 1;
                }
                catch (e) {
                    console.log("error player data : ", e);
                    this.stNewOperData713 = new NewOperData713();
                }
            }
            if (this.stNewFuncPsLimitless.nRefreshTime == 0) {
                this.stNewFuncPsLimitless.nRefreshTime = new Date().getTime();
            }
            var nCurTime = new Date().getTime();
            if (!Utils.judgeIsOnTheSameDay(this.stNewFuncPsLimitless.nRefreshTime, nCurTime)) {
                this.stNewFuncPsLimitless.nCurTime = 0;
                this.stNewFuncPsLimitless.nRefreshTime = nCurTime;
                this.stNewOperData713.nSecond = 0;
            }
            if (this.stNewOperData.nMaxLevelNew == 0) {
                this.stNewOperData.nMaxLevelNew = this.stPlayerDataBase.nMaxLevel;
            }
            if (this.stNewOperData.nLastMaxLevel == 0) {
                this.stNewOperData.nLastMaxLevel = this.nMaxLevelCount;
            }
            if (this.stNewOperData.nLastMaxLevel < this.nMaxLevelCount && (this.stPlayerDataBase.nMaxLevel + 1) == this.stNewOperData.nMaxLevelNew) {
                this.stPlayerDataBase.nMaxLevel += 1;
                this.stNewOperData.nLastMaxLevel = this.nMaxLevelCount;
            }
            if (BaseConst.infos.gameInfo.openalllevel == 1) {
                this.stPlayerDataBase.nCurLevel = this.nMaxLevelCount - 1;
                this.stPlayerDataBase.nMaxLevel = this.nMaxLevelCount - 1;
                this.bIsNewPlayer = false;
            }
            EventMgr.getInstance().sendEvent(GameEvent_Als.ON_GLOD_CHANGE);
            EventMgr.getInstance().sendEvent(GameEvent_Als.ON_PS_CHANGE);
            if (this.stNewFuncPsLimitless.nCurTime == this.stNewFuncPsLimitless.nMaxTime) {
                EventMgr.getInstance().sendEvent(GameEvent_Als.PS_LIMITLESS);
            }
            var strOperData0807 = Laya.LocalStorage.getItem("OperData0807" + Als_GameData.getInstance().userInfo.openId);
            if (strOperData0807) {
                this.stOperData0807 = JSON.parse(strOperData0807);
            }
            else {
                this.stOperData0807 = new OperData0807();
            }
            this.SaveData();
        };
        PlayerDataManager_Als.prototype.AddGoods = function (nType, nCount) {
            if (nType == GoodsType.enum_GoodsType_Glod) {
                this.stPlayerDataBase.nGlodCount += nCount;
                EventMgr.getInstance().sendEvent(GameEvent_Als.ON_GLOD_CHANGE);
            }
            else if (nType == GoodsType.enum_GoodsType_Sp) {
                this.stPlayerDataBase.nPS += nCount;
                var nMax = 99;
                var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(4);
                if (stGameConfig) {
                    nMax = parseInt(stGameConfig.strValue);
                }
                if (this.stPlayerDataBase.nPS > nMax) {
                    TipsManager.getInstance().showDefaultTips("体力已满");
                    this.stPlayerDataBase.nPS = nMax;
                }
                EventMgr.getInstance().sendEvent(GameEvent_Als.ON_PS_CHANGE);
                this.openPSRecoveryTime();
            }
            this.SaveData();
        };
        PlayerDataManager_Als.prototype.CheckGoods = function (nType, nCount) {
            if (nType == GoodsType.enum_GoodsType_Glod) {
                return this.stPlayerDataBase.nGlodCount >= nCount;
            }
            else if (nType == GoodsType.enum_GoodsType_Sp) {
                if (this.isPsLimitlessState()) {
                    return true;
                }
                return this.stPlayerDataBase.nPS >= nCount;
            }
        };
        PlayerDataManager_Als.prototype.subGoods = function (nType, nCount) {
            if (nType == GoodsType.enum_GoodsType_Glod) {
                this.stPlayerDataBase.nGlodCount -= nCount;
                this.stPlayerDataBase.nGlodCount = this.stPlayerDataBase.nGlodCount < 0 ? 0 : this.stPlayerDataBase.nGlodCount;
                EventMgr.getInstance().sendEvent(GameEvent_Als.ON_GLOD_CHANGE);
            }
            else if (nType == GoodsType.enum_GoodsType_Sp) {
                if (this.isPsLimitlessState()) {
                    return;
                }
                this.stPlayerDataBase.nPS -= nCount;
                this.stPlayerDataBase.nPS = this.stPlayerDataBase.nPS < 0 ? 0 : this.stPlayerDataBase.nPS;
                EventMgr.getInstance().sendEvent(GameEvent_Als.ON_PS_CHANGE);
                this.openPSRecoveryTime();
            }
            this.SaveData();
        };
        PlayerDataManager_Als.prototype.getSpLastTime = function () {
            return this.strUpDownTime;
        };
        PlayerDataManager_Als.prototype.refreshOffLinePS = function () {
            this.addPsAboutOffLine();
            this.openPSRecoveryTime();
        };
        PlayerDataManager_Als.prototype.addPsAboutOffLine = function () {
            if (this.stPlayerDataBase.nPsTime == 0) {
                return;
            }
            var nMaxPs = 10;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(1);
            if (stGameConfig) {
                nMaxPs = parseInt(stGameConfig.strValue);
            }
            if (this.stPlayerDataBase.nPS >= nMaxPs) {
                return;
            }
            stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(2);
            if (stGameConfig) {
                var nAddPsPerTime = parseInt(stGameConfig.strValue);
                if (nAddPsPerTime == 0) {
                    return;
                }
                var nCurtTime = GameLogicProcessingManager_Als.GetCurTime();
                var nTimeOverFlow = nCurtTime - this.stPlayerDataBase.nPsTime;
                var nPsAdd = Math.floor(nTimeOverFlow / nAddPsPerTime);
                this.stPlayerDataBase.nPS += nPsAdd;
                nTimeOverFlow = nTimeOverFlow % nAddPsPerTime;
                this.stPlayerDataBase.nPsTime = nCurtTime - nTimeOverFlow;
                if (this.stPlayerDataBase.nPS >= nMaxPs) {
                    this.stPlayerDataBase.nPS = nMaxPs;
                    this.stPlayerDataBase.nPsTime = 0;
                }
                this.SaveData();
            }
        };
        PlayerDataManager_Als.prototype.openPSRecoveryTime = function () {
            if (this.nPsRecoveryTime == 0) {
                var stGameConfig_1 = ConfigManager_Als.getInstance().getGameConfigDataByID(2);
                if (!stGameConfig_1) {
                    return;
                }
                this.nPsRecoveryTime = parseInt(stGameConfig_1.strValue);
            }
            var nMaxPs = 10;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(1);
            if (stGameConfig) {
                nMaxPs = parseInt(stGameConfig.strValue);
            }
            if (this.stPlayerDataBase.nPS >= nMaxPs) {
                Laya.timer.clear(this, this.subTimeAndRefreshPsRecoveryTimeView);
                this.stPlayerDataBase.nPsTime = 0;
                GameLogicProcessingManager_Als.getInstance().PSRecoveryOpen = false;
            }
            else {
                if (!GameLogicProcessingManager_Als.getInstance().PSRecoveryOpen) {
                    GameLogicProcessingManager_Als.getInstance().PSRecoveryOpen = true;
                    var nCurTime = GameLogicProcessingManager_Als.GetCurTime();
                    if (this.stPlayerDataBase.nPsTime == 0) {
                        this.stPlayerDataBase.nPsTime = nCurTime;
                    }
                    this.nPsTimeCountDown = this.nPsRecoveryTime - (nCurTime - this.stPlayerDataBase.nPsTime);
                    this.refreshPsRecoveryTimeView(this.nPsTimeCountDown);
                    Laya.timer.loop(1000, this, this.subTimeAndRefreshPsRecoveryTimeView);
                    this.SaveData();
                }
            }
        };
        PlayerDataManager_Als.prototype.subTimeAndRefreshPsRecoveryTimeView = function () {
            if (!GameLogicProcessingManager_Als.getInstance().PSRecoveryOpen) {
                return;
            }
            this.nPsTimeCountDown -= 1000;
            this.refreshPsRecoveryTimeView(this.nPsTimeCountDown);
        };
        PlayerDataManager_Als.prototype.refreshPsRecoveryTimeView = function (nTime) {
            var nLastTime = nTime;
            nLastTime = nLastTime < 0 ? 0 : nLastTime;
            nLastTime = Math.floor(nLastTime / 1000);
            var nMinTotal = Math.floor(nLastTime / 60);
            var nMinTen = Math.floor(nMinTotal / 10);
            var nSecTotal = nLastTime % 60;
            var nSecTen = Math.floor(nSecTotal / 10);
            var nSecBit = nSecTotal % 10;
            this.strUpDownTime = nMinTen.toString() + nMinTotal.toString() + ":" + nSecTen.toString() + nSecBit.toString();
            EventMgr.getInstance().sendEvent(GameEvent_Als.ON_SP_UPDOWN_TIME);
            if (nTime < 0) {
                this.nPsTimeCountDown = 0;
                GameLogicProcessingManager_Als.getInstance().PSRecoveryOpen = false;
                this.stPlayerDataBase.nPsTime = 0;
                Laya.timer.clear(this, this.refreshPsRecoveryTimeView);
                this.AddGoods(GoodsType.enum_GoodsType_Sp, 1);
                return;
            }
        };
        PlayerDataManager_Als.prototype.getLevelNumMakeOver = function () {
            return this.nMaxLevelCount;
        };
        PlayerDataManager_Als.prototype.initGoods = function () {
            if (!this.bIsNewPlayer) {
                return;
            }
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(15);
            if (stGameConfig) {
                this.stPlayerDataBase.nPS = parseInt(stGameConfig.strValue);
            }
            stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(16);
            if (stGameConfig) {
                this.stPlayerDataBase.nGlodCount = parseInt(stGameConfig.strValue);
            }
        };
        PlayerDataManager_Als.prototype.isSign = function () {
            var nCurTime = GameLogicProcessingManager_Als.GetCurTime();
            if (Utils.judgeIsOnTheSameDay(PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignTimeLast, nCurTime)) {
                return false;
            }
            else {
                return true;
            }
        };
        PlayerDataManager_Als.prototype.checkSkinState = function (nSkinID) {
            var nState = SkinState.enum_SkinState_NotOwned;
            if (nSkinID == 1) {
                nState = SkinState.enum_SkinState_Have;
            }
            else if (nSkinID == 2) {
                nState = SkinState.enum_SkinState_NotOwned;
            }
            return nState;
        };
        PlayerDataManager_Als.prototype.recordDyLogIndex = function (nIndex) {
            this.stDYLogData.aryIndex.push(nIndex);
        };
        PlayerDataManager_Als.prototype.checkDyLogIndexrecorded = function (nIndex) {
            for (var i = 0; i < this.stDYLogData.aryIndex.length; ++i) {
                if (nIndex == this.stDYLogData.aryIndex[i]) {
                    return true;
                }
            }
            return false;
        };
        PlayerDataManager_Als.prototype.addWatchVideoAddSpTime = function () {
            this.stNewFuncPsLimitless.nCurTime += 1;
            this.stNewFuncPsLimitless.nCurTime = this.stNewFuncPsLimitless.nCurTime > this.stNewFuncPsLimitless.nMaxTime ? this.stNewFuncPsLimitless.nMaxTime : this.stNewFuncPsLimitless.nCurTime;
            if (this.stNewFuncPsLimitless.nCurTime == this.stNewFuncPsLimitless.nMaxTime) {
                EventMgr.getInstance().sendEvent(GameEvent_Als.PS_LIMITLESS);
            }
            this.SaveData();
        };
        PlayerDataManager_Als.prototype.isPsLimitlessState = function () {
            return this.stNewFuncPsLimitless.nCurTime >= this.stNewFuncPsLimitless.nMaxTime;
        };
        PlayerDataManager_Als.prototype.getPsLimitlessStateLastTime = function () {
            return this.stNewFuncPsLimitless.nMaxTime - this.stNewFuncPsLimitless.nCurTime;
        };
        Object.defineProperty(PlayerDataManager_Als.prototype, "pNewFuncPsLimitless", {
            get: function () {
                return this.stNewFuncPsLimitless;
            },
            enumerable: true,
            configurable: true
        });
        PlayerDataManager_Als.prototype.allCustomsClearance = function () {
            return this.stNewOperData.nMaxLevelNew == PlayerDataManager_Als.getInstance().nMaxLevelCount;
        };
        PlayerDataManager_Als.prototype.isSecondEnterGame = function () {
            return this.stNewOperData713.nSecond >= 2;
        };
        PlayerDataManager_Als.bGlobEnterGame = true;
        return PlayerDataManager_Als;
    }());

    var InviteManager_Als = (function () {
        function InviteManager_Als() {
            this.URL = Als_GameData.getInstance().URL_OF_INVITE;
            this.inviterInfo = new netData.Als_Inviter();
            this.newPlayer = [];
        }
        InviteManager_Als.getInstance = function () {
            if (!InviteManager_Als.instance_) {
                InviteManager_Als.instance_ = new InviteManager_Als();
            }
            return InviteManager_Als.instance_;
        };
        InviteManager_Als.prototype.selectInfo = function (callF, obj) {
            var _this = this;
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            var gameId = Als_GameData.getInstance().gameId;
            var openId = Als_GameData.getInstance().userInfo.openId;
            var msg = {};
            msg.msg_type = "16";
            msg.msg_data = {
                "gameid": gameId,
                "openid": openId
            };
            console.log("查询受邀人列表 ->", msg);
            HttpMgr.getInstance().sendHttp(this.URL, msg, function (e) {
                var code = e["msg_data"]["error_code"];
                if (code == "0") {
                    console.log("查询受邀人列表成功 ->", e);
                    if (e["msg_data"]["index_list"] != "") {
                        var newPlayerTemp = e["msg_data"]["index_list"];
                        if (newPlayerTemp) {
                            _this.newPlayer = newPlayerTemp;
                        }
                        console.log("recvnewplayer = ", _this.newPlayer);
                    }
                }
                else {
                    console.warn("查询受邀人列表失败：", "str");
                }
                if (callF && obj) {
                    callF.call(obj, code);
                }
            }, function (e) { });
        };
        InviteManager_Als.prototype.createInfo = function (callF, obj) {
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, new Promise(function (res, rej) {
                                var inviterOpenId = _this.inviterInfo.openId;
                                var tx_url = Als_GameData.getInstance().userInfo.avatarUrl;
                                var nick = Als_GameData.getInstance().userInfo.nick;
                                var gameId = Als_GameData.getInstance().gameId;
                                var msg = {};
                                msg.msg_type = "14";
                                msg.msg_data = {
                                    "openid": inviterOpenId,
                                    "url": tx_url,
                                    "name": nick,
                                    "gameid": gameId
                                };
                                console.log("关联自己及邀请人 ->", msg, " game id = ", Als_GameData.getInstance().gameId);
                                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                                    var code = e["msg_data"]["error_code"];
                                    if (code == "0") {
                                        console.log("关联自己及邀请人成功...");
                                    }
                                    else {
                                        var str = code.toString();
                                        console.warn("关联自己及邀请人失败：", str);
                                    }
                                    if (callF && obj) {
                                        callF.call(obj, code);
                                    }
                                    res();
                                }, function (e) { });
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        InviteManager_Als.prototype.judgeInvite = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var res = Als_GameData.getInstance().enterGameInfo;
                console.log("开始关联邀请人", res);
                console.log("自己信息", Als_GameData.getInstance().userInfo);
                if (res) {
                    var scene = res.scene;
                    if (scene == 1007 || scene == 1008 || scene == 1044) {
                        if (Als_GameData.getInstance().userInfo.openId && res.query && res.query["openid"]) {
                            _this.inviterInfo.nick = res.query["nick"];
                            _this.inviterInfo.openId = res.query["openid"];
                            if (Als_GameData.getInstance().userInfo.openId != _this.inviterInfo.openId) {
                                console.log("关联邀请人", res.query);
                                _this.createInfo();
                            }
                        }
                    }
                    resolve();
                }
                else {
                    resolve();
                }
            });
        };
        InviteManager_Als.prototype.getInviteAwardData = function () {
            var inviteConfig = ConfigManager_Als.getInstance().getInviteConfigInfo();
            var lingqu = PlayerDataManager_Als.getInstance().stPlayerDataBase.inviteId;
            var invitePlayer = this.newPlayer;
            var dataArr = [];
            for (var i = 0, len = inviteConfig.length; i < len; i++) {
                var invite = inviteConfig[i];
                var awardId = invite.ID;
                var canLingqu = false;
                var lingqued = false;
                var player = null;
                if (invitePlayer.length - 1 >= i) {
                    player = invitePlayer[i];
                }
                if (lingqu.indexOf(awardId) > -1)
                    lingqued = true;
                if (player)
                    canLingqu = true;
                var data = new localData.Als_InviteData();
                data.id = awardId;
                data.head = player ? player["url"] : "";
                data.reward = invite.nCount;
                data.lingqued = lingqued;
                data.canLingqu = canLingqu;
                dataArr.push(data);
            }
            return dataArr;
        };
        return InviteManager_Als;
    }());

    var HttpMgr$1 = (function () {
        function HttpMgr() {
            this.printLog = true;
            this.defaultTimeOut = 5000;
        }
        HttpMgr.getInstance = function () {
            if (!HttpMgr.instance_) {
                HttpMgr.instance_ = new HttpMgr();
            }
            return HttpMgr.instance_;
        };
        HttpMgr.prototype.sendHttp = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url, data ? jsonStr : null, type, "text");
        };
        HttpMgr.prototype.sendHttpDY = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            if (type == "get" && data) {
                url += Utils.querStr(data);
            }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log("ontimeout");
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            if (type == "get") {
                httpRequest.send(url);
                return;
            }
            httpRequest.send(url, data ? jsonStr : null, "post", "text");
        };
        HttpMgr.prototype.sendPostHttp = function (url, data, secces, fail, type, showParse) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            if (showParse === void 0) { showParse = true; }
            console.log("url ->", url);
            var param;
            if (showParse) {
                param = this.getEncodeParam(data);
            }
            param = data;
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(rev);
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url, param, type, "json");
        };
        HttpMgr.prototype.sendGetHttp = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "get"; }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            var param = '';
            param = this.getEncodeParam(data);
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            var httpRequests = httpRequest.http;
            httpRequests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url + param, param, type, "text");
        };
        HttpMgr.prototype.getEncodeParam = function (data) {
            var param = '';
            if (data) {
                if (data instanceof String) {
                    return data;
                }
                var arr = [];
                for (var obj in data) {
                    arr.push(obj + '=' + data[obj]);
                }
                param = arr.join('&');
            }
            return param;
        };
        HttpMgr.prototype.sendHttpTemp = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(rev);
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url, data ? jsonStr : null, type, "text");
        };
        return HttpMgr;
    }());

    var Utils$1 = (function () {
        function Utils() {
        }
        Utils.objToParams = function (obj) {
            if (obj == null)
                return '';
            var arr = [];
            for (var key in obj) {
                arr.push(key + '=' + obj[key]);
            }
            var str = arr.join('&');
            arr = null;
            return str;
        };
        return Utils;
    }());

    var PlatformDY = (function () {
        function PlatformDY() {
        }
        PlatformDY.prototype.getParams = function () {
            if (DeviceUtil.isWXMiniGame()) ;
            else if (DeviceUtil.isQQMiniGame()) ;
            else if (DeviceUtil.isTTMiniGame()) ;
            return '';
        };
        PlatformDY.getTTOpenidAndAuthorzia = function (obj) {
            var data = Utils$1.objToParams(obj);
            return new Promise(function (resolve) {
                HttpMgr$1.getInstance().sendHttpDY(PlatformDY.url + "&act=userinfo" + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    PlatformDY.openid = jsonRev.openid;
                    console.log("DY---> authorzia rev = " + rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.getOpenidAndAuthorzia = function (obj) {
            return new Promise(function (resolve) {
                HttpMgr$1.getInstance().sendHttpDY(PlatformDY.url + "&act=userinfo&version=" + PlatformDY.version + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    PlatformDY.openid = jsonRev.openid;
                    console.log("DY---> authorzia rev = ", rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.startGame = function () {
            return new Promise(function (resolve) {
                HttpMgr$1.getInstance().sendHttpDY(PlatformDY.url + "&act=index&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&", null, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> startGame rev = ", rev);
                    PlatformDY.nGameID = jsonRev.id;
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.endGame = function (obj) {
            return new Promise(function (resolve) {
                HttpMgr$1.getInstance().sendHttpDY(PlatformDY.url + "&act=end&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> endGame rev = ", rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.clickGame = function (id) {
            HttpMgr$1.getInstance().sendHttpDY(PlatformDY.url + "&act=game&version=" + PlatformDY.version + "&id=" + id + "&openid=" + PlatformDY.openid, null, function (rev) {
                console.log("DY---> clickGame rev = ", rev);
            }, null, "get");
        };
        PlatformDY.toGame = function (id) {
            HttpMgr$1.getInstance().sendHttpDY(PlatformDY.url + "&act=cgame&version=" + PlatformDY.version + "&id=" + id + "&openid=" + PlatformDY.openid, null, function (rev) {
                console.log("DY---> toGame rev = ", rev);
            }, null, "get");
        };
        PlatformDY.delSameFlag = function (arr) {
            if (arr == null)
                return null;
            var len = arr.length;
            var obj = {};
            for (var i = 0; i < len; i++) {
                obj[arr[i].id] = arr[i];
            }
            var newArr = [];
            for (var id in obj) {
                newArr.push(obj[id]);
            }
            return newArr;
        };
        PlatformDY.getGameList = function () {
            return new Promise(function (resolve) {
                var url = PlatformDY.url + "&act=gamelist&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&v=" + Math.random();
                HttpMgr$1.getInstance().sendHttpDY(url, null, function (rev) {
                    console.log("DY---> getGameList rev = ", rev);
                    PlatformDY.bannerInfos = rev.data.banner;
                    PlatformDY.gameListInfos = PlatformDY.delSameFlag(rev.data.gamelist);
                    resolve(rev.data);
                }, null, "get");
            });
        };
        PlatformDY.initBoxView = function (adUnitId) {
            PlatformDY.boxView = platform.createAppBox(adUnitId);
            PlatformDY.boxView.load();
            PlatformDY.boxView.onClose(PlatformDY.boxViewClose);
        };
        PlatformDY.boxViewClose = function () {
            console.log("qq boxView close");
            if (PlatformDY.tempCloseBoxViewCallFunc) {
                PlatformDY.tempCloseBoxViewCallFunc.apply(PlatformDY.tempCloseBoxViewCallObj, PlatformDY.tempCloseBoxViewCallParam);
                PlatformDY.tempCloseBoxViewCallFunc = null;
            }
        };
        PlatformDY.refreshGameList = function () {
            PlatformDY.getGameList().then(function () {
                Als_GameData.getInstance().weCatMiniIconsInfo = [];
                var nLen = 0;
                if (PlatformDY.gameListInfos)
                    nLen = PlatformDY.gameListInfos.length;
                for (var i = 0; i < nLen; ++i) {
                    var stData = new MoreGameIndex_Als();
                    stData.ad_id = PlatformDY.gameListInfos[i].id;
                    stData.ad_img = PlatformDY.gameListInfos[i].img;
                    stData.name = PlatformDY.gameListInfos[i].title;
                    stData.ad_appid = PlatformDY.gameListInfos[i].appid;
                    stData.url = PlatformDY.gameListInfos[i].url;
                    Als_GameData.getInstance().weCatMiniIconsInfo.push(stData);
                }
                console.log("GameData.getInstance().weCatMiniIconsInfo = ", Als_GameData.getInstance().weCatMiniIconsInfo);
            });
        };
        PlatformDY.showBoxView = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!PlatformDY.boxView) {
                                console.error("boxView not init!!!!!!!!!");
                            }
                            return [4, PlatformDY.boxView.show()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        PlatformDY.url = "";
        PlatformDY.qqUrl = "";
        PlatformDY.ttUrl = "";
        PlatformDY.version = 1;
        PlatformDY.miniProgramList = [];
        PlatformDY.qqMiniProgramList = [];
        PlatformDY.ttMiniProgramList = [];
        PlatformDY.nGameID = 0;
        PlatformDY.gameListInfos = null;
        return PlatformDY;
    }());

    var BaseUIScene = (function (_super) {
        __extends(BaseUIScene, _super);
        function BaseUIScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "BaseUIScene";
            _this.eventPool = [];
            return _this;
        }
        BaseUIScene.prototype.registerEvent = function (target, type, callback, callbackobj) {
            target.on(type, callbackobj, callback);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        BaseUIScene.prototype.clearEvent = function () {
            var eventPool = this.eventPool;
            if (eventPool.length > 0) {
                for (var i = 0; i < this.eventPool.length; i++) {
                    var target = eventPool[i].target;
                    var type = eventPool[i].type;
                    var callback = eventPool[i].callback;
                    var callbackobj = eventPool[i].callbackobj;
                    if (target) {
                        target.off(type, callbackobj, callback);
                    }
                }
            }
            eventPool = [];
        };
        BaseUIScene.prototype.onDisable = function () {
            this.removeEvent();
        };
        BaseUIScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        BaseUIScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.clearEvent();
        };
        BaseUIScene.prototype.removeEvent = function () {
            this.clearEvent();
        };
        BaseUIScene.prototype.initView = function () {
        };
        BaseUIScene.prototype.addEvent = function () {
        };
        return BaseUIScene;
    }(BaseSceneUISkin));

    var SMGItem_Als = (function (_super) {
        __extends(SMGItem_Als, _super);
        function SMGItem_Als(data, nWith, nHeight) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShouMoreGameItem";
            _this.skin = "game/uiView/WeCatAls/ShowMoreGameInfoItem.json";
            _this._nIndex = data;
            _this.width = nWith;
            _this.height = nHeight;
            _this.pivotX = _this.width / 2;
            _this.pivotY = _this.height / 2;
            _this._bAni = true;
            return _this;
        }
        SMGItem_Als.prototype.setData = function (data) {
            this.removeEvent();
            this.addEvent();
            this._nIndex = data;
            this.initView();
        };
        SMGItem_Als.prototype.onRemoved = function () {
            this.removeEvent();
            Laya.Tween.clearAll(this);
        };
        SMGItem_Als.prototype.initView = function () {
            var stData = Als_GameData.getInstance().weCatMiniIconsInfo;
            if (this._nIndex < 0 || this._nIndex >= stData.length) {
                this._nIndex = stData.length - 1;
                if (this._nIndex < 0)
                    return;
            }
            var stDataIndex = stData[this._nIndex];
            this.lable_name.text = stDataIndex.name;
            this.image_icon.skin = stDataIndex.ad_img;
            this._stGameIndex = stData[this._nIndex];
            this.startOperAni_als();
        };
        SMGItem_Als.prototype.setAni = function (b) {
            this._bAni = b;
        };
        SMGItem_Als.prototype.addEvent = function () {
            this.registerEvent(this, Laya.Event.CLICK, this.gotoGame_als, this);
        };
        SMGItem_Als.prototype.funcFial_als = function () {
            if (DeviceUtil.isWXMiniGame()) {
                ViewManager.getInstance().showView(MoreGameOperRequest_Als);
            }
        };
        SMGItem_Als.prototype.gotoGame_als = function () {
            GameCenterManager_Als.getInstance().GameCenterGotoGame_als(this._stGameIndex, this.funcFial_als);
        };
        SMGItem_Als.prototype.operAni_als = function () {
            var _this = this;
            Laya.Tween.clearAll(this);
            Laya.Tween.to(this, { rotation: -5 }, 500, null, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this, { rotation: 5 }, 500, null, Laya.Handler.create(_this, function (args) {
                    Laya.timer.once(0, _this, _this.startOperAni_als);
                }));
            }));
        };
        SMGItem_Als.prototype.startOperAni_als = function () {
            if (!this._bAni) {
                return;
            }
            this.operAni_als();
        };
        return SMGItem_Als;
    }(BaseUIScene));

    var SMGIView = (function (_super) {
        __extends(SMGIView, _super);
        function SMGIView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SMGIView";
            _this.skin = "game/uiView/WeCatAls/ShowMoreGameInfoInView.json";
            _this._image_hand_als = null;
            _this._bAni_als = true;
            _this.height = 860;
            _this.width = 800;
            return _this;
        }
        Object.defineProperty(SMGIView.prototype, "ani", {
            set: function (b) {
                this._bAni_als = b;
            },
            enumerable: true,
            configurable: true
        });
        SMGIView.prototype.initView = function () {
            this.refreshWCMG_Als();
        };
        SMGIView.prototype.refreshHead = function (xTemp, yTemp) {
            if (!this._image_hand_als) {
                this._image_hand_als = new Laya.Image("resource/assets/img/wecat/failed_icon_1.png");
                this.box_wecat.addChild(this._image_hand_als);
            }
            this._image_hand_als.visible = true;
            this._image_hand_als.x = xTemp;
            this._image_hand_als.y = yTemp;
        };
        SMGIView.prototype.showItem = function (pWeCatMoreGameItemOne, aryInfo, nCount, nXAddTemp, nYAddTemp, i) {
            if (pWeCatMoreGameItemOne) {
                pWeCatMoreGameItemOne.setAni(this._bAni_als);
                pWeCatMoreGameItemOne.setData(aryInfo[i]);
            }
            else {
                pWeCatMoreGameItemOne = new SMGItem_Als(aryInfo[i], 375, 430);
                pWeCatMoreGameItemOne.setAni(false);
                var nAddX = Math.floor(i % nCount);
                var nYAdd = Math.floor(i / nCount);
                pWeCatMoreGameItemOne.x = pWeCatMoreGameItemOne.pivotX + nXAddTemp * nAddX;
                pWeCatMoreGameItemOne.y = pWeCatMoreGameItemOne.pivotY + nYAddTemp * nYAdd;
                this.box_wecat.addChild(pWeCatMoreGameItemOne);
            }
        };
        SMGIView.prototype.refreshWCMG_Als = function () {
            var nXAddTemp = 425;
            var nYAddTemp = 450;
            var aryInfo = [];
            var nCount = 2;
            aryInfo = GameCenterManager_Als.getInstance().getRandomIndex_num_alt(4);
            var nLen = 4;
            var nRandomNum = Utils.random(0, nLen - 1);
            var nHandX = 0;
            var nHandY = 0;
            nLen = nLen >= aryInfo.length ? aryInfo.length : nLen;
            for (var i = 0; i < nLen; ++i) {
                var pWeCatMoreGameItemOne = this.box_wecat.getChildAt(i);
                this.showItem(pWeCatMoreGameItemOne, aryInfo, nCount, nXAddTemp, nYAddTemp, i);
                if (nRandomNum == i) {
                    nHandX = pWeCatMoreGameItemOne.x;
                    nHandY = pWeCatMoreGameItemOne.y;
                }
            }
            this.refreshHead(nHandX, nHandY);
            GameCenterManager_Als.getInstance().refreshGameList_Als();
        };
        return SMGIView;
    }(BaseUIScene));

    var GameCenterManager_Als = (function () {
        function GameCenterManager_Als() {
        }
        GameCenterManager_Als.getInstance = function () {
            if (!GameCenterManager_Als.ins)
                GameCenterManager_Als.ins = new GameCenterManager_Als();
            return GameCenterManager_Als.ins;
        };
        GameCenterManager_Als.prototype.oppenAddSpView = function () {
            var _this = this;
            TipsManager.getInstance().showDefaultTips("体力不足");
            ViewChangeManager_Als.getInstance().showBufferLoadingView();
            ResUtil.getIntance().loadGroups(["adsp"], function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    ViewManager.getInstance().showView(AddPsView_Als);
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                    return [2];
                });
            }); });
        };
        GameCenterManager_Als.prototype.GameCenterGotoGame_als = function (stData, fail) {
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(stData.ad_id);
            }
            var data = {
                appId: stData.ad_appid,
                path: stData.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    if (BaseConst.infos.gameInfo.isDY) {
                        PlatformDY.toGame(stData.ad_id);
                    }
                },
                fail: fail
            };
            platform.navigateToMiniProgram(data);
        };
        GameCenterManager_Als.prototype.getRandomIndex_num_alt = function (nNum) {
            if (Als_GameData.getInstance().weCatMiniIconsInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, Als_GameData.getInstance().weCatMiniIconsInfo.length - 1);
            var nCount = nNum;
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= Als_GameData.getInstance().weCatMiniIconsInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        GameCenterManager_Als.prototype.refreshGameList_Als = function () {
            if (BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame()) {
                PlatformDY.refreshGameList();
            }
        };
        GameCenterManager_Als.prototype.showMoreGameinView_als = function (bAni) {
            if (bAni === void 0) { bAni = true; }
            if (!this.pSMGInView) {
                this.pSMGInView = new SMGIView();
            }
            else {
                this.pSMGInView.refreshWCMG_Als();
            }
            this.pSMGInView.ani = bAni;
            return this.pSMGInView;
        };
        GameCenterManager_Als.prototype.platformLogin_Als = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res_1, self_1, enter;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame())) return [3, 5];
                            console.log("开始登录");
                            self_1 = this;
                            enter = function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!BaseConst.infos.gameInfo.isDY) return [3, 2];
                                            return [4, self_1.loginWeCatDy(res_1)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2];
                                    }
                                });
                            }); };
                            if (!(BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame())) return [3, 2];
                            return [4, platform.DYlogin()];
                        case 1:
                            res_1 = _a.sent();
                            return [3, 4];
                        case 2: return [4, platform.login()];
                        case 3:
                            res_1 = _a.sent();
                            res_1 = JSON.parse(res_1);
                            _a.label = 4;
                        case 4:
                            enter();
                            return [3, 6];
                        case 5:
                            Als_GameData.getInstance().userInfo.openId = Als_GameData.getInstance().userInfo.sessionKey = DeviceUtil.getDeviceNo();
                            PlayerDataManager_Als.getInstance().GetData();
                            _a.label = 6;
                        case 6: return [2];
                    }
                });
            });
        };
        GameCenterManager_Als.prototype.loginWeCatDy = function (stRes) {
            return __awaiter(this, void 0, void 0, function () {
                var res, isAuthorize, userinfo, obj, scene;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            res = stRes;
                            return [4, platform.checkIsAuthorize()];
                        case 1:
                            isAuthorize = _a.sent();
                            userinfo = null;
                            if (!isAuthorize) return [3, 3];
                            return [4, MiniManeger_Als.instance.initUserTemp()];
                        case 2:
                            userinfo = _a.sent();
                            _a.label = 3;
                        case 3:
                            if (userinfo == null) {
                                userinfo = { nickName: '', avatarUrl: '', gender: '' };
                            }
                            obj = Als_GameData.getInstance().enterGameInfo;
                            scene = obj.query.scene == undefined ? null : obj.query.scene;
                            PlatformDY.getOpenidAndAuthorzia({
                                code: res, nickName: userinfo.nickName, avatarUrl: userinfo.avatarUrl, gender: userinfo.gender, scene: decodeURIComponent(scene)
                            }).then(function (dyUser) {
                                Als_GameData.getInstance().userInfo.openId = dyUser.openid;
                                Als_GameData.getInstance().strOpenIDWx = dyUser.openid;
                                console.log("GameData.getInstance().strOpenIDWx = ", Als_GameData.getInstance().strOpenIDWx);
                                var strOpenIdOther = Als_GameData.getInstance().enterGameInfo.query["openid"];
                                console.log("strOpenIdOther = ", strOpenIdOther);
                                if (strOpenIdOther && strOpenIdOther != "") {
                                    InviteManager_Als.getInstance().judgeInvite();
                                    console.log("createUserInfoButton 用户信息 : ", Als_GameData.getInstance().userInfo);
                                }
                                if (BaseConst.infos.gameInfo.isDY) {
                                    PlatformDY.refreshGameList();
                                }
                                PlayerDataManager_Als.getInstance().GetData();
                            });
                            return [2];
                    }
                });
            });
        };
        GameCenterManager_Als.prototype.loadRes_Als = function () {
            return __awaiter(this, void 0, void 0, function () {
                var loadresUrl, group, alsInstance;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.platformLogin_Als()];
                        case 1:
                            _a.sent();
                            console.log("loadRes---");
                            loadresUrl = "";
                            return [4, ResUtil.getIntance().loadThms(loadresUrl + "resource/default.thm.json" + Als_GameData.getInstance().randomTime)];
                        case 2:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig(loadresUrl + "resource/default.res.json" + Als_GameData.getInstance().randomTime)];
                        case 3:
                            _a.sent();
                            this.loadLayOutInfo();
                            group = ["panel", "common", "gamehome"];
                            alsInstance = PlayerDataManager_Als.getInstance();
                            group.push(alsInstance.getCurLevelToChallenge().toString());
                            ResUtil.getIntance().loadGroups(group, function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, ConfigManager_Als.getInstance().initConfigInfo()];
                                        case 1:
                                            _a.sent();
                                            this.enterGame();
                                            this.onPlayMusic_Als();
                                            ResUtil.getIntance().loadGroups(["lottery", 'success', 'game', 'hit', 'moregame']);
                                            return [2];
                                    }
                                });
                            }); }, function (cur, total) {
                                _this.pLoadingView.progress(cur, total);
                            });
                            return [2];
                    }
                });
            });
        };
        GameCenterManager_Als.prototype.enterGame = function () {
            var alsInstance = PlayerDataManager_Als.getInstance();
            alsInstance.initGoods();
            alsInstance.refreshOffLinePS();
            ViewChangeManager_Als.getInstance().rigestBufferLoadingView();
            if (!alsInstance.isNewPlayer) {
                GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
            }
            else {
                GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_ChooseLevel;
                alsInstance.SaveData();
            }
            alsInstance.setCurLevel(alsInstance.getLevelToChangeMaxLevel() - 1);
            LevelManager_Als.getInstance().createLevelScene(alsInstance.getLevelToChangeMaxLevel());
            ViewChangeManager_Als.getInstance().showCommonView();
            ViewChangeManager_Als.getInstance().showImageExit();
            ViewChangeManager_Als.bGameOpen = true;
        };
        GameCenterManager_Als.prototype.onPlayMusic_Als = function () {
            Als_SoundManager.getInstance().bgm = 'bg';
            Laya.stage.off(Laya.Event.CLICK, this, this.onPlayMusic_Als);
        };
        GameCenterManager_Als.prototype.loadLayOutInfo = function () {
        };
        GameCenterManager_Als.prototype.initMoreGame = function (res, resUrl) {
            for (var i = 0, len = res.iconList.length; i < len; i++) {
                res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/tt/moregame/" + res.iconList[i].ad_img;
            }
            Als_GameData.getInstance().weCatMiniIconsInfo = res.iconList;
        };
        GameCenterManager_Als.prototype.gotoGame = function (stGameIndex, stScene) {
            if (stScene === void 0) { stScene = null; }
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(stGameIndex.ad_id);
            }
            var data = {
                appId: stGameIndex.ad_appid,
                path: stGameIndex.url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", stGameIndex.ad_id);
                        PlatformDY.toGame(stGameIndex.ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    if (stScene) {
                        ViewManager.getInstance().showView(stScene);
                    }
                }
            };
            platform.navigateToMiniProgram(data);
        };
        GameCenterManager_Als.prototype.getRandomIndex = function (nMax) {
            if (Als_GameData.getInstance().weCatMiniIconsInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, Als_GameData.getInstance().weCatMiniIconsInfo.length - 1);
            var nCount = Als_GameData.getInstance().weCatMiniIconsInfo.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = Als_GameData.getInstance().weCatMiniIconsInfo.length + nCount;
            if (nCount <= nMax) {
                nCount = nMax;
            }
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= Als_GameData.getInstance().weCatMiniIconsInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        GameCenterManager_Als.prototype.toGameRandom = function () {
            if (Als_GameData.getInstance().weCatMiniIconsInfo.length <= 0) {
                return;
            }
            var nRandomIndxe = Utils.random(0, Als_GameData.getInstance().weCatMiniIconsInfo.length - 1);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].ad_id);
            }
            var data = {
                appId: Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].ad_appid,
                path: Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", nRandomIndxe);
                        PlatformDY.toGame(Als_GameData.getInstance().weCatMiniIconsInfo[nRandomIndxe].ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    ViewManager.getInstance().showView(MoreGameOperRequestTemp_Als);
                }
            };
            platform.navigateToMiniProgram(data);
        };
        GameCenterManager_Als.prototype.toGameRandomNotOpenView = function () {
            var aryCatMiniIconsInfoTemp = Als_GameData.getInstance().weCatMiniIconsInfo;
            if (aryCatMiniIconsInfoTemp.length <= 0) {
                return;
            }
            var nRandomIndxe = Utils.random(0, aryCatMiniIconsInfoTemp.length - 1);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(aryCatMiniIconsInfoTemp[nRandomIndxe].ad_id);
            }
            var idata = aryCatMiniIconsInfoTemp[nRandomIndxe];
            var data = {
                appId: idata.ad_appid,
                path: idata.url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", nRandomIndxe);
                        PlatformDY.toGame(idata.ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                }
            };
            platform.navigateToMiniProgram(data);
        };
        return GameCenterManager_Als;
    }());

    var MoreGameItemView_Als = (function (_super) {
        __extends(MoreGameItemView_Als, _super);
        function MoreGameItemView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameItemView";
            _this.index = 0;
            _this.skin = "game/uiView/MoreGameItemView.json";
            _this.width = 1080;
            _this.height = 200;
            return _this;
        }
        MoreGameItemView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MoreGameItemView_Als.prototype.adaptationStage = function () {
        };
        MoreGameItemView_Als.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.init();
                this.addEvent();
            }
        };
        MoreGameItemView_Als.prototype.setData = function (data) {
            this.data = data;
        };
        MoreGameItemView_Als.prototype.refreshData = function (data) {
            this.setData(data);
            this.init();
        };
        MoreGameItemView_Als.prototype.onGogame = function () {
            GameCenterManager_Als.getInstance().gotoGame(this.data, MoreGameOperRequestTemp_Als);
        };
        MoreGameItemView_Als.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onGogame);
        };
        MoreGameItemView_Als.prototype.init = function () {
            this.titleLabel.text = this.data.name;
            this.headiconImg.skin = this.data.ad_img;
            this.desLabel.text = Math.ceil(Math.random() * 100000) + '人正在玩';
            this.baokuanImg.visible = Math.random() > 0.5 ? true : false;
        };
        MoreGameItemView_Als.prototype.removeEvent = function () {
            this.off(Laya.Event.MOUSE_DOWN, this, this.onGogame);
        };
        MoreGameItemView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return MoreGameItemView_Als;
    }(BaseSceneUISkin));

    var PopBaseScene = (function (_super) {
        __extends(PopBaseScene, _super);
        function PopBaseScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'PopBaseScene';
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this.eventPool = [];
            return _this;
        }
        PopBaseScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        PopBaseScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                this.initMiniGame();
            }
            this.off(Laya.Event.ADDED, this, this.onAddStage);
        };
        PopBaseScene.prototype.initMiniGame = function () {
            this.showBanner({ className_key: this.className_key });
        };
        PopBaseScene.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initMiniGame();
                this.initView();
                this.addEvent();
                this.showEnterAnimation();
            }
        };
        PopBaseScene.prototype.initView = function () { };
        PopBaseScene.prototype.addEvent = function () { };
        PopBaseScene.prototype.removeSelf = function () {
            var node = _super.prototype.removeSelf.call(this);
            return node;
        };
        PopBaseScene.prototype.registerEvent = function (target, type, callback, callbackobj) {
            target.on(type, callbackobj, callback);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        PopBaseScene.prototype.clearEvent = function () {
            var eventPool = this.eventPool;
            if (eventPool.length > 0) {
                for (var i = 0; i < this.eventPool.length; i++) {
                    var target = eventPool[i].target;
                    var type = eventPool[i].type;
                    var callback = eventPool[i].callback;
                    var callbackobj = eventPool[i].callbackobj;
                    if (target) {
                        target.off(type, callbackobj, callback);
                    }
                }
            }
            eventPool = [];
        };
        PopBaseScene.prototype.onDisable = function () {
            this.removeEvent();
        };
        PopBaseScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.clearEvent();
        };
        PopBaseScene.prototype.removeEvent = function () {
            this.clearEvent();
        };
        PopBaseScene.prototype.showBanner = function (data) {
            MiniManeger_Als.instance.showBannerAd();
        };
        PopBaseScene.prototype.destoryBanner = function () {
            MiniManeger_Als.instance.hideBanner();
        };
        PopBaseScene.prototype.hideBanner = function () {
            MiniManeger_Als.instance.hideBanner();
        };
        return PopBaseScene;
    }(BaseSceneUISkinPopView));

    var SuccessfulEntryThreeView_Als = (function (_super) {
        __extends(SuccessfulEntryThreeView_Als, _super);
        function SuccessfulEntryThreeView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryThreeView_Als";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.nBtNextLevel = 320;
            _this.nBtNextLevelSp = 100;
            _this.nCountGoToLevel = 0;
            _this._isShowBox = false;
            _this.nGlodAdd = 50;
            _this.nGlodRadio = 4;
            _this.bIsRunning = false;
            _this.bRecvAward = false;
            _this.bOpneBox2 = false;
            _this.image_hand = null;
            _this.skin = 'game/uiView/SuccessfulEntryThreeView.json';
            return _this;
        }
        SuccessfulEntryThreeView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.grp_center.width = this.width;
            this.grp_center.height = this.height;
        };
        SuccessfulEntryThreeView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.bIsRunning = false;
            Laya.Tween.clearAll(this.imageBtShare);
            Laya.timer.clearAll(this);
            if (this.aniReal) {
                this.aniReal.stop();
                this.aniReal.removeSelf();
            }
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
        };
        SuccessfulEntryThreeView_Als.prototype.initDouble = function () {
            if (BaseConst.infos.gameInfo.openPsAward && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.spDouble.visible = false;
            }
            else {
                this.spDouble.visible = true;
            }
        };
        SuccessfulEntryThreeView_Als.prototype.initMiniGame = function () {
            this.spDouble.visible = true;
        };
        SuccessfulEntryThreeView_Als.prototype.initGlodRadio = function () {
            var pGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(13);
            if (pGameConfig) {
                this.nGlodRadio = parseInt(pGameConfig.strValue);
                this.lableDesc.text = pGameConfig.strDesc;
            }
            BitmapLabelUtils.setLabel(this.spCost, this.nGlodRadio.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        };
        SuccessfulEntryThreeView_Als.prototype.initGlod = function () {
            var pGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(12);
            if (pGameConfig) {
                this.nGlodAdd = parseInt(pGameConfig.strValue);
            }
        };
        SuccessfulEntryThreeView_Als.prototype.opReGoNeLvAni_Als = function () {
            var _this = this;
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                if (BaseConst.infos.gameInfo.openPsAward == 1) {
                    this.box_nextLevel.bottom = this.nBtNextLevelSp;
                    MiniManeger_Als.instance.bFlagSpecialView = false;
                    MiniManeger_Als.instance.hideBanner();
                    Laya.timer.once(1000, this, function () {
                        MiniManeger_Als.instance.bFlagSpecialView = true;
                        MiniManeger_Als.instance.showBannerAd();
                        Laya.Tween.to(_this.box_nextLevel, { bottom: _this.nBtNextLevel }, 500, null);
                    });
                    return;
                }
                else {
                    this.box_nextLevel.bottom = this.nBtNextLevel;
                }
            }
            MiniManeger_Als.instance.showBannerAd();
        };
        SuccessfulEntryThreeView_Als.prototype.initTotal = function () {
            var bAddMore = this.nGlodAdd * this.nGlodRadio;
            BitmapLabelUtils.setLabel(this.spCountAddMore, bAddMore.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            if (!this.spDouble.visible) {
                var nReal = this.nGlodAdd * this.nGlodRadio;
                BitmapLabelUtils.setLabel(this.spGlodAdd, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.spGlodAdd, this.nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
        };
        SuccessfulEntryThreeView_Als.prototype.initSubPs = function () {
            var nCost = 1;
            var pGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (pGameConfig) {
                nCost = parseInt(pGameConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.spCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        };
        SuccessfulEntryThreeView_Als.prototype.onMousClck_Als = function (evt) {
            Als_SoundManager.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.btLable:
                    this.succEnterSanNeLv_Als();
                    break;
                case this.imageBtToHome:
                    this.reGoToHo_Als();
                    break;
                case this.imageBtShare:
                    this.sucShG_Als();
                    break;
                case this.imageBtRestart:
                    this.sucsReSt_Als();
                    break;
                case this.imageRecv:
                    this.sucRecAw_Als();
                    break;
                case this.btDouble:
                    this.onDouGld_Als();
                    break;
                case this.box_nextLevel:
                    this.recvAwAfWv_Als();
                    break;
            }
        };
        SuccessfulEntryThreeView_Als.prototype.addEvent = function () {
            this.btLable.on(Laya.Event.CLICK, this, this.succEnterSanNeLv_Als);
            this.imageBtToHome.on(Laya.Event.CLICK, this, this.reGoToHo_Als);
            this.imageBtShare.on(Laya.Event.CLICK, this, this.sucShG_Als);
            this.imageBtRestart.on(Laya.Event.CLICK, this, this.sucsReSt_Als);
            this.imageRecv.on(Laya.Event.CLICK, this, this.sucRecAw_Als);
            this.btDouble.on(Laya.Event.CLICK, this, this.onDouGld_Als);
            this.box_nextLevel.on(Laya.Event.CLICK, this, this.recvAwAfWv_Als);
            this.registerEvent(this.btLable, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtToHome, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtRestart, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageRecv, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.btDouble, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.box_nextLevel, Laya.Event.CLICK, this.onMousClck_Als, this);
        };
        SuccessfulEntryThreeView_Als.prototype.weCatGotToNextLevel = function () {
            this.succEnterSanNeLv_Als();
        };
        SuccessfulEntryThreeView_Als.prototype.sucShG_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            MiniManeger_Als.instance.bFlagDouYin = false;
            if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.isDY) {
                MiniManeger_Als.instance.shareAppMessage({
                    sucFun: function () {
                        ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                    },
                    failFun: function () {
                        ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                    }
                });
            }
            else {
                MiniManeger_Als.instance.shareAppMessage();
            }
        };
        SuccessfulEntryThreeView_Als.prototype.onDouGld_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            this.spDouble.visible = !this.spDouble.visible;
            if (!this.spDouble.visible) {
                var nReal = this.nGlodAdd * this.nGlodRadio;
                BitmapLabelUtils.setLabel(this.spGlodAdd, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.spGlodAdd, this.nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
        };
        SuccessfulEntryThreeView_Als.prototype.succEnterSanNeLv_Als = function () {
            var nSpCost = 1;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (stGameConfig) {
                nSpCost = parseInt(stGameConfig.strValue);
            }
            var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            if (!b) {
                GameCenterManager_Als.getInstance().oppenAddSpView();
                return;
            }
            else {
                this.removeEvent();
                if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                    if (LevelManager_Als.getInstance().nCurLevel == 1) {
                        this.curLevelOne();
                    }
                    else if (LevelManager_Als.getInstance().nCurLevel >= 2) {
                        this.bigOne();
                    }
                }
                else {
                    PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                    ViewChangeManager_Als.getInstance().goToNextLevel();
                    MiniManeger_Als.instance.bFlagSpecialView = true;
                    this.removeSelf();
                }
            }
        };
        SuccessfulEntryThreeView_Als.prototype.sucsReSt_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            var nSpCost = 1;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (stGameConfig) {
                nSpCost = parseInt(stGameConfig.strValue);
            }
            var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            if (!b) {
                GameCenterManager_Als.getInstance().oppenAddSpView();
                return;
            }
            PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            ViewChangeManager_Als.getInstance().restartGame(true);
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeView_Als.prototype.sucRecAw_Als = function () {
            var _this = this;
            var self = this;
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (DeviceUtil.isQQMiniGame() && !self._isShowBox && Math.random() < BaseConst.infos.gameInfo.succShowBox) {
                MiniManeger_Als.instance.showBoxAd(function () {
                    self._isShowBox = true;
                });
                return;
            }
            if (this.bRecvAward) {
                this.succEnterSanNeLv_Als();
                return;
            }
            if (!this.spDouble.visible) {
                MiniManeger_Als.instance.playViderAd({
                    successFun: function () {
                        _this.recvAwAfWv_Als();
                    }
                });
            }
            else {
                this.nGlodRadio = 1;
                this.recvAwAfWv_Als();
            }
        };
        SuccessfulEntryThreeView_Als.prototype.recvAwAfWv_Als = function () {
            this.bRecvAward = true;
            this.fgs_Als();
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                this.nGlodRadio = 1;
            }
            var nGlodAddTemp = this.nGlodAdd * this.nGlodRadio;
            PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, nGlodAddTemp);
            this.succEnterSanNeLv_Als();
        };
        SuccessfulEntryThreeView_Als.prototype.curLevelOne = function () {
            var _this = this;
            if (!this.bRecvAward) {
                Laya.timer.once(1000, this, function () {
                    MoreGameOperRequest_Als.bGotoNextGame = true;
                    ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                    MiniManeger_Als.instance.bFlagSpecialView = true;
                    _this.removeSelf();
                });
            }
            else {
                MoreGameOperRequest_Als.bGotoNextGame = true;
                ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                MiniManeger_Als.instance.bFlagSpecialView = true;
                this.removeSelf();
            }
        };
        SuccessfulEntryThreeView_Als.prototype.bigOne = function () {
            MoreGameOperRequest_Als.bGotoNextGame = true;
            MoreGameOperRequest_Als.bEnterHotBox = true;
            ViewManager.getInstance().showView(MoreGameOperRequest_Als);
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeView_Als.prototype.goToHome = function () {
            ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
            PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
            LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeView_Als.prototype.reGoToHo_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                if (PlayerDataManager_Als.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                    BaseConst.infos.gameInfo.glodegg == 0) {
                    MoreGameOperRequest_Als.toHome = true;
                    ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                    MiniManeger_Als.instance.bFlagSpecialView = true;
                    this.removeSelf();
                }
                else {
                    this.goToHome();
                }
                return;
            }
            ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
            PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
            LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeView_Als.prototype.startSuccessImageBtShareAni = function () {
            if (!this.bIsRunning) {
                return;
            }
            Laya.timer.clearAll(this.imageRecv);
            AnimationManager_Als.instance.zoomTweena(this.imageRecv, this.imageRecv);
        };
        SuccessfulEntryThreeView_Als.prototype.csk_als = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            AnimationManager_Als.instance.showSkeletonAnimation(url, function (boomAnimation) {
                                _this.aniReal = boomAnimation;
                                _this.aniReal.player.playbackRate = 1;
                                _this.aniReal.autoSize = true;
                                _this.aniReal.scale(1, 1);
                                _this.aniReal.play(0, false);
                                _this.aniReal.x = _this.grp_center.width / 2;
                                _this.aniReal.y = _this.grp_center.height / 2;
                                _this.grp_center.addChild(_this.aniReal);
                                resolve(boomAnimation);
                            }, 0);
                        })];
                });
            });
        };
        SuccessfulEntryThreeView_Als.prototype.fgs_Als = function () {
            var stPoint = new Laya.Point();
            stPoint.x = this.imageGoodsTypeUp.x;
            stPoint.y = this.imageGoodsTypeUp.y;
            var stBoxParent = this.imageGoodsTypeUp.parent;
            stPoint = stBoxParent.localToGlobal(stPoint);
            AnimationManager_Als.instance.flayGlod(stPoint.x, stPoint.y, 341, 105);
        };
        SuccessfulEntryThreeView_Als.prototype.proceMg_Als = function () {
            if (DeviceUtil.isTTMiniGame()) ;
            else if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                if (BaseConst.infos.gameInfo.openalllevel == 1) {
                    this.box_wecat.removeChildren();
                    this.box_wecat.addChild(GameCenterManager_Als.getInstance().showMoreGameinView_als(true));
                }
            }
        };
        SuccessfulEntryThreeView_Als.prototype.initPlV_Als = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.imageShareGameName.skin = "resource/assets/img/ui/success/failure_word_2.png";
                this.imageShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
                this.shareGlodCount.visible = false;
                this.ttGoodsType.visible = false;
                this.ttSpecial.visible = false;
                this.imageShareGameName.y = 38;
            }
            else {
                this.imageShareGameName.skin = "resource/assets/img/ui/success/failure_word_2.png";
                this.imageShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
                this.shareGlodCount.visible = false;
                this.ttGoodsType.visible = false;
                this.ttSpecial.visible = false;
                this.imageShareGameName.y = 38;
            }
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                this.imageWeCatMoreGame.visible = false;
                this.btNextLevel.visible = false;
                this.imageRecv.visible = false;
                this.imageBtShare.visible = false;
                this.box_nextLevel.visible = true;
                this.spDouble.visible = true;
                this.box_wecat.visible = true;
                this.box_lable.visible = false;
            }
        };
        SuccessfulEntryThreeView_Als.prototype.initView = function () {
            ViewChangeManager_Als.getInstance().CommonView.abte_alt();
            this._isShowBox = false;
            MiniManeger_Als.instance.showInterstitialAd();
            this.opReGoNeLvAni_Als();
            this.nCountGoToLevel = 0;
            this.bOpneBox2 = false;
            this.proceMg_Als();
            MiniManeger_Als.instance.onShareVideoSuccess = false;
            MiniManeger_Als.instance.StopVideo();
            this.initPlV_Als();
            Als_SoundManager.getInstance().playEffect("win", 1);
            this.bRecvAward = false;
            if (!this.aniReal) {
                this.csk_als("resource/assets/img/ani/celebrate/celebrate.sk");
            }
            else {
                this.aniReal.play(0, false);
                this.grp_center.addChild(this.aniReal);
            }
            this.initDouble();
            this.bIsRunning = true;
            this.initGlod();
            this.initGlodRadio();
            this.initSubPs();
            this.initTotal();
            this.startSuccessImageBtShareAni();
        };
        return SuccessfulEntryThreeView_Als;
    }(PopBaseScene));

    var MiniEventConst_Als = (function () {
        function MiniEventConst_Als() {
        }
        MiniEventConst_Als.HOME_SHARE = "h_sh";
        MiniEventConst_Als.HOME_LEVEL = "h_l";
        MiniEventConst_Als.HOME_SIGIN = "h_s";
        MiniEventConst_Als.HOME_INVATE = "h_i";
        MiniEventConst_Als.GAME_UP = "g_u";
        MiniEventConst_Als.GAME_TIP = "g_t";
        MiniEventConst_Als.GAME_PLAY_LEVEL = "g_p_l";
        MiniEventConst_Als.GAMEOVER_SHARE = "g_s";
        MiniEventConst_Als.GAMEOVER_GET = "g_g";
        MiniEventConst_Als.GAMEOVER_AGIN = "g_a";
        return MiniEventConst_Als;
    }());

    var WeCatMoreGameItemOne713Big_Als = (function (_super) {
        __extends(WeCatMoreGameItemOne713Big_Als, _super);
        function WeCatMoreGameItemOne713Big_Als(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemOne713Big";
            _this.nIndex = data;
            _this.skin = "game/uiView/WeCatMoreGameItemOne713Big.json";
            _this.width = 465;
            _this.height = 537;
            return _this;
        }
        WeCatMoreGameItemOne713Big_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        WeCatMoreGameItemOne713Big_Als.prototype.onRemoved = function () {
            this.removeEvent();
        };
        WeCatMoreGameItemOne713Big_Als.prototype.initView = function () {
            var weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo;
            if (this.nIndex < 0 || this.nIndex >= weCatMiniIconsInfo.length) {
                this.nIndex = weCatMiniIconsInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            this.lableGameName.text = weCatMiniIconsInfo[this.nIndex].name;
            this.imageIcon.skin = weCatMiniIconsInfo[this.nIndex].ad_img;
            this.stGameIndex = weCatMiniIconsInfo[this.nIndex];
        };
        WeCatMoreGameItemOne713Big_Als.prototype.setData = function (data) {
            this.nIndex = data;
            this.initView();
        };
        WeCatMoreGameItemOne713Big_Als.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        WeCatMoreGameItemOne713Big_Als.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGame);
            }
        };
        WeCatMoreGameItemOne713Big_Als.prototype.gotoGame = function () {
            GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex, MoreGameOperRequestTemp_Als);
        };
        return WeCatMoreGameItemOne713Big_Als;
    }(BaseSceneUISkin));

    var WeCatMoreGameItemTwo_Als = (function (_super) {
        __extends(WeCatMoreGameItemTwo_Als, _super);
        function WeCatMoreGameItemTwo_Als(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemTwo";
            _this.nIndex = data;
            _this.skin = "game/uiView/WeCatMoreGameItemTwo.json";
            return _this;
        }
        WeCatMoreGameItemTwo_Als.prototype.adaptationStage = function () {
            this.width = 210;
            this.height = 258;
        };
        WeCatMoreGameItemTwo_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        WeCatMoreGameItemTwo_Als.prototype.onRemoved = function () {
            this.removeEvent();
        };
        WeCatMoreGameItemTwo_Als.prototype.initView = function () {
            var weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo;
            if (this.nIndex < 0 || this.nIndex >= weCatMiniIconsInfo.length) {
                this.nIndex = Als_GameData.getInstance().weCatMiniIconsInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            var stDataTemp = weCatMiniIconsInfo[this.nIndex];
            this.lableGameName.text = weCatMiniIconsInfo[this.nIndex].name;
            this.imageIcon.skin = weCatMiniIconsInfo[this.nIndex].ad_img;
            this.stGameIndex = weCatMiniIconsInfo[this.nIndex];
        };
        WeCatMoreGameItemTwo_Als.prototype.setData = function (data) {
            this.nIndex = data;
            this.initView();
        };
        WeCatMoreGameItemTwo_Als.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        WeCatMoreGameItemTwo_Als.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGame);
            }
        };
        WeCatMoreGameItemTwo_Als.prototype.gotoGame = function () {
            GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex, MoreGameOperRequest_Als);
        };
        return WeCatMoreGameItemTwo_Als;
    }(BaseSceneUISkin));

    var SuccessfulEntryOneView_Als = (function (_super) {
        __extends(SuccessfulEntryOneView_Als, _super);
        function SuccessfulEntryOneView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryOneView_Als";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._nCurentCountSecond = 0;
            _this._nTimeDown = 5;
            _this._nCountMax = 5;
            _this._nPsAdd = 1;
            _this._nAddPerOne = 0;
            _this._nCurCount = 0;
            _this._bTimeOver = false;
            _this._bAniRunning = false;
            _this._bFirst = true;
            _this._nTimeOverTemp = 0;
            _this._nLastClickTime = 0;
            _this.skin = "game/uiView/SuccessfulEntryOneView.json";
            return _this;
        }
        SuccessfulEntryOneView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        SuccessfulEntryOneView_Als.prototype.initBaseData = function () {
            this._nTimeDown = 5;
            this._nCountMax = 5;
            this._nPsAdd = 1;
            this._nAddPerOne = 0;
            this._nCurCount = 0;
            this._bTimeOver = false;
            this._bAniRunning = true;
            this._bFirst = true;
            this._nCurentCountSecond = 0;
        };
        SuccessfulEntryOneView_Als.prototype.initAfter = function () {
            MiniManeger_Als.instance.showInterstitialAd();
            ViewChangeManager_Als.getInstance().CommonView.visible = false;
            this.imageBt.bottom = 0;
            this.moveBtnTween = null;
            MiniManeger_Als.instance.bFlagSpecialView = false;
            MiniManeger_Als.instance.hideBanner();
        };
        SuccessfulEntryOneView_Als.prototype.sign_als_check_c = function () {
            if (this._nCurCount >= this._nCountMax) {
                Laya.timer.clear(this, this.timeDownView);
                this.procLgOv_Als();
            }
            if (this._nCurCount >= 7) {
                MiniManeger_Als.instance.bFlagSpecialView = true;
                MiniManeger_Als.instance.showBannerAd();
                if (!this.moveBtnTween) {
                    this.moveBtnTween = Laya.Tween.to(this.imageBt, { bottom: 200 }, 1000);
                }
            }
        };
        SuccessfulEntryOneView_Als.prototype.initView = function () {
            this.initAfter();
            Als_SoundManager.getInstance().playEffect("win", 1);
            this.initBaseData();
            this.initUpTimeDown();
            this.initClickCountMax();
            this.initPsCount();
            this.initSubTime();
            this._nAddPerOne = Math.floor(870 / this._nCountMax);
            this.imageParValue.width = 0;
            this.ope_nTimeDown();
            this.openHA_Als();
        };
        SuccessfulEntryOneView_Als.prototype.addEvent = function () {
            this.registerEvent(this.imageBt, Laya.Event.CLICK, this.sign_click_recv_aw_als, this);
        };
        SuccessfulEntryOneView_Als.prototype.ope_nTimeDown = function () {
            BitmapLabelUtils.setLabel(this.spTimeDown, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            Laya.timer.loop(1000, this, this.timeDownView);
            Laya.timer.loop(this._nTimeOverTemp, this, this.als_sing_sun_count);
        };
        SuccessfulEntryOneView_Als.prototype.sign_click_recv_aw_als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (this._bTimeOver) {
                return;
            }
            this._nCurentCountSecond += 1;
            this._nCurCount += 1;
            var nWithCur = this._nCurCount * this._nAddPerOne;
            this.imageParValue.width = nWithCur;
            this.sign_als_check_c();
            this._nLastClickTime = GameLogicProcessingManager_Als.GetCurTime();
        };
        SuccessfulEntryOneView_Als.prototype.timeDownView = function () {
            this._nCurentCountSecond = 0;
            this._nTimeDown -= 1;
            var nTemp = this._nTimeDown;
            nTemp = nTemp < 0 ? 0 : nTemp;
            BitmapLabelUtils.setLabel(this.spTimeDown, nTemp.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            if (this._nTimeDown < 0) {
                this._bTimeOver = true;
                this.procLgOv_Als();
            }
        };
        SuccessfulEntryOneView_Als.prototype.als_sing_sun_count = function () {
            this._nCurCount -= 1;
            this._nCurCount = this._nCurCount < 0 ? 0 : this._nCurCount;
            var nWithCur = this._nCurCount * this._nAddPerOne;
            this.imageParValue.width = nWithCur;
        };
        SuccessfulEntryOneView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this._bFirst = false;
            this._bAniRunning = false;
            Laya.Tween.clearAll(this.imageHand);
            Laya.timer.clearAll(this);
            MiniManeger_Als.instance.bFlagSpecialView = true;
        };
        SuccessfulEntryOneView_Als.prototype.gotoView = function () {
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                if (PlayerDataManager_Als.bGlobEnterGame) {
                    ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
                }
                else {
                    if (PlayerDataManager_Als.getInstance().nGotoLevel != 0) {
                        ViewChangeManager_Als.getInstance().gotoLevel(PlayerDataManager_Als.getInstance().nGotoLevel);
                    }
                    else if (PlayerDataManager_Als.getInstance().bEnterGameFromGameHome) {
                        ViewChangeManager_Als.getInstance().CurLevelBase.startGame();
                    }
                    else {
                        ViewChangeManager_Als.getInstance().goToNextLevel();
                    }
                }
            }
            else {
                ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
            }
        };
        SuccessfulEntryOneView_Als.prototype.procLogicOverDown = function () {
            this.removeSelf();
            MiniManeger_Als.instance.bFlagSpecialView = true;
            PlayerDataManager_Als.getInstance().bEnterGameFromGameHome = false;
            PlayerDataManager_Als.getInstance().nGotoLevel = 0;
            ViewChangeManager_Als.getInstance().CommonView.visible = true;
        };
        SuccessfulEntryOneView_Als.prototype.openHA_Als = function () {
            var _this = this;
            if (!this._bAniRunning) {
                return;
            }
            var yTemp = this.imageHand.y;
            Laya.Tween.clearAll(this.imageHand);
            Laya.Tween.to(this.imageHand, { y: yTemp - 25 }, 300, null, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this.imageHand, { y: yTemp }, 300, null, Laya.Handler.create(_this, function (args) {
                    Laya.timer.once(0, _this, _this.openHA_Als);
                }));
            }));
        };
        SuccessfulEntryOneView_Als.prototype.procLgOv_Als = function () {
            Laya.timer.clear(this, this.timeDownView);
            if (this._nCurCount >= this._nCountMax) {
                PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Sp, this._nPsAdd);
                TipsManager.getInstance().showDefaultTips("体力+" + this._nPsAdd.toString());
            }
            if (this._bTimeOver) {
                TipsManager.getInstance().showDefaultTips("领取失败");
            }
            this.gotoView();
            this.procLogicOverDown();
        };
        SuccessfulEntryOneView_Als.prototype.initUpTimeDown = function () {
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(9);
            if (stGameConfig) {
                this._nTimeDown = parseInt(stGameConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.spTimeDown, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
        };
        SuccessfulEntryOneView_Als.prototype.initClickCountMax = function () {
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(10);
            if (stGameConfig) {
                this._nCountMax = parseInt(stGameConfig.strValue);
            }
        };
        SuccessfulEntryOneView_Als.prototype.initPsCount = function () {
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(11);
            if (stGameConfig) {
                this._nPsAdd = parseInt(stGameConfig.strValue);
            }
        };
        SuccessfulEntryOneView_Als.prototype.initSubTime = function () {
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(14);
            if (stGameConfig) {
                this._nTimeOverTemp = parseInt(stGameConfig.strValue);
            }
        };
        return SuccessfulEntryOneView_Als;
    }(PopBaseScene));

    var WeCatMoreGameView_Als = (function (_super) {
        __extends(WeCatMoreGameView_Als, _super);
        function WeCatMoreGameView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameView";
            _this.nStartY = 0;
            _this.bWeCatShow = false;
            _this.skin = "game/uiView/WeCatMoreGameView.json";
            return _this;
        }
        WeCatMoreGameView_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
            this.viewAniIn();
        };
        WeCatMoreGameView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        WeCatMoreGameView_Als.prototype.initPanel = function () {
        };
        WeCatMoreGameView_Als.prototype.initView = function () {
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(12);
            var func = function (pannel) {
                for (var i = 0; i < aryInfo.length; ++i) {
                    var pWeCatMoreGameItemOne = pannel.getChildAt(i);
                    if (pWeCatMoreGameItemOne) {
                        pWeCatMoreGameItemOne.setData(aryInfo[i]);
                    }
                    else {
                        pWeCatMoreGameItemOne = new WeCatMoreGameItemTwo_Als(aryInfo[i]);
                        var nAddX = Math.floor(i % nCount);
                        var nYAdd = Math.floor(i / nCount);
                        pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 15 * nAddX;
                        pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                        pannel.addChild(pWeCatMoreGameItemOne);
                        pannel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height + 10;
                    }
                }
            };
            this.moreGamePanel.removeChildren();
            this.moreGamePanel.y = 0;
            func(this.moreGamePanel);
            this.moreGamePanel2.y = this.moreGamePanel.height;
            func(this.moreGamePanel2);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
        };
        WeCatMoreGameView_Als.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 1.5;
            this.moreGamePanel.y -= 1.5;
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
        };
        WeCatMoreGameView_Als.prototype.addEvent = function () {
            this.imageBtWeCat.on(Laya.Event.CLICK, this, this.viewAniOut);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
        };
        WeCatMoreGameView_Als.prototype.removeEvent = function () {
            this.imageBtWeCat.off(Laya.Event.CLICK, this, this.viewAniOut);
        };
        WeCatMoreGameView_Als.prototype.mousedown = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        WeCatMoreGameView_Als.prototype.weCatViewOper = function () {
            var _this = this;
            this.bWeCatShow = !this.bWeCatShow;
            this.imageBtWeCat.off(Laya.Event.CLICK, this, this.weCatViewOper);
            if (this.bWeCatShow) {
                Laya.Tween.to(this.boxWeCatMoreGame, { x: -713 }, 1000, null, Laya.Handler.create(this, function (args) {
                    _this.imageBtWeCat.on(Laya.Event.CLICK, _this, _this.weCatViewOper);
                    _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_2.png";
                }));
            }
            else {
                Laya.Tween.to(this.boxWeCatMoreGame, { x: 0 }, 1000, null, Laya.Handler.create(this, function (args) {
                    _this.imageBtWeCat.on(Laya.Event.CLICK, _this, _this.weCatViewOper);
                    _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_3.png";
                }));
            }
        };
        WeCatMoreGameView_Als.prototype.viewAniIn = function () {
            var _this = this;
            this.boxWeCatMoreGame.x = -713;
            WeCatMoreGameView_Als.isOpen = true;
            Laya.Tween.to(this.boxWeCatMoreGame, { x: 0 }, 500, null, Laya.Handler.create(this, function (args) {
                _this.addEvent();
                _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_3.png";
            }));
        };
        WeCatMoreGameView_Als.prototype.viewAniOut = function () {
            var _this = this;
            this.boxWeCatMoreGame.x = 0;
            Laya.Tween.to(this.boxWeCatMoreGame, { x: -713 }, 500, null, Laya.Handler.create(this, function (args) {
                _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_2.png";
                WeCatMoreGameView_Als.nEnterCount += 1;
                if (WeCatMoreGameView_Als.nEnterCount >= 2) {
                    if (PlayerDataManager_Als.bGlobEnterGame) {
                        ViewChangeManager_Als.getInstance().showCommonView();
                    }
                    PlayerDataManager_Als.bGlobEnterGame = false;
                }
                if (PlayerDataManager_Als.bGlobEnterGame) {
                    MiniManeger_Als.instance.playViderAd({
                        successFun: function () {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                            _this.removeSelf();
                            WeCatMoreGameView_Als.isOpen = false;
                        },
                        failFun: function () {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                            _this.removeSelf();
                            WeCatMoreGameView_Als.isOpen = false;
                        },
                        errorFun: function () {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                            _this.removeSelf();
                            WeCatMoreGameView_Als.isOpen = false;
                        }
                    });
                }
                else {
                    _this.removeSelf();
                    WeCatMoreGameView_Als.isOpen = false;
                }
            }));
        };
        WeCatMoreGameView_Als.isOpen = false;
        WeCatMoreGameView_Als.nEnterCount = 0;
        return WeCatMoreGameView_Als;
    }(BaseSceneUISkinPopView));

    var MoreGameOperRequestTwo_Als = (function (_super) {
        __extends(MoreGameOperRequestTwo_Als, _super);
        function MoreGameOperRequestTwo_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameOperRequestTwo";
            _this.bContinue = false;
            _this.nStartY = 0;
            _this.skin = "game/uiView/MoreGameOperRequestTwo.json";
            _this.nRandomIndxe = 0;
            _this.aryCatMiniIconsInfoTemp = [];
            _this.nOpenNum = 0;
            return _this;
        }
        MoreGameOperRequestTwo_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
            this.initView();
            this.addEvent();
        };
        MoreGameOperRequestTwo_Als.prototype.onAddStage = function () {
            var _this = this;
            _super.prototype.onAddStage.call(this);
            this.nOpenNum += 1;
            MiniManeger_Als.instance.hideBanner();
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                this.imageBtReturn.visible = false;
                Laya.timer.once(3000, this, function () {
                    _this.imageBtReturn.visible = true;
                });
                MoreGameOperRequestTwo_Als.isOpen = true;
            }
            if ((this.nOpenNum >= 2 || !PlayerDataManager_Als.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.timerChangerImage();
            }
            else {
                this.changeImage();
            }
            if (BaseConst.infos.gameInfo.spbt == 0) {
                this.imageBtReturn.visible = false;
            }
            MiniManeger_Als.instance.bFlagSpecialView = false;
        };
        MoreGameOperRequestTwo_Als.prototype.timerChangerImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_2.png";
            this.bContinue = false;
            Laya.timer.clear(this, this.changeImage);
            Laya.timer.once(5000, this, this.changeImage);
        };
        MoreGameOperRequestTwo_Als.prototype.changeImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_3.png";
            this.bContinue = true;
        };
        MoreGameOperRequestTwo_Als.prototype.onSpeical_als = function () {
            if (this.bContinue) {
                this.onClickOper_als();
            }
            else {
                this.goToGame_als();
            }
        };
        MoreGameOperRequestTwo_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            MoreGameOperRequestTwo_Als.isOpen = false;
        };
        MoreGameOperRequestTwo_Als.prototype.addEvent = function () {
            this.imageBtReturn.on(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.on(Laya.Event.CLICK, this, this.onSpeical_als);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown_als);
        };
        MoreGameOperRequestTwo_Als.prototype.mousedown_als = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        MoreGameOperRequestTwo_Als.prototype.removeEvent = function () {
            this.imageBtReturn.off(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.off(Laya.Event.CLICK, this, this.onSpeical_als);
        };
        MoreGameOperRequestTwo_Als.prototype.initPanel = function () {
        };
        MoreGameOperRequestTwo_Als.prototype.initView = function () {
            Laya.timer.clear(this, this.onMove);
            this.aryCatMiniIconsInfoTemp = [];
            this.aryCatMiniIconsInfoTemp = Als_GameData.getInstance().weCatMiniIconsInfo;
            ViewChangeManager_Als.getInstance().hideCommonView();
            this.initPanel();
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 2;
            var aryInfo = [];
            aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(18);
            var func = function (pannel) {
                for (var i = 0; i < aryInfo.length; ++i) {
                    var pWeCatMoreGameItemOne = pannel.getChildAt(i);
                    if (pWeCatMoreGameItemOne) {
                        pWeCatMoreGameItemOne.setData(aryInfo[i]);
                    }
                    else {
                        pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713Big_Als(aryInfo[i]);
                        var nAddX = Math.floor(i % nCount);
                        var nYAdd = Math.floor(i / nCount);
                        pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                        pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                        pannel.addChild(pWeCatMoreGameItemOne);
                        pannel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                    }
                }
            };
            func(this.moreGamePanel);
            this.moreGamePanel2.y = this.moreGamePanel.height;
            this.moreGamePanel2.removeChildren();
            func(this.moreGamePanel2);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
        };
        MoreGameOperRequestTwo_Als.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 2;
            this.moreGamePanel.y -= 2;
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
        };
        MoreGameOperRequestTwo_Als.prototype.onBackTemp = function () {
            MoreGameView_Als.bSpeical = true;
            ViewManager.getInstance().showView(MoreGameView_Als);
        };
        MoreGameOperRequestTwo_Als.prototype.onBack = function () {
            this.onClickOper_als();
        };
        MoreGameOperRequestTwo_Als.prototype.goToGame_als = function () {
            GameCenterManager_Als.getInstance().toGameRandom();
        };
        MoreGameOperRequestTwo_Als.prototype.onClickOper_als = function () {
            MiniManeger_Als.instance.bFlagSpecialView = true;
            if (PlayerDataManager_Als.bGlobEnterGame) {
                ViewManager.getInstance().showView(WeCatMoreGameView_Als);
            }
            else {
                if (MoreGameOperRequestTwo_Als.bGotoNextGame) {
                    var nSpCost = 1;
                    var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
                    if (stGameConfig) {
                        nSpCost = parseInt(stGameConfig.strValue);
                    }
                    var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                    if (!b) {
                        GameManager_Als.instance.powerIsEnough();
                        return;
                    }
                    PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                    if (PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel
                        && BaseConst.infos.gameInfo.openPsAward == 1) {
                        PlayerDataManager_Als.getInstance().bEnterGameFromGameHome = false;
                        ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                    }
                    else {
                        ViewChangeManager_Als.getInstance().goToNextLevel();
                    }
                }
                else {
                    if (MoreGameOperRequestTwo_Als.bOperFlag) {
                        if (MoreGameOperRequestTwo_Als.bSuccess) {
                            if (BaseConst.infos.gameInfo.openPsAward == 1
                                && PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel) {
                                ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                            }
                            else {
                                ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                            }
                        }
                        else {
                            ViewManager.getInstance().showView(FailEntryTwoView_Als);
                        }
                    }
                }
                if (MoreGameOperRequestTwo_Als.toHome) {
                    ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
                    PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
                    GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                    LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
                }
                if (MoreGameOperRequestTwo_Als.bReStartGame) {
                    PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, 1);
                    ViewChangeManager_Als.getInstance().restartGame(true);
                }
            }
            this.removeSelf();
            Laya.timer.clearAll(this);
            MiniManeger_Als.instance.showBannerAd();
            MoreGameOperRequestTwo_Als.bOperFlag = false;
            MoreGameOperRequestTwo_Als.bSuccess = false;
            MoreGameOperRequestTwo_Als.bGotoNextGame = false;
            MoreGameOperRequestTwo_Als.toHome = false;
            ViewChangeManager_Als.getInstance().showCommonView();
        };
        MoreGameOperRequestTwo_Als.bOperFlag = false;
        MoreGameOperRequestTwo_Als.bSuccess = false;
        MoreGameOperRequestTwo_Als.toHome = false;
        MoreGameOperRequestTwo_Als.bGotoNextGame = false;
        MoreGameOperRequestTwo_Als.bReStartGame = false;
        MoreGameOperRequestTwo_Als.isOpen = false;
        return MoreGameOperRequestTwo_Als;
    }(BaseSceneUISkinPopView));

    var FailEntryTwoView_Als = (function (_super) {
        __extends(FailEntryTwoView_Als, _super);
        function FailEntryTwoView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "FailEntryTwoView_Als";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.nBtNextLevel = 300;
            _this.nBtNextLevelSp = 100;
            _this.nGlodAddByWathcVideo = 200;
            _this.bIsRunning = false;
            _this.bRecvAward = false;
            _this.bShareAward = false;
            _this.bOpneBox2 = false;
            _this.skin = 'game/uiView/FailEntryTwoView.json';
            return _this;
        }
        FailEntryTwoView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.grp_center.width = this.width;
            this.grp_center.height = this.height;
            this.bOpneBox2 = false;
        };
        FailEntryTwoView_Als.prototype.initMiniGame = function () {
        };
        FailEntryTwoView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.bIsRunning = false;
            this.bRecvAward = false;
            Laya.Tween.clearAll(this.imageBtShare);
            Laya.timer.clearAll(this);
            EventMgr.getInstance().removeEvent(GameEvent_Als.EVENT_FLAY_GLOD, this, this.flayGFS_Als);
        };
        FailEntryTwoView_Als.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.imageBtRestart:
                    this.failEntryTReSG_Als();
                    break;
                case this.imageBtToHome:
                    this.returnTGH_Als();
                    break;
                case this.imageBtShare:
                    this.failSG_Als();
                    break;
                case this.imageRecv:
                    this.onWVRA_Als();
                    break;
            }
        };
        FailEntryTwoView_Als.prototype.shareDouYin = function () {
            var self = this;
            MiniManeger_Als.instance.bFlagDouYin = true;
            MiniManeger_Als.instance.shareAppMessage({
                sucFun: function () {
                    console.log("发布录制视频成功");
                    self.addEvent();
                    self.bShareAward = true;
                    TipsManager.getInstance().showDefaultTips('分享成功');
                    if (MiniManeger_Als.instance.onShareVideoSuccess) {
                        return;
                    }
                    var nGlodCount = 50;
                    var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(18);
                    if (stGameConfig) {
                        nGlodCount = parseInt(stGameConfig.strValue);
                    }
                    PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, nGlodCount);
                    MiniManeger_Als.instance.onShareVideoSuccess = true;
                    Laya.timer.once(1000, self, function () {
                        self.flayGFS_Als();
                    });
                },
                failFun: function () {
                    self.addEvent();
                    console.log("发布录制视频失败");
                    TipsManager.getInstance().showDefaultTips('分享失败');
                }
            });
        };
        FailEntryTwoView_Als.prototype.addEvent = function () {
            this.registerEvent(this.imageBtRestart, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imageBtToHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imageRecv, Laya.Event.CLICK, this.onClick, this);
        };
        FailEntryTwoView_Als.prototype.shareTT = function () {
            var self = this;
            MiniManeger_Als.instance.onShareVideo({
                successFun: function () {
                    console.log("发布录制视频成功");
                    self.addEvent();
                    self.bShareAward = true;
                    if (MiniManeger_Als.instance.onShareVideoSuccess) {
                        return;
                    }
                    var nGlodCount = 50;
                    var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(18);
                    if (stGameConfig) {
                        nGlodCount = parseInt(stGameConfig.strValue);
                    }
                    PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, nGlodCount);
                    MiniManeger_Als.instance.onShareVideoSuccess = true;
                    self.flayGFS_Als();
                },
                failFun: function () {
                    console.log("发布录制视频失败");
                    self.addEvent();
                }
            });
        };
        FailEntryTwoView_Als.prototype.failSG_Als = function () {
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAMEOVER_SHARE, 1);
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.isDY) {
                this.shareWeCat();
            }
            else {
                MiniManeger_Als.instance.shareAppMessage();
            }
        };
        FailEntryTwoView_Als.prototype.shareWeCat = function () {
            MiniManeger_Als.instance.shareAppMessage({
                sucFun: function () {
                    ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
                },
                failFun: function () {
                    ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
                }
            });
        };
        FailEntryTwoView_Als.prototype.failEntry_end_Als = function () {
            var nSpCost = 1;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (stGameConfig) {
                nSpCost = parseInt(stGameConfig.strValue);
            }
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                MoreGameOperRequest_Als.bReStartGame = true;
                MoreGameOperRequest_Als.bEnterHotBox = true;
                ViewManager.getInstance().showView(MoreGameOperRequest_Als);
            }
            else {
                PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                ViewChangeManager_Als.getInstance().restartGame(true);
            }
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryTwoView_Als.prototype.returnTGH_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (BaseConst.infos.gameInfo.isDY) {
                if (PlayerDataManager_Als.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                    BaseConst.infos.gameInfo.glodegg == 0) {
                    MoreGameOperRequestTwo_Als.toHome = true;
                    ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
                }
                else {
                    GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                    ViewChangeManager_Als.getInstance().CurLevelBase.returnToGameHome();
                }
            }
            else {
                GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                ViewChangeManager_Als.getInstance().CurLevelBase.returnToGameHome();
            }
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryTwoView_Als.prototype.failEntryTReSG_Als = function () {
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAMEOVER_AGIN, 1);
            Als_SoundManager.getInstance().playEffect("button", 1);
            var nSpCost = 1;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (stGameConfig) {
                nSpCost = parseInt(stGameConfig.strValue);
            }
            var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            if (!b) {
                GameCenterManager_Als.getInstance().oppenAddSpView();
                return;
            }
            this.failEntry_end_Als();
        };
        FailEntryTwoView_Als.prototype.refreshUIData = function () {
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(7);
            if (stGameConfig) {
                this.nGlodAddByWathcVideo = parseInt(stGameConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.spCount, this.nGlodAddByWathcVideo.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var nCost = 1;
            stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (stGameConfig) {
                nCost = parseInt(stGameConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.spCost, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        };
        FailEntryTwoView_Als.prototype.startbtShareAni_Als = function () {
            if (!this.bIsRunning || MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                return;
            }
            AnimationManager_Als.instance.zoomTweena(this.imageBtShare, this.imageBtShare);
        };
        FailEntryTwoView_Als.prototype.initView = function () {
            this.bOpneBox2 = false;
            ViewChangeManager_Als.getInstance().CommonView.abte_alt();
            MiniManeger_Als.instance.showInterstitialAd();
            MiniManeger_Als.instance.onShareVideoSuccess = false;
            this.initPlV_Als();
            this.initVFOP_Als();
            this.proceMG_Als();
            this.bIsRunning = true;
            this.bRecvAward = false;
            this.bShareAward = false;
            this.refreshUIData();
            this.startbtShareAni_Als();
            EventMgr.getInstance().addEvent(GameEvent_Als.EVENT_FLAY_GLOD, this, this.flayGFS_Als);
        };
        FailEntryTwoView_Als.prototype.addGDRel_Als = function () {
            this.bRecvAward = true;
            PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Glod, this.nGlodAddByWathcVideo);
            this.flayGR_Als();
        };
        FailEntryTwoView_Als.prototype.onWVRA_Als = function () {
            var _this = this;
            if (this.bRecvAward) {
                TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                return;
            }
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAMEOVER_GET, 1);
            MiniManeger_Als.instance.playViderAd({
                successFun: function () {
                    _this.addGDRel_Als();
                    _this.imageRecv.on(Laya.Event.CLICK, _this, _this.onWVRA_Als);
                }
            });
        };
        FailEntryTwoView_Als.prototype.flayGR_Als = function () {
            console.log("flayGlodRecv");
            var pPoint = new Laya.Point();
            pPoint.x = this.imageGoodsType.x;
            pPoint.y = this.imageGoodsType.y;
            var stParent = this.imageGoodsType.parent;
            pPoint = stParent.localToGlobal(pPoint);
            AnimationManager_Als.instance.flayGlod(pPoint.x, pPoint.y, 341, 105);
        };
        FailEntryTwoView_Als.prototype.initPlV_Als = function () {
            this.imageShareName.skin = "resource/assets/img/ui/success/failure_word_2.png";
            this.imageShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
            this.shareGlodCount.visible = false;
            this.ttGoodsType.visible = false;
            this.ttSpecial.visible = false;
            this.imageShareName.y = 38;
        };
        FailEntryTwoView_Als.prototype.flayGFS_Als = function () {
            console.log("flayGlodFileShare");
            var pPoint = new Laya.Point();
            pPoint.x = this.ttGoodsType.x;
            pPoint.y = this.ttGoodsType.y;
            var stParent = this.ttGoodsType.parent;
            pPoint = stParent.localToGlobal(pPoint);
            AnimationManager_Als.instance.flayGlod(pPoint.x, pPoint.y, 341, 105);
            console.log("pPoint.x = ", pPoint.x, "pPoint.y = ", pPoint.y);
        };
        FailEntryTwoView_Als.prototype.initVFOP_Als = function () {
            var _this = this;
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                this.refreshWeCatData();
                if (BaseConst.infos.gameInfo.openPsAward == 1) {
                    this.imageBtRestart.bottom = this.nBtNextLevelSp;
                    MiniManeger_Als.instance.bFlagSpecialView = false;
                    MiniManeger_Als.instance.hideBanner();
                    Laya.timer.once(1000, this, function () {
                        MiniManeger_Als.instance.bFlagSpecialView = true;
                        MiniManeger_Als.instance.showBannerAd();
                        Laya.Tween.to(_this.imageBtRestart, { bottom: _this.nBtNextLevel }, 500, null);
                    });
                    return;
                }
                else {
                    this.imageBtRestart.bottom = this.nBtNextLevel;
                }
            }
            else {
                MiniManeger_Als.instance.showBannerAd();
            }
        };
        FailEntryTwoView_Als.prototype.proceMG_Als = function () {
            if (BaseConst.infos.gameInfo.openalllevel == 1) {
                this.box_wecat.removeChildren();
                this.box_wecat.addChild(GameCenterManager_Als.getInstance().showMoreGameinView_als(true));
            }
        };
        FailEntryTwoView_Als.prototype.refreshWeCatData = function () {
            this.imageBtShare.scaleX = 0.6;
            this.imageBtShare.scaleY = 0.6;
            this.imageBtShare.bottom = 470;
            this.imageBtShare.left = 100;
            this.imageRecv.scaleX = 0.6;
            this.imageRecv.scaleY = 0.6;
            this.imageRecv.right = 100;
            this.imageRecv.bottom = 470;
            this.imageBtRestart.width = 370;
            this.imageBtRestart.height = 125;
            this.box_wecat.visible = true;
        };
        return FailEntryTwoView_Als;
    }(PopBaseScene));

    var MoreGameView_Als = (function (_super) {
        __extends(MoreGameView_Als, _super);
        function MoreGameView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameView";
            _this.ITEM_H = 200;
            _this.isAuto = true;
            _this.dataArr = [{ t: 0 }, { t: 1 }, { t: 2 }, { t: 3 }];
            _this.speed = 2;
            _this.dir = -1;
            _this.skin = "game/uiView/MoreGameView.json";
            return _this;
        }
        MoreGameView_Als.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        MoreGameView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MoreGameView_Als.prototype.onAddStage = function () {
            this.initView();
            this.addEvent();
            ViewChangeManager_Als.getInstance().hideCommonView();
            MiniManeger_Als.instance.hideBanner();
            MiniManeger_Als.instance.bFlagSpecialView = false;
            ViewChangeManager_Als.getInstance().hideImageExitTemp();
        };
        MoreGameView_Als.prototype.onRemoved = function () {
            this.removeEvent();
            this.panel.removeChildren();
            Laya.timer.clearAll(this);
            ViewChangeManager_Als.getInstance().showImageExitTemp();
        };
        MoreGameView_Als.prototype.addEvent = function () {
            this.panel.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.panel.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.panel.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.image_back.on(Laya.Event.CLICK, this, this.onBack);
        };
        MoreGameView_Als.prototype.removeEvent = function () {
            this.panel.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.panel.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.panel.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.image_back.off(Laya.Event.CLICK, this, this.onBack);
        };
        MoreGameView_Als.prototype.onBack = function () {
            if (!MoreGameView_Als.bSpeical) {
                if (MoreGameView_Als.bSuccess) {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                }
                else {
                    ViewManager.getInstance().showView(FailEntryTwoView_Als);
                }
            }
            this.removeSelf();
            MiniManeger_Als.instance.bFlagSpecialView = true;
            MoreGameView_Als.bSpeical = false;
        };
        MoreGameView_Als.prototype.mouseDown = function (e) {
            this.isAuto = false;
            this.stx = e.stageX;
            this.sty = e.stageY;
        };
        MoreGameView_Als.prototype.mouseMove = function (e) {
            var dy = e.stageY - this.sty;
            for (var i = 0; i < this.panel.numChildren; i++) {
                var item = this.panel.getChildAt(i);
                item.y += dy;
            }
            this.sty = e.stageY;
            this.dir = dy > 0 ? 1 : -1;
            this.refresh();
        };
        MoreGameView_Als.prototype.mouseUp = function (e) {
            this.isAuto = true;
            this.dir = -1;
        };
        MoreGameView_Als.prototype.initView = function () {
            Laya.timer.frameLoop(1, this, this.updata);
            var canuseHeight = Laya.stage.height - 280;
            this.maxCount = Math.ceil(canuseHeight / this.ITEM_H);
            this.dataArr = Als_GameData.getInstance().weCatMiniIconsInfo;
            console.log(Als_GameData.getInstance().weCatMiniIconsInfo);
            this.initItem();
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
        };
        MoreGameView_Als.prototype.initItem = function () {
            var didnex = 0;
            for (var i = 0; i < this.maxCount + 1; i++) {
                var item = new MoreGameItemView_Als();
                item.index = didnex;
                item.setData(this.dataArr[item.index]);
                didnex++;
                if (didnex >= this.dataArr.length) {
                    didnex = 0;
                }
                item.y = i * this.ITEM_H;
                this.panel.addChild(item);
            }
        };
        MoreGameView_Als.prototype.getUpIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
        };
        MoreGameView_Als.prototype.getDownIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index + 1 < this.dataArr.length ? index + 1 : 0;
        };
        MoreGameView_Als.prototype.updata = function (dt) {
            if (!this.isAuto)
                return;
            for (var i = 0; i < this.panel.numChildren; i++) {
                var item = this.panel.getChildAt(i);
                item.y += this.speed * this.dir;
            }
            this.refresh();
        };
        MoreGameView_Als.prototype.refresh = function () {
            var startItem;
            var lastItem;
            startItem = this.panel.getChildAt(0);
            lastItem = this.panel.getChildAt(this.maxCount);
            if (this.dir == -1) {
                if (startItem.y < -this.ITEM_H) {
                    startItem.y = lastItem.y + lastItem.height;
                    startItem.zOrder = lastItem.zOrder + 1;
                    startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                    startItem.refreshData(this.dataArr[startItem.index]);
                    console.log('idnex-=======>', startItem.index);
                }
            }
            else {
                if (lastItem.y > this.maxCount * this.ITEM_H) {
                    lastItem.y = startItem.y - startItem.height;
                    lastItem.zOrder = startItem.zOrder - 1;
                    lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                    lastItem.refreshData(this.dataArr[lastItem.index]);
                }
            }
        };
        MoreGameView_Als.bSuccess = false;
        MoreGameView_Als.bSpeical = false;
        return MoreGameView_Als;
    }(BaseSceneUISkinPopView));

    var MoreGameOperRequestTemp_Als = (function (_super) {
        __extends(MoreGameOperRequestTemp_Als, _super);
        function MoreGameOperRequestTemp_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameOperRequestTemp";
            _this.bContinue = false;
            _this.nStartY = 0;
            _this.skin = "game/uiView/MoreGameOperRequestTemp.json";
            _this.nRandomIndxe = 0;
            MoreGameOperRequestTemp_Als.nOpenNum = 0;
            return _this;
        }
        MoreGameOperRequestTemp_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
        };
        MoreGameOperRequestTemp_Als.prototype.onAddStage = function () {
            MoreGameOperRequestTemp_Als.nOpenNum += 1;
            _super.prototype.onAddStage.call(this);
            MiniManeger_Als.instance.hideBanner();
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
            if ((MoreGameOperRequestTemp_Als.nOpenNum >= 2 || !PlayerDataManager_Als.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.timerChangerImage();
            }
            else {
                this.changeImage();
            }
        };
        MoreGameOperRequestTemp_Als.prototype.timerChangerImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_2.png";
            this.bContinue = false;
            Laya.timer.clear(this, this.changeImage);
            Laya.timer.once(5000, this, this.changeImage);
        };
        MoreGameOperRequestTemp_Als.prototype.changeImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_3.png";
            this.bContinue = true;
        };
        MoreGameOperRequestTemp_Als.prototype.onSpeical = function () {
            if (this.bContinue) {
                this.removeSelf();
            }
            else {
                this.goToGame();
            }
        };
        MoreGameOperRequestTemp_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        MoreGameOperRequestTemp_Als.prototype.addEvent = function () {
            this.imageBtReturn.on(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.on(Laya.Event.CLICK, this, this.onSpeical);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
        };
        MoreGameOperRequestTemp_Als.prototype.mousedown = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        MoreGameOperRequestTemp_Als.prototype.removeEvent = function () {
            this.imageBtReturn.off(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.off(Laya.Event.CLICK, this, this.onSpeical);
        };
        MoreGameOperRequestTemp_Als.prototype.initView = function () {
            Laya.timer.clear(this, this.onMove);
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(18);
            var func = function (pannel) {
                for (var i = 0; i < aryInfo.length; ++i) {
                    var pWeCatMoreGameItemOne = pannel.getChildAt(i);
                    if (pWeCatMoreGameItemOne) {
                        pWeCatMoreGameItemOne.setData(aryInfo[i]);
                    }
                    else {
                        pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713_Als(aryInfo[i]);
                        var nAddX = Math.floor(i % nCount);
                        var nYAdd = Math.floor(i / nCount);
                        pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                        pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                        pannel.addChild(pWeCatMoreGameItemOne);
                        pannel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                    }
                }
            };
            func(this.moreGamePanel);
            this.moreGamePanel2.y = this.moreGamePanel.height;
            this.moreGamePanel2.removeChildren();
            func(this.moreGamePanel2);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
        };
        MoreGameOperRequestTemp_Als.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 2;
            this.moreGamePanel.y -= 2;
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
        };
        MoreGameOperRequestTemp_Als.prototype.onBackTemp = function () {
            MoreGameView_Als.bSpeical = true;
            ViewManager.getInstance().showView(MoreGameView_Als);
        };
        MoreGameOperRequestTemp_Als.prototype.goToGame = function () {
            GameCenterManager_Als.getInstance().toGameRandom();
        };
        MoreGameOperRequestTemp_Als.prototype.onBack = function () {
        };
        return MoreGameOperRequestTemp_Als;
    }(BaseSceneUISkinPopView));

    var WeCatMoreGameItemOne713_Als = (function (_super) {
        __extends(WeCatMoreGameItemOne713_Als, _super);
        function WeCatMoreGameItemOne713_Als(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemOne713";
            _this.nIndex = data;
            _this.skin = "game/uiView/WeCatMoreGameItemOne713.json";
            _this.width = 320;
            _this.height = 390;
            return _this;
        }
        WeCatMoreGameItemOne713_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        WeCatMoreGameItemOne713_Als.prototype.onRemoved = function () {
            this.removeEvent();
        };
        WeCatMoreGameItemOne713_Als.prototype.initView = function () {
            var weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo;
            if (this.nIndex < 0 || this.nIndex >= weCatMiniIconsInfo.length) {
                this.nIndex = weCatMiniIconsInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            var alsDate = weCatMiniIconsInfo[this.nIndex];
            this.lableGameName.text = alsDate.name;
            this.imageIcon.skin = alsDate.ad_img;
            this.stGameIndex = weCatMiniIconsInfo[this.nIndex];
        };
        WeCatMoreGameItemOne713_Als.prototype.setData = function (data) {
            this.nIndex = data;
            this.initView();
        };
        WeCatMoreGameItemOne713_Als.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        WeCatMoreGameItemOne713_Als.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGame);
            }
        };
        WeCatMoreGameItemOne713_Als.prototype.gotoGame = function () {
            GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex, MoreGameOperRequestTemp_Als);
        };
        return WeCatMoreGameItemOne713_Als;
    }(BaseSceneUISkin));

    var MoreGameOperRequest_Als = (function (_super) {
        __extends(MoreGameOperRequest_Als, _super);
        function MoreGameOperRequest_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameOperRequest";
            _this.bContinue = false;
            _this.nStartY = 0;
            _this.skin = "game/uiView/MoreGameOperRequest.json";
            _this.nRandomIndxe = 0;
            _this.bAniOver = false;
            _this.nOpenNum = 0;
            return _this;
        }
        MoreGameOperRequest_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
        };
        MoreGameOperRequest_Als.prototype.onAddStage = function () {
            this.nOpenNum += 1;
            _super.prototype.onAddStage.call(this);
            MiniManeger_Als.instance.hideBanner();
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
            MiniManeger_Als.instance.bFlagSpecialView = false;
            if ((this.nOpenNum >= 2 || !PlayerDataManager_Als.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.timerChangerImage();
            }
            else {
                this.changeImage();
            }
        };
        MoreGameOperRequest_Als.prototype.timerChangerImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_2.png";
            this.bContinue = false;
            Laya.timer.clear(this, this.changeImage);
            Laya.timer.once(5000, this, this.changeImage);
        };
        MoreGameOperRequest_Als.prototype.changeImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_3.png";
            this.bContinue = true;
        };
        MoreGameOperRequest_Als.prototype.onSpeical = function () {
            if (this.bContinue) {
                this.onSpecialGotoGame();
            }
            else {
                this.goToGame();
            }
        };
        MoreGameOperRequest_Als.prototype.onSpecialGotoGame = function () {
            if (PlayerDataManager_Als.bGlobEnterGame) {
                ViewManager.getInstance().showView(WeCatMoreGameView_Als);
                this.removeSelf();
                Laya.timer.clearAll(this);
                MoreGameOperRequest_Als.bOperFlag = false;
                MoreGameOperRequest_Als.bSuccess = false;
                MoreGameOperRequest_Als.bGotoNextGame = false;
                MoreGameOperRequest_Als.toHome = false;
                MoreGameOperRequest_Als.bEnterHotBox = false;
                MoreGameOperRequest_Als.bReStartGame = false;
                return;
            }
            this.onClickOper();
        };
        MoreGameOperRequest_Als.prototype.mousedown = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        MoreGameOperRequest_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.bAniOver = true;
        };
        MoreGameOperRequest_Als.prototype.addEvent = function () {
            this.imageBtReturn.on(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.on(Laya.Event.CLICK, this, this.onSpeical);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
            this.imageRandom.on(Laya.Event.CLICK, this, this.goToGameRandom);
        };
        MoreGameOperRequest_Als.prototype.initPanel = function () {
        };
        MoreGameOperRequest_Als.prototype.initView = function () {
            Laya.timer.clear(this, this.onMove);
            ViewChangeManager_Als.getInstance().hideCommonView();
            this.initPanel();
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = GameCenterManager_Als.getInstance().getRandomIndex(18);
            this.moreGamePanel.removeChildren();
            this.moreGamePanel.y = 0;
            var func = function (pannel) {
                for (var i = 0; i < aryInfo.length; ++i) {
                    var pWeCatMoreGameItemOne = pannel.getChildAt(i);
                    if (pWeCatMoreGameItemOne) {
                        pWeCatMoreGameItemOne.setData(aryInfo[i]);
                    }
                    else {
                        pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713_Als(aryInfo[i]);
                        var nAddX = Math.floor(i % nCount);
                        var nYAdd = Math.floor(i / nCount);
                        pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                        pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                        pannel.addChild(pWeCatMoreGameItemOne);
                        pannel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                    }
                }
            };
            func(this.moreGamePanel);
            this.moreGamePanel2.y = this.moreGamePanel.height;
            this.moreGamePanel2.removeChildren();
            func(this.moreGamePanel2);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
        };
        MoreGameOperRequest_Als.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 2;
            this.moreGamePanel.y -= 2;
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
        };
        MoreGameOperRequest_Als.prototype.goToGame = function () {
            GameCenterManager_Als.getInstance().toGameRandom();
        };
        MoreGameOperRequest_Als.prototype.onBackTemp = function () {
            MoreGameView_Als.bSpeical = true;
            ViewManager.getInstance().showView(MoreGameView_Als);
        };
        MoreGameOperRequest_Als.prototype.onBack = function () {
            var _this = this;
            var funcBefore = function () {
                MoreGameOperRequestTwo_Als.bOperFlag = MoreGameOperRequest_Als.bOperFlag;
                MoreGameOperRequestTwo_Als.bSuccess = MoreGameOperRequest_Als.bSuccess;
                MoreGameOperRequestTwo_Als.bGotoNextGame = MoreGameOperRequest_Als.bGotoNextGame;
                MoreGameOperRequestTwo_Als.toHome = MoreGameOperRequest_Als.toHome;
                MoreGameOperRequestTwo_Als.bReStartGame = MoreGameOperRequest_Als.bReStartGame;
            };
            var funcMid = function () {
                MiniManeger_Als.instance.bFlagSpecialView = false;
                ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
                _this.removeSelf();
                Laya.timer.clearAll(_this);
            };
            var funcAfter = function () {
                MoreGameOperRequest_Als.bOperFlag = false;
                MoreGameOperRequest_Als.bSuccess = false;
                MoreGameOperRequest_Als.bGotoNextGame = false;
                MoreGameOperRequest_Als.toHome = false;
                MoreGameOperRequest_Als.bEnterHotBox = false;
                MoreGameOperRequest_Als.bReStartGame = false;
            };
            funcBefore();
            funcMid();
            funcAfter();
        };
        MoreGameOperRequest_Als.prototype.goToGameRandom = function () {
            GameCenterManager_Als.getInstance().toGameRandomNotOpenView();
        };
        MoreGameOperRequest_Als.prototype.onClickOper = function () {
            var _this = this;
            var func = function () {
                _this.removeSelf();
                Laya.timer.clearAll(_this);
                MiniManeger_Als.instance.showBannerAd();
                MoreGameOperRequest_Als.bOperFlag = false;
                MoreGameOperRequest_Als.bSuccess = false;
                MoreGameOperRequest_Als.bGotoNextGame = false;
                MoreGameOperRequest_Als.toHome = false;
                MoreGameOperRequest_Als.bEnterHotBox = false;
                MoreGameOperRequest_Als.bReStartGame = false;
            };
            if (!MoreGameOperRequest_Als.bEnterHotBox) {
                MiniManeger_Als.instance.bFlagSpecialView = true;
                if (MoreGameOperRequest_Als.bGotoNextGame) {
                    var nSpCost = 1;
                    var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
                    if (stGameConfig) {
                        nSpCost = parseInt(stGameConfig.strValue);
                    }
                    var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                    if (!b) {
                        GameManager_Als.instance.powerIsEnough();
                        return;
                    }
                    if (DeviceUtil.isWXMiniGame()) {
                        if (!MiniManeger_Als.instance.bPushMsgShowFlagTen && PlayerDataManager_Als.getInstance().getCurLevelToChallenge() + 1 == 10) {
                            MiniManeger_Als.instance.wxPushMsg();
                            MiniManeger_Als.instance.bPushMsgShowFlagTen = true;
                        }
                    }
                    PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
                    if (PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel
                        && BaseConst.infos.gameInfo.openPsAward == 1) {
                        PlayerDataManager_Als.getInstance().bEnterGameFromGameHome = false;
                        ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                    }
                    else {
                        ViewChangeManager_Als.getInstance().goToNextLevel();
                    }
                }
                else {
                    if (MoreGameOperRequest_Als.bOperFlag) {
                        if (MoreGameOperRequest_Als.bSuccess) {
                            if (BaseConst.infos.gameInfo.openPsAward == 1
                                && PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel) {
                                ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                            }
                            else {
                                ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                            }
                        }
                        else {
                            ViewManager.getInstance().showView(FailEntryTwoView_Als);
                        }
                    }
                }
                if (MoreGameOperRequest_Als.toHome) {
                    ViewChangeManager_Als.getInstance().CurLevelBase.closeGameView();
                    PlayerDataManager_Als.getInstance().setCurLevel(PlayerDataManager_Als.getInstance().getCurLevelMax());
                    GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                    LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
                }
                ViewChangeManager_Als.getInstance().showCommonView();
            }
            else {
                this.onBack();
            }
            func();
        };
        MoreGameOperRequest_Als.prototype.removeEvent = function () {
            this.imageBtReturn.off(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.off(Laya.Event.CLICK, this, this.onSpeical);
            this.imageRandom.off(Laya.Event.CLICK, this, this.goToGameRandom);
        };
        MoreGameOperRequest_Als.bOperFlag = false;
        MoreGameOperRequest_Als.bSuccess = false;
        MoreGameOperRequest_Als.toHome = false;
        MoreGameOperRequest_Als.bGotoNextGame = false;
        MoreGameOperRequest_Als.bEnterHotBox = false;
        MoreGameOperRequest_Als.bReStartGame = false;
        return MoreGameOperRequest_Als;
    }(BaseSceneUISkinPopView));

    var GuessLikeItem_Als = (function (_super) {
        __extends(GuessLikeItem_Als, _super);
        function GuessLikeItem_Als(skin, itemData) {
            var _this = _super.call(this) || this;
            _this.className_key = "GuessLikeItem";
            _this.itemData_ = itemData;
            _this.skin = skin;
            return _this;
        }
        GuessLikeItem_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.on(Laya.Event.CLICK, this, this.click);
            this.dataChange(this.itemData_);
        };
        GuessLikeItem_Als.prototype.onEnabled = function () {
        };
        GuessLikeItem_Als.prototype.dataChange = function (data) {
            this.exposure();
            this.itemData_ = data;
            if (data.img)
                this.icon_.skin = data.img;
            else
                this.icon_.skin = data.ad_img;
            if (this.iconMask_) {
                this.icon_.mask = this.iconMask_;
                this.icon_.mask.visible = false;
            }
            if (this.name_txt) {
                if (data.title) {
                    this.name_txt.text = data.title;
                }
                if (data.name) {
                    this.name_txt.text = data.name;
                }
            }
        };
        GuessLikeItem_Als.prototype.exposure = function () {
            if (DeviceUtil.isOPPOMiniGame()) {
                return;
            }
        };
        GuessLikeItem_Als.prototype.click = function () {
            var itemData_ = this.itemData_;
            var data = {
                appId: itemData_.appid,
                path: itemData_.url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        PlatformDY.toGame(this.itemData_.id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    if (DeviceUtil.isWXMiniGame()) {
                        ViewManager.getInstance().showView(MoreGameOperRequest_Als);
                    }
                }
            };
            platform.navigateToMiniProgram(data);
        };
        return GuessLikeItem_Als;
    }(BaseSceneUISkin));

    var GuessLike_Als = (function (_super) {
        __extends(GuessLike_Als, _super);
        function GuessLike_Als(skin, subItemSkin, listdata_, itemW) {
            var _this = _super.call(this) || this;
            _this.className_key = "GuessLike";
            _this.listdata = [];
            _this.isTouch = false;
            _this.index = 0;
            _this.len = 0;
            _this.nNum = 0;
            _this.subItemSkin = subItemSkin;
            listdata_ && (_this.listdata = listdata_);
            _this.itemW = itemW;
            _this.skin = skin;
            return _this;
        }
        GuessLike_Als.prototype.childrenCreated = function () {
            this.width = 1026;
            this.height = 330;
            this.panelList.hScrollBarSkin = "";
            this.panelList.hScrollBar.touchScrollEnable = false;
            this.initList();
        };
        GuessLike_Als.prototype.initList = function () {
            for (var i = 0, len = this.listdata.length; i < len; i++) {
                var item = new GuessLikeItem_Als(this.subItemSkin, this.listdata[i]);
                this.boxView.addChild(item);
                item.x = this.itemW * (i - 1);
            }
            this.index = -1;
            this.len = this.listdata.length;
            this.boxView.x = 0;
            this.onEnable();
            this.panelList.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        GuessLike_Als.prototype.onEnable = function () {
            if (this.isCreate) {
                this.aniPerIndex();
            }
        };
        GuessLike_Als.prototype.onEnabled = function () {
            this.btn_moreGame && this.btn_moreGame.on(Laya.Event.CLICK, this, this.onMoreGame);
        };
        GuessLike_Als.prototype.onMoreGame = function () {
            this.onMoreGameCall && this.onMoreGameCall();
        };
        GuessLike_Als.prototype.onDisable = function () {
            if (this.isCreate) {
                this.panelList.clearTimer(this, this.frameChange);
                this.panelList.clearTimer(this, this.aniLoop);
                this.btn_moreGame && this.btn_moreGame.off(Laya.Event.CLICK, this, this.onMoreGame);
            }
        };
        GuessLike_Als.prototype.mouseDown = function (evt) {
            this.isTouch = true;
            this.clickX = evt.stageX;
            this.starX = this.boxView.x;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        GuessLike_Als.prototype.frameChange = function () {
            var self = this;
            if (!self.isTouch) {
                self.boxView.x -= 1;
                this.nNum += 1;
                if (this.nNum == self.itemW) {
                    this.panelList.clearTimer(this, this.frameChange);
                    this.nNum = 0;
                }
            }
            var curX = self.boxView.x;
            if (curX > (self.index + 1) * self.itemW) {
                self.index++;
                var last = self.boxView.removeChildAt(self.boxView.numChildren - 1);
                var first = self.boxView.getChildAt(0);
                last.x = first.x - self.itemW;
                self.boxView.addChildAt(last, 0);
                last.exposure();
                return;
            }
            if (curX < (self.index - 1) * self.itemW) {
                self.index--;
                var last = self.boxView.getChildAt(self.boxView.numChildren - 1);
                var first = self.boxView.removeChildAt(0);
                first.x = last.x + self.itemW;
                self.boxView.addChild(first);
                first.exposure();
                return;
            }
        };
        GuessLike_Als.prototype.mouseMove = function (evt) {
            this.boxView.x = this.starX + (evt.stageX - this.clickX);
        };
        GuessLike_Als.prototype.mouseOutUp = function () {
            this.isTouch = false;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        GuessLike_Als.prototype.aniPerIndex = function () {
            this.panelList.frameLoop(400, this, this.aniLoop);
        };
        GuessLike_Als.prototype.aniLoop = function () {
            this.panelList.clearTimer(this, this.frameChange);
            this.panelList.frameLoop(1, this, this.frameChange);
        };
        return GuessLike_Als;
    }(BaseSceneUISkin));

    var MiniManeger_Als = (function () {
        function MiniManeger_Als() {
            this.hideTime = 0;
            this.showTime = 0;
            this.defaultMssage = {
                "title": "休闲解密游戏，开动你的小脑筋帮助女孩逃离魔爪！",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/girl/Share/500x400-1.jpg?v=" + 1.0,
                "query": ""
            };
            this.shareInfo = [
                {
                    "title": "烧脑推理，一键过关！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/girl/Share/500x400-2.jpg?v=" + 1.0,
                    "query": ""
                },
                {
                    "title": "休闲解密游戏，开动你的小脑筋帮助女孩逃离魔爪！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/girl/Share/500x400-1.jpg?v=" + 1.0,
                    "query": ""
                },
                {
                    "title": "机会只有一次！救救女孩！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/girl/Share/500x400-3.jpg?v=" + 1.0,
                    "query": ""
                }
            ];
            this.shareInfoDouYin = [
                {
                    "channel": "video",
                    "title": "烧脑推理，一键过关！",
                    "desc": "烧脑推理，一键过关",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["阿罗斯营救", "烧脑推理，一键过关"]
                    }
                },
                {
                    "channel": "video",
                    "title": "休闲解密游戏，开动你的小脑筋帮助女孩逃离魔爪？",
                    "desc": "休闲解密游戏，开动你的小脑筋帮助女孩逃离魔爪？",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["阿罗斯营救", "休闲解密游戏，开动你的小脑筋帮助女孩逃离魔爪"]
                    }
                },
                {
                    "channel": "video",
                    "title": "机会只有一次！救救女孩！",
                    "desc": "机会只有一次！救救女孩！",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["阿罗斯营救", "机会只有一次！救救女孩！"]
                    }
                }
            ];
            this.bFlagDouYin = false;
            this.sucTime = 0;
            this.canShowBanner = true;
            this.bTimerOpen = false;
            this.bFlagSpecialView = true;
            this.nRecordTime = 60;
            this.nRecordTimeReal = 0;
            this.onShareVideoSuccess = false;
            this.bPushMsgShowFlagTen = false;
            this.bPushMsgShowFlagChooseLevel = false;
            this.stPhoneInfo = null;
            this.strApiUrl = "https://pv.sohu.com/cityjson?ie=utf-8";
            this.initVideoInfo();
        }
        Object.defineProperty(MiniManeger_Als, "instance", {
            get: function () {
                if (MiniManeger_Als.ins == null) {
                    MiniManeger_Als.ins = new MiniManeger_Als();
                }
                return MiniManeger_Als.ins;
            },
            enumerable: true,
            configurable: true
        });
        MiniManeger_Als.prototype.compareVersion = function (v1, v2) {
            var v1Arr = v1.split(".");
            var v2Arr = v2.split(".");
            var len = Math.max(v1Arr.length, v2Arr.length);
            while (v1Arr.length < len) {
                v1Arr.push("0");
            }
            while (v2Arr.length < len) {
                v2Arr.push("0");
            }
            for (var i = 0; i < len; i++) {
                var num1 = parseInt(v1Arr[i]);
                var num2 = parseInt(v2Arr[i]);
                if (num1 > num2) {
                    return 1;
                }
                else if (num1 < num2) {
                    return -1;
                }
            }
            return 0;
        };
        MiniManeger_Als.prototype.addColorSign = function (data) {
            if (DeviceUtil.isQQMiniGame()) {
                if (this.compareVersion(this.systemInfo.SDKVersion, "1.10.0") >= 0) {
                    qq.addColorSign(data);
                }
            }
        };
        MiniManeger_Als.prototype.isColorSignExistSync = function () {
            if (this.compareVersion(this.systemInfo.SDKVersion, "1.16.0") >= 0) {
                return qq.isColorSignExistSync();
            }
            else {
                return this.compareVersion(this.systemInfo.SDKVersion, "1.10.0") >= 0;
            }
        };
        MiniManeger_Als.prototype.initMiniGame = function () {
            var _this = this;
            var launchObj = platform.getLaunchOptionsSync();
            if (launchObj) {
                console.log('launchObj>>>>>>>>>>>>>>', launchObj);
            }
            this.getUpdateManager();
            platform.setKeepScreenOn();
            platform.updateShareMenu();
            platform.showShareMenu();
            platform.onShareAppMessage(function () {
                return _this.defaultMssage;
            });
            this.systemInfo = platform.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
        };
        MiniManeger_Als.prototype.getUpdateManager = function () {
        };
        MiniManeger_Als.prototype.onAudioInterruptionBegin = function (call) {
        };
        MiniManeger_Als.prototype.onAudioInterruptionEnd = function (call) {
        };
        MiniManeger_Als.prototype.getUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            resolve(null);
                        })];
                });
            });
        };
        MiniManeger_Als.prototype.initUserTemp = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info, strOpenIdOther, strOpenIdOther;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfo()];
                        case 1:
                            info = _a.sent();
                            if (!(info == null)) return [3, 3];
                            return [4, this.userButtonSize(0, 1, 0)];
                        case 2:
                            info = _a.sent();
                            strOpenIdOther = Als_GameData.getInstance().enterGameInfo.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                platform.createUserInfoButton(function (data) {
                                    Als_GameData.getInstance().userInfo.nick = data.userInfo.nickName;
                                    Als_GameData.getInstance().userInfo.avatarUrl = data.userInfo.avatarUrl;
                                    if (!BaseConst.infos.gameInfo.isDY) {
                                        InviteManager_Als.getInstance().judgeInvite();
                                        console.log("createUserInfoButton 用户信息 : ", Als_GameData.getInstance().userInfo);
                                    }
                                    info = data;
                                });
                            }
                            return [3, 4];
                        case 3:
                            Als_GameData.getInstance().userInfo.nick = info.userInfo.nickName;
                            Als_GameData.getInstance().userInfo.avatarUrl = info.userInfo.avatarUrl;
                            strOpenIdOther = Als_GameData.getInstance().enterGameInfo.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                InviteManager_Als.getInstance().judgeInvite();
                                console.log("createUserInfoButton 用户信息 judgeInvite: ", Als_GameData.getInstance().userInfo);
                            }
                            _a.label = 4;
                        case 4:
                            MiniManeger_Als.instance.defaultMssage.query = "openid=" + Als_GameData.getInstance().userInfo.openId;
                            platform.onShareAppMessage(function () {
                                return MiniManeger_Als.instance.defaultMssage;
                            });
                            return [2, info];
                    }
                });
            });
        };
        MiniManeger_Als.prototype.userButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniManeger_Als.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function () {
                callBack && callBack();
                if (!DeviceUtil.isTTMiniGame()) {
                    _this.showTime = new Date().getTime();
                    if (_this.showTime - _this.hideTime >= _this.sucTime) {
                        _this.shareSucful && _this.shareSucful.call(_this.thisObj);
                    }
                    else {
                        _this.shareFailful && _this.shareFailful.call(_this.thisObj);
                    }
                }
                _this.shareSucful = null;
                _this.shareFailful = null;
                _this.thisObj = null;
            });
        };
        MiniManeger_Als.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
            });
        };
        MiniManeger_Als.prototype.showMoreGame = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2];
                            });
                        }); })];
                });
            });
        };
        MiniManeger_Als.prototype.getShareInfo = function (query) {
            var shareInfo = this.shareInfo;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = Als_GameData.getInstance().userInfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            return info;
        };
        MiniManeger_Als.prototype.testShareVideo = function () {
            var obj = {
                channel: "video",
                title: "测试分享视频",
                desc: "测试描述",
                imageUrl: "",
                templateId: "",
                query: "",
                extra: {
                    videoPath: "ttfile://temp/test.mp4",
                    videoTopics: ["话题11", "话题21"]
                },
                success: function () {
                    console.log("分享视频成功");
                },
                fail: function (e) {
                    console.log("分享视频失败");
                }
            };
            obj.extra.videoPath = this.strVideoPatch;
            platform.shareAppMessage(obj);
        };
        MiniManeger_Als.prototype.getShareInfoDouYin = function (query) {
            var shareInfo = this.shareInfoDouYin;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = Als_GameData.getInstance().userInfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            info.extra.videoPath = this.strVideoPatch;
            return info;
        };
        MiniManeger_Als.prototype.shareAppMessage = function (data) {
            if (data == null) {
                data = {};
            }
            if (!data.message) {
                data.message = this.getShareInfo({});
            }
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN' && this.bFlagDouYin) {
                    data.message = this.getShareInfoDouYin({});
                    console.log("data.message = ", data.message);
                }
                if (data.sucFun) {
                    data.sucFun && (data.message.success = data.sucFun);
                }
                else {
                    data.message.success = function () {
                        TipsManager.getInstance().showDefaultTips('分享成功');
                    };
                }
                if (data.failFun) {
                    data.failFun && (data.message.fail = data.failFun);
                }
                else {
                    data.message.fail = function () {
                        TipsManager.getInstance().showDefaultTips('分享失败');
                    };
                }
                platform.shareAppMessage(data.message);
                return;
            }
            this.shareSucful = data.sucFun;
            this.shareFailful = function () {
                data.failFun && data.failFun();
            };
            this.thisObj = data.thisObj;
            this.sucTime = data.time || 3000;
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame()) {
                platform.shareAppMessage(data.message);
            }
        };
        MiniManeger_Als.prototype.playViderAd = function (data) {
            if (!DeviceUtil.isMiniGame()) {
                data.successFun && data.successFun();
                return;
            }
            var videoId = Als_GameData.getInstance().videoId;
            if (data.isLongVideo) {
                videoId = Als_GameData.getInstance().longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                return;
            }
            ViewChangeManager_Als.getInstance().showBufferLoadingView();
            var adId = videoId[Math.floor(Math.random() * videoId.length)];
            platform.createRewardedVideoAd(adId, function (res) {
                if (res.isEnded) {
                    data.successFun && data.successFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        Als_SoundManager.getInstance().playBgMusic();
                    }
                    console.log(" video normal！");
                }
                else {
                    data.failFun && data.failFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        Als_SoundManager.getInstance().playBgMusic();
                    }
                    console.log(" video not finish！");
                }
                ViewChangeManager_Als.getInstance().hideBufferLoadingView();
            }, function () {
                ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                TipsManager.getInstance().showDefaultTips('网络错误');
                data.errorFun && data.errorFun();
                if (!DeviceUtil.isTTMiniGame()) {
                    Als_SoundManager.getInstance().playBgMusic();
                }
            });
        };
        MiniManeger_Als.prototype.showBannerAd = function (offset) {
            if (!DeviceUtil.isMiniGame()) {
                return;
            }
            if ((this.isWxMiniGameForOperReq() || DeviceUtil.isQQMiniGame()) && !this.bFlagSpecialView) {
                return;
            }
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN') {
                    return;
                }
            }
            this.canShowBanner = true;
            var bannerId = Als_GameData.getInstance().bannerId;
            if (bannerId.length <= 0) {
                console.log("bannerId.length <= 0");
                return;
            }
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            if (this.bannerAd == null) {
                var bannerAd = platform.createBannerAd(adId);
                this.bannerAd = bannerAd;
                if (bannerAd == null)
                    return;
                bannerAd.show();
                this.nBannerLeft = this.bannerAd.style.left;
                this.nBannerTop = this.bannerAd.style.top;
                console.log("this.nBannerLeft = ", this.nBannerLeft, " this.nBannerTop = ", this.nBannerTop);
            }
            this.bannerAd.show();
            if (!this.canShowBanner) {
                this.bannerAd.hide();
            }
            if (offset) {
                this.bannerAd.style.left = offset.w - this.bannerAd.style.realWidth / 2 + 0.1;
                this.bannerAd.style.top = offset.h - this.bannerAd.style.realHeight + 0.1;
                offset.callback && offset.callback();
            }
            if (DeviceUtil.isQQMiniGame() || this.isWxMiniGameForOperReq()) {
                this.qqRefreshBinner();
            }
        };
        MiniManeger_Als.prototype.qqRefreshBinnerReadl = function () {
            if (!this.bFlagSpecialView) {
                return;
            }
            if (DeviceUtil.isQQMiniGame() || this.isWxMiniGameForOperReq()) {
                var bannerId = Als_GameData.getInstance().bannerId;
                if (bannerId.length <= 0) {
                    console.log("bannerId.length <= 0");
                    return;
                }
                var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
                platform.binnerDestroy();
                this.bannerAd = null;
                var bannerAd = platform.createBannerAd(adId);
                this.bannerAd = bannerAd;
                this.showBannerAd();
            }
        };
        MiniManeger_Als.prototype.qqRefreshBinner = function () {
            if (this.bTimerOpen) {
                return;
            }
            this.bTimerOpen = true;
            if (DeviceUtil.isQQMiniGame()) {
                Laya.timer.clear(this, this.qqRefreshBinnerReadl);
                Laya.timer.loop(30000, this, this.qqRefreshBinnerReadl);
            }
            else if (this.isWxMiniGameForOperReq()) {
                Laya.timer.clear(this, this.qqRefreshBinnerReadl);
                Laya.timer.loop(BaseConst.infos.gameInfo.binnertime, this, this.qqRefreshBinnerReadl);
            }
        };
        MiniManeger_Als.prototype.hideBanner = function () {
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN') {
                    return;
                }
            }
            if (this.bannerAd != null) {
                this.bannerAd.hide();
            }
            this.canShowBanner = false;
        };
        MiniManeger_Als.prototype.resetBinnerOper = function () {
            if (!this.stPhoneInfo) {
                this.stPhoneInfo = platform.getSystemInfoSync();
            }
            if (this.bannerAd) {
                this.bannerAd.style.left = this.stPhoneInfo.screenWidth / 2 - this.bannerAd.style.realWidth / 2 + 0.1;
                this.bannerAd.style.top = this.stPhoneInfo.screenHeight - this.bannerAd.style.realHeight + 0.1;
            }
        };
        MiniManeger_Als.prototype.adaptImgToClientRect = function (collec_img, stage) {
            if (DeviceUtil.isWXMiniGame()) {
                var systemInfo = platform.getSystemInfoSync();
                var screenHeight = systemInfo['screenHeight'];
                var screenWidth = systemInfo['screenWidth'];
                var rect = platform.getMenuButtonBoundingClientRect();
                collec_img.top = stage.height * (rect['top'] / screenHeight);
                collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
            }
        };
        MiniManeger_Als.prototype.sendDataToWxOpen = function (data) {
            Laya.MiniAdpter.window.wx.postMessage(data);
        };
        MiniManeger_Als.prototype.removeOpenData = function (data) {
            var wxOpenData = data.parent.getChildByName('wxOpenData');
            this.sendDataToWxOpen({ cmd: 'close', data: null });
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
        };
        MiniManeger_Als.prototype.addOpenWxData = function (data) {
            var shareData = MiniManeger_Als.instance.getShareInfo({ id: Als_GameData.getInstance().userInfo.openId });
            this.sendDataToWxOpen({ cmd: 'share', data: JSON.stringify(shareData) });
            var wxOpenData = data.parent.getChildByName('wxOpenData');
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
            wxOpenData = new Laya.WXOpenDataViewer();
            wxOpenData.name = 'wxOpenData';
            wxOpenData.x = data.x || 0;
            wxOpenData.y = data.y || 0;
            wxOpenData.width = data.width;
            wxOpenData.height = data.height;
            if (data.isCenter) {
                wxOpenData.centerX = 0;
                wxOpenData.centerY = 0;
            }
            else {
                if (data.left != null) {
                    wxOpenData.left = data.left;
                }
                if (data.right != null) {
                    wxOpenData.right = data.right;
                }
                if (data.top != null) {
                    wxOpenData.top = data.top;
                }
                if (data.bottom != null) {
                    wxOpenData.bottom = data.bottom;
                }
            }
            if (data.parent) {
                data.parent.addChild(wxOpenData);
            }
            return wxOpenData;
        };
        MiniManeger_Als.prototype.initBoxAd = function () {
            var _this = this;
            if (!this.tempBoxAD) {
                this.tempBoxAD = platform.createAppBox(Als_GameData.getInstance().boxId[0]);
                this.tempBoxAD.load().then(function (res) {
                    console.log("boxAd load");
                    console.log(res);
                }).catch(function (err) {
                    console.log("boxAd load err");
                    console.log(err);
                });
                this.tempBoxAD.onClose(function () {
                    _this.imgRect && _this.imgRect.removeSelf();
                    _this.onCloseBoxAD && _this.onCloseBoxAD();
                });
            }
        };
        MiniManeger_Als.prototype.showBoxAd = function (onCloseCall) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.onCloseBoxAD = onCloseCall;
                    if (DeviceUtil.isQQMiniGame()) {
                        if (!this.imgRect) {
                            this.imgRect = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName("game_panel_db_png").url));
                            this.imgRect.sizeGrid = "3,3,2,2";
                            this.imgRect.width = Laya.stage.width;
                            this.imgRect.height = Laya.stage.height;
                        }
                        Laya.stage.addChild(this.imgRect);
                        if (this.tempBoxAD) {
                            this.tempBoxAD.show().then(function (res) {
                                console.log("boxAd show");
                                console.log(res);
                            }).catch(function (err) {
                                console.log("boxAd show err");
                                console.log(err);
                                _this.imgRect && _this.imgRect.removeSelf();
                                _this.onCloseBoxAD && _this.onCloseBoxAD();
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        MiniManeger_Als.prototype.initVideoInfo = function () {
            var _this = this;
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            this.recorder = platform.getGameRecorderManager();
            this.recorder.onStart(function (res) {
                console.log("onStart -> ", res);
            });
            this.recorder.onStop(function (res) {
                _this.strVideoPatch = res.videoPath;
                if (_this.nRecordTimeReal < 3000)
                    _this.strVideoPatch = null;
                console.log("onStop ->", _this.strVideoPatch);
                MiniManeger_Als.instance.saveCallF && MiniManeger_Als.instance.saveCallF();
            });
        };
        MiniManeger_Als.prototype.StartRecorderVideo = function () {
            var _this = this;
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            this.nRecordTimeReal = 0;
            this.strVideoPatch = "";
            Laya.timer.once(200, this, function () {
                platform.getGameRecorderManager().start({ duration: _this.nRecordTime });
            });
            Laya.timer.loop(1000, this, this.timeStopVideo);
            console.log("开始录制视频");
        };
        MiniManeger_Als.prototype.timeStopVideo = function () {
            this.nRecordTimeReal += 1000;
            if (this.nRecordTimeReal >= this.nRecordTime * 1000) {
                this.StopVideo();
            }
        };
        MiniManeger_Als.prototype.StopVideo = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            EventMgr.getInstance().sendEvent(GameEvent_Als.CHANGE_VIDEO_IMAGE);
            platform.getGameRecorderManager().stop();
            Laya.timer.clear(this, this.timeStopVideo);
            console.log("停止录制视频  this.nRecordTimeReal=", this.nRecordTimeReal);
        };
        MiniManeger_Als.prototype.shareGameVideo = function (data) {
            if (!this.strVideoPatch || this.strVideoPatch.length == 0) {
                TipsManager.getInstance().showDefaultTips("暂未录制视频哦!");
                return;
            }
            if (this.nRecordTimeReal <= 3000) {
                TipsManager.getInstance().showDefaultTips("录制视频失败");
                data.failFun && data.failFun();
                return;
            }
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            console.log("分享游戏视频--");
            var obj = {};
            obj.title = "阿罗斯营救";
            obj.query = "openId=" + Als_GameData.getInstance().userInfo.openId + "&nick=" + Als_GameData.getInstance().userInfo.nick;
            obj.videoPath = this.strVideoPatch;
            obj.success = function () {
                console.log("视频分享成功！");
                TipsManager.getInstance().showDefaultTips("发布录制视频成功");
                data.successFun && data.successFun();
            };
            obj.fail = function (res) {
                console.log("视频分享失败！", res);
                data.failFun && data.failFun();
                TipsManager.getInstance().showDefaultTips("发布录制视频失败");
            };
            platform.shareVideo(obj);
        };
        MiniManeger_Als.prototype.onShareVideo = function (data) {
            this.shareGameVideo(data);
        };
        MiniManeger_Als.prototype.showInterstitialAd = function () {
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN') {
                    return;
                }
                platform.createInterstitialAd({ adUnitId: "h7n4g8mhqfp1h56aim" });
                console.log("to show createInterstitialAd!");
            }
        };
        MiniManeger_Als.prototype.showInsertAd = function (data) {
            var _this = this;
            if (this.compareVersion(this.systemInfo.SDKVersion, "1.12.0") >= 0) {
                var intersId = ["c072ba25da29c0b3ec72b379b072f8ee"];
                if (intersId.length <= 0) {
                    data.closeFun && data.closeFun();
                    return;
                }
                ViewChangeManager_Als.getInstance().showBufferLoadingView();
                var adId_1 = intersId[Math.floor(Math.random() * intersId.length)];
                console.log("创建插屏广告组件-->", adId_1);
                var createCall = function () {
                    _this.insertAd = qq.createInterstitialAd({
                        adUnitId: adId_1
                    });
                    _this.insertAd.onError(errorCall_1);
                    _this.insertAd.onLoad(loadCall_1);
                };
                var loadCall_1 = function (res) {
                    console.log("插屏广告 加载成功", res);
                    _this.insertAd.offError(errorCall_1);
                    _this.insertAd.offLoad(loadCall_1);
                    showCall_1();
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                };
                var showCall_1 = function () {
                    _this.insertAd.show().then(function () {
                        console.log("插屏广告 显示成功");
                        data.successFun && data.successFun();
                        ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                    }).catch(function (err) {
                        console.warn("插屏广告 显示失败", err);
                        ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                        errorCall_1(err);
                    });
                };
                var closeCall_1 = function (res) {
                    console.log("插屏广告关闭", res);
                    data.closeFun && data.closeFun();
                    if (_this.insertAd) {
                        _this.insertAd.offLoad(loadCall_1);
                        _this.insertAd.offError(errorCall_1);
                        _this.insertAd.offClose(closeCall_1);
                        _this.insertAd.destroy();
                    }
                    _this.insertAd = null;
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                };
                var errorCall_1 = function (err) {
                    console.log("插屏广告错误", err);
                    data.errorFun && data.errorFun();
                    if (_this.insertAd) {
                        _this.insertAd.offError(errorCall_1);
                        _this.insertAd.offClose(closeCall_1);
                        _this.insertAd.destroy && _this.insertAd.destroy();
                    }
                    _this.insertAd = null;
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                };
                if (!this.insertAd) {
                    createCall();
                }
                else {
                    showCall_1();
                }
                this.insertAd.onClose(closeCall_1);
            }
            else {
                qq.showModal({
                    title: "提示",
                    content: "当前QQ版本过低，无法使用插屏广告，请升级到最新QQ版本后重试。"
                });
            }
        };
        MiniManeger_Als.prototype.showMoreGamesModal = function () {
            var appLaunchOptions = [];
            for (var i = 0, len = Als_GameData.getInstance().weCatMiniIconsInfo.length; i < len; i++) {
                appLaunchOptions.push({
                    appId: Als_GameData.getInstance().weCatMiniIconsInfo[i].ad_appid,
                    query: "",
                    extraData: {}
                });
            }
            platform.showMoreGamesModal({
                appLaunchOptions: appLaunchOptions,
                success: function (res) {
                    console.log("success", res.errMsg);
                },
                fail: function (res) {
                    console.log("fail", res.errMsg);
                },
                complete: function (res) {
                    console.log("complete", res.errMsg);
                }
            });
        };
        MiniManeger_Als.prototype.createGuessLike = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, guessLike;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatformDY.gameListInfos;
                                        if (data == null) {
                                            data = Als_GameData.getInstance().weCatMiniIconsInfo;
                                        }
                                        if (!(data && data.length <= 0)) return [3, 2];
                                        return [4, PlatformDY.getGameList()];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        guessLike = null;
                                        if (data.length <= 0) {
                                            resolve(guessLike);
                                            return [2];
                                        }
                                        console.log("data(GuessLike) ->", data);
                                        guessLike = parent.getChildByName('GuessLike');
                                        if (guessLike == null) {
                                            guessLike = new GuessLike_Als("game/uiView/GuessLike.json", "game/uiView/GuessLikeItem.json", data, 240);
                                            parent.addChild(guessLike);
                                        }
                                        guessLike.name = 'GuessLike';
                                        guessLike.mouseThrough = true;
                                        guessLike.x = (Laya.stage.width - guessLike.width) / 2;
                                        guessLike.y = Laya.stage.height - guessLike.height;
                                        resolve(guessLike);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        MiniManeger_Als.prototype.reportMonitorSome = function (name, value) {
        };
        MiniManeger_Als.prototype.wxPushMsg = function () {
            if (this.bPushMsgShowFlagTen && this.bPushMsgShowFlagChooseLevel) {
                return;
            }
            if (DeviceUtil.isWXMiniGame()) {
                window["wx"].requestSubscribeMessage({
                    tmplIds: ["lLzwoD67W2rWzLRHR-gSd2mHbKukPycirB99W8pe9e0"],
                    success: function (res) {
                        console.log(res);
                        var str = res["lLzwoD67W2rWzLRHR-gSd2mHbKukPycirB99W8pe9e0"];
                        console.log("str = ", str);
                        if (str == "accept") {
                            MiniManeger_Als.saveOpenID();
                        }
                    }, fail: function (e) {
                        console.log("1", e);
                    }
                });
            }
        };
        MiniManeger_Als.saveOpenID = function () {
            var gameId = Als_GameData.getInstance().gameId;
            var openId = Als_GameData.getInstance().strOpenIDWx;
            var strPl = "WeCat";
            var msg = {};
            msg.msg_type = "26";
            msg.msg_data = {
                "gameid": gameId,
                "openid": openId,
                "platform": strPl
            };
            HttpMgr$1.getInstance().sendHttp(MiniManeger_Als.URLPUSHMSG, msg, MiniManeger_Als.saveOpenIDSuccess, MiniManeger_Als.saveOpenIDFaild);
        };
        MiniManeger_Als.saveOpenIDSuccess = function (data) {
            var code = data["error_code"];
            if (code == "0") {
                console.warn("saveOpenID Success!");
            }
            else {
                console.warn("saveOpenID Faild!");
            }
        };
        MiniManeger_Als.saveOpenIDFaild = function () {
        };
        MiniManeger_Als.prototype.checkCityInfo = function () {
            if (!BaseConst.infos.gameInfo.region) {
                return;
            }
            if (!DeviceUtil.isQQMiniGame()) {
                return;
            }
            HttpMgr$1.getInstance().sendHttpTemp(this.strApiUrl, null, function (data) {
                console.log("regioninfo = ", data);
                var strRegion = data;
                var nLen = BaseConst.infos.gameInfo.region.length;
                var strDataTemp = "";
                for (var i = 0; i < nLen; ++i) {
                    strDataTemp = BaseConst.infos.gameInfo.region[i];
                    if (strRegion.indexOf(strDataTemp) != -1) {
                        BaseConst.infos.gameInfo.succShowBox = 0;
                        BaseConst.infos.gameInfo.siginC = 0;
                        BaseConst.infos.gameInfo.boxWDJ = 0;
                        break;
                    }
                }
            }, function () {
            });
        };
        MiniManeger_Als.prototype.isWxMiniGameForOperReq = function () {
            return DeviceUtil.isWXMiniGame();
        };
        MiniManeger_Als.URLPUSHMSG = "https://littlegame.32yx.com/SaveOpenID.fcgi";
        return MiniManeger_Als;
    }());

    var AddPsView_Als = (function (_super) {
        __extends(AddPsView_Als, _super);
        function AddPsView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "AddPsView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.skin = "game/uiView/AddSpView.json";
            return _this;
        }
        AddPsView_Als.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        AddPsView_Als.prototype.refreshPsShow = function () {
            this._nPsAdd = 5;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(3);
            if (stGameConfig) {
                this._nPsAdd = parseInt(stGameConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.spNum, this._nPsAdd.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        };
        AddPsView_Als.prototype.initView = function () {
            MiniManeger_Als.instance.showInterstitialAd();
            ViewChangeManager_Als.getInstance().CommonView.rmobtev_alt();
            MiniManeger_Als.instance.showBannerAd();
            this.refreshPsLLView_Als();
            this.refreshPsShow();
            this.onThinks();
        };
        AddPsView_Als.prototype.onThinks = function () {
            var _this = this;
            this.btLable.visible = false;
            Laya.timer.once(2000, this, function () {
                _this.btLable.visible = true;
            });
        };
        AddPsView_Als.prototype.onClick = function (evt) {
            Als_SoundManager.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.imageBtGet:
                    this.addPsWv_Als();
                    break;
                case this.btLable:
                    this.onClose();
                    break;
            }
        };
        AddPsView_Als.prototype.addEvent = function () {
            this.registerEvent(this.imageBtGet, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btLable, Laya.Event.CLICK, this.onClick, this);
        };
        AddPsView_Als.prototype.addPsWv_Als = function () {
            var _this = this;
            MiniManeger_Als.instance.playViderAd({
                successFun: function () {
                    ViewChangeManager_Als.getInstance().CommonView.abte_alt();
                    _this.addPsF_Als();
                }
            });
        };
        AddPsView_Als.prototype.addPsF_Als = function () {
            PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Sp, this._nPsAdd);
            AddPsView_Als.bShowMoreGame = false;
            PlayerDataManager_Als.getInstance().addWatchVideoAddSpTime();
            this.removeSelf();
        };
        AddPsView_Als.prototype.onClose = function () {
            ViewChangeManager_Als.getInstance().CommonView.abte_alt();
            AddPsView_Als.bShowMoreGame = false;
            this.removeSelf();
        };
        AddPsView_Als.prototype.refreshUp = function () {
            var nLen = this.box_up.numChildren > PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime ? PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime : this.box_up.numChildren;
            for (var i = 0; i < nLen; ++i) {
                var pData = this.box_up.getChildAt(i);
                if (pData) {
                    pData.visible = true;
                }
            }
        };
        AddPsView_Als.prototype.refreshMid = function () {
            var nLastCount = PlayerDataManager_Als.getInstance().getPsLimitlessStateLastTime();
            if (nLastCount <= 0) {
                this.box_lable.visible = false;
            }
            else {
                this.lable_number.text = nLastCount.toString();
            }
        };
        AddPsView_Als.prototype.refreshPsLLView_Als = function () {
            this.refreshUp();
            this.refreshDown();
            this.refreshMid();
        };
        AddPsView_Als.prototype.refreshDown = function () {
            var nLen = this.box_down.numChildren > PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime ? PlayerDataManager_Als.getInstance().pNewFuncPsLimitless.nCurTime : this.box_down.numChildren;
            for (var i = 0; i < nLen; ++i) {
                var pData = this.box_down.getChildAt(i);
                if (pData) {
                    pData.visible = true;
                }
            }
        };
        AddPsView_Als.bShowMoreGame = false;
        return AddPsView_Als;
    }(PopBaseScene));

    var GameManager_Als = (function () {
        function GameManager_Als() {
            this.isMiniGame = false;
        }
        Object.defineProperty(GameManager_Als, "instance", {
            get: function () {
                if (GameManager_Als.ins == null) {
                    GameManager_Als.ins = new GameManager_Als();
                }
                return GameManager_Als.ins;
            },
            enumerable: true,
            configurable: true
        });
        GameManager_Als.prototype.powerIsEnough = function () {
            var _this = this;
            TipsManager.getInstance().showDefaultTips("体力不足");
            ViewChangeManager_Als.getInstance().showBufferLoadingView();
            ResUtil.getIntance().loadGroups(["adsp"], function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    ViewManager.getInstance().showView(AddPsView_Als);
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                    return [2];
                });
            }); });
        };
        GameManager_Als.prototype.parseShopTimeShow = function (time, en) {
            var min = time / 60;
            var hour = min / 60;
            var day = hour / 24;
            var str = '';
            if (day >= 1) {
                str = day.toFixed(2) + '天';
            }
            else if (hour >= 1) {
                str = hour.toFixed(2) + '小时';
            }
            else {
                str = min.toFixed(2) + '分钟';
            }
            if (en) {
                str = str.replace("天", 'day');
                str = str.replace("小时", 'hour');
                str = str.replace("分钟", 'min');
            }
            return str;
        };
        GameManager_Als.prototype.loadCongigs = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                var jsonUrl = url;
                Laya.loader.load(jsonUrl, Laya.Handler.create(_this, function (res) {
                    if (typeof (res) == "string") {
                        res = JSON.parse(res);
                    }
                    resolve(Utils.copy(res));
                }));
            });
        };
        return GameManager_Als;
    }());
    window['GameManager'] = GameManager_Als;

    var InviteItem_Als = (function (_super) {
        __extends(InviteItem_Als, _super);
        function InviteItem_Als(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteItem";
            _this.data = _data;
            _this.skin = "game/uiView/InviteFriendsIndexView.json";
            return _this;
        }
        InviteItem_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        InviteItem_Als.prototype.adaptationStage = function () {
            this.size(735, 128);
        };
        InviteItem_Als.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        InviteItem_Als.prototype.addEvent = function () {
            this.img_get.on(Laya.Event.CLICK, this, this.onGet);
            this.img_null.on(Laya.Event.CLICK, this, this.onInvite);
        };
        InviteItem_Als.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        InviteItem_Als.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    data = this.data;
                    this.img_get.visible = this.img_no.visible = false;
                    BitmapLabelUtils.setLabel(this.img_index, data.id + "", "resource/assets/img/ui/invite/invite_number1/invite_number1_", -10, ".png", "center");
                    if (data.head && data.head != "") {
                        this.img_head.skin = data.head;
                    }
                    else {
                        this.img_head.skin = "";
                    }
                    BitmapLabelUtils.setLabel(this.img_award, data.reward + "", "resource/assets/img/common/level_number1/level_number1_", 0);
                    if (data.lingqued) {
                        this.img_get.visible = true;
                        this.img_get.mouseEnabled = false;
                        this.img_get.skin = "resource/assets/img/ui/invite/invite_button_2.png";
                        this.img_null.visible = false;
                        this.img_head.visible = true;
                    }
                    else {
                        if (data.canLingqu) {
                            this.img_get.visible = true;
                            this.img_get.mouseEnabled = true;
                            this.img_get.skin = "resource/assets/img/ui/invite/invite_button_1.png";
                            this.img_null.visible = false;
                            this.img_head.visible = true;
                        }
                        else {
                            this.img_no.visible = true;
                            this.img_null.visible = true;
                            this.img_head.visible = false;
                        }
                    }
                    return [2];
                });
            });
        };
        InviteItem_Als.prototype.onGet = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Sp, this.data.reward);
            PlayerDataManager_Als.getInstance().stPlayerDataBase.inviteId.push(this.data.id);
            PlayerDataManager_Als.getInstance().SaveData();
            EventMgr.getInstance().sendEvent(GameEvent_Als.REFRESH_INVITE);
        };
        InviteItem_Als.prototype.onInvite = function () {
        };
        InviteItem_Als.prototype.removeEvent = function () {
            this.img_get.off(Laya.Event.CLICK, this, this.onGet);
            this.img_null.off(Laya.Event.CLICK, this, this.onInvite);
        };
        InviteItem_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
            this.removeEvent();
        };
        return InviteItem_Als;
    }(BaseSceneUISkin));

    var InviteView_Als = (function (_super) {
        __extends(InviteView_Als, _super);
        function InviteView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this.skin = "game/uiView/InviteFriendsView.json";
            return _this;
        }
        InviteView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        InviteView_Als.prototype.initList = function () {
            this.boxInva.removeChildren();
            this.panelInva.vScrollBarSkin = "";
            this.panelInva.elasticEnabled = true;
            this.panelInva.vScrollBar.elasticDistance = 100;
            this.panelInva.vScrollBar.elasticBackTime = 100;
        };
        InviteView_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
            MiniManeger_Als.instance.showBannerAd();
        };
        InviteView_Als.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose_asls);
            this.imageBtInvite.on(Laya.Event.CLICK, this, this.onInvite_als);
            EventMgr.getInstance().addEvent(GameEvent_Als.REFRESH_INVITE, this, this.refreshUI_als);
        };
        InviteView_Als.prototype.initView = function () {
            this.getInvitePlayer_als();
            this.initList();
        };
        InviteView_Als.prototype.getInvitePlayer_als = function () {
            var _this = this;
            InviteManager_Als.getInstance().selectInfo(function (code) {
                if (code == '0') {
                    _this.refreshUI_als();
                }
            }, this);
        };
        InviteView_Als.prototype.refreshUI_als = function () {
            var dataArr = InviteManager_Als.getInstance().getInviteAwardData();
            console.log("InviteView >>>>>>> refreshUI", dataArr);
            for (var i = 0, len = dataArr.length; i < len; i++) {
                var item = this.boxInva.getChildAt(i);
                if (item) {
                    item.setData(dataArr[i]);
                }
                else {
                    item = new InviteItem_Als(dataArr[i]);
                    item.x = 0;
                    item.y = (128 + 20) * i;
                    this.boxInva.addChild(item);
                }
            }
        };
        InviteView_Als.prototype.onInvite_als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            MiniManeger_Als.instance.bFlagDouYin = false;
            MiniManeger_Als.instance.shareAppMessage();
        };
        InviteView_Als.prototype.onClose_asls = function () {
            this.removeEvent();
            Als_SoundManager.getInstance().playEffect("button", 1);
            this.removeUs();
        };
        InviteView_Als.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose_asls);
            this.imageBtInvite.off(Laya.Event.CLICK, this, this.onInvite_als);
            EventMgr.getInstance().removeEvent(GameEvent_Als.REFRESH_INVITE, this, this.refreshUI_als);
        };
        InviteView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return InviteView_Als;
    }(BaseSceneUISkinPopView));

    var BasePopScene = (function (_super) {
        __extends(BasePopScene, _super);
        function BasePopScene(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "BasePopScene";
            _this.viewData_ = data;
            return _this;
        }
        BasePopScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                this.initMiniGame();
            }
        };
        BasePopScene.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                this.initMiniGame();
            }
        };
        BasePopScene.prototype.initMiniGame = function () {
        };
        BasePopScene.prototype.initView = function () {
        };
        BasePopScene.prototype.addEvent = function () {
        };
        BasePopScene.prototype.removeEvent = function () {
        };
        BasePopScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        BasePopScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return BasePopScene;
    }(BaseSceneUISkinPopView));

    var LotteryPopScene = (function (_super) {
        __extends(LotteryPopScene, _super);
        function LotteryPopScene(data) {
            var _this = _super.call(this, data) || this;
            _this.className_key = "LotteryPopScene";
            _this.viewData_ = data;
            _this.skin = "game/uiView/lottery/LotterPopScene.json";
            return _this;
        }
        LotteryPopScene.prototype.popAward = function () {
            var data = this.viewData_;
            if (data.type == 1) {
                this.icon_title.skin = 'resource/assets/img/ui/qq/lottery/luckyturntable_icon_2.png';
            }
            else {
                this.icon_title.skin = 'resource/assets/img/ui/qq/lottery/luckyturntable_icon_1.png';
            }
            this.img_double.visible = BaseConst.infos.gameInfo.openPsAward == 0;
            if (!this.img_double.visible) {
                BitmapLabelUtils.setLabel(this.box_count, data.count * 2 + '', "resource/assets/img/ui/qq/lottery/luckyturntable_number/luckyturntable_number_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.box_count, data.count + '', "resource/assets/img/ui/qq/lottery/luckyturntable_number/luckyturntable_number_", 0, ".png", "left");
            }
        };
        LotteryPopScene.prototype.initView = function () {
            this.popAward();
        };
        LotteryPopScene.prototype.addEvent = function () {
            this.btn_rfeceive.on(Laya.Event.CLICK, this, this.onRecieve);
            this.box_double.on(Laya.Event.CLICK, this, this.onSelected);
            this.btn_double.on(Laya.Event.CLICK, this, this.onDoubleRecieve);
        };
        LotteryPopScene.prototype.onSelected = function () {
            this.img_double.visible = !this.img_double.visible;
            if (!this.img_double.visible) {
                BitmapLabelUtils.setLabel(this.box_count, this.viewData_.count * 2 + '', "resource/assets/img/ui/qq/lottery/luckyturntable_number/luckyturntable_number_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.box_count, this.viewData_.count + '', "resource/assets/img/ui/qq/lottery/luckyturntable_number/luckyturntable_number_", 0, ".png", "left");
            }
        };
        LotteryPopScene.prototype.removeSelf = function () {
            this.box_count.destroyChildren();
            return _super.prototype.removeSelf.call(this);
        };
        LotteryPopScene.prototype.getAward = function (mul) {
            PlayerDataManager_Als.getInstance().AddGoods(this.viewData_.type, this.viewData_.count * mul);
            this.removeSelf();
        };
        LotteryPopScene.prototype.onRecieve = function () {
            if (!this.img_double.visible) {
                this.onDoubleRecieve();
            }
            else {
                this.getAward(1);
            }
        };
        LotteryPopScene.prototype.onDoubleRecieve = function () {
            var self = this;
            MiniManeger_Als.instance.playViderAd({
                successFun: function () {
                    self.getAward(2);
                }
            });
        };
        LotteryPopScene.prototype.removeEvent = function () {
            this.btn_rfeceive.off(Laya.Event.CLICK, this, this.onRecieve);
            this.box_double.off(Laya.Event.CLICK, this, this.onSelected);
            this.btn_double.off(Laya.Event.CLICK, this, this.onDoubleRecieve);
        };
        return LotteryPopScene;
    }(BasePopScene));

    var LotteryScene = (function (_super) {
        __extends(LotteryScene, _super);
        function LotteryScene(data) {
            var _this = _super.call(this, data) || this;
            _this.className_key = "LotteryScene";
            _this.versionRandom = "";
            _this.lotteryData = [
                { "id": "3", "item": "0|0", "des": "再来一次", "worth": "2000" },
                { "id": "4", "item": "2|200", "des": "200金币", "worth": "1000" },
                { "id": "5", "item": "1|6", "des": "6体力", "worth": "500" },
                { "id": "6", "item": "0|0", "des": "感谢参与", "worth": "1500" },
                { "id": "7", "item": "2|150", "des": "150金币", "worth": "1000" },
                { "id": "8", "item": "1|4", "des": "4体力", "worth": "500" },
                { "id": "1", "item": "2|50", "des": "50金币", "worth": "2000" },
                { "id": "2", "item": "1|2", "des": "2体力", "worth": "1500" }
            ];
            _this.isLotterying = false;
            _this.tn = 5;
            _this.totalNum = 8;
            _this.versionRandom = "?v=" + Date.now();
            _this.skin = "game/uiView/lottery/LotteryScene.json";
            return _this;
        }
        LotteryScene.prototype.getLotteryConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            Laya.loader.load("resource/assets/config/LotteryConfig.json" + _this.versionRandom, Laya.Handler.create(_this, function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.lotteryData = Utils.copy(data);
                                    resolve(data);
                                    return [2];
                                });
                            }); }));
                        })];
                });
            });
        };
        LotteryScene.prototype.initLottery = function () {
            return __awaiter(this, void 0, void 0, function () {
                var i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getLotteryConfig()];
                        case 1:
                            _a.sent();
                            if (!this.weightArr) {
                                this.weightArr = [];
                                for (i = 0, len = this.lotteryData.length; i < len; i++) {
                                    this.weightArr.push(parseInt(this.lotteryData[i].worth));
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        LotteryScene.prototype.getRandomByWeightArr = function (oArr) {
            var sum = 0;
            var rand = 0;
            var result = 0;
            for (var i in oArr) {
                sum += Number(oArr[i]);
            }
            for (var i in oArr) {
                rand = Math.floor(Math.random() * sum + 1);
                if (oArr[i] >= rand) {
                    result = Number(i);
                    break;
                }
                else {
                    sum -= oArr[i];
                }
            }
            return result;
        };
        LotteryScene.prototype.onLottery = function () {
            if (this.isLotterying) {
                return;
            }
            this.isLotterying = true;
            var awardIndex = this.getRandomByWeightArr(this.weightArr);
            this.startLottery(awardIndex);
            PlayerDataManager_Als.getInstance().stPlayerDataBase.nLotteryTimeLast = Date.now();
            PlayerDataManager_Als.getInstance().stPlayerDataBase.nLotteryCount += 1;
            PlayerDataManager_Als.getInstance().SaveData();
        };
        LotteryScene.prototype.clickLottery = function () {
            var _this = this;
            if (this.img_video.visible) {
                if (this.isLotterying) {
                    return;
                }
                MiniManeger_Als.instance.playViderAd({
                    successFun: function () {
                        _this.onLottery();
                    }
                });
            }
            else {
                this.onLottery();
            }
        };
        LotteryScene.prototype.startLottery = function (index) {
            var _this = this;
            this.img_lottery.rotation = this.img_lottery.rotation % 360;
            var ro = Utils.random(-10, 10);
            Laya.Tween.clearAll(this.img_lottery);
            console.log(index);
            var roa = -index * 360 / this.totalNum - (360 / this.totalNum / 2) + 3600;
            var timeDelay = 1400 * this.tn;
            Laya.Tween.to(this.img_lottery, { rotation: roa }, timeDelay, Laya.Ease.strongInOut, Laya.Handler.create(this, function () {
                Laya.Tween.clearAll(_this.img_lottery);
                _this.isLotterying = false;
                var data = _this.lotteryData[index];
                _this.checkLottery(data);
            }));
        };
        LotteryScene.prototype.checkCanFreeLottery = function () {
            var nCurTime = GameLogicProcessingManager_Als.GetCurTime();
            if (Utils.judgeIsOnTheSameDay(PlayerDataManager_Als.getInstance().stPlayerDataBase.nLotteryTimeLast, nCurTime)) {
                if (PlayerDataManager_Als.getInstance().stPlayerDataBase.nLotteryCount == 0) {
                    this.img_video.visible = false;
                }
                else {
                    this.img_video.visible = true;
                }
            }
            else {
                this.img_video.visible = false;
            }
        };
        LotteryScene.prototype.checkLottery = function (data) {
            console.log("lottery>>>", data);
            var id = data.id;
            if (id == 3 + '') {
                this.onLottery();
            }
            else if (id == 6 + '') {
                TipsManager.getInstance().showDefaultTips("感谢参与");
            }
            else {
                var arr = data.item.split("|");
                var type = arr[0];
                var count = arr[1];
                ViewManager.getInstance().showView(LotteryPopScene, { type: type, count: count });
            }
            this.img_video.visible = true;
        };
        LotteryScene.prototype.initMiniGame = function () {
        };
        LotteryScene.prototype.initView = function () {
            this.checkCanFreeLottery();
            this.initLottery();
        };
        LotteryScene.prototype.addEvent = function () {
            this.btn_lottery.on(Laya.Event.CLICK, this, this.clickLottery);
            this.btn_close.on(Laya.Event.CLICK, this, this.removeSelf);
        };
        LotteryScene.prototype.removeEvent = function () {
            this.btn_lottery.off(Laya.Event.CLICK, this, this.clickLottery);
            this.btn_close.off(Laya.Event.CLICK, this, this.removeSelf);
        };
        LotteryScene.prototype.removeSelf = function () {
            if (this.isLotterying) {
                return;
            }
            return _super.prototype.removeSelf.call(this);
        };
        LotteryScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return LotteryScene;
    }(BasePopScene));

    var LevelViewItem_Als = (function (_super) {
        __extends(LevelViewItem_Als, _super);
        function LevelViewItem_Als(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelViewItem";
            _this._nCurLeve = data_;
            _this.width = 285;
            _this.height = 316;
            _this.pivotX = 285 / 2;
            _this.pivotY = 316 / 2;
            _this.skin = "game/uiView/LevelIndexView.json";
            return _this;
        }
        LevelViewItem_Als.prototype.onDisable = function () {
            this.off(Laya.Event.CLICK, this, this.enterL_Als);
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this.openLIA_Als);
        };
        LevelViewItem_Als.prototype.onEnable = function () {
            this.on(Laya.Event.CLICK, this, this.enterL_Als);
        };
        LevelViewItem_Als.prototype.childrenCreated = function () {
            this.refreshV_Als();
        };
        LevelViewItem_Als.prototype.refresUIInfo = function () {
            BitmapLabelUtils.setLabel(this.levelNum, this._nCurLeve.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "center");
            if (this._nCurLeve <= PlayerDataManager_Als.getInstance().getCurLevelMax()) {
                this.spG.visible = true;
                this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_1.png");
            }
            else if (this._nCurLeve == PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevelForLevelView()) {
                this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_2.png");
                this._bAni_Als = true;
            }
            else {
                this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_3.png");
            }
        };
        LevelViewItem_Als.prototype.enterL_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (this._nCurLeve > PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevelForLevelView()) {
                TipsManager.getInstance().showDefaultTips("未解锁");
                return;
            }
            if (DeviceUtil.isWXMiniGame()) {
                if (!MiniManeger_Als.instance.bPushMsgShowFlagChooseLevel) {
                    MiniManeger_Als.instance.wxPushMsg();
                    MiniManeger_Als.instance.bPushMsgShowFlagChooseLevel = true;
                }
            }
            var nSpCost = 1;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (stGameConfig) {
                nSpCost = parseInt(stGameConfig.strValue);
            }
            var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            if (!b) {
                GameCenterManager_Als.getInstance().oppenAddSpView();
                return;
            }
            PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            this.enterOp_Als();
            this._pParentView_Alst.closeVWGTL_Als();
        };
        LevelViewItem_Als.prototype.refreshV_Als = function () {
            this.spG.visible = false;
            this._bAni_Als = false;
            this.refresUIInfo();
            this.openLIA_Als();
        };
        LevelViewItem_Als.prototype.setData = function (data_) {
            this._nCurLeve = data_;
            this.refreshV_Als();
        };
        LevelViewItem_Als.prototype.setPV_Als = function (_pParentView_Alst) {
            this._pParentView_Alst = _pParentView_Alst;
        };
        LevelViewItem_Als.prototype.enterOp_Als = function () {
            ViewChangeManager_Als.getInstance().gotoLevel(this._nCurLeve);
        };
        LevelViewItem_Als.prototype.openLIA_Als = function () {
            var _this = this;
            if (this._nCurLeve == PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel() && this._bAni_Als) {
                Laya.Tween.clearAll(this);
                Laya.Tween.to(this, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, function (args) {
                    Laya.Tween.to(_this, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(_this, function (args) {
                        Laya.timer.once(0, _this, _this.openLIA_Als);
                    }));
                }));
            }
            else {
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this.openLIA_Als);
            }
        };
        return LevelViewItem_Als;
    }(BaseUIScene));

    var LevelView_Als = (function (_super) {
        __extends(LevelView_Als, _super);
        function LevelView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelView";
            _this.skin = "game/uiView/LevelView.json";
            _this.xStart = 69 + 285 / 2;
            _this.xAdd = 44 + 285;
            _this.yStart = 316 / 2;
            _this.yAdd = 316 + 35;
            return _this;
        }
        LevelView_Als.prototype.addEvent = function () {
            this.registerEvent(this.imageBtHome, Laya.Event.CLICK, this.levelVRTH_Als, this);
        };
        LevelView_Als.prototype.initDataCommon = function () {
            this.levelPanel.vScrollBarSkin = "";
            this.levelPanel.elasticEnabled = true;
            this.levelPanel.vScrollBar.elasticDistance = 130;
            MiniManeger_Als.instance.showInterstitialAd();
            ViewChangeManager_Als.getInstance().CommonView.visible = false;
            MiniManeger_Als.instance.showBannerAd();
        };
        LevelView_Als.prototype.initItem = function (xStart, xAdd, yStart, yAdd) {
            for (var i = 0, len = PlayerDataManager_Als.getInstance().nMaxLevelCount; i < len; i++) {
                var item = this.levelBox.getChildAt(i);
                if (item) {
                    item.setData(i + 1);
                }
                else {
                    item = new LevelViewItem_Als(i + 1);
                    item.width = item.height = 210;
                    item.x = (i % 3) * xAdd + xStart;
                    item.y = Math.floor(i / 3) * yAdd + yStart;
                    this.levelBox.addChild(item);
                }
                item.setPV_Als(this);
            }
        };
        LevelView_Als.prototype.initView = function () {
            this.initDataCommon();
            this.initItem(this.xStart, this.xAdd, this.yStart, this.yAdd);
        };
        LevelView_Als.prototype.closeVWGTL_Als = function () {
            ViewChangeManager_Als.getInstance().CommonView.visible = true;
            this.removeSelf();
            LevelView_Als.pHomeView.removeSelf();
        };
        LevelView_Als.prototype.levelVRTH_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            ViewChangeManager_Als.getInstance().CommonView.visible = true;
            this.removeSelf();
        };
        return LevelView_Als;
    }(PopBaseScene));

    var SignView_Als = (function (_super) {
        __extends(SignView_Als, _super);
        function SignView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "SignView_Als";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.als_bIsRunning = false;
            _this.skin = "game/uiView/SignView.json";
            return _this;
        }
        SignView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        SignView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.als_bIsRunning = false;
            Laya.Tween.clearAll(this.imageBtSign);
            Laya.timer.clearAll(this);
        };
        SignView_Als.prototype.addEvent = function () {
            this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.spBtClose, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.boxDouble, Laya.Event.CLICK, this.onMousClck_Als, this);
        };
        SignView_Als.prototype.initView = function () {
            this.als_nCurTime = 0;
            this.als_bDouble = false;
            this.als_bIsRunning = true;
            this.refhSD_Als();
            this.refhSV_Als();
            this.refhSiReBt_Als();
            this.initDb_Als();
            MiniManeger_Als.instance.showBannerAd();
        };
        SignView_Als.prototype.refhSD_Als = function () {
            this.als_nCurTime = GameLogicProcessingManager_Als.GetCurTime();
            if (Utils.judgeIsOnTheSameDay(PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignTimeLast, this.als_nCurTime)) {
                this.btDouble.visible = false;
                return;
            }
            if (PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex >= 7) {
                PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex = 0;
            }
        };
        SignView_Als.prototype.onMousClck_Als = function (evt) {
            Als_SoundManager.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.spBtClose:
                    this.removeSelf();
                    break;
                case this.imageBtSign:
                    this.onSid_Als();
                    break;
                case this.boxDouble:
                    this.onSigDb_Als();
                    break;
            }
        };
        SignView_Als.prototype.onSigDb_Als = function () {
            this.spDouble.visible = !this.spDouble.visible;
            this.als_bDouble = !this.spDouble.visible;
        };
        SignView_Als.prototype.refreshSignInfoSix = function (stImageTemp, stData) {
            var stSpriteGoods = stImageTemp.getChildAt(2);
            if (stSpriteGoods) {
                var str = '';
                if (stData.nType == 1) {
                    str = "resource/assets/img/common/maininterface_icon_7.png";
                }
                else if (stData.nType == 2) {
                    str = "resource/assets/img/common/maininterface_icon_6.png";
                }
                stSpriteGoods.loadImage(str);
            }
            var stBox = stImageTemp.getChildByName("boxWorld");
            if (stBox) {
                var spNum = stBox.getChildByName("spWorld");
                if (spNum) {
                    BitmapLabelUtils.setLabel(spNum, stData.nCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
                }
            }
        };
        SignView_Als.prototype.isSigned = function (stImageTemp, i) {
            var spSigned = stImageTemp.getChildByName("spSigned");
            if (spSigned) {
                if (i < PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex) {
                    spSigned.visible = true;
                }
                else {
                    spSigned.visible = false;
                }
            }
        };
        SignView_Als.prototype.initDb_Als = function () {
            if (BaseConst.infos.gameInfo.openPsAward && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.spDouble.visible = false;
            }
            else {
                this.spDouble.visible = true;
            }
            this.als_bDouble = !this.spDouble.visible;
        };
        SignView_Als.prototype.refhSV_Als = function () {
            var arySignData = ConfigManager_Als.getInstance().getSignDataAll();
            var nLen = arySignData.length;
            var stImageTemp = null;
            for (var i = 0; i < nLen; ++i) {
                stImageTemp = this.boxItem.getChildAt(i);
                if (stImageTemp) {
                    if (i < 6) {
                        this.refreshSignInfoSix(stImageTemp, arySignData[i]);
                    }
                    else {
                        BitmapLabelUtils.setLabel(this.spWorldLeft, arySignData[i].nCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
                        BitmapLabelUtils.setLabel(this.spWorldRight, arySignData[i].nCount7.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
                    }
                    this.isSigned(stImageTemp, i);
                }
            }
        };
        SignView_Als.prototype.onSid_Als = function () {
            if (this.als_bDouble) {
                var self_1 = this;
                MiniManeger_Als.instance.playViderAd({
                    successFun: function () {
                        self_1.pSData_Als();
                    }
                });
            }
            else {
                this.pSData_Als();
            }
        };
        SignView_Als.prototype.refhSiReBt_Als = function () {
            this.als_nCurTime = GameLogicProcessingManager_Als.GetCurTime();
            this.boxDouble.visible = true;
            this.btDouble.visible = true;
            this.spTomorrow.visible = true;
            this.imageBtSign.visible = true;
            if (Utils.judgeIsOnTheSameDay(PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignTimeLast, this.als_nCurTime)) {
                this.boxDouble.visible = false;
                this.btDouble.visible = false;
                this.imageBtSign.visible = false;
            }
            else {
                this.spTomorrow.visible = false;
                this.startSIBTSA_Als();
            }
        };
        SignView_Als.prototype.refreshSignUIData = function () {
            var stSignData = ConfigManager_Als.getInstance().getSignDataBySignID(PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex);
            if (stSignData) {
                var nValue = stSignData.nCount;
                if (this.als_bDouble) {
                    nValue *= 2;
                }
                PlayerDataManager_Als.getInstance().AddGoods(stSignData.nType, nValue);
                if (stSignData.nType == GoodsType.enum_GoodsType_Sp) {
                    TipsManager.getInstance().showDefaultTips("体力+" + nValue.toString());
                }
                if (PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex == 6) {
                    var nValue_1 = stSignData.nCount7;
                    if (this.als_bDouble) {
                        nValue_1 *= 2;
                    }
                    PlayerDataManager_Als.getInstance().AddGoods(stSignData.nType7, nValue_1);
                }
            }
        };
        SignView_Als.prototype.startSIBTSA_Als = function () {
            Laya.timer.clearAll(this.imageBtSign);
            AnimationManager_Als.instance.zoomTweena(this.imageBtSign, this.imageBtSign);
        };
        SignView_Als.prototype.pSData_Als = function () {
            this.refreshSignUIData();
            PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignIndex += 1;
            PlayerDataManager_Als.getInstance().stPlayerDataBase.nSignTimeLast = GameLogicProcessingManager_Als.GetCurTime();
            PlayerDataManager_Als.getInstance().SaveData();
            this.refhSV_Als();
            this.refhSiReBt_Als();
        };
        return SignView_Als;
    }(PopBaseScene));

    var GameHomeView_Als = (function (_super) {
        __extends(GameHomeView_Als, _super);
        function GameHomeView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameHomeView";
            _this.bEnterGameHomeNotNewPlayer = false;
            _this.skin = "game/GameHomeView.json";
            _this.bIsRunning = false;
            _this.bWeCatShow = false;
            return _this;
        }
        GameHomeView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.initMiniGame();
        };
        GameHomeView_Als.prototype.onRemoved = function () {
            this.bIsRunning = false;
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.Tween.clearAll(this.imageBtStartGame);
        };
        GameHomeView_Als.prototype.initMiniGame = function () {
            this.btn_more.visible = false;
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
                this.btn_more.visible = true;
                this.more_games.visible = this.back_btn.visible = false;
            }
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                this.imageWeCatMoreGame.visible = true;
                this.more_games.visible = true;
                this.getChildByName("imageHead").visible = false;
            }
            var self = this;
            if (!self.guessLike && MiniManeger_Als.instance.isWxMiniGameForOperReq() && BaseConst.infos.gameInfo.openPsAward == 1) {
                MiniManeger_Als.instance.createGuessLike(self).then(function (guessLike) {
                    if (!guessLike) {
                        return;
                    }
                    self.guessLike = guessLike;
                    self.guessLike.x = (Laya.stage.width - self.guessLike.width) / 2;
                    self.guessLike.y = 300;
                });
            }
        };
        GameHomeView_Als.prototype.onAddStage = function () {
            this.initView();
            ViewChangeManager_Als.getInstance().restartEnterGameHome();
        };
        GameHomeView_Als.prototype.onColorSign_als = function () {
            var _this = this;
            MiniManeger_Als.instance.addColorSign({
                success: function (res) {
                    console.log(res);
                    _this.btn_colorSign.visible = false;
                }
            });
        };
        GameHomeView_Als.prototype.onLottery_als = function () {
            var _this = this;
            ViewChangeManager_Als.getInstance().showBufferLoadingView();
            ResUtil.getIntance().loadGroups(["lottery"], function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    ViewManager.getInstance().showView(LotteryScene);
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                    return [2];
                });
            }); });
        };
        GameHomeView_Als.prototype.addEvent = function () {
            this.registerEvent(this.btn_lottery, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.btn_colorSign, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtStartGame, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.btn_more, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtChoseLevel, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtInvital, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageWeCatMoreGame, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.more_games, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.back_btn, Laya.Event.CLICK, this.onMousClck_Als, this);
        };
        GameHomeView_Als.prototype.onMousClck_Als = function (evt) {
            Als_SoundManager.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.btn_lottery:
                    this.onLottery_als();
                    break;
                case this.btn_colorSign:
                    this.onColorSign_als();
                    break;
                case this.imageBtStartGame:
                    this.gameHomeStartGame_als();
                    break;
                case this.btn_more:
                    this.onMoreGame_als();
                    break;
                case this.imageBtChoseLevel:
                    this.openLevelView_als();
                    break;
                case this.imageBtSign:
                    this.openSignView_als();
                    break;
                case this.imageBtShare:
                    this.onGameHomeShare_als();
                    break;
                case this.imageBtInvital:
                    this.onInvite_als();
                    break;
                case this.imageWeCatMoreGame:
                    this.weCatViewOper_als();
                    break;
                case this.more_games:
                    this.wxShowMoreGame_als();
                    break;
                case this.back_btn:
                    this.wxShowMoreGame_als();
                    break;
            }
        };
        GameHomeView_Als.prototype.onMoreGame_als = function () {
        };
        GameHomeView_Als.prototype.wxShowMoreGame_als = function () {
            ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
        };
        GameHomeView_Als.prototype.gameHomeStartGame_als = function () {
            var nSpCost = 1;
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(8);
            if (stGameConfig) {
                nSpCost = parseInt(stGameConfig.strValue);
            }
            var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            if (!b) {
                GameManager_Als.instance.powerIsEnough();
                return;
            }
            PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Sp, nSpCost);
            if (DeviceUtil.isTTMiniGame()) {
                MiniManeger_Als.instance.hideBanner();
            }
            this.enterOper();
            this.removeSelf();
        };
        GameHomeView_Als.prototype.enterOper = function () {
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()
                && PlayerDataManager_Als.getInstance().getCurLevel() >= BaseConst.infos.gameInfo.splevel
                && BaseConst.infos.gameInfo.openPsAward == 1) {
                ViewChangeManager_Als.getInstance().CurLevelBase.startGame();
            }
            else {
                ViewChangeManager_Als.getInstance().CurLevelBase.startGame();
            }
        };
        GameHomeView_Als.prototype.initView = function () {
            MiniManeger_Als.instance.showBannerAd();
            this.bIsRunning = true;
            this.startGameAni_als();
            this.PlInitView_als();
            this.showSignView_als();
            BitmapLabelUtils.setLabel(this.spLevelNum, PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel().toString(), "resource/assets/img/ui/gamehome/maininterface_number1/maininterface_number1_", 0, ".png", "center");
            if (DeviceUtil.isQQMiniGame()) {
                this.btn_lottery.visible = true;
                var flag = MiniManeger_Als.instance.isColorSignExistSync();
                if (!flag) {
                    this.btn_colorSign.visible = true;
                }
                else {
                    this.btn_colorSign.visible = false;
                }
            }
            if (BaseConst.infos.gameInfo.openPsAward == 0) {
                this.btn_lottery.visible = false;
            }
        };
        GameHomeView_Als.prototype.openSignView_als = function () {
            var _this = this;
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_SIGIN, 1);
            ViewChangeManager_Als.getInstance().showBufferLoadingView();
            ResUtil.getIntance().loadGroups(["sign"], function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    ViewManager.getInstance().showView(SignView_Als);
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                    return [2];
                });
            }); });
        };
        GameHomeView_Als.prototype.openLevelView_als = function () {
            var _this = this;
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_LEVEL, 1);
            Als_SoundManager.getInstance().playEffect("button", 1);
            ViewChangeManager_Als.getInstance().showBufferLoadingView();
            ResUtil.getIntance().loadGroups(["levelview"], function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    LevelView_Als.pHomeView = this;
                    ViewManager.getInstance().showView(LevelView_Als);
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                    return [2];
                });
            }); });
        };
        GameHomeView_Als.prototype.onInvite_als = function () {
            var _this = this;
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_INVATE, 1);
            ViewChangeManager_Als.getInstance().showBufferLoadingView();
            ResUtil.getIntance().loadGroups(["invite"], function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    ViewManager.getInstance().showView(InviteView_Als);
                    ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                    return [2];
                });
            }); });
        };
        GameHomeView_Als.prototype.onGameHomeShare_als = function () {
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.HOME_SHARE, 1);
            MiniManeger_Als.instance.bFlagDouYin = false;
            MiniManeger_Als.instance.shareAppMessage();
        };
        GameHomeView_Als.prototype.startGameAni_als = function () {
            var _this = this;
            if (!this.bIsRunning) {
                return;
            }
            Laya.Tween.clearAll(this.imageBtStartGame);
            Laya.Tween.to(this.imageBtStartGame, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this.imageBtStartGame, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(_this, function (args) {
                    Laya.timer.once(0, _this, _this.startGameAni_als);
                }));
            }));
        };
        GameHomeView_Als.prototype.showSignView_als = function () {
            this.addEvent();
        };
        GameHomeView_Als.prototype.PlInitView_als = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.imageBtInvital.visible = false;
                this.boxFun.width = 650;
            }
        };
        GameHomeView_Als.prototype.weCatViewOper_als = function () {
            ViewManager.getInstance().showView(WeCatMoreGameView_Als);
        };
        return GameHomeView_Als;
    }(BaseUIScene));

    var GameView_Als = (function (_super) {
        __extends(GameView_Als, _super);
        function GameView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameView";
            _this.bg_img_res = null;
            _this.chooseLeft = null;
            _this.bHanderAniShow = false;
            _this.bIsRunning = false;
            _this.bLevelOver = false;
            _this.skin = "game/GameView.json";
            return _this;
        }
        GameView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            var self = this;
            if (!self.guessLike && MiniManeger_Als.instance.isWxMiniGameForOperReq() && BaseConst.infos.gameInfo.openPsAward == 1) {
                MiniManeger_Als.instance.createGuessLike(self).then(function (guessLike) {
                    if (!guessLike) {
                        return;
                    }
                    self.guessLike = guessLike;
                    self.guessLike.x = (Laya.stage.width - self.guessLike.width) / 2;
                    self.guessLike.y = 300;
                });
            }
        };
        GameView_Als.prototype.onAddStage = function () {
            MiniManeger_Als.instance.showInterstitialAd();
            EventMgr.getInstance().addEvent(GameEvent_Als.CHANGE_VIDEO_IMAGE, this, this.stopVideoImage_alse);
            this.initView();
            MiniManeger_Als.instance.showBannerAd();
        };
        GameView_Als.prototype.onEnable = function () {
            var _this = this;
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                if (PlayerDataManager_Als.getInstance().isSecondEnterGame()) {
                    Laya.timer.once(1000, this, function () {
                        _this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView_Als);
                        _this.addEvent();
                        _this.imageWeCatMoreGame.visible = true;
                    });
                }
                else {
                    this.imageWeCatMoreGame.visible = true;
                    this.addEvent();
                }
            }
            else {
                this.addEvent();
            }
        };
        GameView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.bIsRunning = false;
            Laya.Tween.clearAll(this.imageBtTip);
            Laya.timer.clearAll(this);
        };
        GameView_Als.prototype.initView = function () {
            this.bLevelOver = false;
            this.bIsRunning = true;
            this.refreshChoose();
            this.startimageBtTipAni_als();
            this.imageBtTip.visible = false;
            this.imageBtGotoNextLevel.visible = false;
        };
        GameView_Als.prototype.refreshChoose = function () {
            this.box_choose.visible = false;
            this.initViewInfo_als();
        };
        GameView_Als.prototype.addEvent = function () {
            this.imageBtToHome.on(Laya.Event.CLICK, this, this.returnToGameHome_als);
            this.imageBtTip.on(Laya.Event.CLICK, this, this.onGameViewShareGame_als);
            this.imageBtRestart.on(Laya.Event.CLICK, this, this.gameViewRestartGame_als);
            this.imageBtGotoNextLevel.on(Laya.Event.CLICK, this, this.onGameViewWatchVideoNextLevel_als);
            this.imageWeCatMoreGame.on(Laya.Event.CLICK, this, this.weCatViewOper);
        };
        GameView_Als.prototype.removeEvent = function () {
            this.imageBtToHome.off(Laya.Event.CLICK, this, this.returnToGameHome_als);
            this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
            this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
            this.imageBtTip.off(Laya.Event.CLICK, this, this.onGameViewShareGame_als);
            this.imageBtRestart.off(Laya.Event.CLICK, this, this.gameViewRestartGame_als);
            this.imageBtGotoNextLevel.off(Laya.Event.CLICK, this, this.onGameViewWatchVideoNextLevel_als);
            EventMgr.getInstance().removeEvent(GameEvent_Als.CHANGE_VIDEO_IMAGE, this, this.stopVideoImage_alse);
            this.imageWeCatMoreGame.off(Laya.Event.CLICK, this, this.weCatViewOper);
        };
        GameView_Als.prototype.weCatViewOper = function () {
            this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView_Als);
        };
        GameView_Als.prototype.closeWeCatMoreGameView = function () {
            if (WeCatMoreGameView_Als.isOpen && this.pWeCatMoreGameView) {
                this.pWeCatMoreGameView.removeSelf();
            }
        };
        GameView_Als.prototype.onGameViewWatchVideoNextLevel_als = function () {
            var _this = this;
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAME_UP, 1);
            Als_SoundManager.getInstance().playEffect("button", 1);
            MiniManeger_Als.instance.playViderAd({
                successFun: function () {
                    _this.onGameViewNextLevel_als();
                }
            });
        };
        GameView_Als.prototype.onGameViewNextLevel_als = function () {
            if (this.bLevelOver) {
                return;
            }
            ViewChangeManager_Als.getInstance().goToNextLevel();
        };
        GameView_Als.prototype.gameViewRestartGame_als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (this.bLevelOver) {
                return;
            }
            ViewChangeManager_Als.getInstance().restartGame(true);
        };
        GameView_Als.prototype.returnToGameHome_als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
            ViewChangeManager_Als.getInstance().CurLevelBase.returnToGameHome();
            this.removeSelf();
        };
        GameView_Als.prototype.onClick_alse = function (evt) {
            Als_SoundManager.getInstance().playEffect("button", 1);
            var tar = evt.currentTarget;
            var data = this.viewData_.data;
            var icon_name = '';
            switch (evt.currentTarget) {
                case this.icon_chooseLeft:
                    icon_name = data.chooseLeftName;
                    this.chooseLeft = 'left';
                    this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
                    break;
                case this.icon_chooseRight:
                    icon_name = data.chooseRightName;
                    this.chooseLeft = 'right';
                    this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
                    break;
            }
            this.viewData_.callBack(icon_name == data.rightName, icon_name);
            tar.skin = 'resource/assets/img/level/baseboard2.png';
            this.imageBtTip.visible = false;
            this.imageBtGotoNextLevel.visible = false;
        };
        GameView_Als.prototype.showResultIcon_alse = function (isRight) {
            var _this = this;
            this.createChooseAnswer_als(isRight);
            if (isRight) {
                Als_SoundManager.getInstance().playEffect("right", 1);
                Laya.timer.once(1000, this, function () {
                    _this.hideChoseView_als();
                });
            }
            else {
                Als_SoundManager.getInstance().playEffect("wrong", 1);
            }
        };
        GameView_Als.prototype.createChooseAnswer_als = function (isRight) {
            var tar;
            var skin = 'resource/assets/img/choose/gameinterface_icon_4.png';
            if (!isRight) {
                skin = 'resource/assets/img/choose/gameinterface_icon_5.png';
            }
            if (this.chooseLeft == 'left') {
                tar = this.icon_left;
            }
            else {
                tar = this.icon_right;
            }
            var img = new Laya.Image();
            img.skin = skin;
            img.centerX = img.centerY = 0;
            tar.addChild(img);
        };
        GameView_Als.prototype.showChoseView_alse = function (data) {
            this.imageBtTip.visible = true;
            this.imageBtGotoNextLevel.visible = true;
            this.initViewInfo_als();
            this.viewData_ = data;
            this.box_choose.visible = true;
            this.refreshViewChose_als();
            this.icon_chooseLeft.once(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
            this.icon_chooseRight.once(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
            this.imageWeCatMoreGame.off(Laya.Event.CLICK, this, this.weCatViewOper);
        };
        GameView_Als.prototype.hideChoseView_als = function () {
            this.imageBtTip.visible = false;
            this.imageBtGotoNextLevel.visible = false;
            Laya.Tween.to(this.box_choose, { scaleX: 0, scaleY: 0 }, 500, Laya.Ease.backIn);
            this.box_choose.visible = false;
            this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
            this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
            this.initViewInfo_als();
            this.imageWeCatMoreGame.on(Laya.Event.CLICK, this, this.weCatViewOper);
        };
        GameView_Als.prototype.refreshViewChose_als = function () {
            this.box_choose.scale(0.2, 0.2);
            Laya.Tween.to(this.box_choose, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.backIn);
            this.icon_chooseRight.skin = 'resource/assets/img/level/baseboard1.png';
            this.icon_left.removeChildren();
            this.icon_chooseRight.removeChildren();
            this.icon_right.removeChildren();
            this.icon_chooseLeft.skin = 'resource/assets/img/level/baseboard1.png';
            this.icon_chooseLeft.removeChildren();
            this.icon_left.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseLeft + '.png';
            this.icon_right.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseRight + '.png';
        };
        GameView_Als.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        GameView_Als.prototype.refreshUpIndeInfo_als = function (nIndexCur, nIndexMax) {
            var _this = this;
            var nIndexTemp = 0;
            var nCur = PlayerDataManager_Als.getInstance().stPlayerDataBase.nCurLevel;
            nCur = nCur >= PlayerDataManager_Als.getInstance().nMaxLevelCount ? PlayerDataManager_Als.getInstance().getCurLevelMax() - 1 : nCur;
            if (!PlayerDataManager_Als.getInstance().allCustomsClearance()) {
                this.spLevelLeft.visible = true;
                this.spLevelRight.visible = true;
                BitmapLabelUtils.setLabel(this.spLevelLeft, (nCur + 1).toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
                BitmapLabelUtils.setLabel(this.spLevelRight, (nCur + 2).toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
            }
            else {
                this.spLevelLeft.visible = false;
                this.spLevelRight.visible = false;
            }
            var func = function () {
                var nCount = _this.hBoxIndex.numChildren;
                for (var i = 0; i < nCount; ++i) {
                    var stImageInfo = _this.hBoxIndex.getChildAt(i);
                    if (stImageInfo) {
                        if (i < nIndexMax) {
                            stImageInfo.visible = true;
                        }
                        else {
                            stImageInfo.visible = false;
                        }
                        var pImageFinish = stImageInfo.getChildAt(0);
                        if (pImageFinish) {
                            if (i < nIndexCur) {
                                pImageFinish.visible = true;
                                ++nIndexTemp;
                            }
                            else {
                                pImageFinish.visible = false;
                            }
                        }
                    }
                }
                if (nIndexTemp >= nIndexMax) {
                    _this.bLevelOver = true;
                }
                _this.boxLevelInfo.width = 108 + 20 + _this.hBoxIndex.width + 20 + 108;
            };
            func();
        };
        GameView_Als.prototype.onGameViewShareGame_als = function () {
            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAME_TIP, 1);
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (!this.box_choose.visible && !this.bHanderAniShow) {
                console.log("box choose not show!");
                return;
            }
            var self = this;
            MiniManeger_Als.instance.bFlagDouYin = false;
            MiniManeger_Als.instance.shareAppMessage({
                sucFun: function () {
                    self.onShareGameSuccess_als();
                }
            });
        };
        GameView_Als.prototype.onShareGameSuccess_als = function () {
            var data = ViewChangeManager_Als.getInstance().CurLevelBase.getCurChooseInfo();
            var nHandX = 0;
            var nHandY = 0;
            if (!data) {
                return;
            }
            if (data.chooseLeftName == data.rightName) {
                this.icon_chooseRight.skin = 'resource/assets/img/level/baseboard2.png';
                this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
                nHandX = this.icon_chooseLeft.x + this.icon_chooseLeft.width / 2;
                nHandY = this.icon_chooseLeft.y + this.icon_chooseLeft.height / 2;
            }
            else {
                this.icon_chooseLeft.skin = 'resource/assets/img/level/baseboard2.png';
                nHandX = this.icon_chooseRight.x + this.icon_chooseRight.width / 2;
                nHandY = this.icon_chooseRight.y + this.icon_chooseRight.height / 2;
                this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick_alse);
            }
            this.imageHand.x = nHandX;
            this.imageHand.y = nHandY;
            this.bHanderAniShow = true;
            this.imageHand.visible = true;
            this.handAni_als();
        };
        GameView_Als.prototype.handAni_als = function () {
            var _this = this;
            if (!this.bHanderAniShow) {
                return;
            }
            this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_1.png";
            Laya.timer.once(500, this, function () {
                _this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_2.png";
                Laya.timer.once(500, _this, _this.handAni_als);
            });
        };
        GameView_Als.prototype.initViewInfo_als = function () {
            this.imageHand.visible = false;
            this.bHanderAniShow = false;
            this.bLevelOver = false;
        };
        GameView_Als.prototype.startimageBtTipAni_als = function () {
            var _this = this;
            if (!this.bIsRunning) {
                return;
            }
            Laya.Tween.clearAll(this.imageBtTip);
            Laya.Tween.to(this.imageBtTip, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this.imageBtTip, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(_this, function (args) {
                    Laya.timer.once(0, _this, _this.startimageBtTipAni_als);
                }));
            }));
        };
        GameView_Als.prototype.startVideoImage_alse = function () {
            this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_4.png";
        };
        GameView_Als.prototype.stopVideoImage_alse = function () {
            console.log("stopVideoImage");
            this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_5.png";
        };
        return GameView_Als;
    }(BaseSceneUISkinPopView));

    var WeCatMoreGameItemOne_Als = (function (_super) {
        __extends(WeCatMoreGameItemOne_Als, _super);
        function WeCatMoreGameItemOne_Als(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemOne";
            _this.nIndex = data;
            _this.skin = "game/uiView/WeCatMoreGameItemOne.json";
            _this.width = 320;
            _this.height = 390;
            return _this;
        }
        WeCatMoreGameItemOne_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        WeCatMoreGameItemOne_Als.prototype.onRemoved = function () {
            this.removeEvent();
        };
        WeCatMoreGameItemOne_Als.prototype.setData = function (data) {
            this.nIndex = data;
            this.initView();
        };
        WeCatMoreGameItemOne_Als.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        WeCatMoreGameItemOne_Als.prototype.initView = function () {
            var weCatMiniIconsInfo = Als_GameData.getInstance().weCatMiniIconsInfo;
            if (this.nIndex < 0 || this.nIndex >= weCatMiniIconsInfo.length) {
                this.nIndex = weCatMiniIconsInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            this.lableGameName.text = weCatMiniIconsInfo[this.nIndex].name;
            this.imageIcon.skin = weCatMiniIconsInfo[this.nIndex].ad_img;
            this.stGameIndex = weCatMiniIconsInfo[this.nIndex];
        };
        WeCatMoreGameItemOne_Als.prototype.gotoGame = function () {
            GameCenterManager_Als.getInstance().gotoGame(this.stGameIndex, MoreGameOperRequest_Als);
        };
        WeCatMoreGameItemOne_Als.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGame);
            }
        };
        return WeCatMoreGameItemOne_Als;
    }(BaseSceneUISkin));

    var SuccessfulEntryOneViewTwo_Als = (function (_super) {
        __extends(SuccessfulEntryOneViewTwo_Als, _super);
        function SuccessfulEntryOneViewTwo_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryOneViewTwo";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.scrollSizeMax = 50;
            _this.nTimePanel = 5000;
            _this.skin = "game/uiView/SuccessfulEntryOneViewTwo.json";
            _this.bRecvAward = false;
            return _this;
        }
        SuccessfulEntryOneViewTwo_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.grp_center.width = this.width;
            this.grp_center.height = this.height;
        };
        SuccessfulEntryOneViewTwo_Als.prototype.onAddStage = function () {
            MiniManeger_Als.instance.showBannerAd();
            this.initView();
            this.addEvent();
        };
        SuccessfulEntryOneViewTwo_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (this.aniReal) {
                this.aniReal.stop();
            }
        };
        SuccessfulEntryOneViewTwo_Als.prototype.initMiniGame = function () {
            this.img_back.visible = true;
            this.imageWeCatMoreGame.visible = true;
        };
        SuccessfulEntryOneViewTwo_Als.prototype.initView = function () {
            var _this = this;
            this.initPanel();
            this.proceMoreGame();
            this.bRecvAward = false;
            this.btLable.visible = false;
            Laya.timer.once(3000, this, function () {
                _this.btLable.visible = true;
            });
            this.startGameAni();
        };
        SuccessfulEntryOneViewTwo_Als.prototype.onMousClck_Als = function (evt) {
            Als_SoundManager.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.btLable:
                    this.onNoThinks();
                    break;
                case this.imageBtSign:
                    this.onWatchVideoRecvAward();
                    break;
                case this.img_back:
                    this.onBack();
                    break;
                case this.panelWeCatMoreGame:
                    this.onShowMoreGame();
                    break;
            }
        };
        SuccessfulEntryOneViewTwo_Als.prototype.addEvent = function () {
            this.registerEvent(this.btLable, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.onMousClck_Als, this);
            this.registerEvent(this.img_back, Laya.Event.CLICK, this.onMousClck_Als, this);
        };
        SuccessfulEntryOneViewTwo_Als.prototype.onBack = function () {
            MoreGameOperRequestTwo_Als.bOperFlag = true;
            MoreGameOperRequestTwo_Als.bSuccess = true;
            ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
            this.removeSelf();
        };
        SuccessfulEntryOneViewTwo_Als.prototype.onNoThinks = function () {
            MoreGameOperRequest_Als.bOperFlag = true;
            MoreGameOperRequest_Als.bSuccess = true;
            ViewManager.getInstance().showView(MoreGameOperRequest_Als);
            this.removeSelf();
        };
        SuccessfulEntryOneViewTwo_Als.prototype.onWatchVideoRecvAward = function () {
            var _this = this;
            var self = this;
            if (ViewChangeManager_Als.getInstance().CurLevelBase) {
                ViewChangeManager_Als.getInstance().CurLevelBase.levelOnHide();
            }
            MiniManeger_Als.instance.playViderAd({
                successFun: function () {
                    Laya.timer.once(100, self, function () {
                        if (ViewChangeManager_Als.getInstance().CurLevelBase) {
                            ViewChangeManager_Als.getInstance().CurLevelBase.levelOnShow();
                        }
                    });
                    PlayerDataManager_Als.getInstance().AddGoods(GoodsType.enum_GoodsType_Sp, 2);
                    PlayerDataManager_Als.getInstance().addWatchVideoAddSpTime();
                    ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                    _this.removeSelf();
                }
            });
        };
        SuccessfulEntryOneViewTwo_Als.prototype.startGameAni = function () {
            Laya.timer.clearAll(this.imageBtSign);
            AnimationManager_Als.instance.zoomTween(this.imageBtSign, this.imageBtSign);
        };
        SuccessfulEntryOneViewTwo_Als.prototype.createSkeleton = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            AnimationManager_Als.instance.showSkeletonAnimation(url, function (boomAnimation) {
                                _this.aniReal = boomAnimation;
                                _this.aniReal.player.playbackRate = 1;
                                _this.aniReal.autoSize = true;
                                _this.aniReal.scale(1, 1);
                                _this.aniReal.play(0, true);
                                _this.aniReal.x = _this.aniReal.width + 400;
                                _this.aniReal.y = _this.aniReal.height / 2;
                                _this.boxAni.addChild(_this.aniReal);
                                resolve(boomAnimation);
                            }, 0);
                        })];
                });
            });
        };
        SuccessfulEntryOneViewTwo_Als.prototype.proceMoreGame = function () {
            this.refreshWeCatMoreGame();
            this.imageWeCatMoreGame.visible = true;
        };
        SuccessfulEntryOneViewTwo_Als.prototype.refreshWeCatMoreGame = function () {
            this.panelWeCatMoreGame;
            var nXStart = 5;
            var nYStart = 5;
            var aryInfo = [];
            var nCount = 3;
            aryInfo = this.getRandomIndex();
            var nLen = 6;
            nLen = nLen >= aryInfo.length ? aryInfo.length : nLen;
            for (var i = 0; i < nLen; ++i) {
                var pWeCatMoreGameItemOne = this.panelWeCatMoreGame.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne_Als(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 10 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.panelWeCatMoreGame.addChild(pWeCatMoreGameItemOne);
                    this.scrollSizeMax = 180 * (nYAdd + 1);
                    this.nTimePanel = (nYAdd + 1) * 1000;
                }
            }
            if (BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame()) {
                PlatformDY.refreshGameList();
            }
        };
        SuccessfulEntryOneViewTwo_Als.prototype.getRandomIndex = function () {
            if (Als_GameData.getInstance().weCatMiniIconsInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, Als_GameData.getInstance().weCatMiniIconsInfo.length - 1);
            var nCount = Als_GameData.getInstance().weCatMiniIconsInfo.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = Als_GameData.getInstance().weCatMiniIconsInfo.length + nCount;
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= Als_GameData.getInstance().weCatMiniIconsInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        SuccessfulEntryOneViewTwo_Als.prototype.onShowMoreGame = function () {
            MiniManeger_Als.instance.showMoreGamesModal();
        };
        SuccessfulEntryOneViewTwo_Als.prototype.panelScrollAni = function () {
            var _this = this;
            Laya.Tween.clearAll(this.panelWeCatMoreGame.vScrollBar);
            Laya.timer.clearAll(this.panelScrollAni);
            Laya.Tween.to(this.panelWeCatMoreGame.vScrollBar, { value: this.scrollSizeMax }, this.nTimePanel, null, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this.panelWeCatMoreGame.vScrollBar, { value: 0 }, _this.nTimePanel, null, Laya.Handler.create(_this, function (args) {
                    _this.scrollSizeMax = _this.panelWeCatMoreGame.vScrollBar.max;
                    Laya.timer.once(0, _this, _this.panelScrollAni);
                }));
            }));
        };
        SuccessfulEntryOneViewTwo_Als.prototype.initPanel = function () {
            if (!DeviceUtil.isWXMiniGame()) {
                this.panelWeCatMoreGame.vScrollBarSkin = "";
                this.panelWeCatMoreGame.elasticEnabled = true;
                this.panelWeCatMoreGame.vScrollBar.elasticDistance = 200;
                this.panelWeCatMoreGame.vScrollBar.elasticBackTime = 100;
            }
        };
        return SuccessfulEntryOneViewTwo_Als;
    }(PopBaseScene));

    var FailEntryOneView_Als = (function (_super) {
        __extends(FailEntryOneView_Als, _super);
        function FailEntryOneView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "FailEntryOneView_Als";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._nBtNextLevel = 320;
            _this._nBtNextLevelSp = 100;
            _this.nGlodCost = 200;
            _this.bFlag = false;
            _this.skin = "game/uiView/FailEntryOneView.json";
            return _this;
        }
        FailEntryOneView_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        FailEntryOneView_Als.prototype.initView = function () {
            MiniManeger_Als.instance.showInterstitialAd();
            MiniManeger_Als.instance.bFlagSpecialView = false;
            this.bFlag = false;
            this.refreshL_Als();
            MiniManeger_Als.instance.StopVideo();
            this.refreshRBG_Als();
            this.img_back.visible = false;
            this.initVFoR_Als();
            this.proceMG_Als();
            Laya.timer.clearAll(this.imageBtSign);
            AnimationManager_Als.instance.zoomTween(this.imageBtSign, this.imageBtSign);
        };
        FailEntryOneView_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (this.aniReal) {
                this.aniReal.stop();
            }
        };
        FailEntryOneView_Als.prototype.onBack_Alt = function () {
            MoreGameOperRequestTwo_Als.bOperFlag = true;
            MoreGameOperRequestTwo_Als.bSuccess = false;
            ViewManager.getInstance().showView(MoreGameOperRequestTwo_Als);
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryOneView_Als.prototype.onClick = function (evt) {
            Als_SoundManager.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.imageRecv:
                    this.onCGR_Als();
                    break;
                case this.imageBtSign:
                    this.onWWTR_Als();
                    break;
                case this.btLable:
                    this.onNT_Als();
                    break;
                case this.img_back:
                    this.onBack_Alt();
                    break;
            }
        };
        FailEntryOneView_Als.prototype.addEvent = function () {
            this.registerEvent(this.imageRecv, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btLable, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.img_back, Laya.Event.CLICK, this.onClick, this);
        };
        FailEntryOneView_Als.prototype.onVo_Als = function (bSuccess, self) {
            if (bSuccess) {
                self.onFailRestartGame();
            }
            self.imageBtSign.on(Laya.Event.CLICK, self, self.onWWTR_Als);
            if (ViewChangeManager_Als.getInstance().CurLevelBase) {
                ViewChangeManager_Als.getInstance().CurLevelBase.levelOnShow();
            }
        };
        FailEntryOneView_Als.prototype.onWWTR_Als = function () {
            if (ViewChangeManager_Als.getInstance().CurLevelBase) {
                ViewChangeManager_Als.getInstance().CurLevelBase.levelOnHide();
            }
            var self = this;
            MiniManeger_Als.instance.playViderAd({
                successFun: function () {
                    Laya.timer.once(100, self, function () {
                        self.onVo_Als(true, self);
                    });
                }
            });
        };
        FailEntryOneView_Als.prototype.onCGR_Als = function () {
            var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Glod, this.nGlodCost);
            if (!b) {
                return;
            }
            PlayerDataManager_Als.getInstance().subGoods(GoodsType.enum_GoodsType_Glod, this.nGlodCost);
            this.onFRG_Als();
        };
        FailEntryOneView_Als.prototype.onFRG_Als = function () {
            MiniManeger_Als.instance.hideBanner();
            ViewChangeManager_Als.getInstance().restartGame(false);
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryOneView_Als.prototype.refreshRBG_Als = function () {
            var stGameConfig = ConfigManager_Als.getInstance().getGameConfigDataByID(6);
            if (stGameConfig) {
                this.nGlodCost = parseInt(stGameConfig.strValue);
            }
            var b = PlayerDataManager_Als.getInstance().CheckGoods(GoodsType.enum_GoodsType_Glod, this.nGlodCost);
            if (!b) {
                this.imageRecv.visible = false;
                return;
            }
            this.imageRecv.visible = true;
            BitmapLabelUtils.setLabel(this.spGlod, this.nGlodCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        };
        FailEntryOneView_Als.prototype.onNT_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                MoreGameView_Als.bSuccess = false;
                ViewManager.getInstance().showView(MoreGameView_Als);
            }
            else {
                ViewManager.getInstance().showView(FailEntryTwoView_Als);
            }
            MiniManeger_Als.instance.bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryOneView_Als.prototype.initVFoR_Als = function () {
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                this.someChange();
                if (BaseConst.infos.gameInfo.openPsAward == 1) {
                    this.openClick_Als();
                    return;
                }
                else {
                    this.btLable.bottom = this._nBtNextLevel;
                }
            }
            else {
                MiniManeger_Als.instance.showBannerAd();
            }
        };
        FailEntryOneView_Als.prototype.refreshL_Als = function () {
            var _this = this;
            this.btLable.visible = false;
            if (!MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                Laya.timer.once(3000, this, function () {
                    _this.btLable.visible = true;
                });
            }
            else {
                Laya.timer.once(2000, this, function () {
                    _this.btLable.visible = true;
                });
            }
        };
        FailEntryOneView_Als.prototype.someChange = function () {
            this.boxAni.visible = false;
            this.box_wecat.visible = true;
            if (this.imageRecv.visible) {
                this.imageBtSign.left = 30;
                this.imageRecv.bottom = this.imageBtSign.bottom;
                this.imageRecv.right = 30;
            }
        };
        FailEntryOneView_Als.prototype.openClick_Als = function () {
            var _this = this;
            this.btLable.bottom = this._nBtNextLevelSp;
            MiniManeger_Als.instance.bFlagSpecialView = false;
            MiniManeger_Als.instance.hideBanner();
            Laya.timer.once(1000, this, function () {
                MiniManeger_Als.instance.bFlagSpecialView = true;
                MiniManeger_Als.instance.showBannerAd();
                Laya.Tween.to(_this.btLable, { bottom: _this._nBtNextLevel }, 500, null);
            });
        };
        FailEntryOneView_Als.prototype.proceMG_Als = function () {
            if (MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                if (BaseConst.infos.gameInfo.openalllevel == 1) {
                    this.box_wecat.removeChildren();
                    this.box_wecat.addChild(GameCenterManager_Als.getInstance().showMoreGameinView_als(true));
                }
            }
        };
        return FailEntryOneView_Als;
    }(PopBaseScene));

    var LevelBase_Als = (function (_super) {
        __extends(LevelBase_Als, _super);
        function LevelBase_Als(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelScene";
            _this.bAniDestory = false;
            _this.index = 0;
            _this.showLabelObj = {};
            _this.showSoundObj = {};
            _this.listPlayedSoundName = [];
            _this.aniArr = [];
            _this.localAniName = null;
            _this.localData = null;
            _this.viewData_ = _this.mapData = data_;
            return _this;
        }
        LevelBase_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelBase_Als.prototype.childrenCreated = function () {
            console.log(this.className_key + " childrenCreated!!");
            this.createLabelIcon();
            this.initView();
            this.addEvent();
        };
        LevelBase_Als.prototype.initPlayerStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!this.mapData.player.status) return [3, 3];
                            _a = (!this.ani_player);
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 1:
                            _a = (_b.ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            if (this.box_player.getChildIndex(this.ani_player) == -1) {
                                this.ani_player.x = this.mapData.player.status.x;
                                this.ani_player.y = this.mapData.player.status.y;
                                this.box_player.addChild(this.ani_player);
                                this.ani_player.play(this.mapData.player.status.aniN, this.mapData.player.status.loop);
                            }
                            _c.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        LevelBase_Als.prototype.createLabelIcon = function () {
            var skin = 'resource/assets/img/ui/game/gameinterface_baseboard_8.png';
            this.icon_showLabel = new Laya.Image();
            this.icon_showLabel.skin = skin;
            this.icon_showLabel.visible = false;
            this.lableValue = new Laya.Label();
            this.lableValue.centerX = 0;
            this.lableValue.centerY = -25;
            this.lableValue.fontSize = 30;
            this.lableValue.wordWrap = true;
            this.lableValue.width = 250;
            this.icon_showLabel.addChild(this.lableValue);
            this.boxDialog.addChild(this.icon_showLabel);
        };
        LevelBase_Als.prototype.setData = function (data) {
            this.viewData_ = data;
            this.mapData = data;
        };
        LevelBase_Als.prototype.initView = function () {
            this.bReturbToHome = false;
            this.index = 0;
            this.box_player.x = (this.index) * 1080;
            this.box_game.x = (this.index) * -1080;
            this.destroyAni();
            this.showSoundObj = [];
            this.listPlayedSoundName = [];
            if (this.pGameView) {
                this.pGameView.removeSelf();
            }
            this.pGameView = null;
            this.box_player.removeChildren();
            this.box_enb.removeChildren();
            ViewChangeManager_Als.getInstance().CurLevelBase = this;
            this.refreshViewInLevel();
            this.bAniDestory = false;
        };
        LevelBase_Als.prototype.playAni = function (aniName, callBack, isLoop) {
            if (isLoop === void 0) { isLoop = false; }
            this.localAniName = aniName;
            if (this.ani_player != null) {
                this.ani_player.visible = true;
                if (callBack) {
                    this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
                    this.ani_player.player.once(Laya.Event.STOPPED, this, this.onComplete, [aniName, callBack]);
                }
                this.ani_player.play(aniName, isLoop);
            }
            else {
                callBack && callBack(aniName);
            }
        };
        LevelBase_Als.prototype.onComplete = function (aniName, callBack) {
            callBack && callBack(aniName);
        };
        LevelBase_Als.prototype.createSkeleton = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            AnimationManager_Als.instance.showSkeletonAnimation(url, function (boomAnimation) {
                                boomAnimation.player.playbackRate = 1;
                                boomAnimation.autoSize = true;
                                boomAnimation.scale(1, 1);
                                _this.aniArr.push(boomAnimation);
                                resolve(boomAnimation);
                            }, 0);
                        })];
                });
            });
        };
        LevelBase_Als.prototype.onPlayOnce = function () {
            var _this = this;
            this.localData = this.mapData.player.ani[this.localAniName];
            if (this.localData) {
                if (this.localData.pop) {
                    this.popChoose();
                    if (this.localData.loop) {
                        this.playAni(this.localData.aniName, function () {
                        }, true);
                    }
                }
                else {
                    if (this.localData.isWin == 1) {
                        this.onSuccess();
                        return;
                    }
                    else if (this.localData.isWin == 2) {
                        this.pGameView.showResultIcon_alse(false);
                        Laya.timer.once(1000, this, function () {
                            _this.onFail();
                        });
                        return;
                    }
                    this.playAni(this.localData.next, function () {
                        _this.onPlayOnce();
                    });
                }
            }
        };
        LevelBase_Als.prototype.popChoose = function () {
            console.log("int pop choose!");
            if (!this.pGameView) {
                return;
            }
            var self = this;
            this.pGameView.showChoseView_alse({
                data: this.mapData.player.choose[this.index], callBack: function (right, aniName) {
                    self.callBack(right, aniName);
                }
            });
        };
        LevelBase_Als.prototype.onStart = function () {
            var _this = this;
            var start = this.mapData.player.start;
            this.localData = this.mapData.player.ani[start[this.index]];
            var bFlag = false;
            this.playAni(this.localData.aniName, function () {
                _this.onPlayOnce();
            }, bFlag);
        };
        LevelBase_Als.prototype.callBack = function (right, aniName) {
            var _this = this;
            if (right) {
                if (this.index < this.mapData.player.choose.length) {
                    this.index++;
                }
                this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
                this.pGameView.showResultIcon_alse(right);
            }
            this.playAni(aniName, function () {
                _this.onPlayOnce();
            });
        };
        LevelBase_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            if (evt.name != 'undefined' || evt.name != undefined || evt.name != null) {
                if (evt.name.indexOf('sound') > -1) {
                    this.playSound(evt);
                }
                else if (evt.name.indexOf('show') > -1) {
                    this.showLable(evt);
                }
            }
        };
        LevelBase_Als.prototype.showLable = function (evt) {
            var showArr = evt.name.split("_");
            var id = showArr[1];
            if (!this.showLabelObj[id]) {
                this.showLabelObj[id] = true;
                this.showLabelView(parseInt(id));
            }
        };
        LevelBase_Als.prototype.playSound = function (evt) {
            var soundArr = evt.name.split('_');
            var count = soundArr[2];
            var soundName = soundArr[1];
            var index = null;
            var soundObj = this.showSoundObj[this.localAniName];
            if (soundObj == null) {
                soundObj = {};
                index = 1;
                if (Number(count) == 0) {
                    (count) = 1 + '';
                }
            }
            else {
                index = soundObj[soundName];
                if (index == null) {
                    index = 1;
                    if (Number(count) == 0) {
                        (count) = 1 + '';
                    }
                }
                else {
                    if (Number(count) == 0) {
                        (count) = 1 + '';
                    }
                    else {
                        return;
                    }
                }
            }
            var pData = soundObj[soundName];
            if (!pData) {
                this.listPlayedSoundName.push(soundName);
            }
            soundObj[soundName] = index;
            this.showSoundObj[this.localAniName] = soundObj;
            Als_SoundManager.getInstance().playEffect(soundName, Number(count));
        };
        LevelBase_Als.prototype.showLabelView = function (id) {
            var self = this;
            if (self.icon_showLabel) {
                Laya.timer.clearAll(self.icon_showLabel);
                var stAnyData = ConfigManager_Als.getInstance().getDialogInfo(id);
                if (stAnyData) {
                    if (stAnyData.nR == 1) {
                        self.icon_showLabel.scaleX = -1;
                        self.lableValue.scaleX = -1;
                    }
                    else {
                        self.icon_showLabel.scaleX = 1;
                        self.lableValue.scaleX = 1;
                    }
                    self.icon_showLabel.x = stAnyData.nX;
                    self.icon_showLabel.y = stAnyData.nY;
                    console.log("len = ", stAnyData.desc.length);
                    var nWith = stAnyData.desc.length * 30;
                    if (nWith > 250) {
                        nWith = 250;
                    }
                    self.lableValue.width = nWith;
                    self.lableValue.text = stAnyData.desc;
                    self.icon_showLabel.visible = true;
                    Laya.timer.once(1000, self.icon_showLabel, function (icon_showLabel) {
                        icon_showLabel.visible = false;
                    }, [self.icon_showLabel]);
                }
            }
        };
        LevelBase_Als.prototype.destroyAni = function () {
            this.bAniDestory = true;
            var aniArr = this.aniArr;
            var len = aniArr.length;
            for (var i = 0; i < len; i++) {
                var ani = aniArr[i];
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
        };
        LevelBase_Als.prototype.destorySound = function () {
            var nLen = this.listPlayedSoundName.length;
            for (var i = 0; i < nLen; ++i) {
                Als_SoundManager.getInstance().destoryOneSound(this.listPlayedSoundName[i]);
            }
        };
        LevelBase_Als.prototype.addEvent = function () {
        };
        LevelBase_Als.prototype.removeEvent = function () {
        };
        LevelBase_Als.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelBase_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.destroyAni();
        };
        LevelBase_Als.prototype.showGameHome = function () {
            this.initPlayerStatus();
            ViewManager.getInstance().showView(GameHomeView_Als);
        };
        LevelBase_Als.prototype.showGameView = function () {
        };
        LevelBase_Als.prototype.startGame = function () {
            ViewChangeManager_Als.getInstance().CommonView.rmobtev_alt();
            MiniManeger_Als.instance.StartRecorderVideo();
            this.bReturbToHome = false;
            this.pGameView = ViewManager.getInstance().showView(GameView_Als);
            this.pGameView.startVideoImage_alse();
            this.pGameView.refreshChoose();
            this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
            if (!PlayerDataManager_Als.getInstance().checkDyLogIndexrecorded(PlayerDataManager_Als.getInstance().getCurLevelToChallenge())) {
                ViewChangeManager_Als.getInstance().startGame();
            }
        };
        LevelBase_Als.prototype.stopGame = function () {
        };
        LevelBase_Als.prototype.restartGame = function (bReStartAll) {
            MiniManeger_Als.instance.StartRecorderVideo();
            this.bReturbToHome = false;
            this.showSoundObj = [];
            this.showLabelObj = [];
            if (this.pGameView) {
                this.pGameView.startVideoImage_alse();
                this.pGameView.hideChoseView_als();
                this.pGameView.refreshChoose();
                this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
            }
            else {
                console.error("can not find pGameView!");
            }
        };
        LevelBase_Als.prototype.returnToGameHome = function () {
            MiniManeger_Als.instance.StopVideo();
            this.bReturbToHome = true;
            this.destroyAni();
            if (this.icon_showLabel) {
                this.icon_showLabel.visible = false;
            }
            if (PlayerDataManager_Als.getInstance().getCurLevelToChallenge() == PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel()) {
                this.initView();
            }
            else {
                if (this.pGameView) {
                    this.pGameView.removeSelf();
                }
                this.pGameView = null;
                GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_GameHome;
                LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getLevelToChangeMaxLevel());
            }
        };
        LevelBase_Als.prototype.clearData = function () {
            this.box_player.removeChildren();
            this.box_enb.removeChildren();
        };
        LevelBase_Als.prototype.onSuccess = function () {
            if (this.bReturbToHome) {
                return;
            }
            console.log("Level Success!");
            if (!MiniManeger_Als.instance.isWxMiniGameForOperReq()) {
                if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigManager_Als.getInstance().getTreasureByCurLevel() == 1) {
                    ViewManager.getInstance().showView(SuccessfulEntryOneView_Als);
                }
                else {
                    if (PlayerDataManager_Als.getInstance().getCurLevelToChallenge() % 2 == 1) {
                        console.log("PlayerDataManager.getInstance().getCurLevelToChallenge() = ", PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
                        ViewManager.getInstance().showView(SuccessfulEntryOneViewTwo_Als);
                    }
                    else {
                        ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                    }
                }
            }
            else {
                if (LevelManager_Als.getInstance().nCurLevel >= 3) {
                    MoreGameView_Als.bSuccess = true;
                    ViewManager.getInstance().showView(MoreGameView_Als);
                }
                else {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeView_Als);
                }
                this.pGameView.closeWeCatMoreGameView();
                PlayerDataManager_Als.getInstance().nGotoLevel = 0;
            }
            if (!PlayerDataManager_Als.getInstance().checkDyLogIndexrecorded(PlayerDataManager_Als.getInstance().getCurLevelToChallenge())) {
                ViewChangeManager_Als.getInstance().endGame();
                PlayerDataManager_Als.getInstance().recordDyLogIndex(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
            }
        };
        LevelBase_Als.prototype.onFail = function () {
            if (this.bReturbToHome) {
                return;
            }
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
        };
        LevelBase_Als.prototype.closeGameView = function () {
            if (this.pGameView) {
                this.pGameView.removeSelf();
                this.pGameView = null;
            }
        };
        LevelBase_Als.prototype.refreshViewInLevel = function () {
            var nCurState = GameStateManager_Als.getInstance().levelState;
            if (nCurState == EnterGameType.enum_EnterGameType_GameHome) {
                this.showGameHome();
                if (this.pGameView) {
                    this.pGameView.removeSelf();
                }
            }
            else {
                if (nCurState == EnterGameType.enum_EnterGameType_Next
                    || nCurState == EnterGameType.enum_EnterGameType_ChooseLevel) {
                    this.startGame();
                }
            }
        };
        LevelBase_Als.prototype.getCurChooseInfo = function () {
            return this.mapData.player.choose[this.index];
        };
        LevelBase_Als.prototype.levelOnShow = function () {
        };
        LevelBase_Als.prototype.levelOnHide = function () {
        };
        return LevelBase_Als;
    }(BaseSceneUISkin));

    var LevelScene1_Als = (function (_super) {
        __extends(LevelScene1_Als, _super);
        function LevelScene1_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene1";
            _this.skin = 'game/level/LevelScene1.json';
            return _this;
        }
        LevelScene1_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene1_Als.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene1_Als.prototype.stopGame = function () { };
        LevelScene1_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.initView.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
                console.log("restart level1!", bReStartAll);
            }
            else {
                _super.prototype.restartGame.call(this);
                this.box_player.x = ((this.index) * 1080);
                this.box_game.x = ((this.index) * (-1080));
                console.log("restart level1!", bReStartAll);
                this.onStart();
            }
        };
        LevelScene1_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ani_bg, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            ani_bg = _c.sent();
                            ani_bg.x = ani_bg.width / 2;
                            ani_bg.y = ani_bg.height / 2;
                            ani_bg.play(0, true);
                            this.icon_bg.addChild(ani_bg);
                            _a = !this.ani_player;
                            if (!_a) return [3, 3];
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _a = (_b.ani_player = _c.sent());
                            _c.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene1_Als.prototype.addEvent = function () { };
        LevelScene1_Als.prototype.removeEvent = function () { };
        LevelScene1_Als.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelScene1_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            _super.prototype.clearData.call(this);
            this.removeEvent();
            this.icon_bg.removeChildren();
            console.log("level 1 on Removed!");
        };
        return LevelScene1_Als;
    }(LevelBase_Als));

    var LevelScene2_Als = (function (_super) {
        __extends(LevelScene2_Als, _super);
        function LevelScene2_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene2";
            _this.skin = "game/level/LevelScene2.json";
            return _this;
        }
        LevelScene2_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene2_Als.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene2_Als.prototype.stopGame = function () { };
        LevelScene2_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.initView.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                this.box_player.x = ((this.index) * 1080);
                this.box_game.x = ((this.index) * (-1080));
                this.onStart();
            }
        };
        LevelScene2_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ani_bg, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            ani_bg = _c.sent();
                            ani_bg.x = ani_bg.width / 2;
                            ani_bg.y = ani_bg.height / 2;
                            ani_bg.play(0, true);
                            this.icon_bg.addChild(ani_bg);
                            _a = !this.ani_player;
                            if (!_a) return [3, 3];
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _a = (_b.ani_player = _c.sent());
                            _c.label = 3;
                        case 3:
                            if (this.box_player.getChildIndex(this.ani_player) == -1) {
                                this.box_player.addChild(this.ani_player);
                            }
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene2_Als.prototype.addEvent = function () { };
        LevelScene2_Als.prototype.removeEvent = function () { };
        LevelScene2_Als.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelScene2_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            _super.prototype.clearData.call(this);
            this.removeEvent();
            this.icon_bg.removeChildren();
            console.log("level 2 on Removed!");
        };
        return LevelScene2_Als;
    }(LevelBase_Als));

    var LevelScene3_Als = (function (_super) {
        __extends(LevelScene3_Als, _super);
        function LevelScene3_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene3";
            _this.skin = "game/level/LevelScene3.json";
            return _this;
        }
        LevelScene3_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene3_Als.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene3_Als.prototype.stopGame = function () { };
        LevelScene3_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.initView.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                this.box_player.x = ((this.index) * 1080);
                this.box_game.x = ((this.index) * (-1080));
                this.onStart();
            }
        };
        LevelScene3_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ani_bg, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            ani_bg = _c.sent();
                            ani_bg.x = ani_bg.width / 2 + 450;
                            ani_bg.y = ani_bg.height / 2 + 250;
                            ani_bg.play(0, true);
                            this.box_enb.addChild(ani_bg);
                            _a = !this.ani_player;
                            if (!_a) return [3, 3];
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _a = (_b.ani_player = _c.sent());
                            _c.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene3_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
        };
        LevelScene3_Als.prototype.addEvent = function () { };
        LevelScene3_Als.prototype.removeEvent = function () { };
        LevelScene3_Als.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelScene3_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return LevelScene3_Als;
    }(LevelBase_Als));

    var LevelScene4_Als = (function (_super) {
        __extends(LevelScene4_Als, _super);
        function LevelScene4_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene4";
            _this.skin = "game/level/LevelScene4.json";
            return _this;
        }
        LevelScene4_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene4_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene4_Als.prototype.callBack = function (right, aniName) {
            var _this = this;
            if (right) {
                this.index++;
                this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
                this.pGameView.showResultIcon_alse(right);
            }
            this.playAni(aniName, function () {
                _this.onPlayOnce();
            });
        };
        LevelScene4_Als.prototype.playShandian1 = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ani_shandian1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.createSkeleton('resource/assets/img/ani/common/shandian1.sk')];
                        case 1:
                            ani_shandian1 = _a.sent();
                            ani_shandian1.x = ani_shandian1.width + 1080;
                            ani_shandian1.y = ani_shandian1.height - 100;
                            ani_shandian1.player.once(Laya.Event.STOPPED, this, function () {
                                ani_shandian1.visible = false;
                            });
                            ani_shandian1.play(0, false);
                            this.box_enb1.addChild(ani_shandian1);
                            return [2];
                    }
                });
            });
        };
        LevelScene4_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, ani_rain, ani_shandian2;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.ani_bg = _d.sent();
                            this.ani_bg.x = this.ani_bg.width;
                            this.ani_bg.y = this.ani_bg.height - 100;
                            this.ani_bg.play(0, true);
                            this.box_enb.addChild(this.ani_bg);
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = this.index * 1080;
                            this.box_game.x = this.index * -1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [4, this.createSkeleton('resource/assets/img/ani/common/rain.sk')];
                        case 4:
                            ani_rain = _d.sent();
                            ani_rain.x = ani_rain.width / 2 + 1080;
                            ani_rain.y = ani_rain.height / 2;
                            ani_rain.play(0, true);
                            this.box_enb.addChild(ani_rain);
                            return [4, this.createSkeleton('resource/assets/img/ani/common/shandian2.sk')];
                        case 5:
                            ani_shandian2 = _d.sent();
                            ani_shandian2.x = ani_shandian2.width + 1080 + 400;
                            ani_shandian2.y = 300;
                            ani_shandian2.play(0, true);
                            this.box_enb.addChild(ani_shandian2);
                            return [2];
                    }
                });
            });
        };
        LevelScene4_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (evt.name == "sevent_horses2_1") {
                this.ani_bg.play('horses2', false);
            }
            else if ("showWinAni" == evt.name) {
                this.ani_bg.play('horses3', false);
            }
            else if ("sevent_shandian1_1" == evt.name) {
                this.playShandian1();
            }
            else if ("smove" == evt.name) {
                Laya.Tween.to(this.box_player, { x: 1080 }, 5500);
                Laya.Tween.to(this.box_game, { x: -1080 }, 5500);
            }
        };
        LevelScene4_Als.prototype.addEvent = function () { };
        LevelScene4_Als.prototype.removeEvent = function () {
            if (this.ani_player) {
                this.ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        LevelScene4_Als.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelScene4_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
            this.box_enb1.removeChildren();
        };
        LevelScene4_Als.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene4_Als.prototype.stopGame = function () { };
        LevelScene4_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.initView.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.ani_bg.play('horses1', false);
                }
                this.box_player.x = ((this.index) * 1080);
                this.box_game.x = ((this.index) * (-1080));
                this.onStart();
            }
        };
        LevelScene4_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene4_Als;
    }(LevelBase_Als));

    var LevelScene5_Als = (function (_super) {
        __extends(LevelScene5_Als, _super);
        function LevelScene5_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene5";
            _this.dogName = null;
            _this.skin = "game/level/LevelScene5.json";
            return _this;
        }
        LevelScene5_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene5_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene5_Als.prototype.onPlayOnce = function () {
            var _this = this;
            this.localData = this.mapData.player.ani[this.localAniName];
            if (this.localData) {
                if (this.localData.pop) {
                    this.popChoose();
                    if (this.localData.loop) {
                        this.playAni(this.localData.aniName, function () {
                        }, true);
                    }
                }
                else {
                    if (this.localData.isWin == 1) {
                        this.onSuccess();
                        return;
                    }
                    else if (this.localData.isWin == 2) {
                        this.pGameView.showResultIcon_alse(false);
                        Laya.timer.once(1000, this, function () {
                            _this.onFail();
                        });
                        return;
                    }
                    if (this.localData.next) {
                        this.playAni(this.localData.next, function () {
                            _this.onPlayOnce();
                        });
                    }
                    else {
                        if (this.localData.loop) {
                            this.playAni(this.localData.aniName, function () {
                            }, true);
                        }
                    }
                }
            }
        };
        LevelScene5_Als.prototype.callBack = function (right, aniName) {
            var _this = this;
            if (right) {
                this.index++;
                this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
                this.pGameView.showResultIcon_alse(right);
                if (aniName == '5-4') ;
                else if (aniName == '5-7') {
                    this.createDog();
                    Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 2170);
                    Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 2170);
                }
                else if (aniName == '5-15') {
                    this.ani_dog && this.ani_dog.play('gou3', false);
                    this.dogName = "gou3";
                }
            }
            else {
                if (aniName == '5-9') {
                    this.ani_dog && this.ani_dog.play('gou2', false);
                    this.dogName = "gou2";
                }
            }
            this.playAni(aniName, function () {
                _this.onPlayOnce();
            });
        };
        LevelScene5_Als.prototype.createDog = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.box_enb1.removeChildren();
                            _a = this;
                            return [4, this.createSkeleton("resource/assets/img/ani/level5/checkpoint5g.sk")];
                        case 1:
                            _a.ani_dog = _b.sent();
                            this.ani_dog.x = this.ani_dog.width / 2 + 1080 * 3 - 300;
                            this.ani_dog.y = this.ani_dog.height / 2 + 500;
                            this.ani_dog.play('gou1', true);
                            this.dogName = "gou1";
                            this.ani_dog.player.on(Laya.Event.STOPPED, this, this.onDogPlayend);
                            this.ani_dog.on(Laya.Event.LABEL, this, this.onDogPlaySound);
                            this.box_enb1.addChild(this.ani_dog);
                            return [2];
                    }
                });
            });
        };
        LevelScene5_Als.prototype.onDogPlaySound = function (evt) {
            _super.prototype.onPlayLabel.call(this, evt);
            this.ani_dog.off(Laya.Event.LABEL, this, this.onDogPlaySound);
        };
        LevelScene5_Als.prototype.onDogPlayend = function () {
            var _this = this;
            if (this.dogName == 'gou2') {
                this.playAni('5-12', function () {
                    _this.onPlayOnce();
                });
            }
            else if (this.dogName == 'gou3') {
                this.playAni('5-14', function () {
                    _this.onPlayOnce();
                });
            }
            this.ani_dog.player.off(Laya.Event.STOPPED, this, this.onDogPlayend);
        };
        LevelScene5_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, ani_rain;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.ani_bg = _d.sent();
                            this.ani_bg.x = this.ani_bg.width + 1080 + 540;
                            this.ani_bg.y = this.ani_bg.height / 2;
                            this.ani_bg.play(0, true);
                            this.box_enb2.addChild(this.ani_bg);
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_game.x = (this.index) * -1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [4, this.createSkeleton('resource/assets/img/ani/common/rain.sk')];
                        case 4:
                            ani_rain = _d.sent();
                            ani_rain.x = ani_rain.width / 2;
                            ani_rain.y = ani_rain.height / 2;
                            ani_rain.play(0, true);
                            this.box_enb.addChild(ani_rain);
                            Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 3250);
                            Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 3250);
                            return [2];
                    }
                });
            });
        };
        LevelScene5_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (evt.name == "sevent_horses2_1") ;
            else if ("showWinAni" == evt.name) ;
            else if ("smove" == evt.name) {
                Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 2500);
                Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 2500);
            }
        };
        LevelScene5_Als.prototype.addEvent = function () { };
        LevelScene5_Als.prototype.removeEvent = function () {
            if (this.ani_player) {
                this.ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        LevelScene5_Als.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelScene5_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
            this.box_enb1.removeChildren();
            this.box_enb2.removeChildren();
        };
        LevelScene5_Als.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene5_Als.prototype.stopGame = function () { };
        LevelScene5_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.initView.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = 0;
                    this.box_game.x = 0;
                    Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 3250);
                    Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 3250);
                }
                else if (this.index == 1 || this.index == 2) {
                    this.box_player.x = ((this.index + 1) * 1080);
                    this.box_game.x = ((this.index + 1) * (-1080));
                    if (this.index == 2) {
                        this.ani_dog.player.on(Laya.Event.STOPPED, this, this.onDogPlayend);
                    }
                }
                this.onStart();
            }
        };
        LevelScene5_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene5_Als;
    }(LevelBase_Als));

    var LevelScene6_Als = (function (_super) {
        __extends(LevelScene6_Als, _super);
        function LevelScene6_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene6";
            _this.nAddTemp = 0;
            _this.skin = "game/level/LevelScene6.json";
            return _this;
        }
        LevelScene6_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene6_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene6_Als.prototype.initView = function () {
            this.stopAni();
            _super.prototype.initView.call(this);
            this.nAddTemp = 0;
            this.box_enb.removeChildren();
            this.box_enb1.removeChildren();
            this.box_player.removeChildren();
            this.box_enbyan2.removeChildren();
            this.box_enbyan3.removeChildren();
            this.box_enbyan4.removeChildren();
            this.box_enbhuo3.removeChildren();
            this.box_enbhuo2.removeChildren();
        };
        LevelScene6_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
            this.box_enb.removeChildren();
            this.box_enb1.removeChildren();
            this.box_player.removeChildren();
            this.box_enbyan2.removeChildren();
            this.box_enbyan3.removeChildren();
            this.box_enbyan4.removeChildren();
            this.box_enbhuo3.removeChildren();
            this.box_enbhuo2.removeChildren();
        };
        LevelScene6_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.ani_bg = _g.sent();
                            this.ani_bg.x = this.ani_bg.width / 2 + 280;
                            this.ani_bg.y = this.ani_bg.height / 2 + 400;
                            this.ani_bg.scaleX = 0.35;
                            this.ani_bg.scaleY = 0.35;
                            this.ani_bg.play("huo1", true);
                            this.box_enb.addChild(this.ani_bg);
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _g.sent());
                            _g.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * -1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 4:
                            _d.ani_bg2 = _g.sent();
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 5:
                            _e.ani_bg3 = _g.sent();
                            _f = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 6:
                            _f.ani_bg4 = _g.sent();
                            this.box_enbyan2.removeChildren();
                            this.box_enbyan3.removeChildren();
                            this.box_enbyan4.removeChildren();
                            this.ani_bg2.x = 0;
                            this.ani_bg2.y = this.ani_bg.height / 2 + 600;
                            this.ani_bg2.play('yan3', true);
                            this.box_enbyan2.addChild(this.ani_bg2);
                            this.ani_bg3.x = 0;
                            this.ani_bg3.y = this.ani_bg.height / 2 + 700;
                            this.ani_bg3.play('yan4', true);
                            this.box_enbyan3.addChild(this.ani_bg3);
                            this.ani_bg4.x = 0;
                            this.ani_bg4.y = this.ani_bg.height / 2 + 700;
                            this.ani_bg4.play('yan4', true);
                            this.box_enbyan4.addChild(this.ani_bg4);
                            return [2];
                    }
                });
            });
        };
        LevelScene6_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.ani_bg && evt.name == "sevent_huo2_1") {
                this.ani_bg.scaleX = 1;
                this.ani_bg.scaleY = 1;
                this.ani_bg.x = this.ani_bg.width / 2 - 66;
                this.ani_bg.y = this.ani_bg.height / 2 + 500;
                this.ani_bg.play('huo2', false);
            }
            if (this.ani_bg2 && evt.name == "sevent_huo2_2") {
                this.ani_bg2.scaleX = 1;
                this.ani_bg2.scaleY = 1;
                this.ani_bg2.x = 0;
                this.ani_bg2.y = this.ani_bg.height / 2 + 150;
                this.ani_bg2.play('huo2', false);
                this.box_enbhuo2.addChild(this.ani_bg2);
            }
            if (this.ani_bg && evt.name == "sevent_huo3_1") {
                this.ani_bg.scaleX = 1;
                this.ani_bg.scaleY = 1;
                this.ani_bg.x = 0;
                this.ani_bg.y = this.ani_bg.height / 2 + 150 + this.nAddTemp;
                this.ani_bg.play('huo3', false);
                this.box_enbhuo3.addChild(this.ani_bg);
            }
            if (this.ani_bg && evt.name == "sevent_yan2_1") {
                this.ani_bg.scaleX = 1;
                this.ani_bg.scaleY = 1;
                this.ani_bg.x = 0;
                this.ani_bg.y = this.ani_bg.height / 2 + 400;
                this.ani_bg.play('yan2', false);
                this.box_enb1.addChild(this.ani_bg);
            }
            if (evt.name == "smove") {
                Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 2500);
                Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 2500);
            }
            if (evt.name == "smove2") {
                Laya.Tween.to(this.box_player, { x: (this.index + 2) * 1080 }, 4880);
                Laya.Tween.to(this.box_game, { x: (this.index + 2) * -1080 }, 4880);
            }
        };
        LevelScene6_Als.prototype.callBack = function (right, aniName) {
            var _this = this;
            if (right) {
                this.index++;
                this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
                this.pGameView.showResultIcon_alse(right);
                if (aniName == "6-3") {
                    Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 + 100 }, 4000);
                    Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 4000);
                }
            }
            this.playAni(aniName, function () {
                _this.onPlayOnce();
            });
        };
        LevelScene6_Als.prototype.Animatedscenes = function () {
            var _this = this;
            this.box_Animatedscenes.visible = true;
            this.box_game.visible = false;
            this.boxBg.alpha = 0;
            this.imageBg.scaleX = 1;
            this.imageBg.scaleY = 1;
            this.imageBg.x = 540;
            this.imageBg.y = -350;
            this.imageMot.scaleX = 1;
            this.imageMot.scaleY = 1;
            this.imageMot.x = 540;
            this.imageMot.bottom = 700;
            this.imageShip.scaleX = 1;
            this.imageShip.scaleY = 1;
            this.imageShip.x = 562;
            this.imageMot.bottom = 750;
            this.imageWaterBlue1.scaleX = 1;
            this.imageWaterBlue1.scaleY = 1;
            this.imageWaterBlue1.x = 540;
            this.imageWaterBlue1.bottom = 500;
            this.imageWaterBlue2.scaleX = 1;
            this.imageWaterBlue2.scaleY = 1;
            this.imageWaterBlue2.x = 1620;
            this.imageWaterBlue2.bottom = 500;
            this.imageWaterBotton1.scaleX = 1;
            this.imageWaterBotton1.scaleY = 1;
            this.imageWaterBotton1.x = 540;
            this.imageWaterBotton1.bottom = 0;
            this.imageWaterBotton2.scaleX = 1;
            this.imageWaterBotton2.scaleY = 1;
            this.imageWaterBotton2.x = 1620;
            this.imageWaterBotton2.bottom = 0;
            var scaleNum = 1.3;
            Laya.Tween.to(this.imageBg, { scaleX: scaleNum, scaleY: scaleNum }, 2000);
            Laya.Tween.to(this.imageMot, { scaleX: scaleNum, scaleY: scaleNum }, 2000);
            Laya.Tween.to(this.imageShip, { scaleX: scaleNum, scaleY: scaleNum }, 2000);
            Laya.Tween.to(this.imageWaterBlue1, { x: -540 }, 2000);
            Laya.Tween.to(this.imageWaterBlue2, { x: 540 }, 2000);
            Laya.Tween.to(this.imageWaterBotton1, { x: -540 }, 2000);
            Laya.Tween.to(this.imageWaterBotton2, { x: 540 }, 2000);
            Laya.timer.once(1800, this, function () {
                Laya.Tween.to(_this.boxBg, { alpha: 1 }, 500, null, Laya.Handler.create(_this, function (args) {
                    _this.box_Animatedscenes.visible = false;
                    _this.boxBg.alpha = 0;
                    _this.box_game.visible = true;
                    _this.pGameView = ViewManager.getInstance().showView(GameView_Als);
                    _this.pGameView.refreshUpIndeInfo_als(_this.index, _this.mapData.player.choose.length);
                    _this.initPlayer();
                }));
            });
        };
        LevelScene6_Als.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.clearData();
            this.Animatedscenes();
        };
        LevelScene6_Als.prototype.stopGame = function () { };
        LevelScene6_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.initView.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = ((this.index) * 1080);
                    this.box_game.x = ((this.index) * (-1080));
                    this.box_enb.removeChildren();
                    this.ani_bg.x = this.ani_bg.width / 2 - 270;
                    this.ani_bg.y = this.ani_bg.height / 2 - 70;
                    this.ani_bg.scaleX = 0.35;
                    this.ani_bg.scaleY = 0.35;
                    this.ani_bg.play("huo1", true);
                    this.box_enb.addChild(this.ani_bg);
                    this.box_enbhuo2.removeChildren();
                    this.box_enb1.removeChildren();
                }
                else if (this.index == 1) {
                    this.box_enbhuo3.removeChildren();
                    this.nAddTemp = 250;
                }
                this.onStart();
            }
        };
        LevelScene6_Als.prototype.clearData = function () {
            this.box_player.removeChildren();
            this.box_enb.removeChildren();
            this.box_enb1.removeChildren();
            this.box_player.removeChildren();
            this.box_enbhuo3.removeChildren();
            this.box_enbhuo2.removeChildren();
        };
        LevelScene6_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene6_Als;
    }(LevelBase_Als));

    var LevelScene7_Als = (function (_super) {
        __extends(LevelScene7_Als, _super);
        function LevelScene7_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene7";
            _this.roleAniTweenUp1 = null;
            _this.roleAniTweenUp2 = null;
            _this.roleAniTweenDown1 = null;
            _this.roleAniTweenDown2 = null;
            _this.nWaterTime = 8000;
            _this.bAniOpen = false;
            _this.skin = "game/level/LevelScene7.json";
            return _this;
        }
        LevelScene7_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene7_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene7_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopWaterAni();
            this.roleAniTweenUp1 = null;
            this.roleAniTweenUp2 = null;
            this.roleAniTweenDown1 = null;
            this.roleAniTweenDown2 = null;
        };
        LevelScene7_Als.prototype.initView = function () {
            this.stopWaterAni();
            this.initChangeColor();
            this.initWaterPos();
            _super.prototype.initView.call(this);
        };
        LevelScene7_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, ani_rain, ani_rain2;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.ani_bg = _d.sent();
                            this.ani_bg.x = -5;
                            this.ani_bg.y = 610;
                            this.ani_bg.play("huo71", false);
                            this.box_fire.addChild(this.ani_bg);
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * -1080;
                            return [4, this.createSkeleton('resource/assets/img/ani/common/rain.sk')];
                        case 4:
                            ani_rain = _d.sent();
                            ani_rain.x = ani_rain.width / 2;
                            ani_rain.y = ani_rain.height / 2;
                            ani_rain.play(0, true);
                            this.box_enb.addChild(ani_rain);
                            return [4, this.createSkeleton('resource/assets/img/ani/common/rain.sk')];
                        case 5:
                            ani_rain2 = _d.sent();
                            ani_rain2.x = ani_rain.width / 2;
                            ani_rain2.y = ani_rain.height / 2;
                            ani_rain2.play(0, true);
                            this.box_enb1.addChild(ani_rain2);
                            Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 3250);
                            Laya.Tween.to(this.box_watorUp, { x: (this.index + 1) * 1080 }, 3250);
                            Laya.Tween.to(this.box_watorDown, { x: (this.index + 1) * 1080 }, 3250);
                            Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 3250, null, Laya.Handler.create(this, function (args) {
                                _this.popChoose();
                            }));
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene7_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if ("sevent_shandian1_1" == evt.name) {
                this.playShandian1();
            }
            if ("smove2" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 3000);
                Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 3000);
                Laya.Tween.to(this.box_watorUp, { x: (this.index + 1) * 1080 }, 3000);
                Laya.Tween.to(this.box_watorDown, { x: (this.index + 1) * 1080 }, 3000);
            }
            else if ("smove3" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 3000);
                Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 3000);
                Laya.Tween.to(this.box_watorUp, { x: (this.index + 1) * 1080 }, 3000);
                Laya.Tween.to(this.box_watorDown, { x: (this.index + 1) * 1080 }, 3000);
            }
            else if ("smove5" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + 2) * -1080 }, 6000);
                Laya.Tween.to(this.box_player, { x: (this.index + 2) * 1080 }, 6000);
                Laya.Tween.to(this.box_watorUp, { x: (this.index + 2) * 1080 }, 6000);
                Laya.Tween.to(this.box_watorDown, { x: (this.index + 2) * 1080 }, 6000);
            }
            else if ("sevent_bs_1" == evt.name) {
                this.changeColorAni();
                this.box_enb1.removeChildren();
                Als_SoundManager.getInstance().soundOpen = false;
                Als_SoundManager.getInstance().soundOpen = true;
            }
        };
        LevelScene7_Als.prototype.playShandian1 = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ani_shandian1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.createSkeleton('resource/assets/img/ani/common/shandian1.sk')];
                        case 1:
                            ani_shandian1 = _a.sent();
                            ani_shandian1.x = ani_shandian1.width;
                            ani_shandian1.y = ani_shandian1.height;
                            ani_shandian1.player.once(Laya.Event.STOPPED, this, function () {
                                ani_shandian1.visible = false;
                            });
                            ani_shandian1.play(0, false);
                            this.box_enb1.addChild(ani_shandian1);
                            return [2];
                    }
                });
            });
        };
        LevelScene7_Als.prototype.callBack = function (right, aniName) {
            var _this = this;
            if (right) {
                this.index++;
                this.pGameView.refreshUpIndeInfo_als(this.index, this.mapData.player.choose.length);
                this.pGameView.showResultIcon_alse(right);
            }
            this.playAni(aniName, function () {
                _this.onPlayOnce();
            });
        };
        LevelScene7_Als.prototype.startGame = function () {
            this.initChangeColor();
            this.initWaterPos();
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
            this.stopWaterAni();
            this.openWaterAni();
        };
        LevelScene7_Als.prototype.stopGame = function () { };
        LevelScene7_Als.prototype.restartGame = function (bReStartAll) {
            var _this = this;
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initWaterPos();
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
                this.stopWaterAni();
                this.openWaterAni();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.ani_bg.play("huo71", false);
                    this.box_player.x = 0;
                    this.box_game.x = 0;
                    this.initWaterPos();
                    this.stopWaterAni();
                    this.openWaterAni();
                    Laya.Tween.to(this.box_player, { x: (this.index + 1) * 1080 }, 3250);
                    Laya.Tween.to(this.box_watorUp, { x: (this.index + 1) * 1080 }, 3250);
                    Laya.Tween.to(this.box_watorDown, { x: (this.index + 1) * 1080 }, 3250);
                    Laya.Tween.to(this.box_game, { x: (this.index + 1) * -1080 }, 3250, null, Laya.Handler.create(this, function (args) {
                        _this.popChoose();
                    }));
                }
                this.onStart();
            }
        };
        LevelScene7_Als.prototype.initWaterPos = function () {
            this.box_watorUp.x = 0;
            this.box_watorDown.x = 0;
            this.boxWaterUp1.x = 0;
            this.boxWaterUp2.x = 1700;
            this.boxWaterDown1.x = 0;
            this.boxWaterDown2.x = 1700;
        };
        LevelScene7_Als.prototype.stopWaterAni = function () {
            this.bAniOpen = false;
            Laya.Tween.clearAll(this.boxWaterUp1);
            Laya.Tween.clearAll(this.boxWaterUp2);
            Laya.Tween.clearAll(this.boxWaterDown1);
            Laya.Tween.clearAll(this.boxWaterDown2);
            this.roleAniTweenUp1 = null;
            this.roleAniTweenUp2 = null;
            this.roleAniTweenDown1 = null;
            this.roleAniTweenDown2 = null;
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_watorUp);
            Laya.Tween.clearAll(this.box_watorDown);
            Laya.Tween.clearAll(this.box_game);
        };
        LevelScene7_Als.prototype.openWaterAni = function () {
            this.bAniOpen = true;
            this.nWaterTime = 8000;
            this.boxWaterUp1Start();
            this.waterAniUp2Loop();
            this.boxWaterDown1Start();
            this.waterAniDown2Loop();
        };
        LevelScene7_Als.prototype.boxWaterUp1Start = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.roleAniTweenUp1 = Laya.Tween.to(this.boxWaterUp1, { x: -1720 }, this.nWaterTime / 2, null, Laya.Handler.create(this, function (args) {
                _this.waterAniUp1Loop();
            }));
        };
        LevelScene7_Als.prototype.waterAniUp1Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            console.log("this.boxWaterUp2.x = ", this.boxWaterUp2.x, "this.box_watorUp.x = ", this.box_watorUp.x);
            this.boxWaterUp1.x = this.boxWaterUp2.x + 1700;
            this.roleAniTweenUp1 = Laya.Tween.to(this.boxWaterUp1, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniUp1Loop);
            }));
        };
        LevelScene7_Als.prototype.waterAniUp2Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            console.log("this.boxWaterUp1.x = ", this.boxWaterUp1.x, "this.box_watorUp.x = ", this.box_watorUp.x);
            this.boxWaterUp2.x = this.boxWaterUp1.x + 1700;
            this.roleAniTweenUp2 = Laya.Tween.to(this.boxWaterUp2, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniUp2Loop);
            }));
        };
        LevelScene7_Als.prototype.boxWaterDown1Start = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.roleAniTweenDown1 = Laya.Tween.to(this.boxWaterDown1, { x: -1720 }, this.nWaterTime / 2, null, Laya.Handler.create(this, function (args) {
                _this.waterAniDown1Loop();
            }));
        };
        LevelScene7_Als.prototype.waterAniDown1Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.boxWaterDown1.x = this.boxWaterDown2.x + 1700;
            this.roleAniTweenDown1 = Laya.Tween.to(this.boxWaterDown1, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniDown1Loop);
            }));
        };
        LevelScene7_Als.prototype.waterAniDown2Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.boxWaterDown2.x = this.boxWaterDown1.x + 1700;
            this.roleAniTweenDown2 = Laya.Tween.to(this.boxWaterDown2, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniDown2Loop);
            }));
        };
        LevelScene7_Als.prototype.initChangeColor = function () {
            this.image2Temp.alpha = 0;
            this.image2up.alpha = 1;
            this.image2yun.alpha = 1;
            this.image2yunTemp.alpha = 0;
            this.imageWaterUp1.alpha = 1;
            this.imageWaterUp2.alpha = 1;
            this.imageWaterUp1Temp.alpha = 0;
            this.imageWaterUp2Temp.alpha = 0;
            this.imageWaterUp1After.alpha = 1;
            this.imageWaterUp2After.alpha = 1;
            this.imageWaterUp1AfterTemp.alpha = 0;
            this.imageWaterUp2AfterTemp.alpha = 0;
            this.imageWaterDown1.alpha = 1;
            this.imageWaterDown2.alpha = 1;
            this.imageWaterDown1Temp.alpha = 0;
            this.imageWaterDown2Temp.alpha = 0;
            this.imageWaterDown2After1.alpha = 1;
            this.imageWaterDown2After2.alpha = 1;
            this.imageWaterDown2After1Temp.alpha = 0;
            this.imageWaterDown2After2Temp.alpha = 0;
        };
        LevelScene7_Als.prototype.changeColorAni = function () {
            var nTimeOver = 0;
            Laya.Tween.to(this.image2up, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.image2yun, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.image2Temp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.image2yunTemp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp1, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp2, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp1Temp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp2Temp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp1After, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp2After, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp1AfterTemp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterUp2AfterTemp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown1, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown2, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown1Temp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown2Temp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown2After1, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown2After2, { alpha: 0 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown2After1Temp, { alpha: 1 }, nTimeOver);
            Laya.Tween.to(this.imageWaterDown2After2Temp, { alpha: 1 }, nTimeOver);
        };
        LevelScene7_Als.prototype.levelOnHide = function () {
            this.roleAniTweenUp1 && this.roleAniTweenUp1.pause();
            this.roleAniTweenUp2 && this.roleAniTweenUp2.pause();
            this.roleAniTweenDown1 && this.roleAniTweenDown1.pause();
            this.roleAniTweenDown2 && this.roleAniTweenDown2.pause();
            console.log("levelOnHide");
        };
        LevelScene7_Als.prototype.levelOnShow = function () {
            this.roleAniTweenUp1 && this.roleAniTweenUp1.resume();
            this.roleAniTweenUp2 && this.roleAniTweenUp2.resume();
            this.roleAniTweenDown1 && this.roleAniTweenDown1.resume();
            this.roleAniTweenDown2 && this.roleAniTweenDown2.resume();
            console.log("levelOnShow");
        };
        return LevelScene7_Als;
    }(LevelBase_Als));

    var LevelScene8_Als = (function (_super) {
        __extends(LevelScene8_Als, _super);
        function LevelScene8_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene8";
            _this.roleAniTweenUp1 = null;
            _this.roleAniTweenUp2 = null;
            _this.roleAniTweenDown1 = null;
            _this.roleAniTweenDown2 = null;
            _this.nIndexTemp = 2;
            _this.nIndexCur = 0;
            _this.nWaterTime = 8000;
            _this.nXSub = 540;
            _this.bAniOpen = false;
            _this.openui2Flag = false;
            _this.skin = "game/level/LevelScene8.json";
            return _this;
        }
        LevelScene8_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene8_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene8_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopWaterAni();
        };
        LevelScene8_Als.prototype.initView = function () {
            this.nIndexMax = 2;
            this.openui2Flag = false;
            this.stopWaterAni();
            this.initWaterPos();
            _super.prototype.initView.call(this);
        };
        LevelScene8_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.ani_bg = _d.sent();
                            this.ani_bg.x = -5;
                            this.ani_bg.y = 610;
                            this.ani_bg.play(0, true);
                            this.box_enb.addChild(this.ani_bg);
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index + this.nIndexTemp) * 1080;
                            this.box_game.x = (this.index) * -1080;
                            Laya.Tween.to(this.box_watorUp, { x: (this.index + this.nIndexTemp) * 1080 }, 3250);
                            Laya.Tween.to(this.box_watorDown, { x: (this.index + this.nIndexTemp) * 1080 }, 3250);
                            Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp - 1) * -1080 }, 1625, null, Laya.Handler.create(this, function (args) {
                                Laya.Tween.to(_this.box_game, { x: (_this.index + _this.nIndexTemp) * -1080 }, 1625);
                                _this.onStart();
                            }));
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene8_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if ("openui1" == evt.name) {
                this.popChoose();
            }
            else if ("openui2" == evt.name) {
                this.nIndexCur += 1;
                if (this.nIndexCur >= this.nIndexMax) {
                    this.popChoose();
                }
            }
            else if ("smove2" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.index + this.nIndexTemp) * (-1080) - this.nXSub }, 1000);
                Laya.Tween.to(this.box_watorUp, { x: (this.index + 1) * 1080 + this.nXSub }, 1000);
                Laya.Tween.to(this.box_watorDown, { x: (this.index + 1) * 1080 + this.nXSub }, 1000);
            }
            else if ("smove3" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) }, 3000);
                Laya.Tween.to(this.box_watorUp, { x: (this.index + this.nIndexTemp) * 1080 }, 3000);
                Laya.Tween.to(this.box_watorDown, { x: (this.index + this.nIndexTemp) * 1080 }, 3000);
            }
            else if ("smove4" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - this.nXSub }, 4000);
                Laya.Tween.to(this.box_watorUp, { x: (this.index + this.nIndexTemp) * 1080 }, 4000);
                Laya.Tween.to(this.box_watorDown, { x: (this.index + this.nIndexTemp) * 1080 }, 4000);
            }
        };
        LevelScene8_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
            this.initWaterPos();
            this.openWaterAni();
        };
        LevelScene8_Als.prototype.stopGame = function () { };
        LevelScene8_Als.prototype.restartGame = function (bReStartAll) {
            var _this = this;
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initWaterPos();
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
                this.openWaterAni();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.initWaterPos();
                    this.box_player.x = (this.index + this.nIndexTemp) * 1080;
                    this.box_game.x = (this.index) * -1080;
                    Laya.Tween.to(this.box_watorUp, { x: (this.index + this.nIndexTemp) * 1080 }, 3250);
                    Laya.Tween.to(this.box_watorDown, { x: (this.index + this.nIndexTemp) * 1080 }, 3250);
                    Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp - 1) * -1080 }, 1625, null, Laya.Handler.create(this, function (args) {
                        Laya.Tween.to(_this.box_game, { x: (_this.index + _this.nIndexTemp) * -1080 }, 1625);
                        _this.onStart();
                    }));
                }
                else if (this.index == 1) {
                    this.openui2Flag = false;
                    this.nIndexMax = 1;
                    this.nIndexCur = 0;
                    this.onStart();
                }
                else if (this.index == 2) {
                    this.onStart();
                }
            }
        };
        LevelScene8_Als.prototype.initWaterPos = function () {
            this.box_watorUp.x = 0;
            this.box_watorDown.x = 0;
            this.boxWaterUp1.x = 0;
            this.boxWaterUp2.x = 1700;
            this.boxWaterDown1.x = 0;
            this.boxWaterDown2.x = 1700;
        };
        LevelScene8_Als.prototype.stopWaterAni = function () {
            this.bAniOpen = false;
            Laya.Tween.clearAll(this.boxWaterUp1);
            Laya.Tween.clearAll(this.boxWaterUp2);
            Laya.Tween.clearAll(this.boxWaterDown1);
            Laya.Tween.clearAll(this.boxWaterDown2);
            this.roleAniTweenUp1 = null;
            this.roleAniTweenUp2 = null;
            this.roleAniTweenDown1 = null;
            this.roleAniTweenDown2 = null;
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_watorUp);
            Laya.Tween.clearAll(this.box_watorDown);
            Laya.Tween.clearAll(this.box_game);
        };
        LevelScene8_Als.prototype.openWaterAni = function () {
            this.bAniOpen = true;
            this.nWaterTime = 8000;
            this.boxWaterUp1Start();
            this.waterAniUp2Loop();
            this.boxWaterDown1Start();
            this.waterAniDown2Loop();
        };
        LevelScene8_Als.prototype.boxWaterUp1Start = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.roleAniTweenUp1 = Laya.Tween.to(this.boxWaterUp1, { x: -1720 }, this.nWaterTime / 2, null, Laya.Handler.create(this, function (args) {
                _this.waterAniUp1Loop();
            }));
        };
        LevelScene8_Als.prototype.waterAniUp1Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.boxWaterUp1.x = this.boxWaterUp2.x + 1700;
            this.roleAniTweenUp1 = Laya.Tween.to(this.boxWaterUp1, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniUp1Loop);
            }));
        };
        LevelScene8_Als.prototype.waterAniUp2Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.boxWaterUp2.x = this.boxWaterUp1.x + 1700;
            this.roleAniTweenUp2 = Laya.Tween.to(this.boxWaterUp2, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniUp2Loop);
            }));
        };
        LevelScene8_Als.prototype.boxWaterDown1Start = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.roleAniTweenDown1 = Laya.Tween.to(this.boxWaterDown1, { x: -1720 }, this.nWaterTime / 2, null, Laya.Handler.create(this, function (args) {
                _this.waterAniDown1Loop();
            }));
        };
        LevelScene8_Als.prototype.waterAniDown1Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.boxWaterDown1.x = this.boxWaterDown2.x + 1700;
            this.roleAniTweenDown1 = Laya.Tween.to(this.boxWaterDown1, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniDown1Loop);
            }));
        };
        LevelScene8_Als.prototype.waterAniDown2Loop = function () {
            var _this = this;
            if (!this.bAniOpen) {
                return;
            }
            this.boxWaterDown2.x = this.boxWaterDown1.x + 1700;
            this.roleAniTweenDown2 = Laya.Tween.to(this.boxWaterDown2, { x: -1720 }, this.nWaterTime, null, Laya.Handler.create(this, function (args) {
                Laya.timer.once(0, _this, _this.waterAniDown2Loop);
            }));
        };
        LevelScene8_Als.prototype.levelOnHide = function () {
            this.roleAniTweenUp1 && this.roleAniTweenUp1.pause();
            this.roleAniTweenUp2 && this.roleAniTweenUp2.pause();
            this.roleAniTweenDown1 && this.roleAniTweenDown1.pause();
            this.roleAniTweenDown2 && this.roleAniTweenDown2.pause();
            console.log("levelOnHide");
        };
        LevelScene8_Als.prototype.levelOnShow = function () {
            this.roleAniTweenUp1 && this.roleAniTweenUp1.resume();
            this.roleAniTweenUp2 && this.roleAniTweenUp2.resume();
            this.roleAniTweenDown1 && this.roleAniTweenDown1.resume();
            this.roleAniTweenDown2 && this.roleAniTweenDown2.resume();
            console.log("levelOnShow");
        };
        return LevelScene8_Als;
    }(LevelBase_Als));

    var LevelScene9_Als = (function (_super) {
        __extends(LevelScene9_Als, _super);
        function LevelScene9_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene9";
            _this.nIndexTemp = 1;
            _this.nAddTemp = 600;
            _this.skin = "game/level/LevelScene9.json";
            return _this;
        }
        LevelScene9_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene9_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene9_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene9_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene9_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.ani_bg = _d.sent();
                            this.ani_bg.x = -240;
                            this.ani_bg.y = 640;
                            this.ani_bg.play(0, true);
                            this.box_enb.addChild(this.ani_bg);
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * -1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene9_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if ("smove" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - this.nAddTemp }, 3000);
            }
            else if ("sevent_9-c1_1" == evt.name) {
                this.ani_bg.play("9-c1", true);
            }
            else if ("sevent_9-c2_1" == evt.name) {
                this.ani_bg.play("9-c2", true);
            }
            else if ("sevent_9-c3_1" == evt.name) {
                this.ani_bg.play("9-c3", false);
            }
            else if ("smove2" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 1100 }, 3500);
            }
            else if ("smove3" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 1100 + 400 }, 3540 - 750);
            }
            else if ("smove4" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 1540 }, 6080 - 2500);
            }
            else if ("smove5" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 1340 }, 5540);
            }
        };
        LevelScene9_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene9_Als.prototype.stopGame = function () { };
        LevelScene9_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_game.x = 0;
                    this.ani_bg.stop();
                }
                if (this.index == 1) {
                    this.box_game.x = (this.index + this.nIndexTemp) * (-1080) - 1100;
                }
                this.onStart();
            }
        };
        LevelScene9_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene9_Als;
    }(LevelBase_Als));

    var LevelScene10_Als = (function (_super) {
        __extends(LevelScene10_Als, _super);
        function LevelScene10_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene10";
            _this.nIndexTemp = 2;
            _this.nAddTemp = -490;
            _this.nForend = 540;
            _this.skin = "game/level/LevelScene10.json";
            return _this;
        }
        LevelScene10_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene10_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene10_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene10_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene10_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = !this.ani_player;
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 1:
                            _a = (_b.ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = 0;
                            this.box_game.x = this.box_game_up.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene10_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if ("smove" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - this.nAddTemp }, 4250);
                Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) - this.nAddTemp }, 4250);
            }
            else if ("smove2" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) + 100 }, 4310);
                Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) + 100 }, 4310);
            }
            else if ("smove3" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 520 }, 3130);
                Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) - 520 }, 3130);
            }
        };
        LevelScene10_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene10_Als.prototype.stopGame = function () { };
        LevelScene10_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_game.x = this.box_game_up.x = (this.index) * 1080;
                }
                this.onStart();
            }
        };
        LevelScene10_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_game_up);
        };
        return LevelScene10_Als;
    }(LevelBase_Als));

    var LevelScene11_Als = (function (_super) {
        __extends(LevelScene11_Als, _super);
        function LevelScene11_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene11";
            _this.nIndexTemp = 1;
            _this.nAddTemp = -490;
            _this.nForend = 540;
            _this.skin = "game/level/LevelScene11.json";
            return _this;
        }
        LevelScene11_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene11_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene11_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene11_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene11_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = !this.ani_player;
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 1:
                            _a = (_b.ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = 0;
                            this.box_game.x = this.box_game_up.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene11_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if ("smove" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) }, 2040);
                Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) }, 2040);
            }
            else if ("smove2" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 130 }, 4160);
                Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) - 130 }, 4160);
            }
            else if ("smove3" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 80 }, 3710);
                Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) - 80 }, 3710);
            }
            else if ("smove4" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) + 540 }, 5040);
                Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) + 540 }, 5040);
            }
        };
        LevelScene11_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene11_Als.prototype.stopGame = function () { };
        LevelScene11_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_game.x = this.box_game_up.x = (this.index) * 1080;
                }
                this.onStart();
            }
        };
        LevelScene11_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene11_Als;
    }(LevelBase_Als));

    var LevelScene12_Als = (function (_super) {
        __extends(LevelScene12_Als, _super);
        function LevelScene12_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene12";
            _this.nIndexTemp = 1;
            _this.nAddTemp = -490;
            _this.nForend = 540;
            _this.skin = "game/level/LevelScene12.json";
            return _this;
        }
        LevelScene12_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene12_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene12_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene12_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene12_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = !this.ani_player;
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 1:
                            _a = (_b.ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene12_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if ("smove" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 540 }, 4330);
            }
            else if ("smove2" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 900 }, 3170);
            }
            else if ("smove3" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp + 1) * (-1080) - 600 }, 5080);
            }
            else if ("smove4" == evt.name) {
                Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp + 1) * (-1080) + 600 }, 2170);
            }
        };
        LevelScene12_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene12_Als.prototype.stopGame = function () { };
        LevelScene12_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_game.x = (this.index) * 1080;
                }
                else if (this.index == 2) {
                    this.box_game.x = (this.index + this.nIndexTemp + 1) * (-1080) - 600;
                }
                this.onStart();
            }
        };
        LevelScene12_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene12_Als;
    }(LevelBase_Als));

    var LevelScene14_Als = (function (_super) {
        __extends(LevelScene14_Als, _super);
        function LevelScene14_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene14";
            _this.skin = "game/level/LevelScene14.json";
            return _this;
        }
        LevelScene14_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene14_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene14_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene14_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene14_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.skG = _e.sent();
                            this.skG.x = this.mapData.bg.ani.x;
                            this.skG.y = this.mapData.bg.ani.y;
                            this.box_g.addChild(this.skG);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.z.url)];
                        case 2:
                            _b.skZ = _e.sent();
                            this.skZ.x = this.mapData.z.x;
                            this.skZ.y = this.mapData.z.y;
                            this.box_z.addChild(this.skZ);
                            _c = !this.ani_player;
                            if (!_c) return [3, 4];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 3:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 4;
                        case 4:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene14_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -2272 }, 5210);
                    Laya.Tween.to(this.box_player, { x: 2272 }, 5210);
                    break;
                case "sevent_14-g1_1":
                    this.skG.play("14-g1", false);
                    break;
                case "sevent_14-g3_1":
                    this.skG.play("14-g3", false);
                    break;
                case "sevent_14-g2_1":
                    this.skG.play("14-g2", false);
                    break;
                case "sevent_14-g4_1":
                    this.skG.play("14-g4", false);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(2272 + 618 + 518) }, 3750);
                    Laya.Tween.to(this.box_player, { x: (2272 + 618 + 518) }, 3750);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(2272 + 618 + 618 + 1236 + 300) }, 3500);
                    Laya.Tween.to(this.box_player, { x: (2272 + 618 + 618 + 1236 + 300) }, 3500);
                    this.skZ.play("14-z7", false);
                    break;
                case "smove4":
                    break;
                case "sevent_14-z8_1":
                    this.skZ.play("14-z8", false);
                    break;
                case "sevent_14-z10_1":
                    this.skZ.play("14-z10", false);
                    break;
                case "sevent_14-z9_1":
                    this.skZ.play("14-z9", false);
                    break;
            }
        };
        LevelScene14_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene14_Als.prototype.stopGame = function () { };
        LevelScene14_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) ;
                else if (this.index == 2) ;
                this.onStart();
            }
        };
        LevelScene14_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene14_Als;
    }(LevelBase_Als));

    var LevelScene16_Als = (function (_super) {
        __extends(LevelScene16_Als, _super);
        function LevelScene16_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene16";
            _this.speed_ = 3;
            _this.nIndexTemp = 0;
            _this.nAddTemp = -490;
            _this.nForend = 540;
            _this.skin = "game/level/LevelScene16.json";
            return _this;
        }
        LevelScene16_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene16_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene16_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene16_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        Object.defineProperty(LevelScene16_Als.prototype, "speed", {
            get: function () {
                return this.speed_;
            },
            set: function (s) {
                this.speed_ = s;
                this.resetMoveBg();
            },
            enumerable: true,
            configurable: true
        });
        LevelScene16_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.xt.url)];
                        case 1:
                            _a.xt = _d.sent();
                            this.xt.x = this.mapData.xt.x;
                            this.xt.y = this.mapData.xt.y;
                            this.xtBox.addChild(this.xt);
                            this.kengImg = new Laya.Image();
                            this.kengImg.y = 1123;
                            this.kengImg.skin = "resource/assets/img/level/16/bg16_hole.png";
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game_up.x = this.box_game.x = this.box_game_up_1.x = this.box_game_1.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            this.resetMoveBg();
                            return [2];
                    }
                });
            });
        };
        LevelScene16_Als.prototype.callBack = function (right, aniName) {
            _super.prototype.callBack.call(this, right, aniName);
            if (aniName == "16-6") {
                this.speed = 3;
                this.addChildAt(this.kengImg, 2);
                this.kengImg.x = 1500;
                Laya.Tween.to(this.kengImg, { x: -1000 }, (1500 + 1000) / 8 / 60 * 1000);
            }
            else if (aniName == "16-7") {
                this.speed = 3;
                this.addChildAt(this.kengImg, 2);
                this.kengImg.x = 1000;
                Laya.Tween.to(this.kengImg, { x: -1000 }, 11111 / (8 / 3));
            }
            console.log("level 16 callBack!");
        };
        LevelScene16_Als.prototype.resetMoveBg = function () {
            this.moveSomeBg(this.box_game);
            this.moveSomeBg(this.box_game_up);
            this.moveSomeBg(this.box_game_1);
            this.moveSomeBg(this.box_game_up_1);
        };
        LevelScene16_Als.prototype.moveSomeBg = function (boxBG) {
            Laya.Tween.clearAll(boxBG);
            var toX = -9486;
            var time = 52700;
            if (boxBG.x == toX) {
                boxBG.x = 0;
            }
            else if (boxBG.x != 0) {
                time = (boxBG.x - toX) / this.speed_ / 60 * 1000;
            }
            Laya.Tween.to(boxBG, { x: toX }, time, null, Laya.Handler.create(this, this.moveSomeBg, [boxBG]));
        };
        LevelScene16_Als.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "sevent_16-z1_1":
                    this.xt.play("16-z1", false);
                    break;
                case "sevent_16-z2_1":
                    this.xt.play("16-z2", false);
                    break;
                case "sevent_16-z3_1":
                    this.xt.play("16-z3", false);
                    break;
                case "sevent_16-z4_1":
                    this.xt.play("16-z4", false);
                    break;
                case "sevent_16-z5_1":
                    this.xt.play("16-z5", false);
                    break;
                case "sevent_16-z6_1":
                    this.xt.play("16-z6", false);
                    this.speed = 8;
                    Laya.timer.clearAll(this);
                    Laya.timer.once(3000, this, function () {
                        _this.speed = 3;
                    });
                    break;
                case "sevent_16-z7_1":
                    this.xt.play("16-z7", false);
                    break;
                case "sevent_16-z8_1":
                    this.xt.play("16-z8", false);
                    break;
                case "sevent_16-z9_1":
                    this.xt.play("16-z9", false);
                    break;
                case "sevent_16-z10_1":
                    this.xt.play("16-z10", false);
                    break;
                case "smove":
                    this.speed = 8;
                    Laya.timer.clearAll(this);
                    Laya.timer.once(5000, this, function () {
                        _this.speed = 3;
                    });
                    break;
                case "smove1":
                    this.speed = 8;
                    Laya.timer.clearAll(this);
                    Laya.timer.once(6000, this, function () {
                        _this.speed = 3;
                    });
                    break;
                case "smove2":
                    break;
                case "smove3":
                    this.speed = 8;
                    Laya.timer.clearAll(this);
                    Laya.timer.once(2000, this, function () {
                        _this.speed = 3;
                    });
                    break;
            }
        };
        LevelScene16_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene16_Als.prototype.stopGame = function () {
        };
        LevelScene16_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                this.kengImg.removeSelf();
                this.onStart();
            }
        };
        LevelScene16_Als.prototype.stopAni = function () {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_game_up);
            Laya.Tween.clearAll(this.box_game_1);
            Laya.Tween.clearAll(this.box_game_up_1);
            this.kengImg && this.kengImg.removeSelf();
        };
        return LevelScene16_Als;
    }(LevelBase_Als));

    var LevelScene17_Als = (function (_super) {
        __extends(LevelScene17_Als, _super);
        function LevelScene17_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene17";
            _this.bcjOneFlag = false;
            _this.nIndexTemp = 0;
            _this.nAddTemp = -490;
            _this.nForend = 540;
            _this.skin = "game/level/LevelScene17.json";
            return _this;
        }
        LevelScene17_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene17_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene17_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene17_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene17_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            this.bcjOneFlag = false;
                            this.boxKuang = this.box_game.getChildByName("boxKuang");
                            this.boxMid = this.box_game.getChildByName("boxMid");
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.bgM = _d.sent();
                            this.bgM.x = this.mapData.bg.ani.x;
                            this.bgM.y = this.mapData.bg.ani.y;
                            this.bgM.x = 0;
                            this.bgM.y = this.bgM.height * 2 + 100;
                            _b = !this.ani_player;
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 2:
                            _b = (_c.ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene17_Als.prototype.sharkSome = function () {
            this.sharkBox(this.boxKuang);
            this.sharkBox(this.boxMid);
        };
        LevelScene17_Als.prototype.sharkBox = function (box) {
            var _this = this;
            var toXL = 25;
            var startX = box.x;
            Laya.Tween.to(box, { x: startX - toXL }, 150, Laya.Ease.sineIn, Laya.Handler.create(this, function () {
                Laya.Tween.to(box, { x: startX + toXL }, 100, Laya.Ease.sineIn, Laya.Handler.create(_this, function () {
                    Laya.Tween.to(box, { x: startX - toXL }, 100, Laya.Ease.sineIn, Laya.Handler.create(_this, function () {
                        Laya.Tween.to(box, { x: startX + toXL * 0.7 }, 100, Laya.Ease.sineIn, Laya.Handler.create(_this, function () {
                            Laya.Tween.to(box, { x: startX - toXL * 0.7 }, 100, Laya.Ease.sineIn, Laya.Handler.create(_this, function () {
                                Laya.Tween.to(box, { x: startX }, 100, Laya.Ease.sineIn, Laya.Handler.create(_this, function () {
                                }));
                            }));
                        }));
                    }));
                }));
            }));
        };
        LevelScene17_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "sevent_17-1cj_1":
                    break;
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -1080 * this.index }, 3000);
                    Laya.Tween.to(this.box_player, { x: 1080 * this.index + 300 }, 3000);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_player, { x: 1080 * this.index + 300 }, 3000);
                    break;
                case "zd1":
                    this.sharkSome();
                    if (this.bgM_box.numChildren <= 0) {
                        this.bgM_box.addChild(this.bgM);
                    }
                    if (!this.bcjOneFlag) {
                        this.bgM.play("17-1cj", false);
                        this.bcjOneFlag = true;
                    }
                    break;
                case "zd2":
                    this.sharkSome();
                    break;
                case "zd3":
                    this.sharkSome();
                    break;
            }
        };
        LevelScene17_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene17_Als.prototype.stopGame = function () { };
        LevelScene17_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.bcjOneFlag = false;
                }
                this.onStart();
            }
        };
        LevelScene17_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_game_up);
        };
        return LevelScene17_Als;
    }(LevelBase_Als));

    var LevelScene18_Als = (function (_super) {
        __extends(LevelScene18_Als, _super);
        function LevelScene18_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene18";
            _this.skin = "game/level/LevelScene18.json";
            return _this;
        }
        LevelScene18_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene18_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene18_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene18_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene18_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.dx.ani.url)];
                        case 1:
                            _a.skDx = _f.sent();
                            this.skDx.x = this.mapData.dx.ani.x;
                            this.skDx.y = this.mapData.dx.ani.y;
                            this.skDx.y = this.skDx.height + 120;
                            this.box_dx.addChild(this.skDx);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.hp.url)];
                        case 2:
                            _b.skHp = _f.sent();
                            this.skHp.x = this.mapData.hp.x;
                            this.skHp.y = this.mapData.hp.y;
                            this.skHp.y = this.skHp.height + this.skHp.height / 2 + 150;
                            this.box_hp.addChild(this.skHp);
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.sg.url)];
                        case 3:
                            _c.skSg = _f.sent();
                            this.skSg.x = this.mapData.hp.x;
                            this.skSg.y = this.mapData.hp.y;
                            this.skSg.y = this.skSg.height + 50;
                            this.box_sg.addChild(this.skSg);
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene18_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1350) }, 4170);
                    Laya.Tween.to(this.box_player, { x: (1350) }, 4170);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(4250) }, 8130);
                    Laya.Tween.to(this.box_player, { x: (4250) }, 8130);
                    this.skHp.play("18-hp6", false);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(6450) }, 3600);
                    Laya.Tween.to(this.box_player, { x: (6450) }, 3600);
                    this.skHp.play("18-sg9", true);
                    break;
                case "sevent_18-sg10_1":
                    this.skSg.play("18-sg10", false);
                    break;
                case "sevent_18-hp7_1":
                    this.skHp.play("18-hp7", false);
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_game, { x: -(8000) }, 3660);
                    Laya.Tween.to(this.box_player, { x: (8000) }, 3660);
                    break;
            }
        };
        LevelScene18_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene18_Als.prototype.stopGame = function () {
        };
        LevelScene18_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) ;
                else if (this.index == 2) ;
                this.onStart();
            }
        };
        LevelScene18_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene18_Als;
    }(LevelBase_Als));

    var LevelScene19_Als = (function (_super) {
        __extends(LevelScene19_Als, _super);
        function LevelScene19_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene19";
            _this.dogEventFlag = true;
            _this.qiQiuEventFlag = true;
            _this.skin = "game/level/LevelScene19.json";
            return _this;
        }
        LevelScene19_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene19_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene19_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene19_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene19_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.c.ani.url)];
                        case 1:
                            _a.skDianTi = _f.sent();
                            this.skDianTi.x = this.mapData.c.ani.x;
                            this.skDianTi.y = this.mapData.c.ani.y;
                            this.box_dianti.addChild(this.skDianTi);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.g.url)];
                        case 2:
                            _b.skDog = _f.sent();
                            this.skDog.x = this.mapData.g.x;
                            this.skDog.y = this.mapData.g.y;
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.q.url)];
                        case 3:
                            _c.skQiQiu = _f.sent();
                            this.skQiQiu.x = this.mapData.q.x;
                            this.skQiQiu.y = this.mapData.q.y;
                            this.box_qiqiu.addChild(this.skQiQiu);
                            this.skQiQiu.visible = false;
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene19_Als.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "zd":
                    break;
                case "sevent_19-3n_1":
                    this.skDianTi.play("19-3n", false);
                    break;
                case "sevent_19-1g_1":
                    if (this.dogEventFlag == false)
                        return;
                    this.dogEventFlag = false;
                    if (this.box_dog.numChildren <= 0)
                        this.box_dog.addChild(this.skDog);
                    this.skDog.play("19-1g", false);
                    break;
                case "sevent_19-2g_1":
                    this.skDog.play("19-2g", false);
                    break;
                case "sevent_19-3g_1":
                    this.skDog.play("19-3g", false);
                    break;
                case "sevent_19-1q_1":
                    this.skQiQiu.visible = true;
                    this.skQiQiu.play("19-1q", false);
                    break;
                case "sevent_19-2q_1":
                    this.skQiQiu.visible = true;
                    this.skQiQiu.play("19-2q", false);
                    Laya.timer.once(1500, this, function () { _this.skQiQiu.visible = false; });
                    break;
                case "sevent_19-2n_1":
                    this.skDianTi.play("19-2n", false);
                    break;
                case "sevent_19_door_close":
                    this.skDianTi.play("19-2n", false, true, 0, 0.1);
                    break;
            }
        };
        LevelScene19_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene19_Als.prototype.stopGame = function () {
        };
        LevelScene19_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                    this.dogEventFlag = true;
                    this.qiQiuEventFlag = true;
                    this.skDog.play("19-1g", false, true, 0, 0.3);
                }
                else if (this.index == 1) {
                    this.skQiQiu.visible = false;
                }
                else if (this.index == 2) ;
                this.onStart();
            }
        };
        LevelScene19_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene19_Als;
    }(LevelBase_Als));

    var LevelScene21_Als = (function (_super) {
        __extends(LevelScene21_Als, _super);
        function LevelScene21_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene21";
            _this.skin = "game/level/LevelScene21.json";
            return _this;
        }
        LevelScene21_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene21_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene21_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.box_bg_top.x = 0;
            this.box_bg_bottom.x = 0;
            this.box_gopher.x = 140;
            this.box_iceHole.x = 140;
            this.img_hole.visible = false;
            if (this.skGopher)
                this.skGopher.visible = false;
            this.img_iceHole.visible = false;
            if (this.skIceHole)
                this.skIceHole.visible = false;
            if (this.skBrokenBridge)
                this.skBrokenBridge.visible = false;
            this.stopAni();
        };
        LevelScene21_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene21_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.brokenBridge.url)];
                        case 1:
                            _a.skBrokenBridge = _f.sent();
                            this.skBrokenBridge.x = this.mapData.brokenBridge.x;
                            this.skBrokenBridge.y = this.mapData.brokenBridge.y;
                            this.box_iceHole.addChild(this.skBrokenBridge);
                            this.skBrokenBridge.visible = false;
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.gopher.url)];
                        case 2:
                            _b.skGopher = _f.sent();
                            this.skGopher.x = this.mapData.gopher.x;
                            this.skGopher.y = this.mapData.gopher.y;
                            this.box_gopher.addChild(this.skGopher);
                            this.skGopher.visible = false;
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.bucket.url)];
                        case 3:
                            _c.skIceHole = _f.sent();
                            this.skIceHole.x = this.mapData.bucket.x;
                            this.skIceHole.y = this.mapData.bucket.y;
                            this.box_iceHole.addChild(this.skIceHole);
                            this.skIceHole.visible = false;
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene21_Als.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_bg_top, { x: -1700 }, 2500, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_top);
                    }));
                    Laya.Tween.to(this.box_bg_bottom, { x: -1700 }, 2500, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_bottom);
                    }));
                    break;
                case "sevent_21-tubis1_1":
                    this.skGopher.visible = true;
                    this.skGopher.play("21-tubis1", false);
                    break;
                case "sevent_21-tubis2_1":
                    this.skGopher.play("21-tubis2", false);
                    break;
                case "sevent_21-tubis3_1":
                    this.skGopher.play("21-tubis3", false);
                    Laya.timer.once(1460, this, function () {
                        _this.img_hole.visible = true;
                        _this.skGopher.visible = false;
                    });
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_bg_top, { x: -5300 }, 3420, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_top);
                    }));
                    Laya.Tween.to(this.box_bg_bottom, { x: -5300 }, 3420, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_bottom);
                    }));
                    Laya.Tween.to(this.box_gopher, { x: -1760 }, 3420, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_gopher);
                    }));
                    this.box_iceHole.x = 2040;
                    this.img_iceHole.visible = true;
                    Laya.Tween.to(this.box_iceHole, { x: 140 }, 3420, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_iceHole);
                    }));
                    break;
                case "sevent_cement_1":
                    this.skIceHole.visible = true;
                    this.skIceHole.play("cement", false);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_bg_top, { x: -5600 }, 1040, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_top);
                    }));
                    Laya.Tween.to(this.box_bg_bottom, { x: -5600 }, 1040, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_bottom);
                    }));
                    Laya.Tween.to(this.box_iceHole, { x: -160 }, 1040, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_iceHole);
                    }));
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_bg_top, { x: -6600 }, 4960, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_top);
                    }));
                    Laya.Tween.to(this.box_bg_bottom, { x: -6600 }, 4960, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_bottom);
                    }));
                    Laya.Tween.to(this.box_iceHole, { x: -1160 }, 4960, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_iceHole);
                    }));
                    break;
                case "smove5":
                    Laya.Tween.to(this.box_bg_top, { x: -3400 }, 3460, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_top);
                    }));
                    Laya.Tween.to(this.box_bg_bottom, { x: -3400 }, 3460, null, Laya.Handler.create(this, function () {
                        Laya.Tween.clearAll(_this.box_bg_bottom);
                    }));
                    break;
                case "sevent_3-3_1":
                    this.skBrokenBridge.visible = true;
                    this.skBrokenBridge.play("3-3", false);
                    this.img_iceHole.visible = false;
                    break;
            }
        };
        LevelScene21_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene21_Als.prototype.stopGame = function () {
        };
        LevelScene21_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                this.startGame();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_bg_top.x = 0;
                    this.box_bg_bottom.x = 0;
                }
                else if (this.index == 1) {
                    this.skGopher.play("21-tubis1", false);
                }
                else if (this.index == 2) {
                    this.box_iceHole.x = 140;
                    this.box_bg_top.x = -5300;
                    this.box_bg_bottom.x = -5300;
                    this.img_iceHole.visible = true;
                    this.skBrokenBridge.visible = false;
                    this.skIceHole.visible = false;
                }
                this.onStart();
            }
        };
        LevelScene21_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene21_Als;
    }(LevelBase_Als));

    var LevelScene22_Als = (function (_super) {
        __extends(LevelScene22_Als, _super);
        function LevelScene22_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene22";
            _this.skin = "game/level/LevelScene22.json";
            return _this;
        }
        LevelScene22_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene22_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene22_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene22_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene22_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.xueren.url)];
                        case 1:
                            _a.skXueRen = _f.sent();
                            this.skXueRen.x = this.mapData.xueren.x;
                            this.skXueRen.y = this.mapData.xueren.y;
                            this.box_xueren.addChild(this.skXueRen);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.xiong.ani.url)];
                        case 2:
                            _b.skXiong = _f.sent();
                            this.skXiong.x = this.mapData.xiong.ani.x;
                            this.skXiong.y = this.mapData.xiong.ani.y;
                            this.box_xiong.addChild(this.skXiong);
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.xiong.ani.url)];
                        case 3:
                            _c.skXiong2 = _f.sent();
                            this.skXiong2.x = this.mapData.xiong.ani.x;
                            this.skXiong2.y = this.mapData.xiong.ani.y;
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene22_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1324) }, 4380);
                    Laya.Tween.to(this.box_player, { x: (1324) }, 4380);
                    this.skXueRen.play("22-xr1", false);
                    break;
                case "sevent_22-xr1_0":
                    break;
                case "sevent_22-xr2_1":
                    this.skXueRen.play("22-xr3", false);
                    break;
                case "sevent_22-xr3_1":
                    this.skXueRen.play("22-xr4", false);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(3594) }, 4460);
                    Laya.Tween.to(this.box_player, { x: (3594) }, 4460);
                    break;
                case "sevent_22-x5_1":
                    this.skXiong.play("22-x5", false);
                    break;
                case "sevent_22-x6_1":
                    this.skXiong.play("22-x6", false);
                    break;
                case "sevent_22-x7_1":
                    this.skXiong.play("22-x7", false);
                    break;
                case "sevent_22-x9_1":
                    if (this.box_xiong2.numChildren <= 0) {
                        this.box_xiong2.addChild(this.skXiong2);
                    }
                    this.box_xiong2.x = 5290;
                    this.skXiong2.play("22-x9", false);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(5290) }, 5200);
                    Laya.Tween.to(this.box_player, { x: (5290) }, 5200);
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_game, { x: -(6200) }, 7543);
                    Laya.Tween.to(this.box_player, { x: (6200) }, 7543);
                    break;
            }
        };
        LevelScene22_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene22_Als.prototype.stopGame = function () {
        };
        LevelScene22_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) ;
                else if (this.index == 2) {
                    this.box_xiong2.removeChild(this.skXiong2);
                }
                this.onStart();
            }
        };
        LevelScene22_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene22_Als;
    }(LevelBase_Als));

    var LevelScene20_Als = (function (_super) {
        __extends(LevelScene20_Als, _super);
        function LevelScene20_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene20";
            _this.skin = "game/level/LevelScene20.json";
            return _this;
        }
        LevelScene20_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene20_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene20_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene20_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene20_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 1:
                            _a.skBg = _e.sent();
                            this.skBg.x = this.mapData.bg.ani.x;
                            this.skBg.y = this.mapData.bg.ani.y;
                            this.box_enb.addChild(this.skBg);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.bg.ani.url)];
                        case 2:
                            _b.skBg2 = _e.sent();
                            this.skBg2.x = this.mapData.bg.ani.x;
                            this.skBg2.y = this.mapData.bg.ani.y;
                            _c = !this.ani_player;
                            if (!_c) return [3, 4];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 3:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 4;
                        case 4:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene20_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(2128) }, 4170);
                    Laya.Tween.to(this.box_player, { x: (2128) }, 4170);
                    this.skBg.play("20-4", true);
                    break;
                case "sevent_20-1_0":
                    this.skBg.play("20-1", false);
                    break;
                case "sevent_20-3_0":
                    this.skBg2.play("20-3", false);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -(3442) }, 3290);
                    Laya.Tween.to(this.box_player, { x: (3442) }, 3290);
                    if (this.box_enb2.numChildren <= 0) {
                        this.box_enb2.addChild(this.skBg2);
                    }
                    this.skBg2.play("20-3", false);
                    break;
                case "sevent_20-2_0":
                    this.skBg2.play("20-2", false);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(4902) }, 3360);
                    Laya.Tween.to(this.box_player, { x: (4902) }, 3360);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(5840) }, 5539);
                    break;
            }
        };
        LevelScene20_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene20_Als.prototype.stopGame = function () {
        };
        LevelScene20_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) ;
                else if (this.index == 2) ;
                this.onStart();
            }
        };
        LevelScene20_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene20_Als;
    }(LevelBase_Als));

    var LevelScene23_Als = (function (_super) {
        __extends(LevelScene23_Als, _super);
        function LevelScene23_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene23";
            _this.skin = "game/level/LevelScene23.json";
            return _this;
        }
        LevelScene23_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene23_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene23_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene23_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene23_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.changjing.url)];
                        case 1:
                            _a.ani_changjing = _e.sent();
                            this.ani_changjing.x = this.mapData.changjing.x;
                            this.ani_changjing.y = this.mapData.changjing.y;
                            this.box_enb.addChild(this.ani_changjing);
                            this.ani_changjing.visible = false;
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.dog.url)];
                        case 2:
                            _b.ani_dog = _e.sent();
                            this.ani_dog.x = this.mapData.dog.x;
                            this.ani_dog.y = this.mapData.dog.y;
                            this.box_enb1.addChild(this.ani_dog);
                            this.ani_dog.visible = false;
                            this.icon_changjing.visible = false;
                            _c = !this.ani_player;
                            if (!_c) return [3, 4];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 3:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 4;
                        case 4:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene23_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1700) }, 4300);
                    Laya.Tween.to(this.box_player, { x: (1700) }, 4300);
                    break;
                case "smove2":
                    this.icon_changjing.visible = true;
                    Laya.Tween.to(this.box_game, { x: -(2800) }, 4380);
                    Laya.Tween.to(this.box_player, { x: (2800) }, 4380);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(4000) }, 4170);
                    Laya.Tween.to(this.box_player, { x: (4000) }, 4170);
                    break;
                case "sevent_22-x5_1":
                    this.ani_changjing.visible = true;
                    this.ani_changjing.play('22-x5', false);
                    break;
                case "sevent_24-01_1":
                    this.ani_dog.visible = true;
                    this.ani_dog.play('24-01', true);
                    break;
                case "sevent_24-02_1":
                    this.ani_dog.visible = true;
                    this.ani_dog.play('24-02', false);
                    break;
                case "sevent_24-3_1":
                    this.ani_dog.visible = true;
                    this.ani_dog.play('24-3', false);
                    Laya.Tween.to(this.box_player, { x: (4800) }, 4000);
                    Laya.Tween.to(this.ani_dog, { x: (this.ani_dog.x + 800) }, 4000);
                    break;
            }
        };
        LevelScene23_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene23_Als.prototype.stopGame = function () { };
        LevelScene23_Als.prototype.restartGame = function (bReStartAll) {
            var _this = this;
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) {
                    this.box_game.x = -2800;
                    this.box_player.x = 2800;
                }
                else if (this.index == 2) {
                    this.box_game.x = -2800;
                    this.box_player.x = 2800;
                    Laya.timer.once(100, this, function () {
                        Laya.Tween.to(_this.box_game, { x: -(4000) }, 4170);
                        Laya.Tween.to(_this.box_player, { x: (4000) }, 4170);
                        _this.playAni("23-11", function () {
                            _this.onPlayOnce();
                        });
                    });
                    this.ani_dog.play("24-01", true);
                }
                this.onStart();
            }
        };
        LevelScene23_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene23_Als;
    }(LevelBase_Als));

    var LevelScene24_Als = (function (_super) {
        __extends(LevelScene24_Als, _super);
        function LevelScene24_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene24";
            _this.skin = "game/level/LevelScene24.json";
            return _this;
        }
        LevelScene24_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene24_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene24_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene24_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene24_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.huoba.ani.url)];
                        case 1:
                            _a.skHuoBao = _g.sent();
                            this.skHuoBao.x = this.mapData.huoba.ani.x;
                            this.skHuoBao.y = this.mapData.huoba.ani.y;
                            this.box_huoba.addChild(this.skHuoBao);
                            this.box_huoba.visible = false;
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.laoshu.url)];
                        case 2:
                            _b.skLaoShu = _g.sent();
                            this.skLaoShu.x = this.mapData.laoshu.x;
                            this.skLaoShu.y = this.mapData.laoshu.y;
                            this.box_laoshu.addChild(this.skLaoShu);
                            this.box_laoshu.visible = false;
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.yudi.url)];
                        case 3:
                            _c.skYuDi = _g.sent();
                            this.skYuDi.x = this.mapData.yudi.x;
                            this.skYuDi.y = this.mapData.yudi.y;
                            this.skYuDi.play("keng", true);
                            this.box_yudi.addChild(this.skYuDi);
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.xueren.url)];
                        case 4:
                            _d.skXueRen = _g.sent();
                            this.skXueRen.x = this.mapData.xueren.x;
                            this.skXueRen.y = this.mapData.xueren.y;
                            this.skXueRen.play("daiji1", true);
                            this.box_xueren.addChild(this.skXueRen);
                            this.box_xueren.visible = true;
                            _e = !this.ani_player;
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _e = (_f.ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene24_Als.prototype.callBack = function (right, aniName) {
            if (aniName == "24-9") {
                this.box_xueren.visible = false;
            }
            _super.prototype.callBack.call(this, right, aniName);
        };
        LevelScene24_Als.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            console.log("now event name is:  ", evt.name);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1080) }, 3500);
                    Laya.Tween.to(this.box_player, { x: (1080) }, 3500);
                    break;
                case "sevent_laoshu_1":
                    this.box_laoshu.visible = true;
                    this.skLaoShu.play("laoshu", true);
                    this.box_laoshu.x = this.box_player.x - Laya.stage.width / 2 - 40;
                    Laya.Tween.to(this.box_laoshu, { x: (1080 + this.box_player.x) }, 2000, null, Laya.Handler.create(null, function () { _this.box_laoshu.visible = false; }));
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -2800 }, 4200);
                    Laya.Tween.to(this.box_player, { x: 2800 }, 4200);
                    break;
                case "sevent_yun_1":
                    this.skYuDi.play("yun", false);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -4571 }, 5800);
                    Laya.Tween.to(this.box_player, { x: 4571 }, 5800);
                    break;
                case "sevent_huo_1":
                    this.box_huoba.visible = true;
                    this.skHuoBao.play("huo", true);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_player, { x: 4571 + 1080 }, 3000);
                    break;
                case "sevent_bianxiao_1":
                    this.skXueRen.play("bianxiao", false);
                    break;
            }
        };
        LevelScene24_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene24_Als.prototype.stopGame = function () { };
        LevelScene24_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = (this.index) * 1080;
                    this.box_game.x = (this.index) * 1080;
                }
                else if (this.index == 2) {
                    this.box_xueren.visible = true;
                    this.skXueRen.play("daiji1", true);
                }
                this.onStart();
            }
        };
        LevelScene24_Als.prototype.clearData = function () {
            _super.prototype.clearData.call(this);
            this.box_huoba.removeChildren();
            this.box_yudi.removeChildren();
            this.box_laoshu.removeChildren();
            this.box_xueren.removeChildren();
        };
        LevelScene24_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene24_Als;
    }(LevelBase_Als));

    var LevelScene25 = (function (_super) {
        __extends(LevelScene25, _super);
        function LevelScene25(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene25";
            _this.skin = "game/level/LevelScene25.json";
            return _this;
        }
        LevelScene25.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene25.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene25.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene25.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene25.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.snake.url)];
                        case 1:
                            _a.ani_snake = _f.sent();
                            this.ani_snake.x = this.mapData.snake.x;
                            this.ani_snake.y = this.mapData.snake.y;
                            this.box_enb.addChild(this.ani_snake);
                            this.ani_snake.visible = false;
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.ljuanfen.url)];
                        case 2:
                            _b.ani_ljuanfen = _f.sent();
                            this.ani_ljuanfen.x = this.mapData.ljuanfen.x;
                            this.ani_ljuanfen.y = this.mapData.ljuanfen.y;
                            this.box_enb.addChild(this.ani_ljuanfen);
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.water.url)];
                        case 3:
                            _c.ani_water = _f.sent();
                            this.ani_water.x = this.mapData.water.x;
                            this.ani_water.y = this.mapData.water.y;
                            this.box_enb.addChild(this.ani_water);
                            this.ani_water.visible = false;
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene25.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1080) }, 3880);
                    Laya.Tween.to(this.box_player, { x: (1080) }, 3880);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(3000) }, 3300);
                    Laya.Tween.to(this.box_player, { x: (3000) }, 3300);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(5800) }, 4290);
                    Laya.Tween.to(this.box_player, { x: (5800) }, 4290);
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_game, { x: -(8000) }, 2630);
                    break;
                case "sevent_25-5-1_1":
                    this.ani_water.visible = true;
                    this.ani_water.player.once(Laya.Event.STOPPED, this, function () {
                        _this.ani_water.visible = false;
                    });
                    this.ani_water.play("25-5-1", false);
                    break;
                case "sevent_25-9-1she_1":
                    this.ani_snake.visible = true;
                    this.ani_snake.play("25-9-1she", false);
                    break;
                case "sevent_25-9-2she3_1":
                    this.ani_snake.visible = true;
                    this.ani_snake.play("25-9-2she", false);
                    break;
                case "sevent_25-9-2she2_1":
                    this.ani_snake.visible = true;
                    this.ani_snake.play("25-9-2she2", false);
                    break;
            }
        };
        LevelScene25.prototype.onPlayOnce = function () {
            _super.prototype.onPlayOnce.call(this);
            if (this.localData.next == "25-16") {
                this.box_player.x = 8000;
            }
        };
        LevelScene25.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene25.prototype.stopGame = function () { };
        LevelScene25.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) {
                    this.box_game.x = -3000;
                    this.box_player.x = 3000;
                    this.ani_snake.visible = true;
                    this.ani_snake.play("25-9-1she", false);
                }
                else if (this.index == 2) {
                    this.box_game.x = -5800;
                    this.box_player.x = 5800;
                }
                this.onStart();
            }
        };
        LevelScene25.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene25;
    }(LevelBase_Als));

    var LevelScene26_Als = (function (_super) {
        __extends(LevelScene26_Als, _super);
        function LevelScene26_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene26";
            _this.skin = "game/level/LevelScene26.json";
            return _this;
        }
        LevelScene26_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene26_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene26_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene26_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene26_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.huoba.url)];
                        case 1:
                            _a.huoba = _j.sent();
                            this.huoba.x = this.mapData.huoba.x;
                            this.huoba.y = this.mapData.huoba.y;
                            this.box_enb.addChild(this.huoba);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.jianci.url)];
                        case 2:
                            _b.jianci = _j.sent();
                            this.jianci.x = this.mapData.jianci.x;
                            this.jianci.y = this.mapData.jianci.y;
                            this.box_enb.addChild(this.jianci);
                            this.jianci.visible = false;
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.men.url)];
                        case 3:
                            _c.men = _j.sent();
                            this.men.x = this.mapData.men.x;
                            this.men.y = this.mapData.men.y;
                            this.box_enb.addChild(this.men);
                            this.men.visible = false;
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.munaiyi.url)];
                        case 4:
                            _d.munaiyi = _j.sent();
                            this.munaiyi.x = this.mapData.munaiyi.x;
                            this.munaiyi.y = this.mapData.munaiyi.y;
                            this.box_enb.addChild(this.munaiyi);
                            this.munaiyi.visible = false;
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.shitou.url)];
                        case 5:
                            _e.shitou = _j.sent();
                            this.shitou.x = this.mapData.shitou.x;
                            this.shitou.y = this.mapData.shitou.y;
                            this.box_enb.addChild(this.shitou);
                            this.shitou.visible = false;
                            _f = this;
                            return [4, this.createSkeleton(this.mapData.tianpin.url)];
                        case 6:
                            _f.tianpin = _j.sent();
                            this.tianpin.x = this.mapData.tianpin.x;
                            this.tianpin.y = this.mapData.tianpin.y;
                            this.box_enb.addChild(this.tianpin);
                            this.tianpin.visible = false;
                            _g = !this.ani_player;
                            if (!_g) return [3, 8];
                            _h = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 7:
                            _g = (_h.ani_player = _j.sent());
                            _j.label = 8;
                        case 8:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene26_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(800) }, 3380);
                    Laya.Tween.to(this.box_player, { x: (800) }, 3380);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(2000) }, 4000);
                    Laya.Tween.to(this.box_player, { x: (2400) }, 5200);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(3000) }, 2750);
                    Laya.Tween.to(this.box_player, { x: (3000) }, 2750);
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_game, { x: -(4000) }, 5460);
                    Laya.Tween.to(this.box_player, { x: (4200) }, 5460);
                    break;
                case "sevent_huo2_1":
                    this.huoba.play("huo2", true);
                    break;
                case "sevent_jianci2_1":
                    this.jianci.visible = true;
                    this.jianci.play("jianci2", true);
                    break;
                case "sevent_jianci1_1":
                    this.jianci.visible = true;
                    this.jianci.play("jianci1", false);
                    break;
                case "sevent_huo1_1":
                    this.huoba.play("huo1", false);
                    break;
                case "sevent_men2_1":
                    this.men.visible = true;
                    this.men.play("men2", false);
                    break;
                case "sevent_men3_1":
                    this.men.visible = true;
                    this.men.play("men3", false);
                    break;
                case "sevent_tianping1_1":
                    this.tianpin.visible = true;
                    this.tianpin.play("tianping1", false);
                    break;
                case "sevent_tianping2_1":
                    this.tianpin.visible = true;
                    this.tianpin.play("tianping2", false);
                    break;
                case "sevent_munaiyi3_1":
                    this.munaiyi.visible = true;
                    this.munaiyi.play("munaiyi3", true);
                    break;
                case "sevent_munaiyi1_1":
                    this.munaiyi.visible = true;
                    this.munaiyi.play("munaiyi1", false);
                    break;
                case "sevent_munaiyi2_1":
                    this.munaiyi.visible = true;
                    this.munaiyi.play("munaiyi2", false);
                    break;
                case "sevent_26-15_1":
                    this.shitou.visible = true;
                    this.shitou.play("26-15", true);
                    break;
                case "sevent_26-14_1":
                    this.shitou.visible = true;
                    this.shitou.play("26-14", false);
                    break;
            }
        };
        LevelScene26_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene26_Als.prototype.stopGame = function () { };
        LevelScene26_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) {
                    this.box_game.x = -2000;
                    this.box_player.x = 2400;
                }
                else if (this.index == 2) {
                    this.box_game.x = -3000;
                    this.box_player.x = 3000;
                    this.munaiyi.play("munaiyi3", true);
                }
                else if (this.index == 3) {
                    this.box_game.x = -4000;
                    this.box_player.x = 4200;
                }
                this.onStart();
            }
        };
        LevelScene26_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene26_Als;
    }(LevelBase_Als));

    var LevelScene27_Als = (function (_super) {
        __extends(LevelScene27_Als, _super);
        function LevelScene27_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene27";
            _this.skin = "game/level/LevelScene27.json";
            return _this;
        }
        LevelScene27_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene27_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene27_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene27_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene27_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.keng.url)];
                        case 1:
                            _a.keng = _f.sent();
                            this.keng.x = this.mapData.keng.x;
                            this.keng.y = this.mapData.keng.y;
                            this.box_enb.addChild(this.keng);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.changjing.url)];
                        case 2:
                            _b.changjing = _f.sent();
                            this.changjing.x = this.mapData.changjing.x;
                            this.changjing.y = this.mapData.changjing.y;
                            this.box_enb.addChild(this.changjing);
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.zhiwu.url)];
                        case 3:
                            _c.zhiwu = _f.sent();
                            this.zhiwu.scale(0.7, 0.7);
                            this.zhiwu.x = this.mapData.zhiwu.x;
                            this.zhiwu.y = this.mapData.zhiwu.y;
                            this.box_enb.addChild(this.zhiwu);
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene27_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(2130) }, 3380);
                    Laya.Tween.to(this.box_player, { x: (2130) }, 3380);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(3200) }, 5500);
                    Laya.Tween.to(this.box_player, { x: (3400) }, 5500);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(4250) }, 2780);
                    Laya.Tween.to(this.box_player, { x: (4200) }, 2780);
                    break;
                case "pmove":
                    Laya.Tween.to(this.box_player, { x: (5300) }, 5590);
                    break;
                case "pmove1":
                    Laya.Tween.to(this.box_player, { x: (3750) }, 2830);
                    break;
                case "sevent_zhiwu1_1":
                    this.zhiwu.visible = true;
                    this.zhiwu.play("zhiwu1", false);
                    break;
                case "sevent_zhiwu2_1":
                    this.zhiwu.play("zhiwu2", true);
                    break;
                case "sevent_zhiwu3_1":
                    this.zhiwu.play("zhiwu3", true);
                    break;
                case "sevent_changjing_1":
                    this.changjing.visible = true;
                    this.changjing.play("changjing", true);
                    break;
                case "sevent_keng1_1":
                    this.keng.visible = true;
                    this.keng.play("keng1", true);
                    break;
                case "sevent_keng2_1":
                    this.keng.visible = true;
                    this.keng.play("keng2", false);
                    break;
            }
        };
        LevelScene27_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene27_Als.prototype.stopGame = function () { };
        LevelScene27_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) {
                    this.box_game.x = -3200;
                    this.box_player.x = 3400;
                }
                else if (this.index == 2) {
                    this.box_game.x = -4250;
                    this.box_player.x = 4200;
                }
                this.onStart();
            }
        };
        LevelScene27_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene27_Als;
    }(LevelBase_Als));

    var LevelScene29_Als = (function (_super) {
        __extends(LevelScene29_Als, _super);
        function LevelScene29_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene29";
            _this.isLoop = false;
            _this.skin = "game/level/LevelScene29.json";
            return _this;
        }
        LevelScene29_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene29_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene29_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene29_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene29_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.dengshen.url)];
                        case 1:
                            _a.dengshen = _f.sent();
                            this.dengshen.x = this.mapData.dengshen.x;
                            this.dengshen.y = this.mapData.dengshen.y;
                            this.box_enb.addChild(this.dengshen);
                            this.dengshen.visible = false;
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.daoju1.url)];
                        case 2:
                            _b.shixiang = _f.sent();
                            this.shixiang.x = this.mapData.daoju1.x;
                            this.shixiang.y = this.mapData.daoju1.y;
                            this.box_enb.addChild(this.shixiang);
                            this.shixiang.visible = false;
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.daoju.url)];
                        case 3:
                            _c.daoju = _f.sent();
                            this.daoju.x = this.mapData.daoju.x;
                            this.daoju.y = this.mapData.daoju.y;
                            this.box_enb.addChild(this.daoju);
                            this.daoju.visible = false;
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene29_Als.prototype.playAni = function (aniName, callBack, isLoop) {
            var _this = this;
            if (isLoop === void 0) { isLoop = false; }
            this.localAniName = aniName;
            if (this.ani_player != null) {
                this.ani_player.visible = true;
                if (callBack) {
                    this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
                    this.ani_player.player.once(Laya.Event.STOPPED, this, this.onComplete, [aniName, callBack]);
                }
                if (aniName == '29-2') {
                    Laya.timer.once(20, this, function () {
                        _this.ani_player.play(aniName, isLoop);
                    });
                }
                else {
                    this.ani_player.play(aniName, isLoop);
                }
            }
            else {
                callBack && callBack(aniName);
            }
        };
        LevelScene29_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1450) }, 3000);
                    Laya.Tween.to(this.box_player, { x: (1450) }, 3000);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(4000) }, 5000);
                    Laya.Tween.to(this.box_player, { x: (3880) }, 5000);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(6300) }, 5000);
                    Laya.Tween.to(this.box_player, { x: (6300) }, 5000);
                    break;
                case "sevent_chuxian_1":
                    this.dengshen.visible = true;
                    this.dengshen.play("chuxian", false);
                    break;
                case "sevent_shifaxiaoshi_1":
                    this.dengshen.visible = true;
                    this.dengshen.play("shifaxiaoshi", false);
                    break;
                case "sevent_daiji_1":
                    if (this.isLoop) {
                        return;
                    }
                    this.isLoop = true;
                    this.dengshen.visible = true;
                    this.dengshen.play("daiji", true);
                    break;
                case "sevent_29_1_1x":
                    this.daoju.visible = true;
                    this.daoju.play("29-1x", false);
                    break;
                case "sevent_29-2_1x":
                    this.daoju.visible = true;
                    this.daoju.play("29-2x", false);
                    break;
                case "sevent_29-5x_1":
                    this.shixiang.visible = true;
                    this.shixiang.play("29-5x", false);
                    break;
                case "sevent_29-4x_1":
                    this.shixiang.visible = true;
                    this.shixiang.play("29-4x", false);
                    break;
                case "sevent_29-3x_1":
                    this.shixiang.visible = true;
                    this.shixiang.play("29-3x", false);
                    break;
            }
        };
        LevelScene29_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene29_Als.prototype.stopGame = function () { };
        LevelScene29_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.daoju.visible = false;
                    this.dengshen.visible = false;
                    this.isLoop = false;
                    this.box_player.x = this.box_game.x = 0;
                }
                else if (this.index == 1) {
                    this.box_game.x = -4000;
                    this.box_player.x = 3880;
                    this.shixiang.play("29-5x", false);
                    this.dengshen.play("daiji", true);
                }
                else if (this.index == 2) {
                    this.box_game.x = -6300;
                    this.box_player.x = 6300;
                }
                this.onStart();
            }
        };
        LevelScene29_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene29_Als;
    }(LevelBase_Als));

    var LevelScene30_Als = (function (_super) {
        __extends(LevelScene30_Als, _super);
        function LevelScene30_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene30";
            _this.skin = "game/level/LevelScene30.json";
            return _this;
        }
        LevelScene30_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene30_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene30_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene30_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene30_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.huo.url)];
                        case 1:
                            _a.skHuo = _f.sent();
                            this.skHuo.x = this.mapData.huo.x;
                            this.skHuo.y = this.mapData.huo.y;
                            this.box_huo.addChild(this.skHuo);
                            this.skHuo.visible = false;
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.long.url)];
                        case 2:
                            _b.skLong = _f.sent();
                            this.skLong.x = this.mapData.long.x;
                            this.skLong.y = this.mapData.long.y;
                            this.skLong.play("konglong1", true);
                            this.box_long.addChild(this.skLong);
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.shitou.url)];
                        case 3:
                            _c.skShiTou = _f.sent();
                            this.skShiTou.x = this.mapData.shitou.x;
                            this.skShiTou.y = this.mapData.shitou.y;
                            this.skShiTou.play("shitou1", true);
                            this.box_shitou.addChild(this.skShiTou);
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.box_player.x = (this.index) * 1080;
                            this.box_game.x = (this.index) * 1080;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene30_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1176) }, 2500);
                    Laya.Tween.to(this.box_player, { x: (1176) }, 2500);
                    break;
                case "sevent_huo_1":
                    this.skHuo.visible = true;
                    this.skHuo.play("huo", true);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -(2455) }, 2540);
                    Laya.Tween.to(this.box_player, { x: (2315) }, 2540);
                    break;
                case "sevent_konglong2_1":
                    this.skLong.play("konglong2", false);
                    break;
                case "sevent_konglong3_1":
                    this.skLong.play("konglong3", false);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(3400) }, 3330);
                    Laya.Tween.to(this.box_player, { x: (3600) }, 3330);
                    break;
                case "sevent_shitou2_1":
                    this.skShiTou.play("shitou2", false);
                    break;
                case "sevent_shitou3_1":
                    this.skShiTou.play("shitou3", false);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -(4625) }, 5750);
                    Laya.Tween.to(this.box_player, { x: (4650) }, 5750);
                    break;
            }
        };
        LevelScene30_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene30_Als.prototype.stopGame = function () { };
        LevelScene30_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_player.x = (this.index) * 1080;
                    this.box_game.x = (this.index) * 1080;
                }
                else if (this.index == 1) {
                    this.skLong.play("konglong1", true);
                }
                else if (this.index == 2) {
                    this.skShiTou.play("shitou1", true);
                }
                this.onStart();
            }
        };
        LevelScene30_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene30_Als;
    }(LevelBase_Als));

    var LevelScene31_Als = (function (_super) {
        __extends(LevelScene31_Als, _super);
        function LevelScene31_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene31";
            _this.skin = "game/level/LevelScene31.json";
            return _this;
        }
        LevelScene31_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene31_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene31_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
            this.box_rope.visible = true;
        };
        LevelScene31_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene31_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.nanyeren.url)];
                        case 1:
                            _a.nanyeren = _e.sent();
                            this.nanyeren.x = this.mapData.nanyeren.x;
                            this.nanyeren.y = this.mapData.nanyeren.y;
                            this.box_enb.addChild(this.nanyeren);
                            this.nanyeren.visible = false;
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.nvyeren.url)];
                        case 2:
                            _b.nvyeren = _e.sent();
                            this.nvyeren.x = this.mapData.nvyeren.x;
                            this.nvyeren.y = this.mapData.nvyeren.y;
                            this.box_enb.addChild(this.nvyeren);
                            this.nanyeren.visible = false;
                            _c = !this.ani_player;
                            if (!_c) return [3, 4];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 3:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 4;
                        case 4:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = (this.index) * 1300;
                            this.box_game.x = (this.index) * 1300;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene31_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -(1500) }, 3000);
                    Laya.Tween.to(this.box_player, { x: (1300) }, 3000);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -(2800) }, 5200);
                    Laya.Tween.to(this.box_player, { x: (2600) }, 5200);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -(4100) }, 5000);
                    Laya.Tween.to(this.box_player, { x: (3900) }, 5000);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_player, { x: (5000) }, 3000);
                    break;
                case "tot":
                    this.box_rope.visible = false;
                    break;
                case "sevent_nanyeren1_1":
                    this.nanyeren.visible = true;
                    this.nanyeren.play("nanyeren1", true);
                    break;
                case "sevent_nanyeren2_1":
                    this.nanyeren.visible = true;
                    this.nanyeren.play("nanyeren2", false);
                    break;
                case "sevent_nanyeren3_1":
                    this.nanyeren.visible = true;
                    this.nanyeren.play("nanyeren3", false);
                    break;
                case "sevent_nvyeren1_1":
                    this.nvyeren.visible = true;
                    this.nvyeren.play("nvyeren1", true);
                    break;
                case "sevent_nvyeren2_1":
                    this.nvyeren.visible = true;
                    this.nvyeren.play("nvyeren2", false);
                    break;
                case "sevent_nvyeren3_1":
                    this.nvyeren.visible = true;
                    this.nvyeren.play("nvyeren3", false);
                    break;
            }
        };
        LevelScene31_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene31_Als.prototype.stopGame = function () { };
        LevelScene31_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.box_rope.visible = true;
                }
                else if (this.index == 1) {
                    this.box_rope.visible = false;
                }
                else if (this.index == 2) {
                    this.nvyeren.play("nvyeren1", true);
                    this.box_rope.visible = false;
                }
                this.box_player.x = this.index * 1300;
                this.box_game.x = -this.index * 1300;
                this.onStart();
            }
        };
        LevelScene31_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene31_Als;
    }(LevelBase_Als));

    var LevelScene32_Als = (function (_super) {
        __extends(LevelScene32_Als, _super);
        function LevelScene32_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene32";
            _this.skin = "game/level/LevelScene32.json";
            return _this;
        }
        LevelScene32_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene32_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene32_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene32_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene32_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            _a = this;
                            return [4, this.createSkeleton(this.mapData.car.url)];
                        case 1:
                            _a.skCar = _f.sent();
                            this.skCar.x = this.mapData.car.x;
                            this.skCar.y = this.mapData.car.y;
                            this.box_enb.addChild(this.skCar);
                            _b = this;
                            return [4, this.createSkeleton(this.mapData.moor.url)];
                        case 2:
                            _b.skMoor = _f.sent();
                            this.skMoor.x = this.mapData.moor.x;
                            this.skMoor.y = this.mapData.moor.y;
                            this.box_enb.addChild(this.skMoor);
                            _c = this;
                            return [4, this.createSkeleton(this.mapData.pit.url)];
                        case 3:
                            _c.skPit = _f.sent();
                            this.skPit.x = this.mapData.pit.x;
                            this.skPit.y = this.mapData.pit.y;
                            this.box_enb.addChild(this.skPit);
                            _d = !this.ani_player;
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 4:
                            _d = (_e.ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = 0;
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene32_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -1400 }, 3800);
                    Laya.Tween.to(this.box_player, { x: 1400 }, 3800);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -3650 }, 4900);
                    Laya.Tween.to(this.box_player, { x: 3340 }, 4900);
                    break;
                case "sevent_keng2_1":
                    this.skPit.play("keng2", false);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -5700 }, 4300);
                    Laya.Tween.to(this.box_player, { x: 5700 }, 4300);
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_player, { x: 6400 }, 1800);
                    Laya.Tween.to(this.box_game, { x: -6400 }, 1800);
                    this.skMoor.visible = true;
                    break;
                case "pmove":
                    this.skCar.visible = true;
                    this.skCar.x = this.box_player.x + 600;
                    Laya.Tween.to(this.box_player, { x: 8000 }, 4000);
                    Laya.Tween.to(this.box_game, { x: -6700 }, 2000);
                    break;
            }
        };
        LevelScene32_Als.prototype.playAni = function (aniName, callBack, isLoop) {
            if (isLoop === void 0) { isLoop = false; }
            switch (aniName) {
                case "32-2":
                    this.skCar.visible = false;
                    break;
                case "32-9":
                    this.skMoor.visible = false;
                    break;
            }
            _super.prototype.playAni.call(this, aniName, callBack, isLoop);
        };
        LevelScene32_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene32_Als.prototype.stopGame = function () { };
        LevelScene32_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                if (this.index == 0) {
                    this.skCar.visible = true;
                    this.box_player.x = this.box_game.x = 0;
                }
                this.onStart();
            }
        };
        LevelScene32_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene32_Als;
    }(LevelBase_Als));

    var LevelScene33_Als = (function (_super) {
        __extends(LevelScene33_Als, _super);
        function LevelScene33_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene33";
            _this.skin = "game/level/LevelScene33.json";
            return _this;
        }
        LevelScene33_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene33_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene33_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene33_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene33_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = ["tv", "dog", "door"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            _a[_b] = _e.sent();
                            this[k].x = obj.x;
                            this[k].y = obj.y;
                            if (k == "tv") {
                                this[k].stop();
                            }
                            if (k == "dog") {
                                this.box_dog.addChild(this[k]);
                            }
                            else {
                                this.box_enb.addChild(this[k]);
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = 0;
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene33_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -1900 }, 3900);
                    Laya.Tween.to(this.box_player, { x: 1580 }, 3900);
                    break;
                case "smove1":
                    this.box_game.setChildIndex(this.box_dog, 1);
                    Laya.Tween.to(this.box_game, { x: -3800 }, 4900);
                    Laya.Tween.to(this.box_player, { x: 3500 }, 4900);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -5000 }, 4900);
                    Laya.Tween.to(this.box_player, { x: 4700 }, 5100);
                    break;
                case "sevent_men_1":
                    this.door.play("men", true);
                    break;
                case "sevent_men1_1":
                    this.door.play("men1", false);
                    break;
                case "sevent_men2_1":
                    this.door.play("men2", false);
                    break;
                case "sevent_gou2_1":
                    this.dog.play("gou2", false);
                    break;
                case "sevent_dianshi_1":
                    this.tv.play("dianshi", false);
                    break;
            }
        };
        LevelScene33_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene33_Als.prototype.stopGame = function () { };
        LevelScene33_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = this.box_game.x = 0;
                        this.dog.play("gou1", true);
                        break;
                }
                this.onStart();
            }
        };
        LevelScene33_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        LevelScene33_Als.prototype.clearData = function () {
            _super.prototype.clearData.call(this);
            this.box_dog.removeChildren();
        };
        return LevelScene33_Als;
    }(LevelBase_Als));

    var LevelScene34_Als = (function (_super) {
        __extends(LevelScene34_Als, _super);
        function LevelScene34_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene34";
            _this.skin = "game/level/LevelScene34.json";
            return _this;
        }
        LevelScene34_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene34_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene34_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene34_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene34_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = [];
                            skAnim = ["light", "zombie", "door", "spider"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            _a[_b] = _e.sent();
                            this.box_enb.addChild(this[k]);
                            this[k].x = obj.x;
                            this[k].y = obj.y;
                            if (k == "door") {
                                this[k].stop();
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene34_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -2200 }, 4500);
                    Laya.Tween.to(this.box_player, { x: 2200 }, 4500);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -3180 }, 5000);
                    Laya.Tween.to(this.box_player, { x: 2860 }, 5000);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -4200 }, 4800);
                    Laya.Tween.to(this.box_player, { x: 3900 }, 4800);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -4700 }, 2800);
                    Laya.Tween.to(this.box_player, { x: 5100 }, 2800);
                    break;
                case "sevent_men_1":
                    this.door.play("men", false);
                    break;
                case "sevent_zhizhu1_1":
                    this.spider.play("zhizhu1", true);
                    break;
                case "sevent_zhizhu3_1":
                    this.spider.play("zhizhu3", false);
                    break;
                case "sevent_zhizhu2_1":
                    this.spider.play("zhizhu2", false);
                    break;
                case "sevent_jiangshi2_1":
                    this.zombie.play("jiangshi2", true);
                    var zindex = this.box_game.getChildIndex(this.box_enb);
                    var pindex = this.box_game.getChildIndex(this.box_player);
                    this.box_game.setChildIndex(this.box_enb, pindex);
                    this.box_game.setChildIndex(this.box_player, zindex);
                    Laya.Tween.to(this.zombie, { x: this.zombie.x - 1000 }, 3000);
                    break;
            }
        };
        LevelScene34_Als.prototype.playAni = function (aniName, callBack, isLoop) {
            if (isLoop === void 0) { isLoop = false; }
            if (aniName == "34-9") {
                this.zombie.visible = false;
            }
            _super.prototype.playAni.call(this, aniName, callBack, isLoop);
        };
        LevelScene34_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene34_Als.prototype.stopGame = function () { };
        LevelScene34_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = this.box_game.x = 0;
                        break;
                    case 1:
                        this.spider.play("zhizhu1", true);
                        break;
                    case 2:
                        this.zombie.visible = true;
                        break;
                    default:
                }
                this.onStart();
            }
        };
        LevelScene34_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene34_Als;
    }(LevelBase_Als));

    var LevelScene35_Als = (function (_super) {
        __extends(LevelScene35_Als, _super);
        function LevelScene35_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene35";
            _this.skin = "game/level/LevelScene35.json";
            return _this;
        }
        LevelScene35_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene35_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene35_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene35_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene35_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = [];
                            skAnim = ["door_1", "door_2"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            _a[_b] = _e.sent();
                            this.box_enb.addChild(this[k]);
                            this[k].x = obj.x;
                            this[k].y = obj.y;
                            if (k == "door_1") {
                                this[k].play("men1", false);
                            }
                            else {
                                this[k].play("men2", false);
                            }
                            this[k].stop();
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = 0;
                            this.box_game.x = 0;
                            this.image_mask.alpha = 1;
                            this.image_mask.visible = true;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene35_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -1800 }, 3000);
                    Laya.Tween.to(this.box_player, { x: 1800 }, 3000);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -2680 }, 3000);
                    Laya.Tween.to(this.box_player, { x: 2300 }, 3000);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -2850 }, 2040);
                    Laya.Tween.to(this.box_player, { x: 2850 }, 2040);
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_game, { x: -2850 }, 2100);
                    Laya.Tween.to(this.box_player, { x: 2850 }, 2100);
                    break;
                case "smove5":
                    Laya.Tween.to(this.box_game, { x: -2850 }, 2100);
                    Laya.Tween.to(this.box_player, { x: 2850 }, 2100);
                    break;
                case "smove6":
                    Laya.Tween.to(this.box_game, { x: -2940 }, 1600);
                    Laya.Tween.to(this.box_player, { x: 3800 }, 2100);
                    break;
                case "sevent_men1_1":
                    this.door_1.play("men1", false);
                    break;
                case "sevent_men2_1":
                    this.door_2.play("men2", false);
                    break;
                case "xs":
                    Laya.Tween.to(this.image_mask, { alpha: 0 }, 1000);
                    break;
            }
        };
        LevelScene35_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene35_Als.prototype.stopGame = function () { };
        LevelScene35_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = this.box_game.x = 0;
                        break;
                    case 2:
                    case 1:
                        this.box_game.x = -2680;
                        this.box_player.x = 2300;
                        break;
                }
                this.onStart();
            }
        };
        LevelScene35_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene35_Als;
    }(LevelBase_Als));

    var LevelScene36_Als = (function (_super) {
        __extends(LevelScene36_Als, _super);
        function LevelScene36_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene36";
            _this.skin = "game/level/LevelScene36.json";
            return _this;
        }
        LevelScene36_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene36_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene36_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene36_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene36_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = [];
                            skAnim = ["obs", "zombie"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            _a[_b] = _e.sent();
                            this.box_enb.addChild(this[k]);
                            this[k].x = obj.x;
                            this[k].y = obj.y;
                            switch (k) {
                                case "obs":
                                    this[k].stop();
                                    this[k].visible = false;
                                    break;
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = 0;
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene36_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
                case "smove":
                    this.box_player.x = 600;
                    Laya.Tween.to(this.box_game, { x: -1810 }, 4500);
                    Laya.Tween.to(this.box_player, { x: 2000 }, 4500);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -2860 }, 3800);
                    Laya.Tween.to(this.box_player, { x: 3060 }, 3800);
                    break;
                case "smove2":
                    Laya.Tween.to(this.zombie, { x: 4000 }, 6700);
                    Laya.Tween.to(this.box_game, { x: -3860 }, 6700);
                    Laya.Tween.to(this.box_player, { x: 4060 }, 6700);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -5000 }, 2400);
                    Laya.Tween.to(this.box_player, { x: 5600 }, 2400);
                    break;
                case "sevent_JS1_1":
                    this.zombie.play("JS1", true);
                    Laya.Tween.to(this.zombie, { x: 2000 }, 4300);
                    break;
                case "sevent_JS2_1":
                    this.zombie.play("JS2", true);
                    break;
                case "sevent_JS3_1":
                    this.zombie.play("JS3", false);
                    break;
                case "sevent_JS4_1":
                    this.zombie.play("JS4", false);
                    break;
                case "sevent_JS5_1":
                    this.zombie.x = 3040;
                    this.zombie.play("JS5", true);
                    break;
                case "sevent_JS6_1":
                    this.zombie.play("JS6", false);
                    break;
                case "sevent_JS7_1":
                    this.zombie.play("JS7", false);
                    break;
                case "sevent_JS8_1":
                    this.zombie.play("JS8", false);
                    break;
                case "sevent_JS9_1":
                    this.zombie.play("JS9", false);
                    break;
                case "sevent_JS10_1":
                    this.zombie.play("JS10", false);
                    break;
                case "sevent_luzhang_1":
                    this.obs.visible = true;
                    this.obs.play("luzhang", false);
                    break;
            }
        };
        LevelScene36_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene36_Als.prototype.stopGame = function () { };
        LevelScene36_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = this.mapData.player.x;
                        this.box_game.x = 0;
                        this.zombie.x = this.mapData.zombie.x;
                        this.obs.visible = false;
                        break;
                }
                this.onStart();
            }
        };
        LevelScene36_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene36_Als;
    }(LevelBase_Als));

    var LevelScene37_Als = (function (_super) {
        __extends(LevelScene37_Als, _super);
        function LevelScene37_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene37";
            _this.skin = "game/level/LevelScene37.json";
            return _this;
        }
        LevelScene37_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene37_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene37_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene37_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene37_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = [];
                            skAnim = ["air", "fire", "robot", "door", "adc", "zombie"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            _a[_b] = _e.sent();
                            this.box_enb.addChild(this[k]);
                            this[k].x = obj.x;
                            this[k].y = obj.y;
                            if (k == "door") {
                                this[k].stop();
                            }
                            else if (k == "air") {
                                this[k].scale(0.7, 0.7);
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = 0;
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene37_Als.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            console.log(evt.name);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -1560 }, 3100);
                    Laya.Tween.to(this.box_player, { x: 1200 }, 3100);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -2630 }, 3200);
                    Laya.Tween.to(this.box_player, { x: 2350 }, 3200);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_game, { x: -3700 }, 5400);
                    Laya.Tween.to(this.box_player, { x: 3500 }, 5400);
                    break;
                case "pmove":
                    Laya.Tween.to(this.box_player, { x: 4500 }, 2400);
                    break;
                case "sevent_wandou1_1":
                    this.adc.play("wandou1", true);
                    break;
                case "sevent_wandou2_1":
                    this.adc.play("wandou2", false);
                    break;
                case "sevent_wandou3_1":
                    this.adc.play("wandou3", false);
                    break;
                case "sevent_jiqiren1_1":
                    this.robot.play("jiqiren1", true);
                    break;
                case "sevent_jiqiren2_1":
                    this.robot.play("jiqiren2", false);
                    break;
                case "sevent_jiqiren3_1":
                    this.robot.play("jiqiren3", false);
                    break;
                case "sevent_jiangshi1_1":
                    this.zombie.play("jiangshi1", true);
                    var zindex = this.box_game.getChildIndex(this.box_enb);
                    var pindex = this.box_game.getChildIndex(this.box_player);
                    this.box_game.setChildIndex(this.box_enb, pindex);
                    this.box_game.setChildIndex(this.box_player, zindex);
                    break;
                case "sevent_jiangshi2_1":
                    this.zombie.play("jiangshi2", false);
                    break;
                case "sevent_jiangshi3_1":
                    this.zombie.once(Laya.Event.STOPPED, this, function () {
                        _this.zombie.visible = false;
                    });
                    this.zombie.play("jiangshi3", false);
                    break;
                case "some4":
                    this.box_player.visible = false;
                    Laya.Tween.to(this.box_game, { x: -5100 }, 2400);
                    break;
                case "sevent_men2_1":
                    this.door.play("men2", false);
                    break;
                case "feiji1move":
                    Laya.Tween.to(this.air, { x: 6400 }, 1400);
                    break;
            }
        };
        LevelScene37_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene37_Als.prototype.stopGame = function () { };
        LevelScene37_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = this.box_game.x = 0;
                        break;
                    case 1:
                        this.robot.play("jiqiren1", true);
                        break;
                    case 2:
                        this.zombie.play("jiangshi1", true);
                        break;
                }
                this.onStart();
            }
        };
        LevelScene37_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        return LevelScene37_Als;
    }(LevelBase_Als));

    var LevelScene40_Als = (function (_super) {
        __extends(LevelScene40_Als, _super);
        function LevelScene40_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene40";
            _this.objEvent = {};
            _this.skin = "game/level/LevelScene40.json";
            return _this;
        }
        LevelScene40_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene40_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene40_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene40_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene40_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, item, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.imgFire.visible = false;
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = [];
                            skAnim = ["fire", "wind", "snow"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            item = _a[_b] = _e.sent();
                            this.box_enb.addChild(this[k]);
                            item.x = obj.x;
                            item.y = obj.y;
                            switch (k) {
                                case "fire":
                                    item.stop();
                                    break;
                                case "wind":
                                    item.visible = false;
                                    break;
                                case "snow":
                                    item.visible = false;
                                    break;
                                default:
                                    break;
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = 0;
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene40_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            console.log(evt.name);
            if (this.checkRepreatEvent(evt.name))
                return;
            switch (evt.name) {
                case "sevent_hj_1":
                    this.fire.play("hj", false);
                    break;
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -1410 }, 3300);
                    Laya.Tween.to(this.box_player, { x: 1410 }, 3300);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_player, { x: 2350 }, 3200);
                    break;
                case "sevent_ljf1_1":
                    this.wind.visible = true;
                    this.wind.alpha = 0;
                    Laya.Tween.to(this.wind, { alpha: 1 }, 1000);
                    this.wind.play("ljf1", true);
                    this.switchZindex(this.box_player, this.box_enb);
                    break;
                case "sevent_ljfx_1":
                    Laya.Tween.to(this.wind, { x: 3000 }, 2000);
                    break;
                case "sevent_ljf2_1":
                    Laya.Tween.to(this.wind, { x: 900 }, 1800);
                    break;
                case "sevent_rain_1":
                    this.snow.play("rain", true);
                    this.snow.visible = true;
                    break;
            }
        };
        LevelScene40_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene40_Als.prototype.stopGame = function () { };
        LevelScene40_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.objEvent = {};
            this.switchZindex(this.box_player, this.box_enb);
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = this.box_game.x = 0;
                        this.wind.visible = false;
                        break;
                    case 2:
                        this.wind.x = 3000;
                        break;
                }
                this.onStart();
            }
        };
        LevelScene40_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        LevelScene40_Als.prototype.switchZindex = function (pItem1, pItem2) {
            var zindex = this.box_game.getChildIndex(pItem1);
            var pindex = this.box_game.getChildIndex(pItem2);
            this.box_game.setChildIndex(pItem1, pindex);
            this.box_game.setChildIndex(pItem2, zindex);
        };
        LevelScene40_Als.prototype.checkRepreatEvent = function (strName) {
            if (this.objEvent[strName]) {
                return true;
            }
            else {
                this.objEvent[strName] = 1;
                return false;
            }
        };
        return LevelScene40_Als;
    }(LevelBase_Als));

    var LevelScene39_Als = (function (_super) {
        __extends(LevelScene39_Als, _super);
        function LevelScene39_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene39";
            _this.objEvent = {};
            _this.skin = "game/level/LevelScene39.json";
            return _this;
        }
        LevelScene39_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene39_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene39_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene39_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene39_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, item, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = [];
                            skAnim = ["dianxian", "qiangti", "shiwu"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            item = _a[_b] = _e.sent();
                            this.box_enb.addChild(this[k]);
                            item.x = obj.x;
                            item.y = obj.y;
                            if (k == "qiangti") {
                                item.stop();
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = -500;
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene39_Als.prototype.onPlayLabel = function (evt) {
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            console.log(evt.name);
            if (this.checkRepreatEvent(evt.name))
                return;
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_player, { x: 0 }, 1670);
                    break;
                case "sevent_39dianxian2_1":
                    this.image_special.visible = false;
                    this.dianxian.play("39dianxian2", false);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -1176 }, 2580);
                    break;
                case "sevent_39qiangti1_1":
                    this.qiangti.play("39qiangti1", false);
                    break;
                case "sevent_39qiangti2_1":
                    this.qiangti.play("39qiangti2", true);
                    break;
                case "sevent_39qiangti3_1":
                    this.image_special.visible = true;
                    this.qiangti.play("39qiangti3", false);
                    break;
                case "sevent_39qiangti4_1":
                    this.qiangti.play("39qiangti4", false);
                    break;
                case "sevent_39qiangti5_1":
                    this.qiangti.play("39qiangti5", false);
                    break;
                case "sevent_39shiwu1_1":
                    this.shiwu.play("39shiwu1", true);
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: -2352 }, 2500);
                    Laya.Tween.to(this.box_player, { x: 100 }, 2500);
                    break;
                case "smove3":
                    Laya.Tween.to(this.box_player, { x: 1080 }, 2500);
                    break;
            }
        };
        LevelScene39_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene39_Als.prototype.stopGame = function () { };
        LevelScene39_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.objEvent = {};
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = -500;
                        break;
                    case 1:
                        this.image_special.visible = false;
                        break;
                    case 2:
                }
                this.onStart();
            }
        };
        LevelScene39_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        LevelScene39_Als.prototype.checkRepreatEvent = function (strName) {
            if (this.objEvent[strName]) {
                return true;
            }
            else {
                this.objEvent[strName] = 1;
                return false;
            }
        };
        return LevelScene39_Als;
    }(LevelBase_Als));

    var LevelScene38_Als = (function (_super) {
        __extends(LevelScene38_Als, _super);
        function LevelScene38_Als(data_) {
            var _this = _super.call(this, data_) || this;
            _this.className_key = "LevelScene38";
            _this.skin = "game/level/LevelScene38.json";
            return _this;
        }
        LevelScene38_Als.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        LevelScene38_Als.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        LevelScene38_Als.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this.stopAni();
        };
        LevelScene38_Als.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.stopAni();
        };
        LevelScene38_Als.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var skAnim, _i, skAnim_1, k, obj, item, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            skAnim = [];
                            skAnim = ["light", "fire", "monitoring", "door", "water", "smog"];
                            _i = 0, skAnim_1 = skAnim;
                            _e.label = 1;
                        case 1:
                            if (!(_i < skAnim_1.length)) return [3, 4];
                            k = skAnim_1[_i];
                            obj = this.mapData[k];
                            _a = this;
                            _b = k;
                            return [4, this.createSkeleton(obj.url)];
                        case 2:
                            item = _a[_b] = _e.sent();
                            this.box_enb.addChild(item);
                            item.x = obj.x;
                            item.y = obj.y;
                            switch (k) {
                                case "light":
                                    item.play("deng2", true);
                                    break;
                                case "water":
                                    item.visible = false;
                                    break;
                                case "smog":
                                case "fire":
                                    item.stop();
                                    break;
                            }
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _c = !this.ani_player;
                            if (!_c) return [3, 6];
                            _d = this;
                            return [4, this.createSkeleton(this.mapData.player.url)];
                        case 5:
                            _c = (_d.ani_player = _e.sent());
                            _e.label = 6;
                        case 6:
                            this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
                            this.ani_player.x = this.mapData.player.x;
                            this.ani_player.y = this.mapData.player.y;
                            this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.box_player.addChild(this.ani_player);
                            this.box_player.x = 0;
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            return [2];
                    }
                });
            });
        };
        LevelScene38_Als.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.bAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            console.log(evt.name);
            switch (evt.name) {
                case "smove":
                    Laya.Tween.to(this.box_game, { x: -1600 }, 3700);
                    Laya.Tween.to(this.box_player, { x: 1340 }, 3700);
                    break;
                case "smove1":
                    Laya.Tween.to(this.box_game, { x: -2650 }, 3900);
                    Laya.Tween.to(this.box_player, { x: 2420 }, 3900);
                    break;
                case "smove2":
                    this.switchZindex(this.box_player, this.box_enb);
                    Laya.Tween.to(this.box_game, { x: -3700 }, 5400);
                    Laya.Tween.to(this.box_player, { x: 3500 }, 5400);
                    break;
                case "smove3":
                    this.switchZindex(this.box_player, this.box_enb);
                    Laya.Tween.to(this.box_game, { x: -5300 }, 5800);
                    Laya.Tween.to(this.box_player, { x: 5500 }, 5800);
                case "sevent_jiankong1_1":
                    this.monitoring.play("jiankong1", true);
                    break;
                case "sevent_jiankong2_1":
                    this.monitoring.play("jiankong2", false);
                    break;
                case "sevent_jiankong3_1":
                    this.monitoring.play("jiankong3", false);
                    break;
                case "sevent_deng_1":
                    this.light.play("deng", true);
                    break;
                case "sevent_yanwu1_1":
                    this.smog.once(Laya.Event.STOPPED, this, function () {
                        _this.smog.visible = false;
                    });
                    this.smog.play("yanwu1", false);
                    break;
                case "sos":
                    this.imgMask.alpha = 0.6;
                    break;
                case "sos1":
                case "sos2":
                    Laya.Tween.to(this.imgMask, { alpha: 0 }, 600);
                    break;
                case "sevent_men1_1":
                    break;
                case "sevent_shui_1":
                    this.water.visible = true;
                    break;
                case "sevent_huojian_1":
                    this.fire.play("huojian", false);
                    Laya.timer.once(500, this, function () {
                        Laya.Tween.to(_this.fire, { y: (_this.mapData.fire.y - 2400) }, 1400, Laya.Ease.circIn);
                    });
                    break;
            }
        };
        LevelScene38_Als.prototype.startGame = function () {
            this.clearData();
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        LevelScene38_Als.prototype.stopGame = function () { };
        LevelScene38_Als.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                this.initView();
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                _super.prototype.restartGame.call(this);
                switch (this.index) {
                    case 0:
                        this.box_player.x = this.box_game.x = 0;
                        this.light.play("deng2", true);
                        break;
                    case 2:
                        this.water.visible = false;
                        this.imgMask.alpha = 0.6;
                        break;
                }
                this.onStart();
            }
        };
        LevelScene38_Als.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
        };
        LevelScene38_Als.prototype.switchZindex = function (pItem1, pItem2) {
            var zindex = this.box_game.getChildIndex(pItem1);
            var pindex = this.box_game.getChildIndex(pItem2);
            this.box_game.setChildIndex(pItem1, pindex);
            this.box_game.setChildIndex(pItem2, zindex);
        };
        return LevelScene38_Als;
    }(LevelBase_Als));

    var LevelManager_Als = (function () {
        function LevelManager_Als() {
            this.levelBaseUrl = 'resource/assets/configs/map/map';
            this.nCurLevel = 0;
        }
        LevelManager_Als.getInstance = function () {
            if (!LevelManager_Als.ins)
                LevelManager_Als.ins = new LevelManager_Als();
            return LevelManager_Als.ins;
        };
        LevelManager_Als.prototype.createLevelScene = function (level) {
            return __awaiter(this, void 0, void 0, function () {
                var classKey, jsonPath, data, stGroup, self;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            switch (level) {
                                case 1:
                                    classKey = LevelScene1_Als;
                                    break;
                                case 2:
                                    classKey = LevelScene2_Als;
                                    break;
                                case 3:
                                    classKey = LevelScene3_Als;
                                    break;
                                case 4:
                                    classKey = LevelScene4_Als;
                                    break;
                                case 5:
                                    classKey = LevelScene5_Als;
                                    break;
                                case 6:
                                    classKey = LevelScene6_Als;
                                    break;
                                case 7:
                                    classKey = LevelScene7_Als;
                                    break;
                                case 8:
                                    classKey = LevelScene8_Als;
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
                                    classKey = LevelScene8_Als;
                                    break;
                                case 14:
                                    classKey = LevelScene14_Als;
                                    break;
                                case 15:
                                    classKey = LevelScene8_Als;
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
                                    break;
                                case 26:
                                    classKey = LevelScene26_Als;
                                    break;
                                case 27:
                                    classKey = LevelScene27_Als;
                                    break;
                                case 28:
                                    classKey = LevelScene8_Als;
                                    break;
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
                                    break;
                            }
                            PlayerDataManager_Als.getInstance().setCurLevel(level - 1);
                            MiniManeger_Als.instance.reportMonitorSome(MiniEventConst_Als.GAME_PLAY_LEVEL + "_" + level, 1);
                            if (DeviceUtil.isTTMiniGame()) {
                                MiniManeger_Als.instance.hideBanner();
                            }
                            jsonPath = this.levelBaseUrl + level + '.json';
                            console.log("jsonPath: ", jsonPath);
                            return [4, GameManager_Als.instance.loadCongigs(jsonPath)];
                        case 1:
                            data = _a.sent();
                            stGroup = [];
                            stGroup.push(level.toString());
                            ViewChangeManager_Als.getInstance().showBufferLoadingView();
                            self = this;
                            ResUtil.getIntance().loadGroups(stGroup, function () {
                                if (self.currentGameScence) {
                                    self.currentGameScence.destroyAni();
                                    if (_this.nCurLevel != 0) {
                                        self.currentGameScence.destroy();
                                        if (_this.nCurLevel != level) {
                                            var lastLevel = _this.nCurLevel;
                                            ResUtil.getIntance().destoryGroup("" + lastLevel);
                                            Laya.Resource.destroyUnusedResources();
                                        }
                                    }
                                    self.currentGameScence = null;
                                }
                                _this.nCurLevel = level;
                                self.currentGameScence = new classKey(data);
                                self.currentGameScence.viewData_ = data;
                                self.currentGameScence.mapData = data;
                                SceneManager.getInstance().openSceneInstance(self.currentGameScence);
                                ViewChangeManager_Als.getInstance().hideBufferLoadingView();
                            });
                            Laya.timer.once(2000, this, function () {
                                if (level < PlayerDataManager_Als.getInstance().getLevelNumMakeOver()) {
                                    stGroup = [];
                                    var nNextLevel = level + 1;
                                    stGroup.push((nNextLevel).toString());
                                    ResUtil.getIntance().loadGroups(stGroup);
                                }
                            });
                            return [2];
                    }
                });
            });
        };
        return LevelManager_Als;
    }());

    var GameBufferLoading_Als = (function (_super) {
        __extends(GameBufferLoading_Als, _super);
        function GameBufferLoading_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameBufferLoading";
            _this.bg_img_res = "game_panel_db_png";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.init();
            return _this;
        }
        GameBufferLoading_Als.prototype.init = function () {
            if (!this.bg_img) {
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.bg_img.alpha = 0.7;
                this.addChild(this.bg_img);
                this.mouseEnabled = true;
                this.bg_img.mouseEnabled = true;
                this.bg_img.mouseThrough = false;
            }
            if (!this.img_circle) {
                this.img_circle = new Laya.Image();
                this.img_circle.skin = "resource/assets/img/loading_circle.png";
                this.img_circle.anchorX = this.img_circle.anchorY = 0.5;
                this.img_circle.centerX = this.img_circle.centerY = 0;
                this.addChild(this.img_circle);
            }
        };
        GameBufferLoading_Als.prototype.setLabelInfo = function (info) {
        };
        GameBufferLoading_Als.prototype.onShow = function () {
            if (this.img_circle) {
                this.img_circle.rotation = 0;
                Laya.Tween.to(this.img_circle, { rotation: 360 }, 500, null, Laya.Handler.create(this, this.onShow));
            }
        };
        GameBufferLoading_Als.prototype.onHidd = function () {
            if (this.img_circle) {
                Laya.Tween.clearAll(this.img_circle);
            }
        };
        return GameBufferLoading_Als;
    }(Laya.Sprite));

    var CommonView_Als = (function (_super) {
        __extends(CommonView_Als, _super);
        function CommonView_Als() {
            var _this = _super.call(this) || this;
            _this.className_key = "CommonView";
            _this.skin = "game/uiView/CommonView.json";
            _this.width = 600;
            _this.height = 200;
            return _this;
        }
        CommonView_Als.prototype.addEventUpdateView = function () {
            this.sp.on(Laya.Event.CLICK, this, this.openAddSp_Als);
            EventMgr.getInstance().addEvent(GameEvent_Als.ON_PS_CHANGE, this, this.refreshSPV_Als);
            EventMgr.getInstance().addEvent(GameEvent_Als.ON_GLOD_CHANGE, this, this.refreshGV_Als);
            EventMgr.getInstance().addEvent(GameEvent_Als.ON_SP_UPDOWN_TIME, this, this.refreshTLT_Als);
            EventMgr.getInstance().addEvent(GameEvent_Als.PS_LIMITLESS, this, this.refreshPSLL_Als);
        };
        CommonView_Als.prototype.onAddStage = function () {
            if (!this.isCreate) {
                return;
            }
            this.refreshSPV_Als();
            this.refreshGV_Als();
            this.refreshTV_Als();
            this.addEventUpdateView();
            this.refreshPSLL_Als();
        };
        CommonView_Als.prototype.onRemoved = function () {
            this.removeEUV();
        };
        CommonView_Als.prototype.removeEUV = function () {
            this.sp.off(Laya.Event.CLICK, this, this.openAddSp_Als);
            EventMgr.getInstance().removeEvent(GameEvent_Als.ON_PS_CHANGE, this, this.refreshSPV_Als);
            EventMgr.getInstance().removeEvent(GameEvent_Als.ON_GLOD_CHANGE, this, this.refreshGV_Als);
            EventMgr.getInstance().removeEvent(GameEvent_Als.ON_SP_UPDOWN_TIME, this, this.refreshTLT_Als);
            EventMgr.getInstance().removeEvent(GameEvent_Als.PS_LIMITLESS, this, this.refreshPSLL_Als);
        };
        CommonView_Als.prototype.abte_alt = function () {
            this.imageBtAttSp.visible = true;
            this.sp && this.sp.on(Laya.Event.CLICK, this, this.openAddSp_Als);
        };
        CommonView_Als.prototype.rmobtev_alt = function () {
            this.imageBtAttSp.visible = false;
            this.sp && this.sp.off(Laya.Event.CLICK, this, this.openAddSp_Als);
        };
        CommonView_Als.prototype.refreshSPV_Als = function () {
            if (!this.isCreate) {
                return;
            }
            if (!PlayerDataManager_Als.getInstance().isPsLimitlessState()) {
                BitmapLabelUtils.setLabel(this.spNum, PlayerDataManager_Als.getInstance().stPlayerDataBase.nPS.toString(), "resource/assets/img/ui/gamehome/maininterface_number1/maininterface_number1_", 0, ".png", "center");
                this.refreshTV_Als();
            }
        };
        CommonView_Als.prototype.openAddSp_Als = function () {
            Als_SoundManager.getInstance().playEffect("button", 1);
            GameCenterManager_Als.getInstance().oppenAddSpView();
        };
        CommonView_Als.prototype.refreshTV_Als = function () {
            if (PlayerDataManager_Als.getInstance().isPsLimitlessState()) {
                return;
            }
            var nSpTimeMax = 5;
            var stGameData = ConfigManager_Als.getInstance().getGameConfigDataByID(1);
            if (stGameData) {
                nSpTimeMax = parseInt(stGameData.strValue);
            }
            if (nSpTimeMax <= PlayerDataManager_Als.getInstance().stPlayerDataBase.nPS) {
                this.imageSpFull.visible = true;
                this.stLableTime.visible = false;
                this.stLableTime.text = "";
            }
            else {
                this.imageSpFull.visible = false;
                this.stLableTime.visible = true;
            }
        };
        CommonView_Als.prototype.refreshGV_Als = function () {
            if (!this.isCreate) {
                return;
            }
            BitmapLabelUtils.setLabel(this.glodNum, PlayerDataManager_Als.getInstance().stPlayerDataBase.nGlodCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        };
        CommonView_Als.prototype.refreshPSLL_Als = function () {
            if (!PlayerDataManager_Als.getInstance().isPsLimitlessState()) {
                return;
            }
            this.stLableTime.visible = false;
            this.spNum.visible = false;
            this.imageSpFull.visible = true;
            this.imageSpFull.skin = "resource/assets/img/ui/gamehome/maininterface_word_3.png";
            this.sp.skin = "resource/assets/img/ui/gamehome/maininterface_baseboard_1_2.png";
        };
        CommonView_Als.prototype.refreshTLT_Als = function () {
            if (PlayerDataManager_Als.getInstance().isPsLimitlessState()) {
                return;
            }
            this.imageSpFull.visible = false;
            this.stLableTime.visible = true;
            this.stLableTime.text = PlayerDataManager_Als.getInstance().getSpLastTime();
        };
        return CommonView_Als;
    }(BaseSceneUISkin));

    var ViewChangeManager_Als = (function () {
        function ViewChangeManager_Als() {
            this.image_exit = null;
            EventMgr.getInstance().addEvent("onRemove", this, this.onRemove);
        }
        ViewChangeManager_Als.getInstance = function () {
            if (!ViewChangeManager_Als.instance) {
                ViewChangeManager_Als.instance = new ViewChangeManager_Als();
            }
            return ViewChangeManager_Als.instance;
        };
        ViewChangeManager_Als.prototype.onRemove = function () {
            if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                MiniManeger_Als.instance.showInsertAd({});
            }
        };
        Object.defineProperty(ViewChangeManager_Als.prototype, "CommonView", {
            get: function () {
                if (!this.pCommonView) {
                    this.pCommonView = new CommonView_Als();
                    this.pCommonView.x = 0;
                    this.pCommonView.y = 0;
                }
                return this.pCommonView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewChangeManager_Als.prototype, "CurLevelBase", {
            get: function () {
                return this.pCurLevelBase;
            },
            set: function (pCurLevelBase) {
                this.pCurLevelBase = pCurLevelBase;
            },
            enumerable: true,
            configurable: true
        });
        ViewChangeManager_Als.prototype.showCommonView = function () {
            Laya.stage.addChild(this.CommonView);
        };
        ViewChangeManager_Als.prototype.hideCommonView = function () {
            this.CommonView.parent && Laya.stage.removeChild(this.CommonView);
        };
        ViewChangeManager_Als.prototype.gotoLevel = function (nCurLevel) {
            PlayerDataManager_Als.getInstance().setCurLevel(nCurLevel - 1);
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_ChooseLevel;
            LevelManager_Als.getInstance().createLevelScene(nCurLevel);
        };
        ViewChangeManager_Als.prototype.goToNextLevel = function () {
            MiniManeger_Als.instance.StopVideo();
            this.pCurLevelBase.closeGameView();
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_Next;
            PlayerDataManager_Als.getInstance().addLevel();
            LevelManager_Als.getInstance().createLevelScene(PlayerDataManager_Als.getInstance().getCurLevelToChallenge());
        };
        ViewChangeManager_Als.prototype.restartGame = function (bAll) {
            if (bAll === void 0) { bAll = true; }
            GameStateManager_Als.getInstance().levelState = EnterGameType.enum_EnterGameType_ReStart;
            this.pCurLevelBase.restartGame(bAll);
        };
        ViewChangeManager_Als.prototype.rigestBufferLoadingView = function () {
            BufferLoadingManger.getInstance().registerOneBuffer("gamebuffer", new GameBufferLoading_Als());
        };
        ViewChangeManager_Als.prototype.showBufferLoadingView = function () {
            BufferLoadingManger.getInstance().showBuffer("gamebuffer");
            Laya.timer.clear(this, this.hideBufferLoadingView);
            Laya.timer.once(30000, this, this.hideBufferLoadingView);
        };
        ViewChangeManager_Als.prototype.hideBufferLoadingView = function () {
            Laya.timer.clear(this, this.hideBufferLoadingView);
            BufferLoadingManger.getInstance().hiddBuffer("gamebuffer");
        };
        ViewChangeManager_Als.prototype.startGame = function () {
            if (!BaseConst.infos.gameInfo.isDY) {
                return;
            }
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame())
                return;
            PlatformDY.startGame();
        };
        ViewChangeManager_Als.prototype.endGame = function () {
            if (!BaseConst.infos.gameInfo.isDY) {
                return;
            }
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame())
                return;
            PlatformDY.endGame({ id: PlatformDY.nGameID, level: PlayerDataManager_Als.getInstance().getCurLevelToChallenge() });
        };
        ViewChangeManager_Als.prototype.showImageExit = function () {
            if (!DeviceUtil.isWXMiniGame()) {
                return;
            }
            if (PlayerDataManager_Als.getInstance().stOperData0807.bSpecial == false) {
                console.log("GameDataMgr.getInstance().enterGameInfo", Als_GameData.getInstance().enterGameInfo);
                if (Als_GameData.getInstance().enterGameInfo == {}) {
                    return;
                }
                if (!Als_GameData.getInstance().enterGameInfo.referrerInfo.appId) {
                    return;
                }
                if ("wxcff7381e631cf54e" == Als_GameData.getInstance().enterGameInfo.referrerInfo.appId) {
                    return;
                }
            }
            PlayerDataManager_Als.getInstance().stOperData0807.bSpecial = true;
            if (this.image_exit) {
                return;
            }
            this.image_exit = new Laya.Image();
            this.image_exit.skin = "resource/assets/img/wecat/button.png";
            this.image_exit.right = 23;
            this.image_exit.top = 220;
            Laya.stage.addChild(this.image_exit);
            this.image_exit.on(Laya.Event.CLICK, this, this.onImageExit);
            PlayerDataManager_Als.getInstance().SaveData();
        };
        ViewChangeManager_Als.prototype.onImageExit = function () {
            MoreGameView_Als.bSpeical = true;
            ViewManager.getInstance().showView(MoreGameView_Als);
        };
        ViewChangeManager_Als.prototype.showImageExitTemp = function () {
            if (this.image_exit) {
                this.image_exit.visible = true;
            }
        };
        ViewChangeManager_Als.prototype.hideImageExitTemp = function () {
            if (this.image_exit) {
                this.image_exit.visible = false;
            }
        };
        ViewChangeManager_Als.prototype.restartEnterGameHome = function () {
            if (!DeviceUtil.isWXMiniGame()) {
                return;
            }
            if (PlayerDataManager_Als.getInstance().bIsNewPlayer) {
                PlayerDataManager_Als.bGlobEnterGame = false;
                return;
            }
            if (BaseConst.infos.gameInfo.openPsAward == 0) {
                PlayerDataManager_Als.bGlobEnterGame = false;
                return;
            }
            PlayerDataManager_Als.bGlobEnterGame = true;
            WeCatMoreGameView_Als.nEnterCount = 0;
            ViewManager.getInstance().showView(MoreGameOperRequest_Als);
            this.hideCommonView();
        };
        ViewChangeManager_Als.prototype.enterGameHomeNotNewPlayer = function () {
            if (!PlayerDataManager_Als.bGlobEnterGame || PlayerDataManager_Als.getInstance().bIsNewPlayer) {
                return;
            }
            ViewManager.getInstance().showView(MoreGameOperRequest_Als);
            this.hideCommonView();
        };
        ViewChangeManager_Als.bGameOpen = false;
        return ViewChangeManager_Als;
    }());

    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = _super.call(this, { width: 1080, height: 1920, exportSceneToJson: true }) || this;
            _this.isFlage = false;
            GameConfig.init();
            var onShow = function (obj) {
                console.log("onShow...", obj);
                Als_SoundManager.getInstance().playBgMusic();
                if (ViewChangeManager_Als.bGameOpen) {
                    if (ViewChangeManager_Als.getInstance().CurLevelBase) {
                        ViewChangeManager_Als.getInstance().CurLevelBase.levelOnShow();
                    }
                }
            };
            var onHide = function () {
                console.log("onHide...");
                Als_SoundManager.getInstance().pauseBgm();
                if (ViewChangeManager_Als.getInstance().CurLevelBase) {
                    ViewChangeManager_Als.getInstance().CurLevelBase.levelOnHide();
                }
            };
            var onAudioInterruptionBegin = function (res) {
                console.log("onAudioInterruptionBegin");
                Als_SoundManager.getInstance().pauseBgm();
            };
            var onAudioInterruptionEnd = function (res) {
                console.log("onAudioInterruptionEnd");
                Als_SoundManager.getInstance().playBgMusic();
            };
            if (DeviceUtil.isMiniGame()) {
                Als_GameData.getInstance().enterGameInfo = platform.getLaunchOptionsSync();
                MiniManeger_Als.instance.onShow(onShow);
                MiniManeger_Als.instance.onHide(onHide);
                MiniManeger_Als.instance.onAudioInterruptionBegin(onAudioInterruptionBegin);
                MiniManeger_Als.instance.onAudioInterruptionEnd(onAudioInterruptionEnd);
                MiniManeger_Als.instance.initMiniGame();
            }
            else {
                Laya.stage.on(Laya.Event.FOCUS, _this, function () {
                    console.log("获取焦点");
                    onShow(null);
                });
                Laya.stage.on(Laya.Event.BLUR, _this, function () {
                    console.log("失去焦点");
                    onHide();
                });
            }
            return _this;
        }
        Main.prototype.checkPlatform = function () {
            GameCenterManager_Als.getInstance().pLoadingView = new GamePreLoadingView_Als();
            SceneManager.getInstance().openSceneInstance(GameCenterManager_Als.getInstance().pLoadingView);
            console.log("检验平台---");
            var self = this;
            if (window["loadingH5"]) {
                window["loadingH5"](100);
            }
            var resUrl = "./";
            if (DeviceUtil.isQQMiniGame()) {
                Als_GameData.getInstance().gameId = "1044";
                resUrl = Als_GameData.getInstance().perFixUrl + "/qq_res/qq_res_v_z_3_7/";
            }
            else if (DeviceUtil.isWXMiniGame()) {
                Als_GameData.getInstance().gameId = "1043";
                resUrl = Als_GameData.getInstance().perFixUrl + "/wx_res_remp/wx_res_v_z_1_0/";
            }
            else if (DeviceUtil.isTTMiniGame()) {
                resUrl = Als_GameData.getInstance().perFixUrl + "/tt/tt_res_v_z_3_4/";
            }
            else {
                self.initDebug();
            }
            if (DeviceUtil.isMiniGame()) {
                if (!DeviceUtil.isVIVOMiniGame()) {
                    Laya.timer.loop(10000, window, function () {
                        console.log("tt加速回收---");
                        platform.triggerGC();
                    });
                }
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
            }
            self.loadPreLoadRes(resUrl + "configs/infos.json?v=" + Math.random());
        };
        Main.prototype.loadPreLoadRes = function (resUrl) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.initInfos(resUrl);
                    Laya.timer.once(5000, this, this.loadPreLoadRes, [resUrl]);
                    return [2];
                });
            });
        };
        Main.prototype.enableFileConfig = function () {
            Laya.timer.clearAll(this);
            if (this.isFlage) {
                return;
            }
            this.isFlage = true;
            console.log(BaseConst.infos);
            Als_GameData.getInstance().initConfig(BaseConst.infos);
            MiniManeger_Als.instance.showBannerAd();
            if (DeviceUtil.isQQMiniGame()) {
                MiniManeger_Als.instance.initBoxAd();
            }
            this.loadFileConfig("fileconfig.json");
            MiniManeger_Als.instance.checkCityInfo();
        };
        Main.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    GameCenterManager_Als.getInstance().loadRes_Als();
                    return [2];
                });
            });
        };
        return Main;
    }(BaseContent));
    new Main();

}());
