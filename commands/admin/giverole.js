const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`<a:740993518419443742:763749884725428264> As you do not have the \"Manage Roles\" permission, you cannot use this command!`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("Incorrect usage, It's `<username  or user id> <role name or id>").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('User already has that role').then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Role Name: ${roleName.name}`)
                 .setDescription(`${message.author} has successfully given the role ${roleName} to ${member.user}`)
                 .setColor('#68b64a')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send('Try to give a role that exists next time...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    };
