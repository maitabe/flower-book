var app = angular.module('flowerBook', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	var flowers = {
		name: 'flowers',
		url: '/flowers',
		templateUrl: 'templates/flowers.html',
	    controller: 'mainCtrl',

	};


	$stateProvider.state(flowers);

	$urlRouterProvider.otherwise('/flowers');



});

