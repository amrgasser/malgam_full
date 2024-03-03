import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import ChargeSpeed from '../../assets/card_images/charge-speed.png'
import CarSeat from '../../assets/card_images/car-seat.png'
import CarRange from '../../assets/card_images/car-range.png'
import Battery from '../../assets/card_images/battery.png'

const ElectricCarCard = ({ car }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-white rounded-lg car-shadow p-2" >
            <img className="rounded-t-lg w-[75%]" src={Car} alt="product" />
            <div className="px-5 pb-5 flex flex-col align-center justify-center">
                <h5 className="text-l text-center font-semibold tracking-tight text-gray-900 dark:text-white p-3">{car.code}:&nbsp;{car.type} <br /> or similar</h5>
                <div className="grid grid-flow-row grid-cols-2 gap-4 p-4">
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={CarRange} alt="" />
                        <p>{car.range}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={ChargeSpeed} alt="" />
                        <p>{car.charge}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={CarSeat} alt="" />
                        <p>{car.seats} seats</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={Battery} alt="" />
                        <p>{car.battery}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElectricCarCard