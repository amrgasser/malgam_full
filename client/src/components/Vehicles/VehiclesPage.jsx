import React, { useState } from 'react'
import styles from '../../style'
import { cars, electric, vans } from '../../constants/vehicles'
import Navbar from '../Navbar'
import Footer from '../Footer'
import VehicleTypes from './VehicleTypes'
import ElectricCars from './ElectricCars'
import Vans from './Vans'
import Cars from './Cars'
const VehiclesPage = ({ type }) => {
    // types:
    // 0 Cars
    // 1 Electric
    // 2 Vans
    const elements = [<Cars />, <ElectricCars />, <Vans />]
    const title = ["cars", "electric cars", "vans"]
    return (
        <div className=" bg-offwhite-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} bg-offwhite ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Navbar isLogo={true} />
                </div>
            </div>
            <section className="mx-auto py-6 px-[8rem]">
                <div className=" mt-[3rem] mb-[4rem]">
                    <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> MCVR self drive hire {title[type]}</h1>
                </div>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        {/* <div className="block py-10 px-4 w-full">
                        <VehicleTypes type={type} setType={setType} />
                    </div> */}
                        <div className="block py-10 px-4 w-full">
                            {elements[type]}
                        </div>
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

export default VehiclesPage