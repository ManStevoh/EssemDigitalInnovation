'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPostShareUrl } from '@/lib/utm';
import { siteConfig } from '@/lib/site';

type Platform = 'facebook' | 'instagram' | 'linkedin' | 'whatsapp';

const platforms: { id: Platform; label: string }[] = [
  { id: 'facebook', label: 'Facebook' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'whatsapp', label: 'WhatsApp' },
];

type BlogSocialShareProps = {
  slug: string;
  title: string;
};

export function BlogSocialShare({ slug, title }: BlogSocialShareProps) {
  const [copied, setCopied] = useState<Platform | null>(null);
  const path = `/blog/${slug}`;
  const campaign = `blog-${slug}`;

  const copyLink = async (platform: Platform) => {
    const url = getPostShareUrl(siteConfig.url, path, platform, campaign);
    await navigator.clipboard.writeText(url);
    setCopied(platform);
    window.setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="mt-12 rounded-xl border border-border/60 bg-background p-6 sm:p-8">
      <h2 className="text-lg font-semibold mb-2">Share this article</h2>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        Copy a tracked link for {title}. Each link includes UTM tags so Google Analytics can
        attribute traffic to the platform you post on.
      </p>
      <div className="flex flex-wrap gap-2">
        {platforms.map(({ id, label }) => (
          <Button
            key={id}
            type="button"
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary"
            onClick={() => copyLink(id)}
          >
            {copied === id ? <Check size={14} /> : <Copy size={14} />}
            {copied === id ? 'Copied' : label}
          </Button>
        ))}
      </div>
    </section>
  );
}
