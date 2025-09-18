import React from 'react';
import Header from '../../components/Header';
import SearchCruise from '../../components/SearchCruise';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';    
const SearchHotelPage: React.FC = () => {
    return (
        <>
        <div className="layout-main">
            <Header />
            <Hero
                title='Bạn lựa chọn khách sạn nào?'
                subtitle='Hơn 100 khách sạn hạng sang giá tốt đang chờ bạn'
                searchPlaceholder='Nhập tên khách sạn'
            />

            <SearchCruise />
            <Footer />
            </div>
        </>
    );
};

export default SearchHotelPage;
