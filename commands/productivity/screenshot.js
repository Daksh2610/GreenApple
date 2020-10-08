const Discord = require("discord.js");
const request = require('node-superfetch');
module.exports.run = async (bot, message, args) => {

    try {
      if (args.length !== 0) {
        const { body } = await request.get(`https://image.thum.io/get/width/1920/crop/675/noanimate/${args[0]}`);
        return message.channel.send({ files: [{ attachment: body, name: 'screenshot.png' }] });
      } else {
        return message.reply("Command Usage: `screenshot <URL>`")
      }
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };