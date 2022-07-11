import React from 'react'
import { Tweet } from '../typing'

interface Props {
    tweet: Tweet
}

function Tweet({ tweet } : Props) {

  // var link;
  // function storeurl() {
  //   link = tweet.image
  // } 
  // storeurl()

  console.log(tweet);
  
  return (
    <div>
        <div className="flex justify-start items-center">
            <img src={tweet.profileImg} className=' mt-5 h-3 w-3 rounded-full object-fill' alt="" />
            <h4>{tweet.username}</h4>
            
        </div>
          <h5>{tweet.text}</h5>
        
        {/* <img src={tweet.image} className=' mt-5 h-10 w-10 rounded-full object-fill' alt="" /> */}
        
        {/* <img src={tweet.profieImg} className=' mt-5 h-200 w-100 rounded-sm object-fill' alt="" /> */}
        {/* <img src={tweet.image} className=' mt-5 h-20 w-10 rounded-sm object-fill' alt="" />  */}

    </div>
  )
}

export default Tweet