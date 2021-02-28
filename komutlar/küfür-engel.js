const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
   const embed = new Discord.RichEmbed()
    .setDescription('<:acik2:772459802710245378> **Küfür Engeli Başarılı Bir Şekilde `Aktif` Ettim!**')
   .setColor('GOLD')
   message.channel.send(embed)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
   const embed = new Discord.RichEmbed()
    .setDescription('<:kapali:772459905453785099> **Küfür Engeli Başarılı Bir Şekilde `Deaktif` Ettim!**')
   .setColor('GOLD')
   message.channel.send(embed)
return
}
  message.channel.send('**Lüten**`aç` **yada** `kapat` **Yazın!**')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
