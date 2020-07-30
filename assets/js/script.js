$(document).ready(function(){

	// окрашивание меню после скролла
	$(window).scroll(function() {
	    if ($(document).scrollTop() > 150 ) 
		{
			$("nav").addClass("menu-animate");
		}
		else
		{
			$("nav").removeClass("menu-animate");
		}

	});

	if($(document).scrollTop() >= 150){
		$("nav").addClass("menu-animate");
	}

	// карусель поектов

	$('#projects-carousel').owlCarousel({
		nav: false,
		pagination: false,
		loop: true,
		center: true,
		responsive:{
	        0:{
	        	mouseDrag: true,
	            items:1
	        },
	        767:{
	        	mouseDrag: true,
	            items:2
	        },
	        1250:{
	        	mouseDrag:true,
	            items:2
	        }
    	}
	});


	

			
});