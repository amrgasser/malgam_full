import React from 'react'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'

const GenericPage = ({ title, content, type }) => {
    return (
        <div className=" bg-offwhite-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} bg-offwhite ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Navbar isLogo={true} />
                </div>
            </div>
            {/* TABS */}
            <div className="mx-auto py-6 px-[2rem] lg:px-[8rem]">
                {content(type)}
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default GenericPage