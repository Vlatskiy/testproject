var parallax = (function(){
    var bg = document.querySelector('.header__portfolio-img');
    var user = document.querySelector('.header-portfolio');
    var sectionText = document.querySelector('.header__portfolio-bg');
  
    return {
      move: function(block, windowScroll, strafeAmount ) {
        var strafe = windowScroll / -strafeAmount + '%';
        var transformString = 'translate3d(0,' + strafe + ', 0)';
  
        var style = block.style;
        
        style.transform = transformString;
        style.webkitTransform = transformString;
      },
  
      init: function(wScroll) {
        this.move(bg, wScroll, 30);
        this.move(sectionText, wScroll, 50);
        this.move(user, wScroll, 10);
      }
    }
  }())

  export {parallax};