const app = angular.module('QuotesApp', []);

app.controller('MainController', ['$http', function($http){

  const controller = this;

  this.getQuotes = function() {
    $http({
      method: 'GET',
      url: '/quotes',
    }).then(function(response){
      console.log(response);
      controller.quotes = response.data;
    }, function() {
      console.log('error');
    });
  };

  this.createQuote = function() {
    $http({
      method: 'POST',
      url: '/quotes',
      data: {
        quote: this.quote,
        character: this.character
      }
    }).then(function(response){
      console.log(response);
      controller.getQuotes();
    }, function() {
      console.log('error');
    });
  };

this.getQuotes(); //page load

}]); //end of MainController
