import React from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";
import GenericPage from "../Common/GenericPage";

const Content = () => {
    return (
        <>
            <div className=" mt-[3rem] mb-[4rem]">
                <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> FAQs</h1>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {questions.map((card, index) => (
                    <SingleQuestion {...card} key={index} />
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