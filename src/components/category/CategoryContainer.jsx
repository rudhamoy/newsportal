import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Ads from '../author/Ads'
import FeaturedContainer from '../featured/FeaturedContainer'
import BlogContainer from '../layout/BlogContainer'
import Featured from '../sidebar/Featured'

function CategoryContainer() {
    return (
        <>
            <div className="px-40">
                <div className="mt-10 flex flex-row items-center gap-2">
                    <div>
                        <p className="font-bold text-[30px]">TV News</p>
                        <p className="flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> TV News</p>
                    </div>
                    {/* <div className="w-[1px] bg-slate-400 h-[80px]"></div>
                    <div>
                        <p>Latest News Updates on <span className="font-semibold">"Money Heist"</span></p>
                    </div> */}
                </div>
                <div className=" bg-slate-300 w-[100%] h-[150px] flex items-center justify-center my-4">
                    <p className="font-bold text-[40px] text-[#666]" >ADVERTISEMENT</p>
                </div>
                <FeaturedContainer />
                <div className="flex gap-x-3">

                    <div className="w-[70%]">
                        {/* <div className="bg-gray-400 h-[1px] w-full"></div> */}

                        <BlogContainer />
                        <BlogContainer />
                        <BlogContainer />
                        <BlogContainer />
                        <BlogContainer />
                        <BlogContainer />
                        <BlogContainer />
                        <BlogContainer />
                        <BlogContainer />
                        <div className="p-2 rounded-md border bg-[#bf912d] text-center text-white mt-8 mb-14 text-2xl">
                            <p className="text-yellow-400">MORE STORIES</p>
                        </div>
                    </div>
                    <div className="w-[30%] flex flex-col items-center gap-y-3">
                        {/* <div className="w-[30%] grid grid-row-1 gap-y-3"> */}
                        <Ads />
                        <Featured />
                        <Ads bg="white" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default CategoryContainer