function initMap(){
    var loc = {lat: 34.6544659, lng:-118.146309};
    var map = new google.maps.Map(document.getElementById('contact_map'),{
	zoom: 17,
	center: loc
    });
    var marker = new google.maps.Marker({
	position: loc,
	map: map,
	title: "A.V. LexxTech"
    });
}
