import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typing'
import Tweetbox from './Tweetbox'
import TweetComponent from "../components/Tweet"

interface Props{
    tweets: Tweet[]
}

function Feed({ tweets } : Props) {
    // console.log(tweets);

    // var link;
    // function storeurl() {
    //     link = `{tweets.profileImg}`
    // } 

    // console.log(link);
    
    
    return (
        <div className='col-span-7 lg:col-span-5 '>
            <div className="flex items-center justify-between" >

                <h1 className='p-5 pb-0 font-bold text-xl'>Home</h1>
                <RefreshIcon className='w-7 h-7 text-twitter mr-5 mt-5 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
            </div>

            {/* Tweetbox */}
            <Tweetbox />
            

            <div>
                {tweets.map(tweet => (
                    <TweetComponent key={tweet._id} tweet={tweet}/>
                ))}
            </div>

        </div>


    )
}

export default Feed