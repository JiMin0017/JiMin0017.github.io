$(function(){

    $(".menu").on("click",function(){
        $(".nav_popup").animate({"margin-right" : 0},200);
        $(".bg_shadow").css({"display" : "block"});
    });

    $(".close").on("click",function(){
        $(".nav_popup").animate({"margin-right" : -1000+"px"},200);
        $(".bg_shadow").css({"display" : "none"});
    });
});