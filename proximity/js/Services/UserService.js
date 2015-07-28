angular.module('proximity.services').factory('Users', function() {
	// Some fake testing data
  
  var users = [
  { id: 0, name: 'Adam Bradleyson', type: 'NATIVE', picture: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg' }, 
  { id: 1, name: 'Max Lynx', type: 'WEB' }, 
  { id: 2, name: 'Ben Sparrow', type: 'WEB' }, 
  { id: 3, name: 'Simon Lacoursiere', type: 'NATIVE', picture: 'https://avatars1.githubusercontent.com/u/6420656?v=3&s=460', }, 
  { id: 4, name: 'Martin Rancourt', type: 'NATIVE', picture: 'https://avatars2.githubusercontent.com/u/2197856?v=3&s=460' }
  ];
  
    var get = function(id) {
      return _.find(users, function(user){ return user.id == parseInt(id); });
    };
    
    // TODO : On server message to remove user (too far or disconnected)
    var remove = function(id) {
      users.splice(users.indexOf(get(id)), 1);
    };
    
    var all = function() {
      // TODO : Load data from server (connected users near the user using GPS data)
      return users;
    };
    
  return {
    all: all,
    get: get,
    remove:remove
  };
});