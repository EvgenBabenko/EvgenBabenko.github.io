// Add toggle ON/OFF

$(function() {
	$('#toggle').on('click', function(){
		$('.menu-left').toggleClass('toggle-on-left');
		$('.menu-right').toggleClass('toggle-on-right');
	});
});