
var Clima = angular.module("Clima",[])

Clima.controller("Wheater",function($rootScope, $scope, $http){

	$scope.Tempreatura=[];

	$http({
		method:"GET",
		url:"http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9591c913209303ea1fa78ed8a9ae5d12"
	}).then(function (snapshot){
		console.log(snapshot.data.name)
	})
})