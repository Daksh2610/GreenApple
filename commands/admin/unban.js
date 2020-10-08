const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
   if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('** <a:740993518419443742:763749884725428264>  As you do not have the \"BAN MEMBERS\" permission, you cannot use this command.!**')
        const member = args[0];

        if (!member) {
             return message.channel.send(`Please enter a id!`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member} has been unbanned!`)
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

    };
