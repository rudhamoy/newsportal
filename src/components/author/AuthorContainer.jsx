import React from 'react'
import Featured from '../sidebar/Featured'
import Ads from './Ads'
import BlogList from './BlogList'
import { MdArrowForwardIos } from 'react-icons/md'

const AuthorContainer = () => {
  return (
    <div className="px-40 mt-10">
        <p className="flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> Author</p>
        <div className="flex gap-x-3">
            <div className="w-[70%]">
                <BlogList />
            </div>
            <div className="w-[30%] flex flex-col items-center gap-y-3">
            {/* <div className="w-[30%] grid grid-row-1 gap-y-3"> */}
                <Ads />
               <Featured />
               <Ads bg="white" />
            </div>
        </div>
    </div>
  )
}

export default AuthorContainer