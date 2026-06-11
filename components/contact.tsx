'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Facebook, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactFormSchema } from '@/lib/contact-schema';
import { siteConfig } from '@/lib/site';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again or email us directly.');
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
    { name: 'GitHub', href: siteConfig.social.github, icon: Github },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Start the conversation</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Whether you need a mobile app, startup ICT support, a security operations system, or
            a digital marketing plan — describe your requirements and we will respond within one
            business day with next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      <a href={item.href} className="text-foreground/70 hover:text-primary transition-colors">
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
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-background p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your business, what you need, and your timeline..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  required
                />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
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
      </div>
    </section>
  );
}
