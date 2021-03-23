
var indexlunbo = 1;

woyezhidao = setInterval(jishi,3000);

$(function () {
    $("#lunbo-right-a").click(function () {
        indexlunbo++;
        if(indexlunbo!==9){
            bofang(indexlunbo);
            window.clearInterval(woyezhidao);
        }else{
            indexlunbo=1;
            bofang(indexlunbo);
            window.clearInterval(woyezhidao);
        }
    });
    $("#lunbo-left-a").click(function () {
        indexlunbo--;
        if(indexlunbo!==1){
            bofang(indexlunbo);
            window.clearInterval(woyezhidao);
        }else{
            indexlunbo = 8;
            bofang(indexlunbo);
            window.clearInterval(woyezhidao);
        }
    });
});

function jishi(){
    indexlunbo++;

    if(indexlunbo==1){
        bofang(indexlunbo);
    }else if(indexlunbo==2){
        bofang(indexlunbo);
    }
    else if(indexlunbo==3){
        bofang(indexlunbo);
    }
    else if(indexlunbo==4){
        bofang(indexlunbo);
    }
    else if(indexlunbo==5){
        bofang(indexlunbo);
    }
    else if(indexlunbo==6){
        bofang(indexlunbo);
    }
    else if(indexlunbo==7){
        bofang(indexlunbo);
    }
    else if(indexlunbo==8){
        bofang(indexlunbo);
        indexlunbo=0;
    }

}

$(function () {
    var  r = 0;
    document.getElementById("lunbo-nav-back-sp").onmouseover = function () {
        window.clearInterval(woyezhidao);
    };
    document.getElementById("lunbo-nav-back-sp").onmouseout = function () {
        woyezhidao = setInterval(jishi,3000);
    };
    document.getElementById("lunbo-left-a").onmouseover = function () {
        window.clearInterval(woyezhidao);
    };
    document.getElementById("lunbo-left-a").onmouseout = function () {
        woyezhidao = setInterval(jishi,3000);
    };
    document.getElementById("lunbo-right-a").onmouseover = function () {
        window.clearInterval(woyezhidao);
    };
    document.getElementById("lunbo-right-a").onmouseout = function () {
        woyezhidao = setInterval(jishi,3000);
    };
});
function bofang(indexlunbo){
    $('.center-lunbo').removeClass("activenower1");
    $('.center-lunbo').removeClass("activenower2");
    $('.center-lunbo').removeClass("activenower3");
    $('.center-lunbo').removeClass("activenower4");
    $('.center-lunbo').removeClass("activenower5");
    $('.center-lunbo').removeClass("activenower6");
    $('.center-lunbo').removeClass("activenower7");
    $('.center-lunbo').removeClass("activenower8");
    var abcdxk = "activenower"+indexlunbo;
    $('.center-lunbo').addClass(abcdxk);
}
$(function () {
    var lun = 450;
    var xian = 1225;
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        var di1 = $(this).scrollTop();
        if (lun <= di1) {
            $(".web-roller-jingdian").animate({
                top: '0',
            }, 1000)
        }
        if (xian <= di1) {
            $(".push-lingshou").animate({
                opacity:1
            }, 1500)
        }
    })
})
