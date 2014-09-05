'use strict';

/**
 * @ngdoc function
 * @name wsdcApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wsdcApp
 */
angular.module('wsdcApp')
  .controller('LoginCtrl', ['$scope','$location','Restangular','fgMessenger',
  	function ($scope,$location,Rest,fgMessenger) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.login = function(){
    	Rest.all('login').post($scope.user).then(function(data){
            if(!data.success){
                fgMessenger.post({message: data.msg,type: 'error',showCloseButton: true });  
                return;
            }
            fgMessenger.post({message: data.msg,type: 'success',showCloseButton: true });
            $location.path('IllegalRecord');
        });
    };
  }]);
