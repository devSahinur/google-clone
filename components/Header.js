import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value;

        if(!term) return;
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    width={120}
                    height={40}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                />
                <form className='flex flex-grow py-3 px-6 ml-10 mr-5 border border-gray-200 rounded-full items-center max-w-3xl shadow-lg'>
                    <input className="flex-grow w-full hover:outline-none focus:outline-none" ref={searchInputRef} type="text" />
                    <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                    onClick={() =>(searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                <Avatar className='ml-auto' url="https://i.ibb.co/PrCpRTB/profile111.jpg" />

                
            </div>
            <HeaderOptions />
        </header>
    )
}

export default Header
