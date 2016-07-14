/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// 判斷向下提示框是否出現
$(document).ready(function(e) {
	$('.down_btn').hide();
	function icon_down_visible(){
		$(window).unbind('scroll');
		var w_height = Number($(window).height());
		var banner = $('.downhide');
		if($.isEmptyObject(banner))return;
		var position = banner.offset();
		var y = Number(position.top);
		var banner_bottom = y+Number(banner.height());
		if(banner_bottom < w_height ){
			$('.down_btn').hide();
		}else{
			$('.down_btn').show();
		}
		$(window).scroll(function () {
			var scrollBottom = Number($(window).scrollTop())+$(window).height();
			if( scrollBottom > banner_bottom ){
				$('.down_btn').stop().fadeOut(100);
			}else{
				$('.down_btn').stop().fadeIn(250);
			}
		});	
	}
	icon_down_visible();
	$('.downhide').bind('loaded',icon_down_visible);
	$(window).resize(icon_down_visible);
});