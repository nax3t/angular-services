app.controller('userCtrl', function($scope, userService) {
	$scope.users = userService.getUsers();
	$scope.user = {};
	$scope.toggleEdit = false;
	//example of deep watching
	// $scope.$watch('users', function() {
	// 	console.log('changed!');
	// }, true);
	$scope.addUser = function() {
		userService.addUser($scope.user);
		$scope.user = {};
	};
	$scope.removeUser = function(user) {
		userService.removeUser(user);
	};
});