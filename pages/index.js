import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from 'next/image'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) =>{
    e.preventDefault()
    const term = searchInputRef.current.value;

    if(!term) return;
    router.push(`/search?trem=${term}`)
  }


  return (
    <div className="flex flex-col text-sm text-gray-700  h-screen">
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}
      <header className="flex justify-between w-full p-5 text-sm text-gray-700">
        {/* left */}
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

          {/* Avatar */}
          <Avatar url="https://i.ibb.co/PrCpRTB/profile111.jpg"/>
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center flex-grow mt-44">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          width={300}
          height={100}
        />
        <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-200 rounded-full hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} type="text" className="flex flex-grow hover:outline-none focus:outline-none" />
          <MicrophoneIcon className="h-5 "/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 mt-8 justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
