import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/utils';
import type { Post } from '@/lib/types';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const postImage = getImage(post.coverImage);
  const formattedDate = format(new Date(post.date), "MMM d, yyyy");

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg dark:hover:shadow-primary/10">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-video overflow-hidden">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            width={800}
            height={500}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={postImage.imageHint}
          />
        </div>
      </Link>
      <CardHeader>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
        <CardTitle className="font-headline text-xl leading-tight">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild variant="link" className="p-0">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
