(function(e){e.fn.onScreen=function(t){var n=e.extend({container:window,direction:"vertical",toggleClass:null,doIn:null,doOut:null,tolerance:0,throttle:null,lazyAttr:null,lazyPlaceholder:"data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",debug:false},t);return this.each(function(){function m(){if(v){return p<f-n.tolerance&&r<p+c-n.tolerance}else{return p<u-n.tolerance&&p>-c+n.tolerance}}function g(){if(v){return p+(c-n.tolerance)<r||p>f-n.tolerance}else{return p>u-n.tolerance||-c+n.tolerance>p}}function y(){if(v){return d<l-n.tolerance&&i<d+h-n.tolerance}else{return d<a-n.tolerance&&d>-h+n.tolerance}}function b(){if(v){return d+(h-n.tolerance)<i||d>l-n.tolerance}else{return d>a-n.tolerance||-h+n.tolerance>d}}function w(){if(t){return false}if(n.direction==="horizontal"){return y()}else{return m()}}function E(){if(!t){return false}if(n.direction==="horizontal"){return b()}else{return g()}}function S(e,t,n){var r,i,s;return function(){i=arguments;s=true;n=n||this;if(!r){(function(){if(s){e.apply(n,i);s=false;r=setTimeout(arguments.callee,t)}else{r=null}})()}}}var t=false;var r;var i;var s=e(this);var o;var u;var a;var f;var l;var c;var h;var p;var d;var v=true;var x=function(){if(!v&&e(n.container).css("position")==="static"){e(n.container).css("position","relative")}o=e(n.container);u=o.height();a=o.width();f=o.scrollTop()+u;l=o.scrollLeft()+a;c=s.outerHeight(true);h=s.outerWidth(true);if(v){var m=s.offset();p=m.top;d=m.left}else{var g=s.position();p=g.top;d=g.left}r=o.scrollTop();i=o.scrollLeft();if(n.debug){console.log("Container: "+n.container+"\n"+"Width: "+u+"\n"+"Height: "+a+"\n"+"Bottom: "+f+"\n"+"Right: "+l);console.log("Matched element: "+(s.attr("class")!==undefined?s.prop("tagName").toLowerCase()+"."+s.attr("class"):s.prop("tagName").toLowerCase())+"\n"+"Left: "+d+"\n"+"Top: "+p+"\n"+"Width: "+h+"\n"+"Height: "+c)}if(w()){if(n.toggleClass){s.addClass(n.toggleClass)}if(e.isFunction(n.doIn)){n.doIn.call(s[0])}if(n.lazyAttr&&s.prop("tagName")==="IMG"){var y=s.attr(n.lazyAttr);s.css({background:"url("+n.lazyPlaceholder+") 50% 50% no-repeat",minHeight:"5px",minWidth:"16px"});s.prop("src",y)}t=true}else if(E()){if(n.toggleClass){s.removeClass(n.toggleClass)}if(e.isFunction(n.doOut)){n.doOut.call(s[0])}t=false}};if(window.location.hash){S(x,50)}else{x()}if(n.throttle){x=S(x,n.throttle)}e(window).scroll(x);e(window).resize(x);if(!v){e(window).on("resize",x)}if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=jQuery}else{if(typeof define==="function"&&define.amd){define("jquery-onscreen",[],function(){return jQuery})}}})}})(jQuery);

(function($) {
	
	var images = ['http://bbw.imageg.net/graphics/media/bbw/experience/2016/hawaii_mobile/hawaii_mobile_gif_01.gif', '/cms_widgets/26/27/2627358_assets/Hawaii_main2_RO.png', '/cms_widgets/26/27/2627358_assets/Hawaii_main3_RO.png', '/cms_widgets/26/27/2627358_assets/Spring3_RO.jpg'];
	
	$(document).ready(function(event) {
		jQuery.easing.def = "easeInExpo";
		setupForm();
		setStartTimeNow();	

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