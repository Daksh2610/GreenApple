const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  //const msg = await message.channel.send("P.I.N.G......");
  //msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  try {
    const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
    const embed = new Discord.MessageEmbed()
      .setColor("#68b64a") // Tired of choosing the embed colors? Just type "RANDOM" on it!
      .addField("⌛ Latency", `**${m.createdTimestamp - message.createdTimestamp}ms**`)
      .addField("💓 API", `**${Math.floor(client.ws.ping)}ms**`) // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
      .setFooter('Ping!!', message.author.displayAvatarURL())
      .setTimestamp()
    return m.edit(`🏓 Pong! <a:ssyeah:718143826572738620>`, embed);
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
  }
};
