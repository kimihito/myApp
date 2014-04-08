var module = angular.module('starter.services', []);

/**
 * A simple example service that returns some data.
 */

module.factory('VideoService', function($http){
  var videos = $http.get('http://p.medokoro.com/today.json').then(function(response){
    return response.data;
  });


  return {
    all: function(){
      return videos;
    }
  }
});
