import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

const Home: NextPage = () => {
  return (
    // Max height screen for max height for  scrolling the page but Without scrolling screen
    <div className="lg:max-w-4xl mx-auto overflow-hidden max-h-screen">

      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed/>

        {/* Widget */}
        <Widget/>
      </main>

    </div>
  )
}

export default Home















