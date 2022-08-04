const { OWNER_ID } = require("../../config.js")

/* 
example usage
module.exports = {
  name: "name",
  description: "description",
  aliases: [], 
  enabled: true,
  nsfw: false,
  userPerms: [],
  botPerms: [],
  run: async (client, message, args) => {
   
   ////owner only

    if (message.author.id != OWNER_ID) {
    return message.reply("Limited to the bot owner only!");
    }
   /////

   //code


  },
};
