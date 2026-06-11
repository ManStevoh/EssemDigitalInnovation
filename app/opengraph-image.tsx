import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { siteConfig } from '@/lib/site';
import { brandColors } from '@/lib/brand-guide';

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
          background: brandColors.white,
          color: brandColors.deepNavy,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '32px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconBase64} width={88} height={88} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '36px', fontWeight: 700, color: brandColors.electricBlue }}>
              ESSEM DIGITAL
            </div>
            <div style={{ fontSize: '22px', fontWeight: 600, color: brandColors.deepNavy, letterSpacing: '0.12em' }}>
              INNOVATIONS
            </div>
          </div>
        </div>
        <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.15, maxWidth: '900px', marginBottom: '16px', color: brandColors.deepNavy }}>
          {siteConfig.brandTagline}
        </div>
        <div style={{ fontSize: '24px', color: brandColors.emeraldGreen, fontWeight: 500 }}>
          {siteConfig.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
