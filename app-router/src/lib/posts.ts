export type Post = {
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "1. Hello World",
    content: "Đây là bài viết đầu tiên.",
  },
  {
    slug: "learn-nextjs",
    title: "2. Learn Next.js Step by step",
    content: "Nội dung chi tiết về cách học Next.js.",
  },
];
