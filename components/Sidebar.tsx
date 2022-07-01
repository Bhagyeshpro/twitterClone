import React from 'react'
import { HomeIcon, UserIcon, CollectionIcon, BookmarkIcon, HashtagIcon, MailIcon } from "@heroicons/react/outline"
import SidebarRow from './SidebarRow'

function sidebar() {
    return (
        <div className='flex flex-col col-span-2 items-center md:items-start'>
            <img
                className='h-6 w-6 m-3 mt-6'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                alt="" />

            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={CollectionIcon} title="Lists" />
            <SidebarRow Icon={BookmarkIcon} title="Saved" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={MailIcon} title="Messages" />
            <SidebarRow Icon={UserIcon} title="SignIn" />
        </div>

    )
}

export default sidebar