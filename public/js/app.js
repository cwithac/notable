const app = angular.module('NotesApp', []);

app.controller('MainController', ['$http', function($http){

  const controller = this;

  this.getNotes = function() {
    $http({
      method: 'GET',
      url: '/notes',
    }).then(function(response){
      // console.log('response.data', response.data);
      controller.notes = response.data;
    }, function(error) {
      console.log('error', error);
    });
  };

  this.createNote = function() {
    $http({
      method: 'POST',
      url: '/notes',
      data: {
        content: this.note
      }
    }).then(function(response){
      // console.log('created', response);
      controller.getNotes();
    }, function() {
      console.log('error');
    });
  };

  this.updateNote = function(note) {
    $http({
      method: 'PUT',
      url: '/notes/' + note._id,
      data: {
        content: this.updatedContent
      }
    }).then(
      function(response){
        // console.log('updated', controller.updatedContent);
        controller.getNotes();
      },
      function(error) {
        console.log(error);
      }
    )
  };

  this.deleteNote = function(note) {
    $http({
      method: 'DELETE',
      url: '/notes/' + note._id
    }).then(
      function(response) {
        controller.getNotes();
      },
      function(error) {
        console.log(error);
      }
    )
  };

this.getNotes(); //page load

}]); //end of MainController
