const layersParallax = (function () {
  var parallaxContainer = document.getElementById('parallax');
  const layers = parallaxContainer ? parallaxContainer.children : void 0;

  var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;

    [].slice.call(layers).forEach(function (layer, index) {
      var
        divider = index / 100,
        positionX = initialX * divider,
        positionY = initialY * divider,
        bottomPosition = (window.innerHeight / 2) * divider,
        transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
        image = layer.firstElementChild;

      layer.style.transform = transformString;
      image.style.bottom = '-' + bottomPosition + 'px';
    });

  };
  const addListener = function () {
    window.addEventListener('mousemove', moveLayers);
  }
  return {
    init: addListener
  }
})()

export { layersParallax };
