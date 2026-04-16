# Instagram Integration

This project now supports a real Instagram feed on the homepage through a secure server-side endpoint.

## What is already wired

- The homepage social section fetches data from `VITE_INSTAGRAM_FEED_URL`.
- A sample serverless endpoint lives at `api/instagram-feed.js`.
- The UI expects up to 4 posts and falls back to placeholder cards if the endpoint is unavailable.

## Required Meta setup

1. Use an Instagram Professional account.
   A Business or Creator account is required for modern official integrations.
2. Connect the Instagram account to a Facebook Page.
3. Create a Meta app and configure the Instagram API flow.
4. Generate a long-lived access token.
5. Retrieve the Instagram user ID for the connected account.

## Environment variables

Copy `.env.example` into your real environment configuration and set:

- `VITE_INSTAGRAM_FEED_URL`
- `INSTAGRAM_ACCESS_TOKEN`
- `INSTAGRAM_USER_ID`

## Deployment note

`api/instagram-feed.js` is written in a serverless style that works well as a starting point for platforms such as Vercel. If this site is hosted elsewhere, move the same logic into that platform's server/backend layer and keep the token server-side.

## Local frontend

Run:

```powershell
npm.cmd run dev
```

If your local setup does not serve `api/instagram-feed.js`, point `VITE_INSTAGRAM_FEED_URL` to whichever backend route hosts the Instagram proxy.
