const { Client, Events, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
    // partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;
    if (commandName === "시작") {
    }
});

client.login(TOKEN);
