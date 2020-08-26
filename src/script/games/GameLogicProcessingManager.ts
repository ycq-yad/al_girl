export default class GameLogicProcessingManager_Als  {
   //单例
   private static instance: GameLogicProcessingManager_Als;
   public static getInstance(): GameLogicProcessingManager_Als {
       if (!GameLogicProcessingManager_Als.instance) {
           GameLogicProcessingManager_Als.instance = new GameLogicProcessingManager_Als();
       }
       return GameLogicProcessingManager_Als.instance;
   }

   //是否开启了体力回复倒计时
   private bPSRecoveryOpen:boolean;
    
    constructor() { 

    }
     //获取当前时间
     public static GetCurTime(): number {
        return Laya.Browser.now();
    }

    public get PSRecoveryOpen(){
        return this.bPSRecoveryOpen;
    }

    public set PSRecoveryOpen(b:boolean){
        this.bPSRecoveryOpen = b;
    }
   
}