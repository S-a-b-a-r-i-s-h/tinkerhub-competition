import { eventLists } from '@/constants'
import Image from 'next/image'
import React from 'react'
import communityImage from '../../public/assets/community.png'
import tinkherhack from '../../public/assets/tink-her-hack.jpg'

const UpcomingEvents = () => {
  return (
    <div className='mt-32 ml-36 mr-20 mb-10 w-[80vw] p-4'>
        <h1 className='text-5xl font-bold dark:text-white mb-4 '>
            Upcoming Events
        </h1>
        <p className='font-medium text-gray-500 text-xl'>
            Major activities happening soon. Click on events to know more.
        </p>

        <div className='flex justify-around mt-16 max-lg:flex-col'>
            {eventLists.map((event) => (
                <div className='flex gap-4 mt-4 flex-col items-center'>
                        <Image 
                          src={event.image}
                          alt={event.title}
                          width={300}
                          height={300}
                          className='rounded-lg object-cover'
                        />
                        <h1 className='text-3xl font-bold dark:text-white'>
                            {event.title}
                        </h1>
                        <p className='text-gray-500'>
                            {event.date}
                        </p>
                        <p className='p-12 dark:text-white'>
                            {event.about}
                        </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UpcomingEvents