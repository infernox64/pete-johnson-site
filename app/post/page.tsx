import Image from "next/image";
import { IoIosOutlet } from "react-icons/io";
// app/page.tsx
import { PortableText } from "@portabletext/react";
import client from "@/sanity/sanity.client";
import { allPostsQuery } from "@/queries";

import { Post } from "@/interfaces/post";

async function getPosts() {
  const posts = await client.fetch(allPostsQuery);
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.slug.current}>
          <h2>{post.title}</h2>
          <PortableText value={post.body} />
        </div>
      ))}
    </div>
  );
}
