import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Home: NextPage = () => {
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
          src="introImgd.jpg"
          alt=""
        />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
