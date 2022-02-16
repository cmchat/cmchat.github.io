angular.module('v3App', ['ngclipboard'])
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
    var conferenceName = url.searchParams.get("conferenceName");
    var conferenceWeb = url.searchParams.get("conferenceWeb");
    var patentNumber = url.searchParams.get("patentNumber");

    console.log(stuName);
    console.log(studentId);
    console.log(courseId);
    console.log(projectUrl);
    console.log(nextCourse);
    console.log(sid);
    console.log("patentNumber");
    console.log(patentNumber);

    if (nextCourse != null) {
    	$scope.nextCourse = nextCourse;
    }

    $scope.name = stuName;  
    $scope.instructorName = instructorName;
    $scope.conferenceName = conferenceName;
    $scope.conferenceWeb = conferenceWeb;
    $scope.patentNumber = patentNumber;
    
  	$scope.reset = function () {
  		console.log("clicked");
  	}

  });
