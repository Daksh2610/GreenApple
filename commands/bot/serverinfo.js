  
const Discord = require("discord.js");

const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};
module.exports.run = async (bot, message, args) => {


	 if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('**<a:740993518419443742:763749884725428264> As you do not have the \"MANAGE MESSAGES\" permission, you cannot use this command.!**')
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;

		  const embed = new Discord.MessageEmbed() 
			.setDescription(`**Guild information for __${message.guild.name}__**`)
			.setColor('#68b64a')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField(' <a:5564_Loading_Color:763653959293861899>  **__General__**  <a:5564_Loading_Color:763653959293861899>', [
				`** <a:752795653884739665:763656904969814068> Name:** ${message.guild.name}`,
				`** <a:752795653884739665:763656904969814068> ID:** ${message.guild.id}`,
				`** <a:752795653884739665:763656904969814068> Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
				`** <a:752795653884739665:763656904969814068> Region:** ${regions[message.guild.region]}`,
				`** <a:752795653884739665:763656904969814068> Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
				`** <a:752795653884739665:763656904969814068> Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
				`** <a:752795653884739665:763656904969814068> Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
				`** <a:752795653884739665:763656904969814068> Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b'
			])
			.addField(' <a:5564_Loading_Color:763653959293861899>  **__Statistics__**  <a:5564_Loading_Color:763653959293861899>', [
				`** <a:752795653884739665:763656904969814068> Role Count:** ${roles.length}`,
				`** <a:752795653884739665:763656904969814068> Emoji Count:** ${emojis.size}`,
				`** <a:752795653884739665:763656904969814068> Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
				`** <a:752795653884739665:763656904969814068> Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
				`** <a:752795653884739665:763656904969814068> Member Count:** ${message.guild.memberCount}`,
				`** <a:752795653884739665:763656904969814068> Humans:** ${members.filter(member => !member.user.bot).size}`,
				`** <a:752795653884739665:763656904969814068> Bots:** ${members.filter(member => member.user.bot).size}`,
				`** <a:752795653884739665:763656904969814068> Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
				`** <a:752795653884739665:763656904969814068> Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`** <a:752795653884739665:763656904969814068> Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
				'\u200b'
			])
			.addField(' <a:5564_Loading_Color:763653959293861899>  **__Presence__**  <a:5564_Loading_Color:763653959293861899>', [
				`** <:9852_Online_Status:763653234564792320>   Online:** ${members.filter(member => member.presence.status === 'online').size}`,
				`** <:9693_Idle_Status:763653253291573268>   Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`** <:6290_DND_Status:763653294575976479>   Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`** <:9487_Offline_Status:763653271104782356>   Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
				'\u200b'
			])
			//.addField(` <a:bluestar:760578340515217418> **__Roles__**  <a:bluestar:760578340515217418> [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None')
			.setTimestamp();
		message.channel.send(embed);
	};
