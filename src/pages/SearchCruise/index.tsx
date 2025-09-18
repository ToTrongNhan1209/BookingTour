import React from 'react';
import Header from '../../components/Header';
import SearchCruise from '../../components/SearchCruise';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
const SearchCruisePage: React.FC = () => {
    return (
        <>
        <div className="layout-main">
            <Header />
            <Hero
                title='Bạn lựa chọn du thuyền Hạ Long nào?'
                subtitle='Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn'
                searchPlaceholder='Nhập tên du thuyền '
            />

            <SearchCruise />
            <Footer />
            </div>
        </>
    );
};

export default SearchCruisePage;
