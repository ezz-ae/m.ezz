import { posts } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';

export default function BlogPage() {
  return (
    <div className="container py-16 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          From The Studio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thoughts on Architecture, Design, and Philosophy
        </p>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
