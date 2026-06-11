import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/site';

type LogoProps = {
  variant?: 'icon' | 'full';
  className?: string;
  imageClassName?: string;
  href?: string | null;
};

export function Logo({ variant = 'full', className, imageClassName, href = '/' }: LogoProps) {
  const image =
    variant === 'icon' ? (
      <Image
        src={brand.icon}
        alt="ESSEM Digital Innovations"
        width={40}
        height={40}
        className={cn('h-9 w-9 object-contain', imageClassName)}
        priority
      />
    ) : (
      <Image
        src={brand.logo}
        alt="ESSEM Digital Innovations — Building a Connected World"
        width={280}
        height={100}
        className={cn('h-12 sm:h-16 w-auto object-contain', imageClassName)}
        priority
      />
    );

  const content = <span className={cn('inline-flex items-center', className)}>{image}</span>;

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
