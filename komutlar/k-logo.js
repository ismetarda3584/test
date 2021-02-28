const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Leasess - Logo Komutları`, client.user.avatarURL)
.setColor('BLUE')
.setDescription(`
**${prefix}booking-logo =** Booking Logo oluşturursunuz
**${prefix}fire-logo =** Fire Logo oluşturursunuz 
**${prefix}discord-logo =** Discord Logo oluşturursunuz 
**${prefix}rainbow-logo =** Rainbow Logo oluşturursunuz 
**${prefix}arrow-logo =** Arrow Logo oluşturursunuz
**${prefix}kalp-logo =** Kalp Logo oluşturursunuz 
**${prefix}gold-logo =** Gold Logo oluşturursunuz `)
.setFooter('')
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
  name: 'logo',
  description: 'kullanıcı komutları',
  usage: 'logo'
};