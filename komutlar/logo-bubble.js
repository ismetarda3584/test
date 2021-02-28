const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Birşeyler Yazın")
  let link = "https://flamingtext.com/net-fu/proxy_form.cgi?script=chrominium-logo&_loc=generate&imageoutput=true&text="+isim
  const embed = new Discord.RichEmbed()
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
  name: 'rainbow-logo',
  description: 'Logo Yaparsınız',
  usage: 'skull-logo <yazı>'
};