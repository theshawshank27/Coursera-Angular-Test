(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope){
   $scope.food = "";
   $scope.message = "";
  $scope.CheckFood = function(){
    if($scope.food == "" || $scope.food == undefined ){
      $scope.message = "Please enter data first" ;
    }else{
      var arr = $scope.food.split(",");
      if(arr.length <= 3 ){
        $scope.message = "Enjoy!";
      }else if(arr.length>3){
        $scope.message = "Too much!";
      }
    }

  }

};
})();
