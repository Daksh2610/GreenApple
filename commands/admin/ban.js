  
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
       if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"Ban Members\" permission, you cannot use this command!**')
        
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(`${member} has been banned!`)
        } catch (e) {
            return message.channel.send(`User is not in the server!`)
        }

    };
    
