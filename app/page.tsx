import Link from "next/link";

export default function Home() {
  const btn = {
    marginTop: "12px",
    padding: "10px 20px",
    background: "#ff7f50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block"
  } as const;

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1>💌 Welcome to Leon Letters</h1>
      <p>Where words travel between worlds 🗝️✨</p>

      <div style={{marginTop: 20, display: "grid", gap: 10}}>
        <Link href="/about" style={btn}>Go to About Page</Link>
        <Link href="/letters" style={btn}>Open Letters</Link>
      </div>
    </main>
  );
}
