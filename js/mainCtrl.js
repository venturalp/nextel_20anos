(function () {
	angular.module("nextelApp").controller('mainCtrl', ['$scope', function ($scope) {
		$scope.slickConfig = {
			enabled: true,
			autoplay: true,
			draggable: false,
			autoplaySpeed: 6000,
			dots: true
		};
	}]);
})();