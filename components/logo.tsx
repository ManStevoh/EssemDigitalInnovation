import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/site';

type LogoProps = {
  variant?: 'icon' | 'wordmark' | 'full';
  className?: string;
  imageClassName?: string;
  href?: string | null;
};

function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src={brand.icon}
      alt=""
      width={40}
      height={40}
      className={cn('h-9 w-9 object-contain', className)}
      priority
      unoptimized
      aria-hidden
    />
  );
}

export function Logo({ variant = 'wordmark', className, imageClassName, href = '/' }: LogoProps) {
  let content: ReactNode;

  if (variant === 'icon') {
    content = (
      <span className={cn('inline-flex items-center', className)}>
        <LogoIcon className={imageClassName} />
      </span>
    );
  } else if (variant === 'wordmark') {
    content = (
      <span className={cn('inline-flex items-center gap-2.5', className)}>
        <LogoIcon className={cn('h-8 w-8 sm:h-9 sm:w-9', imageClassName)} />
        <span className="leading-tight">
          <span className="block text-xs sm:text-sm font-bold text-primary tracking-wide">
            ESSEM DIGITAL
          </span>
          <span className="block text-[9px] sm:text-[10px] font-semibold text-foreground/80 tracking-[0.2em]">
            INNOVATIONS
          </span>
        </span>
      </span>
    );
  } else {
    content = (
      <span className={cn('inline-flex items-center', className)}>
        <Image
          src={brand.logo}
          alt="ESSEM Digital Innovations — Building a Connected World"
          width={862}
          height={188}
          className={cn('h-11 sm:h-14 w-auto max-w-[min(100%,280px)] sm:max-w-[320px] object-contain object-left', imageClassName)}
          priority
          unoptimized
        />
      </span>
    );
  }

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0" aria-label="ESSEM Digital Innovations — Home">
        {content}
      </Link>
    );
  }

  return content;
}
