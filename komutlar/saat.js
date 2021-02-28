const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.RichEmbed()
.setTitle('Türkiye Saati')
.setTimestamp()
.setFooter('Saatimiz ')
.setColor(0xff7f00)

message.channel.sendMessage(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["saat-kaç"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'saat',
    description: 'saat türkiye',
    usage: 'saat'
  };