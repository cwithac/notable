const app = angular.module('NotesApp', []);

app.controller('MainController', ['$http', function($http){
  
//Variable Assignment
  const controller = this;
  this.formData = {};
  this.notes = [];
  this.showEditField = false;


//READ
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

//CREATE
  this.createNote = function() {
    $http({
      method: 'POST',
      url: '/notes',
      data: {
        content: this.formData.note
      }
    }).then(function(response){
      controller.formData = {};
      controller.getNotes();
    }, function() {
      console.log('error');
    });
  };

//UPDATE
  this.updateNote = function(note) {
    $http({
      method: 'PUT',
      url: '/notes/' + note._id,
      data: {
        content: this.updatedContent
      }
    }).then(
      function(response){
        console.log(controller.updatedContent);
        controller.showEditField = false;
        controller.getNotes();
      },
      function(error) {
        console.log(error);
      }
    )
  };

//DELETE
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

//Angular Functionality
this.showEditFieldForm = function() {
    this.showEditField = true;
  }

//Page Load Calls
this.getNotes();

}]); //end of MainController
