'use strict';

/**
 * @ngdoc overview
 * @name wsdcApp
 * @description
 * # wsdcApp
 *
 * Main module of the application.
 */
angular
  .module('wsdcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gis', {
        templateUrl: 'views/gis.html',
        controller: 'GisCtrl'
      })
      .when('/videoSupervison', {
        templateUrl: 'views/videosupervison.html',
        controller: 'VideosupervisonCtrl'
      })
      .when('/gpsSupervison', {
        templateUrl: 'views/gpssupervison.html',
        controller: 'GpssupervisonCtrl'
      })
      .when('/videoMantain', {
        templateUrl: 'views/videomantain.html',
        controller: 'VideomantainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (RestangularProvider){
    RestangularProvider.setBaseUrl('/java');
  })
  .run(['$rootScope', '$location', 'fgMessenger', function ($rootScope, $location, fgMessenger) {
    $rootScope.$on('$viewContentLoaded', function () {
      //切换视图时关闭所有 Messagebox
      fgMessenger.hideAll();

      var url = $location.url(), $ngView = $('[ng-view]');

      if(url.match(/gis$/) || url.match(/gpsSupervison$/) || url.match(/videoSupervison$/)){
        $ngView.removeClass('default');
      }else{
        $ngView.removeClass('default');
        // $ngView.addClass('default');
      }

    });
  }]);
