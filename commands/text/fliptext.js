const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const flipText = require('../../assets/json/fliptext.json');


module.exports.run = async (bot, message, args) => {


    try {
      if (!args.length) {
        return message.reply("Command Usage: `fliptext <Text>`")
      }

      args = args.join(' ');
      for (let i = 0; i < Object.keys(flipText).length; i++) {
        args = args.replace(Object.keys(flipText)[i], flipText[Object.keys(flipText)[i]]);
      }

      const embed = new MessageEmbed()
        .setColor("#68b64a")
        .setTitle("__**ɟlᴉddǝp ʇǝxʇ:**__")
        .setDescription(args.split('').reverse().join(''))
      await message.channel.send({ embed });
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
