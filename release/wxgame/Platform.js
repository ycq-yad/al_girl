// var url = "http://172.17.3.217:8090/MiniGame.fcgi";
var url = "";
var appid = "wx923b53bdf01e3fd2";
var secret = "f58dcdfd5fd0f69898f1e1d567e22c20";
//var appid = "wxc6fb330d6fe26e8c";
//var secret = "8b9024b5c6dbdc3fff0af8359ae03c62";
//var appid = "wxcace41a450c9e662";
//var secret = "6bbc1359fc32f02ade3d710aaa374aa9";

// 视频组件
var videoAd;
var binnerData = null;
var funReSize;
var funError;

class WxgamePlatform {
  compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)

    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }

    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])

      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }

    return 0
  }
  /**
   * 获取小游戏启动时的参数
   */
  getLaunchOptionsSync() {
    return wx.getLaunchOptionsSync();
  }

  /**
   * 监听小游戏回到前台的事件
   */
  onShow(callback) {
    wx.onShow(callback);
  }

  /**
   * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
   */
  onHide(callback) {
    wx.onHide(callback);
  }

  //登陆
  login() {
    return new Promise((resolve, reject) => {
      wx.login({
        success(res) {
          if (res.code) {
            console.log("code:", res.code);
            let urlappend = "appid=" + appid + "&secret=" + secret + "&js_code=" + res.code + "&grant_type=authorization_code";
            // 发起网络请求
            wx.request({
              url: url,
              method: "POST",
              data: {
                msg_type: "1",
                msg_data: {
                  url_append: urlappend,
                }
              },
              success: res2 => {
                console.log("getsisson 返回 ====>", res2);
                resolve(res2.data.msg_data);
              },
              fail: (res) => {
                reject();
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    });
  }


  //授权并登陆
  authorize() {
    return new Promise((resolve, reject) => {
      function login() {
        wx.login({
          success(res) {
            if (res.code) {
              console.log("code:", res.code);
              let urlappend = "appid=" + appid + "&secret=" + secret + "&js_code=" + res.code + "&grant_type=authorization_code";
              // 发起网络请求
              wx.request({
                url: url,
                method: "POST",
                data: {
                  msg_type: "1",
                  msg_data: {
                    url_append: urlappend,
                  }
                },
                success: res2 => {
                  console.log("getsisson 返回 ====>", res2);
                  resolve(res2.data.msg_data);
                },
                fail: (res) => {
                  reject();
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      };
    });
  }

  //创建授权按钮
  createUserInfoButton(onTap) {
    wx.getSetting({
      success(res) {
        console.log(res);
        // if (res.authSetting["scope.userInfo"]) {
        //     console.log("用户已经授权!");
        //     return
        // }
        // console.log("没有授权 获取用户信息!");
        //没有授权 获取用户信息
        console.log("创建授权 createUserInfoButton");
        var button = wx.createUserInfoButton({
          type: "text",
          text: "",
          // image:"",
          style: {
            alpha: 0,
            left: -300,
            top: 0,
            width: 2000,
            height: 4000,
            lineHeight: 40,
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            borderRadius: 4
          },
          withCredentials: false
        });
        button.onTap((res) => {
          console.log(res)
          if (res.errMsg.indexOf("ok") == -1) {
            console.log("用户授权失败！");
            return
          }
          console.log("用户授权成功！");
          button.destroy();
          if (onTap) {
            onTap(res);
          }
        });
      },
      fail(err) {
        console.log("创建授权按钮 失败 ", err);
      }
    });

  }

  //获取用户信息
  getUserInfo() {
    return new Promise((resolve) => {
      wx.getUserInfo({
        success(res) {
          console.log("用户信息:", res);
          resolve(res.userInfo);
        }
      });
    });
  }

  shareAppMessage(obj) {
    wx.shareAppMessage(obj);
  }

  /**
   * 创建并返回内部 audio 上下文 `innerAudioContext` 对象。*本接口是 `wx.createAudioContext` 升级版。*
   */
  createInnerAudioContext() {
    return wx.createInnerAudioContext();
  }

  /**获取token */
  getToken() {
    // 发起网络请求 获取token
    let urlappend = "grant_type=client_credential&appid=" + appid + "&secret=" + secret + "";
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: "POST",
        data: {
          msg_type: "2",
          msg_data: {
            url_append: urlappend,
          }
        },
        success: res2 => {
          console.log("getToken 返回 ====>", res2);
          resolve(res2.data.msg_data);
        },
        fail: (res) => {
          reject();
        }
      });
    });
  }

  /**
   * 上报数据
   * @param {*} name 
   * @param {*} value 
   */
  reportMonitor(name, value) {
    var phone = wx.getSystemInfoSync();
    if (this.compareVersion(phone.SDKVersion, "2.1.2") < 0) {
      return
    }
    wx.reportMonitor(name, value);
  }

  /** 创建 banner 广告组件*/
  createBannerAd(adUnitId) {
    console.log("创建 banner 广告组件-->" + adUnitId);
    var phone = wx.getSystemInfoSync();
    console.log(phone);
    var w = phone.screenWidth / 2;
    var h = phone.screenHeight;
    let bannerAd = wx.createBannerAd({
      adUnitId: adUnitId,
      adIntervals: 30,
      style: {
        top: 0,
        left: 0,
        width: 300,
        height: 90
      }
    });
	
	funReSize = function () {
      bannerAd.style.left = w - bannerAd.style.realWidth / 2 + 0.1;
      bannerAd.style.top = h - bannerAd.style.realHeight + 0.1;
      console.log("onResize",bannerAd);
    }
    bannerAd.onResize(funReSize);

    bannerAd.hide();
	
	funError =  (data) => {
      console.warn(data.errMsg);

      switch (data.errCode) {
        case 1000:
          console.warn("后端接口调用失败");
          break;
        case 1001:
          console.warn("参数错误");
          break;
        case 1002:
          console.warn("广告单元无效");
          break;
        case 1003:
          console.warn("内部错误");
          break;
        case 1004:
          console.warn("无合适的广告");
          break;
        case 1005:
          console.warn("广告组件审核中");
          break;
        case 1006:
          console.warn("广告组件被驳回");
          break;
        case 1007:
          console.warn("广告组件被封禁");
          break;
        case 1008:
          console.warn("广告单元已关闭");
          break;
      }
    }

    bannerAd.onError(funError);
	binnerData = bannerAd;
    return bannerAd;
  }
  
  binnerDestroy(){
	if(!binnerData)
		return;
	binnerData.offResize(funReSize);
	binnerData.offError(funError);
	binnerData.destroy();
	binnerData = null;
  }

  /**
   * 获取系统信息
   */
  getSystemInfo() {
    //获取系统信息
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success(res) {
          console.log("systemInfo : ", res);
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
        complete() { },
      });
    });
  }

  /**
   * 支付 num数量
   */
  requestMidasPayment(num, prepayid, success, fail) {
    let obj = {
      mode: "game",
      offerId: 1450022683,
      env: 0,
      currencyType: "CNY",
      platform: "android",
      zoneId: 1,
      buyQuantity: num,
      success: success,
      fail: fail
    }
    wx.requestMidasPayment(obj);
  }

  /**
   * 短震动
   */
  vibrateShort(obj) {
    console.log("wx.vibrateShort");
    wx.vibrateShort({
      complete: () => {
        obj.complete && obj.complete();
      }
    });
  }

  /**
   * 长震动
   */
  vibrateLong() {
    wx.vibrateLong();
  }

  /**
   * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效
   */
  setKeepScreenOn() {
    wx.setKeepScreenOn({
      keepScreenOn: true
    });
  }

  /**
   * 更新转发属性
   */
  updateShareMenu() {
    wx.updateShareMenu({
      withShareTicket: true
    });
  }


  /**
   * 显示当前页面的"转发"、"分享到空间"、"分享到微信好友"、"分享到微信朋友圈"按钮
   */
  showShareMenu() {
    wx.showShareMenu({
      showShareItems: ['wx', 'qzone', 'wechatFriends', 'wechatMoment']
    });
  }

  /**
   * 监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件
   */
  onShareAppMessage(callback) {
    wx.onShareAppMessage(callback);
  }

  /**
   * 创建视频播放
   */
  createRewardedVideoAd(adUnitId, onClose, onError) {
    if (!videoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: adUnitId
      });

      videoAd.onLoad(function (res) {
        console.log('videoAd onLoad', res);
      });
    }
    let onCloseCall = (res) => {
      console.log('videoAd onClose', res);
      if (onClose) {
        onClose(res);
      }
      videoAd.offClose(onCloseCall);
    };
    videoAd.onClose(onCloseCall);

    let onErrorCall = (res) => {
      console.log('videoAd onError', res);
      if (onError) {
        onError(res);
      }
      videoAd.offError(onCloseCall);
    };
    videoAd.onError(onErrorCall);

    videoAd.load().then(() => {
      console.log('激励视频加载成功');
      wx.hideLoading({})
      videoAd.show().then(() => {
        console.log('激励视频 广告显示成功');
      }).catch(err => {
        console.log('激励视频 广告显示失败');
        if (onError) {
          onError(err);
        }
      })
    }).catch(err => {
      console.log('激励视频加载失败');
      if (onError) {
        onError(err);
      }
    })
  }

  /**
   * 加速回收 wx上api没有公布
   */
  triggerGC() {
    wx.triggerGC();
  }

  startGyroscope(object) {
    wx.startGyroscope(object);
  }
  onGyroscopeChange(callback) {
    wx.onGyroscopeChange((res) => {
      callback(res)
    });
  }
  offGyroscopeChange(callback) {

    wx.offGyroscopeChange((res) => {
      callback(res)
    });
  }

  startDeviceMotionListening(object) {
    wx.startDeviceMotionListening(object);
  }

  stopDeviceMotionListening(object) {
    wx.stopDeviceMotionListening(object);
  }

  onDeviceMotionChange(callback) {
    wx.onDeviceMotionChange((res) => {
      callback(res)
    });
  }

  offDeviceMotionChange(callback) {
    let version = wx.getSystemInfoSync().SDKVersion;
    // if (this.compareVersion(version, '2.9.3') >= 0) {
    if (this.compareVersion(phone.SDKVersion, "2.9.3") < 0) {
      wx.offDeviceMotionChange((res) => {
        callback(res)
      });
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用设备方向，请升级微信。'
      })
    }
  }

  /**
   * 复制
   */
  setClipboardData(obj) {
    wx.setClipboardData(obj);
  }

  /**
   * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
   */
  getMenuButtonBoundingClientRect() {
    return wx.getMenuButtonBoundingClientRect();
  }

  getSystemInfoSync() {
    return wx.getSystemInfoSync();
  }

  showLoading(obj) {
    wx.showLoading(obj);
  }

  hideLoading(obj) {
    wx.hideLoading(obj);
  }

  navigateToMiniProgram(obj) {
    wx.navigateToMiniProgram(obj)
  }

  /**
   *  登录只需要 code信息
   */
  DYlogin() {
    return new Promise((resolve, reject) => {
      wx.login({
        success(res) {
          if (res.code) {
            resolve(res.code);
          }
        }
      });
    });
  }

  /**检验是否授权过 */
  checkIsAuthorize() {
    return new Promise((resolve) => {
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, fail() {
          resolve(false);
        }
      });
    });
  }
}


window.platform = new WxgamePlatform();