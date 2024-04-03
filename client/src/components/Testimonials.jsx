
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = ({ testimonials }) => (
  <section id="clients" className={`px-2 md:px-6 lg:px-16 ${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        MEET <br className="sm:block hidden" /> THE TEAM
      </h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime aspernatur? Quae.
        </p>
      </div> */}
    </div>
    {testimonials &&
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {testimonials && testimonials.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    }
  </section>
);

export default Testimonials;
