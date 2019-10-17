const http = require('http');
const express = require('express');
const app = express();
const https = require('https');

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = (process.env.PREFIX);
const DiscordAntiSpam = require("discord-anti-spam");


client.on("ready", () => {
   console.log("Bot: On");
 client.user.setPresence({ status: "streaming",
        game: {
          
            name: "h?help | v0.1.7",
            type: "STREAMING",
            url: "https://twitch.tv/imdresden"
        }
                         })
});


const embedErr = new Discord.RichEmbed()
.setColor(0x42fcff)
.setDescription("{@user}, **Please stop spamming.**")

const embedBan = new Discord.RichEmbed()
.setColor(0x42fcff)
.setDescription("{@user_tag}, **Has been banned for spammer.** ||(╯°□°）╯︵ ┻━┻||")


const AntiSpam = new DiscordAntiSpam({
  warnThreshold: 3, 
  banThreshold: 7, 
  maxInterval: 2000, 
  warnMessage: embedErr, 
  banMessage: embedBan, 
  maxDuplicatesWarning: 7,
  maxDuplicatesBan: 15, 
  deleteMessagesAfterBanForPastDays: 1, 
  exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], 
  ignoreBots: true, 
  verbose: false, 
  ignoredUsers: [], 
  ignoredGuilds: [], 
  ignoredChannels: [] 
});
 
AntiSpam.on("warnEmit", (member) => console.log(`Attempt to warn ${member.user.tag}.`));
AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} has been warned.`));
AntiSpam.on("kickEmit", (member) => console.log(`Attempt to kick ${member.user.tag}.`));
AntiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} has been kicked.`));
AntiSpam.on("banEmit", (member) => console.log(`Attempt to ban ${member.user.tag}.`));
AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} has been banned.`));
AntiSpam.on("dataReset", () => console.log("Module cache has been cleared."));
 

 

client.on("message", async message => {
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(message.content)) return;
  AntiSpam.message(message);
  
  
  const content = message.content.split(' ').slice(1);
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const args2 = content.join(' ');
  
  client.login('token')
