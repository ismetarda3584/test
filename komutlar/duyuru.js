const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Duyuru yapmam için birşeyler yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTitle(`<a:alarm1:731542034921422848> Duyuru`)
    .setFooter(`${message.author.tag} Tarafından Duyuruldu`, message.author.avatarURL)
    .setDescription(`\n${mesaj}`)

    return message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuruyap'],
  permLevel: 0
};

exports.help = {
  name: 'duyuruyap',
  description: 'Sunucuda Duyuru yapmanızı sağlar.',
  usage: 'duyuruyap [yazı]'
};