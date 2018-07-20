$(document).ready(function () {
   $('button.hamburger').click(function () {
       $(this).toggleClass('is-active');
       $('.mobile-menu').toggleClass('visible');
   })
});

//Mobile menu open