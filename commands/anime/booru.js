
const { MessageEmbed } = require('discord.js');
const booru = require('booru');


module.exports.run = async (bot, message, args) => {

        try {
            if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('That kind of stuff is not allowed! Not even in NSFW channels!');

            let query = args.join(" ");

            if (!query) {
                return message.reply("Command Usage: `booru <Query>`")
            } else {

            booru.search('safebooru', [query], { limit: 1, random: true })
                .then(booru.commonfy)
                .then(images => {
                    for (let image of images) {
                        const embed = new MessageEmbed()
                            .setAuthor(`Safebooru ${query}`, 'https://c.catgirlsare.sexy/NrAI.png')
                            .setImage(image.common.file_url)
                            .setDescription(`[Image URL](${image.common.file_url})`)
                            .setColor('#68b64a');
                        return message.channel.send({ embed });
                    }
                })
            }
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    
};

