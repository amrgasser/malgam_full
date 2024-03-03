import React from 'react'

import AboutPage from '../components/AboutPage/AboutPage';
import VehiclesPage from '../components/Vehicles/VehiclesPage';
import ShowCars from '../components/Booking/ShowCars';
import EndBooking from '../components/Booking/EndBooking';
import Page from '../components/CorporateServices/Page';
import FaqPage from '../components/FAQs/FaqPage';
import VehicleSalesPage from '../components/VehicleSales/VehicleSalesPage';
import TermsPage from '../components/Terms/TermsPage';
import PrivacyPage from '../components/Privacy/PrivacyPage';
import HomePage from '../components/Home/HomePage';
import ContactPage from '../components/Contact/ContactPage';
import BlogPage from '../components/Blog/BlogPage';

export const myRoutes = [
    {
        path: "/",
        element: <HomePage />,
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
    },
    {
        path: '/blogs',
        element: <BlogPage />
    }
]