const {MessageEmbed} = require('discord.js');
module.exports = {
    name: "help",
    category: "info",
    description: "Show the any Commands",
    run: async (client, message, args) =>{
        let helpembed = new MessageEmbed()
            .setColor("#353535")
            .setTitle("Help : ")
            .addField("Command ", ">userinfo @mention => Get User Info\n>help \t=> Show all command BOT")
            .setTimestamp();
        message.channel.send(helpembed);
    }
}