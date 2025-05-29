import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params; // Await params before accessing slug

  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
