angular.module('NotesApp').directive('user', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/user.html',
    controller: 'MainController',
    controllerAs: 'mainCtrl'
  };
});
