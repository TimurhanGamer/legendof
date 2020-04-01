const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Yetkililer`, client.user.avatarURL) 
             .setThumbnail( message.guild.iconURL )
             .addField(`Kurucumuz`, `<@604950465490452493> `) // bunlar boş kalırsa hata verir
             .addField(`Adminler`, `<@335005334231973889> \n<@414123882996563979> \n<@259644482557837314> \n<@446921572259987458> \n<@694533025177927711>`) // bunlar boş kalırsa hata verir
        .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(yardim);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['yetkililer'],
	permLevel : 0
}

exports.help = {
	name : 'yetkililer',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}