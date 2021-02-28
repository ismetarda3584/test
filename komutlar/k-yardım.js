const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('#faff0a')
.setThumbnail(client.user.avatarURL)
.setDescription(`
<a:alarm1:734820437288157204> **Davet Etmek İçin:** \`+davet\`  
<a:tik3:734820425195847760> **Komutlara Bakmak İçin:** \`+yardım\` 
<a:dev:769301248717357056> **Prefix:** ${prefix}

**Yardım Menüsü**
:white_small_square: | **${prefix}yetkili** : Moderasyon Komutlarını Listeler.
:white_small_square: | **${prefix}koruma** : Koruma Komutlarını Listeler.
:white_small_square: | **${prefix}kullanıcı** : Kullanıcı Komutlarını Listeler.
:white_small_square: | **${prefix}eğlence** : Eğlence Komutlarını Listeler.
:white_small_square: | **${prefix}bot** : Bot Komutlarını Listeler.

**<a:gold:769300497935892480> Linkler**

<a:altinkanat:768439090281578496>  **[Davet Et](https://discord.com/api/oauth2/authorize?client_id=722731500080070737&permissions=8&scope=bot)**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<a:altinkanat:768439090281578496>  **[Destek Sunucum](https://discord.gg/hQZPZnw)**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<a:altinkanat:768439090281578496>  **[Website](https://pngimage.net/wp-content/uploads/2018/06/yak%C4%B1nda-png-5.png)**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`)
.setImage('https://media.discordapp.net/attachments/758405616506241024/772898197231894608/fda5df1f-464f-4aec-a5ca-6c78465f8657_standard.gif')
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","h"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};