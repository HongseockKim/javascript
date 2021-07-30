$(document).ready(function (){
    test();
});

function test(){
    var lines= $('.start').length + 1;
    var startX = 0;
    var startY = 0;
    var offsetX =0;
    var offsetY = 0;
    var delX = 0;
    var delY =0;
    var endCenterX = 0;
    var endCenterY = 0;
    var centerSvgX = 0;
    var centerSvgY = 0;
    var drags = false;
    var testsX = 0;
    var testsY = 0;
    var safe = false;
    var mousepointes = "";
    var btn = "";
    var line = "";
    var isTouchs = false;
    var mtarget = undefined;




    $('.start').on('mousedown touchstart',function (e){
        //e = (e.clientX === undefined) ? e.touches[0] : e;
        if(e.clientX === undefined){
            e = e.touches[0]
            isTouchs = true;
        }
        btn = $(this).val();
        drags = true;
        safe = false;
        startX = e.clientX;
        startY = e.clientY;
        offsetX = $(this).position().left;
        offsetY = $(this).position().top;
        centerSvgX = offsetX + ($(this).width() / 2 );
        centerSvgY = offsetY + ($(this).height() / 2 );
        testsX = e.offsetX;
        testsY = e.offsetY;


        if(btn === 'a'){
            console.log('a');
            line = $('#a');


        }else if(btn === 'c'){
            line = $('#c');

        }else if(btn === 'e'){
            line = $('#e');
        }

        line.css({
            'display':'block'
        });

        $('html,body').css({
            "cursor": "grabbing"
        });

        return safe
    })
    document.addEventListener('mousemove',move,{passive:false});
    document.addEventListener('touchmove',move,{passive:false});

    function move(e){
        e.preventDefault()
        if(e.clientX === undefined){
            console.log('터치');
            e = e.touches[0]
        }

        if(drags === true){
            delX = e.clientX - startX;
            delY = e.clientY - startY;

            $(line).attr('x1',testsX)
            $(line).attr('y1',centerSvgY)
            $(line).attr('x2',delX + centerSvgX)
            $(line).attr('y2',delY + centerSvgY)

            $(line).css({
                "cursor": "grabbing"
            });
        }
    }

    $(document).on('mouseup touchend',function (e){
        e.preventDefault()
        drags = false;
        if(safe){
            return  false
        }

        if(isTouchs === true){
            console.log(Math.abs(e.changedTouches[0].clientX) );
            console.log(Math.abs(e.changedTouches[0].clientY) );
            endCenterX = Math.abs(e.changedTouches[0].clientX);
            endCenterY = Math.abs(e.changedTouches[0].clientY);
            pointes(endCenterX,endCenterY)
                console.log($(e.target).attr('data-value'))
                console.log($(mtarget).attr('data-value'))
            if($(e.target).attr('data-value') === $(mtarget).attr('data-value')){
                console.log('정답')
                $(line).attr('x2',$(mtarget).position().left + ($(mtarget).width() / 2))
                $(line).attr('y2',$(mtarget).position().top + ($(mtarget).height() / 2))
            }else{
                $(line).attr('x1',0)
                $(line).attr('y1',0)
                $(line).attr('x2',0)
                $(line).attr('y2',0)
            }


        }else if(isTouchs === false){
            if($(e.target).hasClass('end')){
                safe = true;

                endCenterX = $(e.target).position().left + ($(e.target).width() / 2);
                endCenterY = $(e.target).position().top + ($(e.target).height() / 2);

                $(line).attr('x2',endCenterX)
                $(line).attr('y2',endCenterY)

                return safe;
            }else{
                $(line).attr('x1',0)
                $(line).attr('y1',0)
                $(line).attr('x2',0)
                $(line).attr('y2',0)
            }
        }


        $('html,body').css({
            "cursor": "default"
        });

        isTouchs = false;
        return  isTouchs;
    });

    function pointes(x,y){
        var pointer = document.elementFromPoint(x,y);
        mtarget = pointer
        return mtarget
    }
}

