(function () {
	angular.module("nextelApp", ['slickCarousel'])
})();

$(document).ready(function () {
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800);
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