import React from 'react'
import styles from '../../style'
import { terms } from '../../constants/terms'
import Navbar from '../Navbar'
import Footer from '../Footer'
import GenericPage from '../Common/GenericPage'
const Content = () => {
    return (
        <>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}>Terms & Conditions</h1>
            </div>
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
        </>
    )
}

const TermsPage = () => {
    return (
        <GenericPage title={"Terms & Conditions"} content={Content} />
    )
}

export default TermsPage