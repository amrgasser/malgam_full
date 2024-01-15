import React from 'react'
import styles from '../../style'
import { privacy } from '../../constants/terms'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PrivacyPage = () => {
    return (
        <div className=" bg-offwhite-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} bg-offwhite ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Navbar isLogo={true} />
                </div>
            </div>
            <section className="mx-auto py-6 px-[8rem]">
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
            </section>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage


