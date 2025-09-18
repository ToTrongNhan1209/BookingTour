import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import PopularTour from '../../components/PopularTour';
import CategoryCN from '../../components/category';
import News from '../../components/news';
import Footer from '../../components/Footer';
const Homepage: React.FC = () => {
    return (
        <>
        <Header />
        <Hero />
        <PopularTour />
        <CategoryCN />
        <News />
        <Footer />
        </>
    )
}

export default Homepage;
