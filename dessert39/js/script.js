$(function(){

    // 메인배너 슬라이드
    var $slide = $("#mainbanner_slide > ul");
    var imageIndex = 0;
    var imageLength = $slide.children().length;
    var interval = 4000;
    var timerId = window.setInterval(slideImage, interval);
    
    $("#mainbanner_slide").hover(function(){
        window.clearInterval(timerId);
    },
    function(){
        timerId = window.setInterval(slideImage, interval);
    });

    // 인디케이터 추가
    var $indicator = $("<ol></ol>").attr("id","indicator");

    $slide.children().each(function(index){
        $("<li></li>").append("<span>" + (index + 1 ) + "</span>").appendTo($indicator);
    });

    $indicator.appendTo("#mainbanner_slide").children(":first").addClass("on");

    // 인디케이터 
    $indicatorItems = $indicator.children();

    $indicatorItems.on("click",function(){
        if ($(this).is(".on")) return;

        var index = $indicatorItems.index(this);

        var step = index - imageIndex;

        if (step < 0) step += imageLength;

        console.log("ONCLICK: imageIndex = " + imageIndex);
        console.log("ONCLICK: index = " + index);
        console.log("ONCLICK : step = " + step);

        imageIndex = index;

        $indicatorItems.removeAttr("class").eq(imageIndex).addClass("on");

        $slide.animate({"margin-left" : step * -100 +"%"},"slow",function(){
            $slide.removeAttr("style").children(":lt(" + step + ")").appendTo($slide);
        });
    });

    function slideImage(){
        imageIndex++;
        imageIndex %= imageLength;

        $indicatorItems.removeAttr("class").eq(imageIndex).addClass("on");

        $slide.animate({
            "margin-left" : "-100%"},"slow",function(){
                $(this).removeAttr("style").children(":first").appendTo(this);
            });
    }

    //스크롤
    $(window).on("scroll",function(){
        $(".hide1").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() /2;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $(this).animate({"opacity" : 1,"margin-top" : 0},800);
            }       
        });

        $(".hide2").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() /4;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $(this).animate({"opacity" : 1,"margin-top" : 0},800);
            }
        });

        $(".slideup").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight()/5;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $(this).animate({"opacity" : 1, "margin-top" : 0},800);
                $(".slideup:eq(1)").delay(150).animate({"opacity" : 1, "margin-top" : 0},800);
                $(".slideup:eq(2)").delay(200).animate({"opacity" : 1, "margin-top" : 0},800);
            }
        });
    });

    //인테리어 갤러리
    var $photo = $(".interior_main");

    $("#gallery > li > a").on("click",function(event){
        event.preventDefault();

        var root = $(this).attr("id");
        var url = root.substring(3,root.length);
        var go = "images/interior"+url+".jpg";

        $photo.fadeOut(200,function(){
            $photo.attr("src",go).fadeIn(1000);
        });
    });

    //header 스크롤
    var didScroll;
    var lastScrollTop = 0;
    var delta = 10;
    var navbarHeight = $("#header").outerHeight();

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
            $("#header").addClass("nav-up");
        } else {
            if(st < 400){
                $("#header").removeClass("nav-up");
            }
        }
        lastScrollTop = st;
    }

});