module.exports = {
    name: "ping",
    category: "info",
    description: "Return latency and API ping",
    run: async (client, message, args) =>{
        const msg = await message.channel.send(`🏓 Pinging...`);
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
    }
}