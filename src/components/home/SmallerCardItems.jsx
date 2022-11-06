import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
function SmallerCardItems() {
    return (
        <div className="p-4 rounded-md border bg-white my-3 cursor-pointer" >
            <div className="flex gap-x-2">
                <div className="">
                    <img className="w-[180px] rounded-md" src={couplesHug} alt="" />
                </div>
                <div className="relative flex flex-col justify-between">
                    <p className="text-xs text-[#bf912d] font-bold">TV SERIES</p>
                    <h1 className="text-[#000000] text-[14px] font-bold font-proxima text-xs mt-[-25px]">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h1>
                    <p className="text-xs text-[#474747]">AUGUST 5, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default SmallerCardItems