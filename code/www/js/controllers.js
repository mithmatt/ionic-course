angular.module('songhop.controllers', ['ionic', 'songhop.services'])


/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope, $timeout, User, Recommendations) {

  Recommendations.init()
    .then(function(){
      $scope.currentSong = Recommendations.queue[0];
      Recommendations.playCurrentSong();
    });

  $scope.nextAlbumImg = function() {
    if (Recommendations.queue.length > 1) {
      return Recommendations.queue[1].image_large;
    }
    return '';
  };
  
  $scope.sendFeedback = function(bool) {

    if (bool) User.addSongToFavorites($scope.currentSong);

    $scope.currentSong.rated = bool;
    $scope.currentSong.hide = true;

    // prepare the next song
    Recommendations.nextSong();

    $timeout(function() {
      // $timeout to allow animation to complete
      $scope.currentSong = Recommendations.queue[0];
    }, 250);

    Recommendations.playCurrentSong();

  }
})


/*
Controller for the favorites page
*/
.controller('FavoritesCtrl', function($scope, User) {
  $scope.favorites = User.favorites;

  $scope.removeSong = function(song, index) {
    User.removeSongFromFavorites(song, index);
  };
})


/*
Controller for our tab bar
*/
.controller('TabsCtrl', function($scope, Recommendations) {
  // stop audio when going to favorites page
  $scope.enteringFavorites = function() {
    Recommendations.haltAudio();
  }
  $scope.leavingFavorites = function() {
    Recommendations.init();
  }
});
