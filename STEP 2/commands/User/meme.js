const { MessageEmbed } = require('discord.js');
const config = require('../config');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    try {
        let res = await fetch('https://meme-api.herokuapp.com/gimme');
        res = await res.json();
        const embed = new MessageEmbed()
          .setTitle(res.title)
          .setImage(res.url)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
      } catch (err) {
        message.channel.send("Bitte versuche es in einigen Sekunden erneut.")
        console.error(err)
      }
}
