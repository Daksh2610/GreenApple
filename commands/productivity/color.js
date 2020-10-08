
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {

        try {
            const color = args.join(" ");

            if (!color) {
                let genColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
                const embed = new MessageEmbed()
                    .setColor(genColour)
                    .setImage(`https://dummyimage.com/50/${genColour.slice(1)}/&text=%20`)
                    .setFooter(genColour);
                return message.channel.send('Here\'s your color!', { embed: embed });
            }

            if (((color.indexOf("#") === 0) && color.length === 7) || (!isNaN(color) && color.length <= 8 && color < 16777215)) {
                const embed = await new MessageEmbed()
                    .setColor(color)
                    .setImage(`https://dummyimage.com/50/${color.slice(1)}/&text=%20`)
                    .setFooter(color);
                return message.channel.send({ embed });
            }
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    };
