angular.module('proximity.controllers')
.controller('ConversationController', function ($scope, $http, Conversations) {
    $scope.$on('connected', function(event, args) {
        $scope.conversations = Conversations.all();
    });
    
    if (user != null){
        $scope.conversations = Conversations.all();
    }
    
    $scope.remove = function(conversation) {
        Conversations.remove(conversation);
    };
    
}).controller('ConversationDetailController', function ($scope, $stateParams, $http, Conversations) {
    
    $scope.conversation = Conversations.get($stateParams.id);
    $scope.message = '';
    
    $scope.sendMessage = function(message){
        // TODO : Send to server and receive message id ?
        $scope.conversation.messages.push({ from: user.id, content: { text: message }, timestamp: new Date(), read: false });
        // TODO : Add to localStorage
        $scope.message = '';
    };
});