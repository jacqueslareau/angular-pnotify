angular-pnotify
====================

This is a simple wrapper for [PNotify](http://sciactive.com/pnotify/) as a [AngularJS](http://angularjs.org/) service. 
This service provides several helper methods to display notifications on web applications.

A PNotify 2.0 port heavily based on [angular-pines-notify](https://github.com/mykabam/angular-pines-notify) project. 

### Requirements

- [JQuery](http://jquery.com/)
- [PNotify](http://sciactive.com/pnotify/)
- [AngularJS](http://angularjs.org/)
- [Bootstrap 3](http://getbootstrap.com)
- [FontAwesome](http://fontawesome.io) optional

### Demo

[Check out the demo here!](https://cdn.rawgit.com/jacqueslareau/angular-pnotify/0.0.2/demo/index.html)

### Install

`bower install angular-pnotify`

### Usage

Include:

```html
<link rel="stylesheet" href="bower_components/pnotify/pnotify.core.css">
<script src="bower_components/angular-pnotify/src/angular-pnotify.js"></script>
```

Add the angular-pnotify module as a dependency to your application module:

```javascript
angular.module('MyApp', ['jlareau.pnotify']);
```

In order to use the API you need to inject the `pnotify` service into your controllers. 
From there you can use one of the many different service methods.

### Methods

#### info

Display an info notice.

`notificationService.info(text);`

#### notice

Display notification as a notice.

`notificationService.notice(text);`

#### error

Display an error notice.

`notificationService.error(text);`

#### success

Display a success notice.

`notificationService.success(text);`

#### notify

Display a generic PNotify notification with the options you pass to it. It ignores defaults.

`notificationService.notify(options);`

#### notifyWithDefaults

Same as `notify` but will merge the options with defaults. Useful when you only want to override or add one options, without 
clearing all defaults.

`notificationService.notifyWithDefaults(options);`

### Provider

Sometimes you want to set defaults for the whole application. You can do so in your module's config.

```javascript
angular.module('MyApp')
  .config(['notificationServiceProvider', function(notificationServiceProvider) {

    notificationServiceProvider.setDefaults({
      history: false,
      delay: 4000,
      closer: false,
      closer_hover: false
    });

  }]);
```

### Examples:

```javascript
angular.module('MyApp')
  .controller('MyCtrl', ['$scope', notificationService,function($scope, notificationService) {

    $scope.action = function() {
      // This is a sample using the success helper method
      notificationService.success('This is a success notification');
    };

    $scope.anotherAction = function() {
      // This is a sample using the generic PNotify notification object
      notificationService.notify({
        title: 'Notice Title',
        text: 'Notice Text',
        hide: false
      });
    };
    
  }]);
```

### Options

All the PNotify options can be passed through the notify functions.
You can read more about the supported list of options and what they do on the
[PNotify Github Page](https://github.com/sciactive/pnotify)

### Thanks

To the [angular-pines-notify](https://github.com/mykabam/angular-pines-notify) contributors:

- [mykabam](https://github.com/mykabam)
- [valmy](https://github.com/valmy)
- [mibamur](https://github.com/mibamur)
- [MaximilianoRicoTabo](https://github.com/MaximilianoRicoTabo)