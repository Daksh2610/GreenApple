 const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
   if (message.author.id !== '707480529343217695') 
         return message.channel.send(`<a:740993518419443742:763749884725428264> You cannot use this command!`)

    const content = message.content.replace('g!status ', '')
    // "!status hello world" -> "hello world"

    bot.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
  };
  