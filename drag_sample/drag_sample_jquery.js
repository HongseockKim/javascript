$(document).ready(function (){
    drag();
    reset();
});
function  drag(){
    var isRevert = true;
    var dragEle = "";
    var dropEle = false;
    var clones = "";
    $('.drop_item').draggable({
        axis : 'x y',
        cursor:"grabbing",
        contains:'.wrap',
        revert : check,
        start : test,
        stop : function (){
            if($('.drop_item.on').length  === $('.drop_zone_item').length){
                $('.reset_btn').addClass('on');
            }
        },
    });

    $('.drop_zone_item').droppable({
        accept : '.drop_item',
        drop : function (e){
            console.log(e);
            dropEle = $(this)
            return dropEle;
        }
    });

    function test(){
        console.log('스타트');
    }

    function check(e){
        if(e == false){
            isRevert = true
            return  isRevert;
        }


        dragEle = $(this);

            if(dragEle.hasClass('sky') && dropEle.hasClass('sky')){

               if(dropEle.children(dragEle).hasClass('on')){
                   dragEle.removeClass('on');
                   isRevert = true
                   return  isRevert;
               }else{
                   clones = dragEle.clone().css({top:0,left:0}).addClass('on');
                   dropEle.append(clones);
                   dragEle.remove();
                   isRevert = false
                   return  isRevert;
               }

            }else if(dragEle.hasClass('ground') && dropEle.hasClass('ground')){
                dragEle.addClass('on');

                if(dropEle.children(dragEle).hasClass('on')){
                    dragEle.removeClass('on');
                    isRevert = true
                    return  isRevert;
                }else{
                    clones = dragEle.clone().css({top:0,left:0}).addClass('on');
                    dropEle.append(clones);
                    dragEle.remove();
                    isRevert = false
                    return  isRevert;
                }
            }else if(dragEle.hasClass('deep_ground') && dropEle.hasClass('deep_ground')){
                dragEle.addClass('on');

                if(dropEle.children(dragEle).hasClass('on')){
                    dragEle.removeClass('on');
                    isRevert = true
                    return  isRevert;
                }else{
                    clones = dragEle.clone().css({top:0,left:0}).addClass('on');
                    dropEle.append(clones);
                    dragEle.remove();
                    isRevert = false
                    return  isRevert;
                }
            }else if(dragEle.hasClass('river') && dropEle.hasClass('river')){
                dragEle.addClass('on');
                if(dropEle.children(dragEle).hasClass('on')){

                    dragEle.removeClass('on');
                    isRevert = true
                    return  isRevert;
                }else{
                    clones = dragEle.clone().css({top:0,left:0}).addClass('on');
                    dropEle.append(clones);
                    dragEle.remove();
                    isRevert = false
                    return  isRevert;
                }
            }else{
                console.log('아님')

                dragEle.removeClass('on');
                isRevert = true
                return  isRevert;

            }


    }


}

function reset(){
    $('.reset_btn').on('click',function (){
        window.location.reload();
    });
}