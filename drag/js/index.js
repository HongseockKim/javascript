$(document).ready(function () {
    drag();
});

function  drag(){

        var drags = Draggable.create(".box", {
            type:"x,y",
            edgeResistance:5.65,
            bounds:".con",
            inertia:true,
            throwProps:true,
            edgeResistance:0.65,
            onDragStart : function (){
                console.log('드래그 스타트');
            },
            onDrag : function (){
                $('.box').removeClass('on');
                console.log('드래그 계속실행');
            },
            onDragEnd :function (){
                if(this.hitTest('.mid','95%')){
                    if($(this.target).hasClass('box_2')){
                        $(this.target).addClass('clear');
                        $(this.target).addClass('on');

                    }else{
                        TweenLite.to(this.target, 0.2, {
                            x: 0,
                            y: 0
                        });
                    }
                }else if(this.hitTest('.top','95%')){
                    if($(this.target).hasClass('box_1')){
                        $(this.target).addClass('clear');
                        $(this.target).addClass('on');
                    }else{
                        TweenLite.to(this.target, 0.2, {
                            x: 0,
                            y: 0
                        });
                    }
                }else if(this.hitTest('.bottom','95%')){

                    if($(this.target).hasClass('box_3')){
                        $(this.target).addClass('clear');
                        $(this.target).addClass('on');
                    }else{
                        TweenLite.to(this.target, 0.2, {
                            x: 0,
                            y: 0
                        });
                    }
                }else{
                    $(this.target).removeClass('on');
                    TweenLite.to(this.target, 2.2, {
                        x: 0,
                        y: 0
                    });
                }

                check();
            }
        });
        function check(){
            if($('.box_1').hasClass('clear') && $('.box_2').hasClass('clear') && $('.box_3').hasClass('clear')){
                $('.box').removeClass('on');
                $('.box').remove();
                $('.wrap').addClass('on');
            }
        }

}