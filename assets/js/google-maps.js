function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 4.794427003724563, lng: 6.981067894665394};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 18,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'River State University, Port Harcourt' // Title Location
    });
}