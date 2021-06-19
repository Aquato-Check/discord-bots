const { MessageEmbed } = require('discord.js');
const config = require('../config')

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
    .setDescription('`Pinging...`')
    .setColor(message.guild.me.displayHexColor);    
  const msg = await message.channel.send(embed);
  const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp;
  const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
  const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
  embed.setTitle(`Pong! :ping_pong:`)
    .setDescription('')
    .addField('Meine Latenz', latency, true)
    .addField('API Latenz', apiLatency, true)
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp();
  msg.edit(embed);
}