$(function () {

    console.log("asdasd")
    // 幫 a.abgne_gotoheader 加上 click 事件
    $('#director').click(function () {
        // 讓捲軸移動到 0 的位置
        $('html, body').animate({
            scrollTop: $(".dir").offset().top
        }, 600);
        console.log("asdasd");

    });

    $('#f-t').click(function () {
        // 讓捲軸移動到 0 的位置
        $('html, body').animate({
            scrollTop: $(".full-time-teachers").offset().top
        }, 600);
        console.log("asdasd");

    });

    $('#p-t').click(function () {
        // 讓捲軸移動到 0 的位置
        $('html, body').animate({
            scrollTop: $(".part-time-teachers").offset().top
        }, 600);
        console.log("asdasd");

    });

//    $('#d').click(function () {
              //        // 讓捲軸移動到 0 的位置
              //        $('html, body').animate({
              //            scrollTop: $("#d").offset().top
              //        }, 600);
              //        console.log("asdasd");
              //
              //    });





});
