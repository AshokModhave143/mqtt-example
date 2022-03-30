const express = require('express');
const app = express();
const ngrok = require('ngrok');


app.get('/', (req, res) => {
    res.send('Hello World I am running locally');
});

const server = app.listen(8080, () => {
    console.log('Running at 8080');
});

ngrok.connect({
    proto : 'http',
    addr : 8080,
}, (err, url) => {
    if (err) {
        console.error('Error while connecting Ngrok',err);
        return new Error('Ngrok Failed');
    }
});


// mosquitto_pub -p 1883 -h 921aff66e498.ngrok.io -t "drive-in" -m "Drive in..."
// /usr/local/sbin/mosquitto -c mosquitto.conf -p 1883
// mosquitto_sub -p 1883 -h h921aff66e498.ngrok.io -t "drive-in"
