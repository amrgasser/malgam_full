import React from 'react'
import styles from '../../style'
import { logo } from '../../assets'

const HomePage = () => {
    return (
        <>
            <div className={`${styles.flexStart} min-h-[90vh] mt-[2rem]`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="flex flex-col justify-between m-auto">
                        <h1 className={`flex-1 text-center font-poppins font-semibold px-2 sm:text-[20px] lg:text-[32px]  leading-[30px] uppercase`}>
                            {"Malgam Car and Van Rental: London’s choice for self drive hire"}
                        </h1>
                        <img src={logo} alt="hoobank" className="m-auto w-[70%] invert-75 translate-y-[-0.1rem] opacity-[0.8] mt-[4rem]" />
                        <div className="flex w-full translate-y-[-2rem] opacity-[1]">
                            <button className="flex flex-row m-auto bg-[#EE892F] text-[12px] lg:text-[36px] mt-[1rem] lg:mt-[0] py-3 px-12 rounded-[10px] opacity-[0.8]">
                                {/* <img src={ClickSVG} alt="" className="h-[3.5rem] mr-2" /> */}
                                CLICK HERE TO BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage