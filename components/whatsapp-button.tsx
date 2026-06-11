'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Live chat on WhatsApp — +254 728 210 962"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-white shadow-lg hover:bg-[#20BD5A] transition-colors"
    >
      <MessageCircle size={22} aria-hidden className="shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold">Live chat</span>
        <span className="text-[10px] font-medium opacity-90 hidden sm:block">WhatsApp</span>
      </span>
    </a>
  );
}
