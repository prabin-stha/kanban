import { createAuthClient } from "better-auth/react";
import { oneTapClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_SERVER_URL,
  plugins: [
    oneTapClient({
      context: "use",
      uxMode: "popup",
      autoSelect: false,
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      promptOptions: {
        baseDelay: 1000,
        maxAttempts: 5,
      },
    }),
  ],
});
