import Image from "next/image";
import communityImage from '../public/assets/community.png'

export default function Home() {
  return (
    <div className="flex mt-32 ml-20 mr-20 mb-10 justify-center max-lg:flex-col">
      <div className="dark:bg-black dark:text-white h-[50vh] w-[40vw] flex flex-col justify-around max-lg:w-[80vw]">
        <div>
          <span
            className={`text-5xl max-lg:text-3xl font-bold dark:text-white`}
          >
            Tinker
          </span>
          <span
            className={`text-5xl max-lg:text-3xl dark:text-white`}
          >
              Hub
          </span>
          <span>
            CEP
          </span>
        </div>
          <div>
            <p className="dark:text-gray-500 text-black mb-10 text-xl max-lg:text-lg font-bold">
            Non-Profit Organisation aimed at making use of 21st-Century Technologies and Learning Methods to foster a fresh breed of highly skilled young people empowered with technical and social skills.
            </p>
            <p className="text-xl font-medium dark:text-white text-gray-500 max-lg:text-lg">
            We're a community of tinkerers, makers, policy geeks & students, and are working towards mapping and empowering people who share a passion to innovate.
            </p> 
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <button className="dark:bg-white dark:text-black bg-black text-white pl-5 pr-5 pt-3 pb-3 rounded-lg">
              Join the community
            </button>
            <button className="bg-green-500 text-black pl-5 pr-5 pt-3 pb-3 rounded-lg">
              Explore TinkerSpace
            </button>
          </div>
      </div>
      <div className="w-[40vw] h-[50vh] max-lg:w-[80vw] max-lg:h-[40vh] flex justify-center">
        <Image
          src={communityImage}
          alt="TinkerHub"
          width={550}
          height={550}
          className="object-cover rounded-lg"  
        />
      </div>
    </div>
  );
}
