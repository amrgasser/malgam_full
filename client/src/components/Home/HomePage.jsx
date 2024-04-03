import React, { useEffect, useState } from 'react'
import styles from '../../style'
import Testimonials from '../Testimonials'
import axios from '../../lib/axios'

const HomePage = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get('/api/home').then((res) => {
            setData(res.data.data)
        })
    }, [])
    return (
        <>
            {data &&
                <div className={`${styles.flexStart} min-h-[90vh]`}>
                    <div className={`w-full`}>
                        <div className="flex flex-col hero-background-image object-fill justify-between m-auto pt-8">
                            <h1 className={`flex-1 text-center font-poppins font-semibold px-2 sm:text-[20px] lg:text-[32px]  leading-[30px] uppercase`}>
                                {data.hero?.Title}
                            </h1>
                            <img src={data.hero?.logo} alt="hoobank" className="m-auto w-[70%] invert-75 translate-y-[-0.1rem] opacity-[0.8] mt-[4rem]" />
                            <div className="flex w-full translate-y-[-2rem] opacity-[1]">
                                <button className="flex flex-row m-auto bg-[#EE892F] text-[12px] lg:text-[36px] mt-[1rem] lg:mt-[0] py-3 px-12 rounded-[10px] opacity-[0.8]">
                                    {/* <img src={ClickSVG} alt="" className="h-[3.5rem] mr-2" /> */}
                                    {data.hero?.btn_text}
                                </button>
                            </div>
                        </div>
                        {/* <div className="flex flex-col justify-between m-auto py-8 px-20">
                        <h1 className={`flex-1 text-center font-poppins font-semibold px-2 sm:text-[20px] lg:text-[60px] text-right uppercase`}>
                            Seasonal <br />offer
                        </h1>
                    </div> */}
                        {/* <div className="flex flex-col justify-between m-auto py-8">
                        <h1 className={`flex-1 text-center font-poppins font-semibold px-2 sm:text-[20px] lg:text-[60px] text-right uppercase`}>
                            Areas We Cover
                        </h1>
                        <div>
                            
                        </div>
                    </div> */}
                        <Testimonials testimonials={data.testimonials || null} />
                    </div>
                </div>
            }
        </>
    )
}

export default HomePage