import React from 'react'
import Car from '../../assets/card_images/new_car.png'

import CarSeat from '../../assets/card_images/car-seat.png'
import Payload from '../../assets/card_images/payload.jpeg'
import Cargo from '../../assets/card_images/cargo.png'
import Gas from '../../assets/card_images/gas-station.png'
import Transmission from '../../assets/card_images/manual-transmission.png'
import styles from '../../style'

const VanCard = ({ car }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-white rounded-lg car-shadow p-2" >
            <img className="rounded-t-lg w-[75%]" src={Car} alt="product image" />
            <div className="px-5 pb-5 flex flex-col align-center justify-center">
                <h5 className="text-l text-center font-semibold tracking-tight text-gray-900 dark:text-white p-3">{car.code}:&nbsp;{car.type} <br /> or similar</h5>
                <div className="flex flex-row items-center justiy-between">
                    <div className="flex flex-row items-center">
                        {/* <img className='h-4 w-4 mr-2' src={Cargo} alt="" /> */}
                        <p className={`${styles.paragraph}`}>H: {car.dimensions.h}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* <img className='h-4 w-4 mr-2' src={Cargo} alt="" /> */}
                        &nbsp;&nbsp;<p className={`${styles.paragraph}`}>W: {car.dimensions.w}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* <img className='h-4 w-4 mr-2' src={Cargo} alt="" /> */}
                        &nbsp;&nbsp;<p className={`${styles.paragraph}`}>L: {car.dimensions.l}</p>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-2 gap-4 p-4">
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={Cargo} alt="" />
                        <p>{car.cargoSpace}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={Payload} alt="" />
                        <p>{car.payload}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={CarSeat} alt="" />
                        <p>{car.seats} seats</p>
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
                <div className="flex w-full">
                    <button className="flex flex-row justify-center align-center m-auto bg-[#EE892F]  py-2 px-12 rounded-[10px] opacity-[0.8]">
                        {/* <img src={ClickSVG} alt="" className="h-[1.5rem] mr-2" /> */}
                        <p className='text-[12px] m-auto'> Check Availability</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VanCard