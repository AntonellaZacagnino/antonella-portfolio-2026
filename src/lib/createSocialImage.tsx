import { ImageResponse } from "next/og";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "54px 68px",
          background: "#0c0c0c",
          color: "#f4f3ef",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 140, width: 1, height: 630, background: "rgba(255,255,255,.08)" }} />
        <div style={{ position: "absolute", top: 0, right: 280, width: 1, height: 630, background: "rgba(255,255,255,.05)" }} />
        <div style={{ position: "absolute", right: -90, bottom: -220, width: 520, height: 520, borderRadius: 260, background: "rgba(255,90,54,.11)" }} />
        <div style={{ position: "relative", display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,.12)", paddingBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div style={{ display: "flex", width: 42, height: 42, alignItems: "center", justifyContent: "center", borderRadius: 21, background: "#ff5a36", color: "#0c0c0c", fontSize: 18, fontWeight: 700 }}>{"//"}</div>
              <span style={{ color: "#b8b6b0", fontFamily: "monospace", fontSize: 14, letterSpacing: 2 }}>PORTFOLIO · 2026</span>
            </div>
            <span style={{ color: "#a7d477", fontFamily: "monospace", fontSize: 12, letterSpacing: 1 }}>BUENOS AIRES · GMT−3</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 22 }}>
            <span style={{ color: "#9e9d99", fontFamily: "monospace", fontSize: 14, letterSpacing: 2 }}>FRONTEND DEVELOPER · FULL-STACK JAVASCRIPT</span>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 600, letterSpacing: -5, lineHeight: 0.96 }}>
              <span>Interfaces digitales</span>
              <span style={{ color: "#ff5a36", fontStyle: "italic", fontWeight: 500 }}>con intención.</span>
            </div>
            <p style={{ maxWidth: 610, margin: 0, color: "#b7b5b0", fontSize: 19, lineHeight: 1.55 }}>
              Experiencias rápidas, accesibles y memorables, desde la primera idea hasta el último pixel.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 13, color: "#9e9d99", fontFamily: "monospace", fontSize: 12, letterSpacing: 2 }}>
            <span style={{ width: 32, height: 1, background: "#ff5a36" }} />
            DESIGN WITH INTENT · BUILD WITH CARE
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
