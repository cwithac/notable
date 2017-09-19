angular.module('NotesApp').controller('MainController', ['$http', function($http){

//Variable Assignment
  const controller = this;
  this.formData = {};
  this.userData = {};
  this.notes = [];
  this.showEditField = false;



//READ
  this.getNotes = function() {
    $http({
      method: 'GET',
      url: '/notes',
    }).then(function(response){
      controller.notes = response.data;
    }, function(error) {
      console.log('error', error);
    });
  };

  this.getUsers = function() {
    $http({
      method: 'GET',
      url: '/sessions',
    }).then(function(response){
      controller.allUsers = response.data;
    }, function(error) {
      console.log('error', error);
    });
  };

  this.logoutUser = function() {
    $http({
      method: 'GET',
      url: '/sessions/logout',
    }).then(function(response){
      console.log('log out');
    }, function(error) {
      console.log('error', error);
    });
  };

//CREATE
  this.createNote = function() {
    console.log(this.allUsers);
    // $http({
    //   method: 'POST',
    //   url: '/notes',
    //   data: {
    //     content: this.formData.note
    //   }
    // }).then(function(response){
    //   controller.formData = {};
    //   controller.getNotes();
    // }, function(error) {
    //   console.log('error', error);
    // });
  };

  this.registerUser = function() {
    $http({
      method: 'POST',
      url: '/sessions/register',
      data: {
        username: this.userData.username,
        password: this.userData.password,
        display: this.userData.display
      }
    }).then(function(response){
      controller.userData = {};
      controller.getUsers();
    }, function(error) {
      console.log('error', error);
    });
  };

  this.loginUser = function() {
    $http({
      method: 'POST',
      url: '/sessions/login',
      data: {
        username: this.userData.username,
        password: this.userData.password
      }
    }).then(function(response){
      response.config.data.username = response.data;
      console.log(response.data);
      controller.userData = {};
      controller.getUsers();
    }, function(error) {
      console.log('error', error);
    });
  };

//UPDATE
  this.updateNote = function(note) {
    $http({
      method: 'PUT',
      url: '/notes/' + note._id,
      data: {
        content: note.content
      }
    }).then(
      function(response){
        controller.showEditField = false;
        controller.getNotes();
      },
      function(error) {
        console.log('error', error);
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
