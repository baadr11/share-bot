const Discord = require('discord.js');
      client = new Discord.Client();

client.on('ready', () => {
  console.log("Logged in!")
});
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
var prefix = "$";

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
if(!message.author.id === '342288364361482253') return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message', message => {
if (message.content.split(' ')[0] == '-m')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("CONNECT"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "m")) {
                         if (!message.member.hasPermission("CONNECT"))  return;
                            let embed4 = new Discord.RichEmbed()
             .setDescription("**:white_check_mark: | جاري ارسال البرودكاست**")
           .addField("مرسل البرودكاست ,Poison#9754")
          .addField("نص البرودكاست" ,args.join("  "))
                            .addField("عدد الاعضاء المرسل لهم :busts_in_silhouette:" ,` **[${message.guild.memberCount}]**`,true)
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            
                          }
});
client.login('NTAzNjkwMDk3NTUyNzg1NDE4.Dq6YZg.S7aKLNUvlYgVe3kSa6W3MzvbaMM');
