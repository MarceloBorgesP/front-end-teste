angular.module('taxes', [])
.controller('main', function($scope, $http) {
	$http.get('https://app-dot-contabilizei-jobs.appspot.com/rest/simulador/atividades')
		.success(function(response) {
			$scope.activities = response.objects;
		})
	.error(function(data, status) {
		alert("Erro ao buscar as atividades.");
	});

	$scope.simulate = function (event, form) {
		event.preventDefault();
		calculate($http, $scope, form);
	}

	$scope.$watchCollection('form.tipo', loadMasks);
});



function calculate($http, $scope, form) {
	$http.get('https://app-dot-contabilizei-jobs.appspot.com/rest/simulador/imposto/'+form.tipo+'?faturamento='+form.faturamento
	+'&folha='+form.folha+(form.fatanterior ? '&fatanterior='+form.fatanterior : '')+(form.activity ? '&codatividade='+form.activity.cod : ''))
	.success(function(response) {
		$scope.result = response;
	})
	.error(function(response, status) {
		alert("Erro ao buscar imposto de lucro presumido.");
	});
}
