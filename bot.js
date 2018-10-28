const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");

A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سسـلام عليكم ورحمة الله. 

- توآجدك فسيرفرنا, يزيدنا بهجه وسعادة ياعيني. 
                               [ https://discord.gg/HacxHGc] 
تـنورنا :yellow_heart: ... [ ${member}  ]
**`) 
}).catch(console.error)
})
});


A7MD.login(process.env.BOT_TOKEN);
