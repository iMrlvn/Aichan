import { UsingClient, Client } from "seyfert";
import { ActivityType, PresenceUpdateStatus } from 'seyfert/lib/types';

declare module 'seyfert' {
    interface UsingClient extends ParseClient<Client<true>> {}
}

const client = new Client({
    commands: {
        prefix: (message) => ["aichan", "ai"],
        reply: (ctx: any) => true,
        deferReplyResponse: (ctx: any) => ({ content: 'Sending request...' })
    },
    gateway: {
        properties: {
            os: 'android',
            browser: 'Discord Android',
            device: 'android'
        }
    },
    presence: (shardId: any) => ({
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