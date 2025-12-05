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


client.on('guildCreate', async (guild) => {
    console.log(`Masuk server baru: ${guild.name} (${guild.id})`);

    try {
        const owner = await client.users.fetch(process.env.OWNER_ID);
        await owner.send(`
Successfully Entered!
Server: ${guild.name}
Server ID: ${guild.id}
Member: ${guild.memberCount}
         `);
    } catch (err) {
        console.error("Failed:", err);
    }
});
// Login bot
client.login(process.env.TOKEN);
