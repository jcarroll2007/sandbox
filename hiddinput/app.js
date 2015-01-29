angular.module('myApp', [])

	.controller('mainController', function($scope) {
		$scope.myVal = "Hello World!";
	})

	.directive('hiddinput', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.css({ cursor: 'pointer'});

				element.bind('focus', onFocus);

				element.bind('focusout', onLoseFocus);

				function onFocus() {

				}

				function onLoseFocus() {

				}
			}
		};
	});