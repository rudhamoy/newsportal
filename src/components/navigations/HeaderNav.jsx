import React, { useState } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FcMenu } from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

import './navigation.css'
import MobileNav from './MobileNav'

const HeaderNav = ({ setShowMenu }) => {
    const [clicked, setClicked] = useState(false)
    const [onClicked, setOnClicked] = useState(false)
    const [clickFollow, setClickFollow] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <>
            <MobileNav setShowMenu={setShowMenu} setClickFollow={setClickFollow} clickFollow={clickFollow} />
            <div className='hidden sm:flex justify-center p-3 bg-white shadow-md relative'>
                <div className="w-[1264px] flex justify-between items-center">
                    {/* DESKTOP */}

                    {/* left */}
                    <div className="flex gap-x-2 items-center w-[20%]">
                        <img src="logobg.png" alt="" />
                    </div>
                    {/* middle */}
                    <div className="w-[65%]">
                        <div className="flex items-center justify-around font-semibold text-[16px] px-6 uppercase">
                            <div className="cursor-pointer">CELEBRITY</div>
                            <div className="dropdown relative">
                                <div
                                    role="button"
                                    onMouseEnter={() => {
                                        setClicked(true)
                                    }}
                                    onMouseLeave={() => {
                                        setClicked(false)
                                    }}
                                >
                                    <a className="flex items-center">ENTERTAINMENT <BiChevronDown className="text-lg" /></a>
                                </div>
                                {clicked === true && (
                                    <div className="menu z-40">
                                        <ul className="absolute uppercase top-10 z-50 -right-10 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
                                            <li><a href="#">Politics</a></li>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Gaming</a></li>
                                            <li><a href="#">Sports</a></li>
                                            <li><a href="#">Trending</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="dropdown relative">
                                <div role="button" onMouseEnter={() => {
                                    setOnClicked(true)
                                }}
                                    onMouseLeave={() => {
                                        setOnClicked(false)
                                    }}>
                                    <a className="flex items-center">News <BiChevronDown className="text-lg" /></a>
                                </div>
                                {onClicked === true && (
                                    <div className="menu z-40">
                                        <ul className="absolute uppercase top-10 z-50 -right-10 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
                                            <li><a href="#">Politics</a></li>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Gaming</a></li>
                                            <li><a href="#">Sports</a></li>
                                            <li><a href="#">Trending</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="cursor-pointer">ANIME</div>
                            <div className="cursor-pointer">GAMES</div>
                            <div className="cursor-pointer">MOVIES</div>
                            <div className="cursor-pointer">TV SHOW</div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-[15%]">
                        <div className=" flex justify-around items-center text-[#bf912d] border-l-2">
                            <div role="button" onClick={() => setShowMenu(true)} className="">
                                <img src="menuu.png" alt="" />
                            </div>

                            {/* follow/share */}
                            <div className="relative">
                                <div role="button" onClick={() => {
                                    setClickFollow(!clickFollow)

                                }} className="flex items-center gap-x-1">
                                    <img src="share.png" alt="" />
                                    <p className="text-[16px] font-futura2">Follow</p>
                                </div>
                                {clickFollow === true && (
                                    <div className="menu z-40">
                                        <div className="absolute uppercase top-10 z-50 -right-10 bg-[#bf912d] w-[267px] h-[133px] border-t-4 border-[#bf912d] shadow-md rounded-md">
                                            <div>
                                                <p className="uppercase text-center text-white font-nunitoSans my-1">Find more content at</p>
                                                <div className="flex justify-around items-center p-3">
                                                    <img src="logo-03.png" alt="" />
                                                    <img src="new-logo-02.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 border-t flex flex-col justify-center items-center p-2">
                                                <h1 className="uppercase text-[#393939] text-center text-[9px] font-nunitoSans">Follow us on</h1>
                                                <ul className="flex justify-around w-[100%]">
                                                    <img className="h-[19px] w-[20px]" src="instaMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="facebookMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="twitterMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="youtubeMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="linkedinMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="rssMobi.png" alt="" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* search */}
                            <div
                                role="button"
                                onClick={() => {
                                    setShowSearch(!showSearch)
                                }}
                            >
                                <img src="searchh.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {showSearch === true && (
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg_transparent flex justify-center items-center'>
                        <div className="">
                            <div className="flex items-center">
                                <div className='border rounded-md px-2 h-[40px] w-[450px] flex items-center gap-x-1 bg-white'>
                                    <BsSearch />
                                    <input type="text" className="bg-white h-[100%] w-[100%] outline-none" />
                                </div>
                                <MdClose onClick={() => setShowSearch(false)} className="text-[#bf912d] text-3xl" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default HeaderNav