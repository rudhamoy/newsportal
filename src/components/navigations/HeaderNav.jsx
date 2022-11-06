import React, { useState } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { BsShare } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FcMenu } from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi'

import './navigation.css'

const HeaderNav = ({ setShowMenu }) => {
    const [clicked, setClicked] = useState(false)
    return (
        <>
            <div className="sm:hidden bg-white shadow-md flex justify-between items-center p-2 relative">
                {/* mobile menu */}
                <div className="sm:hidden">
                    <FcMenu className='text-3xl text-black' onClick={() => setShowMenu(true)} />
                </div>
                <div className="sm:hidden flex justify-center">
                    <img src="logobg.png" className="w-[85%]" alt="" />
                </div>
                <div className="sm:hidden">
                    <BiSearch className="text-3xl" />
                </div>
            </div>
            <div className='hidden sm:flex justify-between items-center px-40 p-3 bg-white shadow-md'>
                {/* DESKTOP */}

                {/* left */}
                <div className="flex gap-x-2 items-center w-[20%]">
                    <img src="logobg.png" alt="" />
                </div>


                {/* middle */}
                <div className="w-[65%]">
                    <div className="flex items-center justify-around font-[500] text-[15px] px-6 uppercase">
                        <div className="cursor-pointer">CELEBRITY</div>
                        <div className="dropdown">
                            <div role="button" onClick={() => setClicked(!clicked)}>
                                <a className="flex items-center">ENTERTAINMENT <BiChevronDown className="text-lg" /></a>
                            </div>
                            {clicked === true && (
                                <div className="menu z-50">
                                    <ul className="absolute top-14 z-50 bg-white w-[240px] px-2 border shadow-md">
                                    <li><a href="#">I'm a dropdown.</a></li>
                                    <li><a href="#">In Pure CSS</a></li>
                                    <li><a href="#">As in...</a></li>
                                    <li><a href="#">No JavaScript.</a></li>
                                    <li><a href="#">At All.</a></li>
                                </ul>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-x-[1px] cursor-pointer">NEWS <BiChevronDown className="text-lg" /></div>
                        <div className="cursor-pointer">ANIME</div>
                        <div className="cursor-pointer">GAMES</div>
                        <div className="cursor-pointer">MOVIES</div>
                        <div className="cursor-pointer">TV SHOW</div>
                    </div>
                </div>
                {/* right */}
                <div className="w-[15%]">
                    <div className=" flex justify-around items-center text-[#bf912d] border-l-2">
                        <img src="menuu.png" alt="" />
                        <div className="flex items-center gap-x-1">
                            <img src="share.png" alt="" />
                            <p className="text-[16px] font-futura2">Follow</p>
                        </div>
                        <img src="searchh.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderNav