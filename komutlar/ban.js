const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()//artemus
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':x: Bu komut özel mesajlarda kullanıma kapatılmıştır.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let sebep = args.slice(1).join(' '); 
  let user = message.mentions.users.first(); 
  if (message.mentions.users.size < 1) return message.channel.send('Yasaklamak için bir kişiyi etiketlemelisin').catch(console.error);
   if (sebep.length < 1) return message.channel.send('Sunucudan yasaklama sebebini yazmalısın.');
  if (!message.guild.member(user).bannable) return message.channel.send('<a:no:752953838675296328> **Üzgünüm yetkilileri sunucudan banlayamam**');
  message.guild.member(user).ban();
  return message.channel.send(`${user.username}#${user.discriminator} adlı kullanıcıyı ${sebep} nedeniyle sunucudan attın.`);
};
exports.conf = {//artemus
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'ban [kullanıcı] [sebep]'
};