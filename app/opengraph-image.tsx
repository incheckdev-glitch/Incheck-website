import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'InCheck 360 — Operational Control Platform';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg,#06182f 0%,#082c55 65%,#0b65b9 100%)',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, fontWeight: 800 }}>
          <div style={{ width: 54, height: 54, borderRadius: 27, border: '3px solid #42a4ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 30, height: 30, borderRadius: 15, background: '#1286ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
          </div>
          <div>InCheck <span style={{ color: '#55b0ff' }}>360</span></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 980 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>Operational control across people, processes and equipment.</div>
          <div style={{ fontSize: 28, color: '#bfd2e5' }}>Check → Identify → Act → Verify</div>
        </div>
        <div style={{ display: 'flex', gap: 28, color: '#98bad8', fontSize: 20 }}>
          <span>Human checks</span><span>IoT monitoring</span><span>Corrective actions</span><span>Verification</span>
        </div>
      </div>
    ),
    size,
  );
}
