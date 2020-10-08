
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const subreddits = require("../../assets/json/meme");

module.exports.run = async (bot, message, args) => {

    try {
      let randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

      randomPuppy(randSubreddit)
      .then(url => {
        const embed = new MessageEmbed()
          .setFooter(`${randSubreddit}`)
          .setDescription(`[Image URL](${url})`)
          .setImage(url)
          .setColor('#68b64a');
        return message.channel.send({ embed });
      })
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
