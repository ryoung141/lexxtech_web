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


//google map initialization
function initMap(){
    var loc = {lat: 34.6544659, lng:-118.146309};
    var map = new google.maps.Map(document.getElementById('map'),{
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

//collapse/expand all
$(function(){
    var active=true;

    $('#master-button').click(function(){
    	if(active){
    	    active=false;
    	    $('.panel-collapse').collapse('show');
    	    $('.panel-title a').attr('data-toggle', '');
    	    $(this).text('Collapse All');
    	}

	else{
	    active=true;
	    $('.panel-collapse').collapse('hide');
	    $('.panel-title a').attr('data-toggle', 'collapse');
	    $(this).text('Expand All');
	}
    });

    $('#accordion').on('show.bs.collapse', function(){
    	if(active){
    	    $('#accordion.in').collapse('hide');
    	}
    });
});
