import React, { SVGProps } from 'react'

// Using interface to define the type of value which is why tsx is build on top of js

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

    function SidebarRow({ Icon, title} : Props) {
  return (
    <div className='flex max-w-fit space-x-2 items-center rounded-full px-4 py-3 transition-all hover:bg-gray-100 group '>
        <Icon className='h-6 w-6 group-hover:text-twitter'/>
        <p className=' hidden text-base font-thin lg:text-xl md:inline-flex group-hover:text-twitter font-semibold'>{title}</p>
    </div>
  )
}

export default SidebarRow