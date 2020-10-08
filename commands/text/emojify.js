const Discord = require("discord.js");
const { letterTrans } = require('custom-translate');
const dictionary = require('../../assets/json/emojify');

module.exports.run = async (bot, message, args) => {

        try {
            if (!args.length) {
                return message.reply("Command Usage: `emojify <Text>`")
            }

            return message.channel.send(letterTrans(args.join(' '), dictionary, ' '));
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    };
