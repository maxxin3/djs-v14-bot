const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { Colors } = require('discord.js');

module.exports = {
    name: "embed",
    description: "embeds",
    aliases: ["em"],
    userPerms: [],
    botPerms: [],
    enabled: true,
    nsfw: false,
    run: async (client, message, args) => {
    ////
    const help = new EmbedBuilder()
      .setTitle(`${client.user.username} Help`)
      .setColor("Blue")
      .setDescription(`types of the embeds`) 
      .addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)

      .setTimestamp()
      .setFooter({ text: "Hope you like me!" })
 
      const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel("Invite Me")
        .setStyle(ButtonStyle.Link)
        .setEmoji("🔗")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=903981158507900979&permissions=8&scope=bot%20applications.commands`)
     )
    .addComponents(
      new ButtonBuilder()
        .setLabel("Support")
        .setStyle(ButtonStyle.Link)
        .setEmoji("989105545946497055")
        .setURL("https://discord.gg/UybeVq66hF")
    )

  
    await message.channel.send({ embeds: [help], components: [row] });
            
    }
};
