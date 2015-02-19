angular.module('myApp', [])

	.controller('mainController', function($scope) {
		$scope.myVal = "5.15";
	})

	.directive('hiddinput', function($timeout) {
		return {
			restrict: 'E',
			scope: {
				model: '=ngModel',
				default: '=?'
			},
			templateUrl: 'hiddinput.html',
			link: function(scope, element, attrs) {
				var oldValue = '';
				var container = element[0].querySelector('.anchor');

				scope.edit = function() {
					scope.newValue = oldValue = scope.model;
					scope.inputStyle = {
						// width: container.offsetWidth + 'px',
						// height: container.offsetHeight + 'px'
						width: container.clientWidth + 'px',
						height: container.clientHeight + 'px'
					};
					scope.editing = true;

					$timeout(function() {
						element[0].querySelector('.the-input').focus();
					});
				};

				scope.cancelEdit = function() {
					if (!scope.canCancel)
						return;

					scope.model = oldValue;
					scope.newValue = '';
					$timeout(function() {
						scope.editing = false;
					});
				};

				scope.confirmEdit = function() {
					if (scope.model && scope.default)
						scope.model = scope.default;
					scope.model = scope.newValue;
					scope.newValue = '';
					scope.editing = false;
				};

				scope.disableCancel = function() {
					scope.canCancel = false;
				};
				scope.enableCancel = function() {
					scope.canCancel = true;
				};
				scope.$watch('canCancel', function() {
					console.log(scope.canCancel);
				});
			}
		};
	})

	.directive('editable', function($timeout) {
		return {
			scope: {
				model: '=editable',
			},
			transclude: true,
			templateUrl: 'editable.html',
			link: function(scope, element, attrs) {

				scope.edit = function() {
					scope.editing = true;
					$timeout(function() {
						element[0].querySelector('input').focus();
					});
				};

				scope.stopEdit = function() {
					scope.editing = false;
				};

				scope.getState = function() {
					return scope.editing === true ? "editing" : "editable";
				};

				scope.onKeyup = function($event) {
					if ($event.keyCode === 27) {
						scope.editForm.value.$rollbackViewValue();
						scope.stopEdit();
					}

				};
			}
		};
	});