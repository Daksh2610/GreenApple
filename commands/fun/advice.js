const Discord = require('discord.js');
const request = require('node-superfetch');

module.exports.run = async (bot, message, args) => {
    const res = await request.get('http://api.adviceslip.com/advice');
    let advice = JSON.parse(res.body)
  
       
    try {
      message.channel.send(advice.slip.advice)
  
    } catch (err) {
      return message.channel.send(`My API isn't working!\n\`${err.message}\``)
    }
  };
