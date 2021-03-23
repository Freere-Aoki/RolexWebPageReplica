$(function () {
    $('.juzhong').click(function () {

        var video1 = document.getElementById('videoap');

        if(video1.paused)                     {
            video1.play();
            $('.blackhou').removeClass('video-playernot');
            $('.blackhou').addClass('video-playernow');
        }else{
            video1.pause();
            $('.blackhou').removeClass('video-playernow');
            $('.blackhou').addClass('video-playernot');
        }
    });
    $('.juzhong2').click(function () {

        var video2 = document.getElementById('videobp');

        if(video2.paused)                     {
            video2.play();
            $('.blackhoux').removeClass('video-playernot');
            $('.blackhoux').addClass('video-playernow');
        }else{
            video2.pause();
            $('.blackhoux').removeClass('video-playernow');
            $('.blackhoux').addClass('video-playernot');
        }

    });
});
$(function () {
   setInterval("$('.ren').height(window.innerHeight)",10);
   setInterval("$('#ren1').height(window.innerHeight)",10);
   setInterval("$('#ren2').height(window.innerHeight)",10);
   setInterval("$('#ren3').height(window.innerHeight)",10);
});
$(function () {
    var img1h = 1984;
    var img2h = 2500;
    var img3h = 4320;
    var img4h = 5000;
    var tu1 = 2913;
    var tu2 = 5343.33;
    console.log(img1h);
    console.log(img2h);
    console.log(img3h);

    $(window).scroll(function () {
        console.log($(this).scrollTop());
        var di1 = $(this).scrollTop();
        if (img1h<=di1){
            $("#ziz1").animate({
                top:'200',
                opacity: 1
            },1000)
        }
        if (img2h<=di1){
            $('#ziz2').animate({
                top:'150',
                opacity: 1
            },1000);
        }
        if (tu1<=di1){
            $('#ren1').css({"background-attachment":"scroll"});
        }else {
            $('#ren1').css({"background-attachment":"fixed"});
        }
        if (img3h<=di1){
            $('#ziz3').animate({
                top:'150',
                opacity: 1
            },1000);
        }
        if (img4h<=di1){
            $('#ziz4').animate({
                top:'150',
                opacity: 1
            },1000);
        }
        if (tu2<=di1){
            $('#ren3').css({"background-attachment":"scroll"});
        }else {
            $('#ren3').css({"background-attachment":"fixed"});
        }
    })
});