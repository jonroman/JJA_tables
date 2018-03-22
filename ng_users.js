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

    // if (name.length == 0 || address.length == 0 || email.length == 0 || password.length == 0) {
    //   return false;
    // }
    var new_user = { 
      id : $scope.users.length+1,
      name : $scope.name,
      address : $scope.address,
      email : $scope.email,
      password : $scope.password
    }
    $scope.users.push(new_user);
  }

  $scope.deleteUser = function(user_id) {
    console.log("user_id = " + user_id)
    var index = $scope.users.indexOf(user_id)-1;
    $scope.users.splice(index, 1);
  }
});