app.controller('userCtrl', function($scope, userService) {
	$scope.users = userService.getUsers();
	$scope.user = {};
	$scope.addUser = function() {
		userService.addUser($scope.user);
		$scope.user = {};
	};
	$scope.removeUser = function(user) {
		userService.removeUser(user);
	};
});