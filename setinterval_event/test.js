$(document).ready(function(){

    // tabEvent();
    newtabevent();
});
function newtabevent(){

    var idx ="";
    var status = "";
    var timer = "";
    var num = "";
    var eqnum ="";

    $('#test li a').on('click',function (e){
        e.preventDefault();
        timers("flase");
        var idx = $(this).parent('li').index();
        $('#test li').removeClass('on');
        $('#test li').eq(idx).addClass('on');

    });

    $('#test').on('mouseleave',function (){
        timers("true");
    });
    function timers(status){
        if(status === "flase"){
            console.log(status);
            clearInterval(timer);
        }else if(status === "true"){
            console.log(status);
             timer = setInterval(numlow,3000);
        }
    }

    function numlow(){
        var listCount = $('#test li').length;
        var idx = $('#test li.on').index();

        console.log(idx);
            $('#test li').removeClass('on');
            $('#test li').eq(idx+1).addClass('on');
            idx = idx + 1;
            if(idx >= listCount){
                console.log('종료')
                timers("flase");
                $('#test li').removeClass('on');
                idx = 0;
            }
    }

}






function tabEvent(){
    var timer = "";
    var idx = "";
    $('#test li a').on('click',function(e){
        clearInterval(timer);
        e.preventDefault();
        idx = $(this).parent('li').index();
        $('#test li').removeClass('on');
        $(this).parents('li').eq(idx).addClass('on');
        console.log(idx);


        /*
        $('#container .goodbox .cateProduct .tabArea .rgh .tabContent .cont').css({'display':'none'});
        $('#container .goodbox .cateProduct .tabArea .rgh .tabContent .cont').eq(idx).css({'display':'block'});
        */

    });



    $('.text_bxo').on('mouseleave',function(){
        console.log('지나감');
        clearInterval(timer);
        timers();
    });


    function timers(){
        var listCount = $('#test li').length;
        idx = $('#test li.on').index();
        timer = setInterval(function(){
            $('#test li').removeClass('on');
            $('#test li').eq(idx).addClass('on');
            idx ++;
        },3000);
        if(idx > listCount){
            console.log('끝');
            clearInterval(timer);
            $('#test li').removeClass('on');
        }
    }

}


            
            
            
