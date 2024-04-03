import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import Payload from '../../assets/card_images/payload.jpeg'
import Cargo from '../../assets/card_images/cargo.png'
import Gas from '../../assets/card_images/gas-station.png'
import Transmission from '../../assets/card_images/manual-transmission.png'
import styles from '../../style'
import GenericVehicleCard from './GenericVehicleCardContainer'
const Content = (car) => {
    return (
        <>
            <h5 className="text-l text-center font-semibold tracking-tight text-gray-900 dark:text-white p-3">{car.code}:&nbsp;{car.type} <br /> or similar</h5>
            <div className="flex flex-row items-center justiy-between">
                <div className="flex flex-row items-center">
                    {/* <img className='h-4 w-4 mr-2' src={Cargo} alt="" /> */}
                    <p className={`${styles.paragraph}`}>H: {car.dimensions.height}</p>
                </div>
                <div className="flex flex-row items-center">
                    {/* <img className='h-4 w-4 mr-2' src={Cargo} alt="" /> */}
                    &nbsp;&nbsp;<p className={`${styles.paragraph}`}>W: {car.dimensions.width}</p>
                </div>
                <div className="flex flex-row items-center">
                    {/* <img className='h-4 w-4 mr-2' src={Cargo} alt="" /> */}
                    &nbsp;&nbsp;<p className={`${styles.paragraph}`}>L: {car.dimensions.length}</p>
                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-2 gap-4 p-4">
                <div className="flex flex-row items-center">
                    <img className='h-4 w-4 mr-2' src={Cargo} alt="" />
                    <p>{car.load}</p>
                </div>
                <div className="flex flex-row items-center">
                    <img className='h-4 w-4 mr-2' src={Payload} alt="" />
                    <p>{car.capacity}</p>
                </div>
                <div className="flex flex-row items-center">
                    <img className='h-4 w-4 mr-2' src={Gas} alt="" />
                    <p>{car.gas}</p>
                </div>
                <div className="flex flex-row items-center">
                    <img className='h-4 w-4 mr-2' src={Transmission} alt="" />
                    <p>{car.transmission}</p>
                </div>
            </div>

        </>
    )
}

const VanCard = ({ car }) => {
    return (
        <GenericVehicleCard Car={Car} >
            {Content(car)}
        </GenericVehicleCard>
    )
}

export default VanCard