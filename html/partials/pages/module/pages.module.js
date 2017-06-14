(function(){
    "use strict";

	angular.module('pages',[]);

	var Routes = function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('upload',
    {
        cache:false,
        url:'/upload',
        templateUrl:'partials/pages/upload/upload.html',
        controller: 'uploadController'
    })
    $urlRouterProvider.otherwise('/upload');

    };
       angular.module('pages')
        .config(Routes).value();
 })();

