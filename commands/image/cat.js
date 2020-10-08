const Discord = require("discord.js");
const request = require('node-superfetch');
const { THECATAPI_KEY } = process.env;

module.exports.run = async (bot, message, args) => {
    try {
      const { body } = await request
        .get('https://api.thecatapi.com/v1/images/search')
        .query({
          limit: 1,
          mime_types: 'jpg,png'
        })
        .set({ 'x-api-key': THECATAPI_KEY });
      const m = await message.channel.send("<a:8104LoadingEmote:763653932626608129> Loading...");
      const embed = new Discord.MessageEmbed()
   .setImage(body[0].url)
   .setColor('#68b64a');
     return m.edit(` <a:4050_Roll_Kitten_Cat:763673913455542293> **Cat Image** `,embed); 

    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };