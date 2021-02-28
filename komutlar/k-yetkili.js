const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Leasess - Moderasyon Komutları `, client.user.avatarURL)
.setColor('#ff0000')
.setDescription(`
**${prefix}sunucu-panel =** Sesli Sunucu Paneli Açar.
**${prefix}otorol =** Sunucuda Otomatik Rol Ayarlar. ( Bozuk / Bakımda )
**${prefix}yavaş-mod =** Sunucuda Yazma Süresi Belirler.
**${prefix}snipe =** Sunucuda Son Yazılan Mesajı Gösterir.
**${prefix}oylama =** Sunucuda Oylama Yaparsınız.
**${prefix}sunucu-panel =** Sunucuda Sesli Panel Açarsınız.
**${prefix}küfür-engel =** Sunucuda Küfür Engeli Açarsınız.
**${prefix}snipe =** Sunucuda Son Silinen Mesajı Görürsünüz
**${prefix}say =** Sunucudaki Üyeleri,Kanalları v.b Sayar.
**${prefix}temizle =** Sunucuda Belirtilen Miktarda Mesaj Silersiniz.`)
.addField(`Ayarlamalı Sa-As`, `**${prefix}sa-as =** Sunucuda Sa-as Sistemini Ayarlar`, true)

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
  name: 'yetkili'
};