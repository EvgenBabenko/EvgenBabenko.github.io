//Accordion

$(function() {
	function closeAccordionPlane() {
		$('.accordion-title').removeClass('active');
		$('.accordion-content').slideUp();
	}

	$('.accordion-title').click(function(event) {
		var currentAttrValue = $(this).attr('href');
		var target = event.target;

		if ($(target).is('.active')) {
			closeAccordionPlane();
		} else {
			closeAccordionPlane();

			$(this).addClass('active');
			$('.accordion ' + currentAttrValue).slideDown();
		}
		
		event.preventDefault();
	});
});