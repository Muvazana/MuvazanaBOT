module.exports = {
    name: "clear",
    category: "info",
    description: "Clear message as many args",
    run: async (client, message, args) =>{
        if(!args[0]) return message.reply('ERROR Args Please defind second Args');

        if((message.author.id == 543738538932305930 || (message.member.roles.cache.find("name", "admin") && process.env.ACCESSCLEAR) && args[1] != "on" && args[1] != "off")){
            message.channel.bulkDelete(args[0]);
        }else return message.reply('Sorry you cant use this command');
        if(args[1] == on && message.author.id == 543738538932305930 && process.env.ACCESSCLEAR == false){
            process.env.ACCESSCLEAR = !process.env.ACCESSCLEAR
            return message.reply('Access Clear for admin has been update to ON');
        }else if(args[1] == off && message.author.id == 543738538932305930 && process.env.ACCESSCLEAR == true){
            process.env.ACCESSCLEAR = !process.env.ACCESSCLEAR
            return message.reply('Access Clear for admin has been update to OFF');
        }else{
            return message.reply('Sorry you cant use this command, Update FAIL');
        }
    }
}