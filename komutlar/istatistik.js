const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('İstatistikler')
  .setFooter('Leasess  \İstatistikler', bot.user.avatarURL)
  .addField("<a:tac2:752956867059384451> **Botun Sahibi**", "\`・Cwaus・#0001\`")
  .addField("<:kit:754431103535677600>  **Geliştirici** ","\`🐺By.Bora🐺ᶫᵒᵛᵉᵧₒᵤ •#0876\`")
  .addField("<a:kilit:754425017592315904> **Çalışma süresi**", seksizaman, )
     .addField("―――――――――――――――――――――――――","឵឵")
   .addField("<a:tools2:752955450185744575> **Bot Sunucu İstatistikleri**","឵឵")
  .addField("<a:altin1:754824287168233542> **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:altin1:754824287168233542> **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("<a:altin1:754824287168233542> **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("―――――――――――――――――――――――――","឵឵")
      .addField("<a:tools2:752955450185744575> **Bot Diğer İstatistikleri**","឵឵")
  .addField("<a:altin1:754824287168233542> **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("<a:altin1:754824287168233542> **Node.JS sürüm**", `${process.version}`, true)
  .addField("<a:altin1:754824287168233542> **Ping**", bot.ping+" ms", true)
  .addField("<a:altin1:754824287168233542> **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("<a:altin1:754824287168233542> **Bit**", `\`${os.arch()}\``, true)
     .addField("<a:altin1:754824287168233542> **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("<a:altin1:754824287168233542> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true) 
   .addField("―――――――――――――――――――――――――","឵឵")
  .addField("<a:right:754429737685876807> **Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=722731500080070737&scope=bot&permissions=8)", )
  .addField("<a:right:754429737685876807> ** Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/hQZPZnw)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i','stats','stat'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
