import { Client } from "seyfert";
import { ActivityType, PresenceUpdateStatus } from 'seyfert/lib/types';

const client = new Client({
    commands: {
        prefix: (message) => [message.client.user.toString(), message.client.user.username, "ai"],
        reply: (ctx) => true,
        deferReplyResponse: (ctx) => ({ content: 'Sending request...' })
    },
    gateway: {
        properties: {
            os: 'android',
            browser: 'Discord Android',
            device: 'android'
        }
    },
    presence: (shardId) => ({
        status: PresenceUpdateStatus.Online,
        activities: [{
            name: "Aichan is here! (uwu)",
            type: ActivityType.Custom,
        }],
        since: Date.now(),
        afk: false,
    })
});

client.start()
    .then(() => {
        client.uploadCommands({ cachePath: './commands.json' });
    });