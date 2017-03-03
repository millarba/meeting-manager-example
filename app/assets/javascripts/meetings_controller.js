(function(){
  "use strict";

  angular.module("app").controller("meetingsCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get('/api/v1/meetings.json').then(function(response) {
        $scope.meetings = (response.data);
      });
    };

    $scope.toggleSortAttribute = function(attribute) {
      $scope.descending = (attribute !== $scope.sortAttribute) ? false : !$scope.descending;
      $scope.sortAttribute = attribute;
    };

    $scope.createMeeting = function(name, address, startTime, endTime, notes, tags) {
      var params = {
                    name: name,
                    address: address,
                    "start_time": startTime,
                    "end_time": endTime,
                    notes: notes,
                    tags: tags
                    }
      $http.post('/api/v1/meetings.json', params).then(function(response) {
        $scope.meeings.push(response.data);
      });
    };


  });
}());