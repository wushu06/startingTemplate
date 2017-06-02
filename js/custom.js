(function ($) {
    //loading
    $(window).on('load', function () {
        $('.loading-overlay .spinner').fadeOut(2000, function () {
            $(this).parent().fadeOut(3000, function () {
                $(this).remove();
            });

        });
    });


    //when scroll > px put class
    // Init Wow

    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       200
    });
    wow.init();


    $(window).scroll(function () {
        var navbar = $('.navbar');
        $(window).scrollTop()>= navbar.height()? navbar.addClass('scrolled'):navbar.removeClass('scrolled');
        //$($(window).scrollTop()>= navbar.height)? navbar.animate({padding: '50px'}): navbar.animate({padding: '0px'});
        $(window).scrollTop() >= 30? navbar.stop().animate({padding:'0px'}): navbar.stop().animate({padding:'10px'});



    });

    /*  var go = true;
     $(window).scroll(function() {
     if ($(this).scrollTop() > 50 && go) {
     $('.navbar').stop().animate({height:'90px'}, 500);
     go = false;
     } else if ($(this).scrollTop() < 50 && !go) {
     $('.navbar').stop().animate({height:'60px'}, 200);
     go = true;
     }
     });*/
    //toggle between tabs
    $('.tab-switch li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.'+$(this).data('class')).show().siblings().hide();
    });
})(jQuery);