$(document).ready(function() {


// button scroll

$('.js--scroll-to-story').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-story').offset().top}, 1000); 
 });

 $('.js--scroll-to-gallery').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-gallery').offset().top}, 1000); 
 });

 $('.js--scroll-to-songs').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-songs').offset().top}, 1000); 
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

//  Animations on scroll 
$('.js--wp-1').waypoint(function(direction) {
	$('.js--wp-1').addClass('animated animate__bounceIn');
}, {
	offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
	$('.js--wp-2').addClass('animated animate__fadeInLeft');
}, {
	offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) {
	$('.js--wp-3').addClass('animated animate__bounceInLeft');
}, {
	offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) {
	$('.js--wp-4').addClass('animated animate__bounceInRight');
}, {
	offset: '50%'
});

$('.js--wp-5').waypoint(function(direction) {
	$('.js--wp-5').addClass('animated animate__tada');
}, {
	offset: '50%'
});

$('.js--wp-6').waypoint(function(direction) {
	$('.js--wp-6').addClass('animated animate__bounceInLeft');
}, {
	offset: '50%'
});

$('.js--wp-7').waypoint(function(direction) {
	$('.js--wp-7').addClass('animated animate__bounceInRight');
}, {
	offset: '50%'
});

$('.js--wp-9').waypoint(function(direction) {
	$('.js--wp-9').addClass('animated animate__bounceInRight');
}, {
	offset: '50%'
});

$('.js--wp-8').waypoint(function(direction) {
	$('.js--wp-8').addClass('animated animate__bounceInLeft');
}, {
	offset: '50%'
});

$('.js--wp-10').waypoint(function(direction) {
	$('.js--wp-10').addClass('animated animate__bounceInDown');
}, {
	offset: '50%'
});


  
// audio 

var audio;

//Hide Pause
$('#pause').hide();

initAudio($('#playlist li:first-child'));

function initAudio(element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');
	
	//Create audio object
	audio = new Audio('media/'+ song);
	
	//Insert audio info
	$('.artist').text(artist);
	$('.title').text(title);
	
	//Insert song cover
	$('img.cover').attr('src','images/covers/'+cover);
	
	$('#playlist li').removeClass('active');
	element.addClass('active');
}

//Play button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	showDuration();
});

//Pause button
$('#pause').click(function(){
	audio.pause();
	$('#play').show();
	$('#pause').hide();
});

//Stop button
$('#stop').click(function(){
	audio.pause();
	audio.currentTime = 0;
});

//Next button
$('#next').click(function(){
	audio.pause();
	var next = $('#playlist li.active').next();
	if(next.length == 0){
		next = $('#playlist li:first-child');
	}
	initAudio(next);
	audio.play();
	showDuration();
});

//Prev button
$('#prev').click(function(){
	audio.pause();
	var prev = $('#playlist li.active').prev();
	if(prev.length == 0){
		prev = $('#playlist li:last-child');
	}
	initAudio(prev);
	audio.play();
	showDuration();
});

//Playlist song click
$('#playlist li').click(function(){
	audio.pause();
	initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	audio.play();
	showDuration();
});

//Volume control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});

//Time/Duration
function showDuration(){
	$(audio).bind('timeupdate',function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt(audio.currentTime / 60) % 60;
		if(s < 10){
			s = '0'+s;
		}
		$('#duration').html(m + ':'+ s);
		var value = 0;
		if(audio.currentTime > 0){
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}


});








 