
var initMap = function initMap() {
    var uluru = {lat: 45.018359, lng: 38.994595};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru,
      zoomControl: true,
      zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}
    });
        var marker = new google.maps.Marker({
            position: uluru,
            map:map
        });
      }

export {initMap};