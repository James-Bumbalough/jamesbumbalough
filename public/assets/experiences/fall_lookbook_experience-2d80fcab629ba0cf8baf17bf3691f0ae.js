(function($) {
	
	$(document).ready(function(event) {
		jQuery.easing.def = "easeInExpo";

		SlideshowSetUp();		
		$('.responsive').each(function() {
			new Responsive($(this));
		});
		
		if(window.location.href.indexOf('abc') != -1)
		{
			setTimeout(function() {
				setAppState(APP_STATE_EXPERIENCE);
			}, 100);
		}
			
		MenuBTNactivater();
		$("#Lookbook_topmenu").find('a, button').attr('tabindex', -1);
		
		var fontSize = parseInt($(".Lookbook_topmenu_button a").css('font-size'));
		var fontSize2 = parseInt($("#topmenu_title_text").css('font-size'));
		$(window).resize(function(event) {
			var windowWidth = $( window ).width();
			var windowHeight = $( window ).height();			 
			TopMenuBTNSpacer(fontSize, fontSize2, windowWidth, windowHeight);
			if(windowWidth > 640){
				windowWidth = 640;
			}		
		});
		
		$(window).resize();
	});
	
})(jQuery);


function SlideshowSetUp(){
	new Slideshow($('#Lookbook_HP_Slideshow'));
	new Influencer($('#Lookbook_Influencer_Slideshow'));
}

 var windowHeight = $( window ).height();
 var windowWidth = $( window ).width();
 
function TopMenuBTNSpacer(fontSize, fontSize2, windowWidth, windowHeight){
	var orientation;
	var topmenu = $("#Lookbook_topmenu");
	var btnContainer = $("#Lookbook_btnContainer");
	
	topmenu.css({
		 "width" : windowWidth + "px",
		 "height" : windowHeight + (windowHeight / 4) + "px",
		 "left" : -windowWidth + "px"
	});
	
	var offset = 0;
	offset = $("#Mobile_Fall_Lookbook").offset();
	if (windowWidth < 640) {
		var burgerWidth = windowWidth * (50/640) + "px";	
		var burgerHeight = windowWidth * (35/640) + "px";
		var burgerLeft = windowWidth * (10/640);	
	} else {
		var burgerWidth = "50px";	
		var burgerHeight = "35px";	
		var burgerLeft = 10;	
	}
	
	$("#hamburger_menu_button").css({
		"width" : burgerWidth,
		"height" : burgerHeight,
		 "left" : offset.left + burgerLeft + "px"
	})
	
	$("#hamburger_menu_button .hamburger_icon").css({
		"width" : burgerWidth,
		"height" : burgerHeight
	})	
	
	var btnContainerWidth = 430;
	var fontRatio = fontSize/btnContainerWidth;
	var fontRatio2 = fontSize2/btnContainerWidth;
	
	if(windowWidth > windowHeight){
		orientation = "landscape";
		if(windowHeight < 480){
			btnContainerWidth = windowHeight - 50;			
		} else {
			btnContainerWidth = 430;
		}
		btnContainer.css({
			 "width" : btnContainerWidth + "px",
			 "margin-left" : "auto",
			 "margin-right" : "auto"		 		 
		})
	} else {
		orientation = "profile";
		if(windowWidth < 480){
			btnContainerWidth = windowWidth - 50;			
		} else {
			btnContainerWidth = 430;
		}
		
		btnContainer.css({
			 "width" : btnContainerWidth + "px",
			 "margin-left" : "auto",
			 "margin-right" : "auto"		 		 
		})
	}
	
	var newFontSize = (fontRatio * btnContainerWidth) +"px";
	var newFontSize2 = (fontRatio2 * btnContainerWidth) +"px";
	$(".Lookbook_topmenu_button a").css({
		'font-size': newFontSize
	})

	
	var btnHegiht = btnContainerWidth * (54/430);
	var minMargin = btnContainerWidth * (3/430);
	var maxMargin = btnContainerWidth * (25/430);	
	var btnMargin = (windowHeight - (btnHegiht * 7)) / 14;
	var borderWidth = btnContainerWidth * (3/430);
	if(btnMargin < minMargin){
		btnMargin = minMargin;
	} else if(btnMargin > maxMargin) {
		btnMargin = maxMargin;
	}
	if(borderWidth < 1){
		borderWidth = 1;
	}

	$("#topmenu_title_text").css({
		'font-size': newFontSize2,
		'border-bottom-width': borderWidth
	})
	$(".Lookbook_topmenu_button").css({
		 "margin-top" : btnMargin + btnMargin,
		 "margin-left" : "auto",
		 "margin-right" : "auto"		 		 
	})
	$("#topmenu_title").css({		
		 "margin-top" : btnMargin + (btnMargin * .5),
		 "margin-bottom" : (btnMargin * .5),
		 "margin-left" : "auto",
		 "margin-right" : "auto"		 		 
	})
}

function MenuBTNactivater() {
	
	$('#hamburger_menu_button').click(function () { 
		OpenMenu();
	});
	$('#Lookbook_topmenu_xbutton').click(function () { 
		CloseMenu();
	});
	$('.Lookbook_topmenu_button').click(function (e) {
		e.preventDefault();
		TopMenuCick($(this));
	});
	$(".hpmenu_btn").click(function (e) { 
		HPMenuCick($(this).parent());
		return false;
	});
	
}

function TopMenuCick($el){

	switch($el.attr("id")) {
		case "topmenu_traditions":
			HidePages();
			ShowPage($("#Lookbook_Fall"))		
			CloseMenu();
			break;
		case "topmenu_pumpkin":
			HidePages();		
			ShowPage($("#Lookbook_Pumpkin"))	
			CloseMenu();
			break;
		case "topmenu_apple":
			HidePages();		
			ShowPage($("#Lookbook_Apple"))	
			CloseMenu();
			break;
		case "topmenu_halloween":
			HidePages();		
			ShowPage($("#Lookbook_Halloween"))	
			CloseMenu();
			break;
		case "topmenu_decor":
			HidePages();		
			ShowPage($("#Lookbook_Decor"))	
			CloseMenu();
			break;
		case "topmenu_collection":
			HidePages();		
			ShowPage($("#Lookbook_Collection"))	
			CloseMenu();
			break;
		case "topmenu_home":
			HidePages();		
			ShowPage($("#Lookbook_HP"))	
			CloseMenu();
			break;							
		default:
			console.log("error on click: " + $el.attr("id"));
	}
}

function HPMenuCick($el){

	switch($el.attr("id")) {
		case "hpmenu_traditions":
			HidePages();
			ShowPage($("#Lookbook_Fall"))		
			break;
		case "hpmenu_pumpkin":
			HidePages();		
			ShowPage($("#Lookbook_Pumpkin"))	
			break;
		case "hpmenu_apple":
			HidePages();		
			ShowPage($("#Lookbook_Apple"))	
			break;
		case "hpmenu_halloween":
			HidePages();		
			ShowPage($("#Lookbook_Halloween"))	
			break;
		case "hpmenu_decor":
			HidePages();		
			ShowPage($("#Lookbook_Decor"))	
			break;
		case "hpmenu_collection":
			HidePages();		
			ShowPage($("#Lookbook_Collection"))	
			break;						
		default:
			console.log("error on click: " + $el.attr("id"));
	}
}

function OpenMenu() {
	var hamburgerBTN = $('#hamburger_menu_button button');
	var topMenu = $("#Lookbook_topmenu");	
	topMenu.attr("aria-expanded", "true");
	topMenu.addClass( "menuTransition open" );
	hamburgerBTN.attr("aria-expanded", "true");
	hamburgerBTN.hide();
	topMenu.one("transitionend", function (){
		$( ".Lookbook_page[aria-hidden='false']" ).attr("aria-hidden", "true");	
		topMenu.removeClass( "menuTransition" );	
	});
	topMenu.find('a, button').attr('tabindex', 0);
	// $('#Lookbook_topmenu_xbutton button').focus();
}

function CloseMenu() {
	$(".Lookbook_page.active").attr("aria-hidden", "false");
	var topMenu = $("#Lookbook_topmenu");
	var hamburgerBTN = $('#hamburger_menu_button button');
	topMenu.find('a, button').attr('tabindex', -1);
	topMenu.attr("aria-expanded", "false");
	topMenu.addClass( "menuTransition" );	
	topMenu.removeClass( "open" );
	topMenu.one("transitionend", function (){
		topMenu.removeClass( "menuTransition" );	
		// hamburgerBTN.focus();	
	});	
	window.scrollTo(0, $("#container header").height() + 25);
	hamburgerBTN.show();
	hamburgerBTN.attr("aria-expanded", "false");
}


function HidePages() {
	var Lookbook_pages = $(".Lookbook_page");
	Lookbook_pages.attr("aria-hidden", "true");
	$(".Lookbook_page").removeClass( "active" );
}

function ShowPage($el) {
	$el.attr("aria-hidden", "false");
	$el.addClass( "active" );
}

var CURRENT_SLIDESHOW_ITEM_CHANGED = 'currentSlideshowItemChanged';
var currentSlideshowItem = -1;
function setCurrentSlideshowItem(value) {
	if(currentSlideshowItem != value)
	{
		currentSlideshowItem = value;
		$(window).trigger(CURRENT_SLIDESHOW_ITEM_CHANGED);
	}
}

function Slideshow($el) {
	var self = this;
	this.count = $el.children('.slide_image').length;
	$el.children('.slide_image').each(function(index) {
		new SlideshowItem($(this), index);
	});
	setCurrentSlideshowItem(0);
	
	var rotations = 1;
	
	setInterval(function() {
		if(rotations < (self.count * 3)){
			var temp = currentSlideshowItem + 1;
			if(temp > self.count - 1)
				temp = 0;
			setCurrentSlideshowItem(temp);
			rotations++;
		}
	}, 4000);
}

function SlideshowItem($el, id) {
	$(window).bind(CURRENT_SLIDESHOW_ITEM_CHANGED, function(event) {
		if(currentSlideshowItem == id)
			$el.fadeIn();
		else
			$el.fadeOut();
	});
}
// -- Influencer Slideshow Code -- //
var CURRENT_INFLUENCER_ITEM_CHANGED = 'currentInfluencerItemChanged';
var NON_CURRENT_INFLUENCER_ITEM_CHANGED = 'nonCurrentInfluencerItemChanged';
var LEFT_INFUENCER_ITEM_CHANGED = 'leftInfluencerItemChanged';
var PLAY_PAUSE_CHANGED = 'playPauseChanged';
var autoRotationTimer;
var previousInfluencerItem;
var currentInfluencerItem = 0;
var nextInfluencerItem = 1;
var numberOfInfluencers = 0;
var direction = "left";
var paused = false;	

function setCurrentInfluencerItem(value) {
	var jump = true;
	direction = "left";
	
	if(value == nextInfluencerItem){
		jump = false;
	} else if (value == previousInfluencerItem) {
		direction = "right";
		jump = false;
	}else {
		jump = true;
	}
	
	var next;
	var prev;
	
	if(value == 0) {
		next = 1;
		prev = numberOfInfluencers - 1;
	} else if(value == numberOfInfluencers - 1) {
		next = 0;
		prev = numberOfInfluencers - 2;
	} else {
		next = (value + 1);
		prev = (value - 1);
	}
	
	currentInfluencerItem = value;
	nextInfluencerItem = next;
	previousInfluencerItem = prev;
	
	// console.log("Previous: " + previousInfluencerItem + " Current: " + currentInfluencerItem + " Next: " + nextInfluencerItem);
	
	if(!jump){
		$(window).trigger(CURRENT_INFLUENCER_ITEM_CHANGED);
	} else {
		$(window).trigger(NON_CURRENT_INFLUENCER_ITEM_CHANGED);
	}
}

function Influencer($el) {
	var self = this;
	this.count = $el.children('.Influencer_slide').length;
	numberOfInfluencers = this.count;
	var btnHolderWidth = (numberOfInfluencers * 24)+ 25 + "px"
	$("#Influencer_btnHolder").css("width", btnHolderWidth);
	$(new PlayPauseButton()).prependTo( $( "#Influencer_btnHolder" ) );
	var meatballs = "";
	$el.children('.Influencer_slide').each(function(index) {
		new InfluencerItem($(this), index);
		meatballs += '<button aria-label="Slide '+ (index + 1) + ' of '+ self.count + '" aria-controls="Lookbook_Influencer_Slideshow" id="meatball_'+ index + '" class="meatball_btn responsive"><i class="meatball_btn_icon responsive icon"></i></button>'
	});
	
	$(meatballs).prependTo( $( "#Influencer_btnHolder" ) );

	for (i = 0; i < self.count; i++) { 
		new InfluencerMeatball(	$('#meatball_'+ i), i);
	}
	
	previousInfluencerItem = numberOfInfluencers;
	setCurrentInfluencerItem(currentInfluencerItem);
	setupAutoRotation();
	NextPrevBTNActivator();

}

function InfluencerItem($el, id) {
	var offset = 0;
	var resizeTimer;

	$(window).resize(function(event) {
		$el.removeClass( "influencerTransition" );
	});

	$(window).bind(CURRENT_INFLUENCER_ITEM_CHANGED, function(event) {
		if(id == currentInfluencerItem) {
			showSlideCTAs((id+1));
			$el.attr("aria-hidden","false");
			$el.removeClass( "influencerTransition" );
			if(direction == "left"){
				$el.css({ "left" : $el.width() + "px" });				
			} else if (direction == "right") {
				$el.css({ "left" : -$el.width() + "px" });
			}
			setTimeout(function() {
				$el.addClass( "influencerTransition" );
				$el.css({ "left" : "0px" });				
			}, 10);				
			$el.one("transitionend", function (){
				$el.removeClass( "influencerTransition" );	
			});			
		} else if(id == previousInfluencerItem) {
			$el.removeClass( "influencerTransition" );
			hideSlideCTAs((id+1));
			$el.attr("aria-hidden","true");
			if(direction == "left"){
				$el.css({ "left" : "0px" });				
			} else if (direction == "right") {
				$el.css({ "left" : -$el.width() + "px" });
			}
			setTimeout(function() {
				$el.addClass( "influencerTransition" );
				if(direction == "left"){
					$el.css({ "left" : -$el.width() + "px" });				
				} else if (direction == "right") {
					$el.css({ "left" : -$el.width() + "px" });
				}
			}, 10);				
			$el.one("transitionend", function (){
				$el.removeClass( "influencerTransition" );	
			});
		} else if(id == nextInfluencerItem) {
			hideSlideCTAs((id+1));
			$el.attr("aria-hidden","true");
			$el.removeClass( "influencerTransition" );
			if(direction == "left"){
				$el.css({ "left" : $el.width() + "px" });				
			} else if (direction == "right") {
				$el.css({ "left" : "0px" });
			}
			setTimeout(function() {
				$el.addClass( "influencerTransition" );
				if(direction == "left"){
					$el.css({ "left" : $el.width() + "px" });			
				} else if (direction == "right") {
					$el.css({ "left" : $el.width() + "px" });
				}
			}, 10);				
			$el.one("transitionend", function (){
				$el.removeClass( "influencerTransition" );	
			});
		} else {
			hideSlideCTAs((id+1));
			$el.attr("aria-hidden","true");
			$el.removeClass( "influencerTransition" );
			if(direction == "left"){
				$el.css({ "left" : -$el.width() + "px" });				
			} else if (direction == "right") {
				$el.css({ "left" : $el.width() + "px" });		
			}			
		}
	});
	$(window).bind(NON_CURRENT_INFLUENCER_ITEM_CHANGED, function(event) {
		$el.removeClass( "influencerTransition" );
		hideSlideCTAs((id+1));
		$el.attr("aria-hidden","true");
		if(id == currentInfluencerItem) {
			$el.css({ "left" : "0px" });
			showSlideCTAs((id+1));
			$el.attr("aria-hidden","false");
		}  else if(id == nextInfluencerItem) {
			$el.css({ "left" : $el.width() + "px" });
		} else if(id == previousInfluencerItem) {
			$el.css({ "left" : -$el.width() + "px" });
		} else {
			$el.css({ "left" : $el.width() + "px" });			
		}
	});	
}

function InfluencerMeatball($el, id) {
	
	$el.click(function (e) {
		e.preventDefault();
		playPauseTrigger();
		setCurrentInfluencerItem(id);
	});
	
	$(window).bind(CURRENT_INFLUENCER_ITEM_CHANGED, function(event) {
		if(id == currentInfluencerItem) {
			$el.children($(".meatball_btn_icon")).css("background-color", "#999");
			$el.attr("aria-selected", "true");			
		} else {
			$el.children($(".meatball_btn_icon")).css("background-color", "#FFF");	
			$el.attr("aria-selected", "false");		
		}
	});
	
	$(window).bind(NON_CURRENT_INFLUENCER_ITEM_CHANGED, function(event) {
		if(id == currentInfluencerItem) {
			$el.children($(".meatball_btn_icon")).css("background-color", "#999");
			$el.attr("aria-selected", "true");			
		} else {
			$el.children($(".meatball_btn_icon")).css("background-color", "#FFF");
			$el.attr("aria-selected", "false");			
		}
	});	
}

function PlayPauseButton() {
	var self = this;
	var $el = $('<button aria-label="Pause Button" aria-controls="Lookbook_Influencer_Slideshow" id="play_pause_btn" class="responsive"><i class="play_pause_btn_icon icon responsive indicator-pause"></i></button>');	
	
	$el.click(function(event) {
		event.preventDefault();
		playPauseSwitcher();
		$el.focus();
	});
	$(window).bind(PLAY_PAUSE_CHANGED, function(event) {
		playPauseSwitcher();
	});	
	$el.focus( function(){
		if($el.children(".play_pause_btn_icon").hasClass("indicator-play")){
			$el.children(".play_pause_btn_icon").css("backgroundPosition", "0% 66%");
		} else 	if($el.children(".play_pause_btn_icon").hasClass("indicator-pause")){
			$el.children(".play_pause_btn_icon").css("backgroundPosition", "left bottom");			
		}					
	});

	$el.blur(function(){
		if($el.children(".play_pause_btn_icon").hasClass("indicator-play")){
			$el.children(".play_pause_btn_icon").css("backgroundPosition", "left top");
		} else 	if($el.children(".play_pause_btn_icon").hasClass("indicator-pause")){
			$el.children(".play_pause_btn_icon").css("backgroundPosition", "0% 33%");			
		}			
	});

	return $el;
}

function NextPrevBTNActivator() {
	$("#Influencer_left_btn").click(function(e){ 
		e.preventDefault();
		setCurrentInfluencerItem(previousInfluencerItem);
		playPauseTrigger();
	});
	$("#Influencer_right_btn").click(function(e){ 
		e.preventDefault();
		setCurrentInfluencerItem(nextInfluencerItem);
		playPauseTrigger();	
	});	
}

function playPauseTrigger() {
	if(paused){
		paused = false;
	}
	$(window).trigger(PLAY_PAUSE_CHANGED);
}

function playPauseSwitcher() {
		if(paused) { // Play Functionality
			paused = false;	
			setupAutoRotation();
		}
		else { // Pause Functionality	
			paused = true;		
			if(!autoRotationTimer)
				return;
			cancelAutoRotation();
		}		
}


function setupAutoRotation() {
	var playPauseBTN = $("#play_pause_btn");
	playPauseBTN.children(".play_pause_btn_icon").removeClass('indicator-play').addClass('indicator-pause');  	
	playPauseBTN.children(".play_pause_btn_icon").css("backgroundPosition", "0% 33%");	
	playPauseBTN.attr("aria-label","Pause Button");
	if(autoRotationTimer != null){
		cancelAutoRotation();
	}
	autoRotationTimer = setInterval(function() {
		direction = "left";
		setCurrentInfluencerItem(nextInfluencerItem);
	}, 5000);
}

function cancelAutoRotation() {
	var playPauseBTN = $("#play_pause_btn");
	playPauseBTN.children(".play_pause_btn_icon").removeClass('indicator-pause').addClass('indicator-play'); 		
	playPauseBTN.children(".play_pause_btn_icon").css("backgroundPosition", "left top");
	playPauseBTN.attr("aria-label","Play Button");	
	clearInterval(autoRotationTimer);
	autoRotationTimer = null;
}

function hideSlideCTAs(id) {
	$("#slide_"+id+"_pinterest").attr("tabindex","-1");	
	$("#slide_"+id+"_instagram").attr("tabindex","-1");
	$("#slide_"+id+"_explore").attr("tabindex","-1");
}

function showSlideCTAs(id) {
	$("#slide_"+id+"_pinterest").attr("tabindex","0")	
	$("#slide_"+id+"_instagram").attr("tabindex","0");
	$("#slide_"+id+"_explore").attr("tabindex","0");
}

// -- First Look Sign Up Code -- //
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
 
function setform(mform) { 
	var sub = mform.sub; 
	var len = sub.length; 
	mform.CONSENT_TYPE.value = ''; 
	if (typeof(len) != "undefined") { 
		for (var i = 0; i < len;i++) { 
			if (sub[i].value == '589725174') { 
				if (sub[i].checked) { 
					mform.CONSENT_TYPE.value = 'E'; 
				} 
			} 
		} 
	} 
	else { 
		if (sub.checked) { 
			mform.CONSENT_TYPE.value = 'E'; 
		} 
	} 
	return true; 
} 
;
