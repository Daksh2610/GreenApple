const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
   
let membed = new Discord.MessageEmbed()
    .setFooter("Bot Help", message.author.displayAvatarURL())
    .setTimestamp()
.setTitle("HELP")
.setColor("#68b64a")
.setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
.setDescription("Bot Prefix is set to `g!`")
    
    .addField(' <a:arrow:763813303876976642> help 1', "For Fun Commands")
    .addField(' <a:arrow:763813303876976642> help 2', "For Admin Commands")
    .addField(' <a:arrow:763813303876976642> help 3', "For Anime Commands")
    .addField(' <a:arrow:763813303876976642> help 4', "For Basic Commands")
    .addField(' <a:arrow:763813303876976642> help 5', "For Information Commands")
    .addField(' <a:arrow:763813303876976642> help 6', "For Image Commands")
    .addField(' <a:arrow:763813303876976642> help 7', "For Mod Commands")
    .addField(' <a:arrow:763813303876976642> help 8', "For Owners only Commands so Stay away from it!!")
    .addField(' <a:arrow:763813303876976642> help 9', "For Productivity Commands")
    .addField(' <a:arrow:763813303876976642> help 10', "For Searches Commands")
    .addField(' <a:arrow:763813303876976642> help 11', "For Text Commands")

    let List = args[0] || '0';
    if (List != '1' && List != '2' && List != '3' && List != '4' && List != '5' && List != '6' && List != '7' && List != '8' && List != '9' && List != '10'  && List != '11')
        return message.channel.send(membed);

    
if (List == '1') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .setTitle(`Fun Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .addField('<a:752795653884739665:763656904969814068> 8ball', 'Get Your ping in my way:  ``g!8ball <question>``')
            .addField('<a:752795653884739665:763656904969814068> advice', 'Get some advice:  ``g!advice``')
            .addField('<a:752795653884739665:763656904969814068> avatar', 'Get a user avatar:  ``g!avatar <@user>``')
            .addField('<a:752795653884739665:763656904969814068> cat-facts', 'Increase your knowledge about Cats:  ``g!cat-facts``')
            .addField('<a:752795653884739665:763656904969814068> dog-facts', 'Increase your knowledge about Dogs:  ``g!dog-facts``')
            .addField('<a:752795653884739665:763656904969814068> enlarge', 'Get enlarge emoji:  ``g!enlarge <emoji>``')
            .addField('<a:752795653884739665:763656904969814068> flip', 'Flip a coin:  ``g!flip``')
            .addField('<a:752795653884739665:763656904969814068> meme', 'Get a random memes:  ``g!meme``')
            .addField('<a:752795653884739665:763656904969814068> never-have-i-ever', 'Responds with a random Never Have I Ever... statement;  ``g!never-have-i-ever``')
            .addField('<a:752795653884739665:763656904969814068> number-fact', 'Responds with a random fact about a specific number:  ``g!number-fact <number>``')
            .addField('<a:752795653884739665:763656904969814068> quote', 'Gives you a random quote or a quote from your given number: ``g!quote``')
            .addField('<a:752795653884739665:763656904969814068> reddit', 'Search from reddit:  ``g!reddit <content>``')
            .addField('<a:752795653884739665:763656904969814068> roast', 'Roasts a user:  ``g!roast <@user> ``')
            .addField('<a:752795653884739665:763656904969814068> roll', 'Roll a dice:  ``g!roll``')
            .addField('<a:752795653884739665:763656904969814068> today', 'Finds a historical event from today:  ``g!today``')
            .addField('<a:752795653884739665:763656904969814068> tsundere', 'Get a random tsundere quote:  ``g!tsundere``')
 
        message.channel.send(embed);
    } else if (List == '2') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Basic Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .setColor("#68b64a")
            .addField('<a:752795653884739665:763656904969814068> ban', 'Ban a user:  ``g!ban <@user> or <id>``')
            .addField('<a:752795653884739665:763656904969814068> unban', 'Unban a user:  ``g!unban <@user> or <id>``')
            .addField('<a:752795653884739665:763656904969814068> banlist', 'Get the list of ban members:  ``g!banlist``')
            .addField('<a:752795653884739665:763656904969814068> dm', 'Dm a user:  g!dm <@user> or <userID>``')
            .addField('<a:752795653884739665:763656904969814068> embed', 'Says as u say in Embed[simple embed]:  ``g!embed <content>``')
            .addField('<a:752795653884739665:763656904969814068> giverole', 'Give a role:  ``g!giverole <username  or user id> <role name or id>``')
            .addField('<a:752795653884739665:763656904969814068> image', 'Image link in embed:  ``g!image <imagelink>``')
            .addField('<a:752795653884739665:763656904969814068> kick', 'Kick a user:  ``g!kick <@user> or <userID>``')
            .addField('<a:752795653884739665:763656904969814068> say', 'Says as u say:  ``g!say <content> ``')
            .addField('<a:752795653884739665:763656904969814068> sayembed', 'Says as u say in Embed[with servericon]:  ``g!sayembed <content>``')
            .addField('<a:752795653884739665:763656904969814068> sembed', 'Says as u say in Embed[custom embed]:  ``g!sayembed <title |#color| description | footer | timestamp (true/false)>``')
            
        message.channel.send(embed);
    } else if (List == '3') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Anime Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> anime', '"Searches for an anime on Kitsu.io! If no anime name is given, it gives you a random suggestion:  ``g!anime or g!anime <anime name>``')
            .addField('<a:752795653884739665:763656904969814068> awwnime', "Cute anime girls:  ``g!awwnime``")
            .addField('<a:752795653884739665:763656904969814068> booru', "Searches for images on Safebooru! Keep in mind Safebooru's definition of safe:  ``g!booru <Query>``")
            .addField('<a:752795653884739665:763656904969814068> manga', "Searches for a manga with Kitsu.io:  ``g!manga <Manga Name>``")
            .addField('<a:752795653884739665:763656904969814068> scraper', "Searches for a anime  ``g!scraper <anime name > <episode>``")
       
        message.channel.send(embed);
    }
    
      else if (List == '4') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Basic Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> ping', '"Get the bot pings:  ``g!ping``')
            .addField('<a:752795653884739665:763656904969814068> suggest', "suggestions[must have suggestion channel]:   ``g!suggest <suggestions>``")
     
        message.channel.send(embed);
    
     } else if (List == '5') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Information commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> botinfo', '"Get the information about the bot:  ``g!botinfo``')
            .addField('<a:752795653884739665:763656904969814068> help', "Get the help menu:   ``g!help``")
            .addField('<a:752795653884739665:763656904969814068> serverinfo', "Get the information about the server:   ``g!serverinfo``")
            .addField('<a:752795653884739665:763656904969814068> userinfo', "Get the information about the user:   ``g!userinfo <@user>``")
        
        message.channel.send(embed);
    }
    else if (List == '6') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Image Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> bird', '"Get the random image of birds:  ``g!bird``')
            .addField('<a:752795653884739665:763656904969814068> bunny', "Get the random image of bunny:  ``g!bunny``")
            .addField('<a:752795653884739665:763656904969814068> cat', "Get the random image of cat:   ``g!cat``")
            .addField('<a:752795653884739665:763656904969814068> dog', "Get the random image of dog:  ``g!dog``")
            .addField('<a:752795653884739665:763656904969814068> food', "Get the random image of food:  ``g!food``")

        message.channel.send(embed);
    }
        else if (List == '7') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Mod commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> clear', '"Clear the bulk messages:  ``g!clear <number>``')
            .addField('<a:752795653884739665:763656904969814068> createtextchannel', "Create Text channel:  ``g!createtextchannel``")
            .addField('<a:752795653884739665:763656904969814068> createvoicechannel', "Create Voice channel:   ``g!createvoicechannel``")
            .addField('<a:752795653884739665:763656904969814068> emojilist', "Get the list of server emoji:  ``g!emojilist``")
            .addField('<a:752795653884739665:763656904969814068> icon', "Get the server icon:  ``g!icon``")
            .addField('<a:752795653884739665:763656904969814068> lastmessage', "Get the info of last message:  ``g!lastmessage <@user>``")
            .addField('<a:752795653884739665:763656904969814068> mute', "Mute the user:  ``g!mute <@user>``")
            .addField('<a:752795653884739665:763656904969814068> setnick', "Change the user nickname:  ``g!setnick <@user>``")
            .addField('<a:752795653884739665:763656904969814068> slowmode', "Set the slowmode:  ``g!slowmode <time>``")

        message.channel.send(embed);
    }
    
        else if (List == '8') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Owner Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> activity', '"Set the bot activity:  ``g!activity <activity type>``')
            .addField('<a:752795653884739665:763656904969814068> eval', "Eval the numbers:  ``g!eval <number>``")
            .addField('<a:752795653884739665:763656904969814068> leave', "Leave the server:   ``g!leave``")
            .addField('<a:752795653884739665:763656904969814068> restart', "Restart the bot:  ``g!restart``")
            .addField('<a:752795653884739665:763656904969814068> status', "Update the bot status:  ``g!status <status>``")
           
        message.channel.send(embed);
    }
      else if (List == '9') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Productivity Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> calculate', '"Calculate the numbers:  ``g!calculate <Expression>``')
            .addField('<a:752795653884739665:763656904969814068> color', "Get the color:  ``g!color <color code>``")
            .addField('<a:752795653884739665:763656904969814068> createemoji', "Create the emoji:   ``g!createemoji <IMAGE_URL> <Emoji Name>``")
            .addField('<a:752795653884739665:763656904969814068> generateinvite', "Gnerate your server invite:  ``g!generateinvite``")
            .addField('<a:752795653884739665:763656904969814068> qrcode', "Sends a Qr code:  ``g!qrcode <content>``")
            .addField('<a:752795653884739665:763656904969814068> reminder', "Sets a reminder for you with the given time:  ``g!reminder <Time (h | min | sec)> <Text>``")
            .addField('<a:752795653884739665:763656904969814068> screenshot', "Captures a screenshot of a given URL:  ``g!screenshot <url>``")
            .addField('<a:752795653884739665:763656904969814068> translate', "Translates a specific text. A language (e.g. English, German, French, etc.) must be added to specify a language to translate to.:  ``g!translate <language> <text>``")

        message.channel.send(embed);
    }
      else if (List == '10') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Search Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> binary', '"Get the binary text:  ``g!binary <text>``')
            .addField('<a:752795653884739665:763656904969814068> corona', "Get the information about corona:  ``g!corona or g!corona <country name>``")
            .addField('<a:752795653884739665:763656904969814068> forecast', "Get the information about weather forcast:   ``g!forecast < city, country_code | zipcode >``")
            .addField('<a:752795653884739665:763656904969814068> imdb', "Get the information about imdb rate of movie or series:  ``g!imdb <movie or series name>``")
            .addField('<a:752795653884739665:763656904969814068> steam', "Get the information about game:  ``g!steam <game name>``")
            .addField('<a:752795653884739665:763656904969814068> urban', "Get the information from urban dictionary:  ``g!urban <content>``")
           
        message.channel.send(embed);
    }
    else if (List == '11') {
        let embed = new Discord.MessageEmbed()
            .setFooter("Bot Help", message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Text Commands`)
            .setDescription("Bot Prefix is set to `g!`")
            .setColor("#68b64a")
            .setThumbnail("https://media.discordapp.net/attachments/760017530835173376/763765044546109440/My_Video.gif")
            .addField('<a:752795653884739665:763656904969814068> emojify', '"Sends the same message that you had sent, but converts it into emoji form:  ``g!emojify <text>``')
            .addField('<a:752795653884739665:763656904969814068> fliptext', "Sends the same message that you had sent, but flipped:  ``g!fliptext <text>``")
            .addField('<a:752795653884739665:763656904969814068> tapcode', "Encodes a given text in Tap Code:   ``g!tapcode <text>``")
            .addField('<a:752795653884739665:763656904969814068> vaportext', "Sends the same message that you had sent, but converts it into vaportext form:  ``g!vaportext <text>``")
            .addField('<a:752795653884739665:763656904969814068> steam', "Get the information about game:  ``g!steam <game name>``")
            .addField('<a:752795653884739665:763656904969814068> urban', "Get the information from urban dictionary:  ``g!urban <content>``")
           
        message.channel.send(embed);
    }
}
