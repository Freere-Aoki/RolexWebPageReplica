var time1;
var time2;
var time3;
var time4;

var index = 1;

var myDate = new Date();

function myFunction1(ele) {
    time1 = ele.duration;
}

function myFunction2(ele) {
    time2 = ele.duration;
}

function myFunction3(ele) {
    time3 = ele.duration;
}

function myFunction4(ele) {
    time4 = ele.duration;
}

$(function () {
    var lattime = myDate.getTime();;
    var fortime;
    var timeend;
    veo1 = document.getElementById("video1");
    veo2 = document.getElementById("video2");
    veo3 = document.getElementById("video3");
    veo4 = document.getElementById("video4");


    var biaoshi = 0;
    $(".rlx-openMenu").click(function () {

        $(".xfnav-left-box").stop().animate({scrollTop:0},1000);
        if(biaoshi==0){
            $(".rlx-shorts").css({"display":"none"});
            $(".header").addClass("movehead");
            $(".xfnav-left-box").addClass("movebox");
            $(".hssSlider").addClass("move");
            biaoshi = 1;
        }else{
            $(".rlx-shorts").css({"display":"block"});
            $(".header").removeClass("movehead");
            $(".xfnav-left-box").removeClass("movebox");
            $(".hssSlider").removeClass("move");
            biaoshi = 0;
        }
    });

    $("#right-a").click(function () {
        if(index!==4){
            index++;
            lattime = myDate.getTime();
            var veoL = "veo"+index;
            veoL.currentTime=0;
        }else{
            index=1;
            lattime = myDate.getTime();
            var veoL = "veo"+index;
            veoL.currentTime=0;
        }

    });
    $("#left-a").click(function () {
        if(index!==1){
            index--;
            lattime = myDate.getTime();
            var veoL = "veo"+index;
            veoL.currentTime=0;
        }else{
            index = 4;
            lattime = myDate.getTime();
            var veoL = "veo"+index;
            veoL.currentTime=0;
        }

    });

    $(".a1").click(function () {
        if(index!==1){
            index = 1;
            lattime = myDate.getTime();
            veo1.currentTime=0;
        }
    });
    $(".a2x").click(function () {
        if(index!==2){
            index = 2;
            lattime = myDate.getTime();
            veo2.currentTime=0;
        }
    });
    $(".a3x").click(function () {
        if(index!==3){
            index = 3;
            lattime = myDate.getTime();
            veo3.currentTime=0;
        }
    });
    $(".a4x").click(function () {
        if(index!==4){
            index = 4;
            lattime = myDate.getTime();
            veo4.currentTime=0;
        }
    });
    var woyezhidao = setInterval(function () {
        if (index==1){
            bofang1();
            myDate = new Date();
            fortime = myDate.getTime();
            timeend = fortime-lattime;
            if(timeend>=6200){
                veo2.currentTime=0;
                bofang2();
                index++;
                lattime = myDate.getTime();
            }
        }
        if (index==2){
            bofang2();
            myDate = new Date();
            fortime = myDate.getTime();
            timeend = fortime-lattime;
            if(timeend>=6880){
                veo3.currentTime=0;
                bofang3();
                index++;
                lattime = myDate.getTime();
            }
        }
        if (index==3){
            bofang3();
            myDate = new Date();
            fortime = myDate.getTime();
            timeend = fortime-lattime;
            if(timeend>=12000){
                veo4.currentTime=0;
                bofang4();
                index++;
                lattime = myDate.getTime();
            }
        }
        if (index==4){
            bofang4();
            myDate = new Date();
            fortime = myDate.getTime();
            timeend = fortime-lattime;
            if(timeend>=8000){
                veo1.currentTime=0;
                bofang1();
                index=1;
                lattime = myDate.getTime();
            }
        }
    },100);
});

function bofang1(){
    $('.center-shipin').removeClass("activenow1");
    $('.center-shipin').removeClass("activenow2");
    $('.center-shipin').removeClass("activenow3");
    $('.center-shipin').removeClass("activenow4");
    $('.center-shipin').addClass("activenow1");

    $('.run1').removeClass("playnow1");
    $('.run2').removeClass("playnow2");
    $('.run3').removeClass("playnow3");
    $('.run4').removeClass("playnow4");
    $('.run1').addClass("playnow1");
}
function bofang2(){
    $('.center-shipin').removeClass("activenow1");
    $('.center-shipin').removeClass("activenow2");
    $('.center-shipin').removeClass("activenow3");
    $('.center-shipin').removeClass("activenow4");
    $('.center-shipin').addClass("activenow2");

    $('.run1').removeClass("playnow1");
    $('.run2').removeClass("playnow2");
    $('.run3').removeClass("playnow3");
    $('.run4').removeClass("playnow4");
    $('.run2').addClass("playnow2");
}
function bofang3(){
    $('.center-shipin').removeClass("activenow1");
    $('.center-shipin').removeClass("activenow2");
    $('.center-shipin').removeClass("activenow3");
    $('.center-shipin').removeClass("activenow4");
    $('.center-shipin').addClass("activenow3");

    $('.run1').removeClass("playnow1");
    $('.run2').removeClass("playnow2");
    $('.run3').removeClass("playnow3");
    $('.run4').removeClass("playnow4");
    $('.run3').addClass("playnow3");
}
function bofang4(){
    $('.center-shipin').removeClass("activenow1");
    $('.center-shipin').removeClass("activenow2");
    $('.center-shipin').removeClass("activenow3");
    $('.center-shipin').removeClass("activenow4");
    $('.center-shipin').addClass("activenow4");

    $('.run1').removeClass("playnow1");
    $('.run2').removeClass("playnow2");
    $('.run3').removeClass("playnow3");
    $('.run4').removeClass("playnow4");
    $('.run4').addClass("playnow4");
}


$(function () {
    /*setInterval("$('.section-jingdian').height(window.innerHeight)",1);*/
    setInterval("$('.section1').height(window.innerHeight)",1);
    setInterval("$('.xfnav-left-box').height(window.innerHeight)",1);
    /*setInterval("$('.push-edito').height(window.innerHeight)",1);*/
    setInterval("f()",1);
    //获取滚动条高度
    var gao = $(document).scrollTop();
    //获取导航栏高度
    var hang = $('.header').outerHeight();
    $(window).scroll(function () {
        //滚动事件触发后滚动条的高度
        var xian = $(document).scrollTop();
        //触发后于元素高度对比
        if(xian>hang){
            $('.header').addClass('hide');

        }else{
            $('.header').removeClass('hide');
        }
        //触发后的高度与上次高度进行对比
        if(xian<gao){
            $('.header').removeClass('hide');
        }
        gao = $(document).scrollTop();
    })
});

function f() {
    var gao1 = $(document).scrollTop();
    if (gao1==0){
        $('.header').removeClass('notops').addClass('tops');
    }else{
        $('.header').removeClass('tops').addClass('notops');
    }
}