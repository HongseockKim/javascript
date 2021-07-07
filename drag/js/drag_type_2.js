

window.addEventListener("DOMContentLoaded",function (){
    drag();
});


function drag(){

    var drag = new Draggable('.box',{
        type : "x,y",
        bounds : ".con",
        edgeResistance:0.65,
        onPress : setdrag,
       // onDragEnd :check,
    });
    var rotate = new Draggable('.box',{
        type : "rotation",
        bounds : {minRotation : 0 , maxRotation : 360},
        edgeResistance:0.89,
        onPress : setdrag,
        onDrag : getAngel,
        onDragEnd :check,
    });

    function setdrag(e){
        var target = e.target.classList[0];
        console.log(target);
        if(target === "box"){
            //this.type = "x,y"
            drag.enable().startDrag(e);
            rotate.disable();
        }else{
            console.log('ww');
            drag.disable();
            rotate.enable().startDrag(e);

        }

    }
    function  getAngel(e){
        var test = this.target.style.transform = rotate.endRotation;
        var angle = Math.floor(test);

        //console.log(angle);
    }

    function check(){
            if(this.hitTest('.drop_zone','95%')){
                console.log('히트');
                this.target.classList.add('on');
            }
    }
}
