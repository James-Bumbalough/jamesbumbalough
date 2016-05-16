function ResponsiveText($el) {
	var expSize = 768;
	var fontSize = parseInt($el.css('font-size'));
	var fontRatio = expSize/fontSize;
	
	$(window).resize(function(event) {
		windowWidth = $(window).width();
		if(windowWidth > expSize) {
			windowWidth = expSize;
		}	
				
		var newFontSize = (windowWidth/fontRatio) +"px";
		$el.css({
			'font-size': newFontSize
		})		
	});	
}

$(function() {
	$(document).ready(function(event) {
		$('.respext').each(function() {
			new ResponsiveText($(this));
		});
	});
});
