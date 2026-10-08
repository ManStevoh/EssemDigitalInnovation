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
      className="fixed bottom-4 right-4 z-50 flex size-12 items-center justify-center rounded-md bg-[#25D366] text-white shadow-md transition-colors hover:bg-[#20BD5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] sm:bottom-6 sm:right-6 sm:h-12 sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
    >
      <MessageCircle size={22} aria-hidden className="shrink-0" />
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-sm font-semibold">Live chat</span>
        <span className="text-[10px] font-medium opacity-90 hidden sm:block">WhatsApp</span>
      </span>
    </a>
  );
}
