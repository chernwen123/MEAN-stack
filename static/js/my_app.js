
var theapp = angular.module('commentApp', ['ngResource'])
	
    //sets up the controller on this module
    theapp.controller('myController', ['$scope', '$http',
        function($scope, $http) {
            $http.get('/user/profile')
            .success(function(data, status, headers, config) {
                $scope.user = data;
                $scope.error = "";
            }).
            error(function(data, status, headers, config) {
                $scope.user = {};
                $scope.error = data;
            });
        }
]);
	theapp.controller('commentsController', ['$scope', '$resource',
		function($scope,$resource) {
var Comment = $resource('/api/comments');
		
		Comment.query(function (results) {
			$scope.comments = results;
		});
		$scope.comments = []
		
	$scope.createComment = function() 
		{
		var comment = new Comment();
		comment.name = $scope.commentName;
		comment.$save(function (result) {
			$scope.comments.push(result);
			$scope.commentName = '';
		});
		//testing purposes
		//$scope.comments.push({ name: $scope.commentName });
		//$scopt.commentName = '';
		}
	}]);

