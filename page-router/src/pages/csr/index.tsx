import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

export default function CSRPage() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json.title)); // lấy trường title làm data
  }, []);

  if (!data)
    return (
      <Layout>
        <p>Đang tải dữ liệu...</p>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <h1>Dữ liệu tải từ API:</h1>
        <p>{data}</p>
      </div>
    </Layout>
  );
}
