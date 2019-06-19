
var Clima = angular.module("Clima",[])

Clima.controller("Wheater",function($srootScope, $scope, $http){

	$scope.Temperatura = [];

	for(var i = 0; i < 100; i++) {
		$http({
			method: "GET",
			url: "https://api.openweathermap.org/data/2.5/city"+i
		}).then(function callbacksucces(y){
			$scope.Temperatura.push(y)
		})
	}
})