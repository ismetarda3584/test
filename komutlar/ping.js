const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
     let botping = new Date() - message.createdAt;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('<a:pin:757604129031061647> Bot Ping : ', Math.floor(botping) + 'ms')
        .setFooter(`Leasess Bot | Ping`);

  return message.channel.send(pingembed);
        

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};