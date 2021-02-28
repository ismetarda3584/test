const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${message.author.username}`, message.author.avatarURL)
.setColor('BLUE')
.setDescription(`
[Beni Davet Et](https://discord.com/oauth2/authorize?client_id=722731500080070737&scope=bot&permissions=8)
[Destek Sunucum](https://discord.gg/hQZPZnw)
[Website](https://pngimage.net/wp-content/uploads/2018/06/yak%C4%B1nda-png-5.png)`)
.setFooter(`Leasess - Botu davet ederek komutları deneyebilirsiniz`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: 'davet',
  description: 'kullanıcı komutları',
  usage: 'davet'
};