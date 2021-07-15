$(function (){
    var check = new checks();

    $('.drag_item').on('mousedown',() => $(this).css({'cursor':'grabbing'}));
    $('.drag_item').on('mouseup',() => $(this).css({'cursor':'grab'}));
    zoomjs('.bar_2','.bgcon',500);


    $('.drag_item').draggable({
        axis : 'x y',
        cursor:"grabbing",
        containment:'body',
        cancel : ".end",
        revert : check.revert(),
        //start : test,
        stop : function (){
            check.dragend($(this));
            check.reset($(this),$('.reset'),$('.drop_zone'),$('.bgcon'));
        },
    });

    $('.drop_zone').droppable({
        accept : '.drag_item',
        drop : function (){
            check.drops($(this));
            check.settime($(this).parent());
        },
    });



    function checks(){
        var num = 1;
        //리버트 옵션
        this.revert = function (isrevert){
            isrevert = true
            return isrevert
        }
        //드랍시 드랍존
        this.drops = function (target){
            target.addClass('on');
        }

        //드래그끝날시
        this.dragend = function (dragitem){
            dragitem.addClass('end');

        }
        //리셋버튼
        this.reset = function (dragitem,restbtn,dropjone,bgcon){
            restbtn.on('click',function (){
                dragitem.removeClass('end');
                dropjone.removeClass('on');
                bgcon.css({
                    'background':'url("img/1.jpg")no-repeat center center'
                });
                num = 1;
           })
        }
        //배경 전환 타임아웃
        this.settime = function (bgcon){
            console.log(bgcon);
            var timers = setTimeout(function (){
                num = num + 1;
                console.log(num);
                bgcon.css({
                    'background':'url("img/'+num+'.jpg")no-repeat center center'
                });
                timer()
            },1000)
            function timer(){
                if(num === 3){
                    clearTimeout(timers);
                }else{
                    var timers = setTimeout(function (){
                        num = num + 1;
                        console.log(num);
                        bgcon.css({
                            'background':'url("img/'+num+'.jpg") no-repeat center center'
                        });
                        timer()
                    },1000)
                }
            }
        }

    }





    function zoomjs(selector,bgcon,scrollbarHeight){
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

                if((offsetY + delY) > 0 && (offsetY + delY) < (scrollbarHeight - $(selector).innerHeight()) ){
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
})


