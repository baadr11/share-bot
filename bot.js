const Discord = require('discord.js');
      client = new Discord.Client();

client.on('ready', () => {
  console.log("Logged in!")
});
var prefix = "$";

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('5bc')){
if(!message.author.id === '342288364361482253') return;
message.channel.sendMessage('#DONE')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN);
