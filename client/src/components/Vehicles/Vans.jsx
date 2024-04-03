import React, { useState, useEffect } from "react"
import VanCard from "./VanCard"
import axios from "../../lib/axios"

const Vans = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get("/api/vans").then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
        })
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data && data.map((c) => {
                return <VanCard car={c} />
            })}
        </div>
    )
}

export default Vans
