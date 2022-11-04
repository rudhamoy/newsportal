import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'


const Footer = () => {
    return (
        <div className="bg-gray-900 mt-4 text-gray-50">
            <div className="flex justify-between px-40 py-10">
                {/* left footer */}
                <div className="w-[60%] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-x-1">
                            <h1 className="text-[#bf912d]">NEWS SECTION</h1>
                            <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
                        </div>
                        <div>
                            <p className="text-sm">
                                Entertainment | Celebrity News | TV News | Technology News | Movies | Politics | Sports | General News | Trending | Bollywood | Web Stories | Business | Photos
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] border-b bg-gray-50"></div>
                    <div>
                        <div className="flex gap-x-2 items-center">
                            {/* <p className="text-amber-600 text-2xl"><span className="underline">dr.</span>p</p>
                            <p className="bg-amber-600 px-2 text-white rounded-full">Daily Research Plot</p> */}
                            <img src="logobg.png" alt="" className="w-[220px]" />
                        </div>
                        <p className='text-sm py-3'>Daily Research Plot is a new-age media company that keeps its reader updated with the latest news headlines from the United States and all over the world. Entertainment, TV News, Shows Premiere Date, Release Date, Celebrity Gossips, and Travel - we help our readers to know about everything running around the world in every field</p>

                        <div className='flex gap-x-4 items-center my-2'>
                            <h1 className="text-[#bf912d">FOllOW US</h1>
                            <div className="flex gap-x-3 text-3xl mt-4">
                                <AiOutlineInstagram />
                                <CiFacebook />
                                <AiOutlineTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right footer */}
                <div className="w-[30%]">
                <div className="flex items-center gap-x-1">
                            <h1 className="text-[#bf912d]">QUICK LINKS</h1>
                            <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
                        </div>
                    <ul className="text-sm">
                        <li className="my-2">About Us</li>
                        <li className="my-2">Contact Us</li>
                        <li className="my-2">DMCA Policy</li>
                        <li className="my-2">Editorial Policy</li>
                        <li className="my-2">Fact-Checking Policy</li>
                        <li className="my-2">Ownership, Funding, and Advertising Policy</li>
                        <li className="my-2">Privacy Policy</li>
                        <li className="my-2">RSS Feeds</li>
                        <li className="my-2">Team</li>
                        <li className="my-2">Terms and Condition</li>
                        <li className="my-2">Write for Us</li>
                    </ul>
                </div>
            </div>

            <div className='w-[100%] bg-black text-white py-4'>
                <p className='text-center flex items-center justify-center'>
                   <BiCopyright /> 2019 - 2022 Daily Research Plot All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer