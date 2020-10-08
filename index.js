//nodemon run dev to start
////////////////////////////
require('dotenv').config()
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

 

    fs.readdir("./commands/basic/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/basic/${file}`);
        let commandName = file.split(".")[0];
        console.log(`${commandName} is being Loaded`);
        client.commands.set(commandName, props);
    });
    fs.readdir("./commands/bot/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./commands/bot/${file}`);
            let commandName = file.split(".")[0];
            console.log(`${commandName} is being Loaded`);
            client.commands.set(commandName, props);
        });
    });
    fs.readdir("./commands/fun/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./commands/fun/${file}`);
            let commandName = file.split(".")[0];
            console.log(`${commandName} is being Loaded`);
            client.commands.set(commandName, props);
        });
    });
        fs.readdir("./commands/mod/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/mod/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });
        
         fs.readdir("./commands/anime/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/anime/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });

  fs.readdir("./commands/owner/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/owner/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });
        
        fs.readdir("./commands/productivity/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/productivity/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });

        
        fs.readdir("./commands/image/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/image/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });

          
        fs.readdir("./commands/searches/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/searches/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });

         fs.readdir("./commands/text/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/text/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });
    
    fs.readdir("./commands/admin/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/admin/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });

 
        /*fs.readdir("./commands/owner/", (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                let props = require(`./commands/owner/${file}`);
                let commandName = file.split(".")[0];
                console.log(`${commandName} is being Loaded`);
                client.commands.set(commandName, props);
            });
        });*/
})
///////////////////////////////
client.login("NzU4NTcwMDEyNTMyNDA4MzMw.X2w3YA.dvr0QxqNQcsq7tHD-4g5NRqFpaQ")