import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Advertisement from '../ads/Advertisement'
import Ads from '../author/Ads'
import FeaturedContainer from '../featured_hero/FeaturedContainer'
import Featured from '../sidebar/Featured'
import CategoryListItem from './CategoryListItem'

function CategoryContainer() {
    return (
        <>
            <div className="sm:px-36 px-2">
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


                <Advertisement />
                <FeaturedContainer />

                < div className="flex gap-x-3 py-10" >

                    <div className="sm:w-[70%] w-full">
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
                        <div className="p-2 rounded-md border bg-[#bf912d] text-center text-white mt-8 mb-14 text-2xl">
                            <p className="text-yellow-400">MORE STORIES</p>
                        </div>
                    </div>
                    <div className="w-[30%] sm:flex hidden flex-col items-center gap-y-3">
                        {/* <div className="w-[30%] grid grid-row-1 gap-y-3"> */}
                        <Ads />
                        <Featured />
                        <Ads bg="white" />
                    </div>
                </div >


            </div>
        </>
    )
}

export default CategoryContainer





