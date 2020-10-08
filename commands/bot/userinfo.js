const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = async (bot, message, args) => {


	 if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('**<a:740993518419443742:763749884725428264> As you do not have the \"MANAGE MESSAGES\" permission, you cannot use this command!**')
        let member = message.mentions.members.first() || message.member,
            user = member.user;
        let x = Date.now() - user.createdAt; // Since the user created their account.
        let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
        let created = Math.floor(x / 86400000); // 5 digits-zero.
        let joined = Math.floor(y / 86400000);
        let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Created Date
        let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");

        let embed = new Discord.MessageEmbed()
            .setColor("#68b64a")
            .addField(`${user.tag}`, `${user}`)
            .addField("ID:", `${user.id}`)
            .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`)
            .addField("Status:", `${user.presence.status}`)
            .addField("In Server", message.guild.name)
            .addField("Joined At:", `${joindate} \nsince ${joined} day(s) ago`)
            .addField("Created Account At:", `${createdate} \nsince ${created} day(s) ago`)
            .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`)
            .addField("Bot:", `${user.bot}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            .setFooter(user.tag + "'s UserInfo", message.author.displayAvatarURL())
        message.channel.send({ embed });

    };