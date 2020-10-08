const Discord = require("discord.js");
const request = require('node-superfetch');

module.exports.run = async (bot, message, args) => {
    const { body } = await request.get('https://dog.ceo/api/breeds/image/random');
    const m = await message.channel.send("<a:8104LoadingEmote:763653932626608129> Loading..."); 
    const embed = new Discord.MessageEmbed()
   .setImage(body.message)
   .setColor('#68b64a');      
 return m.edit(`  <a:6586_doge_dance:763674347318804520> **Dog Image** `,embed); 

  };