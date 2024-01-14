import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";


const Hero = ({ text, textSize }) => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-center font-poppins font-semibold ss:text-[${textSize}px] text-[${textSize}px] ss:leading-[100.8px] leading-[75px]`}>
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
