# hinata-changelog

A Cloudflare Worker that merges every project's `CHANGELOG.md` into the feed
the docs read for the What's New bar, the home page list and the timeline at
`/whats-new`. The projects and the file format are in
[`changelog/feed.ts`](../../changelog/feed.ts).

## Deploy

1. Create a fine-grained GitHub token with read-only **Contents** access to
   the repositories listed in `changelog/feed.ts`.
2. In this directory:

   ```bash
   npm install
   npx wrangler secret put GITHUB_TOKEN
   npx wrangler deploy
   ```

3. Give it a domain (uncomment `routes` in `wrangler.toml`), and set
   `CHANGELOG_FEED_URL` for the docs build if it is not
   `https://changelog.neri.moe/changelog.json`.

The feed is cached for 10 minutes, so a pushed changelog reaches the docs
within that time.
