angular.module('taxes', [])
.controller('main', function($scope, $http) {
  $http.get('https://app-dot-contabilizei-jobs.appspot.com/rest/simulador/atividades')
    .success(function(response) {
      $scope.atividades = response.objects;
    })
    .error(function(data, status) {
      alert("Erro ao buscar as atividades.");
    });

  $scope.simulate = function (event, form) {
    event.preventDefault();
    calculate($http, $scope, form);
  }
});



function calculate($http, $scope, form) {
  $http.get('https://app-dot-contabilizei-jobs.appspot.com/rest/simulador/imposto/'+form.tipo
  +'?faturamento='+form.faturamento
  +'&folha='+form.folha
  +(form.fatanterior ? '&fatanterior='+form.fatanterior : '')
  +(form.atividade ? '&codatividade='+form.atividade.cod : ''))
    .success(function(response) {
      $scope.result = response;
    })
    .error(function(response, status) {
      alert("Erro ao buscar imposto.");
    });
}
