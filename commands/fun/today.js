
const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');

module.exports.run = async (bot, message, args) => {


    try {
      const res = await request.get('http://history.muffinlabs.com/date');
      const data = JSON.parse(res.body)
      const source = data.data['Events']
      const event = source[Math.round(Math.random() * (source.length - 1))]

      const embed = new MessageEmbed()
        .setAuthor(`Historical Event from ${data.date}, ${event.year}`)
        .setColor('#68b64a')
        .setDescription(event.text)
        .addField('<a:752795653884739665:763656904969814068>\u2000\Information', `•\u2000\**Year:** ${event.year}\n\•\u2000\**External Link${event.links.length !== 1 ? 's' : ''}:** ${event.links.map(l => `[${l.title}](${l.link})`).join(', ')}`)
      message.channel.send({ embed });
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
	};
