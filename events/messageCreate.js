const { Collection } = require('discord.js');
const Timeout = new Collection();
const ms = require('ms')
const client = require("../index");
const { OWNER_ID } = require("../config.json")

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

     if (!command) return;
     if(command.ownerOnly) {
     if(message.author.id !== client.config.OWNER_ID) return client.error("Bot owner can only use this command", message)
    }

  await command.run(client, message, args);
    
});
