import Link from "next/link";

export default function Home() {
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

      <Link href="/about" style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#ff7f50",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold"
      }}>
        Go to About Page
      </Link>
    </main>
  );
}
