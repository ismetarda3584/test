const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://flamingtext.com/net-fu/proxy_form.cgi?script=fluffy-logo&_loc=generate&imageoutput=true"+isim
  const embed = new Discord.RichEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: "fluffy-logo",
  description: 'Logo Yaparsınız',
  usage: ''
};