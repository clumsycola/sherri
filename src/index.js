require('dotenv').config()

// Client = Bot, IntentsBitField = , Intents = Set of permissions bot can use to access set of events
const { Client, IntentsBitField } = require('discord.js');

// Link to intents in bookmark folder
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const chatBot = require('./chat.js');

// Logging when Sherri is online
client.on('ready', (c) => {
    console.log(`😎 ${c.user.username} is online.`);

    const channel = client.channels.cache.get('1023348123235516456');

    if (channel && channel.type === 'text') {
        channel.send(`😎 ${client.user.username} is online.`);
    } else {
        console.error('Channel not found or not a text channel.');
    }
});

chatBot(client);

client.login(process.env.DISCORD_KEY);