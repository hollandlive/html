/* JQuery  for FullScreenImg template
* Author: Artem Aksenov
* Date: 01.01.2016
* Version 1.0
* Used Technologies: HTML5/CSS3/Bootstrap3.5/JS/JQuery 
* Demo: http://arthem.info/fullscreenimg/index16.html
*/

'use strict';
$(document).ready(function() {

var stickyNavTop = $('.navHeader').offset().top;
var pageOne = $('#pageOne').hide();
var pageTwo = $('#pageTwo').hide();
var pageThree = $('#pageThree').hide();




var stickyNav = function() {
	var scrollTop = $(window).scrollTop();

	if (scrollTop>stickyNavTop) {
		$('.navHeader').addClass('sticky');
		} else {
			$('.navHeader').removeClass('sticky');
		}
	};

stickyNav();

/*$(window).scroll(function() {
	stickyNav();
});*/

function closeBurger() {
	$('.menu').slideToggle('slow', function(){
		$('.hamburger').show();
	});
};


$('.menu').hide();
$('.hamburger').click(function() {
	$('.menu').slideToggle('slow', function() {
		$('.hamburger').show();
	});
});


/*Resizing background full screen image
function resizeFullScreen() {
	$('.fullscreenimg').fadeOut()
	
});*/


/*Moving divs*/


 $('#buttonHome').click(function(e) {
   e.preventDefault();
   
   $('html, body').animate({
     scrollTop: $(pageOne).offset().top
   }, 500);

   $(pageOne).show();
   $(pageTwo).hide();
   $(pageThree).hide();
   closeBurger();
 });

 $('#buttonTwo').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#pageTwo').offset().top
   }, 500);
   $(pageOne).hide();
   $(pageTwo).show();
   $(pageThree).hide();

   closeBurger();
 });

  $('#buttonThree').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#pageThree').offset().top
   }, 500);
   $(pageOne).hide();
   $(pageTwo).hide();
   $(pageThree).show();
   closeBurger();
 });




});


/*


	$("#morebtn").click(function(){

        $("html").removeClass("fullscreenimg");
        $(".container2").css("display", "inline");
        $('#pageOne').slideUp('openPage', 3000);
        
    });


$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

$(".morebtn").click(function() {
 
  $('.fullscreenimg').slideUp("slow");


   $(".container2").slideToggle( "slow", function() {
    // Animation complete.
  });

});

	//configuration

	var width = 400;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	//DOM caching
	var $slider = $('#slider');
	var $sliderContainer = $slider.find('.slides');
	var $slides = $sliderContainer.find('.slide');
$(function () {
	setInterval(function(){

		$sliderContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
			currentSlide ++;
			if (currentSlide === $slides.length) {
				currentSlide = 1;
				$sliderContainer.css('margin-left', 0);
			}
		});

		}, pause);

	});

$('#morebtn').click(function() {
	$('body, .container2').animate({
		scrollTop: $('.container2').css('top')}, 800, function() {

        $('body, .container2').animate({
            scrollTop: 0
        }, 800);

    });

});


*/




