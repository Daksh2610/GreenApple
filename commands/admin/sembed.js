const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('** <a:740993518419443742:763749884725428264> As you do not have the \"ADMINISTRATOR\" permission, you cannot use this command.!**')
        const {channel, author} = message;

        // join the args array into one.
        const content = args.join(" ")
        // split the joined args into |
        const splitted = content.split('|');

        // global embed so we can access it in the getColro() function
        const embed = new Discord.MessageEmbed()
        .setTitle(splitted[0])
        .setDescription(splitted[2])
        .setImage(splitted[3]);

        // just me testing but good to have to explain the parameter
        /**
         * 
         * @param {String} color - check for valid colors the user input
         */

         // get color function (only for hex colors)
        function getColor(color) { // checking if the user did input a valid hex code
            // if the color includes a hastag
            if (color.includes('#')) {

                // if there is a space we want to send a message
                if (color.includes(' ')) {

                    channel.send(`**${author.tag}** You can't write a color with spaces!\nFormat: \`|#eb4034|\``);

                    // making sure the color is only 7 length long included the #
                } else if (color.length === 7) {

                    embed.setColor(color);

                // if something else did go wrong
                } else {

                    channel.send(`**${author.tag}** Invalid color format!`);
                }
            }
        }

        // making sure the message includes a |
        if (content.includes('|')) {

            // if the second argument did include a #
            if (splitted[1].includes('#')) {

                // calling the getColor() function
                getColor(splitted[1]);
            }

        // if the last argument includes a true we will set a timestamp
        if (splitted[4] === ' true' || splitted[4] === 'true') {
                embed.setTimestamp();
            }

            // we send the embed
            channel.send(embed);

        } else {
            // if no | was mentioned
            message.channel.send(`**${author.tag}** You forgot to include a \`|\`\nFormat: \`\`\`\ntitle |#color| description | footer | timestamp (true/false)\`\`\``)
        }
};
