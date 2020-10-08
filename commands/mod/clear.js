const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('**  <a:740993518419443742:763749884725428264> As you do not have the \"MANAGE MESSAGES\" permission, you cannot use this command! **')
    let amount = message.content.split(' ').slice(1)
    if (amount.length == 0) return message.channel.send(' <a:740993518419443742:763749884725428264>  You forgot to Enter number of messages to delete')
    amount = parseInt(amount) + 1;
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<a:rip:728518284193955841> You need MANAGE_MESSAGES permission to perform this command')
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:rip:728518284193955841>I dont have the right permission")
    if (isNaN(amount)) return message.channel.send("<a:rip:728518284193955841> That is not a valid number of messages to delete")
    if (amount < 1 || amount >= 100) return message.channel.send('<a:rip:728518284193955841> The inputted number of messages cannot be deleted')
    message.channel.bulkDelete(amount, true).catch(err => {
        message.channel.send('Err clearing messaged')
    })
}