angular.module('myApp', [])

	.directive('helloWorld', function() {
		return {
			template: '<p class="hello-world">Hello World!</p>'
		};
	});


// sudo code

// parent is the object that the target is being deleted from,
// target is the object that is being deleted
// id
function confirmDelete(parent, target, id) {

}