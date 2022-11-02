import React from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { BsShare } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

const HeaderNav = () => {
    return (
        <div className='flex justify-between items-center bg-white px-40 p-2 shadow-md'>
            {/* left */}
            <div className="w-[28%] flex gap-x-2 items-center">
                <p className="text-amber-600 text-2xl"><span className="underline">dr.</span>p</p>
                <p className="bg-amber-600 px-2 text-white rounded-full">Daily Research Plot</p>
            </div>
            {/* middle */}
            <div className="w-[57%]">
                <ul className="flex items-center justify-around font-semibold">
                    <li>CELEBRITY</li>
                    <li>ENTERTAINMENT</li>
                    <li>NEWS</li>
                    <li>ANIME</li>
                    <li>GAMES</li>
                    <li>MOVIES</li>
                    <li>TV SHOW</li>
                </ul>
            </div>
            {/* right */}
            <div className="w-[15%] flex justify-around items-center text-amber-600 text-xl border-left">
                <CgMenuRound />
                <div className="flex items-center">
                    <BsShare />
                    <p>Follow</p>
                </div>
                <AiOutlineSearch />
            </div>
        </div>
    )
}

export default HeaderNav