import React from "react";
import Layout from "@/components/Layout";

export default function HomePage() {
  return <Layout title="Trang chủ">
    <h1 className="text-3xl font-bold">Welcome to MySite</h1>
    <p className="mt-2 text-gray-600">Đây là trang chủ.</p>
  </Layout>;
}
