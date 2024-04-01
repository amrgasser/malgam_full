import React from 'react'

const GenericPage = ({ title, content, type }) => {
    return (
        <div className="bg-white w-full overflow-hidden">
            <div className="mx-auto">
                {content(type)}
            </div>
        </div>
    )
}

export default GenericPage