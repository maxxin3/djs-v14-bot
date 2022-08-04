const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ping",
    description: "Check Bot's Ping",
    aliases: ["ping"],
    userPerms: [],
    botPerms: [],
    run: async (client, message, args) => {
    ////

await message.reply({ content: "**Getting The Latency**" }).then(async (msg) => {
      var ping = msg.createdAt - message.createdAt;
      var api_ping = client.ws.ping;

      const PingEmbed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`\`\`\`ini\n[ Bot Latency ] :: ${ping}ms \n[ API Latency ] :: ${api_ping}ms \`\`\``)
      await msg.edit({ content: "** **", embeds: [PingEmbed] })
    })
  }
}
