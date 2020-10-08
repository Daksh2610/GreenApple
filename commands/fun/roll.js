const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let result = Math.floor(Math.random() * 6);

    if (result == 0) {
        return message.reply("<:dice:729228258972926083>Rolled No. is 1");
    } else if (result == 1) {
        return message.reply("<:dice:729228258972926083>Rolled No. is 2");
    } else if (result == 2) {
        return message.reply("<:dice:729228258972926083>Rolled No. is 3");
    } else if (result == 3) {
        return message.reply("<:dice:729228258972926083>Rolled No. is 4");
    } else if (result == 4) {
        return message.reply("<:dice:729228258972926083>Rolled No. is 5");
    } else if (result == 5) {
        return message.reply("<:dice:729228258972926083>Rolled No. is 6");
    } else {
        return message.reply("Error Occurred, roll again.<:dice:729228258972926083> `.roll`");
    }
};