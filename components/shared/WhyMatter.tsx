import Image from 'next/image'
import React from 'react'
import communityImage from '../../public/assets/community.png'

const WhyMatter = () => {
  return (
    <div className='flex mt-32 ml-20 mr-20 mb-10 justify-center max-lg:flex-col max-lg:gap-4'>
        <div className="dark:bg-black dark:text-white h-[50vh] w-[40vw] flex flex-col justify-around max-lg:w-[80vw]">
        <div>
          <p
            className={`text-5xl font-bold dark:text-white`}
          >
            Why It Matters
          </p>
        </div>
          <div>
            <p className="dark:text-gray-500 text-black mb-10 text-2xl font-bold">
                Because we believe that <span className='text-green-400'>digital skills are tools of empowerment.</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button className="dark:bg-white dark:text-black bg-black text-white pl-5 pr-5 pt-3 pb-3 rounded-lg">
              Join the community
            </button>
            <button className="bg-green-500 text-black pl-5 pr-5 pt-3 pb-3 rounded-lg">
              Explore TinkerSpace
            </button>
          </div>
          <p>
            ⛑ 40% of employers say a lack of skills is the main reason for entry-level vacancies.
            - 'Education to Employment: Designing a System that Works', McKinsey 2013
          </p>
          <p>
            👩🏽‍💻 Computer Science skills are 65% of the highest value skills.
            - Analysis by Burning Glass Technologies 2016
          </p>
          <p>
          😍 By 2030, 80% of the jobs requires some amount of technical skills
          </p>
      </div>
      <div className="w-[40vw] h-[50vh] max-lg:w-[80vw] max-lg:h-[40vh] flex justify-center">
        <Image
          src={communityImage}
          alt="TinkerHub"
          width={550}
          height={550}
          className="object-cover rounded-lg max-lg:w-[700]"  
        />
      </div>
    </div>
  )
}

export default WhyMatter