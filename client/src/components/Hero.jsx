import styles from "../style";

const Hero = ({ text, textSize, isHeader }) => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* {
        isHeader &&
        <>
          <div className="absolute top-[0] left-[0] w-full opacity-[0.7]">
            <img src={backgroundImg} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-[-110px] right-[2rem] text-white opacity-[0.7]">
            <p className="text-[12px]"> Photo Credits: Shutterstock</p>
          </div>

        </>
      } */}
      {
        isHeader &&
        <div className="flex w-full">
          <button className="flex flex-row m-auto bg-[#EE892F] text-[36px] py-3 px-12 rounded-[10px] translate-y-[-4rem] opacity-[0.8]">
            {/* <img src={ClickSVG} alt="" className="h-[3.5rem] mr-2" /> */}
            CLICK HERE TO BOOK NOW
          </button>
        </div>
      }
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[10]`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-center font-poppins font-semibold ss:text-[${textSize}px] text-[32px] ss:leading-[100.8px] leading-[75px] uppercase`}>
            {!isHeader && "Malgam Car and Van Rental: London’s choice for self drive hire"}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
