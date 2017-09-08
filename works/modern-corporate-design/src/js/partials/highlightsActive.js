//Highlights active pages 

$(function() {
	$('.nav a')
		.filter(function(){
			return this.href==location.href
		})
		.addClass('active')
		.siblings()
		.removeClass('active');
});