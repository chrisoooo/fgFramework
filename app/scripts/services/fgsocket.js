'use strict';

/**
 * @ngdoc service
 * @name wsdcApp.fgSocket
 * @description
 * # fgSocket
 * Provider in the wsdcApp.
 */
angular.module('fg', [])
  .provider('fgSocket', function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    /*function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }*/

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    var socket = null;

    var url = null;

    this.setUrl = function (value){
      url = value;
      try{
      socket = io.connect(value);
      }catch(i){}
    };

    // Method for instantiating
    this.$get = function ($rootScope) {
      // return new Greeter();
      return {
        on: function (eventName, callback) {
          socket.on(eventName, function () {  
            var args = arguments;
            callback.apply(socket, args);
            $rootScope.$apply();
          });
        },
        emit: function (eventName, data, callback) {
          socket.emit(eventName, data, function () {
            var args = arguments;
            if (callback) {
              callback.apply(socket, args);
              $rootScope.$apply();
            }
          });
        }
      };
    };
  });
