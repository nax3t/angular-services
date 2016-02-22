app.controller('usersCtrl', ['$scope', 'userService', function($scope, userService) {
	$scope.users = userService.getUsers();
	$scope.user = {};
	$scope.toggleEdit = false;

	$scope.addUser = function() {
		userService.addUser($scope.user);
		$scope.user = {};
	};
	$scope.removeUser = function(user) {
		userService.removeUser(user);
	};
	
	// // example of deep watching
	// $scope.$watch('users', function(newValue, oldValue) {
	// 	if (newValue !== oldValue) {
	// 		console.log('changed!');
	// 	}
	// }, true);
	// // example of shallow watching
	// $scope.foo = 'foo';
	// $scope.$watch('foo', function(newValue, oldValue) {
	// 	if (newValue !== oldValue) {
	// 		// execute when foo changes
	// 		console.log('changed!');			
	// 	}
	// });
}]);