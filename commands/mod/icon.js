
const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"MANAGE CHANNELS\" permission, you cannot use this command!**')

    if (!message.guild.available) return this.client.logger.info(`Guild "${message.guild.name}" (${message.guild.id}) is unavailable.`);

    const icon = message.guild.iconURL({
      format: 'png',
      size: 2048
    });

    const embed = new MessageEmbed()
      .setColor('#68b64a')
      .setTitle(`Server icon of ${message.guild.name}`)
      .setImage(icon);
    message.channel.send({ embed });
  };
