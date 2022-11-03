import React from 'react'

const Ads = ({bg}) => {
  return (
    <div>
        <div className={`border bg-${bg} rounded-md p-2 flex justify-center items-center h-[100%]`}>
            <p className="text-3xl text-gray-400">ADVERTISEMENT</p>
        </div>
    </div>
  )
}

export default Ads