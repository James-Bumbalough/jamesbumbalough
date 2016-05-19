// Sprite Player Variables
var windowWidth = $(window).width();
if (windowWidth > 640) {
	windowWidth = 640;
}

(function($) {	
	$(document).ready(function(event) {
		// -- default functions -- //
		document.title = 'Bath & Body Works Santa Squad';	
		// enable responsive scaling
		$('.responsive').each(function() {
			new Responsive($(this));
		});
		// remove link functionality
		$(".noClick").click( function(e){
			e.preventDefault();
			return false;
		});		
		$(".noClick").css("cursor", "default");
		// -- --  --  --  --  --  //
		
//		SpritePlayerSetUp();		
		

		var sprite01 = new Image();	// Preload sprites, and then show play / pause button, and play once loaded
		var sprite02 = new Image();
		var sprite03 = new Image();
		var sprite04 = new Image();
		var sprite05 = new Image();
		var sprite06 = new Image();
		
		var spriteURL = "http://bbw.imageg.net/graphics/media/bbw/experience/2015/mobile_santa_squad/"
		// var spriteURL = "../images/animated%20gifs/"
				
		sprite01.onload = function(){
			playPauseBTNController01(spriteURL);			
		}
		sprite01.src = spriteURL + "VBN_gif.gif";
		
		sprite02.onload = function(){
			playPauseBTNController02(spriteURL);			
		}
		sprite02.src = spriteURL + "wca_gif.gif";
		
		sprite03.onload = function(){
			playPauseBTNController03(spriteURL);			
		}
		sprite03.src = spriteURL + "TP_gif.gif";
		
		sprite04.onload = function(){
			playPauseBTNController04(spriteURL);			
		}
		sprite04.src = spriteURL + "JATW_gif.gif";	
		
		sprite05.onload = function(){
			playPauseBTNController05(spriteURL);			
		}
		sprite05.src = spriteURL + "MBC_gif.gif";			
		
		sprite06.onload = function(){
			playPauseBTNController06(spriteURL);			
		}
		sprite06.src = spriteURL + "RVC_V2_gif.gif";		

		// -- Tweet Button Functionality --
		$('#tweetBTN01').click(function(event) {
			var url = 'https://twitter.com/intent/tweet?text=I%E2%80%99m%20%23TeamVanillaBean%21%20Pick%20your%20%23SantaSquad%20for%20a%20chance%20to%20win%20a%20prize%20pack%20from%20BathBodyWorks%21%20www.bathandbodyworks.com/santasquad';
			tweet(url);
		});
		$('#tweetBTN02').click(function(event) {
			var url = 'https://twitter.com/intent/tweet?text=I%E2%80%99m%20part%20of%20the%20%23WinterCandyCrew%21%20Pick%20your%20%23SantaSquad%20for%20a%20chance%20to%20win%20a%20prize%20pack%20from%20%40BathBodyWorks%21%20www.bathandbodyworks.com/santasquad';
			tweet(url);
		});
		$('#tweetBTN03').click(function(event) {
			var url = 'https://twitter.com/intent/tweet?text=I%E2%80%99m%20totally%20%23TwistedPeppSquad%21%20Pick%20your%20%23SantaSquad%20for%20a%20chance%20to%20win%20a%20prize%20pack%20from%20%40BathBodyWorks%21%20www.bathandbodyworks.com/santasquad';
			tweet(url);
		});
		$('#tweetBTN04').click(function(event) {
			var url = 'https://twitter.com/intent/tweet?text=I%E2%80%99m%20%23JingleGang%20all%20the%20way%21%20Pick%20your%20%23SantaSquad%20for%20a%20chance%20to%20win%20a%20prize%20pack%20from%20%40BathBodyWorks%21%20www.bathandbodyworks.com/santasquad';			
			tweet(url);
		});
		$('#tweetBTN05').click(function(event) {
			var url = 'https://twitter.com/intent/tweet?text=I%E2%80%99m%20%23MerryBerryBesties%20for%20sure%21%20Pick%20your%20%23SantaSquad%20for%20a%20chance%20to%20win%20a%20prize%20pack%20from%20%40BathBodyWorks%21%20www.bathandbodyworks.com/santasquad';
			tweet(url);
		});
		$('#tweetBTN06').click(function(event) {
			var url = 'https://twitter.com/intent/tweet?text=I%E2%80%99m%20on%20the%20%23CheerSquad%21%20Pick%20your%20%23SantaSquad%20for%20a%20chance%20to%20win%20a%20prize%20pack%20from%20%40BathBodyWorks%21%20www.bathandbodyworks.com/santasquad';
			tweet(url);
		});		
		
		function tweet(url) {
			var screen_width = screen.width;
			var screen_height = screen.height;
			var popup_width = screen_width - (screen_width*0.2);
			var popup_height = screen_height - (screen_height*0.2);
			var left = (screen_width/2)-(popup_width/2);
			var top = (screen_height/2)-(popup_height/2);
			var parameters = 'toolbar=0,status=0,width=' + popup_width + ',height=' + popup_height + ',top=' + top + ',left=' + left;
			
			return window.open(url, '', parameters) && false;			
		}		
		
		$(window).resize();
		
	});
	
})(jQuery);

function setSweepsElementTag(){
	return true;
}


function playPauseBTNController01(spriteURL) {
	$("#SS_animation01 .pause-button").css("display","block");
	$("#SS_animation01").click(function(e){
		e.preventDefault();
		var pauseBTN = $(".pause-button", this);
		pauseBTN.css("display","block");		
		if(pauseBTN.hasClass("paused")){
			var src = spriteURL + "VBN_gif.gif";
			$("#SS_animation01 .sprite_animation").attr("src", src);
			pauseBTN.css("display","none");
			pauseBTN.attr("aria-hidden","true");
		} 
	});
}

function playPauseBTNController02(spriteURL) {
	$("#SS_animation02 .pause-button").css("display","block");
	$("#SS_animation02").click(function(e){
		e.preventDefault();
		var pauseBTN = $(".pause-button", this);
		pauseBTN.css("display","block");		
		if(pauseBTN.hasClass("paused")){
			var src = spriteURL + "wca_gif.gif";
			$("#SS_animation02 .sprite_animation").attr("src", src);			
			// $("#SS_animation02").css("background-image", "url(" + spriteURL + "wca_gif.gif)");
			pauseBTN.css("display","none");
			pauseBTN.attr("aria-hidden","true");
		} 
	});
}

function playPauseBTNController03(spriteURL) {
	$("#SS_animation03 .pause-button").css("display","block");
	$("#SS_animation03").click(function(e){	
		e.preventDefault();
		var pauseBTN = $(".pause-button", this);
		pauseBTN.css("display","block");		
		if(pauseBTN.hasClass("paused")){
			var src = spriteURL + "TP_gif.gif";
			$("#SS_animation03 .sprite_animation").attr("src", src);				
			// $("#SS_animation03").css("background-image", "url(" + spriteURL + "TP_gif.gif)");
			pauseBTN.css("display","none");
			pauseBTN.attr("aria-hidden","true");
		} 
	});
}

function playPauseBTNController04(spriteURL) {
	$("#SS_animation04 .pause-button").css("display","block");
	$("#SS_animation04").click(function(e){
		e.preventDefault();
		var pauseBTN = $(".pause-button", this);
		pauseBTN.css("display","block");		
		if(pauseBTN.hasClass("paused")){
			var src = spriteURL + "JATW_gif.gif";
			$("#SS_animation04 .sprite_animation").attr("src", src);					
			// $("#SS_animation04").css("background-image", "url(" + spriteURL + "JATW_gif.gif)");
			pauseBTN.css("display","none");
			pauseBTN.attr("aria-hidden","true");
		} 
	});
}

function playPauseBTNController05(spriteURL) {
	$("#SS_animation05 .pause-button").css("display","block");
	$("#SS_animation05").click(function(e){
		e.preventDefault();
		var pauseBTN = $(".pause-button", this);
		pauseBTN.css("display","block");		
		if(pauseBTN.hasClass("paused")){
			var src = spriteURL + "MBC_gif.gif";
			$("#SS_animation05 .sprite_animation").attr("src", src);				
			// $("#SS_animation05").css("background-image", "url(" + spriteURL + "MBC_gif.gif)");
			pauseBTN.css("display","none");
			pauseBTN.attr("aria-hidden","true");
		} 
	});
}

function playPauseBTNController06(spriteURL) {
	$("#SS_animation06 .pause-button").css("display","block");
	$("#SS_animation06").click(function(e){
		e.preventDefault();
		var pauseBTN = $(".pause-button", this);
		pauseBTN.css("display","block");		
		if(pauseBTN.hasClass("paused")){
			var src = spriteURL + "RVC_V2_gif.gif";
			$("#SS_animation06 .sprite_animation").attr("src", src);				
			// $("#SS_animation06").css("background-image", "url(" + spriteURL + "RVC_gif.gif)");
			pauseBTN.css("display","none");
			pauseBTN.attr("aria-hidden","true");
		} 
	});
}


// -- Repsonsive Code -- //
function Responsive($el) {
	var expSize = 640;
		
	if($el.css('width')!= "0px"){
		var elWidth = parseInt($el.css('width'));
		var widthRatio = expSize/elWidth;
	}
	
	if($el.css('height')!= "0px"){
		var elHeight = parseInt($el.css('height'));
		var heightRatio = expSize/elHeight;
	}
	
	var fontSize = parseInt($el.css('font-size'));
	var fontRatio = expSize/fontSize;
	
	if($el.css('line-height')!= "0px"){
		var lineHeight = parseInt($el.css('line-height'));
		var lineHeightRatio = expSize/lineHeight;	
	}
	
	if($el.css('top')!= "0px"){
		var top = parseInt($el.css('top'));
		var topRatio = expSize/top;	
	}
	
	if($el.css('left')!= "0px"){
		var left = parseInt($el.css('left'));
		var leftRatio = expSize/left;	
	}	
	
	
	if($el.css('margin')!= "0px"){
		var newMarginTop = 0;
		var newMarginRight = 0;
		var newMarginLeft = 0;
		var newMarginBottom = 0;
		
		$el.hide();	
		
		if($el.css('margin-top')!= "0px"){
			var marginRatio1 = expSize/parseInt($el.css('margin-top'));
		} 
		if($el.css('margin-right')!= "0px"){
			var marginRatio2 = expSize/parseInt($el.css('margin-right'));
		} 
		if($el.css('margin-bottom')!= "0px"){
			var marginRatio3 = expSize/parseInt($el.css('margin-bottom'));
		}
		if($el.css('margin-left')!= "0px"){
			var marginRatio4 = expSize/parseInt($el.css('margin-left'));
		}
		
		$el.show();
		
	}
	
	if($el.css('padding')!= "0px"){
		var newPaddingTop = "0px";
		var newPaddingRight = "0px";
		var newPaddingLeft = "0px";
		var newPaddingBottom = "0px";
		
		$el.hide();	
		
		if($el.css('padding-top')!= "0px"){
			var paddingRatio1 = expSize/parseInt($el.css('padding-top'));
		}
		if($el.css('padding-right')!= "0px"){
			var paddingRatio2 = expSize/parseInt($el.css('padding-right'));
		}
		if($el.css('padding-bottom')!= "0px"){
			var paddingRatio3 = expSize/parseInt($el.css('padding-bottom'));
		}
		if($el.css('padding-left')!= "0px"){
			var paddingRatio4 = expSize/parseInt($el.css('padding-left'));
		}
		
		$el.show();
		
	}
	
	if($el.css('border-width')!= "0px"){
		var newBorderTop = "0px";
		var newBorderRight = "0px";
		var newBorderLeft = "0px";
		var newBorderBottom = "0px";
		
		if($el.css('border-top-width')!= "0px"){
			var borderRatio1 = expSize/parseInt($el.css('border-top-width'));
		}
		if($el.css('border-right-width')!= "0px"){
			var borderRatio2 = expSize/parseInt($el.css('border-right-width'));
		}
		if($el.css('border-bottom-width')!= "0px"){
			var borderRatio3 = expSize/parseInt($el.css('border-bottom-width'));
		}
		if($el.css('border-left-width')!= "0px"){
			var borderRatio4 = expSize/parseInt($el.css('border-left-width'));
		}
	}

	if($el.css('position') != "absolute") {
		if(!isNaN(parseInt($el.css('top')))){
			var topRatio = expSize/parseInt($el.css('top'));
		}
		
		if(!isNaN(parseInt($el.css('right')))){
			var rightRatio = expSize/parseInt($el.css('right'));
		}
		
		if(!isNaN(parseInt($el.css('bottom')))){
			var bottomRatio = expSize/parseInt($el.css('bottom'));
		}
		
		if(!isNaN(parseInt($el.css('left')))){
			var leftRatio = expSize/parseInt($el.css('left'));
		}
	}
	
	$(window).resize(function(event) {
		windowWidth = $(window).width();
		if(windowWidth > expSize) {
			windowWidth = expSize;
		}		
		
		// Resize Sprite Players
		// SpritePlayerResize();
		// -- -- -- -- -- -- -- -

		if($el.css('width')!= "0px"){
			var newWidth = (windowWidth/widthRatio) +"px";
			$el.css({
				'width': newWidth,
			})
		}
	
		if($el.css('height')!= "0px"){
			var newHeight = (windowWidth/heightRatio) +"px";
			$el.css({
				'height': newHeight
			})
		}
		
		if($el.css('margin')!= "0px"){			
			if($el.css('margin-top') == "auto"){
				newMarginTop = "auto";
			} else {
				newMarginTop = (windowWidth/marginRatio1) +"px";
			}
			if($el.css('margin-right') == "auto"){
				newMarginRight = "auto";				
			} else {
				newMarginRight = (windowWidth/marginRatio2) +"px";
			}
			if($el.css('margin-bottom') == "auto"){
				newMarginBottom = "auto";				
			} else {
				newMarginBottom = (windowWidth/marginRatio3) +"px";
			}
			if($el.css('margin-left') == "auto"){
				newMarginLeft = "auto";				
			} else {
				newMarginLeft = (windowWidth/marginRatio4) +"px";
			}
			
			$el.css({
				'margin-top': newMarginTop,
				'margin-right': newMarginRight,
				'margin-bottom': newMarginBottom,
				'margin-left': newMarginLeft
			})
		}
		
		if($el.css('padding')!= "0px"){		
			if($el.css('padding-top') == "auto"){
				newPaddingTop = "auto";
			} else {
				newPaddingTop = (windowWidth/paddingRatio1) +"px";
			}
			if($el.css('padding-right') == "auto"){
				newPaddingRight = "auto";				
			} else {
				newPaddingRight = (windowWidth/paddingRatio2) +"px";
			}
			if($el.css('padding-bottom') == "auto"){
				newPaddingBottom = "auto";				
			} else {
				newPaddingBottom = (windowWidth/paddingRatio3) +"px";
			}
			if($el.css('padding-left') == "auto"){
				newPaddingLeft = "auto";				
			} else {
				newPaddingLeft = (windowWidth/paddingRatio4) +"px";
			}
			
			$el.css({
				'padding-top': newPaddingTop,
				'padding-right': newPaddingRight,
				'padding-bottom': newPaddingBottom,
				'padding-left': newPaddingLeft
			})
		}
		
		if($el.css('border-width')!= "0px"){			
			if($el.css('border-top-width')!= "0px"){
				if((windowWidth/borderRatio1) <= 1){
					newBorderTop = "1px";
				} else {
					newBorderTop = (windowWidth/borderRatio1) +"px";
				}					
			}
			if($el.css('border-right-width')!= "0px"){
				if((windowWidth/borderRatio2) <= 1){
					newBorderRight = "1px";
				} else {
					newBorderRight = (windowWidth/borderRatio2) +"px";
				}				
			}
			if($el.css('border-bottom-width')!= "0px"){		
				if((windowWidth/borderRatio3) <= 1){
					newBorderBottom = "1px";
				} else {
					newBorderBottom = (windowWidth/borderRatio3) +"px";
				}
			}
			if($el.css('border-left-width')!= "0px"){
				if((windowWidth/borderRatio4) <= 1){
					newBorderLeft = "1px";
				} else {
					newBorderLeft = (windowWidth/borderRatio4) +"px";
				}				
			}
			
			$el.css({
				'border-top-width': newBorderTop,
				'border-right-width': newBorderRight,
				'border-bottom-width': newBorderBottom,
				'border-left-width': newBorderLeft
			})
		}
		
		var newFontSize = (windowWidth/fontRatio) +"px";
		$el.css({
			'font-size': newFontSize
		})
		
		if($el.css('line-height')!= "0px"){
			var newLineHeight = (windowWidth/lineHeightRatio) +"px";
			$el.css({
				'line-height': newLineHeight
			})
		}
		
		if($el.css('top')!= "0px"){
			var newTop = (windowWidth/topRatio) +"px";
			$el.css({
				'top': newTop
			})
		}	
		
		if($el.css('left')!= "0px"){
			var newLeft = (windowWidth/leftRatio) +"px";
			$el.css({
				'left': newLeft
			})
		}				
		
	});
	
}
;
