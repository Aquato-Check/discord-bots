const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`${client.user.username} ist online!`)
});

client.on("message", (message) => {
    if(message.content === 'ping') {
        message.channel.send("PONG")
    }
    if(message.content == 'Hey') {
        message.reply('hey')
    }
})

client.login(config.token)