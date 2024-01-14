import React from 'react'
import styles from '../../style'
import { vehicleSales } from '../../constants/vehicleSales'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Listing from '../CorporateServices/Listing'
import CorporateForm from '../CorporateServices/CorporateForm'
import CheckIcon from '@mui/icons-material/Check';


const VehicleSalesPage = () => {
    return (
        <div className="bg-gradient-custom w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <h1 className={`${styles.heading2} text-center`}> Vehicle Sales</h1>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="block py-10 px-4 w-full">
                        <div className='flex flex-col lg:flex-row justify-between w-full gap-5'>
                            <div className="flex flex-col w-[30%]">
                                {vehicleSales.parags.map((p, i) => {
                                    return (
                                        <>
                                            <p className={`${styles.paragraph} text-[14px]`}>{p}</p>
                                            <br />
                                        </>
                                    )
                                })}
                            </div>
                            <CorporateForm />
                            <Listing title={vehicleSales.title} icon={CheckIcon} listings={vehicleSales.bullets} ></Listing>
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

export default VehicleSalesPage