import React from 'react'
import { cars } from '../../constants/vehicles'
import CarCard from './CarCard'
const Cars = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {cars.map(c => {
                return (
                    <CarCard car={c} />
                )
            })}
        </div>
    )
}

export default Cars