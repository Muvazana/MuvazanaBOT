const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA1MTk2NzA3NzU5MjU5NzA3.Xqq1Ow.Wl65L7AB6yd_KdZtRin1WztMU-s';
const PREFIX = '>';
bot.on('ready', () =>{
    console.log('Bot has been ONLINE');
})

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'userinfo':
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[1]));
            if(!person) return message.reply("Couldn't find member (please fill next args with mention)");
            let infoembed = new Discord.MessageEmbed()
                .setColor('#00ff44')
                .setTitle("Info : ")
                .setAuthor(person.user.username)
                .addField("Full Username ", `${person.user.username}#${person.user.discriminator}`)
                .addField("ID ", person.user.id)
                .setThumbnail(person.user.displayAvatarURL())
                .setTimestamp();
            message.channel.send(infoembed);
            break;
        case 'clear' :
            if(!args[1]) return message.reply('ERROR Args Please defind second Args');
            if(message.author.id != 543738538932305930) return message.reply('Sorry you cant use this command');
            message.channel.bulkDelete(args[1]);
            break;
        case 'help' :
            let helpembed = new Discord.MessageEmbed()
                .setColor('#353535')
                .setTitle("Help : ")
                .addField("Command ", ">userinfo @mention => Get User Info\n>help \t=> Show all command BOT")
                .setTimestamp();
            message.channel.send(helpembed);
            break;
    }
})

bot.login(token);