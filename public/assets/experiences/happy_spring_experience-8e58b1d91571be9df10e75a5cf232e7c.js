(function() {
	
	function InfoToolTip(target, content) {
		var $target = $(target);
		var $el = $('<div class="infoIcon"></div>');
		var $tooltip = $('<div class="toolTip">\
							<div class="tooltip-arrow"></div>\
							<div class="wrapper">'+content+'</div>\
						</div>');
		$el.append($tooltip);
		$target.empty().append($el);
		// Footer hovers
		$tooltip.hover(
			function() {},
			function() {
				$(this).removeClass('hover');
				$el.removeClass('hover');
			}
		);

		$el.hover(
			function() {
				if (!$tooltip.hasClass('hover')) {
					$tooltip.addClass('hover');
				}
				if (!$(this).hasClass('hover')) {
					$(this).toggleClass('hover');
				}
			},
			function() {
				$tooltip.removeClass('hover');
				$el.removeClass('hover');
			}
		);
	}
	
	$(document).ready(function() {
		InfoToolTip('#i-rollover-container', '<p class="corporate">Bath &amp; Body Works Direct, Inc.</p><p class="corporateadd">95 West Main Street </br>New Albany, OH 43054<br> 1-800-756-5005</p><p class="withdraw">You may withdraw your consent at anytime.</p><p class="contact"><a href="/helpdesk/index.jsp?display=corp&amp;subdisplay=contact&amp;stillHaveQuestion=yes">Contact Us</a></p>');
		
		// Disable click functionality for tabbing purposes
		$('.noClick').click(function(e) {
			e.preventDefault();
		});	

		// Add Tabbing to selected elements
		$('.tabber').each(function() {
			$(this).attr("tabindex", "0");
		});

		$('.signup-view').css("opacity","1");
		setTimeout(function(){ 
			$('.form-container').css("opacity","1");
			$('.form-container').addClass('fadeInUp animated');
		}, 500);
	});
		
})();
