$(document).ready(function() {
	// remove placeholder after click
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
 	});
	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
});