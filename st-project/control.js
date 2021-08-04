angular.module('v3App', ['ngClickCopy'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('MessageController', function($scope, $location) {
    
    var url = $location.$$absUrl;
    var url = new URL(url);
    var stuName = url.searchParams.get("name");
    var studentId = url.searchParams.get("studentId");
    var projectUrl = url.searchParams.get("projectUrl");
    var courseId = url.searchParams.get("courseId");
    var instructorName = url.searchParams.get("instructorName");
    var nextCourse = url.searchParams.get("nextCourse");    
    var sid = url.searchParams.get("sid");

    console.log(stuName);
    console.log(studentId);
    console.log(courseId);
    console.log(projectUrl);
    console.log(nextCourse);
    console.log(sid);

    if (nextCourse != null) {
    	$scope.nextCourse = nextCourse;
    }

    $scope.name = stuName;    
    $scope.instructorName = instructorName;
    
  	$scope.reset = function () {
  		console.log("clicked");
  	}

  });
