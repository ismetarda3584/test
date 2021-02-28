const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

module.exports.run = async(client, message, args) => {
    const Jimp = require('jimp')
    const fs = require('fs');
    const imgurUploader = require('imgur-uploader');
    let usuario = message.mentions.users.first();
    let razaou = args.slice(0).join(' ');
    var user;
                if(!razaou.length < 1) {
                    if(message.mentions.users.size < 1) {
                        if(client.users.get(args[0])) {
                            user = client.users.get(args[0])
                        } else if(client.users.find("tag", message.content.replace(`${prefix}avatarhex `, ""))) {
                            user = client.users.find("tag", message.content.replace(`${prefix}avatarhex `, ""))
                        } else if(message.guild.members.find('displayName', message.content.replace(`${prefix}avatarhex `, ""))) {
                            user = message.guild.members.find('displayName', message.content.replace(`${prefix}avatarhex `, "")).user
                        } else if(client.users.find("username", message.content.replace(`${prefix}avatarhex `, ""))) {
                            user = client.users.find("username", message.content.replace(`${prefix}avatarhex `, ""))
                        } else {
                            user = message.author
                        }
                    } else {
                        user = message.mentions.users.first()
                    }
                } else {
                    user = message.author
                }
    let type = user.avatarURL.length - 3
    var Discord = require('discord.js')
    Jimp.read(user.avatarURL).then(a => {
    Jimp.read("https://i.postimg.cc/vH7BhTY3/hex.png").then(h => {
    a.resize(400, 400)
    a.mask(h, 0, 0);
    a.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
      imgurUploader(buffer, {title: 'Hex Avatar Generator'}).then(data => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`Hex Avatar ${user.username} `, `${user.avatarURL}`)
      .setColor(0x30A8D3)
      .setDescription(`Resminiz imgur sitesine yüklenmiştir [Tıkla](${data.link})`)
      .setImage(data.link)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
      .setTimestamp()
      message.channel.send(embed).catch(console.error)
      });
      });
      });
      });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hex","hexavatar"],
  permLevel: 0
};

module.exports.help = {
  name: 'hexavatar',
  description: 'avatarınızın görünümünü değiştirip imgur sitesine yükler',
  usage: 'hexavatar'
};
