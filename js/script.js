$(function(){
    var $html = $("html,body");
    var $navList = $("#nav > ul > li > a");

    $html.animate({ scrollTop: 0 }, "slow"); 

    //nav.click
    $navList.on("click", function(e){
        e.preventDefault();
        $html.animate({scrollTop:$(this.hash).offset().top}, 700);
    });//on.click


    //on.scroll
    $(window).on("scroll", function(){
        $(".margin-left").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() / 2;
            var windowHeight = $(window).scrollTop() + $(window).height();

            if( windowHeight > objHeight){
                $(this).animate({'margin-left' : '0'}, 1000);
            }         
        });

        $(".margin-right").each(function(i){
            var objHeight = $(this).offset().top + $(this).outerHeight() / 2;
            var windowHeight = $(window).scrollTop() + $(window).height();

            if( windowHeight > objHeight){
                $(this).animate({'margin-right' : '0'}, 1000);
            }         
        });

    });//on.scroll

    // Image Gallery
    var $photo = $("#photo");
    var $overlay = $("#overlay");
    var $thumnails = $("#banner_list > li > img");

    var photoIndex = 0;

    $thumnails.on("click", function(){
        photoIndex = $thumnails.index(this);

        $photo.attr("src", $(this).attr("src"));
        $overlay.fadeIn(function(){
            $photo.fadeIn("slow");
        });
        $("#con_bg").hide();
        $(".con").hide();     
    });

    $("#close").on("click", function(){
        $photo.fadeOut(function(){
            $overlay.fadeOut("slow");
        });
        $("#con_bg").show();
        $(".con").show();
    });

});