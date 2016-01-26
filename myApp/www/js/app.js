// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
<<<<<<< HEAD
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngOpenFB'])
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
angular.module('starter', ['ionic', 'starter.controllers', 'ngOpenFB'])

/*.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '1803097819917474'})*/
//.run(function($ionicPlatform) {
 
.run(function ($ionicPlatform, ngFB) {
	ngFB.init({appId: '1803097819917474'});
 $ionicPlatform.ready(function() {
=======
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngOpenFB'])
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '1803097819917474'});
/*.run(function($ionicPlatform) {*/
  $ionicPlatform.ready(function() {
>>>>>>> origin/master
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('TodoCtrl', function($scope, $ionicModal) {
  /*$ioinicModal.fromTemplateURL('user-modal.html',{
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });
  $scope.openModal = function(){
    $scope.modal.show();
  };
  $scope.closeModal = function(){
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });
  $scope.$on('modal.hidden', function(){
    //Execute action
  });
  $scope.$on('modal.removed', function(){
    //Execute action
  });*/
  $scope.tasks = [
                    {
                        "id":1,
                         "title" : 'Chester Cab Pizza',
                         "iconoff":'ion-ios-photos',
                         "iconon":'ion-ios-photos',
                         "url":'chester',
                         "tabname":"tab-dash",
                         "imageurl":"img/restaurants/chester.png"
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
  $scope.tasks2 = [
    { title: 'Restaurant #A' },
    { title: 'Restaurant #B' },
    { title: 'Restaurant #C' },
    { title: 'Restaurant #D' }
  ];
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
