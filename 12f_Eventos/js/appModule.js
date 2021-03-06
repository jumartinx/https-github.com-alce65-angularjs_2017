angular.module("appModule", [])
.controller('AppController', ['$scope','$timeout', function($scope, $timeout){

	$scope.$parent.sEmpresa = "DesFuFor"
	$scope.messages = [{
		sender: 'User1',
		text: 'Mensage 1'
	}];
	var timer;
	var count=0;
	$scope.loadMessages = function() {
		count++;
		$scope.messages.push({
			sender: 'User1',
			text: 'Mensaje aleatorio '+count
		});
		timer = $timeout($scope.loadMessages, 2000);
		if(count==3){
			$scope.$broadcast('EVENT_NO_DATA', 'No Conectado');
			$timeout.cancel(timer);
		}
	};
	timer = $timeout($scope.loadMessages, 2000);
	$scope.$on('EVENT_RECEIVED',function(){
		console.log('Received emitted event');
	});	
}])
.controller('StatsController', ['$scope', function($scope){

	$scope.name = 'World';
	$scope.status = 'Conectado';
	$scope.statusColor='green';
	$scope.$on('EVENT_NO_DATA', function(event, data) {
		console.log('received broadcasted event');
		$scope.status = data;
		$scope.statusColor='red';
		$scope.$emit('EVENT_RECEIVED');
	});
	
}])
