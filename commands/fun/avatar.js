const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('**<a:740993518419443742:763749884725428264> As you do not have the \"MANAGE MESSAGES\" permission, you cannot use this command.!**')
    let member = message.mentions.members.first() || message.member,
        user = member.user;

let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  // 4096 is the new biggest size of the avatar.
  // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
  // If it's not animated, it will result as a normal image format.
    //let avatarembed = new Discord.MessageEmbed()
        //.setImage(member.user.displayAvatarURL())
        //.setColor("RANDOM")
        message.channel.send(member.user.displayAvatarURL({size: 4096, dynamic: true}));

    return message.channel.send(avatarembed);
}

