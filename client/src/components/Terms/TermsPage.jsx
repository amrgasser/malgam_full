import React, { useEffect, useState } from 'react'
import styles from '../../style'
import GenericPage from '../Common/GenericPage'
import axios from '../../lib/axios'
const Content = () => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('/api/term').then((res) => {
            setData(res.data.data.attributes.terms)
        })
    }, [])
    return (
        <div className='flex flex-row align-start'>
            {/* <div className=" mt-[3rem] mb-[4rem] h-full"> */}
            <div className="bg-offwhite py-7">
                <h1 className={`font-corbel font-semibold text-[50px] md:text-[70px] text-nowrap text-[black] text-right tracking-tighter uppercase  w-[5rem] md:w-[7rem] rotate-180 rotate-text h-full`}>MCVR T&C</h1>
            </div>
            {/* </div> */}
            <div className={`${styles.paddingX} ${styles.flexCenter} py-8`}>
                <div className={`${styles.boxWidth}`}>
                    <ul className='list-disc'>
                        {data && <p dangerouslySetInnerHTML={{ __html: data }}></p>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const TermsPage = () => {
    return (
        <GenericPage title={"Terms & Conditions"} content={Content} />
    )
}

export default TermsPage