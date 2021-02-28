const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Leasess - Bot Komutları`, client.user.avatarURL)
.setColor('GREEN')
.setDescription(`
**${prefix}istatistik =** Bot Hakkında Bilgi Verir.
**${prefix}davet =** Botun Davet Linkini Ve Destek Sunucusunu Atar.
**${prefix}şikayet =** Bot Hakkında Şikayetinizi Belirtirsiniz.
**${prefix}öneri =** Bot Hakkında Önerinizi Belirtirsiniz.
**${prefix}ping =** Botun Pingini Öğrenirsiniz.
**${prefix}bug-bildir =** Bot Hakkında Bug Varsa Bildirirsiniz.
**${prefix}yapımcılar =** Botun Yapımcılarını Ve Geliştiricilerini Gösterir.
**${prefix}yazdır =** Bota Yazı Yazdırırsınız`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["bot"], 
  permLevel: 0
};
exports.help = {
  name: 'bot'
};