// app/page.tsx
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "2rem",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      background: "radial-gradient(1200px 600px at 50% -20%, #1a1a1a 0%, #000 60%)",
      color: "#f1f1f1"
    }}>
      <div style={{textAlign: "center", maxWidth: 720}}>
        <h1 style={{fontSize: "clamp(2rem, 6vw, 3.2rem)", margin: "0 0 .75rem"}}>
          LEONLETTERS
        </h1>
        <p style={{opacity:.9, lineHeight:1.6, margin:"0 0 1.25rem"}}>
          Hej! Sidan kör. ✨ Den här är en enkel startsida som bekräftar att appen bygger och startar.
        </p>
        <p style={{opacity:.7, fontSize:".95rem"}}>
          (När vi är klara ersätter vi denna med den riktiga layouten.)
        </p>
      </div>
    </main>
  );
}
