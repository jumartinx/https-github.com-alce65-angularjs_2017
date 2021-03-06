angular.module("appModule", [])
.controller('AppController', ['$scope', function($scope){

	$scope.message = 'I love AngularJS';
	
}])

.directive('helloWorld', function() {
	return {
		restrict: 'AEC',
		replace: true,
		template: '<p ng-click="clearMessage()">Hello, World! {{message}} </p>',
		link: function(scope, elem, attrs) {
			scope.$watch('message', function(value) {
				console.log('Message Modificado!');
			});
			scope.clearMessage = function() {
				scope.message = '';
			}
			elem.bind('mouseover', function() {
				elem.css('cursor', 'pointer');
			});
		}
	}
});