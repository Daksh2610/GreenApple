const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let heads = 1;
    let tails = 0;

    let result = Math.floor(Math.random() * 2);

    if (result == 0) return message.reply("🟡 Coin has been fliped and you got TAILS");
    else if (result == 1) return message.reply("🟡 Coin has been fliped and you got HEADS");
    else {
        return message.channel.send(
            "Error Occurred, Flip<a:Coin:729228260403183617> again."
        );
    }
}