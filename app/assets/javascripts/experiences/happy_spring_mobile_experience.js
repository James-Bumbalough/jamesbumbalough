function Responsive(s,t){var i=t;if("0px"!=s.css("width"))var d=parseInt(s.css("width")),p=i/d;if("0px"!=s.css("height"))var r=parseInt(s.css("height")),o=i/r;var a=parseInt(s.css("font-size")),n=i/a;if("0px"!=s.css("line-height"))var e=parseInt(s.css("line-height")),h=i/e;if("0px"!=s.css("top"))var w=parseInt(s.css("top")),c=i/w;if("0px"!=s.css("left"))var x=parseInt(s.css("left")),g=i/x;if("0px"!=s.css("margin")){var f=0,b=0,m=0,v=0;if(s.hide(),"0px"!=s.css("margin-top"))var I=i/parseInt(s.css("margin-top"));if("0px"!=s.css("margin-right"))var W=i/parseInt(s.css("margin-right"));if("0px"!=s.css("margin-bottom"))var l=i/parseInt(s.css("margin-bottom"));if("0px"!=s.css("margin-left"))var u=i/parseInt(s.css("margin-left"));s.show()}if("0px"!=s.css("padding")){var N="0px",z="0px",R="0px",j="0px";if(s.hide(),"0px"!=s.css("padding-top"))var k=i/parseInt(s.css("padding-top"));if("0px"!=s.css("padding-right"))var q=i/parseInt(s.css("padding-right"));if("0px"!=s.css("padding-bottom"))var y=i/parseInt(s.css("padding-bottom"));if("0px"!=s.css("padding-left"))var A=i/parseInt(s.css("padding-left"));s.show()}if("0px"!=s.css("border-width")){var B="0px",C="0px",D="0px",E="0px";if("0px"!=s.css("border-top-width"))var F=i/parseInt(s.css("border-top-width"));if("0px"!=s.css("border-right-width"))var G=i/parseInt(s.css("border-right-width"));if("0px"!=s.css("border-bottom-width"))var H=i/parseInt(s.css("border-bottom-width"));if("0px"!=s.css("border-left-width"))var J=i/parseInt(s.css("border-left-width"))}if("absolute"!=s.css("position")){if(!isNaN(parseInt(s.css("top"))))var c=i/parseInt(s.css("top"));if(!isNaN(parseInt(s.css("right")))){i/parseInt(s.css("right"))}if(!isNaN(parseInt(s.css("bottom")))){i/parseInt(s.css("bottom"))}if(!isNaN(parseInt(s.css("left"))))var g=i/parseInt(s.css("left"))}$(window).resize(function(t){if(windowWidth=$(window).width(),windowWidth>i&&(windowWidth=i),"0px"!=s.css("width")){var d=windowWidth/p+"px";s.css({width:d})}if("0px"!=s.css("height")){var r=windowWidth/o+"px";s.css({height:r})}"0px"!=s.css("margin")&&(f="auto"==s.css("margin-top")?"auto":windowWidth/I+"px",b="auto"==s.css("margin-right")?"auto":windowWidth/W+"px",v="auto"==s.css("margin-bottom")?"auto":windowWidth/l+"px",m="auto"==s.css("margin-left")?"auto":windowWidth/u+"px",s.css({"margin-top":f,"margin-right":b,"margin-bottom":v,"margin-left":m})),"0px"!=s.css("padding")&&(N="auto"==s.css("padding-top")?"auto":windowWidth/k+"px",z="auto"==s.css("padding-right")?"auto":windowWidth/q+"px",j="auto"==s.css("padding-bottom")?"auto":windowWidth/y+"px",R="auto"==s.css("padding-left")?"auto":windowWidth/A+"px",s.css({"padding-top":N,"padding-right":z,"padding-bottom":j,"padding-left":R})),"0px"!=s.css("border-width")&&("0px"!=s.css("border-top-width")&&(B=windowWidth/F<=1?"1px":windowWidth/F+"px"),"0px"!=s.css("border-right-width")&&(C=windowWidth/G<=1?"1px":windowWidth/G+"px"),"0px"!=s.css("border-bottom-width")&&(E=windowWidth/H<=1?"1px":windowWidth/H+"px"),"0px"!=s.css("border-left-width")&&(D=windowWidth/J<=1?"1px":windowWidth/J+"px"),s.css({"border-top-width":B,"border-right-width":C,"border-bottom-width":E,"border-left-width":D}));var a=windowWidth/n+"px";if(s.css({"font-size":a}),"0px"!=s.css("line-height")){var e=windowWidth/h+"px";s.css({"line-height":e})}if("0px"!=s.css("top")){var w=windowWidth/c+"px";s.css({top:w})}if("0px"!=s.css("left")){var x=windowWidth/g+"px";s.css({left:x})}})}


(function($) {

	
	$(document).ready(function(event) {	
		
		$('.responsive').each(function() {
			new Responsive($(this), 640);
		});
		
		$('.responsive600').each(function() {
			new Responsive($(this), 600);
		});

		$('.noClick').click(function(e) {
			e.preventDefault();
		});		
		
					
		$(window).resize();
	});
	
})(jQuery);