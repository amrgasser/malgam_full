import React, { useState } from 'react'
import styles from '../../style'
import { cars, electric, vans } from '../../constants/vehicles'
import Navbar from '../Navbar'
import Footer from '../Footer'
import VehicleTypes from './VehicleTypes'
import ElectricCars from './ElectricCars'
import Vans from './Vans'
import Cars from './Cars'
const VehiclesPage = () => {
    // types:
    // 0 Cars
    // 1 Electric
    // 2 Vans
    const [type, setType] = useState(0)
    const elements = [<Cars />, <ElectricCars />, <Vans />]
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
                        <VehicleTypes type={type} setType={setType} />
                    </div>
                    <div className="block py-10 px-4 w-full">
                        {elements[type]}
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

export default VehiclesPage