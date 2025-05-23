import { useState } from "react";
import { GetStaticProps } from "next";
import Layout from "@/components/Layout";

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IPostList {
  postList: IPost[];
}

const POSTS_PER_PAGE = 6;

export default function PostPage(props: IPostList) {
  const { postList } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(postList.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = postList.slice(startIdx, startIdx + POSTS_PER_PAGE);
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">📝 Post List</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-shadow min-h-[240px]"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.body}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IPostList> = async () =>
  // context: GetStaticPropsContext
  {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const dataRes = await res.json();

    const postList = dataRes.map((item: IPost) => ({
      id: item.id,
      title: item.title,
      body: item.body,
    }));

    return {
      props: {
        postList,
      },
    };
  };
