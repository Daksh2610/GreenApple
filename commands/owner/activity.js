 const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    const { channel, author } = message;
        // if the user don't have admin permission
       if (message.author.id !== '707480529343217695') 
         return message.channel.send(`<a:740993518419443742:763749884725428264> You cannot use this command!`)

        /**
         * @param {String} statusType - what value to change the bots status
         */
        // in this function we check if the user did input the correct type
        function ifInvalidStatusType(statusType) {

            // all the valid status types
            const types = ['online', 'invisible', 'dnd', 'idle'];

                /* if the statusType value is the same as 
                one of the values in the types array */
                if (types.includes(statusType)) {
                    // set the bots status
                    bot.user.setStatus(statusType);

                    message.channel.send(`**${author.tag}** I changed my status to \`${statusType}\`!`);
                    return
                }
                // if the user did input a invalid type that we didn't have in our array
                else {
                    message.channel.send(`**${author.tag}** invalid status type!`);
                    return
                }
        }

        // if the user didn't type a second argument
        if (!args[0]) {

        message.channel.send(
            new Discord.MessageEmbed()

            .setColor('#68b64a')
            .setDescription("\nPrefix: `o!setstatus <status_type>`\t\n\nStatuses to choose between:\n\n<a:9852_Online_Status:760573961578086471> `online`\n\n<:9487_Offline_Status:762257547485773825> `invisible`\n\n<a:6290_DND_Status:760574137667289118> `dnd`\n\n<a:9693_Idle_Status:760573795529916475> `idle`\n\n")
            .addField("Note:", "```It can take some extra seconds before\nit changes to your wanted status!```")
            .setFooter(`--|Please write the status types all lowercase|-->`)
            .setTimestamp()
        ).catch(err => console.error(err));
        return
    }
        // if the user typed a second argument
        if (args[0]) {

        ifInvalidStatusType(args[0]);
        return
        }
};

