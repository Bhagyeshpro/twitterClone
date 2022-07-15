import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'
import { Tweet } from '../typing'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

const Home = ({tweets} : Props) => {
  
  return (
    // Max height screen for max height for  scrolling the page but Without scrolling screen
    <div className="lg:max-w-4xl mx-auto overflow-hidden max-h-screen">

      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9 '>
        {/* Sidebar */}
        <Sidebar/>
        <Toaster/>

        {/* Feed */}
        <Feed tweets={tweets} />

        {/* Widget */}
        <Widget/>
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  const tweets = await fetchTweets();

  return {
    props:{
      tweets,
    },
  }
}














