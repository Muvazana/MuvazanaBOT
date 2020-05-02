module.exports = {
    name: "ss",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    description: "Return latency and API ping",
    usage: "<input>",
    run: async (client, message, args) =>{
        message.channel.send("ss");
    }
}