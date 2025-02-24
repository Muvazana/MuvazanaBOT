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

    const args = message.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command)
        command.run(client, message, args);
});

client.login(process.env.TOKEN);