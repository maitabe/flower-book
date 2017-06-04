app.factory('flowerService', ['$http' , function($http) {

	console.log('this is my service');

	var flowerList = {
		flowers: [],
		tran:[]

	}

	flowerList.fetchData = function() {
		return $http.get('/flowers').then(function(data) {
			console.log(data);
			angular.copy(data.data, flowerList.flowers)
		})
	}

	flowerList.fetcTran = function() {
		return $http.get('/tran').then(function(data) {
			console.log(data);
			angular.copy(data.data, flowerList.tran)
		})
	}
	// .catch(function(error) {
	// 	console.log(error.message);
	// })

	return flowerList;
}])