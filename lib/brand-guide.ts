/**
 * ESSEM Digital Innovations — official brand tokens from brand guidelines.
 * @see Brand Guidelines PDF
 */
export const brandColors = {
  electricBlue: '#2563EB',
  emeraldGreen: '#10B981',
  deepNavy: '#0F172A',
  black: '#000000',
  white: '#FFFFFF',
} as const;

export const brandTypography = {
  /** Core brand typeface per guidelines */
  fontFamily: 'Montserrat',
} as const;

export const brandVoice = {
  tagline: 'Building a Connected World',
  pillars: ['professionalism', 'innovation', 'connectivity'] as const,
} as const;

/**
 * Official hover colour tokens.
 *
 * Use primary blue for interactive hovers (links, nav, card titles, buttons).
 * Use secondary green only for accent/success — not as the default hover.
 */
export const brandHover = {
  /** Nav links, breadcrumbs, inline links, contact details */
  link: brandColors.electricBlue,
  /** Primary CTA button background on hover */
  button: '#1D4ED8',
  /** Footer and muted text links */
  mutedLink: brandColors.deepNavy,
  /** Card headings on hover — same as link */
  cardTitle: brandColors.electricBlue,
  /** Accent / success emphasis only (not default interactive hover) */
  accent: brandColors.emeraldGreen,
  /** Subtle primary border on icon/link hovers */
  buttonBorder: 'rgba(37, 99, 235, 0.3)',
} as const;

/** Tailwind utility classes — use these instead of ad-hoc hover: classes */
export const brandHoverClasses = {
  link: 'hover-brand-link',
  mutedLink: 'hover-brand-muted-link',
  cardTitle: 'group-hover-brand-title',
  button: 'hover-brand-button',
  accent: 'hover-brand-accent',
  buttonBorder: 'hover-brand-button-border',
} as const;
