const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"ADMINISTRATOR\" permission, you cannot use this command!**')
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(`**You did not mention a user, or you gave an invalid id.**`);
        if(!args.slice(1).join(" ")) return message.channel.send("**You did not specify your message**");
        user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("**The user could not be DMed!**")).then(() => message.channel.send(`Sent a message to ${user.user.tag}`))
  
   };