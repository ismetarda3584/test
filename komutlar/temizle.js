const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!").then(m => m.delete(8000))
if(!args[0]) return message.channel.send("<:hayir:734206155886297229> Lütfen Silinicek Mesaj Miktarını Yazın.!").then(m => m.delete(8000))
  let messagecount = parseInt(args.join(' '));
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`**${message.author.username} Tarafından** \`${messagecount}\` **Adet Mesaj Silindi!**`).then(m => m.delete(8000))
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  time: '10 saniye',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle'
};
