import React from 'react'
import GoogleMaps from '../../assets/googlemaps.jpeg'
import GenericPage from '../Common/GenericPage'
const ContactContent = () => {
    return (
        <>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> Contact Us</h1>
            </div>
            {/* TABS */}
            <div>
                <div className='flex flex-row py-2'>
                    <p className='text-[30px] mr-[2rem]'>Email:</p>
                    <a className='text-[30px] mr-[2rem]' href="mailto:info@malgam.co.uk"> info@malgam.co.uk </a>
                </div>
                <div className='flex flex-row py-2'>
                    <p className='text-[30px] mr-[2rem]'>Phone:</p>
                    <p className='text-[30px] mr-[2rem]'> 07817 252 546 </p>
                </div>
                <div className="flex flex-col">
                    <p className='text-[30px] mb-2 mr-[2rem]'>Location:</p>
                    <img src={GoogleMaps} alt="" />
                </div>
            </div>
        </>
    )
}
const ContactPage = () => {
    return (
        <GenericPage title={"Contact Us"} content={ContactContent} />
    )
}

export default ContactPage