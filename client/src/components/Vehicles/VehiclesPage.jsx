import React from 'react'
import styles from '../../style'

import ElectricCars from './ElectricCars'
import Vans from './Vans'
import Cars from './Cars'
import GenericPage from '../Common/GenericPage'
const elements = [<Cars />, <ElectricCars />, <Vans />]
const title = ["cars", "electric cars", "vans"]


const Content = (type) => {
    return (
        <>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[black] uppercase`}> MCVR {title[type]}</h1>
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
        </>
    )

}
const VehiclesPage = ({ type }) => {
    // types:
    // 0 Cars
    // 1 Electric
    // 2 Vans
    return (
        <GenericPage title={title[type]} content={Content} type={type} />
    )
}

export default VehiclesPage