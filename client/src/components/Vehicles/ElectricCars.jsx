import React from 'react'
import { electric } from '../../constants/vehicles'
import ElectricCarCard from './ElectricCarCard'

const ElectricCars = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {electric.map(c => {
                return (
                    <ElectricCarCard car={c} />
                )
            })}
        </div>
    )
}

export default ElectricCars