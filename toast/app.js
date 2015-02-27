angular.module('myApp', [])

	.directive('helloWorld', function() {
		return {
			template: '<p class="hello-world">Hello World!</p>'
		};
	});