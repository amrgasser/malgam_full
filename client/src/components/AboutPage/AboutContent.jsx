import React from 'react'
import styles from '../../style'
import { aboutText } from '../../constants/about'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const tabs = [
    "Local", "Independent", "Family", "Passionate", "Friendly", "Fair", "Honest", "Reliable"
]
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const AboutContent = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = aboutText.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <div className='block about-bg'>

            {/* TABS */}
            <div className="w-full mb-[6rem]">
                <div className='flex flex-col lg:flex-row m-auto justify-between'>
                    {tabs.map((s, ind) => {
                        return (
                            <div>
                                <p className={`${styles.paragraph} text-center text-[2rem] text-[#EE892F]`} key={ind}>
                                    {s}
                                </p>
                                <div className={`${ind < tabs.length - 1 && "border-separators"}`}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> About Us</h1>
            </div>
            {/* Material UI */}
            <Box sx={{ maxWidth: 700, flexGrow: 1, margin: 'auto', flexDirection: 'row' }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {aboutText.map((s, ind) => (
                        (
                            <div className={`min-h-[300px] bg-offwhite ${ind % 2 == 0 ? "rounded-tl-[100px] rounded-br-[100px]" : "rounded-tr-[100px] rounded-bl-[100px]"} p-10  m-auto`}>
                                <div className="m-auto">
                                    <p className={`font-normal text-center text-[20px]`} key={ind}>
                                        {s}
                                    </p>
                                </div>
                            </div>
                        )
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button sx={{ color: 'red' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
            <p className="float-right text-[12px]"> *subject to driver age and vehicle class</p>
        </div>
    )
}

export default AboutContent