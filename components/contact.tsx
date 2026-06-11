'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Send, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactFormSchema } from '@/lib/contact-schema';
import {
  budgetRanges,
  projectTimelines,
  projectTypes,
  siteConfig,
} from '@/lib/site';
import { brandHoverClasses } from '@/lib/brand-guide';
import { getWhatsAppUrl } from '@/lib/whatsapp';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const initialFormData = {
  name: '',
  email: '',
  projectType: '' as (typeof projectTypes)[number] | '',
  budgetRange: '' as (typeof budgetRanges)[number] | '',
  timeline: '' as (typeof projectTimelines)[number] | '',
  message: '',
  marketingConsent: false,
};

const selectClassName =
  'w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

const inputClassName =
  'w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

export function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const whatsappHref = getWhatsAppUrl();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');
    setErrors({});

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      setStatus('idle');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setStatusMessage(data.error ?? 'Failed to send message. Please try again.');
        return;
      }

      setStatus('success');
      setStatusMessage("Message sent! We'll get back to you within 24 hours.");
      setFormData(initialFormData);
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again or email us directly.');
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
    { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Start the conversation</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Tell us about your project — type, budget, and timeline help us respond with a clearer
            proposal. We reply within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <h3 className="text-xl font-bold">Get in touch</h3>

            {[
              {
                icon: Mail,
                title: 'Email',
                content: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: Phone,
                title: 'Phone',
                content: siteConfig.phone,
                href: `tel:${siteConfig.phone.replace(/\D/g, '')}`,
              },
              {
                icon: MessageCircle,
                title: 'Live chat (WhatsApp)',
                content: siteConfig.phone,
                href: whatsappHref,
                external: true,
              },
              {
                icon: MapPin,
                title: 'Office',
                content: siteConfig.location,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className={`text-foreground/70 ${brandHoverClasses.link}`}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="pt-6 border-t border-border/40">
              <h4 className="font-semibold mb-4">Follow us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/50 text-foreground/70 ${brandHoverClasses.link} ${brandHoverClasses.buttonBorder}`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-background p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    className={inputClassName}
                    required
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    className={inputClassName}
                    required
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  aria-invalid={!!errors.projectType}
                  className={selectClassName}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-sm text-destructive mt-1">{errors.projectType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium mb-2">
                    Budget range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    aria-invalid={!!errors.budgetRange}
                    className={selectClassName}
                    required
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="text-sm text-destructive mt-1">{errors.budgetRange}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    aria-invalid={!!errors.timeline}
                    className={selectClassName}
                    required
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    {projectTimelines.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className="text-sm text-destructive mt-1">{errors.timeline}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your goals, users, and any specific requirements..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  className={`${inputClassName} resize-none`}
                  required
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <label className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                />
                <span>
                  Send me updates, insights, and promotional offers from ESSEM Digital Innovations.{' '}
                  <Link href="/privacy" className={`text-primary ${brandHoverClasses.link}`}>
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <Button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-primary text-primary-foreground ${brandHoverClasses.button}`}
              >
                {status === 'loading' ? 'Sending...' : 'Send inquiry'}
                <Send size={18} />
              </Button>

              {statusMessage && (
                <p
                  role="status"
                  className={`text-sm text-center ${status === 'success' ? 'text-secondary' : 'text-destructive'}`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border/60 h-64 sm:h-80">
          <iframe
            title={`${siteConfig.name} office location`}
            src={siteConfig.mapEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
