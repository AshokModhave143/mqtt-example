var mqtt    = require("mqtt");
var client  = mqtt.connect("mqtt://test.mosquitto.org",{clientId:"mqttjs01"});
client.on("connect",function(){	
console.log("connected");
});
client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});

