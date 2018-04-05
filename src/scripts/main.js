
import { blur } from './modules/blur';
import { initMap } from './modules/map';
import { parallax } from './modules/parallaxworks';
import { Slider } from './modules/slider';
import { hamburgermenu } from './modules/hamburgermenu';
import { scrollMenu } from './modules/blogscroll';
import { layersParallax } from './modules/parallaxwelcome';
import { initPreloader } from './modules/preloader';


if ($('.textme__form').length > 0) {
  $(document).ready(function () {
    blur();
  })

  $(window).resize(function () {
    blur();
  });
}

if ($('#map').length > 0) {
  initMap();
}


//slider

if ($('.works').length > 0) {
  var slider = new Slider($('.works'));
slider.setDefaults();

$('.works-slider__control-btn_left').on('click', function (e) {
  e.preventDefault();
  slider.moveSlide('prev');
});

$('.works-slider__control-btn_right').on('click', function (e) {
  e.preventDefault();
  slider.moveSlide('next');
});

console.dir(slider);
}

// //paralax
window.onscroll = function () {
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);
}

// flip
$(document).ready(function () {
  $('.authorization__link').click(function (auth) {
    auth.preventDefault();
    $('.welcome__flipper').css({
      'transform': 'rotateY(180deg)'
    });
    $('.authorization').fadeOut('slow');
  });
  $('.login-link').click(function (back) {
    $('.welcome__flipper').css({
      'transform': 'rotateY(0deg)'
    });
    $('.authorization').fadeIn('slow');
  });
 });

 // hamburgermenu 
 if ($('.overlay').length > 0) {
  hamburgermenu.init();
}
 
 // scroll-blog
 if ($('.wrap-menu').length > 0) {
 scrollMenu.init();
 }

//  //parallaxwelcome
if ($('.parallax').length > 0) {
  layersParallax.init();
}

//preloader
initPreloader()
