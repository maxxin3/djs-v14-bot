//PACK
const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  disableEveryone: true,
  shards: "auto",
  disableMentions: "everyone",
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction],
  intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,

      ],
});

module.exports = client;

// Global Variables
client.commands = new Collection();

client.config = require("./config.js");

const mongoose = require("mongoose");
const prefix = client.config.prefix
const token = client.config.token

// Initializing the project
require("./handler")(client);
require('dotenv').config()

client.on('ready', async () => {
  console.log(`${client.user.tag} is now Onlone! Prefix: ${client.config.prefix}`.bgGreen);
});

client.login(client.config.token || process.env.token);
