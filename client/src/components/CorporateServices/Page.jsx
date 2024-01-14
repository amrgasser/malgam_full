import React from 'react'
import { benefits, options } from '../../constants/corporateServices'
import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Listing from './Listing'
import CheckIcon from '@mui/icons-material/Check';
import CorporateForm from './CorporateForm'

const Page = () => {
    return (
        <div className="bg-gradient-custom w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="block py-10 px-4 w-full">
                        <div className='flex flex-col lg:flex-row justify-between w-full gap-5'>
                            <Listing title={benefits.title} icon={CheckIcon} listings={benefits.list} ></Listing>
                            <CorporateForm />

                            <Listing title={options.title} icon={CheckIcon} listings={options.list} ></Listing>
                        </div>
                    </div>
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

export default Page