//Source:http://www.dwuser.com/education/content/creating-a-floating-navigation-menu/
//Floating nav bar js
/*$(function(){
    var nav=$('.navbar-wrapper');
    var navHomeY = nav.offset().top;
    var isFixed=false;
    var $w = $(window);
    $w.scroll(function(){
	var scrollTop=$w.scrollTop();
	var shouldBeFixed=scrollTop>navHomeY;
	if(shouldBeFixed && !isFixed){
	    nav.css({
		position:'fixed',
		top:0,
		left:nav.offset().left,
	    });
	    nav.width('100%');
	    isFixed=true;
	}
	else if(!shouldBeFixed && isFixed){
	    nav.css({
		position:'static',
		top:0,
		left:0,
		right:0,
	    });
	    isFixed=false;
	}
    });
});
*/

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

//google map re-size on modal
    $("#contact_modal").on("shown.bs.modal", function() {
	google.maps.event.trigger(map, "resize");
    });
