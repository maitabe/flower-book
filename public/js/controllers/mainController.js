app.controller('mainCtrl',
 ['$scope',
 'flowerService',
  function($scope, flowerService) {

  	$scope.activeLang = true;

  	flowerService.getAllFlowers().then(function() {
		$scope.flowers = flowerService.flowers;
		$scope.tran = flowerService.tran;
		console.log($scope.tran);
	});

	/*flowerService.getTran().then(function() {
		$scope.flowers = flowerService.tran;
		$scope.tran = flowerService.tran;
	});*/

}]);





