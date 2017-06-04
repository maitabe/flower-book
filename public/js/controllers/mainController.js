app.controller('mainCtrl',
 ['$scope',
 'flowerService',
  function($scope, flowerService) {

  	flowerService.fetchData().then(function() {
		$scope.flowers = flowerService.flowers;
		$scope.tran = flowerService.tran;
	});

}]);





