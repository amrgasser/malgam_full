import React from 'react'

const GenericPage = ({ title, content, type }) => {
    return (
        <div className="bg-white w-full overflow-hidden">
            <div className="mx-auto py-6 px-[2rem]">
                {content(type)}
            </div>
        </div>
    )
}

export default GenericPage