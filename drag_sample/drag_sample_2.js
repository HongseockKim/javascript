window.addEventListener('DOMContentLoaded',function (){
    dragsample_2();
});

function dragsample_2(){
    var dropjoneSky = document.querySelectorAll('.drop_zone_item.sky');
    var dropjoneGround = document.querySelectorAll('.drop_zone_item.ground');
    var dropjoneDeep = document.querySelectorAll('.drop_zone_item.deep_ground');
    var dropjoneRiver = document.querySelectorAll('.drop_zone_item.river');
    var dragItemsky = document.querySelectorAll('.drop_item.sky');
    var dragItemground = document.querySelectorAll('.drop_item.ground');
    var dragItemdeep = document.querySelectorAll('.drop_item.deep_ground');
    var dragItemriver = document.querySelectorAll('.drop_item.river');

    Draggable.zIndex = 20;

    dragItemsky.forEach(function (e){
        var skyDrag = new Draggable(e,{
            type : "x,y",
            bounds : ".wrap",
            //zIndexBoost:false,
            edgeResistance:0.65,
            onPress : function (){
                if(this.target.classList.contains('on')){
                    this.disable();
                }else{
                    this.enable();
                }
            },
            onDragEnd :dropend,
        });
    });
    dragItemground.forEach(function (e){
        var skyDrag = new Draggable(e,{
            type : "x,y",
            bounds : ".wrap",
            //zIndexBoost:false,
            edgeResistance:0.65,
            onPress : function (){
                if(this.target.classList.contains('on')){
                    this.disable();
                }else{
                    this.enable();
                }
            },
            onDragEnd :dropend,
        });
    });
    dragItemdeep.forEach(function (e){
        var skyDrag = new Draggable(e,{
            type : "x,y",
            bounds : ".wrap",
            //zIndexBoost:false,
            edgeResistance:0.65,
            onPress : function (){
                if(this.target.classList.contains('on')){
                    this.disable();
                }else{
                    this.enable();
                }
            },
            onDragEnd :dropend,
        });
    });
    dragItemriver.forEach(function (e){
        var skyDrag = new Draggable(e,{
            type : "x,y",
            bounds : ".wrap",
            //zIndexBoost:false,
            edgeResistance:0.65,
            onPress : function (){
                if(this.target.classList.contains('on')){
                    this.disable();
                }else{
                    this.enable();
                }
            },
            onDragEnd :dropend,
        });
    });
}

function dropend(){

    var dropjoneSky = document.getElementsByClassName('drop_zone_item sky');
    var dropjoneGround = document.querySelectorAll('.drop_zone_item.ground');
    var dropjoneDeep = document.querySelectorAll('.drop_zone_item.deep_ground');
    var dropjoneRiver = document.querySelectorAll('.drop_zone_item.river');


    if(this.target.classList.contains('sky')){
        if(this.hitTest(dropjoneSky[0],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneSky[1],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneSky[2],'92%')){
            this.target.classList.add('on');
        }else{
            TweenLite.to(this.target, 0.5, {
                x: 0,
                y: 0,
                rotate: 0,
            });
        }
    }else if(this.target.classList.contains('ground')){
        console.log('땅')
        if(this.hitTest(dropjoneGround[0],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneGround[1],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneGround[2],'92%')){
            this.target.classList.add('on');
        }else{
            TweenLite.to(this.target, 0.5, {
                x: 0,
                y: 0,
                rotate: 0,
            });
        }
    }else if(this.target.classList.contains('deep_ground')){
        console.log('땅속')
        if(this.hitTest(dropjoneDeep[0],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneDeep[1],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneDeep[2],'92%')){
            this.target.classList.add('on');
        }else{
            TweenLite.to(this.target, 0.5, {
                x: 0,
                y: 0,
                rotate: 0,
            });
        }
    }else if(this.target.classList.contains('river')){
        console.log('강');
        if(this.hitTest(dropjoneRiver[0],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneRiver[1],'92%')){
            this.target.classList.add('on');
        }else if(this.hitTest(dropjoneRiver[2],'92%')){
            this.target.classList.add('on');
        }else{
            TweenLite.to(this.target, 0.5, {
                x: 0,
                y: 0,
                rotate: 0,
            });
        }
    }else{
        TweenLite.to(this.target, 0.5, {
            x: 0,
            y: 0,
            rotate: 0,
        });
    }
    check();
}

function check(){
    var dragItem = document.querySelectorAll('.drop_item');
    var dragItemadd = document.querySelectorAll('.drop_item.on').length;
    var dropjonelength = document.querySelectorAll('.drop_zone_item').length;
    var resetbtn = document.querySelector('.reset_btn');

    dragItem.forEach(function (e){
        if(e.classList.contains('on')){
            reset();
        }
    });

    function reset(){
        console.log(dragItemadd);
        console.log(dropjonelength);
        if(dragItemadd === dropjonelength){
            console.log('다성공');
            resetbtn.classList.add('on');
        }
    }

}
