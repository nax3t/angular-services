app.service('userService', function() {
	var data =
		[
			{
				"id": 1,
				"first_name": "george",
				"last_name": "bluth",
				"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
			}, {
				"id": 2,
				"first_name": "lucille",
				"last_name": "bluth",
				"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
			}, {
				"id": 3,
				"first_name": "oscar",
				"last_name": "bluth",
				"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
			}
		];

	this.getUsers = function() {
		return data;
	};

	this.addUser = function(user) {
		user.id = data[data.length-1].id += 1;
		user.avatar = "http://media2.corbisimages.com/CorbisImage/thumb/57/68/3041/57683041/Corbis-42-57683041.jpg";
		data.push(user);
	};

	this.removeUser = function(user) {
		var userIndex = data.indexOf(user);
		data.splice(userIndex, 1);
	};
});