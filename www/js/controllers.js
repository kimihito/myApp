angular.module('starter.controllers', [])

// A simple controller that fetches a list of data from a service
.controller('VideoIndexCtrl', function($scope, VideoService) {
  // "Pets" is a service returning mock data (services.js)
  VideoService.all().then(function(d){
    $scope.pets = d;
  });
})

// A simple controller that shows a tapped item's data
.controller('VideoDetailCtrl', function($scope, $stateParams, VideoService) {
  // "Pets" is a service returning mock data (services.js)
  VideoService.all().then(function(d){
    angular.forEach(d, function(value, key){
      if (value.id == $stateParams.petId){
        $scope.pet = value
      }
    });

  });

  $scope.play = function(url){
    window.open(url, '_blank', 'location=yes');
  };

  $scope.shareTwitter = function(pet){
    var title = pet.title;
    var url = pet.url;

    var provider = '';
    if(pet.provider == 'niconico'){
      provider = ' #' + pet.videoid;
    }else{
      provider = ' #' + pet.provider;
    }


    //タイトルと140字にする

    while((title+url+provider).length > 137 ){
      title = title.slice(0,-1);
    }

    if(title != pet.title){
      title += '...';
    }

    if(title.length < 5){
      title = '';
    }

    window.plugins.socialsharing.shareViaTwitter(title+provider, pet.thumbnail, url);
  };

  $scope.shareFacebook = function(pet){
    window.plugins.socialsharing.shareViaFacebook(pet.title, pet.thumbnail, pet.url, function(){}, function(e){});

  };
})

.controller('VideoProviderCtrl', function($scope, $stateParams, VideoService){
  VideoService.all().then(function(d){
    $scope.pets = [];
    angular.forEach(d, function(value, key){
      if($stateParams.provider == value.provider){
        $scope.pets.push(value);
      }
    });

  });
})

.controller('VideoYoutubeCtrl', function($scope, $stateParams, VideoService){
  $scope.navTitle = 'Youtube'

  VideoService.all().then(function(d){
    $scope.pets = [];

    angular.forEach(d, function(value, key){
      if(value.provider == 'youtube'){
        $scope.pets.push(value);
      }
    });
  });
})

.controller('VideoFC2Ctrl', function($scope, $stateParams, VideoService){
  $scope.navTitle = 'FC2'

  VideoService.all().then(function(d){
    $scope.pets = [];

    angular.forEach(d, function(value, key){
      if(value.provider == 'fc2'){
        $scope.pets.push(value);
      }
    });
  });
})

.controller('VideoNiconicoCtrl', function($scope, $stateParams, VideoService){
  console.log('NiconicoCtrl');

  $scope.navTitle = 'Niconico';
  VideoService.all().then(function(d){
    $scope.pets = [];
    angular.forEach(d, function(value, key){
      if(value.provider == 'niconico'){
        console.log(value);
        $scope.pets.push(value);
      }
    });
  });

})

.controller('VideoVimeoCtrl', function($scope, $stateParams, VideoService){
  $scope.navTitle = 'Vimeo';
  VideoService.all().then(function(d){
    $scope.pets = [];
    angular.forEach(d, function(value, key){
      if(value.provider == 'vimeo'){
        $scope.pets.push(value);
      }
    });
  });
});
