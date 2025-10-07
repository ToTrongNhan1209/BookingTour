import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import PopularHotel from '../../components/PopularHotel';
import CategoryCN from '../../components/category';
// import News from '../../components/news';
import Footer from '../../components/Footer';
import HeroHotel from '../../components/HeroHotel';
const Hotel: React.FC = () => {
    return (
        <>
            <Header />
            <HeroHotel
                title='Bạn muốn đặt khách sạn ở đâu?'
                subtitle='Hàng nghìn phòng giá tốt đang chờ bạn'
                videoSrc='./video/videoressort.mp4'
                searchPlaceholder='Nhập tên khách sạn hoặc khu vực'
            />
            <PopularHotel />
            <CategoryCN
                title="Các điểm đến của Tovivu"
                subtitle="Trải nghiệm sự sang trọng và thư giãn tại Khách sạn: Hành trình đến thiên đường nghỉ dưỡng hoàn hảo"
                tours={[
                    { id: 1, name: 'Ninh Bình', location: 'Ninh Bình', description: 'Ninh Bình ', price: '', image: '/images/khachsan/ninhbinh.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
                    { id: 2, name: 'Đà Nẵng  ', location: 'Đà Nẵng  ', description: 'Đà Nẵng   ', price: '', image: '/images/khachsan/danang.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
                    { id: 3, name: 'Nha Trang ', location: 'Nha Trang ', description: 'Nha Trang  ', price: '', image: '/images/khachsan/nhatrang.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
                    { id: 4, name: 'Hạ Long ', location: 'Hạ Long ', description: 'Hạ Long  ', price: '', image: '/images/khachsan/halong.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
                    { id: 5, name: 'Phú Quốc ', location: 'Phú Quốc ', description: 'Phú Quốc  ', price: '', image: '/images/khachsan/phuquoc.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
                    { id: 66, name: 'Quy Nhơn  ', location: 'Quy Nhơn  ', description: 'Quy Nhơn   ', price: '', image: '/images/khachsan/quynhon.jpg', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
                ]}
            />
            <Footer />
        </>
    )
}

export default Hotel;
