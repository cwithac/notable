angular.module('NotesApp').directive('main', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/main.html',
    controller: 'MainController',
    controllerAs: 'mainCtrl'
  };
});
