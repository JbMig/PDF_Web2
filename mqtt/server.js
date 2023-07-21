import Fastify from 'fastify';
import process from 'process';
import { sendMessage } from "./mqtt.js";
const fastify= Fastify({
    logger: true
})

fastify.post('/sensor', (request, reply) => {
    const data = request.body;
    const gatewayId = data.gatewayId;
    const topic = `groupe4/request/${gatewayId}`
    const message = {
        cmd_id: Math.floor(Math.random() * (1000000 - 1)) + 1,
        destination_address: data.nodeId,
        ack_flags: 0,
        cmd_type: data.cmdType,
    };

    console.log(message);
    reply.code(200).send({ message: 'Received' });
    sendMessage(topic, JSON.stringify(message));
})

fastify.get('/', async function handler (request, reply) {
    const messages = {
        source_address :"c4274269-a723-496f-9a56-2caa1ca36513",
        sensor_id :100,
        tx_time_ms_epoch :1689890334,
        data: {"persons":0}
    }
    sendMessage('groupe4/packet/c4274269-a723-496f-9a56-2caa1ca36513/563f95cb-a542-49fd-84f2-c28ccf88c87a/100', JSON.stringify(messages));
})


try {
    await fastify.listen({ port: 8585 });
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}