import React from 'react'
import Navbar from '../Navbar'
import styles from '../../style'
import Footer from '../Footer'
import { aboutText } from '../../constants/about'

export const AboutPage = () => {


    const tabs = [
        "Local", "Independent", "Family", "Passionate", "Friendly", "Fair", "Honest", "Reliable"
    ]

    return (
        <div className=" bg-offwhite-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} bg-offwhite ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Navbar isLogo={true} />
                </div>
            </div>
            <section className="mx-auto py-6 px-[8rem]">
                <div className=" mt-[3rem] mb-[4rem]">
                    <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> About Us</h1>
                </div>
                {/* TABS */}
                <div className="w-full mb-[6rem]">
                    <div className='flex flex-row gap-4 m-auto justify-between ml-[1rem]'>
                        {tabs.map((s, ind) => {
                            return (
                                <>
                                    <p className={`${styles.paragraph} text-center text-[2rem] text-[#EE892F]`} key={ind}>
                                        {s}
                                    </p>
                                    <div className={`${ind < tabs.length - 1 && "border-separators"}`}></div>
                                </>
                            )
                        })}
                    </div>
                </div>
                {/* Text */}
                <div className='mb-[3rem]'>
                    {aboutText.map((s, ind) => {
                        return (
                            <>
                                <p className={`font-normal leading-[30.8px] text-center text-[20px]`} key={ind}>
                                    {s}
                                </p>
                                <br></br>
                            </>
                        )
                    })}
                </div>
                <p className="float-right text-[12px]"> *subject to driver age and vehicle class</p>
            </section>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default AboutPage
