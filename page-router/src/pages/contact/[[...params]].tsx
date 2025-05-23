import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const params = Array.isArray(router.query.params) ? router.query.params : [];

  return (
    <Layout>
      <div>Docs Path: {params.length ? params.join(" / ") : "Home"}</div>
    </Layout>
  );
}
