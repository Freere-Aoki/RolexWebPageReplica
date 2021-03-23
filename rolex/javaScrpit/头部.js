$(function () {
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