var app = angular.module('App', []);

app.service('dataService', ['$http', function($http) {

  var url = 'https://tamanishi.net/rebuildshownotesfilter/episodes.json'

  this.getEpisodes = function() {
    return $http.get(url);
  };

}]);

app.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getEpisodes()
    .then(function(response) {
      $scope.episodes = response.data.episodes;
    }, function(error) {

    });
}]);
