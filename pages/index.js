import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

import { Squares2X2Icon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return

    router.push(`/search?term=${term}`);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
      </Head>

      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png" />
        </div>
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
         max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
         sm:max-w-xl lg:max-w-2xl'>
          <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500' />
          <input
            ref={searchInputRef}
            type="text"
            className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8
         sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm feeling lucky</button>
        </div>
      </form>

      <Footer />

    </div>
  )
}
