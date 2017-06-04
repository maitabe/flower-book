app.controller('mainCtrl',
 ['$scope',
 'flowerService',
  function($scope, flowerService) {

  	flowerService.getAllFlowers().then(function() {
		$scope.flowers = flowerService.flowers;
		$scope.tran = flowerService.tran;
		console.log($scope.tran.en);
	});


	/*flowerService.getTran().then(function() {
		$scope.flowers = flowerService.tran;
		$scope.tran = flowerService.tran;
	});*/

}]);





