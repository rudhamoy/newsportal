import React, { useState } from 'react'
import HeaderNav from '../navigations/HeaderNav'
import Footer from '../navigations/Footer'
import { MdClose } from 'react-icons/md'

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="bg-gray-200 relative">
            {showMenu === true && (
                <div className='absolute left-0 z-50 w-[80%] h-[100vh] p-4 bg-black'>
                    <MdClose onClick={() => setShowMenu(false)} className='text-white text-right' />
                    <ul className='text-gray-50'>
                        <img src="logobg.png" alt="" />
                        <li className="cursor-pointer underline w-full mt-5">Home</li>
                        <li className="cursor-pointer underline w-full mt-5">About Us</li>
                        <li className="cursor-pointer underline w-full mt-5">Services</li>
                        <li className="cursor-pointer underline w-full mt-5">Career | Job</li>
                        <li className="cursor-pointer underline w-full mt-5">Blog</li>
                        <li className="cursor-pointer underline w-full mt-5">Payment</li>
                        <li className="cursor-pointer underline w-full mt-5">FAQ</li>
                        <li className="cursor-pointer underline w-full mt-5">Gallery</li>
                        <li className="cursor-pointer underline w-full mt-5">Contact Us</li>
                    </ul>
                </div>
            )}
            <HeaderNav setShowMenu={setShowMenu} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout