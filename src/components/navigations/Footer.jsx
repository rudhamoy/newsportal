import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'


const Footer = () => {
    return (
        <div className="bg-[#1d1d1d] mt-4 text-gray-50">
            <div className="flex justify-between px-40 py-10">
                {/* left footer */}
                <div className="w-[60%] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-x-1">
                            <h1 className="text-[#bf912d] font-futura2 text-[20px]">NEWS SECTION</h1>
                            <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
                        </div>
                        <div>
                            <p className="text-[18px] font-proxima">
                                Entertainment | Celebrity News | TV News | Technology News | Movies | Politics | Sports | General News | Trending | Bollywood | Web Stories | Business | Photos
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] border-b bg-gray-50 mt-[46px] mb-[32px]"></div>
                    <div>
                        <div className="flex gap-x-2 items-center">
                            <img src="logobg.png" alt="" className="w-[220px]" />
                        </div>
                        <p className='text-[16px] font-proxima text-[#dbdbdb] py-3'>Daily Research Plot is a new-age media company that keeps its reader updated with the latest news headlines from the United States and all over the world. Entertainment, TV News, Shows Premiere Date, Release Date, Celebrity Gossips, and Travel - we help our readers to know about everything running around the world in every field</p>

                        <div className='flex items-center gap-x-4 my-2'>
                            <h1 className="text-[#bf912d] font-futura2">FOllOW US</h1>
                            <div className="flex gap-x-3 text-3xl mt-4">
                                <img src="ins.png" alt="" />
                                <img src="fb.png" alt="" />
                                <img src="twt.png" alt="" />
                                <img src="yt.png" alt="" />
                                <img src="lnkd.png" alt="" />
                                <img src="rss.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right footer */}
                <div className="w-[30%]">
                <div className="flex items-center gap-x-1">
                            <h1 className="text-[#bf912d] font-futura2 text-[20px]">QUICK LINKS</h1>
                            <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
                        </div>
                    <ul className="text-[18px] mt-[16px] font-proxima leading-[37px]">
                        <li className="">About Us</li>
                        <li className="">Contact Us</li>
                        <li className="">DMCA Policy</li>
                        <li className="">Editorial Policy</li>
                        <li className="">Fact-Checking Policy</li>
                        <li className="">Ownership, Funding, and Advertising Policy</li>
                        <li className="">Privacy Policy</li>
                        <li className="">RSS Feeds</li>
                        <li className="">Team</li>
                        <li className="">Terms and Condition</li>
                        <li className="">Write for Us</li>
                    </ul>
                </div>
            </div>

            <div className='w-[100%] bg-black py-4'>
                <p className='text-center flex items-center justify-center text-[18px] font-[300px] text-[#dbdbdb]'>
                   <BiCopyright /> 2019 - 2022 Daily Research Plot All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer