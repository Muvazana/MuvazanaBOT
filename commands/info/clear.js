module.exports = {
    name: "clear",
    category: "info",
    description: "Clear message as many args",
    run: async (client, message, args) =>{
        if(!args[0]) return message.reply('ERROR Args Please defind second Args');
        if(message.author.id != 543738538932305930) return message.reply('Sorry you cant use this command');
        message.channel.bulkDelete(args[0]);
    }
}