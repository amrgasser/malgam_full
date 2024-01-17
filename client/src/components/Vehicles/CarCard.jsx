import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import CarEngine from '../../assets/card_images/car-engine.png'
import CarSeat from '../../assets/card_images/car-seat.png'
import Transmission from '../../assets/card_images/manual-transmission.png'
import Gas from '../../assets/card_images/gas-station.png'
import GenericVehicleCard from './GenericVehicleCardContainer'
const Content = (car) => {
    return (<>

        <h5 className="text-l text-center font-semibold tracking-tight text-gray-900 dark:text-white p-3">{car.code}:&nbsp;{car.type} <br /> or similar</h5>
        <div className="grid grid-flow-row grid-cols-2 gap-4 p-4">
            <div className="flex flex-row items-center">
                <img className='h-4 w-4 mr-2' src={CarEngine} alt="" />
                <p>{car.power} HP</p>
            </div>
            <div className="flex flex-row items-center">
                <img className='h-4 w-4 mr-2' src={CarSeat} alt="" />
                <p>{car.seats} seats</p>
            </div>
            <div className="flex flex-row items-center">
                <img className='h-4 w-4 mr-2' src={Transmission} alt="" />
                <p>{car.transmission}</p>
            </div>
            <div className="flex flex-row items-center">
                <img className='h-4 w-4 mr-2' src={Gas} alt="" />
                <p>30 MPG</p>
            </div>
        </div>
    </>)
}

const CarCard = ({ car }) => {
    return (
        <GenericVehicleCard Car={Car} >
            {Content(car)}
        </GenericVehicleCard>
    )
}

export default CarCard