//Source:http://www.dwuser.com/education/content/creating-a-floating-navigation-menu/

//smooth-scroll
$(document).ready(function(){
    $('a[href*="#"]').on('click', function(event){
	var target = $(this.getAttribute('href'));

	if(target.length){
	    event.preventDefault();
	    $('html, body').stop().animate({
		scrollTop: target.offset().top	
	    }, 750);
	}
    });
});

//active-tab highlighting
$(document).ready(function(){
    $('.nav.navbar-nav > li').on('click', function(e) {
	e.preventDefault();
	$('.nav.navbar-nav > li').removeClass('active');
	$(this).addClass('active');
    });
});

//google map initialization
function initMap(){
    var loc = {lat: 34.6544659, lng:-118.146309};
    var map = new google.maps.Map(document.getElementById('map2'),{
	zoom: 17,
	center: loc
    });
    var marker = new google.maps.Marker({
	position: loc,
	map: map,
	title: "A.V. LexxTech"
    });
    var map = new google.maps.Map(document.getElementById('map1'),{
	zoom: 17,
	center: loc
    });
    var marker = new google.maps.Marker({
	position: loc,
	map: map,
	title: "A.V. LexxTech"
    });
}

$('#contact_modal').one('click', function(){
    initMap();
});

