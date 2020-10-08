const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"ADMINISTRATOR\" permission, you cannot use this command!**')
    let link = args.join(" ");
    let imageembed = new Discord.MessageEmbed()
       .setImage(link)
       .setColor("#68b64a")
    message.delete();
    message.channel.send(imageembed);
}
