import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import ArticleContainer from '../layout/ArticleContainer'
import Featured from '../sidebar/Featured'
import RelatedPost from './RelatedPost'

const VideoNewsContainer = ({ image }) => {
  return (
    <div className="sm:px-40 px-2 my-6">
      <p className="flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> <span className="whitespace-nowrap">TV News</span> <MdArrowForwardIos className="text-[#bf912d]" /> <span className="line-clamp-1 sm:line-clamp-none">Joel McHale's Starmen Take Center Stage in Stargirl Season 3 Photos</span></p>

      <Advertisement />

      <div className="w-[100%] flex gap-x-3">

        <div className="sm:w-[70%] w-full">
          <ArticleContainer image={image} />
        </div>

        <div className="w-[30%] sm:flex hidden flex-col items-center gap-y-3">

          <SideAds />
          <Featured />
          <SideAds bg="white" />
        </div>
      </div>

      {/* <div className='w-[70%]'>
        <RelatedPost />
      </div> */}
    </div>
  )
}

export default VideoNewsContainer