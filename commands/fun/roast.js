const Discord = require("discord.js");
const roasts = require('../../assets/json/roast');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() || message.author;
    return message.channel.send(`${user.username}, ${roasts[Math.floor(Math.random() * roasts.length)]}`);
  };
