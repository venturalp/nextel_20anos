(function () {
	angular.module("nextelApp").controller('mainCtrl', ['$scope', 'api', function ($scope, api) {
		$scope.configBanner = {
			enabled: true,
			autoplay: true,
			draggable: false,
			autoplaySpeed: 6000,
			dots: true
		};
		
		$scope.currentPlano = 0;

		$scope.configPlanos = {
			enabled: true,
			autoplay: true,
			draggable: false,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			autoplaySpeed: 4000,
			infinite: true,
			appendDots: '#dots-planos',
			event: {
				afterChange: function (event, slick, currentSlide, nextSlide) {
					console.log(currentSlide);
					$scope.currentPlano = currentSlide;
				}
			}
		};

		$scope.plans = [];

		function gotPlans(res) {
			$scope.plans = res.data;
		}

		function failPlans(err) {
			console.log(err);
		}

		api.getPlans(gotPlans, failPlans);
		api.register();

	}]);
})();