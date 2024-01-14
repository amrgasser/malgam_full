import React, { useState } from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";
import styles from "../../style";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function FaqPage() {
    const [cards] = useState(questions);

    return (
        <div className="bg-gradient-custom w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <section className="max-w-xl mx-auto py-10 px-4">
                <h1 className="text-center uppercase tracking-widest font-bold mb-8">
                    Challenge Faqs
                </h1>

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