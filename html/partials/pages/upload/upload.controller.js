(function(){
    "use strict";

    var uploadController = function($scope,$timeout,$ionicPopup) {
     
      $scope.images=[];

      $scope.onFail = function onFail(message) {
        if(message.toUpperCase()!='CAMERA CANCELLED.'){
          var alertPopup = $ionicPopup.alert({
            title: 'Failed because: ' +message
          });
        }
        else
        {
          var alertPopup = $ionicPopup.alert({
            title: 'try again'
          });
        }
      }
      
      $scope.getImageFromGallary=function(){
        $scope.images=[];
        window.imagePicker.getPictures(
          function(results) {
            $timeout(function(){
              if(results.length){
                $scope.images = results;
              }
            }, 100);
          }, function (error){
              $scope.onFail(error)
              alert(error)
          }, {
              maximumImagesCount: 10,
              quality:50
          }
        );
      }

    };
    angular.module('pages') 
    .controller('uploadController', uploadController);

})();
    

