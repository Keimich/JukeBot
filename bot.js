const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const commands = require('./commands')
const prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;

  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(' ');
  return msg.reply(commands(args))

});

client.login(config.token);