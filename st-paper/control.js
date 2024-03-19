angular.module('v3App', ['ngclipboard'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('MessageController', function($scope, $location) {
    
    var url = $location.$$absUrl;
    var url = new URL(url);
    var title;
    var language;
    var frontend;
    var backend;
    var database;

    $scope.title = title;  
    $scope.language = language;
    $scope.frontend = frontend;
    $scope.backend = backend;
    $scope.database = database;
    
  	$scope.reset = function () {
  		console.log("clicked");
  	}

  });
