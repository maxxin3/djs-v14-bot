const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const mongoose = require("mongoose");
const globPromise = promisify(glob);


module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });
    

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    client.on("ready", async () => {
const cfonts = require('cfonts');
const banner = cfonts.render((`Maxine`), {
		font: 'block',
		color: 'candy',
		align: 'left',
		gradient: ["red","magenta"],
		lineHeight: 3
	});
console.log(banner.string); 
        

});

    // mongoose
    
    if (!client.config.mongooseConnectionString) return;

mongoose.connect(client.config.mongooseConnectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Connected to mongodb'));
}
