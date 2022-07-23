const client = require("..")

client.on("ready", () => {
	console.log("--------- Pixie is ready! ---------");
	client.user.setActivity(`${client.config.prefix}help`, { type: 'LISTENING' });
});
