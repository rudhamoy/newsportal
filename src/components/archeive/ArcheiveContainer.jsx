import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Ads from '../author/Ads'
import BlogList from '../author/BlogList'
import BlogContainer from '../layout/BlogContainer'
import Featured from '../sidebar/Featured'
// import Ads from '../author/Ads'
// import BlogList from '../author/BlogList'
// import Featured from '../sidebar/Featured'

function ArcheiveContainer() {
    return (
        <div className="px-40">
            <div className="mt-10 flex flex-row items-center gap-2">
                <div>
                    <p className="font-bold text-[30px]">TV News</p>
                    <p className="flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> TV News</p>
                </div>
                <div className="w-[1px] bg-slate-400 h-[80px]"></div>
                <div>
                    <p>Latest News Updates on <span className="font-semibold">"Money Heist"</span></p>
                </div>
            </div>

            <div className="">
        {/* top */}
       
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

export default ArcheiveContainer




    // < div className = "flex gap-x-3" >
    //             <div className="w-[70%]">
    //                 <BlogList />
    //             </div>
    //             <div className="w-[30%] flex flex-col items-center gap-y-3">
    //                 {/* <div className="w-[30%] grid grid-row-1 gap-y-3"> */}
    //                 <Ads />
    //                 <Featured />
    //                 <Ads bg="white" />
    //             </div>
    //         </div >