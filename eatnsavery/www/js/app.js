// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'starter.controllers'])
angular.module('starter', ['ionic', 'starter.controllers', 'ngOpenFB'])
.run(function($ionicPlatform, ngFB) {
	ngFB.init({appId: '1803097819917474'});
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
  .factory('RestaurantsMasterService', function () {

  var restaurants = [
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
  ];

 /* var restaurants = [];
  for (var i=0; i<30; i++) {
    restaurants[i] = {
      id: i,
      'title': 'Name' + i
    };
  }
*/
  return {
    all: function () {
      return restaurants;
    },
    get: function (restaurantsId) {
	//alert(restaurantsId);
      return restaurants[2].id;
    }
  };
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tabs', {
    url: '/tabs',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })

  .state('app.discounts', {
    url: '/discounts',
    views: {
      'menuContent': {
        templateUrl: 'templates/discounts.html'
      }
    }
  })
  
  .state('app.submit', {
    url: '/submit',
    views: {
      'menuContent': {
        templateUrl: 'templates/submit.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.restaurants', {
      url: '/restaurants',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurants.html',
          controller: 'RestaurantsMasterCtrl'
        }
      }
    })

    .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  
  .state('app.single', {
    url: '/restaurants/:restaurantId',
    views: {
      'menuContent': {
        templateUrl: 'templates/restaurant.html',
        controller: 'RestaurantDetailCtrl'
      }
    }

  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/restaurants');
});