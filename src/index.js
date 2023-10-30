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

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    }

    if (msg.content === 'hello', 'Hello', 'Hello!', 'hello!') {
        console.log('Received: ' + msg.content);
        msg.reply('Hello!', 'Howdy!', 'Hey there!')
           .then(sent => console.log('Sent: ' + sent.content));
    }

    if (msg.content === 'Smile') {
        console.log('Received: ' + msg.content);

        setTimeout(() => {
            msg.reply(':)')
                .then(sent => {
                    console.log('Sent: ' + sent.content); // Log the sent message
                });
        }, 3000);
    }

    if (msg.content === 'Thanks') {
        console.log('Recieved: ' + msg.content);

        setTimeout(() => {
            msg.reply('No problem')
                .then(sent => {
                    console.log('Sent: ' + sent.content); // Log the sent message
                });
        }, 3000);
    }
});

client.login(process.env.DISCORD_KEY);