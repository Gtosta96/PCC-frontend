var app = angular.module('pccApp.controllers', ['pccApp.controllers.userController']);

//Funções comuns

function go ($state, tela) {
	$state.go(tela);
};

function callbackError(error) {
	console.log("Ocorreu um erro: %o", error);
};

ngFB.login({scope: 'email'}).then(
        function (response) {
            if (response.status === 'connected') {
                ngFB.api({
                    path: '/me',
                    params: {fields: 'id, first_name, last_name, email, picture'}
                }).then(
                    function (user) {
                        console.log(user);
                        $scope.user.email = user.email;
                        $scope.user.first_name = user.first_name;
                        $scope.user.last_name = user.last_name;
                        $scope.user.id_facebook = user.id;
                        $scope.user.photo_facebook = user.picture.data.url;
                    },
                    function (error) {
                        alert('Facebook error: ' + error.error_description);
                });
            } else {
                alert('Facebook login failed');
            }
        });