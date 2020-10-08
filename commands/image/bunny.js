const Discord = require("discord.js");
const request = require('node-superfetch');

module.exports.run = async (bot, message, args) => {
        try {
const sendMsg = await message.channel.send("<a:8104LoadingEmote:763653932626608129>  Loading...");

            const { body } = await request
            .get('https://api.bunnies.io/v2/loop/random/')
            .query({ media: 'gif,png' });
            let fileToSend;
            let fileType = 'gif';
            const gif = await request.get(body.media.gif);
            if (Buffer.byteLength(gif.body) > 8e+6) {
                const poster = await request.get(body.media.poster);
                fileToSend = poster.body;
                fileType = 'png';
            } else {
                fileToSend = gif.body;
            }
            return
sendMsg.delete(). then(message.channel.send({ files: [{ attachment: fileToSend, name: `${body.id}.${fileType}` }] }));
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    }; 