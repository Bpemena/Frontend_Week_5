$(document).ready(function() {
		$('.popup').hide();
		
		$('.subscribe__submit').click(function footerSubmit(e) {
			$('.popup').show();
			offScroll();
		});

		$('.thanks__link').click(function closeThanks1(e) {
			$('.popup').hide();
			onScroll();
		})
		$('.thanks__close').click(function closeThanks1(e) {
			$('.popup').hide();
			onScroll();
		})
});


function offScroll() {
	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
}
function onScroll() {
	$('html, body').css({
	    overflow: 'auto',
	    height: 'auto'
	});
}