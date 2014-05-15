angular.module('jlareau.pnotify', [])

  .provider('notificationService', [ function() {

    var settings = {
      styling: 'bootstrap3'
    };

    this.setDefaults = function(defaults) { settings = defaults };

    this.$get = [ function() {

      return {

        /* ========== SETTINGS RELATED METHODS =============*/

        getSettings: function() {
          return settings;
        },

        /* ============== NOTIFICATION METHODS ==============*/

        notice: function(content) {
          var hash = angular.copy(settings);
          hash.type = 'notice';
          hash.text = content;
          return this.notify(hash);
        },

        info: function(content) {
          var hash = angular.copy(settings);
          hash.type = 'info';
          hash.text = content;
          return this.notify(hash);
        },

        success: function(content) {
          var hash = angular.copy(settings);
          hash.type = 'success';
          hash.text = content;
          return this.notify(hash);
        },

        error: function(content) {
          var hash = angular.copy(settings);
          hash.type = 'error';
          hash.text = content;
          return this.notify(hash);
        },

        notifyWithDefaults: function(hash) {
          var settings = angular.copy(settings);
          return this.notify(angular.extend(settings, hash));
        },

        notify: function(hash) {
          return new PNotify(hash);
        }

      };

    }];

  }]);
