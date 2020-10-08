const Discord = require("discord.js");



exports.run = async (bot, message, args, level) => {
 if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"MANAGE CHANNELS\" permission, you cannot use this command!**')
 const name = message.content.replace('g!createvoicechannel ', '')

     message.guild.channels
      .create(name, {
        type: 'voice',
      })
      .then((channel) => {
        const categoryId = '719799253706342421'
        channel.setParent(categoryId)
        channel.setUserLimit(10)
        return message.channel.send(
            "<a:745271406018822176:763778429585064540> Created Voice Channel."
         )
      })
  };


