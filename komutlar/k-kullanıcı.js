const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GOLD')
.setTitle('Kullanıcı Komutları')
.setDescription(`
**${prefix}kullanıcı-bilgi =** Belirtilen Kullanıcının Profil Bilgilerini Atar.
**+avatar**  » Avatarınızı Görürsünüz.
**+profil**  » Profil Bilgilerinizi Öğrenirsiniz
**+saat**   » Şuanki Saati Öğrenirsiniz.
**+hg <@etiket>**  » Kullanıcı Belirtildiyse Resimli Hoşgeldin Mesajı Atar
**+çeviri <dil> <mesaj>**  » Girdiğiniz Mesajla Belirtilen Dilde Çeviri Yapar.
**+banner <yazı>**  » Yazdığınız Yazıyla Banner Oluşturursunuz.
**+yazı-tura**  » Yazı Tura Atarsınız.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
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
  name: 'kullanıcı',
  description: 'kullanıcı komutları',
  usage: 'kullanıcı'
};