import React, { useEffect, useState } from 'react'
import styles from '../../style'
import { privacy } from '../../constants/terms'
import GenericPage from '../Common/GenericPage'
import axios from '../../lib/axios'
import { renderToString } from 'react-dom/server'

const Content = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('/api/privaccy').then((res) => {
            setData(res.data.data.attributes.privacy)
        })
    }, [])
    return (
        <div className='flex flex-row align-start'>
            {/* <div className=" mt-[3rem] mb-[4rem] h-full"> */}
            <div className="bg-offwhite py-7">
                <h1 className={`font-corbel font-semibold text-[50px] md:text-[70px] text-nowrap text-[black] text-right tracking-tighter uppercase w-[5rem] md:w-[7rem] rotate-180 rotate-text h-full`}>Privacy Policy</h1>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`} >
                    {data && <p dangerouslySetInnerHTML={{ __html: data }}></p>}
                    {/* <p className='text-bold'>{privacy.title}</p>
                    <br></br>
                    <p className='text-bold'>{privacy.lastUpdated}</p>
                    <br></br>
                    <p>{privacy.subheading}</p>
                    <br></br>
                    <ul className='list-decimal'>
                        {privacy.terms.map(t => {
                            return (
                                <>
                                    <li>
                                        <p className='text-bold'>{t.title}</p>
                                        <p>
                                            {t.paragraph && t.paragraph}
                                        </p>
                                    </li>
                                    <br></br>
                                </>
                            )
                        })}
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

const PrivacyPage = () => {
    return (
        <GenericPage title={"Privacy"} content={Content} />
    )
}

export default PrivacyPage


