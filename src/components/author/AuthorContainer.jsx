import React from 'react'
import BlogList from './BlogList'

const AuthorContainer = () => {
  return (
    <div className="px-40 mt-10">
        <p>Home | Author</p>
        <div className="flex gap-x-5">
            <div className="w-[70%]">
                <BlogList />
            </div>
            <div className="w-[30%]">
                <p>side bar</p>
            </div>
        </div>
    </div>
  )
}

export default AuthorContainer