const Discord = require("discord.js");
const request = require('node-superfetch');
module.exports.run = async (bot, message, args) => {

    try {
        const number = args[0];
        if (!number) return message.channel.send("Command Usage: `number-fact <Number>`");
        const { text } = await request.get(`http://numbersapi.com/${number}`);
        return message.channel.send(text);
    } catch (err) {
        if (err.status === 404) return message.channel.send('Could not find any results.');
        return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
