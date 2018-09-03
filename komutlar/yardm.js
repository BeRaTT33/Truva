const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  const embed = new Discord.RichEmbed()
  .setDescription(`**${message.author.username}** İşte Komutlarım ! Mükemmel Değilmi Sencede ?`)

  .addField('Genel :', '``!yardım``, ``!ping``, ``!kullanıcıbilgi``, `!istatistik`, `!kullanıcı-bilgi`, `!sunucu-bilgi`')
  .addField('Eğlence Komutları :', '``!ascii``, ``!balık-tut``, ``!düello``, `!emojiyazı`, `!fortnite`, `!google`, `!hastebin`, `!sarıl`, `!stres-çarkı`, `!steam`, `!tokat-at`, `!yaz`, `!espiri`')

  .setThumbnail(message.author.avatarURL)

  .setColor('RANDOM')

  message.react('📮');
  message.author.send({embed});

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['y','help'],
  permLevel: 0 
};

exports.help = {
  name: 'yardım', 
  description: 'Tüm komutları listeler.',
  usage: 'yardım'
};
