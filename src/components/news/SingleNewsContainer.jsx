import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import ArticleContainer from '../layout/ArticleContainer'
import Featured from '../sidebar/Featured'
import RelatedPost from './RelatedPost'
import { useInView } from 'react-intersection-observer';

const SingleNewsContainer = ({ image }) => {

  const { ref, inView } = useInView()
  console.log("inView = ", inView)


  return (
    <div className="my-6 px-2 flex justify-center items-center">
      <div className="w-[100w] sm:w-[1264px]">
        <p className="flex flex-wrap items-center gap-x-1 text-[14px] sm:text-[16px] p-2 text-[#6d6d6d] font-[300px]"><span>Home</span> <MdArrowForwardIos className="text-[#bf912d] " /> <span className="whitespace-nowrap">TV News</span> <MdArrowForwardIos className="text-[#bf912d]" /> <span>Joel McHale's Starmen Take Center Stage in Stargirl Season 3 Photos</span></p>

        <Advertisement />

        <div className=" flex justify-between">
          {/* content */}
          <div className="">
            <ArticleContainer image={image} />
          </div>
          {/* sidebar */}
          <div className="hidden sm:flex flex-col items-center gap-y-3">
            <div className="h-[480px]">
              <SideAds />
            </div>
            <Featured />
            <SideAds bg="white" />
          </div>
        </div>

        <div className='w-[95vw] sm:w-[837px] mt-[18px]'>
          <RelatedPost />
        </div>
      </div>
    </div>
  )
}

export default SingleNewsContainer