const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

        if (message.author.id !== '707480529343217695') 
         return message.channel.send(`<a:740993518419443742:763749884725428264> You cannot use this command!`)
        const embed = new MessageEmbed()
            .setTitle('Evaluating...')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('Output: ')
                .setDescription(await data)
            await msg.edit(embed)
            await msg.react('✅')
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✅':
                                msg.reactions.removeAll();
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    })
                })
        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle('An Error has occured')
            return await msg.edit(embed);

        }
    };

