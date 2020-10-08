const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('**  <a:740993518419443742:763749884725428264>  As you do not have the \"ADMINISTRATOR\" permission, you cannot use this command.!**')
  
  
    let text = args.join(" ");
   // let botlogo = client.user.displayAvatarURL();
    let sayembed = new Discord.MessageEmbed()
        .setDescription(text)
        .setColor('#68b64a')
        .setThumbnail(message.guild.iconURL({ dynamic: true}))
        .setTimestamp() 
        //.setThumbnail(botlogo)
    message.delete();
    message.channel.send(sayembed);
};
