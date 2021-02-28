const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('0aff22')
.setTitle("Eğlence Komutları")
.setDescription(`
**+stresçarkı =** Stres Çarkı Çevirirsiniz.
**+beşiktaş =** Profil Fotoğrafınıza Beşiktaş Efekti Ekler.
**+yumruk-at <kullanıcı> =** Etiketlenen Kullanıcıya Yumruk Atarsınız.
**+espri =** Sunucuya Rastgele Espri Atar.
**+yazı-tura = ** Yazı Tura Atarsınız.
**+hex <@etiket> = ** Kendi Profilinize Veya Kullanıcı Belirtildiyse Hex Efekti Yapar.
**+kral-ol =**  » Sunucuda Kral Olursunuz`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["eğlence"], 
  permLevel: 0
};
exports.help = {
  name: 'eğlence'
};