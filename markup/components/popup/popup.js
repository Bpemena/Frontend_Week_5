$(document).ready(function() {
		$('.popup').hide();
		
		$('.subscribe__submit').click(function submit(e) {
			if ($('.subscribe__email').value() != ' ') {
				$('.popup').show();
				offScroll();
			}
			// По идее он не должен же перезагружать страницу, почему он перезагружает понять я не могу. Можете помочь понять?
				return false;
		});

		$('.thanks__link').click(function closeThanks1(e) {
			e.preventDefault();
			$('.popup').hide();
			onScroll();
		})
		$('.thanks__close').click(function closeThanks1(e) {
			e.preventDefault();
			$('.popup').hide();
			onScroll();
		})
});
function submit() {
	if ($('.subscribe__email').value() != ' ') {
				$('.popup').show();
				offScroll();
			}
				return false;
}
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