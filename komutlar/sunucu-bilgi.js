const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const svo = require('svo-client');

exports.run = async (client, message, params) => {
	if (!message.guild) return message.author.sendEmbed('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
  const tah = await svo.tarih(message.guild.createdAt)
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor("#cfc9c9")
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu İsmi :', message.guild.name)
    .addField('Sunucu Bölgesi :', message.guild.region)
    .addField('Üye sayısı :', message.guild.memberCount)
    .addField('Sahibi :', message.guild.owner )
    .addField('Kanal sayısı :', message.guild.channels.size)
    .addField('Oluşturulma tarihi :', tah)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};