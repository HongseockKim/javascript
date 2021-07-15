$(function (){
    var startX = 0;
    var startY = 0;
    var offsetX = 0;
    var offsetY = 0;
    var delX = 0;
    var delY = 0;
    var ismove = false;
    var num = 0;

    $('.bar').on('mousedown mouseleave',function (e){

        ismove = true
        $(this).css({
            'cursor':'grabbing'
        })
        startY = e.clientY;
        offsetY = $('.bar').position().top;
        $(document).on('mousemove ',function (e){
            e.preventDefault()
            if(ismove === false) return false
            delY = e.clientY - startY;

            if((offsetY + delY) > 0 && (offsetY + delY) < 440){
                $('.bar').css({
                    'top':offsetY + delY
                });
                $('.scroll_wrap').css({
                    'background-size':+ offsetY + delY + '%'
                })
            }


        });
    });



    $('.bar').on('mouseup mouseleave',function (e){
        ismove = false;
        $('.bar').onmousedown = null;
        $(document).onmousemove = null;

        $(this).css({
            'cursor':'grab'
        })

    })
});