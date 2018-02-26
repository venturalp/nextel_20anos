(function () {
	angular.module("nextelApp", ['slickCarousel', 'ngAnimate', 'toastr'])
})();

$(document).ready(function () {
	$("a[href*='#']").click(function (event) {
		event.preventDefault();
		var aux = $(this).attr('href').substr($(this).attr('href').indexOf('#'), $(this).attr('href').length);

		if ($(aux).length != 0) {
			$('html, body').stop();
			$('html, body').animate({
				scrollTop: $(aux).offset().top
			}, 900);
		} else {
			window.location = $(this).attr('href');
		}

	});

	var SPMaskBehavior = function (val) {
			return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		},
		spOptions = {
			onKeyPress: function (val, e, field, options) {
				field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
		};

	$('.fone').mask(SPMaskBehavior, spOptions);	
});