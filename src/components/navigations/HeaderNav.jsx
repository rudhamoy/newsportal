import React from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { BsShare } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FcMenu } from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi'

const HeaderNav = ({ setShowMenu }) => {
    return (
        <div className='flex justify-between items-center bg-white px-40 p-3 shadow-md'>
            {/* mobile menu */}
            <div className="sm:hidden">
                <FcMenu className='text-3xl text-black' onClick={() => setShowMenu(true)} />
            </div>
            {/* left */}
            <div className="sm:w-[20%] flex gap-x-2 items-center">
                <img src="logobg.png" alt="" />
            </div>
            {/* mobile menu */}
            <div className="sm:hidden">
                <BiSearch className="text-3xl" />
            </div>

            {/* middle */}
            <div className="hidden sm:block w-[65%]">
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
            <div className="hidden sm:block w-[15%]">
                <div className=" flex justify-around items-center text-[#bf912d] text-2xl border-l-2">
                    <CgMenuRound />
                    <div className="flex items-center">
                        <BsShare />
                        <p className="text-base font-semibold">Follow</p>
                    </div>
                    <AiOutlineSearch />
                </div>
            </div>
        </div>
    )
}

export default HeaderNav