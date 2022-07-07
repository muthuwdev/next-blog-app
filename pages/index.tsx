import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

type Props = {
  posts: [Post];
};
const Home = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>TechBitz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between bg-blue-200  py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif ">
            <span className="text-blue-900">TechBitz</span> with Latest Tech
            News, Discover and Stay Connected!
          </h1>
          <h2>
            Get access to the evolving tech news and publish your Tech updates
            on the move!
          </h2>
        </div>

        <img
          className="hidden md:inline-flex h-30 lg:h-3/6"
          src="https://res.cloudinary.com/dcser7ye4/image/upload/v1656581228/TechBitzBlogApp/introImgd_hxan35.jpg"
          alt=""
        />
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post: Post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer border rounded-lg overflow-hidden ">
              <div className="relative h-80 w-160">
                <Image
                  src={urlFor(post.mainImage).url()!}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-200 "
                />
              </div>
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p>{post.title}</p>
                  <p>
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <div className="relative h-12 w-12">
                  <Image
                    src={urlFor(post.author.image).url()!}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  author->{
  name,
  image
},
description,
mainImage,
slug
}`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};

export default Home;
