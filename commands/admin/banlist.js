const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.guild.available) return this.client.logger.info(`Guild "${message.guild.name}" (${message.guild.id}) is unavailable.`);
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"Ban Members\" permission, you cannot use this command!**')
    message.guild.fetchBans()
    .then(bans => {
      const obj = bans.map(b => ({
        user: `${c.username}#${c.discriminator}`
      }));
      const bList = Array.from(obj);
      if (bList.length < 1) return message.author.send(`There are no banned users on **${message.guild.name}**.`);
      let index = 0;

      message.author.send(`__**Ban List for ${message.guild.name}**__\n${bList.map(bl => `**${++index} -** ${bl.user}`).join("\n")}`);
      message.react("✅");
    });
  };