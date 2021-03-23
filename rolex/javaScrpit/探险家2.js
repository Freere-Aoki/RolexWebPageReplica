$(function () {
    var img1h = 620;
    var img2h = 1170;
    var img3h = 1662;
    var img4h = 2220;
    var img5h = 2750;
    var img6h = 3400;
    var img7h = 4500;
    var img8h = 4700;
    var img9h = 5200;
    var img10h = 6170;

    $(window).scroll(function () {
        console.log($(this).scrollTop());
        var di1 = $(this).scrollTop();
        if (img1h<=di1){
            $("#div2").animate({
             top:'-10',
                opacity: 1
            },2000)
        }
        if (img2h<=di1){
            $('#zhong2').animate({
                top:'165',
                opacity: 1
            },2000);
        }
        if (img3h<=di1){
            $('#zhong3').animate({
               top:'165',
                opacity: 1
            },2000);
        }
        if (img4h<=di1){
            $('#zhong4').animate({
               top:'340',
                opacity: 1
            },2000);
        }
        if (img5h<=di1){
            $('#bei1').animate({
                top:'300',
                opacity: 1
            },2000);
        }
        if (img6h<=di1){
            $('#ziz').animate({
                top:'500',
            },2000);
        }
        if (img7h<=di1){
            $('#heng').animate({
                top:'0',
            },1000);
        }
        if (img8h<=di1){
            $('#dd').animate({
                top:'0',
                opacity: 1
            },1500);
        }
        if (img9h<=di1){
            $('#q1').animate({
                top:'0',
                opacity: 1
            },1000);
        }
        if (img10h<=di1){
            $('.gundong-div1').animate({
                top:'0',
                opacity: 1
            },1000);
            $('.gundong-div11').delay(500).animate({
                top:'0',
                opacity: 1
            },1000);
            $('.gundong-div111').delay(1000).animate({
                top:'0',
                opacity: 1
            },1000);
        }
    })
});
$(function () {
    $(".gundong-bottom-al").click(function () {
        $(".gundong-bottom-al").removeClass("gundong-bottom-green");
        $(".gundong-bottom-ar").removeClass("gundong-bottom-green");
        $(".gundong-bottom-al").addClass("gundong-bottom-green");
        $(".gundongea-dong").removeClass("dongm");
    });
    $(".gundong-bottom-ar").click(function () {
        $(".gundong-bottom-al").removeClass("gundong-bottom-green");
        $(".gundong-bottom-ar").removeClass("gundong-bottom-green");
        $(".gundong-bottom-ar").addClass("gundong-bottom-green");
        $(".gundongea-dong").addClass("dongm");
    });
});