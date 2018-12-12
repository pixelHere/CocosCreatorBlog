const {ccclass, property} = cc._decorator;

@ccclass
export default class AnimatorCtrl extends cc.Component {

    anim:cc.Animation;

    @property(cc.Button)
    idleBtn:cc.Button;

    @property(cc.Button)
    attackBtn:cc.Button;

    @property(cc.Button)
    castBtn:cc.Button;

    @property(cc.Button)
    dieBtn:cc.Button;

    onLoad () {
        cc.log("onLoad------");
    }

    start () {
        cc.log("start------");
        this.anim = this.getComponent(cc.Animation);
        this.InputFunc();
        this.ButtonClickEvent();
    }

    update (dt) {

    }

    InputFunc () { 
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.InputCallBack,this);
    }

    InputCallBack (event){
        if(event.keyCode == cc.KEY.a){
            this.anim.play("knight_idle");
        }

        if(event.keyCode == cc.KEY.s){
            this.anim.play("knight_attack");
        }

        if(event.keyCode == cc.KEY.d){
            this.anim.play("knight_cast");
        }

        if(event.keyCode == cc.KEY.f){
            this.anim.play("knight_die");
        }
    }

    ButtonClickEvent(){
        if(this.idleBtn == null){
            return;
        }

        if(this.attackBtn == null){
            return;
        }

        if(this.castBtn == null){
            return;
        }

        if(this.dieBtn == null){
            return;
        }
        
        this.idleBtn.node.on("click",(event)=>{
            cc.log("按下 idle 按钮");
            this.anim.play("knight_idle");
        });

        this.attackBtn.node.on("click",(event)=>{
            cc.log("按下 attack 按钮");
            this.anim.play("knight_attack");
        });

        this.castBtn.node.on("click",(event)=>{
            cc.log("按下 cast 按钮");
            this.anim.play("knight_cast");
        });

        this.dieBtn.node.on("click",(event)=>{
            cc.log("按下 die 按钮");
            this.anim.play("knight_die");
        });
    }
}
