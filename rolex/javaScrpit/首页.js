
$(
    function(){
        /*$("a").click(function(){
            var hr = $(this).attr("href");
            var anh = $(hr).offset().top;
            $("html,body").stop().animate({scrollTop:anh},2000);
        }
        );*/
        var index = 1;
        $("#mao1,#mao2,#mao3,#mao4,#mao5").click(function () {
            index = 1;
            clicked(index);
        });
        $("#mao2").click(function () {
            index = 2;
            clicked(index);
        });
        $("#mao3").click(function () {
            index = 3;
            clicked(index);
        });
        $("#mao4").click(function () {
            index = 4;
            clicked(index);
        });
        $("#mao5").click(function () {
            index = 5;
            clicked(index);
        });
        $("#a6").click(function () {
           if (index==5){

           }else{
               index++;
           }
            clicked(index);
        });
    }

);
function clicked(a){
    $("html,body").stop().animate({scrollTop:$('#div'+a).offset().top},1400);
}

$(document).ready(function () {
        $('.biao').animate({
            top:'-10px',
            opacity:1

        },1200);
});
$(function () {
    $("#mao2").click(function () {
        $('.p1').delay(1000).animate({
            top: '-30',
            opacity: 1
        }, 1000)
            $('.h1').delay(1000).animate({
                top:'30',
                opacity:1
            },1000)
    });
});
$(function () {
    $("#mao3").click(function () {
        $('.h2,.p2').delay(1000).animate({
            left:'100px',
            opacity:1
        },1000)
    })
});
$(function () {
    $('#mao4').click(function () {
        $('.h3').delay(1000).animate({
            opacity:1
        },1000)
    })
})
$(function () {
    var ye = 1;
    $("#a6").click(function () {
        ye++;
        if (ye == 2) {
            $('.p1').delay(1000).animate({
                top: '-30',
                opacity: 1
            }, 1000)
            $('.h1').delay(1000).animate({
                top: '30',
                opacity: 1
            }, 1000)
        }
        if (ye == 3){
            $('.h2,.p2').delay(1000).animate({
                left:'100px',
                opacity:1
            },1000)
        }
        if (ye == 4){
            $('.h3').delay(1000).animate({
                opacity:1
            },1000)
        }
    });
});
