$(document).ready(function (){

    svg_type_2();
})


function svg_type_2(){
    var modo = new module();
    var path = $('#svg_9').get(0);
    var path_length =path.getTotalLength();


    path.style.strokeDasharray =path_length;
    path.style.strokeDashoffset = path_length;
    console.log(path_length)

    modo.start($('.ww'));



    function module(){


        this.start = function (button){
            $(button).on('click',function (){
                if($(this).val() === "reset"){
                   location.reload();
                }else{
                    modo.question_1(path);
                }

            });
        }

        this.qustion = function (target){
            $(target).addClass('on');
            $(target).children('button').on('click',function (){
                if(target.hasClass('box1')){
                    if($(this).val() === "true"){
                        $(target).removeClass('on');
                        modo.question_2(path);
                    }else{
                        alert('다시한번 생각해보세요!');
                        return false
                    }
                }else if(target.hasClass('box2')){
                    if($(this).val() === "true"){
                        $(target).removeClass('on');
                        modo.question_3(path);
                    }else{
                        alert('다시한번 생각해보세요!');
                        return false
                    }
                }else if(target.hasClass('box3')){
                    if($(this).val() === "true"){
                        $(target).removeClass('on');
                        modo.question_4(path);
                    }else{
                        alert('다시한번 생각해보세요!');
                        return false
                    }
                }

            });
        }

        this.question_1 = function (svg){
            var lineTime = 1500;
            var charterTime = 375;
            svg.animate({strokeDashoffset : 1500},lineTime)

            var timer_1 = setTimeout(function (){
                svg.style.strokeDashoffset = 1500;
                modo.qustion($('.box.box1'));
            },lineTime);

            $(".man").animate({
                top : "421px"
            },charterTime).promise().then(function() {
                return $(".man").animate({
                    left : "125px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "365px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "178px"
                },charterTime).promise();
            });

        }


        this.question_2 = function (svg){
            var lineTime = 1500;
            var charterTime = 150;
            svg.animate({strokeDashoffset : 1000},lineTime);

            var timer_2 = setTimeout(function (){
                svg.style.strokeDashoffset = 1000;
                modo.qustion($('.box.box2'));
            },lineTime);

            $(".man").animate({
                top : "314px"
            },charterTime).promise().then(function() {
                return $(".man").animate({
                    left : "121px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "259px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "57px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "203px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "-8px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "148px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "64px"
                },charterTime).promise();
            })
        }

        this.question_3 = function (svg){
            var lineTime = 1500;
            var charterTime = 1500;
            svg.animate({strokeDashoffset : 900},lineTime);

            var timer_3 = setTimeout(function (){
                svg.style.strokeDashoffset = 900;
                modo.qustion($('.box.box3'));
            },lineTime);

            $(".man").animate({
                top : "51px"
            },charterTime)

        }

        this.question_4 = function (svg){
            var lineTime = 1850;
            var charterTime = 125;
            svg.animate({strokeDashoffset : 0},lineTime);
            var  timer_4 = setTimeout(function (){
                svg.style.strokeDashoffset = 0;
                $('.ww').text('다시하기');
                $('.ww').val('reset');
            },lineTime);
            $(".man").animate({
                left: "250px"
            },charterTime).promise().then(function() {
                return $(".man").animate({
                    left : "250px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top:"91px",left : "258px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top:"99px",left : "300px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top:"150px",left : "323px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "359px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "97px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "438px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "-1px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "375px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "-58px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    left : "246px"
                },charterTime).promise();
            }).then(function() {
                return $(".man").animate({
                    top : "-96px"
                },charterTime).promise();
            })

        }
    }


}