$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // autoWidth: true,
        autoHeight: true,
        center: true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

$(window).scroll(function () {
    if ( $(document).scrollTop()*2 > $('.s-about-us').offset().top) {
        $('.up h4').addClass('hidden');
        $('.up i').addClass('hidden');
    }
});

$(window).scroll(function () {
    if ( $(document).scrollTop() + 370 > $('.s-services').offset().top) {
        $('.t-a').addClass('show');
        $('.t-a').addClass('show');
    }
});


$(window).scroll(function () {
   if ($(document).scrollTop() > 0) {
       $('header').addClass('fixedHeader');
   }
   else {
       $('header').removeClass('fixedHeader');
   }
});

$(document).ready(function() {


    $("a.mm").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


});