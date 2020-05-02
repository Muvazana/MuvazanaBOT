module.exports = {
    name: "clear",
    category: "info",
    description: "Clear message as many args",
    run: async (client, message, args) =>{
        if(!args[1]) return message.reply(args[1]+" <= s");
        if(message.author.id != 543738538932305930) return message.reply('Sorry you cant use this command');
        message.channel.bulkDelete(args[1]);
    }
}