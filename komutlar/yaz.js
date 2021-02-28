const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
    message.delete();
if (mesaj.length < 1) return message.reply('<a:alarm3:723392925119021176> Yazmam için herhangi bir şey yazmalısın.');
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz','yazdır'],
  permLevel: 3
};

exports.help = {
  name: 'yazdır',
  description: 'yazdır',
  usage: 'yazdır [mesaj]'
};