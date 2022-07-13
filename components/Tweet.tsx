import React from 'react'
import { Tweet } from '../typing'
import TimeAgo from 'react-timeago'
import { ChatAlt2Icon, SwitchHorizontalIcon, HeartIcon, UploadIcon } from '@heroicons/react/outline'
// import { } from 'react-timeago'

// const formatter = buildFormatter(frenchStrings)


interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {

  // var link;
  // function storeurl() {
  //   link = tweet.image
  // } 
  // storeurl()

  // console.log(tweet);



  return (
    <div className='flex flex-col space-x-4 border-y p-5 border-gray-100'>
      <div className="flex space-x-3">
        <img src={tweet.profileImg} className='h-10 w-10 rounded-full object-fill' alt="" />
        <div>
          <div className='flex items-center space-x-1'>
            <p className='mr-1 font-bold'>{tweet.username}</p>
            <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLocaleLowerCase()} ·            </p>

            <TimeAgo
              className='text-sm text-gray-500'
              date={tweet._createdAt} />
          </div>
          <p className='pt-1 text-md'>{tweet.text}</p>

          {tweet.image && (
            <img src={tweet.image} className="m-5 ml-0 mb-1 m-h-60 object-cover shadow-sm rounded-lg " alt="" />
          )}
        </div>
      </div>

      <div className='mt-5 flex justify-between'>
        <div className='flex cursor-pointer items-center space-x-4 text-gray-400'>
          <ChatAlt2Icon className='h-5 w-5' />
          <p>4</p>
        </div>
        <div className='flex cursor-pointer items-center space-x-4 text-gray-400'>
          <SwitchHorizontalIcon className='h-5 w-5' />
        </div>
        <div className='flex cursor-pointer items-center space-x-4 text-gray-400'>
          <HeartIcon className='h-5 w-5' />
        </div>
        <div className='flex cursor-pointer items-center space-x-4 text-gray-400'>
          <UploadIcon className='h-5 w-5' />

        </div>
      </div>

      {/* <img src={tweet.image} className=' mt-5 h-10 w-10 rounded-full object-fill' alt="" /> */}

      {/* <img src={tweet.profieImg} className=' mt-5 h-200 w-100 rounded-sm object-fill' alt="" /> */}
      {/* <img src={tweet.image} className=' mt-5 h-20 w-10 rounded-sm object-fill' alt="" />  */}

    </div>
  )
}

export default Tweet