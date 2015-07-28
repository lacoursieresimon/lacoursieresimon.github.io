angular.module('proximity.services', []);

var SERVER_URL = {
	local: 'http//:localhost:3000',
	dev: 'http://proximitybackend-waverbin.rhcloud.com'
};

var userCheck = true; 				// Used to prevent multiple modal creation
var env = 'local'; 					// Current env
var user = null;					// User data fetched from localcache in LoginController

var socket = null;					// Socket used to open connection to server
var socketUrl = SERVER_URL[env];		// Server URL