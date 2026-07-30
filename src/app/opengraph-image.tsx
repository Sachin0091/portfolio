import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1c1712",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(224,164,88,0.25), transparent 55%)",
          color: "#f3ead9",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#e0a458",
            fontSize: 28,
            marginBottom: 28,
          }}
        >
          sachin01.com.np
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#e0a458",
            marginTop: 20,
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#b3a58c",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          SIEM Monitoring · Threat Hunting · Incident Response · MITRE ATT&CK
        </div>
      </div>
    ),
    { ...size }
  );
}
