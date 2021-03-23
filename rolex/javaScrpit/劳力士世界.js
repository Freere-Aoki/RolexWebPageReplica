$(document).ready(function () {
    $('.p1').animate({
        top:'170',
        opacity:1
    },1500)
})
$(function () {
    var img1h = 200;
    var img2h = 700;
    var img3h = 1200;
    var img4h = 1940;
    var img5h = 2500;
    var img6h = 3200;
    var img7h = 3670;
    var img8h = 6170;
    console.log(img1h);
    console.log(img2h);
    console.log(img3h);

    $(window).scroll(function () {
        console.log($(this).scrollTop());
        var di1 = $(this).scrollTop();
        if (img1h<=di1){
            $("#kuang1").animate({
                opacity:1
            },2000)
        }
        if (img2h<=di1){
            $('#kuang2').animate({
                opacity:1
            },2000);
            $('#kuang3').delay(500).animate({
                opacity:1
            },2000);
        }
        if (img3h<=di1){
            $('#kuang4').animate({
                opacity:1
            },2000);
            $('#kuang5').delay(500).animate({
                opacity:1
            },2000);
        }
        if (img4h<=di1){
            $('#kuang6').animate({
                opacity:1
            },2000);
            $('#kuang7').delay(500).animate({
                opacity:1
            },2000);
        }
        if (img5h<=di1){
            $('#kuang8').animate({
                opacity:1
            },2000);
            $('#kuang9').delay(500).animate({
                opacity:1
            },2000);
        }
        if (img6h<=di1){
            $('#kuang10').animate({
                opacity:1
            },2000);
            $('#kuang11').delay(500).animate({
                opacity:1
            },2000);
        }
        if (img7h<=di1){
            $('#kuang12').animate({
                opacity:1
            },2000);
            $('#kuang13').delay(500).animate({
                opacity:1
            },2000);
        }
    })
});
