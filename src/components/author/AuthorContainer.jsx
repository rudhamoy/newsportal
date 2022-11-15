import React from 'react'
import Featured from '../sidebar/Featured'
import Ads from './Ads'
import BlogList from './BlogList'
import { MdArrowForwardIos } from 'react-icons/md'
import AuthorCard from './AuthorCard'

const AuthorContainer = () => {
  return (
    <div className="mt-6 sm:mt-10  flex justify-center items-center">
      <div className="sm:px-2 w-[95vw] sm:w-[1264px]">
        <p className="flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> Author</p>
        {/* top */}
        <div className="">
          <AuthorCard />
        </div>
        <div className="w-[95vw] sm:w-[837px] my-3 border bg-[#c5c5c5] h-1"></div>

        <div className="flex justify-between gap-x-[36px]">
          {/* left */}
          <div className="">
            <BlogList />
          </div>
          {/* right */}
          <div className="sm:flex hidden flex-col items-center gap-y-3">
            <Ads />
            <Featured />
            <Ads bg="white" />
          </div>
        </div>

        {/* bottom */}
        <div className="w-full sm:w-[837px] cursor-pointer">
            <div>
              <div className="rounded-[5px] h-[40] sm:h-[52px] border bg-[#bf912d] text-center mt-8 mb-14 text-[23px] sm:text-[34px] flex justify-center">
                <p className="text-[#ffd200]">MORE STORIES</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AuthorContainer