export type Project = {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Cultural';
  description: string;
  longDescription: string;
  keyElements: string;
  coverImage: string;
  images: string[];
  year: number;
};

export type Post = {
  slug: string;
  title:string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
};

export type NavLink = {
  href: string;
  label: string;
};
