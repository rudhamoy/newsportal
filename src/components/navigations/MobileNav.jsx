import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'

const MobileNav = ({ setShowMenu, setClickFollow, clickFollow }) => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className="sm:hidden bg-white shadow-md p-2 relative">

            <div className=" w-[100%] flex justify-between items-center">
                {/* mobile menu */}
                <div className="flex items-center gap-x-3 w-[72%]">
                    <div role="button" onClick={() => setShowMenu(true)} className="">
                        <img src="mobileMenu.png" alt="" className="h-[25px]" />
                    </div>
                    <img src="realLogo.png" className="h-[30px]" alt="" />
                </div>
                <div className="flex items-center justify-around border-l w-[28%]">
                    {/* share */}
                    {/* <img src="mobileShare.png" alt="" className="h-[35px]" /> */}
                    <div className="relative">
                        <div role="button" onClick={() => {
                            setClickFollow(!clickFollow)

                        }} className="flex items-center gap-x-1">
                            {/* icon and image */}
                            {clickFollow !== true ? <img src="mobileShare.png" alt="" className="h-[25px]" /> : <MdClose className="text-[#bf912d] text-3xl" />}

                            {/* <p className="text-[16px] font-futura2">Follow</p> */}
                        </div>
                        {clickFollow === true && (
                            <div className="menu z-40">
                                <div className="absolute uppercase top-8 z-50 -right-10 bg-[#bf912d] w-[267px] h-[133px] border-t-4 border-[#bf912d] shadow-md rounded-md overflow-hidden">
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
                        <img src="mobileSearch.png" alt="" className="h-[25px]" />
                    </div>

                </div>
            </div>

            {showSearch === true && (
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg_transparent flex justify-center items-center'>
                        <div className="">
                            <div className="flex items-center">
                                <div className='border rounded-md px-2 h-[30px] w-[250px] flex items-center gap-x-1 bg-white'>
                                    <BsSearch />
                                    <input type="text" className="bg-white h-[100%] w-[100%] outline-none" />
                                </div>
                                <MdClose onClick={() => setShowSearch(false)} className="text-[#bf912d] text-3xl" />
                            </div>
                        </div>
                    </div>
                )}

            <div className="flex items-center gap-x-3 mt-2">
                <div role="button">
                    <img src="home.png" alt="" className="h-[20px] w-[20px]" />
                </div>
                <div className='uppercase flex items-center gap-x-3 text-[12px] font-futura2'>
                    <p>Celebrity</p>
                    <p>Entertainment</p>
                    <p className="whitespace-nowrap">Tv News</p>
                    <p className="whitespace-nowrap">Web Stories</p>
                </div>
            </div>
        </div>
    )
}

export default MobileNav