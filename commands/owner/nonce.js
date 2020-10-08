const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== '707480529343217695') 
         return message.channel.send(`<a:740993518419443742:763749884725428264> You cannot use this command!`)
    try {
      const msg = await message.channel.send(message.nonce);
      msg.edit(`${message.nonce}\nDelivery time: **${msg.createdTimestamp - message.createdTimestamp}**ms.`);
    } catch (error) {
      this.client.logger.error(`Message delivery failed in guild "${message.guild.name}" (${message.guild.id}).`);
    }
  
};

