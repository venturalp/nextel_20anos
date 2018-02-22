(function () {
	angular.module('nextelApp').factory('api', ['$http', function ($http) {
		function getPlans(success, fail) {
			
			//request real
//			$http.get('https://www.nextel.com.br/jsonplans.aspx').then(success, fail);			
			//hardcode temporário
			var res = {};			
			res.data = 
				[{"order":1,"tag":"PP","name":"2GB","legend":"NO CARTÃO DE CRÉDITO","price":"54,99","featured":false},{"order":2,"tag":"PP","name":"3GB","legend":"(2GB + 1GB DE BÔNUS)","price":"59,99","featured":false},{"order":3,"tag":"P","name":"4GB","legend":"(3GB + 1GB DE BÔNUS)","price":"79,99","featured":false},{"order":4,"tag":"M","name":"10GB","legend":"(5GB + 5GB DE BÔNUS)","price":"99,99","featured":true},{"order":5,"tag":"G","name":"12GB","legend":"(10GB + 2GB DE BÔNUS)","price":"169,99","featured":false},{"order":6,"tag":"GG","name":"20GB","legend":"","price":"169,99","featured":false}];
			success(res);
		}

		function register(dados) {
//			var dados = {
//				"partner_key": "1E4AD0F2-51D4-4827-9E43-4DF32733B99A",
//				"content": {
//					"str_nome_completo": "Guilherme teste",
//					"str_cpf_cnpj": "229.401.891-53",
//					"str_email": "guilherme.ventura@nextel.com.br",
//					"num_ddd": "11",
//					"num_telefone": "998989898",
//					"bool_cliente": true
//				}
//			}
			
			$http.post('https://www.nextel.com.br/jsonregistration.aspx', dados).then(
				function(res){
					console.log(res);
				},
				
				function(err){
					console.warn(err);
				}
			)
		}

		return {
			getPlans: getPlans,
			register: register
		}
	}])
})();