import { useRouter } from "next/router";

export default function Docs() {
  const { params = [] } = useRouter().query as any;
  return <div>Docs Path: {params.length ? params.join(" / ") : "Home"}</div>;
}
