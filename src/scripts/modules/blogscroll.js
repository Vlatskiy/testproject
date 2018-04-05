let scrollMenu= (function(){
  const $news = $('.text-block');
  const $item = $('.nav-link');
  const $wrapMenu = $('.wrap-menu');
  let positionArticle = [];
  let offsetHeight = 0; // верхнее смещение для скролла
  let flagAnimation = true;

  // выполняем расчет позиций для каждой статьи
  const _setPositionArticle = function(elements) {
    elements.each(function(item) {
      positionArticle[item] = {}
      positionArticle[item].top = $(this).offset().top - offsetHeight
      positionArticle[item].bottom = positionArticle[item].top + $(this).innerHeight()
    })
  }

  const _scrollPageFixMenu = function(e) {
    let scroll = window.pageYOffset;
    if (scroll < $news.offset().top) {
      $wrapMenu.removeClass('fixed')
    } else {
      $wrapMenu.addClass('fixed')
    }
  }

  const _scrollPage = function(e) {
    const isFirstVision = function(element, current) {
      let scroll = window.pageYOffset;
      return scroll >= element.top && scroll < element.bottom && !current.hasClass('active-link')
    }
    positionArticle.forEach((element, index) => {
      let $currentElement = $item.eq(index);
      if (isFirstVision(element, $currentElement)) {
        $currentElement.addClass('active-link').siblings().removeClass('active-link')
      }
    })
  }

  const _clickMenu = function(e) {
    if (flagAnimation) {
      flagAnimation = false;
      let $element = $(e.target)
      let index = $element.index()
      let sectionOffset = Math.ceil(positionArticle[index].top)
      $(document).off('scroll', _scrollPage)
      $element.siblings().removeClass('active-link')

      $('body, html').animate({scrollTop: sectionOffset}, 1000, () => {
        $element.addClass('active-link')
        $(document).on('scroll', _scrollPage)
        flagAnimation = true;
      })
      
    }
  }

  const addListener = function() {
    $(window).one('load', function(e) {
      _setPositionArticle($news)
      $('.menu-nav').on('click', _clickMenu)
      $(document).on('scroll', _scrollPage)
      $(document).on('scroll', _scrollPageFixMenu)
    })

    $(window).on('resize', function(e) {
      _setPositionArticle($news)
    })
  }

  return {
    init: addListener
  }

})()

export {scrollMenu};

