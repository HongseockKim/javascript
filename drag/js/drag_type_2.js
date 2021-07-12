


window.addEventListener("DOMContentLoaded",function (){
    drag();
});


function drag(){
    var dropjone = document.querySelector('.drop_zone');
    var movingbox = document.querySelectorAll('.moving_box');



    var drag = new Draggable('.box',{
        type : "x,y",
        bounds : ".con",
        edgeResistance:0.65,

        onPress : setdrag,
        onDragEnd :snap,
    });

    var drag_2 = new Draggable('.box_2',{
        type : "x,y",
        bounds : ".con",
        edgeResistance:0.65,
        onDragStart : dragsets,
        onPress : setdrag_2,
    });

    var rotate = new Draggable('.box',{
        type : "rotation",
        bounds : {minRotation : 0 , maxRotation : 360},
        edgeResistance:0.89,
        onPress : setdrag,
        onDrag : getAngel,
        onDragEnd :check,
    });
    var rotate_2 = new Draggable('.box_2',{
        type : "rotation",
        bounds : {minRotation : 0 , maxRotation : 360},
        edgeResistance:0.89,
        onPress : setdrag_2,
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

    function dragsets(){
        console.log(`타겟 x 값 ${this.target.getBoundingClientRect().x}`);
        console.log(`타겟 Y 값 ${this.target.getBoundingClientRect().y}`);
    }

    function setdrag_2(e){
        var targets = e.target.classList[0];
            console.log(this.pointerX);
            console.log(this.pointerY);


        this.update();


        if(targets === "box_2"){
            //this.type = "x,y"
            drag_2.enable().startDrag(e);
            rotate_2.disable();
        }else{
            console.log('ww');
            drag_2.disable();
            rotate_2.enable().startDrag(e);

        }

    }


    function  getAngel(e){
        var test = this.target.style.transform = rotate.endRotation;
        var angle = Math.floor(test);

        //console.log(angle);
    }

    function snap(){
        /* if(this.hitTest('.drop_zone')){
          this.target.classList.add('in');
         }*/

    }

    function check(){
        if(this.hitTest('.drop_zone','95%') && this.target.classList.contains('box')){
            console.log('히트');
            this.target.classList.add('on');
        }else if(this.hitTest('.drop_zone_2','95%') && this.target.classList.contains('box_2')){
            this.target.classList.add('on');
        }else{
            TweenLite.to(this.target,0.5, {
                x: 0,
                y: 0,
                rotate : 0,
            });
        }
    }
}

