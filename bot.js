const Discord = require('discord.js');
      client = new Discord.Client();
      ms = require("ms");

client.on('ready', () => {
  console.log("Logged in!")
});

client.on('guildMemberAdd', async event => {

  let message = '**توآجدك فسيرفرنآ يزيدنا بهجه وسعـآدة ي ععيني .https://discord.gg/HmjAtvP**';
  setTimeout(function(){
    event.send(message);
  }, ms("10s"));
});

client.login(process.env.bot_TOKEN);
