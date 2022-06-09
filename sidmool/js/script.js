$(function(){

    var $slide = $("#mainbanner_list");
    var str = 1;
    var idx_lgth = $("#mainbanner_list > div").length;
    var interval =4000;
    var timerId = window.setInterval(AutoRun, interval);
    
    
    $("#indicator > li").click(function(){
        var idx = $(this).index();
        str = idx;
        $(this).addClass("ion").siblings().removeClass("ion");
        $("#mainbanner_list > div").eq(idx).addClass("on").siblings().removeClass("on");
    });


    function AutoRun(){  
        if(str == idx_lgth){
            str = 0;
        }
        $("#indicator>li").eq(str).addClass("ion").siblings().removeClass("ion");
        $("#mainbanner_list > div").eq(str).addClass("on").siblings().removeClass("on");

        str++;
    }

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

    $(window).on("scroll",function(){
        $("#eco").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight()/2;
            var windowHeight = $(window).scrollTop() + $(window).height();
            if(windowHeight > objHeight){
                $("#eco_typo").animate({"opacity" : 1,"margin-top" : 0},800);
            }
        });
    });

    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing_text > p").length;

    var typingTxt = $(".typing_text > p").eq(liIndex).text();
    typingTxt=typingTxt.split("");

    if(typingBool==false){
        typingBool==true;
        var tyInt = setInterval(typing,200);
    }

    function typing(){
        if(typingIdx<typingTxt.length){
            $(".typing > p").eq(liIndex).append(typingTxt[typingIdx]);
            typingIdx++;
        } else{
            if(liIndex<liLength-1){
                liIndex++;
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing_text>p").eq(liIndex).text();

                clearInterval(tyInt);

                setTimeout(function(){
                    tyInt = setInterval(typing,200);
                },1000);
            } else if(liIndex==liLength-1){
                clearInterval(tyInt);
                
                setTimeout(function(){
                    typingBool = false;
                    liIndex=0;
                    typingIdx =-0;

                    typingTxt = $(".typing_text > p").eq(liIndex).text();
                    $(".typing p").html("")

                    tyInt = setInterval(typing,200);
                }, 1000);
            }
        }
    }
});