window.addEventListener('DOMContentLoaded',function (){
    dragevent();
    newStart();
});

function  check(){
    var skydragItem = document.querySelectorAll('.drop_item.sky');
    var grounddragItem = document.querySelectorAll('.drop_item.ground');
    var deepdragItem = document.querySelectorAll('.drop_item.deep_ground');
    var riverdragItem = document.querySelectorAll('.drop_item.river');
    var dropAreaSky = document.querySelector('.drop_zone_list.sky');
    var dropAreaGround = document.querySelector('.drop_zone_list.ground');
    var dropAreaDeepGround = document.querySelector('.drop_zone_list.deep');
    var dropAreaRive = document.querySelector('.drop_zone_list.river');
    var resetbtn = document.querySelector('.reset_btn');


    if(skydragItem[0].classList.contains('on') && skydragItem[1].classList.contains('on') && skydragItem[2].classList.contains('on')){
        dropAreaSky.classList.add('on');
    }
    if(grounddragItem[0].classList.contains('on') && grounddragItem[1].classList.contains('on')&& grounddragItem[2].classList.contains('on')){
        dropAreaGround.classList.add('on');
    }
    if(deepdragItem[0].classList.contains('on') && deepdragItem[1].classList.contains('on') && deepdragItem[2].classList.contains('on')){
        dropAreaDeepGround.classList.add('on');
    }
    if(riverdragItem[0].classList.contains('on') && riverdragItem[1].classList.contains('on') && riverdragItem[2].classList.contains('on')){
        dropAreaRive.classList.add('on');
    }




    if(dropAreaSky.classList.contains('on') && dropAreaGround.classList.contains('on') && dropAreaDeepGround.classList.contains('on') && dropAreaRive.classList.contains('on')){
        console.log('다성공')
        resetbtn.classList.add('on');
    }else{

    }
}


function dragevent(){
    var dragItem = document.querySelectorAll('.drop_item');



    Draggable.zIndex = 20;

    dragItem.forEach(function (e){
        var drag = new Draggable(e,{
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
            onDragEnd :drop,
        });

        function drop() {
            //하늘
            if(this.target.classList.contains('sky')){
                if(this.hitTest('.drop_zone_item.one','92%') && this.target.classList.contains('one')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.two','92%') && this.target.classList.contains('two')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.three','92%') && this.target.classList.contains('three')){
                    this.target.classList.add('on');
                }else{
                    this.target.classList.remove('on');
                    TweenLite.to(this.target, 0.5, {
                        x: 0,
                        y: 0,
                        rotate: 0,
                    });
                }


                //땅
            }else if(this.target.classList.contains('ground')){
                if(this.hitTest('.drop_zone_item.ground.one','92%')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.ground.two','92%')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.ground.three','92%')){
                    this.target.classList.add('on');
                }else{
                    this.target.classList.remove('on');
                    TweenLite.to(this.target, 0.5, {
                        x: 0,
                        y: 0,
                        rotate: 0,
                    });
                }
                //땅속
            }else if(this.target.classList.contains('deep_ground')){
                if(this.hitTest('.drop_zone_item.deep_ground.one','92%')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.deep_ground.two','92%')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.deep_ground.three','92%')){
                    this.target.classList.add('on');
                }else{
                    this.target.classList.remove('on');
                    TweenLite.to(this.target, 0.5, {
                        x: 0,
                        y: 0,
                        rotate: 0,
                    });
                }
                //강
            }else if(this.target.classList.contains('river')){
                if(this.hitTest('.drop_zone_item.river.one','92%')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.river.two','92%')){
                    this.target.classList.add('on');
                }else if(this.hitTest('.drop_zone_item.river.three','92%')){
                    this.target.classList.add('on');
                }else{
                    this.target.classList.remove('on');
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
    });

}

function  newStart(){
    var dragItem = document.querySelectorAll('.drop_item');
    var resetbtn = document.querySelector('.reset_btn');
    var dropjons = document.querySelectorAll('.drop_zone_list');
    resetbtn.addEventListener('click',function (){
        dragItem.forEach(function (e){
            e.classList.remove('on');
            TweenLite.to(e ,1, {
                x: 0,
                y: 0,
                rotate: 0,
            });
        });
        dropjons.forEach(function (e){
            e.classList.remove('on');
        })
        this.classList.remove('on');
        dragevent();
    })
}