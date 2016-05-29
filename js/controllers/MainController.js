app.controller('MainController', function($scope){
	$scope.API_KEY = "e7f585b242780035570c4f35ae46f954";
	$scope.BASE_URI = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY;

	$scope.constructRequestURI = function(city){
		return $scope.BASE_URI + "&q=" + city.trim();
	}
});