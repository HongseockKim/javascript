$(function (){
    var drag = new dragOption();
    $('.drag_item').draggable({
        axis : 'x y',
        //cursor:"grabbing",
        containment:'body',
        cancel : ".end",
        revert : drag.revert,
        start : function (){
           drag.dragItem($(this));
        },
        stop : function (){
        },
    });

    $('.drop_jon').droppable({
        accept : '.drag_item',
        drop : function (e,u){
           drag.hits($(this))
        }
    });


    function dragOption(){
        var dragItme =null;
        this.revert = function (target){
            console.log(target);
            target = true
            return target
        }
        this.dragItem = function (dragitem){
            dragItme = dragitem
            return dragItme;
        }
        this.hits = function (hits){
            console.log(dragItme.data('type'))
            console.log(hits.data('type'))
            if(dragItme.data('type') === hits.data('type') ){
                dragItme.addClass('on');
                hits.addClass('on');
            }
        }
    }
})