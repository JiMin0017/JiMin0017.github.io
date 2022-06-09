$(function(){

    //var $html = $("html,body");
    //$html.animate({scrollTop : 0},"slow");
    
    //메인 배너 슬라이드
    var $bannerSlide = $("#mainbanner_slide > ul");
    var interval = 5000;
    var timerId = window.setInterval(slideImage,interval);

    $("#mainbanner_slide > ul > li").hover(function(){
        window.clearInterval(timerId);
    },function(){
        timerId = window.setInterval(slideImage,interval);
    });

    $(".btn").hover(function(){
        window.clearInterval(timerId);
    },function(){
        timerId = window.setInterval(slideImage,interval);
    });
    $(".main_next").on("click",slideImage);

    $(".main_prev").click(function(){
        $bannerSlide.css("margin-left", "-100%")
        .prepend($bannerSlide.children(":last"))
        .animate({"margin-left" : 0 },700);
        });

    function slideImage(){
        $bannerSlide.animate({
            "margin-left" : "-100%"},700,function(){
                $bannerSlide.removeAttr("style").children(":first").appendTo($bannerSlide);
            });
    }


    // 인테리어 이미지 배너 슬라이드

    var $int_list = $("#interior_wrap > ul");
    var $intImg_li = $("#interior_wrap > ul > li");

    var photoIndex = 1;
 
    console.log(photoIndex);

    $(".int_prev").on("click",function(){
        photoIndex--;

        if(photoIndex < 0) photoIndex = $intImg_li.length -1;
        console.log("prev index : " + photoIndex);

        $int_list.css("margin-right", "-50%")
        .prepend($int_list.children(":last"));

        $intImg_li.eq(photoIndex).addClass("big").siblings().removeClass();
        $intImg_li.eq(photoIndex).siblings().addClass("in");
    });

    $(".int_next").on("click", function(){
        photoIndex++;

        photoIndex %= $intImg_li.length;

        console.log("next index : " + photoIndex);



        $int_list.css({"margin-left":"-50%"},{"transition-duration" : 400}).removeAttr("style").children(":first").appendTo($int_list);

        $intImg_li.eq(photoIndex).addClass("big").siblings().removeClass();
        $intImg_li.eq(photoIndex).siblings().addClass("in");

    });

    var didScroll;
    var lastScrollTop = 0;
    var delta = 10;
    var navbarHeight = $("#nav").outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    },400);

    function hasScrolled(){
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta) 
        return;

        if(st > lastScrollTop && st > navbarHeight){
            $("#nav").addClass("nav-up");
        } else {
            if(st < 400){
                $("#nav").removeClass("nav-up");
            }
        }
        lastScrollTop = st;
    }

});