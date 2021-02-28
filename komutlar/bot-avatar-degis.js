const Discord = require('discord.js');


exports.run = function(client, message,args) {
if(message.member.id =='504254802088427540') {
  const link = args.join(' ')
  if(link < 1) return message.reply('Link girmelisin.')
  client.user.setAvatar(link)
  message.delete()
  const embed = new Discord.RichEmbed
  return message.reply('Bot Avatar Ayarlandı!').then(k=>k.delete(5000))
   }else{
     return message.reply('Bu Komut Sadece Sahibime Özel!')
   }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 4 
};

exports.help = {
  name: 'botavatar', 
  description: 'Botun fotografını degiştirir.', //açıklaması
  usage: 'botavatar'
};