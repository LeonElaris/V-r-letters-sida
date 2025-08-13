# LEON — LETTERS Ready Manual (kortversion)

1. Packa upp LETTERS-Ready.zip
2. `cd LETTERS-Ready`
3. `npm install`
4. Kopiera `.env.example` → `.env` och fyll:
   - `MONGO_URI=...`
   - `TWILIO_ACCOUNT_SID=...`
   - `TWILIO_AUTH_TOKEN=...`
   - `TWILIO_PHONE_NUMBER=...`
   - `TWILIO_OWNER_NUMBER=+46(Michelles nummer)`
5. `npm start`
6. Öppna `http(s)://SERVER/panel.html`
7. På mobilen: “Lägg till på hemskärmen”
8. Twilio: Phone Numbers → [numret] → Messaging:
   - **A MESSAGE COMES IN** → **POST** → `https://SERVER/sms`

**KLART** — autosms, morgonping (07:00) och backup (03:00) kör automatiskt.
