angular.module('NotesApp').controller('MainController', ['$http', '$scope', function($http, $scope){

//Variable Assignment
  const controller = this;
  this.formData = {};
  this.notes = [];
  this.showEditField = false;

  this.registerUserData = {};
  this.loginUserData = {};
  $scope.currentUser = {};
  this.displayName = '';

  this.loggedInUser = false;
  this.showRegister = false;
  this.showLogin = false;
  this.displayNote = false;

//READ
  this.getNotes = function() {
    console.log('current user', $scope.currentUser);
    if($scope.currentUser == undefined){
      console.log('$scope.currentUser is undefined');
    } else {
      $http({
        method: 'GET',
        url: '/notes',
      }).then(function(response){
        controller.notes = response.data;
        // console.log($scope.currentUser._id);
        for (let i = 0; i < controller.notes.length; i++) {
          if($scope.currentUser._id == controller.notes[i].user[0]._id){
            // console.log(controller.notes[i].user[0]._id);
            controller.notes[i].displayNote = true;
            // console.log(controller.notes[i].displayNote);
          }
        }
        console.log('all notes for this user', controller.notes);
      }, function(error) {
        console.log('error', error);
      });
    }
  };

  this.findCurrentUser = function() {
    $http({
      method: 'GET',
      url: '/sessions/confirmLogin',
    }).then(function(response){
      $scope.currentUser = response.data;
      controller.loggedInUser = true;
      console.log('User is logged in: ', controller.loggedInUser);
      controller.displayName = response.data.display
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
      controller.loggedInUser = false;
    }, function(error) {
      console.log('error', error);
    });
  };

//CREATE
  this.createNote = function() {
    this.findCurrentUser();
    // console.log($scope.currentUser);
    $http({
      method: 'POST',
      url: '/notes',
      data: {
          content: this.formData.note,
          user: $scope.currentUser
      }
    }).then(function(response){
      // console.log('note created by ' + response.data.user[0].display);
      controller.formData = {};
      controller.getNotes();
    }, function(error) {
      console.log('error', error);
    });
  };

  this.registerUser = function() {
    $http({
      method: 'POST',
      url: '/sessions/register',
      data: {
        username: this.registerUserData.username,
        password: this.registerUserData.password,
        display: this.registerUserData.display
      }
    }).then(function(response){
      controller.loginUserData = {
        username: controller.registerUserData.username,
        password: controller.registerUserData.password
      }
      controller.loginUser();
      controller.registerUserData = {};
    }, function(error) {
      console.log('error', error);
    });
  };

  this.loginUser = function() {
    $http({
      method: 'POST',
      url: '/sessions/login',
      data: {
        username: this.loginUserData.username,
        password: this.loginUserData.password
      }
    }).then(function(response){
      controller.loggedInUser = response.data;
      controller.loginUserData = {};
      controller.findCurrentUser();
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

this.showRegistrationFormOnly = function() {
  this.showRegister = true;
  this.showLogin = false;
}

this.showLoginFormOnly = function() {
  this.showRegister = false;
  this.showLogin = true;
}

//Page Load Calls
// this.getNotes();

}]); //end of MainController
