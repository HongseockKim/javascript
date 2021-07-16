$(function (){


    $('.drag_item').on('mousedown',function (){
        $(this).addClass('grap');
    });
    $('.drag_item').on('mouseup',function (){
        $(this).removeClass('grap');
    });

    var checkss = new chekss();

    $('.drag_item').draggable({
        axis : 'x y',
        //cursor:"grabbing",
        containment:'body',
        cancel : ".end",
        revert : checkss.reverts,
        //start : test,
        stop : function (){
            checkss.sub($('.drop_zone.on').length);
        },
    });

    $('.drop_zone').droppable({
        accept : '.drag_item',
        drop : function (){
            checkss.add($(this))
        }
    });



    function chekss(){

        this.add = function (target){
            if(target.hasClass('type_1') && !target.hasClass('on')){
                target.addClass('on');
            }
            else if(target.hasClass('type_2') && !target.hasClass('on')){
                target.addClass('on');
            }
            else if(target.hasClass('type_3') && !target.hasClass('on')){
                target.addClass('on');
            }
            else if(target.hasClass('type_4') && !target.hasClass('on')){
                target.addClass('on');
            }
            else if(target.hasClass('type_5') && !target.hasClass('on')){
                target.addClass('on');
            }
            else if(target.hasClass('type_6') && !target.hasClass('on')){
                target.addClass('on');
            }
            else if(target.hasClass('type_7') && !target.hasClass('on')){
                target.addClass('on');
            }
        }


        this.sub = function (num){
           if(num === 7){
               $('.drag_item').addClass('end');
           }
        }

        this.reverts = function (isrevert){
            isrevert = true
            return isrevert
        }
        $('.reset').on('click',function (){
           $('.drop_zone').removeClass('on');
           $('.drag_item').removeClass('on');
        })
    }

});








