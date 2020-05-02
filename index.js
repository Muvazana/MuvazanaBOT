const {Client, Collection} = require('discord.js');
const {config} = require('dotenv');
// const bot = new client.Client();

const client = new Client({
    disableMentions: "everyone"
});

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on('ready', () =>{
    console.log(`I am now online, my name is ${client.user.username}`);

    client.user.setPresence({
        status: "online",
        activity: {
            name: "Me getting Developed",
            type: "WATCHING"
        }
    })
})

client.on('message', async message =>{
    const prefix = '>';

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.member.fetch(message)

    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command)
        command.run(client, message, args);
});

// client.on('message', message =>{
//     const prefix = '>';
//     let args = message.content.substring(prefix.length).split(" ");
//     switch(args[0]){
//         case 'userinfo':
            // let person = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[1]));
            // if(!person) return message.reply("Couldn't find member (please fill next args with mention)");
            // let infoembed = new Discord.MessageEmbed()
            //     .setColor(person.displayHexColor)
            //     .setTitle("Info : ")
            //     .setAuthor(person.user.username)
            //     .addField("Full Username ", `${person.user.username}#${person.user.discriminator}`)
            //     .addField("ID ", person.user.id)
            //     .setThumbnail(person.user.displayAvatarURL())
            //     .setTimestamp();
            // message.channel.send(infoembed);
//             break;
//         case 'clear' :
//             if(!args[1]) return message.reply('ERROR Args Please defind second Args');
//             if(message.author.id != 543738538932305930) return message.reply('Sorry you cant use this command');
//             message.channel.bulkDelete(args[1]);
//             break;
//         case 'server' :
//             setInterval({
                
//             },);
//             break;
//         case 'help' :
//             let helpembed = new Discord.MessageEmbed()
//                 .setColor(person.displayHexColor)
//                 .setTitle("Help : ")
//                 .addField("Command ", ">userinfo @mention => Get User Info\n>help \t=> Show all command BOT")
//                 .setTimestamp();
//             message.channel.send(helpembed);
//             break;
//     }
// })

client.login(process.env.TOKEN);