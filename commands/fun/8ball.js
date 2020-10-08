const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        message.reply('Please ask me a question.');
    }
    else {
        let eightball = [
            ' <a:4745_arrow_right:763653208911511592> It is certain',
            ' <a:4745_arrow_right:763653208911511592> It is decidedly so',
            ' <a:4745_arrow_right:763653208911511592> Without a doubt',
            ' <a:4745_arrow_right:763653208911511592> Yes definitely',
            ' <a:4745_arrow_right:763653208911511592> You may rely on it',
            ' <a:4745_arrow_right:763653208911511592> As I see it, yes',
            ' <a:4745_arrow_right:763653208911511592> Most likely',
            ' <a:4745_arrow_right:763653208911511592> Outlook good',
            ' <a:4745_arrow_right:763653208911511592> Yes',
            ' <a:4745_arrow_right:763653208911511592> Its your choice',
            ' <a:4745_arrow_right:763653208911511592> what should i do?',
            ' <a:4745_arrow_right:763653208911511592> your choice',
            ' <a:4745_arrow_right:763653208911511592> i have no idea what your asking',
            ' <a:4745_arrow_right:763653208911511592> Signs point to yes',
            ' <a:4745_arrow_right:763653208911511592> Reply hazy try again',
            ' <a:4745_arrow_right:763653208911511592> Ask again later',
            ' <a:4745_arrow_right:763653208911511592> Better not tell you now',
            ' <a:4745_arrow_right:763653208911511592> Cannot predict now',
            ' <a:4745_arrow_right:763653208911511592> Concentrate and ask again',
            ' <a:4745_arrow_right:763653208911511592> Don\'t count on it',
            ' <a:4745_arrow_right:763653208911511592> My reply is no',
            ' <a:4745_arrow_right:763653208911511592> My sources say no',
            ' <a:4745_arrow_right:763653208911511592> Outlook not so good',
            ' <a:4745_arrow_right:763653208911511592> Very doubtful',
            ' <a:4745_arrow_right:763653208911511592> No way',
            ' <a:4745_arrow_right:763653208911511592> Maybe',
            ' <a:4745_arrow_right:763653208911511592> The answer is hiding inside you',
            ' <a:4745_arrow_right:763653208911511592> No',
            ' <a:4745_arrow_right:763653208911511592> Depends on the mood of the CS god',
            ' <a:4745_arrow_right:763653208911511592> Hang on',
            ' <a:4745_arrow_right:763653208911511592> It\'s over',
            ' <a:4745_arrow_right:763653208911511592> It\'s just the beginning',
            ' <a:4745_arrow_right:763653208911511592> Good Luck',
        ];
        let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
    let sayembed = new Discord.MessageEmbed()
        .setDescription(eightball[index])
        .setColor("#68b64a")
        //.setFooter("MaDDoX-8ball", message.author.displayAvatarURL())
    message.channel.send(sayembed);
    }
} 