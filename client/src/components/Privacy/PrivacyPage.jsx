import React from 'react'
import styles from '../../style'
import { privacy } from '../../constants/terms'
import GenericPage from '../Common/GenericPage'

const Content = () => {
    return (
        <>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}>Privacy</h1>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <p className='text-bold'>{privacy.title}</p>
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
                    </ul>
                </div>
            </div>
        </>
    )
}

const PrivacyPage = () => {
    return (
        <GenericPage title={"Privacy"} content={Content} />
    )
}

export default PrivacyPage


