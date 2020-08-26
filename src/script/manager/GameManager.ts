
import { Als_GameData } from "../common/GameData";
import { PlayerDataManager_Als } from "../common/GameDataManager";
import { GoodsType } from "../games/CommonDefine";
import ViewChangeManager_Als from "../games/ViewChangeManager";
import AddPsView_Als from "../views/game/Als_PopView/AddPsView";


/**
 * 游戏管理器\
 * 处理游戏基本逻辑的
 */
export class GameManager_Als {
    private static ins: GameManager_Als;

    public static get instance(): GameManager_Als {
        if (GameManager_Als.ins == null) {
            GameManager_Als.ins = new GameManager_Als();
        }
        return GameManager_Als.ins
    }
    private constructor() {

    }



    /**
     * 是否是小游戏
     */
    public isMiniGame = false;


    public powerIsEnough() {
        TipsManager.getInstance().showDefaultTips("体力不足");
        ViewChangeManager_Als.getInstance().showBufferLoadingView();
        ResUtil.getIntance().loadGroups(["adsp"], async () => {
            ViewManager.getInstance().showView(AddPsView_Als);
            ViewChangeManager_Als.getInstance().hideBufferLoadingView();
        });
    }




    /**
     * 转换商店显示时间
     * time  为时间  秒
     */
    public parseShopTimeShow(time: number, en: boolean): string {
        let min = time / 60;
        let hour = min / 60;
        let day = hour / 24;
        let str = ''
        if (day >= 1) {
            str = day.toFixed(2) + '天'
        } else if (hour >= 1) {
            str = hour.toFixed(2) + '小时'
        } else {
            str = min.toFixed(2) + '分钟'
        }
        if (en) {
            str = str.replace("天", 'day');
            str = str.replace("小时", 'hour');
            str = str.replace("分钟", 'min');
        }
        return str;
    }


    public loadCongigs(url): Promise<any> {
        return new Promise((resolve) => {
            let jsonUrl = url;
            Laya.loader.load(jsonUrl, Laya.Handler.create(this, (res) => {
                if (typeof (res) == "string") {
                    res = JSON.parse(res);
                }
                resolve(Utils.copy(res))
            }));
        });
    }


}

window['GameManager'] = GameManager_Als;

