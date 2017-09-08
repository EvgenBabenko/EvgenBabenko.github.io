//Carousel
$(function() {
	var slideWrap = $('.slide-wrap');
	var nextLink = $('.arrow-right');
	var prevLink = $('.arrow-left');
	var slideWidth = $('.slide-itm').outerWidth();
	var scrollSlider = slideWrap.position().left - slideWidth;

	nextLink.click(function(){
			slideWrap.animate({left: scrollSlider}, 500, function(){
				slideWrap
				.find('.slide-itm:first')
				.appendTo(slideWrap)
				.parent()
				.css({'left': 0});
			});
		});

	prevLink.click(function(){
		slideWrap
		.css({'left': scrollSlider})
		.find('.slide-itm:last')
		.prependTo(slideWrap)
		.parent()
		.animate({left: 0}, 500);
	});

});