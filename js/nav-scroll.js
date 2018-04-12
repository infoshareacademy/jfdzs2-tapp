$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();

        if (scrollTop >= 500) {
            $('.navbar-default').addClass('navbar-scrolled');
        } else if (scrollTop < 500) {
            $('.navbar-default').removeClass('navbar-scrolled');
        }
    });
        $(window).scroll(function() {
            scrollTop = $(window).scrollTop();

            if (scrollTop >= 500) {
                $('.logo').addClass('logo-scrolled');
            } else if (scrollTop < 500) {
                $('.logo').removeClass('logo-scrolled');
            }
        })});



