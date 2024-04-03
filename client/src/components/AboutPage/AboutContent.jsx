import React, { useEffect, useState } from 'react'
import styles from '../../style'
import { aboutText } from '../../constants/about'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from '../../lib/axios';


const tabs = [
    "Local", "Independent", "Family", "Passionate", "Friendly", "Fair", "Honest", "Reliable"
]
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const AboutContent = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [data, setData] = useState()
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    console.log(data);

    useEffect(() => {
        axios.get('/api/about').then((res) => {
            setData(res.data)
        })
    }, [])
    return (

        <div className='block about-bg py-20 px-6'>
            {/* TABS */}
            <div className="w-full md:py-6rem">
                <div className='flex flex-col lg:flex-row m-auto justify-between px-20'>
                    {tabs.map((s, ind) => {
                        return (
                            <div>
                                <p className={`${styles.paragraph} text-center text-[2rem] text-[black]`} key={ind}>
                                    {s}
                                </p>
                                <div className={`${ind < tabs.length - 1 && "border-separators"}`}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=" mt-[7rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[black]`}> About Us</h1>
            </div>
            {/* Material UI */}
            <Box sx={{ maxWidth: 800, flexGrow: 1, margin: 'auto', flexDirection: 'row' }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {aboutText.map((s, ind) => (
                        (
                            <div className={`min-h-[300px] bg-offwhite ${ind % 2 === 0 ? "rounded-tl-[100px] rounded-br-[100px]" : "rounded-tr-[100px] rounded-bl-[100px]"} p-10  mx-4`}>
                                <div className="my-auto translate-y-[50px]">
                                    <p className={`font-normal text-center text-[20px]`} key={ind}>
                                        {s}
                                    </p>
                                </div>
                            </div>
                        )
                    ))}
                </AutoPlaySwipeableViews>
            </Box>
            <p className="float-right text-[12px]"> *subject to driver age and vehicle class</p>
        </div>
    )
}

export default AboutContent