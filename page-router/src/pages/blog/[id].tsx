import { useRouter } from "next/router";

export default function BlogDetailPage() {
  const { id } = useRouter().query;

  return <h1>Blog: {id}</h1>;
}
