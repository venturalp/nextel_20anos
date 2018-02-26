(function () {
	angular.module("nextelApp").controller('mainCtrl', ['$scope', 'api', '$filter', function ($scope, api, $filter) {
		$scope.configBanner = {
			enabled: true,
			autoplay: true,
			draggable: true,
			autoplaySpeed: 6000,
			dots: true
		};

		$scope.currentPlano = 0;

		$scope.configPlanos = {
			enabled: true,
			autoplay: true,
			draggable: true,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			autoplaySpeed: 4000,
			infinite: true,
			appendDots: '#dots-planos',
			event: {
				afterChange: function (event, slick, currentSlide, nextSlide) {
					$scope.currentPlano = currentSlide;
				}
			},
			responsive: [
				{
					breakpoint: 1070,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
    			},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
    			},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
    			}    
  			]
		};

		$scope.produtos = [
			{
				img: 'images/ico-roaming.png',
				txt: 'Roaming Nacional Grátis'
			},
			{
				img: 'images/ico-ligacoes.png',
				txt: 'Ligações DDD para qualquer operadora e com o código 99'
			},
			{
				img: 'images/ico-sms.png',
				txt: 'Pacote SMS'
			}
		]

		$scope.currentProduct = 0;
		
		setInterval(function () {
			$scope.currentProduct++;
			if ($scope.currentProduct == $scope.produtos.length)
				$scope.currentProduct = 0;
			$scope.$apply();
		}, 3000)

		document.onkeydown = function (event) {
			event = event || window.event;
			if (event.keyCode == 27) {
				if ($scope.popup.open)
					$scope.closePopup();
			}
		}

		$scope.popup = {}
		$scope.openPopup = function () {
			$scope.popup.open = true;
			$scope.popup.titulo = 'Lorem Ipsum';
			$scope.popup.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis dui justo, ac lobortis lacus feugiat ut. Integer elit augue, placerat ut libero eget, facilisis ornare nunc. Vestibulum laoreet erat sed posuere varius. Morbi malesuada sem quam, sed dignissim tellus posuere vel. Fusce a sagittis mi. Sed efficitur purus nibh. Sed auctor felis vel turpis eleifend ultrices. Fusce dictum pretium malesuada. In nec consectetur libero. Vestibulum imperdiet turpis vel tempor molestie. Proin luctus ante vitae vestibulum sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In nisi sem, porta eget consequat nec, cursus a nunc. In vel nunc augue.';
		}

		$scope.closePopup = function () {
			$scope.popup.open = false;
			if(!$scope.$$phase) {
				$scope.$apply();
			}
		}

		$scope.plans = [];

		function gotPlans(res) {
			$scope.plans = res.data;
		}

		function failPlans(err) {
			console.log(err);
		}

		api.getPlans(gotPlans, failPlans);

	}]);
})();