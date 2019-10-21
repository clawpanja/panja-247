const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}

  	if (message.content === 'hi') {
  		message.reply('i am fine, You ?');
      }
      
      if(message.content === '!steam') {
          message.reply('https://steamcommunity.com/profiles/76561198875478329/');

          if(message,conent === '!youtube'){
              message.reply('https://www.youtube.com/channel/UCVp9Jpmb40swyL5UfSmqf3A');
          }
      }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
