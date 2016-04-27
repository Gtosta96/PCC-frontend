var app = angular.module('pccApp.services.cookiesService', ['ngCookies']);

app.factory('CookiesService', function($cookies) { 
	return {
		setUser: setUser,
        getUser: getUser,
        isLoggedIn: isLoggedIn,
        removeUser: removeUser
    };
    
    function setUser(user) {
        return $cookies.put('user', JSON.stringify(user));
    }
    
    function getUser() {
        return $cookies.getObject('user');
    }
    
    function removeUser() {
        $cookies.remove('user');
    }
    
    function isLoggedIn() {
        var user = $cookies.getObject('user');

        if(typeof user === "object"){
            return true;
        }
        return false;
    }
});