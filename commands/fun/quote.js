
const { MessageEmbed } = require('discord.js');
const quotes = require('../../assets/json/quotes.json');
const total = Object.keys(quotes).length

module.exports.run = async (bot, message, args) => {

    try {
      if (args[0]) {
        if (args[0] > total) return message.channel.send('This command has 241 quotes, your number was higher than this amount!');
        let quote = args[0];

        const embed = new MessageEmbed()
          .setAuthor(quote.author)
          .setDescription(quote.quote)
          .setFooter(`Quote Number ${args[0]}`)
          .setColor('#68b64a')
        message.channel.send({ embed });
      } else {
        let random = Math.floor(Math.random() * total + 1);
        let quote = quotes[random];

        const embed = new MessageEmbed()
          .setAuthor(quote.author)
          .setDescription(quote.quote)
          .setFooter(`Quote Number ${random}`)
          .setColor('#68b64a')
        message.channel.send({ embed });
      }
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
