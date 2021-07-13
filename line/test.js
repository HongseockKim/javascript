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


    var mousepointes = "";
    $('.start').on('mousedown',function (e){
        drags = true;
        startX = e.clientX;
        startY = e.clientY;
        offsetX = $(this).position().left;
        offsetY = $(this).position().top;
        centerSvgX = offsetX + ($(this).width() / 2 );
        centerSvgY = offsetY + ($(this).height() / 2 );

        testsX = e.offsetX;
        testsY = e.offsetY;
        console.log(testsX);
        console.log(testsY);

        $('html,body').css({
            "cursor": "grabbing"
        });
    });
    $(document).on('mousemove',function (e){
        if(drags === true){
            delX = e.clientX - startX;
            delY = e.clientY - startY;
           //console.log(delX)
            //console.log(delY)
            $('svg line').attr('x1',testsX)
            $('svg line').attr('y1',centerSvgY)
            $('svg line').attr('x2',delX + centerSvgX)
            $('svg line').attr('y2',delY + centerSvgY)
            $('html,body').css({
                "cursor": "grabbing"
            });
        }
    });

    $(document).on('mouseup',function (e){
        drags = false;
        if($(e.target).hasClass('end')){
            endCenterX = $(e.target).position().left + ($(e.target).width() / 2);
            endCenterY = $(e.target).position().top + ($(e.target).height() / 2);

            $('svg line').attr('x2',endCenterX)
            $('svg line').attr('y2',endCenterY)
        }else{
            $('svg line').attr('x1',0)
            $('svg line').attr('y1',0)
            $('svg line').attr('x2',0)
            $('svg line').attr('y2',0)
        }


        $('html,body').css({
            "cursor": "default"
        });

    });




}