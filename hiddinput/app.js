angular.module('myApp', [])

	.controller('mainController', function($scope) {
		$scope.myVal = "Hello Worldfdssssssssssssss! \nfdasfdsafdsafdsfdsafdsafdsafsdfdsafdsaf";
	})

	.directive('hiddinput', function() {
		return {
			restrict: 'E',
			scope: {
				model: '=ngModel'
			},
			templateUrl: 'hiddinput.html',
			link: function(scope, element, attrs) {
				var oldValue = '';
				scope.edit = function() {
					scope.newValue = oldValue = scope.model;
					scope.editing = true;
				};

				scope.cancelEdit = function() {
					scope.model = oldValue;
					scope.newValue = '';
					scope.editing = false;
				};

				scope.confirmEdit = function() {
					scope.model = scope.newValue;
					scope.newValue = '';
					scope.editing = false;
				};

			}
		};
	});