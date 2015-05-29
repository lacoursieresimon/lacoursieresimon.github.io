var baseApi = 'https://platformstratus.cloud.coveo.com/rest/';
var bearer = 'efc8043a-e311-4c14-8060-51412e3c1912';
var actualWorkgroup = "demolundi";

angular.module('starter.services', [])

.factory('Workgroups', function($http){
  var workgroups = null;
  
  var all = function(){
    if (workgroups === null){
      return $http({method: 'GET', url: baseApi + 'workgroups', headers: {'Authorization': 'Bearer '+ bearer}}).then(function(resp) {
        workgroups = resp.data;
        for (var i = 0; i < workgroups.length; i++) {
              workgroups[i].selected = workgroups[i].id === actualWorkgroup;
        }
        return workgroups;
      });
    }
    else{
      return workgroups;
    }
  };
  
  var setCurrentWorkgroup = function(id){
    actualWorkgroup = id;
  };
  
  var get = function(id){
    for (var i = 0; i < workgroups.length; i++) {
            if (workgroups[i].id === id) {
              return workgroups[i];
          }
      }
      return null;
  };
  return {
       all: all,
       get:get,
       setCurrentWorkgroup:setCurrentWorkgroup
  };
})

.factory('Sources', function($http){
  var sources = null;
  
  var all = function(){
    if (sources === null){
      return $http({method: 'GET', url: baseApi + 'workgroups/' + actualWorkgroup + '/sources', headers: {'Authorization': 'Bearer '+ bearer}}).then(function(resp) {
        
      for (var i = 0; i < resp.data.length; i++) {
        if (resp.data[i].sourceType === "WEB"){
          resp.data[i].sourceIcon = "ion-android-laptop";
        }
        else if (resp.data[i].sourceType === "GMAIL"){
          resp.data[i].sourceIcon = "ion-android-globe";
        }
        else if (resp.data[i].sourceType === "SALESFORCE"){
           resp.data[i].sourceIcon = "ion-android-cloud-outline";
        }
        else{
           resp.data[i].sourceIcon = "ion-social-buffer";
        }
        
        if (resp.data[i].sourceVisibility === "SECURED"){
          resp.data[i].visibilityIcon = "ion-person";
        }
        else if (resp.data[i].sourceVisibility === "SHARED"){
          resp.data[i].visibilityIcon = "ion-person-stalker";
        }
        else{
          resp.data[i].visibilityIcon = "ion-locked";
        }
      }
        sources = resp.data;
        return resp.data;
      });
    }
    else{
      return sources;
    }
  };
  
  var setCurrentWorkgroup = function(args){
    actualWorkgroup = args;
  };
  
  var getCurrentWorkgroup = function(args){
    return actualWorkgroup;
  };
  
  var get = function(id){
        	for (var i = 0; i < sources.length; i++) {
            if (sources[i].id === id) {
              return sources[i];
          }
      }
      return null;
    };
    
  return {
        all: all,
        get:get,
        reset:function(){ sources = null; },
        setCurrentWorkgroup:setCurrentWorkgroup,
        getCurrentWorkgroup:getCurrentWorkgroup
  };
})

.factory('Users', function($http){
  var users = null;
  
  var all = function(){
    if (users === null){
      return $http({method: 'GET', url: baseApi + 'workgroups/' + actualWorkgroup, headers: {'Authorization': 'Bearer '+ bearer}}).then(function(resp) {
        users = resp.data.workgroupUsers;
        return users;
      });
    }
    else{
      return users;
    }
  };
  
  var get = function(userEmail){
        	for (var i = 0; i < users.length; i++) {
            if (users[i].userEmail === userEmail) {
              return users[i];
          }
      }
      return null;
    };
    
  return {
        all: all,
        get:get,
        reset:function(){ users = null; }
  };
})

.factory('Servers', function($http){
  var servers = null;
  
  var all = function(){
    if (servers === null){
      return $http({method: 'GET', url: baseApi + 'aws/instances/agents', headers: {'Authorization': 'Bearer '+ bearer}}).then(function(resp) {
        
        for (var i = 0; i < resp.data.entity.length; i++) {
          resp.data.entity[i].platformIcon = resp.data.entity[i].platform === "windows" ? "ion-social-windows" : "ion-social-tux";
          resp.data.entity[i].stateIcon = resp.data.entity[i].instanceState === "running" ? "ion-play icon-green" : "ion-stop icon-red";
        }
        
        servers = resp.data.entity;
        return servers;
      });
    }
    else{
      return servers;
    }
  };
  
  var get = function(id){
        	for (var i = 0; i < servers.length; i++) {
            if (servers[i].id === id) {
              return servers[i];
          }
      }
      return null;
    };
    
  return {
        all:all,
        get:get,
        reset:function(){ servers = null; }
  };
})

.factory('Results', function($http){
  var results = null;
  
  var all = function(searchTerm){
      searchTerm = (searchTerm === "" || searchTerm === null ? "" : searchTerm);
      return $http({
        method: 'POST', 
        url: baseApi + 'search/?workgroupName=' + actualWorkgroup + '&errorsAsSuccess=1', 
        headers: {'Authorization': 'Bearer '+ bearer,
        'Content-Type': 'application/x-www-form-urlencoded' },
        data: 'q=' + searchTerm + '&firstResult=0&numberOfResults=100&excerptLength=200&filterField=&enableDidYouMean=true&sortCriteria=relevancy&queryFunctions=%5B%5D&rankingFunctions=%5B%5D&groupBy=%5B%7B%22field%22%3A%22%40source%22%2C%22maximumNumberOfValues%22%3A6%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%7D%2C%7B%22field%22%3A%22%40objecttype%22%2C%22maximumNumberOfValues%22%3A6%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%7D%2C%7B%22field%22%3A%22%40filetype%22%2C%22maximumNumberOfValues%22%3A6%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%7D%2C%7B%22field%22%3A%22%40author%22%2C%22maximumNumberOfValues%22%3A6%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%7D%2C%7B%22field%22%3A%22%40year%22%2C%22maximumNumberOfValues%22%3A6%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%7D%2C%7B%22field%22%3A%22%40month%22%2C%22maximumNumberOfValues%22%3A6%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%7D%5D&retrieveFirstSentences=true&timezone=America%2FNew_York&enableDuplicateFiltering=false'
        }).then(function(resp) {
        
        results = resp.data.results;
        return results;
      });
  };
  
  var get = function(clickUri){
        	for (var i = 0; i < results.length; i++) {
            if (results[i].clickUri === clickUri) {
              return results[i];
          }
      }
      return null;
    };
    
  return {
        all:all,
        get:get,
        reset:function(){ results = null; }
  };
});
