module.exports = {
    name: "clear",
    category: "info",
    description: "Clear message as many args",
    run: async (client, message, args) =>{
        if(!args[0]) return message.reply('ERROR Args Please defind second Args');
        if(args[0] != "on" && args[0] != "off"){
            if(message.author.id == 543738538932305930 || (message.member.roles.cache.some(role => role.name === 'admin') && process.env.ACCESSCLEAR)){
                message.channel.bulkDelete(args[0]);
            }else return message.reply('Sorry you cant use this command');
        }
        if(args[0] == on && message.author.id == 543738538932305930 && process.env.ACCESSCLEAR == false){
            process.env.ACCESSCLEAR = !process.env.ACCESSCLEAR;
            console.log("ACCESSCLEAR => ", process.env.ACCESSCLEAR);
            return message.reply('Access Clear for admin has been update to ON');
        }else if(args[0] == off && message.author.id == 543738538932305930 && process.env.ACCESSCLEAR == true){
            process.env.ACCESSCLEAR = !process.env.ACCESSCLEAR;
            console.log("ACCESSCLEAR => ", process.env.ACCESSCLEAR);
            return message.reply('Access Clear for admin has been update to OFF');
        }else{
            console.log("ACCESSCLEAR => ", process.env.ACCESSCLEAR);
            return message.reply('Sorry you cant use this command, Update FAIL');
        }
    }
}