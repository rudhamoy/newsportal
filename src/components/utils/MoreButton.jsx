import React from 'react'

function MoreButton({ title }) {
    return (
        <div className="p-2 rounded-md border bg-[#bf912d] text-center text-white my-4 text-2xl">
            <p className="text-yellow-400">{title}</p>
        </div>
    )
}

export default MoreButton