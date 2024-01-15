import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import ShowCars from './components/Booking/ShowCars.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EndBooking from './components/Booking/EndBooking.jsx';
import FaqPage from './components/FAQs/FaqPage.jsx';
import Page from './components/CorporateServices/Page.jsx';
import VehiclesPage from './components/Vehicles/VehiclesPage.jsx';
import VehicleSalesPage from './components/VehicleSales/VehicleSalesPage.jsx';
import TermsPage from './components/Terms/TermsPage.jsx';
import PrivacyPage from './components/Privacy/PrivacyPage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import ContactPage from './components/Contact/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/cars",
    element: <VehiclesPage type={0} />,
  },
  {
    path: "/vans",
    element: <VehiclesPage type={2} />,
  },
  {
    path: '/booking',
    element: <ShowCars />
  },
  {
    path: '/completion',
    element: <EndBooking />
  },
  {
    path: '/corporate',
    element: <Page />
  },
  {
    path: '/faqs',
    element: <FaqPage />
  },
  {
    path: '/vehicle-sales',
    element: <VehicleSalesPage />
  },
  {
    path: '/terms-and-conditions',
    element: <TermsPage />
  },
  {
    path: '/privacy',
    element: <PrivacyPage />
  }
], {
  basename: '/'
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);