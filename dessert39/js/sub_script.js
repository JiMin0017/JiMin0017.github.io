$(function(){
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

    var $image = $("#main_title > .wrap > img");

    //스크롤 이벤트
    $(window).on("scroll",function(){
        $("#main_title").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() /1.6;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $image.css({"transform" : "translatez(" + 350 +"px)"}).addClass("transition");
            }       
        });

        $("#strawberry").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() /1.2;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $("#strawberry > .wrap > img").animate({"opacity" : 1,"margin-top" : 15 + "rem"},600);
            }       
        });

        $(".opacity").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() /2;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $(".opacity:eq(0)").animate({"opacity" : 1},900);
                $(".opacity:eq(1)").delay(200).animate({"opacity" : 1},900);
                $(".opacity:eq(2)").delay(300).animate({"opacity" : 1},900);
            }       
        });

        $("#last_title").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() /1.6;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $(".cake").css({"transform" : "translatez(" + 350 +"px)"}).addClass("transition");
            }       
        });

    });
});//on.ready