angular.module('v3App', ['ngclipboard'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('MessageController', function($scope, $location, $http) {

    var url = $location.$$absUrl;
    var url = new URL(url);
    var stuName = url.searchParams?.get("name");
    var studentId = url.searchParams?.get("studentId");
    var courseId = url.searchParams?.get("courseId");
    var projectUrl = url.searchParams?.get("projectUrl");
    var nextCourse = url.searchParams?.get("nextCourse");
    var sid = url.searchParams?.get("sid");

    if (nextCourse != null) {
    	$scope.nextCourse = nextCourse;
    }

    $scope.name = stuName;
    $scope.sid = sid;
    $scope.studentId = studentId;
    $scope.summaryURL = "https://codingmind.com/cn/feedback?studentId=" + studentId + "&courseId=" + courseId;
    $scope.projectURL = projectUrl;
    $scope.surveyURL = "https://codingmind.com/cn/survey?studentId=" + studentId + "&courseId=" + courseId;
    $scope.surveyURLEn = "https://codingmind.com/survey?studentId=" + studentId + "&courseId=" + courseId;
    $scope.pathURL = "https://path.codingmind.com/path/" + studentId + "/cn";
    $scope.pathURLEn = "https://path.codingmind.com/path/" + studentId;

    // AI Feedback
    $scope.aiFeedback = "";
    $scope.loadingFeedback = false;
    $scope.feedbackError = "";

    $scope.getAIFeedback = function() {
      $scope.loadingFeedback = true;
      $scope.feedbackError = "";
      $scope.aiFeedback = "";

      var apiUrl = "https://backend4.sharemyworks.com/api/Feedback/eos-ai-feedback/?accountId=" + studentId + "&courseId=" + courseId;

      $http.post(apiUrl)
        .then(function(response) {
          if (response.data && response.data.result && response.data.result.textAI) {
            $scope.aiFeedback = response.data.result.textAI;
          } else {
            $scope.feedbackError = "No feedback data returned";
          }
        })
        .catch(function(error) {
          console.error("Error fetching AI feedback:", error);
          $scope.feedbackError = "Failed to fetch feedback. Please try again.";
        })
        .finally(function() {
          $scope.loadingFeedback = false;
        });
    };

  	$scope.reset = function () {
  		console.log("clicked");
  	}

  });
