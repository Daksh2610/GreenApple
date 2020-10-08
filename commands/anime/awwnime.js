
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    try {
      randomPuppy('awwnime')
      .then(url => {
        const embed = new MessageEmbed()
          .setFooter(`awwnime`)
          .setDescription(`[Image URL](${url})`)
          .setImage(url)
          .setColor('#68b64a')
        return message.channel.send({ embed })
      })
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };

