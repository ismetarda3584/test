const Discord = require("discord.js");
module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("GOLD")
    .addField(`<a:tac2:752956867059384451> Yapımcılarım`, `\`・Cwaus・#0001\` & \`・🐾 ByBora ᶫᵒᵛᵉᵧₒᵤ ・🐾#0876\``)
  .addField("―――――――――――――――――――――――――","឵឵")
  .addField(`<a:altinkant:752988788736917595> Geliştiricilerim`, `**Yok**`)
   .addField("―――――――――――――――――――――――――","឵឵")
.setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımcım"],
  permLevel: 0,
  kategori: "sunucu"
};
module.exports.help = {
  name: "yapımcılar",
  description: "yapımcılar",
  usage: "yapımcılar"
};
