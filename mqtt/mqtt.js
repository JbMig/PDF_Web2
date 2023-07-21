import mqtt from 'mqtt';
import fetch from 'node-fetch';
import config from "config";

const brokerUrl = 'mqtt://mqtt.arcplex.fr';
const port = 2295;
const topic = 'groupe4/packet/#';

const client = mqtt.connect(brokerUrl, {
    port,
    username: 'groupe4',
    password: 'IdK6h4een7lf',
});

client.on('connect', () => {
    client.subscribe([topic], function (err) {
        if (err) {
            console.log(topic, err)
        }
    })
});

client.on('message', (topic, message) => {
    const msg = message.toString()
    processMessage(msg, topic);
});

function processMessage(message, topic) {
    const url = config.get('api');
    const data = {
        message: message,
        topic: topic
    }
    console.log(topic, data);
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                console.log('Message sent', url);
                return response.json()
            } else {
                console.error('Message not sent:', url);
            }
        })
        .then(data => {
            console.log('JSON:', data);
        })
        .catch(error => {
            console.error('Error while sending message', url, error);
        });
}

export function sendMessage(topic, message) {
    client.publish(topic, message);
}
