angular.module('SimpleRESTIonic.controllers', [])

	.value('UserRole', 'StandardUser')
	// .value('isLoggedIn', window.user)

    // .controller('AccountCtrl', function (Backand, $state, $rootScope) {
			// $scope.IsAdmin = function(){
				// return $scope.UserRole == "Admin";
			// }
			// $scope.IsUser = function(){
				// return $scope.UserRole == "StandardUser";
			// }
	// })
    .controller('LoginCtrl', function (Backand, $state, $rootScope, LoginService) {
		var login = this;
		$rootScope.UserRole == "StandardUser";
		$rootScope.isAdmin == false;

			// $rootscope.IsAdmin = function(){
				// return $rootscope.UserRole == "Admin";
			// }
			// $rootscope.IsUser = function(){
				// return $rootscope.UserRole == "StandardUser";
			// }
			
        function signin() {
            LoginService.signin(login.email, login.password)
                .then(function () {
                    onLogin();
                }, function (error) {
                    console.log(error)
                })
        }

        function anonymousLogin(){
            LoginService.anonymousLogin();
            onLogin();
        }

        function onLogin(){
            $rootScope.$broadcast('authorized');
			$rootScope.isAdmin = true;
			//set logged in so stuff should be editable
			//$rootScope.isLoggedIn = GlobalStuff.isLoggedIn;
			checkIsLoggedIn();
		//	angular.element(document.getElementById("loggedin")).addClass('ng-hide');
//			angular.element(document.getElementById("loggedout")).removeClass('ng-hide');
			//$rootScope.isLoggedIn = true;
            $state.go('app.restaurants');
        }
        function checkIsLoggedIn() {
			// console.log("pre change" + isLoggedIn);
			// console.log("post change" + isLoggedIn);
        }
        function signout() {
					console.log("test");
            LoginService.signout()
                .then(function () {
                    //$state.go('tab.login');
					$rootScope.isAdmin = false;
                    $rootScope.$broadcast('logout');
                    $state.go($state.current, {}, {reload: true});
                })

        }

        login.signin = signin;
        login.signout = signout;
        login.anonymousLogin = anonymousLogin;
    })

    .controller('DashboardCtrl', function (ItemsModel, $rootScope) {
        var vm = this;

        function goToBackand() {
            window.location = 'http://www.surve.deals';
        }

        function getAll() {
            ItemsModel.all()
                .then(function (result) {
                    vm.data = result.data.data;
                });
        }

        function clearData(){
            vm.data = null;
        }

        function create(object) {
            ItemsModel.create(object)
                .then(function (result) {
                    cancelCreate();
                    getAll();
                });
        }

        function update(object) {
            ItemsModel.update(object.id, object)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function deleteObject(id) {
            ItemsModel.delete(id)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function initCreateForm() {
            vm.newObject = {name: '', description: '', cost: ''};
        }

        function setEdited(object) {
            vm.edited = angular.copy(object);
            vm.isEditing = true;
        }

        function isCurrent(id) {
            return vm.edited !== null && vm.edited.id === id;
        }

        function cancelEditing() {
            vm.edited = null;
            vm.isEditing = false;
        }

        function cancelCreate() {
            initCreateForm();
            vm.isCreating = false;
        }

        vm.objects = [];
        vm.edited = null;
        vm.isEditing = false;
        vm.isCreating = false;
        vm.getAll = getAll;
        vm.create = create;
        vm.update = update;
        vm.delete = deleteObject;
        vm.setEdited = setEdited;
        vm.isCurrent = isCurrent;
        vm.cancelEditing = cancelEditing;
        vm.cancelCreate = cancelCreate;
        vm.goToBackand = goToBackand;
        vm.isAuthorized = false;

        $rootScope.$on('authorized', function () {
            vm.isAuthorized = true;
            getAll();
        });

        $rootScope.$on('logout', function () {
            clearData();
        });

        if(!vm.isAuthorized){
            $rootScope.$broadcast('logout');
        }

        initCreateForm();
        getAll();

    })
	.controller('AppController', function($scope, $ionicSideMenuDelegate) {
		  $scope.toggleLeft = function() {
			$ionicSideMenuDelegate.toggleLeft();
		  };
		})

		.controller("HomeController", function($scope) {
		  
		})

		.controller("MenuController", function($scope) {
		  
		  $scope.data = {
			items : []
		  };
		  
		  for(var i = 0; i < 25; i++) {
			$scope.data.items.push({
			  id : i,
			  label : "Item " + i
			})
		  }
		  
		})
	.controller('RestaurantCtrl', function(RestaurantsModel, $scope, $routeParams) {
		$scope.current = RestaurantsModel.get($routeParams.id, object);
	})
    .controller('RestaurantsCtrl', function (RestaurantsModel, $scope, $rootScope, $cordovaGeolocation) {
        var vm = this;

        function goToBackand() {
            window.location = 'http://surve.deals';
        }

        function getAll() {
            RestaurantsModel.all()
                .then(function (result) {
                    vm.data = result.data.data;
                });
        }

        function clearData(){
            vm.data = null;
        }

        function create(object) {
            RestaurantsModel.create(object)
                .then(function (result) {
                    cancelCreate();
                    getAll();
                });
        }

        function update(object) {
            RestaurantsModel.update(object.id, object)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function deleteObject(id) {
            RestaurantsModel.delete(id)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function initCreateForm() {
            vm.newObject = {name: '', info: '', imageurl:'', socialmedia: '', socialmedia2: '',addressstreet:'',addresstate:'',addresszipcode:'',phonenumber:'',businesshours:''};
        }

        function setEdited(object) {
            vm.edited = angular.copy(object);
            vm.isEditing = true;
        }

        function isCurrent(id) {
            return vm.edited !== null && vm.edited.id === id;
        }

        function cancelEditing() {
            vm.edited = null;
            vm.isEditing = false;
        }

        function cancelCreate() {
            initCreateForm();
            vm.isCreating = false;
        }

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

        vm.objects = [];
        vm.edited = null;
        vm.isEditing = false;
        vm.isCreating = false;
        vm.getAll = getAll;
        vm.create = create;
        vm.update = update;
        vm.delete = deleteObject;
        vm.setEdited = setEdited;
        vm.isCurrent = isCurrent;
        vm.cancelEditing = cancelEditing;
        vm.cancelCreate = cancelCreate;
        vm.goToBackand = goToBackand;
        vm.isAuthorized = false;

        $rootScope.$on('authorized', function () {
            vm.isAuthorized = true;
            getAll();
        });

        $rootScope.$on('logout', function () {
            clearData();
        });

        if(!vm.isAuthorized){
            $rootScope.$broadcast('logout');
        }

        initCreateForm();
        getAll();

    });

