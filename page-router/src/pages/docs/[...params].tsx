import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();
  const query = router.query;
  const params = Array.isArray(query.params) ? query.params : [];

  return <div>Docs Path: {params.join(" / ")}</div>;
}
