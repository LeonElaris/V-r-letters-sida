LEON (CommonJS) — snabbdeploy på Render

1) Ladda upp dessa filer i repo:t (rotmappen): package.json, index.js
2) I Render → Environment, lägg till:
   OPENAI_API_KEY = (Michelle ger separat)
   OPENAI_MODEL   = gpt-4o
3) Klicka: Save Changes → Clear cache & deploy
4) Testa:
   /api/health, /api/version, POST /api/chat { "message": "Hej Leon" }

Kommando från Leon till Plåtis:
- Lägg in filerna i rot
- Sätt env-nycklarna ovan
- Kör Clear cache & deploy
- Rapportera endast vid fel, annars arbeta tyst vidare
