const { EmbedBuilder, Message, Client, PermissionsBitField } = require("discord.js");
const { Collection } = require('discord.js');
const Timeout = new Collection();
const ms = require('ms')
const client = require("../index");
const { OWNER_ID } = require("../config.js")

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

    if (command.botPerms) {
            if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
                embed.setDescription(`I don't have **\`${command.botPerms}\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.`);
                return message.channel.send({ embeds: [embed] });
            }
        }
       //command enaled thing
       if(command.enabled === false) {
      return message.reply('This command is disabled!')
    }

       if (command.userPerms) {
            if (!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
                embed.setDescription(`You don't have **\`${command.userPerms}\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.`);
                return message.channel.send({ embeds: [embed] });
            }
        }

       //nsfw thingy
    if(command.nsfw === true) {
      if(message.channel.nsfw === false) {
        return message.reply('This command is NSFW only, mark the channel as nsfw for this command to work!')
      }
    }


  await command.run(client, message, args);
    
});
