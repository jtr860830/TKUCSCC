$(function () {
    var me = $('#a');
    var me2 = $('#b');
    var hieghtThreshold = $(".qoo").offset();

    console.log(hieghtThreshold);
    //    var hieghtThreshold_end  = $(".content").offset().top +$(".content").height() ;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 100) {

            me.addClass('slideInDown');
        }
        if (scroll > 650) {

            me2.addClass('slideInDown');
        }
    });

})
