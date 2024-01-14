import React from 'react'
import styles from '../../style'
import FeedbackCard from '../FeedbackCard'
import ImgCard from './ImgCard'
import downloaded from '../../assets/images/download.jpeg'
import office from '../../assets/images/office.avif'
const HomeImages = () => {
    return (
        <section className={`${styles.flexCenter} flex-col relative `}>
            <div className="flex justify-between w-full feedback-container relative z-[1]">
                <ImgCard src={downloaded} />
                <ImgCard src={office} />
                <ImgCard src={downloaded} />
            </div>
        </section>
    )
}

export default HomeImages