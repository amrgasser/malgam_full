import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
// import PickupInfo2 from "./components/Booking/PickupInfo2";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import FaqPage from "./components/FAQs/FaqPage";
// import HomeImages from "./components/Home/HomeImages";
import { close, logo, menu } from "./assets";


const App = () => (
  <div className="bg-gradient-custom w-full overflow-hidden">
    <div className="hero-background-image object-fill">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`w-full px-10`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart} min-h-[90vh]`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col justify-between m-auto">
            <h1 className={`flex-1 text-center font-poppins font-semibold sm:text-[20px] lg:text-[32px] ss:leading-[100.8px] leading-[75px] uppercase`}>
              {"Malgam Car and Van Rental: London’s choice for self drive hire"}
            </h1>
            <img src={logo} alt="hoobank" className="m-auto w-[800px] invert-75 translate-y-[-0.1rem] opacity-[0.8] mt-[4rem]" />
            <div className="flex w-full translate-y-[-2rem] opacity-[1]">
              <button className="flex flex-row m-auto bg-[#EE892F] text-[12px] lg:text-[36px] mt-[1rem] lg:mt-[0] py-3 px-12 rounded-[10px] opacity-[0.8]">
                {/* <img src={ClickSVG} alt="" className="h-[3.5rem] mr-2" /> */}
                CLICK HERE TO BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Hero text={"Welcome to Malgam Car and Van Rentals: MCVR"} textSize={"40"} isHeader={true} />
          <div className="w-full m-auto">
            <PickupInfo2 />
          </div>
          <Hero text={"Your local, award winning car and van rental partner"} textSize={"40"} isHeader={false} /> */}

        </div>
      </div >
    </div >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <PickupInfo /> */}
        {/* <Booking /> */}
        {/* <Business /> */}
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        {/* <CTA /> */}
        {/* <Footer /> */}
      </div>
    </div>
  </div >
);

export default App;
