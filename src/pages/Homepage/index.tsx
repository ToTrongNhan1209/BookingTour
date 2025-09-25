import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import PopularTour from '../../components/PopularTour';
import CategoryCN from '../../components/category';
import News from '../../components/news';
import Footer from '../../components/Footer';


const Homepage: React.FC = () => {
    const loading = false;

    if (loading) {
        return <div className="loader"></div>;
    }
    return (
        <>
            <Header />
            <Hero
                title='Bạn lựa chọn du thuyền Hạ Long nào?'
                subtitle='Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn'
                videoSrc='./video/video.mp4'
                searchPlaceholder='Nhập tên du thuyền'
            />
            <PopularTour />
            <CategoryCN />
            <section className="popular-tours-news">
                <div className="tour-infomation-news">
                    <div className="info1-news">
                        <h3>Hạ Long khám phá sự đặc sắc và cập nhật tin tức mới nhất</h3>
                    </div>
                    <div className="info2-news">
                        <label>Hạ Long: Bí mật và cuộc sống trong vịnh - Khám phá và cập nhật nhứng tin tức mới hấp dẫn từ điểm đến tuyệt với này.</label>
                    </div>
                </div>

                <News />

                <div className="popularship">
                    <button >
                        Xem tất cả
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                            <path d="M15 1.66797L18.3333 5.0013M18.3333 5.0013L15 8.33464M18.3333 5.0013H1.66666" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Homepage;
