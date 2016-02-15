var app = angular.module('angularFriends');


app.controller('FriendController', function($scope, $http) {
  $scope.friends = [];
	$http.get('friend-data.json')
    .then(function(response) {
      $scope.friends = response.data;
    }, function(response) {
      console.log('error');
    });

$scope.sort = [
    {name: 'name', value: 'name'},
    {name: 'friends', value: 'friend_count'},
    {name: 'city', value: 'current_location.city'},
    {name: 'state', value: 'current_location.state'},
    {name: 'country', value: 'current_location.country'}
  ];

  $scope.ascDesc = [
    {name: 'ascending', value: false},
    {name: 'descending', value: true}
  ];
  $scope.sortType = 'name';
  $scope.sorter = false;
  
  });
