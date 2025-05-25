import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";

const ClientOnlyComponent = dynamic(
  async () => {
    // Delay 3 giây
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // Import component client-only, trả về đúng default export
    const mod = await import("../components/ClientOnlyComponent");
    return mod.default;
  },
  {
    ssr: false, // Không render trên server
    loading: () => <p>Đang tải component (delay 3 giây)...</p>,
  }
);

export default function HomePage() {
  return (
    <Layout title="Trang chủ">
      <main>
        <h1 className="text-3xl font-bold">Welcome to MySite</h1>
        <p className="mt-2 text-gray-600">Đây là trang chủ.</p>
        <ClientOnlyComponent />
      </main>
    </Layout>
  );
}
