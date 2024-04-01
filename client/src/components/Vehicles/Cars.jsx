import React, { useEffect, useState } from 'react'
import { cars } from '../../constants/vehicles'
import CarCard from './CarCard'
import axios from '../../lib/axios'
const Cars = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('/api/cars').then((res) => {
            console.log(res.data.data);
            setData(res.data.data)
        })
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {data && data.map(c => {
                return (
                    <CarCard car={c.attributes} />
                )
            })}
        </div>
    )
}

export default Cars