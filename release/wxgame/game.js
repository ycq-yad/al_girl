
if ((typeof swan !== 'undefined') && (typeof swanGlobal !== 'undefined')) {
	require("swan-game-adapter.js");
	require("libs/laya.bdmini.js");
} else if (typeof wx !== "undefined") {
	require("weapp-adapter.js");
	require("libs/laya.wxmini.js");
}
window.loadLib = require;
// require("libs/promise.min.js"); 
require("libs/laya.core.js");
require("libs/laya.ani.js");
require("libs/laya.ui.js");
require("libs/bLib.js");
require("Platform.js");
require("js/bundle.js");