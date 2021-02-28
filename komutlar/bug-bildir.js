const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.slice(0).join(' ');
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
const kullanım = args[0]
if(!kullanım) return message.channel.send(
    new Discord.RichEmbed()
    .setColor('RED')
    .setTitle('<a:no2:740177618405687347> Başarısız!')
    .setDescription(`\n\n**Kullanım:** +bug-bildir bug `))
let channel = bot.channels.get("764271903560564736")//bug repot kanal id
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Bug", bug, )
.addField("Sunucu", guild, )
.addField("Sunucu ID", guildid, )
.addField("Kanal", kanal, )
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react(":hourglass_flowing_sand:"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'bug-bildir'
}
﻿