import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Megatha Tech — Software House Bali, Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#f1f5f9",
            borderRadius: 999,
            padding: "10px 20px",
            fontSize: 18,
            fontWeight: 700,
            color: "#64748b",
            letterSpacing: "0.08em",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#10b981",
            }}
          />
          SOFTWARE HOUSE · BALI, INDONESIA
        </div>

        {/* Middle — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Ide bisnis kamu layak
            <br />
            punya software yang
            <br />
            <span style={{ color: "#6366f1" }}>benar-benar bekerja.</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#64748b",
              fontWeight: 500,
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Web app · Otomasi · Platform digital
          </div>
        </div>

        {/* Bottom — brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#111111",
              letterSpacing: "-0.02em",
            }}
          >
            megatha-tech.vercel.app
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#111111",
              background: "#f8fafc",
              borderRadius: 12,
              padding: "12px 24px",
              border: "2px solid #e2e8f0",
            }}
          >
            Megatha Tech
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
