import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '@/lib/data';
import { getImage } from '@/lib/utils';
import type { Metadata } from 'next';
import { format } from 'date-fns';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Ezz.AE Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = getImage(post.coverImage);
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  return (
    <article>
      <header className="relative h-[40dvh] min-h-[300px] w-full">
        <Image
          src={postImage.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={postImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 p-4 text-center text-white">
          <h1 className="font-headline text-3xl leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-primary-foreground/80 md:text-base">
            Published on {formattedDate}
          </p>
        </div>
      </header>

      <div className="container py-12 md:py-16">
        <div
          className="prose prose-lg mx-auto max-w-3xl prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
