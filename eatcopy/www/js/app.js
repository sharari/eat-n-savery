// Ionic template App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'SimpleRESTIonic' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('SimpleRESTIonic', ['ionic', 'ngCordova','backand', 'SimpleRESTIonic.controllers', 'SimpleRESTIonic.services', 'ui.router'])
	 //Update Angular config section in /www/js/app.js


	  .config(function (BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
		  BackandProvider.setAppName('surve');
		  BackandProvider.setSignUpToken('3b06e193-9c7a-4f0b-beae-ee6ffd260ceb');
		  BackandProvider.setAnonymousToken('0e9aae6f-4e74-431b-8e3c-866d99901cc7');
	  })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function (BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

        BackandProvider.setAppName('surve'); // change here to your app name
        BackandProvider.setSignUpToken('3b06e193-9c7a-4f0b-beae-ee6ffd260ceb'); //token that enable sign up. see http://docs.backand.com/en/latest/apidocs/security/index.html#sign-up
        BackandProvider.setAnonymousToken('0e9aae6f-4e74-431b-8e3c-866d99901cc7'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access

        $stateProvider
			.state('app', {
			  url: "/app",
			  abstract: true,
			  templateUrl: "templates/menu.html"
			})
			.state('app.login', {
			  url: "/login",
				views: {
					'appContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl as login'
					}
				}
			})
			.state('app.profile', {
			  url: "/profie",
				views: {
					'appContent': {
                        templateUrl: 'templates/profile.html'
					}
				}
			})
			.state('app.restaurants', {
			  url: "/home",
				views: {
					'appContent': {
						templateUrl: 'templates/restaurants_user.html',
						controller: 'RestaurantsCtrl as vm'
					}
				}
			})
			.state('app.restaurant', {
				url: '/restaurant/:id',
				views: {
				  'appContent': {
					templateUrl: 'templates/restaurant.html',
					controller: 'RestaurantsCtrl as vm'
				  }
				}
			})
			.state('app.discounts', {
			  url: "/discounts",
				views: {
					'appContent': {
                        templateUrl: 'templates/discounts_user.html',
                        controller: 'DashboardCtrl as vm'
					}
				}
            })
			.state('app.restaurantowner', {
			  url: "/restaurantowner",
				views: {
					'appContent': {
						templateUrl: 'templates/restaurant_owner.html',
						controller: 'RestaurantsCtrl as vm'
					}
				}
			})
			.state('app.discountsowner', {
			  url: "/discountsowner",
				views: {
					'appContent': {
                        templateUrl: 'templates/discounts_owner.html',
                        controller: 'DashboardCtrl as vm'
					}
				}
            });
		// $urlRouterProvider.
			// .when('/person/diner', {templateUrl: 'templates/dashboard-user.html'})
			// .when('/person/user', {templateUrl: 'templates/dashboard.html'})
			// .when('/person/user/:userid', {templateUrl: 'templates/dashboard.html'})
		$urlRouterProvider.otherwise("/app/home");	
        $httpProvider.interceptors.push('APIInterceptor');
    })

    .run(function ($rootScope, $state, LoginService, Backand) {

        function unauthorized() {
            console.log("user is unauthorized, sending to login");
			$rootScope.isLoggedIn = true;
            $state.go('tab.login');
        }

        function signout() {
			$rootScope.isLoggedIn = false;
            LoginService.signout();
        }

        $rootScope.$on('unauthorized', function () {
            unauthorized();
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if (toState.name == 'tab.login') {
                signout();
            }
            else if (toState.name != 'tab.login' && Backand.getToken() === undefined) {
                unauthorized();
            }
        });

    })