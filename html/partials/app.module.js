(function (window) {
    "use strict";

    var app = angular.module('app', [
        'ngCordova',
        'ionic',
        'pages'
    ]);
    window.app = app;

    app.run(function ($ionicPlatform,$state, $ionicHistory, $ionicPopup) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            $ionicPlatform.registerBackButtonAction(function (e) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Confirm Exit',
                    template: "Are you sure you want to close application?"
                });
                confirmPopup.then(function (close) {
                    if (close) {
                        ionic.Platform.exitApp();                                
                    }
                });
            }, 101);
        });
    });
})(window);
