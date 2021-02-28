const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "**Yönetici**" yetkisine sahip olmalısın.`);
let user = message.author.username;
const leasses = await bot.channels.get(message.channel.id).createInvite()
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let knall = bot.channels.get("764271906626338816")
let embed = new Discord.RichEmbed()
.setTitle("Yeni Bir Destek Çağrısı Var!")
.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwj4H4lXg8pgx5Dp9M8WnHAhicj8Pzjm8jdw&usqp=CAU")
.addField('Çağıran Kişi', message.author.username + '#' + message.author.discriminator)
.addField("Çağıran Sunucu", guild, )
.addField("Çağıran Sunucu ID", guildid, )
.addField("Çağırılan Kanal", kanal, )
.setColor("#ffff00")
.addField("Çağıran Sunucu Linki", leasses.url)
knall.send(embed)
message.channel.send("**Destek Ekibi Başarıyla Çağırıldı,Birazdan Bu Sunucuya Yardım İçin Geleceklerdir.**")

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'destek-çağır',
  description: 'destek ekibini çağırırsınız.',
  usage: ''
}
﻿