import React from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { BsShare } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

const HeaderNav = () => {
    return (
        <div className='flex justify-between items-center bg-white px-40 p-3 shadow-md'>
            {/* left */}
            <div className="w-[20%] flex gap-x-2 items-center">
                <p className="text-amber-600 text-2xl"><span className="underline">dr.</span>p</p>
                <p className="bg-amber-600 px-2 text-white rounded-full">Daily Research Plot</p>
            </div>
            {/* middle */}
            <div className="w-[65%]">
                <ul className="flex items-center justify-around font-semibold text-sm px-5">
                    <li className="cursor-pointer">CELEBRITY</li>
                    <li className="flex items-center gap-x-[2px] cursor-pointer">ENTERTAINMENT <BiChevronDown className="text-lg" /></li>
                    <li className="flex items-center gap-x-[2px] cursor-pointer">NEWS <BiChevronDown className="text-lg" /></li>
                    <li className="cursor-pointer">ANIME</li>
                    <li className="cursor-pointer">GAMES</li>
                    <li className="cursor-pointer">MOVIES</li>
                    <li className="cursor-pointer">TV SHOW</li>
                </ul>
            </div>
            {/* right */}
            <div className="w-[15%] flex justify-around items-center text-amber-600 text-2xl border-l-2">
                <CgMenuRound />
                <div className="flex items-center">
                    <BsShare />
                    <p className="text-base font-semibold">Follow</p>
                </div>
                <AiOutlineSearch />
            </div>
        </div>
    )
}

export default HeaderNav