import React, { useState } from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";
import styles from "../../style";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function FaqPage() {
    const [cards] = useState(questions);

    return (
        <div className=" bg-offwhite-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} bg-offwhite ${styles.flexCenter}`}>
                <div className={`w-full px-10 z-[100]`}>
                    <Navbar isLogo={true} />
                </div>
            </div>
            <section className="mx-auto py-6 px-[8rem]">
                <div className=" mt-[3rem] mb-[4rem]">
                    <h1 className={`font-corbel font-semibold text-[70px] w-full text-center text-[#FCE9D8]`}> FAQs</h1>
                </div>

                <section className="grid grid-cols-1 gap-3">
                    {cards.map((card, index) => (
                        <SingleQuestion {...card} key={index} />
                    ))}
                </section>
            </section>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}