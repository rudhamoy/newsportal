import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import Featured from '../sidebar/Featured'
import MultiArticleContainer from '../layout/MultiArticleContainer'
import RelatedPost from './RelatedPost'

const MultipageNewsContainer = ({ image }) => {
  return (
    <div className="sm:px-40 my-6 px-2">
      <p className="flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> TV News <MdArrowForwardIos className="text-[#bf912d]" /> Joel McHale's Starmen Take Center Stage in Stargirl Season 3 Photos</p>

      <Advertisement />

      <div className="w-[100%] flex gap-x-3">
        {/* left */}
        <div className="sm:w-[70%] w-full">
          <MultiArticleContainer image={image} />
        </div>
        {/* right */}
        <div className="w-[30%] sm:flex hidden flex-col items-center gap-y-3">
          {/* <div className="w-[30%] grid grid-row-1 gap-y-3"> */}
          <SideAds />
          <Featured />
          <SideAds bg="white" />
        </div>
      </div>

      <div className='sm:w-[70%] w-full'>
        <RelatedPost />
      </div>
    </div>
  )
}

export default MultipageNewsContainer