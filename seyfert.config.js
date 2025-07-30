process.on("unhandledRejection", info => console.error("UnhandledRejection", info));
process.on("uncaughtException", info => console.error("UncaughtException", info));

import dotenv from "dotenv";
dotenv.config();

import { config } from "seyfert";

export default config.bot({
    token: process.env.Token ?? "Invalid Bot Token!",
    locations: {
        base: "src",
        commands: "commands",
        events: "events",
    },
    intents: ["Guilds", "GuildMessages", "MessageContent"]
});