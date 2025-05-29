import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostDetailPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
