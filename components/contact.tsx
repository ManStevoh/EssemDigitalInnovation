'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactFormSchema } from '@/lib/contact-schema';
import {
  budgetRanges,
  projectTimelines,
  projectTypes,
  siteConfig,
} from '@/lib/site';
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

const fieldClass =
  'w-full rounded-md border border-[#E8ECF2] bg-white px-4 py-3 text-[15px] text-[#0A0F1C] placeholder:text-[#94A3B8] focus:border-[#0A0F1C] focus:outline-none focus:ring-2 focus:ring-[#0A0F1C]/10';

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
    <section id="contact" className="border-b border-[#E8ECF2] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-[#0A0F1C] sm:text-4xl">
            Start the conversation
          </h2>
          <p className="text-lg leading-relaxed text-[#64748B]">
            Tell us about your project — type, budget, and timeline help us respond with a clearer
            proposal. We reply within one business day.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0A0F1C]">Get in touch</h3>

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
                title: 'WhatsApp',
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#0A0F1C] text-white">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 font-semibold text-[#0A0F1C]">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-[#64748B] transition-colors hover:text-[#0A0F1C]"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-[#64748B]">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="border-t border-[#E8ECF2] pt-6">
              <h4 className="mb-4 font-semibold text-[#0A0F1C]">Follow us</h4>
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
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E8ECF2] text-[#475569] transition-colors hover:border-[#0A0F1C] hover:text-[#0A0F1C]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#E8ECF2] bg-[#F4F6F8] p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#0A0F1C]">
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
                    className={fieldClass}
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#0A0F1C]">
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
                    className={fieldClass}
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-[#0A0F1C]">
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  aria-invalid={!!errors.projectType}
                  className={fieldClass}
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
                  <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="budgetRange" className="mb-2 block text-sm font-medium text-[#0A0F1C]">
                    Budget range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    aria-invalid={!!errors.budgetRange}
                    className={fieldClass}
                    required
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="mt-1 text-sm text-red-600">{errors.budgetRange}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-[#0A0F1C]">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    aria-invalid={!!errors.timeline}
                    className={fieldClass}
                    required
                  >
                    <option value="" disabled>
                      Select a timeline
                    </option>
                    {projectTimelines.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#0A0F1C]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What do you need to digitize, automate, or launch online?"
                  rows={5}
                  aria-invalid={!!errors.message}
                  className={fieldClass}
                  required
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <label className="flex items-start gap-3 text-sm text-[#64748B]">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-1 size-4 rounded border-[#E8ECF2]"
                />
                <span>I agree to receive occasional updates about ESSEM products and services.</span>
              </label>

              {statusMessage && (
                <p
                  className={`text-sm ${status === 'success' ? 'text-[#059669]' : 'text-red-600'}`}
                  role="status"
                >
                  {statusMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="h-12 w-full rounded-full bg-[#0A0F1C] text-[15px] font-medium text-white hover:bg-black disabled:opacity-60 sm:w-auto sm:px-8"
              >
                {status === 'loading' ? 'Sending…' : 'Send message'}
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#E8ECF2]">
          <iframe
            title="ESSEM office map"
            src={siteConfig.mapEmbedUrl}
            className="h-64 w-full border-0 grayscale contrast-125 sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
