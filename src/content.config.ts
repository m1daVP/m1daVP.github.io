import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      period: z.string().optional(),
      tags: z.array(z.string()).default([]),
      techStack: z.array(z.string()).default([]),
      coverImage: image(),
      coverIsPlaceholder: z.boolean().default(true),
      order: z.number().default(0),
      draft: z.boolean().default(true),
      mappingConfirmed: z.boolean().default(true),
      slug: z.string().optional(),
    }),
});

export const collections = { projects };
