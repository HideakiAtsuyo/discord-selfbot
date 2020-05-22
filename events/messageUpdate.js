const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("../assets/config.json");

module.exports = (client, message, editedMessage) => {
  if (message.author.id == config.owner) {} else {return;}
    const prefix = config.prefix
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {

        let commandFile = require(`../commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        if (err instanceof Error && err.code === `${command} not found!`) {
            return;
        } else
            console.log(err)
    }
}
