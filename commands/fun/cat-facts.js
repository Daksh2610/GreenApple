
const catFacts = require('../../assets/json/cat-fact.json');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const embed = new MessageEmbed()
      .setColor("#68b64a")
      .setTitle(' <a:4050_Roll_Kitten_Cat:763673913455542293> | __**Cat Fact**__')
      .setDescription(catFacts[Math.round(Math.random() * (catFacts.length - 1))])
    message.channel.send({ embed });
  };
