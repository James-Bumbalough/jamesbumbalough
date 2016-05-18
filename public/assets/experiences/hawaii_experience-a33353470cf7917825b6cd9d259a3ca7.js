(function($) {
	
	var images = ['http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/hawaii_mobile_gif_01.gif', '/cms_widgets/26/27/2627358_assets/Hawaii_main2_RO.png', '/cms_widgets/26/27/2627358_assets/Hawaii_main3_RO.png', '/cms_widgets/26/27/2627358_assets/Spring3_RO.jpg'];
	var dancing = false;
	
	$(document).ready(function(event) {
		jQuery.easing.def = "easeInExpo";

		setTimeout(function(){
			hulaDance(0);
		}, 1000);

		$("#hula_girl").click(function(e) {
			hulaDance(0);
		});	
		
		$('.responsive').each(function() {
			new Responsive($(this));
		});
		
		$('.noClick').click(function(e) {
			e.preventDefault();
		});	

		// Gif Preloading 
		var sprite01 = new Image();	// Preload sprites, and then show play / pause button, and play once loaded
		var sprite02 = new Image();
		var sprite03 = new Image();
		var sprite04 = new Image();
		var sprite05 = new Image();
		
		var spriteURL = "http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/"
		// var spriteURL = "../images/animated%20gifs/"
				
		sprite01.onload = function(){
			playPauseBTNController01(spriteURL);			
		}
		sprite01.src = spriteURL + "hawaii_mobile_gif_01.gif";
		
		sprite02.onload = function(){
			playPauseBTNController02(spriteURL);			
		}
		sprite02.src = spriteURL + "hawaii_mobile_gif_02.gif";
		
		sprite03.onload = function(){
			playPauseBTNController03(spriteURL);			
		}
		sprite03.src = spriteURL + "hawaii_mobile_gif_03.gif";
		
		sprite04.onload = function(){
			playPauseBTNController04(spriteURL);			
		}
		sprite04.src = spriteURL + "hawaii_mobile_gif_04.gif";	
		
		sprite05.onload = function(){
			playPauseBTNController05(spriteURL);			
		}
		sprite05.src = spriteURL + "hawaii_mobile_gif_05.gif";					
					
		$(window).resize();

	});
	
})(jQuery);

function playPauseBTNController01(spriteURL) {
	console.log("gif1 loaded");
	var play_button = $("#play_button_01");
	play_button.css("display","block");
	play_button.attr("aria-hidden","false");
	$("#playBTN01").click(function(e) {
		play_button.css("display","none");
		play_button.attr("aria-hidden","true");
		$('#playBTN01 .gif_animation').attr("src","http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/hawaii_mobile_gif_01.gif");
	});	
}

function playPauseBTNController02(spriteURL) {
	console.log("gif2 loaded");
	var play_button = $("#play_button_02");
	play_button.css("display","block");
	play_button.attr("aria-hidden","false");
	$("#playBTN02").click(function(e) {
		play_button.css("display","none");
		play_button.attr("aria-hidden","true");
		$('#playBTN02 .gif_animation').attr("src","http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/hawaii_mobile_gif_02.gif");
	});	
}

function playPauseBTNController03(spriteURL) {
	console.log("gif3 loaded");
	var play_button = $("#play_button_03");
	play_button.css("display","block");
	play_button.attr("aria-hidden","false");
	$("#playBTN03").click(function(e) {
		play_button.css("display","none");
		play_button.attr("aria-hidden","true");
		$('#playBTN03 .gif_animation').attr("src","http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/hawaii_mobile_gif_03.gif");
	});	
}

function playPauseBTNController04(spriteURL) {
	console.log("gif4 loaded");
	var play_button = $("#play_button_04");
	play_button.css("display","block");
	play_button.attr("aria-hidden","false");
	$("#playBTN04").click(function(e) {
		play_button.css("display","none");
		play_button.attr("aria-hidden","true");
		$('#playBTN04 .gif_animation').attr("src","http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/hawaii_mobile_gif_04.gif");
	});	
}

function playPauseBTNController05(spriteURL) {
	console.log("gif5 loaded");
	var play_button = $("#play_button_05");
	play_button.css("display","block");
	play_button.attr("aria-hidden","false");
	$("#playBTN05").click(function(e) {
		play_button.css("display","none");
		play_button.attr("aria-hidden","true");
		$('#playBTN05 .gif_animation').attr("src","http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/hawaii_mobile_gif_05.gif");
	});	
}

function hulaDance(counter) {
	var danceCounter = counter;
	var danceLimit = 7;
	var hula_girl = $("#hula_girl");

	if(danceCounter < danceLimit){
		$("#hula_girl").addClass("dance_left");
	} else {
		hula_girl.removeClass("dance_left");
		hula_girl.removeClass("dance_right");
	}

	if(hula_girl.hasClass("dance_right")){
		hula_girl.removeClass("dance_right");
		hula_girl.addClass("dance_left");
	} else 	if(hula_girl.hasClass("dance_left")){
		hula_girl.removeClass("dance_left");
		hula_girl.addClass("dance_right");
	}



	hula_girl.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
		if(danceCounter < danceLimit){
			danceCounter++;
			hulaDance(danceCounter);
		}
	});
}
;
