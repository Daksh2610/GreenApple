  
const dogFacts = require('../../assets/json/dog-fact.json');
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {


    const embed = new MessageEmbed()
      .setColor("#68b64a")
      .setTitle('🐶 | __**Dog Fact**__')
      .setDescription(dogFacts[Math.round(Math.random() * (dogFacts.length - 1))])
    message.channel.send({ embed });
  };