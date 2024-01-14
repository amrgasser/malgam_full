import React from 'react'
import styles from '../../style'
import { terms } from '../../constants/terms'
import Navbar from '../Navbar'
import Footer from '../Footer'

const TermsPage = () => {
    return (
        <div className="bg-gradient-custom w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <h1 className={`${styles.heading2} text-center`}> Terms and Conditions</h1>
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
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default TermsPage