const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <a:yes:694630470897369210>', '**SÜPER!** <a:yes:694630470897369210>', '**NASIL YAPTIN BUNU?!** <a:yes:694630470897369210>', '**MÜKEMMEL!** <a:yes:694630470897369210>', '**SEVDİM BUNU!** <a:yes:694630470897369210>', '**ŞİMDİ OLDU!** <a:yes:694630470897369210>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:no:694624619553882254>', '**OLMADI BU!** <a:no:694624619553882254>', '**HAY AKSİ!** <a:no:694624619553882254>', '**HADİ ORADAN!** <a:no:694624619553882254>', '**OLMADI YA!** <a:no:694624619553882254>', '**BÖYLE OLMAZ?!** <a:no:694624619553882254>', '**HADİ YA!** <a:no:694624619553882254>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}ban-kanal** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
    if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .ban-kanal ayarla/sıfırla #kanal yazmalısın.\nDetaylı bilgi için: .yardım ban-kanal`)
    if (args[0] == 'ayarla') {
 let kanal = message.mentions.channels.first() || message.guild.channels.get(args.join(' '))
  if (!kanal)     return message.channel.send(x2 + ` Bir kanal etiketle.`)
    db.set(`bankanal_${message.guild.id}`, kanal.id)
  let bankanal = await db.set(`bankanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + `  Ban kanalı ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    

    
    
    db.delete(`bankanal_${message.guild.id}`)

    message.channel.send(x + ` Ban kanalı başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['bankanal', 'banlog', 'ban-log'],
 permLevel: 0
};

exports.help = {
 name: 'ban-kanal',
 description: 'Birisi banulunca hangi kanala mesaj gideceğini ayarlarsınız.',
 usage: 'ban-kanal ayarla/sıfırla #kanal',
 kategori: '**AYARLAR**',
 permLvl: '**SUNUCUYU YÖNET**'
};