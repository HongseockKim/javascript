$(document).ready(function (){
    test();
});

function test(){
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
    console.log($('#a'));
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

    $(document).on('mousemove touchmove',function (e){
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
    });

    $(document).on('mouseup touchend',function (e){

        drags = false;
        if(safe){
            return  false
        }

        if(isTouchs === true){
            console.log(Math.abs(e.changedTouches[0].clientX) );
            console.log(Math.abs(e.changedTouches[0].clientY) );

        }else{
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




}