# Leon — Full Deploy

## Deploy på Render
- Build: `npm install`
- Start: `node index.js`
- Environment: `OPENAI_API_KEY`, (valfritt) `MONGO_URI`, `LEONA_PIN`
- Efter deploy: 
  - `/ping` → `PONG från Leon 🗝️`
  - `/health` → JSON med `mongo`
  - `/chat` → enkel chatt
  - `/leona?k=2745` → privat röst/emoji-portal
