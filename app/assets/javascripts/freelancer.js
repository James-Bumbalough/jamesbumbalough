/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

// -- My Code  -- //

// Age and Date figurer
var currentYear = moment().format("YYYY");
var dt = moment("19841126", "YYYYMMDD").fromNow();
var age = dt.slice(0,2);
$(".current-year").html(currentYear);
$(".ageOutput").html(age);

// Resume Section - Experience Expander
$(".experience-summary").each(function(){
    var expanded = false;    
    $(this).click(function(){
        if(expanded){
            $(this).addClass("contracted"); 
            $(this).find('.expandIcon').html('<i class="fa fa-chevron-down"></i> Expand');
            expanded = false;  
        } else {
            $(this).removeClass("contracted");
            $(this).find('.expandIcon').html('<i class="fa fa-chevron-up"></i> Contract');
            expanded = true;
        }
    });
});

// Resume Section - Animate stars 
$(".icons-red").each(function(){
   offscreen($(this), 10);  
});
