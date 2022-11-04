import React from 'react'

const FeaturedCard = () => {
    return (
        <div className="p-4 rounded-md border bg-white my-3" >
            <div className="flex gap-x-2">
                <div className="">
                    <img className="w-[280px] rounded-md" src="https://dailyresearchplot.com/wp-content/uploads/2022/10/1-1030-750x536.jpg" alt="" />
                </div>
                <div className="relative">
                    <p className="text-xs text-[#bf912d]">TV SERIES</p>
                    <h1 className="font-semibold text-xs">The Fabulous Season 1: Release Date Update And What We Know</h1>
                </div>
            </div>
    </div>
    )
}

const Featured = () => {
    return (
        <div className="bg-white rounded-md p-2 border">
            <h1 className="uppercase text-[#bf912d] font-semibold">Featured Stories</h1>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </div>
    )
}

export default Featured