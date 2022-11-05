import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Ads from '../author/Ads'
import BlogList from '../author/BlogList'
import CategoryListItem from '../category/CategoryListItem'
import BlogContainer from '../layout/BlogContainer'
import Featured from '../sidebar/Featured'


function ArcheiveContainer() {
  return (
    <div className="sm:px-40 px-2">
      <div className="sm:mt-10 flex flex-row items-center gap-2">
        <div>
          <p className="font-bold sm:text-[30px] text-[24px]">TV News</p>
          <p className="flex items-center gap-x-1 whitespace-nowrap">Home <MdArrowForwardIos className="text-[#bf912d]" /> TV News</p>
        </div>
        <div className="w-[1px] bg-slate-400 sm:h-[80px] h-[40px]"></div>
        <div>
          <p>Latest News Updates on <span className="font-semibold">"Money Heist"</span></p>
        </div>
      </div>

      <div className="">
        {/* top */}

        <div className="sm:w-[70%] w-full my-3 border bg-gray-300 h-[3px]"></div>

        <div className="w-[100%] flex gap-x-3">
          {/* left */}
          <div className="sm:w-[70%] w-full">
            <CategoryListItem />
            <CategoryListItem />
            <CategoryListItem />
            <CategoryListItem />
            <CategoryListItem />
            <CategoryListItem />
            <CategoryListItem />
          </div>
          {/* right */}
          <div className="w-[30%] sm:flex hidden flex-col items-center gap-y-3">
            {/* <div className="w-[30%] grid grid-row-1 gap-y-3"> */}
            <Ads />
            <Featured />
            <Ads bg="white" />
          </div>
        </div>

        {/* bottom */}
        <div className="sm:w-[70%] w-full">
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

export default ArcheiveContainer



