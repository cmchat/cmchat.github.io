angular.module('v3App', ['ngClickCopy'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('MessageController', function($scope, $location) {
    
  	$scope.reset = function () {
  		console.log("clicked");
  	}

  });
