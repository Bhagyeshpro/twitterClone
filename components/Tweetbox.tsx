import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

function Tweetbox() {

  const [input, setInput] = useState<string>("")

  return (
    <div className='flex space-x-2 p-5 '>
      <img className=' mt-5 h-10 w-10 rounded-full object-fill' src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="" />
      <div className='flex flex-1 items-center pl-2'>
        <form className='flex flex-col flex-1'>
          <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's Happening"
            className='h-24 w-full text-xl outline-none placeholder:text-xl'
          />
          <div className='flex items-center'>
            <div className='flex flex-1 space-x-2 text-twitter'>
              <PhotographIcon className='h-5 w-5 cursor-pointer transition:transform
                duration-150 ease-out hover:scale-150' />
              <SearchIcon className='h-5 w-5 cursor-pointer' />
              <EmojiHappyIcon className='h-5 w-5 cursor-pointer' />
              <CalendarIcon className='h-5 w- cursor-pointer' />
              <LocationMarkerIcon className='h-5 w-5 cursor-pointer' />
            </div>

            <button 
              disabled={!input}
              className='bg-twitter px-4 py-1 rounded-full text-white font-bold
                disabled:opacity-30
              '>Tweet</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Tweetbox