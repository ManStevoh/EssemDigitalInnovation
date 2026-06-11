import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { siteConfig } from '@/lib/site';

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const iconPath = join(process.cwd(), 'public/brand/favicon.png');
  const iconBuffer = await readFile(iconPath);
  const iconBase64 = `data:image/png;base64,${iconBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#000000',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '40px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconBase64} width={96} height={96} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '42px', fontWeight: 700, color: '#3B82F6' }}>ESSEM DIGITAL</div>
            <div style={{ fontSize: '28px', fontWeight: 600, color: '#1E40AF', letterSpacing: '0.15em' }}>
              INNOVATIONS
            </div>
          </div>
        </div>
        <div style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.15, maxWidth: '900px', marginBottom: '24px' }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: '26px', color: '#10B981', fontStyle: 'italic' }}>{siteConfig.brandTagline}</div>
        <div style={{ position: 'absolute', bottom: '60px', left: '80px', fontSize: '22px', opacity: 0.6 }}>
          {siteConfig.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
