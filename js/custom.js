var uni=angular.module('oric',[]);

uni.controller('Ctroric', function($scope){
  $scope.Tem = true;
   $scope.Abot=true;
   $scope.Contat = true;
    $scope.Vison=true;
  $scope.About = function() {
    $scope.Abot=true;
  }

  $scope.Vision = function() {
    $scope.Vison=true;
  }

  $scope.Team = function() {
    $scope.Tem = true;
  }

  $scope.Contact = function() {
    $scope.Contat = true;
  }

	
})