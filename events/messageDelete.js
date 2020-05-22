const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("../assets/config.json");
const fs = require("fs")

module.exports = async (client, message) => {
    if (message.author.id == config.owner) {} else {return;}

    let n = new Date();
    let h = n.getUTCHours() + 1;
    let m = n.getUTCMinutes();
    let s = n.getUTCSeconds();

    var snipes = require("../snipe.json");
    let entry = await message.guild.fetchAuditLogs({
        type: 72
    }).then(audit => audit.entries.first())
    if (entry.executor.tag == undefined) return console.log("no");
    snipes[`${message.channel.id}`] = [`${message}`, `${message.author.tag}`, `${message.author.displayAvatarURL.replace("?size=2048", "")}`, `${message.channel.id}`, `${entry.executor.tag||message.author.tag}`, `${h} Hours ${m} Minuts and ${s} Seconds`];

    var fs = require('fs');
    var fileName = './snipe.json';

    fs.writeFile(fileName, JSON.stringify(snipes, null, 2), function(error) {
        if (error) {
            return console.log('oops error :(\n' + error)
        }
    });
}