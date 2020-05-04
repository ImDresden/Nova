const http = require("http");
const express = require("express");
const app = express();
const https = require("https");

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/riot.txt", function(request, response) {
  response.sendFile(__dirname + "/riot.txt");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require("discord.js");
const discord = require("discord.js");
const Canvas = require("canvas");
const DB = require("quick.db");
const ranking = new DB.table("ranking");
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const prefix = process.env.PREFIX;
const modPrefix = process.env.ADMIN_PREFIX;
const shorten = require("isgd");
const config = require("./config.json");
const { stripIndents } = require("common-tags");
const math = require("math-expression-evaluator");
const randomPuppy = require("random-puppy");
const moment = require("moment");
const weather = require("weather-js");
const db = require("megadb");
const prefix_db = new db.crearDB("prefijos");
const humanizeduration = require("humanize-duration");
const fetch = require("node-fetch");
const repCooldown = new Set();
const passport = require("passport");
const hastebin = require("hastebin-paste");
const session = require("express-session");
const { Strategy } = require("passport-discord");
const overwatch = require("overwatch-stats-api");
const ping = require("minecraft-server-util");
const request = require("request");
const bodyparser = require("body-parser");
const path = require("path");
const fs = require("fs");
const figlet = require("figlet");
const superagent = require("superagent");


let scope = ["identify", "guilds"];

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: 642061908538687528,
      clientSecret: process.env.CLI_SECRET,
      callbackURL: `${process.env.URL}/login`,
      scope: scope
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        return done(null, profile);
      });
    }
  )
);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 3000).use(
  session({
    secret: "Nova",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  next();
});

app.use("/", require("./routes/index"));

app.get("/profile", function(request, response) {
  response.send(profile);
});

const { Client, Util } = require("discord.js");
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require("./config");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const client = new Client({ disableEveryone: true });

const color = "#69ffbe";

client.on("warn", console.warn);

client.on("error", console.error);

client.on("disconnect", () =>
  console.log(
    "I just disconnected, making sure you know, I will reconnect now..."
  )
);

client.on("reconnecting", () => console.log("I am reconnecting now!"));

client.on("ready", () => {
  console.log("Bot: On");
 
 }
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  
  const voiceChannel = message.member.voiceChannel;
  const searchString = args.slice(0).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(message.guild.id);
  
  const content = message.content.split(" ").slice(1);
  const args2 = content.join(" ");
  
});

client.login(process.env.TOKEN)
