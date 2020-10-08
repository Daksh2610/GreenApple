const Discord = require("discord.js");
const request = require('node-superfetch');


module.exports.run = async (bot, message, args) => {
    try {
        const { text } = await request.get('http://www.neverhaveiever.org/randomtext.php');
        return message.channel.send(text.match(/<h1>(.+)<\/h1>/i)[1].replace(/<\/br>/g, ''));
    } catch (err) {
        return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };
