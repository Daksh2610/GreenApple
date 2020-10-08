const Discord = require("discord.js");
const request = require('node-superfetch');

module.exports.run = async (bot, message, args) => {
		try {
			const { body } = await request
			.get('https://shibe.online/api/birds')
			.query({
				count: 1,
				urls: true,
				httpsUrls: true
			});
			return message.channel.send({ files: [body[0]] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
		}
	};
