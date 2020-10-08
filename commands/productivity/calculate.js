
const math = require("math.js");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
      let exp = args.join(" ");
      if (!exp) return message.reply('Command Usage: `calculate <Expression>`');
      if (exp.includes("°")) exp = exp.replace(/°/g, "deg");

      const msg = await message.channel.send(`🔄 | Calculating...`);

      let evaled = math.eval(exp);
      if (isNaN(evaled)) evaled = 'NaN (not a number).';
      if (exp.length + evaled.length > 2000) return message.channel.send(`Output is too long to fit into a message!`);
      
      msg.edit(`${exp} = **${evaled}**`);
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };

