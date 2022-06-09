$(function(){
    $("#main_txt").animate({"opacity" : 1, "top" : 35 + "%"},1200);

    $(window).on("scroll",function(){
        $("#value_wrap").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight()/2.5;
            var windowHeight = $(window).scrollTop()+ $(window).height();
            if(windowHeight > objHeight){
                $("#value_wrap > div:eq(0)").animate({"opacity" : 1, "margin-top" : 0},1000);
                $("#value_wrap > div:eq(1)").delay(200).animate({"opacity" : 1, "margin-top" : 0},1000);
                $("#value_wrap > div:eq(2)").delay(300).animate({"opacity" : 1, "margin-top" : 0},1000);
            }
        });

        $("#beauty_wrap").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight()/8;
            var windowHeight = $(window).scrollTop()+ $(window).height();
            if(windowHeight > objHeight){
                $(this).animate({"opacity" : 1, "padding-top" : 120 + "px"},1500);
            }
        });

    });//on.scroll


});