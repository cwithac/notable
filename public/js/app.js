const app = angular.module('QuotesApp', []);

app.controller('MainController', ['$http', function($http){

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
    }, function() {
      console.log('error');
    });
  }

}]); //end of MainController
