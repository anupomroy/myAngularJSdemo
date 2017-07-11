app.controller('CDController',['$scope','$rootScope','CDFactory',function($scope,$rootScope,CDs){
	$scope.CDList=CDs.list;
	$scope.updateTab=function(tab,cd){
		cd.tabs=tab;
	};
}]);