var app = angular.module('pccApp.services', ['ngResource']);

app.factory('LoginAuthService', function($resource) {
	var url = 'localhost:8080/pcc-backend/loginAuth/:id/:password';
	var params = {user:'@user', password:'@password'};
	var query = {'query' : {methot: 'GET', isArray: true}};
	
	return $resource(url, params, query);
	
	/*return {
		loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
	}*/
});