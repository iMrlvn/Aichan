import { Client, type ParseClient } from "seyfert";
import { ActivityType, PresenceUpdateStatus } from 'seyfert/lib/types';

declare module 'seyfert' {
    interface UsingClient extends ParseClient<Client<true>> { }
}

declare module 'seyfert' {
    interface InternalOptions {
        withPrefix: true | false;
    }
}

const client = new Client({
    commands: {
        prefix: (message) => ["aichan", "ai"],
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
            name: "Custom Status",
            state: "Aichan is here! (uwu)",
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