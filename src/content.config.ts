import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pizzas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pizzas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
  }),
});

export const collections = { pizzas };