const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports.run = async (bot, message, args) => {

        const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setColor('#68b64a')
            .setTitle('Text to Binary')
            .setDescription(data.binary)

        await message.channel.send(embed)
    };

