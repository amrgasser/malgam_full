import React from 'react'
import styles from '../../style'
import { privacy } from '../../constants/terms'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PrivacyPage = () => {
    return (
        <div className="bg-gradient-custom w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <h1 className={`${styles.heading2} text-center`}> MCVR Privacy Policy</h1>
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
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage


