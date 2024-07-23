import Link from "next/link";
import React from "react";
import { client } from "../libs/client";

async function getBlogData() {
  try {
    const data = await client.get({ endpoint: "blog" });
    return data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export default async function Page() {
  const blogs = await getBlogData();

  return (
    <div>
      {blogs && (
        <ul>
          {blogs.contents.map(
            (blog: { id: React.Key | null | undefined; title: string }) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
