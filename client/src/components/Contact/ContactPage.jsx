import React from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import GoogleMaps from '../../assets/googlemaps.jpeg'
const ContactPage = () => {
    return (
        <div className=" bg-offwhite-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} bg-offwhite ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Navbar isLogo={true} />
                </div>
            </div>
            <section className="mx-auto py-6 px-[8rem]">
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
            </section>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ContactPage