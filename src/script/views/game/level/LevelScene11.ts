import { LevelBase_Als } from "./LevelBase";
import ViewChangeManager_Als from "../../../games/ViewChangeManager";

export default class LevelScene11_Als extends LevelBase_Als {
    className_key = "LevelScene11";
    public box_game_up: Laya.Box;
    public nIndexTemp: number; //动画移动的基数
    public nAddTemp: number;    //修正的参数
    public nForend: number;

    constructor(data_) {
        super(data_);
        this.nIndexTemp = 1;
        this.nAddTemp = -490;
        this.nForend = 540;
        this.skin = "game/level/LevelScene11.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public childrenCreated() {
        super.childrenCreated();
        //this.box_game.x = this.nForend;
    }

    public initView() {
        super.initView();
        this.stopAni();
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.stopAni();
    }

    public async initPlayer() {
        ViewChangeManager_Als.getInstance().showBufferLoadingView();

        !this.ani_player && (this.ani_player = await this.createSkeleton(this.mapData.player.url));
        this.box_player.getChildIndex(this.ani_player) == -1 && (this.box_player.addChild(this.ani_player));
        this.ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this.ani_player.x = this.mapData.player.x;
        this.ani_player.y = this.mapData.player.y;

        this.box_player.x = 0;
        this.box_game.x = this.box_game_up.x = (this.index) * 1080;
        this.onStart();
        ViewChangeManager_Als.getInstance().hideBufferLoadingView();

    }

    public onPlayLabel(evt: any) {
        if (this.bAniDestory) return;
        super.onPlayLabel(evt);
        if ("smove" == evt.name) {
            Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) }, 2040);
            Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) }, 2040);
        } else if ("smove2" == evt.name) {
            Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 130 }, 4160);
            Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) - 130 }, 4160);
        } else if ("smove3" == evt.name) {
            Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) - 80 }, 3710);
            Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) - 80 }, 3710);
        } else if ("smove4" == evt.name) {
            Laya.Tween.to(this.box_game, { x: (this.index + this.nIndexTemp) * (-1080) + 540 }, 5040);
            Laya.Tween.to(this.box_game_up, { x: (this.index + this.nIndexTemp) * (-1080) + 540 }, 5040);
        }
    }

    /**游戏逻辑控制 */
    public startGame() {
        this.clearData();
        super.startGame();
        this.initPlayer();
    }

    /**停止游戏 */
    public stopGame() { }

    /**重新开始游戏 */
    public restartGame(bReStartAll: boolean = true) {
        if (bReStartAll) {
            this.initView();
            super.startGame();
            this.initPlayer();
        } else {
            super.restartGame();
            if (this.index == 0) {
                this.box_game.x = this.box_game_up.x = (this.index) * 1080;
            }
            this.onStart();
        }
    }

    /**停止动画 */
    private stopAni() {
        Laya.Tween.clearAll(this.box_player);
        Laya.Tween.clearAll(this.box_game);
    }
}