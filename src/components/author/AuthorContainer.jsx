import React from 'react'
import Featured from '../sidebar/Featured'
import Ads from './Ads'
import BlogList from './BlogList'
import { MdArrowForwardIos } from 'react-icons/md'
import AuthorCard from './AuthorCard'

const AuthorContainer = () => {
  return (
    <div className="px-40 mt-10">
      <p className="flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> Author</p>
      <div className="">
        {/* top */}
        <div className="w-[70%]">
          <AuthorCard />
        </div>
          <div className="w-[70%] my-3 border bg-gray-400 h-1"></div>

        <div className="w-[100%] flex gap-x-3">
          {/* left */}
          <div className="w-[70%]">
            <BlogList />
          </div>
          {/* right */}
          <div className="w-[30%] flex flex-col items-center gap-y-3">
            {/* <div className="w-[30%] grid grid-row-1 gap-y-3"> */}
            <Ads />
            <Featured />
            <Ads bg="white" />
          </div>
        </div>

         {/* bottom */}
         <div className="w-[70%]">
          <div>
            <div className="p-2 rounded-md border bg-[#bf912d] text-center text-white mt-8 mb-14 text-2xl">
              <p className="text-yellow-400">MORE STORIES</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AuthorContainer