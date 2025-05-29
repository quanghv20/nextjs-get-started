import Link from "next/link";
import { posts } from "@/lib/posts";

export default function PostsPage() {
  return (
    <main>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
