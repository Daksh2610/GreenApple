const Discord = require("discord.js");
const tsun = require('../../assets/json/tsundere');



module.exports.run = async (bot, message, args) => {

    return message.channel.send(tsun[Math.round(Math.random() * (tsun.length - 1))]);
  };
