import React from 'react'

const GenericVehicleCard = ({ children, Car }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-white rounded-lg car-shadow p-2" >
            <img className="rounded-t-lg w-[75%]" src={Car} alt="product" />
            <div className=" lg:px-5 pb-5 flex flex-col align-center justify-center">
                {children}
            </div>
            <div className="flex w-full">
                <button className="flex flex-row justify-center align-center m-auto bg-[#EE892F]  py-2 px-12 rounded-[10px] opacity-[0.8]">
                    {/* <img src={ClickSVG} alt="" className="h-[1.5rem] mr-2" /> */}
                    <p className='text-[12px] m-auto'> Check Availability</p>
                </button>
            </div>
        </div>

    )
}

export default GenericVehicleCard