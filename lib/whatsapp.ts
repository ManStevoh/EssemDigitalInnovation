import { siteConfig } from '@/lib/site';

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? `Hello ${siteConfig.shortName}, I would like to discuss a project.`
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
