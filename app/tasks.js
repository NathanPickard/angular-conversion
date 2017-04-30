angular.module('app').controller('TasksCtrl', function ($interval) {
  var self = this;

  self.$onInit = function() {
    updateClock();
    var interval = $interval(updateClock, 1000 * 60);
  };


self.$onDestroy = function () {
  $interval.cancel(interval);

}

$scope.deleteTodo = function (todo) {
  $scope.tasks.splice($scope.tasks.indexOf(todo), 1);
};

function updateClock() {
  $scope.formattedTime = new Date().toLocaleTimeString(undefined, {
    hour: 'numeric', minute: '2-digit'
  });
}

angular.module('app').directive('tasks', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/tasks.html',
    controller: 'TasksCtrl',
    scope: {
      tasks: '<'
    }
  }
})
})
