module.exports = (client) => {
    console.log(`${client.user.tag} is online!!`);
    console.log("Invite Url: https://discordapp.com/oauth2/authorize?&client_id=" + client.user.id + "&scope=bot&permissions=68608");
    console.log(`Serving in ${client.guilds.cache.size} servers.`);
    //client.user.setActivity("start with xhelp", { type: "PLAYING" })
    //client.user.setActivity(" xhelp-Boycott China", { type: "LISTENING" })
    //function randomStatus() {
        //let status = ["sshelp", `${client.guilds.cache.size} Servers`] // You can change it whatever you want.
        //let rstatus = Math.floor(Math.random() * status.length);
///////////////////
let countChannel = {
    //total: "729576177513136188",
    //member: "727769188881530914",
    //bots: "727769125933547612",
    serverID: "608893245845405698",
}
client.on("guildMemberAdd", member => {
    if (member.guild.id !== countChannel.serverID) return;
        client.user.setActivity(`With ${client.users.cache.size} Members in 777 Server.`, {type: "PLAYING"}); 
  });
    client.on("guildMemberRemove", member => {
    if (member.guild.id !== countChannel.serverID) return;
        client.user.setActivity(`with ${client.users.cache.size} Members in 777 Server.`, {type: "PLAYING"});
});

} 
