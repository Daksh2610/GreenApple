const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"MANAGE MESSAGES\" permission, you cannot use this command!**')

  
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      bot.prefix + 9 + args[0] + 1
    );

    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}**`
    );
  };
