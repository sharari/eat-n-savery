angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    var sessions = function () {
        var deffered = $q.defer();
        $http({
          method: 'GET',
          url: 'data.json'
        }).success(function (data, status, headers, config) {
          deffered.resolve(data);
        }).error(function (data, status, headers, config) {
          deffered.reject(status);
        });

        return deffered.promise;
      };
	return {
		all: sessions,
});