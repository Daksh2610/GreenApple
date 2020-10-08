
const { MessageEmbed } = require("discord.js");



module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"MANAGE MESSAGES\" permission, you cannot use this command!**')

    const member = message.mentions.members.first();
    if (!member) return message.channel.send('Command Usage: `lastmessage <@user>`');

    const lastMsg = message.guild.member(member).lastMessage;
    if (!lastMsg) return message.channel.send("This user's last message could not be found, or they simply may not have sent any messages here.");
                
    const embed = new MessageEmbed()
      .setColor(message.guild.member(member).displayColor)
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      .setDescription(`*${lastMsg}*`)
      .setFooter(`#${message.channel.name}`)
      .setTimestamp();
    message.channel.send({ embed });
  };
