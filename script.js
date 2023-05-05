var form = document.querySelector('form');
var id = form.querySelector('#id');
var pw = form.querySelector('#pw');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	var users = [
		{
			id: "유호원",
			pw: "7Jyg7Zi47JuQ"
		},
		{
			id: "김설아",
			pw: "6rmA7ISk7JWEDQo="
		},
		{
			id: "user3",
			pw: "abcd"
		}
	];

	for (var i = 0; i < users.length; i++) {
		if (users[i].id === id.value && users[i].pw === pw.value) {
			location.href = pw.value + ".html";
			return;
		}
	}

	location.href = "ErrorSite.html";
});