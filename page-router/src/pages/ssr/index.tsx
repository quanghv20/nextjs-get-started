import Layout from '@/components/Layout'
import { GetServerSideProps } from 'next'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface PostsPageProps {
  posts: Post[]
}

// --- In-memory cache ---
let cachedData: Post[] | null = null
let lastFetchTime: number = 0
const CACHE_TTL = 60 * 1000 // 60 giây

export const getServerSideProps: GetServerSideProps<PostsPageProps> = async () => {
  const now = Date.now()

  if (cachedData && now - lastFetchTime < CACHE_TTL) {
    console.log('📦 Dùng cache')
    return {
      props: {
        posts: cachedData,
      },
    }
  }

  console.log('🌐 Gọi API mới')
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts: Post[] = await res.json()

  // Lưu vào cache
  cachedData = posts
  lastFetchTime = now

  return {
    props: {
      posts,
    },
  }
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <Layout>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>📚 Danh sách bài viết (SSR + Cache)</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '20px' }}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default PostsPage
