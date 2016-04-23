angular.module('anova.services', [])
.
factory('socket', function (socketFactory) {
	const IP = "http://192.168.100.241:80";
  var myIoSocket =io.connect(IP);
  mySocket = socketFactory({
    ioSocket: myIoSocket
  });

  return mySocket;
})
.factory('AnovaSocket', function(localStorageService, socket) {
	
	var humidityThreshold = localStorageService.get("humidityThreshold") || 100;
	var temperatureThreshold = localStorageService.set("temperatureThreshold") || 100;
	socket.on('ACK', function() {
		console.log('ACK');
	});
	return {
		getIP: function() {
			return IP;
		}
	};
});