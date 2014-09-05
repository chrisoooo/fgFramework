'use strict';

/**
 * @ngdoc service
 * @name wsdcApp.fgMessenger
 * @description
 * # fgMessenger
 * Provider in the wsdcApp.
 */
angular.module('wsdcApp')
  .provider('fgMessenger', function () {

    // Private variables
    // var salutation = 'Hello';

    var instance = window.Messenger({
      theme: 'flat'
      // ,extraClasses: 'messenger-fixed messenger-on-right messenger-on-top'
    });

    // Private constructor
    /*function Klass() {
      this.get = function () {
        return instance;
      };

      this.hideAll = function (){
        instance.hideAll();
      };
    }*/

    // Public API for configuration
    /*this.setOptions = function (s) {
      instance.options = s;
    };*/

    // Method for instantiating
    this.$get = function ($rootScope) {

      instance.confirm = function (options) {
        //判断参数是否提供 actions 配置, 且 options.actions 是 object
        if ( _.has(options, 'actions') && _.isObject(options.actions) ){
          var actions = options.actions, newActions = {};

          _.each(actions, function (value, key){
            var label = _.has(value, 'label') ? value.label : key,
                action = (_.has(value, 'action') && _.isFunction(value.action)) ? value.action : angular.noop;

            newActions[key] = {
              label: label,
              action: function (){
                action.apply(this, arguments);
                this.hide();
                $rootScope.$apply();
              }
            };
          });

          options.actions = newActions;
        }
        instance.post.apply(instance, [options]);
      };

      return instance;
    };
  });
