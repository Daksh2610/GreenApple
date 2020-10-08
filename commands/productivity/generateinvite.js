
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('**  <a:740993518419443742:763749884725428264> As you do not have the \"MANAGE CHANNELS\" permission, you cannot use this command!**')
    try {
      let uses = args[0]
      let age = args[1]

      let invite = await message.channel.createInvite({
        maxAge: age * 60,
        maxUses: uses 
      });

      await message.channel.send('Heyo.\n'
        + 'If you wanna invite friends to this server, share the following invite'
        + ' link with your friends.\n' +
        `https://discord.gg/${invite.code}`);
      } catch (err) {
        return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
      }
  };
