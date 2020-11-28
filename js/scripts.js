$(document).ready(function() {


// button scroll

$('.js--scroll-to-story').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-story').offset().top}, 1000); 
 });

 $('.js--scroll-to-gallery').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-gallery').offset().top}, 1000); 
 });

 $('.js--scroll-to-members').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-members').offset().top}, 1000); 
 });

 $('.js--scroll-to-home').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000); 
 });

 $('.js--scroll-to-contact').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000); 
});


 /* For the sticky navigation */
 $('.js--section-story').waypoint(function(direction) {
   if (direction == "down") {
       $('nav').addClass('sticky');
   } else {
       $('nav').removeClass('sticky');
   }
}, {
 offset: '60px;'
});


// Navigation for phone
$('.js--nav-icon').click(function() {
   var nav = $('.js--main-nav');
  
   nav.slideToggle(200);
});



});
  
  










 