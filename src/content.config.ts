import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    department: z.enum(['property', 'private-client', 'litigation']),
    title: z.string(),
    photo: z.string().optional(),
    email: z.string().email(),
    phone: z.string(),
    specialisms: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['personal', 'business']),
    department: z.string(),
    summary: z.string(),
    icon: z.string().default('briefcase'),
    relatedServices: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const vacancies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vacancies' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.string(),
    department: z.string(),
    active: z.boolean().default(true),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { team, services, vacancies, blog };
