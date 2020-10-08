const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"KICK MEMBERS\" permission, you cannot use this command!**')
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.kick();
            await message.channel.send(`${member} has been kicked!`)
        } catch (e) {
            return message.channel.send(`User isn't in this server!`)
        }

    };
