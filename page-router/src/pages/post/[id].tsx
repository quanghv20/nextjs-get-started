import Layout from "@/components/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export interface IPost {
  id: string;
  title: string;
  body: string;
}

export type PropsType = {
  post: IPost;
};

export default function PostDetailPage(props: PropsType) {
  const { post } = props;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          📝 {post.title}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">{post.body}</p>

        <div className="mt-6 text-sm text-gray-400">Post ID: {post.id}</div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const postList = await res.json();

  return {
    paths: postList.map((item: IPost) => ({
      params: { id: item.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: IPost }> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.id;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const postInfo = await res.json();

  return {
    props: {
      post: {
        id: postInfo.id,
        title: postInfo.title,
        body: postInfo.body,
      },
    },
  };
};
