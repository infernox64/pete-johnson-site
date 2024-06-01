// pages/posts/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import client from '@/sanity/sanity.client';
import { allPostsQuery } from '@/queries';
import { Post } from '@/interfaces/post';
import Image from 'next/image';

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body.map((block) => block.children.map((child) => child.text)).join('')}</p>
      <Image src={`https://cdn.sanity.io/images/${post.mainImage.asset._ref}`} alt="Main Image" />
      {post.additionalImages?.map((image) => (
        <div key={image.image.asset._ref}>
          <Image src={`https://cdn.sanity.io/images/${image.image.asset._ref}`} alt="Additional Image" />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await client.fetch(allPostsQuery);
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug;
  const post: Post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
  return { props: { post } };
};

export default PostPage;
