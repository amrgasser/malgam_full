import React from 'react'

const ImgCard = ({ src }) => {
    return (
        <div className="flex justify-between rounded-[20px]  max-w-[370px]">
            <img src={src} alt="" className='h-60 rounded-[10px]' />
        </div>
    )
}

export default ImgCard