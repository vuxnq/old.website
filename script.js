$(window).scroll(function() {    
    
    var scroll = $(window).scrollTop();

    if (scroll >= (window.innerHeight / 2)-60) {
        $("header").addClass("scroll");
        
    } else {
        $("header").removeClass("scroll");
    }
});