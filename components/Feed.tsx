import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

function Feed() {
    return (
        <div>
            <div className="flex items-center justify-between" >

                <h1 className='p-5 pb-0 font-bold text-xl'>Home</h1>
                <RefreshIcon className='w-7 h-7 text-twitter mr-5 mt-5 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
            </div>
        </div>


    )
}

export default Feed