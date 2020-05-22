const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const chalk = require("chalk");
const superagent = require("superagent")
const config = require("../assets/config.json");
module.exports = (client, guild, files, message) => {

var now = new Date();
var heures = now.getHours();
var minutes = now.getMinutes();
var secondes = now.getSeconds();
var times = (chalk.red(`[`) + chalk.blue(`${heures}:${minutes}:${secondes}`) + chalk.red(`]/`));

fs.readdir("./commands/", async (err, files) => {
  const filez = files.length
  if (err) return console.error(err);
  console.log(`${filez} commands!`)
})
console.log(times + `\x1b[36m%s\x1b[0m`, '[INFO]', '\x1b[0m', 'Logged in as ' + `${client.user.username}#${client.user.discriminator} - (${client.user.id})\nNumber of guilds: ${client.guilds.size}\n`);  
}