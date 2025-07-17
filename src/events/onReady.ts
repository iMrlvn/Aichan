import { createEvent } from "seyfert";
import { ActivityType } from "seyfert/lib/types";

export default createEvent({
    data: { once: true, name: "botReady" },
    async run(user, client) {
        client.logger.info("Login as", user.username, "ready now!");
    }
})