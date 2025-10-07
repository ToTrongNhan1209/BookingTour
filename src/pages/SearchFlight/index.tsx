import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroFlight from '../../components/HeroFlight';
import ReviewFlight from '../../components/reviewflight';
import Partner from '../../components/partner';
const SearchFlightPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="loader"></div>
            <HeroFlight />
            <ReviewFlight />
            <Partner />
            <Footer />
        </>
    );
};

export default SearchFlightPage;
