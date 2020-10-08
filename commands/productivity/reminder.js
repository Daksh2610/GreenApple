const Discord = require("discord.js");

const ms = require('ms');


module.exports.run = async (bot, message, args) => {

    try {
      let reminderTime = args[0];

      if (!reminderTime) {
        return message.reply("Command Usage: `reminder <Time (h | min | sec)> <Text>`")
      }

      let reminder = args.slice(1).join(" "); 

      message.channel.send(`☑️ | Got it, ${message.author.username}! I will remind you about **${reminder}** in **${reminderTime}**! *wink*`); 

      setTimeout(function() {
        message.reply(`you wanted me to remind you about: ${reminder}`);
      }, ms(reminderTime));
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };