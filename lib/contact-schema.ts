import { z } from 'zod';
import { budgetRanges, projectTimelines, projectTypes } from '@/lib/site';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.enum(projectTypes, { required_error: 'Please select a project type' }),
  budgetRange: z.enum(budgetRanges, { required_error: 'Please select a budget range' }),
  timeline: z.enum(projectTimelines, { required_error: 'Please select a timeline' }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  marketingConsent: z.boolean().optional().default(false),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
