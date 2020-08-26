import { EnterGameType } from "./CommonDefine";

export default class GameStateManager_Als  {
    
    private static instance: GameStateManager_Als;
    public static getInstance(): GameStateManager_Als {
        if (!GameStateManager_Als.instance) {
            GameStateManager_Als.instance = new GameStateManager_Als();
        }
        return GameStateManager_Als.instance;
    }

    constructor() { 
        this.nLevelState = EnterGameType.enum_EnterGameType_GameHome;
    }

    /**当前进入关卡的方式 */
    private  nLevelState:number;

    public  get levelState(){
        return this.nLevelState;
    }

    public set levelState(nState:EnterGameType){
        this.nLevelState = nState;
    }
}