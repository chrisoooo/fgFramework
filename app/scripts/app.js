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
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$viewContentLoaded', function () {
      var url = $location.url(), $ngView = $('[ng-view]');

      if(url.match(/gis$/) || url.match(/gpsSupervison$/)){
        $ngView.removeClass('default');
      }else{
        $ngView.addClass('default');
      }

    });
  }]);
