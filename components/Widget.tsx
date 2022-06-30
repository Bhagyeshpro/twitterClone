import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
// import TweetEmbed from 'reac'

function Widget() {
    return (
        <div className='mt-2 px-2'>
            {/* Search */}
            <div className='flex items-center space-x-2 mt-2 p-2 rounded-full bg-gray-200'>
                <SearchIcon className='h-5 w-5 text-gray-400' />
                <input placeholder='Search Twitter' type="text" className='flex-1 bg-transparent outline-none' />
            </div>
        </div>
    )
}

export default Widget