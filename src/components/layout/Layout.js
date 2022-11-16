import React, { useState } from 'react'
import HeaderNav from '../navigations/HeaderNav'
import Footer from '../navigations/Footer'
import MobileMenu from '../navigations/MobileMenu'

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="bg-gray-200 relative">
            {showMenu === true && (
                <div className="absolute left-0 right-0 bottom-0 top-0 z-40 bg_transparent">
                    <MobileMenu setShowMenu={setShowMenu} />
                </div>
            )}
            <HeaderNav setShowMenu={setShowMenu} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout