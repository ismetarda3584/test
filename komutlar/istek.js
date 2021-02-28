const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

      let kanal = client.channels.get("764271902734417931")

const istek = args.slice(0).join(' ')
if(!istek) return message.channel.send(
    new Discord.RichEmbed()
    .setColor('RED')
    .setTitle(':x: Hata :x:')
    .setDescription('İstek Gönderebilmek İçin Birşey Yazmalısınız'))

message.delete()
message.channel.send(
    new Discord.RichEmbed()
    .setColor('RED')
    .setTitle(':white_check_mark: Başarılı :white_check_mark:')
    .setDescription('İsteğin Başarıyla İletildi!'))


   let embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle('Yeni Bir İstek!')
    .setAuthor(message.guild.name, client.user.avatarURL)
    .setThumbnail(message.author.avatarURL)
      .addField('Gönderen', `**${message.author.tag}**`)
      .addField('İstek', istek)
    .setFooter(`${message.author.username} Tarafından Gönderildi`, message.author.avatarURL, `${message.author.Date} Kanalında kullanıldı.`)
    .setTimestamp()
kanal.send(embed)
}
exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['istek'],
	permLevel : 0
}
exports.help = {
	name : 'istek',
	description : 'İstek Sistemi',
	usage : 'istek'
}