import React from 'react'
import styles from '../../style'
import { terms } from '../../constants/terms'
import Navbar from '../Navbar'
import Footer from '../Footer'

const TermsPage = () => {
    return (
        <div className=" bg-offwhite-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} bg-offwhite ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Navbar isLogo={true} />
                </div>
            </div>
            <section className="mx-auto py-6 px-[8rem]">
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
            </section>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default TermsPage