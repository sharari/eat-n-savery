angular.module('starter.controllers', ['ngOpenFB'])

.controller('AppCtrl', function($scope, $http, $ionicModal, $timeout, ngFB, $location, RestaurantsMasterService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

		
	$scope.getData = function() {
		console.log("HELLO WORLD");
		/*$http.get('http://eat-n-savery.heroku.com//restaurants.json', function(data){
		console.log(data);
		})
	    .success(function(data) {
//            $scope.firstname = data.firstname;
//            $scope.lastname = data.lastname;
        })
        .error(function(data) {
            alert("ERROR");
        });
		*/
		var url = "eat-n-savery.heroku.com";
    var sub = "/restaurants.json";

		$http({
			method: 'JSON',
			url: url
		}).
		success(function(status) {
			//your code when success
      console.log("getData() success!!!!!");
		}).
		error(function(status) {
      console.log("getData() failed");
			//your code when fails
		});
		
    }
	$scope.getData();
	$scope.fbLogin = function () {
    ngFB.login({scope: 'email'}).then(
        function (response, $state) {
            if (response.status === 'connected') {
				$location.path('app/profile');
				angular.element(document.getElementById("loggedin")).addClass('ng-hide');
				angular.element(document.getElementById("loggedout")).removeClass('ng-hide');
				console.log('Facebook login succeeded');
				$scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
	};
	  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('DiscountsCtrl', function($scope, $http) {
  /*$scope.dis = [
  
  
                      {
                        "id":1,
                         "title" : 'Jines Restaurant',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/jines.png"
                    },
                    {
						
                        "id":5,
                         "title" : 'Chester Cab Pizza',
                         "iconoff":'ion-ios-photos',
                         "iconon":'ion-ios-photos',
                         "url":'chester',
                         "tabname":"tab-dash",
                         "imageurl":"img/restaurants/chester.png",
						 "admins":[
							 "joe@aol.com",
							 "bob@aol.com",
							 "joe@aol.com",
						 ],
                    },
                    {
                        "id":2,
                         "title" : 'Deli Sandros',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/deli1.png"
                    },
                    {
                        "id":3,
                         "title" : 'Han Noodle Bar',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/hans.png"
                    },
                    {
                        "id":4,
                         "title" : 'Hogans Hideaway',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/hogans.png"
                    },
                    {
                        "id":6,
                         "title" : 'Mozzeroni',
                         "iconoff":'ion-android-star-half',
                         "iconon":'ion-android-star-half',
                         "url":'top5',
                         "tabname":'tab-top5',
                         "imageurl":"img/restaurants/mozzeroni.png"
                    }
  ];*/
})

.controller('RestaurantsMasterCtrl', function($scope, $http, RestaurantsMasterService, $ionicScrollDelegate, $ionicHistory) {
			console.log('hello data');




  $scope.$on('$ionicView.afterLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeEnter', function(){
    //$ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.afterEnter', function(){
    $ionicHistory.clearCache();
  });

  $scope.restaurants = RestaurantsMasterService.all();

  $scope.scrollBottom = function() {
    $ionicScrollDelegate.scrollBottom(true);
  };

/*  $scope.restaurants = [
                    {
                        "id":1,
                         "title" : 'Chester Cab Pizza',
                         "iconoff":'ion-ios-photos',
                         "iconon":'ion-ios-photos',
                         "url":'chester',
                         "tabname":"tab-dash",
                         "imageurl":"img/restaurants/chester.png",
						 "admins":[
							 "joe@aol.com",
							 "bob@aol.com",
							 "joe@aol.com",
						 ],
                    },
                    {
                        "id":2,
                         "title" : 'Deli Sandros',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/deli1.png"
                    },
                    {
                        "id":3,
                         "title" : 'Hans',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/hans.png"
                    },
                    {
                        "id":4,
                         "title" : 'Hogans Hideaway',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/hogans.png"
                    },
                    {
                        "id":5,
                         "title" : 'Jines Restaurant',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/jines.png"
                    },
                    {
                        "id":6,
                         "title" : 'Mozzeroni',
                         "iconoff":'ion-android-star-half',
                         "iconon":'ion-android-star-half',
                         "url":'top5',
                         "tabname":'tab-top5',
                         "imageurl":"img/restaurants/mozzeroni.png"
                    }
  ]; */
})


.controller('RestaurantDetailCtrl', function($scope, $stateParams, $cordovaGeolocation,  RestaurantsMasterService) {
  $scope.restaurant = RestaurantsMasterService.get($stateParams.petsId);
  console.log("HELLO");
 var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }, function(error){
    console.log("Could not get location");
  });  
});