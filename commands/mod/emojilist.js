const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"MANAGE EMOJIS\" permission, you cannot use this command!**')

    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
      .setDescription(
        `**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Over all emojis [${OverallEmojis}]**`
      )
      .setColor(`#68b64a`);
    message.channel.send(Embed);
  };