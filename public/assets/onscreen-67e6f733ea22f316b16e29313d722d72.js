function onscreen(target, buffer) {
	buffer = buffer || 0;
	$(target).each(function() {
		new OnScreenElement($(this), buffer);
	});
}
	
function OnScreenElement($el, buffer) {
	var bindingFunction = (function() {
		callback();
	}).bind($el.get());
	
	$(window).scroll(function() {
		if(checkVisible($el, buffer)) {
			$el.addClass('onscreen');
		}  else {
			$el.removeClass('onscreen');
		}
	});
}

function offscreen(target, buffer) {
	buffer = buffer || 0;
	$(target).each(function() {
		new OffScreenElement($(this), buffer);
	});
}
	
function OffScreenElement($el, buffer) {
	var bindingFunction = (function() {
		callback();
	}).bind($el.get());
	
	$(window).scroll(function() {
		if(checkVisible($el, buffer)) {
			$el.removeClass('offscreen');
		}  else {
			$el.addClass('offscreen');
		}
	});
}

function checkVisible($el, buffer) {
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $el.offset().top,
        elementHeight = $el.height();
        
    return ((y + buffer < (vpH + st)) && (y > (st - elementHeight)));
}
;
