const {MessageEmbed} = require('discord.js');
module.exports = {
    name: "userinfo",
    category: "info",
    description: "Return User Info",
    run: async (client, message, args) =>{
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[1]));
        if(!person) return message.reply("Couldn't find member (please fill next args with mention)");
        let infoembed = new MessageEmbed()
            .setColor(person.displayHexColor)
            .setTitle("Info : ")
            .setAuthor(person.user.username)
            .addField("Full Username ", `${person.user.username}#${person.user.discriminator}`)
            .addField("ID ", person.user.id)
            .setThumbnail(person.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send(infoembed);
    }
}