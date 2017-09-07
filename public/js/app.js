const app = angular.module('NotesApp', []);

app.controller('MainController', ['$http', function($http){

  const controller = this;

  this.getNotes = function() {
    $http({
      method: 'GET',
      url: '/notes',
    }).then(function(response){
      console.log(response);
      controller.notes = response.data;
    }, function() {
      console.log('error');
    });
  };

  this.createNote = function() {
    $http({
      method: 'POST',
      url: '/notes',
      data: {
        note: this.note,
        character: this.character
      }
    }).then(function(response){
      console.log(response);
      controller.getNotes();
    }, function() {
      console.log('error');
    });
  };

this.getNotes(); //page load

}]); //end of MainController
