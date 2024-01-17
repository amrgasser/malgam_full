import React from 'react'
import Navbar from '../Navbar'
import styles from '../../style'
import Footer from '../Footer'
import { aboutText } from '../../constants/about'
import GenericPage from '../Common/GenericPage'

const tabs = [
    "Local", "Independent", "Family", "Passionate", "Friendly", "Fair", "Honest", "Reliable"
]

const aboutContent = () => {
    return (
        <>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> About Us</h1>
            </div>
            {/* TABS */}
            <div className="w-full mb-[6rem]">
                <div className='flex flex-col lg:flex-row gap-4 m-auto justify-between lg:ml-[1rem]'>
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
                            <p className={`font-normal text-center text-[20px]`} key={ind}>
                                {s}
                            </p>
                            <br></br>
                        </>
                    )
                })}
            </div>
            <p className="float-right text-[12px]"> *subject to driver age and vehicle class</p>
        </>
    )
}

export const AboutPage = () => {

    return (
        <GenericPage title={"About Us"} content={aboutContent} />
    )
}

export default AboutPage
