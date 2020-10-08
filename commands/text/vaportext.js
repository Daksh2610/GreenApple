const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
      if (!args.length) return message.channel.send("Command Usage: `vaportext <Text>`");

      let msg = "";
      for (let i = 0; i < args.length; i++) {
        msg += args[i].toUpperCase().split("").join(" ") + "   ";
      }

      return message.channel.send(msg);
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
