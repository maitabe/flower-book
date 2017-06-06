app.controller('mainCtrl',
 ['$scope',
 'flowerService',
  function($scope, flowerService) {

  	$scope.displayModal = false;
  	$scope.activeLang = true;

  	$scope.flowers = [];

  	flowerService.getAllFlowers().then(function() {
		$scope.flowers = flowerService.flowers;
		$scope.tran = flowerService.tran;
		console.log($scope.tran);
	});

  	$scope.openGallery = function($index) {
  		$scope.displayModal = true;
  		$scope.index = $index;
  		$scope.activeFlower($index);

  	};

  	$scope.closeGallery = function() {
  		$scope.displayModal = false;
  	};

  	// init slider
  	$scope.index = 0;
  	//
  	$scope.activeFlower = function(item) {
  		return $scope.index === item;
  	};

  	$scope.next = function() {
  		$scope.index = ($scope.index > 0) ? --$scope.index : $scope.flowers.length - 1;
  	};

  	$scope.previous = function() {
  		$scope.index = ($scope.index > $scope.flowers.length - 1) ? ++$scope.index : 0;
  	};

}]);





