
import { MetadataRoute } from 'next';
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const notebookUrls = Object.keys(NOTEBOOKS).map((id) => ({
    url: `https://ezz.ae/notebooks/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://ezz.ae',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://ezz.ae/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
        url: 'https://ezz.ae/projection',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
      url: 'https://ezz.ae/timeline',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
        url: 'https://ezz.ae/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    ...notebookUrls,
  ];
}

    

    