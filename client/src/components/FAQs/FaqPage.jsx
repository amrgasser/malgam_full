import React, { useEffect, useState } from "react";
import SingleQuestion from "./SingleQuestion";
import GenericPage from "../Common/GenericPage";
import axios from '../../lib/axios'

const Content = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('/api/faqs').then((res) => {
            setData(res.data.data)
        })
    }, [])
    return (
        <>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> FAQs</h1>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {data && data.map((card, index) => (
                    <SingleQuestion question={card.question} answer={card.answer} />
                ))}
            </div>
        </>
    )
}

export default function FaqPage() {

    return (
        <GenericPage title={"FAQs"} content={Content} />
    );
}