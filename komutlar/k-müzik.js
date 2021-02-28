const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('722731500080070737') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
  message.channel.send('**<a:no:752953838675296328> | Maalesef bu komut bakımdadır**');
    //const embed = new Discord.RichEmbed()
      //  .setAuthor(`${client.user.username} `, client.user.avatarURL)
        //.setColor('BLUE')
        //.setTitle(`${client.user.username} - Müzik Komutları Listesi`)
        //.setDescription(`**${ayarlar.prefix}çal** : Müziği başlatırsınız.\n**${ayarlar.prefix}kapat** : Müziği kapatırsınız.\n**${ayarlar.prefix}kuyruk** : Müzik listesini gösterir.\n**${ayarlar.prefix}geç** : Şarkıyı geçersiniz.\n**${ayarlar.prefix}ses** : Müziğin sesini ayarlarsınız.\n**${ayarlar.prefix}sıra** : Kendi müzik sıranızı görürsünüz.\n**${ayarlar.prefix}duraklat** : Şarkıyı duraklatırsınız.\n**${ayarlar.prefix}devam** : Şarkıyı devam ettirirsiniz.`)  
//.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=692325163622072331&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/kxuYCAw) **|**`)
  //  return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['music'],
  permLevel: 0,
};

exports.help = {
  name: 'müzik',
  description: '',
  usage: ''
};