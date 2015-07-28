angular.module('proximity.services').factory('Conversations', function() {

  
  var conversations = [];
  
  var get = function(id) {
      // NOTE : id may be a GUID so parseInt() might be irrelevant
      return _.find(conversations, function(conversation){ return conversation.id === parseInt(id); });
    };
    
    var remove = function(id) {
      conversations.splice(conversations.indexOf(get(id)), 1);
      // TODO : send message to server ?
    };
    
    var all = function() {
      // Some fake testing data (sent from server)
      conversations = [
      {
        id: 1,
        users: [
          user, 
          { id: 4, name: "Martin Rancourt", type: "NATIVE", picture: 'https://avatars2.githubusercontent.com/u/2197856?v=3&s=460' }
        ],
        messages: [
          { from: 0, content: { text: "Yo!" }, timestamp: new Date('2015-08-26T11:51:00'), read: true },
          { from: 4, content: { text: "Sup?!" }, timestamp: new Date('2015-08-26T11:51:21'), read: true },
          { from: 0, content: { text: "Just dev'd an awesome UI using Ionic?!" }, timestamp: new Date('2015-08-26T11:51:45'), read: true },
          { from: 4, content: { text: "That's nice!!" }, timestamp: new Date('2015-08-26T11:52:10'), read: true }
        ],
      },
      {
        id: 0,
        users: [
          user, 
          { id: 5, name: "Mark Zuckerberg", type:"WEB" }
        ],
        messages: [
          { from: 5, content: { text: "Hey!" }, timestamp: new Date('2015-08-26T11:51:00'), read: true },
          { from: 0, content: { text: "What's up ?!" }, timestamp: new Date('2015-08-26T11:51:21'), read: true },
          { from: 5, content: { text: "nothing much, you?!" }, timestamp: new Date('2015-08-26T11:51:45'), read: true },
          { from: 0, content: { text: "Just bought a new car!!" }, timestamp: new Date('2015-08-26T11:52:10'), read: false }
        ],
      },
      {
        id: 2,
        users: [
          user, 
          { id: 3, name: "Simon Lacoursiere", type: "NATIVE", picture: 'https://avatars1.githubusercontent.com/u/6420656?v=3&s=460' }
        ],
        messages: [
          { from: 3, content: { text: "Hey!" }, timestamp: new Date('2015-08-26T11:51:00'), read: false },
          { from: 3, content: { text: "What's up ?!" }, timestamp: new Date('2015-08-26T11:51:21'), read: false },
          { from: 3, content: { text: "you there?" }, timestamp: new Date('2015-08-26T11:51:45'), read: false },
          { from: 3, content: { text: "???" }, timestamp: new Date('2015-08-26T11:52:10'), read: false }
        ],
      }];
      // NOTE : Store edited conversations or keep them as sent from the server ?
      conversations = _.each(conversations, function(conv){ return _.extend(conv, { users: _.filter(conv.users, function(u){ return u.id != user.id; }) }); });
      return conversations;
      
      // TODO : Fill with data from localstorage
      // TODO : Get Unread messages from server
    };
    
    // TODO
    var getHistory = function(userId) {
      var messagesQty = 15;
      // TODO : Find timestamp from the oldest message in the current conversation
      // TODO : Load X messages from a conversation starting from a certain timestamp
    };
    
    // TODO
    var sendMessage = function(conversation, content) {
      // TODO : Add to current conversation
      // TODO : Add to localstorage
      // TODO : Emit message to server
    };
    
    // TODO
    var receiveMessage = function(message){
      // TODO : Add to valid conversation
      // TODO : Add to localstorage
    }
    
    // TODO
    var setRead = function(messageId){
      // TODO : Set read in cache
      // TODO : Emit message to server
    };
    
  return {
    all: all,
    remove: remove,
    get: get
  };
});