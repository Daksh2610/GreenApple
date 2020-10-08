// The translate command uses the "@k3rn31p4nic/google-translate-api" module, 
// which is sourced from https://github.com/TheBastionBot/Bastion
// Credit to module owner: https://github.com/k3rn31p4nic

const { MessageEmbed } = require('discord.js');
const translate = require('@k3rn31p4nic/google-translate-api');
module.exports.run = async (bot, message, args) => {

    try {
      if (args.length < 2) {
        return message.reply("Command Usage: `translate <Language> <Text>`")
      }

      const result = await translate(args.slice(1).join(' '), { to: args[0] });

      const embed = new MessageEmbed()
        .setColor('#68b64a')
        .setDescription(result.text)
        .setFooter(`Translation from ${result.from.language.iso.toUpperCase()} to ${args[0].toUpperCase()}`);
      message.channel.send({ embed });
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
