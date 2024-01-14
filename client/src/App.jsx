import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import PickupInfo2 from "./components/Booking/PickupInfo2";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FaqPage from "./components/FAQs/FaqPage";
import HomeImages from "./components/Home/HomeImages";

const App = () => (
  <div className="bg-gradient-custom w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero text={"Welcome to Malgam Car and Van Rentals: MCVR"} textSize={"40"} />

        <div className="w-full m-auto">
          <PickupInfo2 />
        </div>
        <Hero text={"Your local, award winning car and van rental partner"} textSize={"40"} />

      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <PickupInfo /> */}
        {/* <Booking /> */}
        {/* <Business /> */}
        {/* <Billing /> */}
        <HomeImages />
        <CardDeal />
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
