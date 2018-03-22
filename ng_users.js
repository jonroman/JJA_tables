// Angularjs
var app = angular.module('jonny-app', []);
app.controller('iron-man-controller', function($scope) {
  $scope.title = 'Angularjs (1.6)';
  $scope.subtitle = 'featuring bootstrap 4';
  $scope.name;
  $scope.address;
  $scope.email;
  $scope.password;
  var usersNG = [
    {
      id : 1,
      name : "Yellow Roman",
      address : "123 Yellow brick road",
      email : 'yellow@color.com',
      password : 'cleartext:)'
    },
    {
      id : 2,
      name : "Purple Roman",
      address : "123 Purple brick road",
      email : 'purple@color.com',
      password : 'cleartextpassword:)'
    }
  ];
  $scope.users = usersNG;

  $scope.addUser = function() {

    if ($scope.name == undefined || $scope.address == undefined || $scope.password == undefined) {
      return false;
    }
    var new_user = { 
      id : $scope.users.length+1,
      name : $scope.name,
      address : $scope.address,
      email : $scope.email == undefined ? "*** invalid email ***" : $scope.email,
      password : $scope.password
    }

    $scope.users.push(new_user);
    $scope.name = '';
    $scope.address = '';
    $scope.email = '';
    $scope.password = '';
  }

  $scope.deleteUser = function(user_id) {
    $scope.users.forEach(function(item, index) {
      if(item.id == user_id) {
        $scope.users.splice(index, 1);
      }
    });
  }
});