
const { MessageEmbed } = require('discord.js');
const fetch = require("node-superfetch");
module.exports.run = async (bot, message, args) => {
 
    try {
      const query = args.join(" ");
      if (!args.length) {
        return message.reply("Command Usage: `urban <Query>`")
      }

      fetch(`http://api.urbandictionary.com/v0/define?term=${query}`)
      .then(res => res.json())
      .then(json => {
        const data = json.list[0];
        const definition = data.definition.replace(/[[\]]+/g, "");
        const example = data.example.replace(/[[\]]+/g, "");
        const embed = new MessageEmbed()
          .setColor('#68b64a')
          .setAuthor("Urban Dictionary", "https://vgy.me/ScvJzi.jpg")
          .setDescription(`Displaying Urban Dictionary definition for "**${data.word}**"\n<${data.permalink}>`)
          .addField("» Definition", `**${definition.substring(0, 1000)}...**`)
          .addField("» Example", `${example.substring(0, 1000)}...`)
          .setFooter(`Definition 1 of ${json.list.length}`)
          .setTimestamp()
        return message.channel.send({ embed });
      })
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
