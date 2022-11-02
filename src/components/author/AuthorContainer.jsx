import React from 'react'
import Featured from '../sidebar/Featured'
import Ads from './Ads'
import BlogList from './BlogList'

const AuthorContainer = () => {
  return (
    <div className="px-40 mt-10">
        <p>Home | Author</p>
        <div className="flex gap-x-5">
            <div className="w-[70%]">
                <BlogList />
            </div>
            <div className="w-[30%] flex flex-col justify-between">
                <Ads />
               <Featured />
               <Ads />
            </div>
        </div>
    </div>
  )
}

export default AuthorContainer