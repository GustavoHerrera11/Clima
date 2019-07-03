// Modulo Clima
var Clima = angular.module("Clima",[])
// Controlador Weather
Clima.controller("Wheater",function($rootScope, $scope, $http){
	// HTTP
	$http({
		method:"GET",
		url:"http://api.openweathermap.org/data/2.5/weather?q=Republic of Guatemala&units=metric&lang=es&APPID=9591c913209303ea1fa78ed8a9ae5d12"
	}).then(function callbaksuccess(snapshot){
		$scope.Temperatura=[];
		$scope.Temperatura.push(snapshot)
	})

	$http({
		method:"GET",
		url: "http://api.openweathermap.org/data/2.5/weather?q=Departamento de Santa Rosa&units=metric&lang=es&APPID=9591c913209303ea1fa78ed8a9ae5d12"
	}).then(function callbaksuccess(Santa){
		console.log(Santa)
		$scope.San=[];
		$scope.San.push(Santa)
	})

	$http({
		method:"GET",
		url: "http://api.openweathermap.org/data/2.5/weather?q=Ojo de Agua&units=metric&lang=es&APPID=9591c913209303ea1fa78ed8a9ae5d12"
	}).then(function callbaksuccess(Ojo){
		console.log(Ojo)
		$scope.de=[];
		$scope.de.push(Ojo)
	})
})