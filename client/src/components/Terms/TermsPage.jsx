import React from 'react'
import styles from '../../style'
import { terms } from '../../constants/terms'
import GenericPage from '../Common/GenericPage'
const Content = () => {
    return (
        <div className='flex flex-row align-start'>
            {/* <div className=" mt-[3rem] mb-[4rem] h-full"> */}
            <div className="bg-offwhite w- full">
                <h1 className={`font-corbel font-semibold text-[70px] text-nowrap text-[black] text-right tracking-tighter uppercase w-[7rem] rotate-180 rotate-text h-full`}>MCVR T&C</h1>
            </div>
            {/* </div> */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <ul className='list-disc'>

                        {terms.map(t => {
                            return (
                                <>
                                    <li>
                                        <span className='text-bold'>{t.title}</span> {t.bullet && t.bullet}
                                    </li>
                                    <br></br>
                                </>
                            )
                        })}
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