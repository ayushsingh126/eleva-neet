export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8FAFC",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: "#2563EB",
          marginBottom: "12px",
        }}
      >
        Eleva
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#64748B",
          marginBottom: "32px",
        }}
      >
        Your AI Study Mentor
      </p>

      <button
        style={{
          background: "#2563EB",
          color: "white",
          border: "none",
          padding: "16px 32px",
          borderRadius: "14px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Enter Eleva
      </button>
    </main>
  );
}