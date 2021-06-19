const { MessageEmbed } = require('discord.js');
const config = require('../config')

exports.run = async (client, message, args) => {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }
    
    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});

    const embed = new MessageEmbed()
    .setTitle(`${user.tag}'s Avatar`)
    .setDescription(`[Link](${avatar})`)
    .setColor(config.farbe_grün)
    .setImage(avatar)
    
    return message.channel.send(embed);
  }