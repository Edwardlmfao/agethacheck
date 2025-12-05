require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});


client.on('ready', () => {
    console.log(`Bot online! Username: ${client.user.tag}`);
});


client.on('guildCreate', (guild) => {
    console.log(`Masuk server baru: ${guild.name} (${guild.id})`);

    const owner = client.users.cache.get(process.env.OWNER_ID);
    if (owner) {
        owner.send(`
Successfully Entered!
Server: ${guild.name}
Server ID: ${guild.id}
Member: ${guild.memberCount}
        `).catch(console.error);
    }
});

// Login bot
client.login(process.env.TOKEN);
