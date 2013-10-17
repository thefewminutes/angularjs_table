var redlineApp = angular.module('redlineApp', ['ngRoute']);
		
redlineApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'redlinesController',
				templateUrl: 'partials/inProgress.html'
			})
		.when('/create',
			{
				controller: 'redlinesController',
				templateUrl: 'partials/create.html'
			})
		.otherwise({ redirectTo: '/'});
});
//$locationProvider.html5Mode(true);

redlineApp.factory('redlineFactory', function() {
	var redlines = [
		{id:1,user:'Mark',plan:'1-20'}, 
		{id:2,user:'Tony',plan:'2-40'}, 
		{id:3,user:'Jen',plan:'9-30'}
	];
	var factory = {};
	factory.getRedlines = function() {
		return redlines;
	};
	return factory;
});

var controllers = {};
controllers.redlinesController = function ($scope, redlineFactory) {
	$scope.redlines = [];
	init();
	function init() {
		$scope.redlines = redlineFactory.getRedlines();
	}
};

redlineApp.controller(controllers);