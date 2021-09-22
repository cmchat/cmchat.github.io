angular.module('v3App', ['ngClickCopy'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('MessageController', function($scope, $location) {
    
    /*var url = $location.$$absUrl;
    //var url = new URL(url);    
    //var studentId = url.searchParams.get("studentId");
    //var projectUrl = url.searchParams.get("projectUrl");
    var courseId = url.searchParams.get("courseId");
    var instructorName = url.searchParams.get("instructorName");
    var nextCourse = url.searchParams.get("nextCourse");    
    var sid = url.searchParams.get("sid");*/
    
    var url = $location.$$absUrl;
    var url = new URL(url);    
    var stuName = url.searchParams.get("name");
    var instructorName = url.searchParams.get("instructorName");
    var conferenceName = url.searchParams.get("conferenceName");
    var conferenceWeb = url.searchParams.get("conferenceWeb");
    var conferenceCategory = url.searchParams.get("conferenceCategory");

    //if (nextCourse != null) {
    	//$scope.nextCourse = nextCourse;
    //}

    $scope.name = stuName;    
    $scope.instructorName = instructorName;
    $scope.conferenceName = conferenceName;
    $scope.conferenceWeb = conferenceWeb;
    $scope.conferenceCategory = conferenceCategory;
    
  	$scope.reset = function () {
  		console.log("clicked");
  	}

  });
