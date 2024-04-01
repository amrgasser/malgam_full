import styles from "./style";
import { Footer, Navbar } from "./components";
import { Route, Routes } from 'react-router-dom'
import { myRoutes } from './constants/routes'

const App = () => (
  <div className="bg-gradient-custom w-full overflow-hidden">
    <div className="hero-background-image object-fill">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-orange`}>
        <div className={`w-full md:px-10`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        {myRoutes.map((r) => {
          return (
            <Route path={r.path} element={r.element} />
          )
        })}
      </Routes>
    </div >
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
      <div className={`w-full px-10 z-[100]`}>
        <Footer />
      </div>
    </div>
  </div >
);

export default App;
