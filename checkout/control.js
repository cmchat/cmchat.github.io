angular.module('v3App', ['ngClickCopy'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('MessageController', function($scope, $location) {
    
    var url = $location.$$absUrl;
    var url = new URL(url);
    var stuName = url.searchParams.get("name");
    var studentId = url.searchParams.get("studentId");
    var courseId = url.searchParams.get("courseId");
    var projectUrl = url.searchParams.get("projectUrl");
    var nextCourse = url.searchParams.get("nextCourse");

    console.log(stuName);
    console.log(studentId);
    console.log(courseId);
    console.log(projectUrl);
    console.log(nextCourse);

    if (nextCourse != null) {
    	$scope.nextCourse = nextCourse;
    }

    $scope.name = stuName;
    $scope.summaryURL = "https://codingmindsacademy.com/feedback_ECv3.html?studentId=" + studentId + "&courseId=" + courseId;
    $scope.projectURL = projectUrl;

  	$scope.reset = function () {
  		console.log("clicked");
  	}

  });
