
function blur() {
  var imgWidth = $('.what-about__wrapper').width(),
      blurSection = $('.what-about'),
      blur = $('.what-about__textme'),
      posY = blurSection.offset().top - blur.offset().top, //   текущее положение элемента относительно документа.
      posX = blurSection.offset().left - blur.offset().left;
  console.log(blurSection.offset());
  blur.css({
      'background-size': imgWidth + 'px' + ' ' + 'auto',
      'background-position': posX + 'px' + ' ' + posY + 'px'
  })
}

export {blur};