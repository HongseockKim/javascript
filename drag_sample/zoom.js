$(function (){

    zoomjs('.bar:eq(0)','.scroll_wrap');
    zoomjs('.bar_2','.scroll_wrap_2');

    function zoomjs(selector,bgcon){
        var startY = 0;
        var offsetY = 0;
        var delY = 0;
        var ismove = false;

        $(selector).on('mousedown mouseleave',function (e){

            ismove = true
            $(this).css({
                'cursor':'grabbing'
            });
            startY = e.clientY;
            offsetY = $(selector).position().top;
            $(document).on('mousemove ',function (e){
                e.preventDefault()
                if(ismove === false) return false
                delY = e.clientY - startY;

                if((offsetY + delY) > 0 && (offsetY + delY) < 440){
                    $(selector).css({
                        'top':offsetY + delY
                    });
                    $(bgcon).css({
                        'background-size':+ offsetY + delY + '%'
                    });
                }
            });
        });
        $(selector).on('mouseup mouseleave',function (){
            ismove = false;
            $(selector).onmousedown = null;
            $(document).onmousemove = null;

            $(this).css({
                'cursor':'grab'
            });
        });
    }
});