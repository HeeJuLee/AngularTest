var testApp = angular.module('testApp', []);

testApp.controller('helloController', function testController($scope) {
	$scope.name = "World";
})

testApp.controller('contactController', function contactController($scope) {
	$scope.clickHandler = function() {
		$scope.isHidden = !$scope.isHidden;
	};
	
	$scope.contacts = [
		 {
			 name: 'john',
			 phone: '010 2344 2342',
			 email: 'john@exampl.com'
		 },
		 {
			 name: 'heelee',
			 phone: '010 3405 4121',
			 email: 'hjlee@exampl.com'
		 }
	];
	
	$scope.styleList = function() {
		if(!$scope.styler)
			return;
		return {
			background: 'red',
			fontWeight: 'bold'
		};
	};
})
