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


//   /* Navigation scroll */
//   $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//         if (target.length) {
//           $('html,body').animate({
//             scrollTop: target.offset().top
//           }, 1000);
//           return false;
//         }
//       }
//     });
//   });


  // Playlist 

  










 