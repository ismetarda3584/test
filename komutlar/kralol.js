const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Adlı Kullanıcı Artık Kralınız')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kral-ol"],
  permLevel: 0
};
exports.help = {
  name: 'kralol',
  description: 'kralol',
  usage: 'kralol'
};
