app.factory('flowerService', ['$http' , function($http) {

	console.log('this is my service');

	var flowerList = {
		flowers: [],
		tran:[]

	};

	flowerList.getAllFlowers = function() {
		return $http.get('/flowers').then(function(data) {
			var flowersRes = JSON.parse(data.data);
			console.log(flowersRes);
			angular.copy(flowersRes.flowers.data, flowerList.flowers);
			angular.copy(flowersRes.tran.data, flowerList.tran);
		});
	};

	return flowerList;


}]);