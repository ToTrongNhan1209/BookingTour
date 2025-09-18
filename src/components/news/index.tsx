import React, { useState } from 'react';

// Interface cho dữ liệu tour phổ biến
interface PopularTourData {
    id: number;
    name: string;
    location: string;
    description: string;
    price: string;
    image: string;
    alt: string;
    launchYear: string;
    material: string;
    rooms: number;
    date: string;
}

// Mảng dữ liệu các tour phổ biến
const popularToursData: PopularTourData[] = [
    {
        id: 1,
        name: "Top 5 loại trà Đà Lạt ngon mà nhất định bạn phải thử",
        location: "Vịnh Hạ Long",
        description: "Đà lạt không chỉ nổi tiếng với khí hậu mát lành, hóa tươi 4 mùa mà còn là “Thiên đường của trà”.",
        price: "4,150,000đ / khách",
        image: "/images/news/dalat.webp",
        alt: "Du thuyền Heritage",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        date: "11/09/20250"

    },
    {
        id: 2,
        name: "Bãi Sao Phú Quốc – Thiên đường biển đẹp nhất đảo ngọc",
        location: "Vịnh Hạ Long",
        description: "Bãi Sao Phú Quốc là một trong những bãi biển nổi tiếng và đẹp nhất tại đảo ngọc. Với bờ cát trắng mịn như kem, làn nước trong xanh ngọc bích cùng khung cảnh hoang sơ yên bình, Bãi Sao luôn nằm trong top điểm đến không thể bỏ qua khi du lịch Phú Quốc.",
        price: "3,850,000đ / khách",
        image: "/images/news/baisauphuquoc.webp",
        alt: "Du thuyền Ambassador",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 46,
        date: "11/09/20250"
    },
    {
        id: 3,
        name: "Bãi biển Cà Ná – Vẻ đẹp nguyên sơ giữa lòng miền Trung",
        location: "Vịnh Hạ Long",
        description: "Nhắc đến du lịch biển miền Trung, nhiều người thường nghĩ ngay đến Nha Trang, Mũi Né hay Đà Nẵng. Thế nhưng, ít ai biết rằng giữa ranh giới của Ninh Thuận và Bình Thuận lại có một “viên ngọc thô” mang tên Cà Ná. Với vẻ đẹp nguyên sơ, mộc mạc, bãi biển này được ví như “nàng công chúa ngủ quên” bên bờ cát trắng, sóng xanh và những dãy núi đá hùng vĩ.",
        price: "5,150,000đ / khách",
        image: "/images/news/baibiencana.webp",
        alt: "Du thuyền Grand Pioneers",
        launchYear: "2023",
        material: "Tàu vỏ Kim loại",
        rooms: 56,
             date: "11/09/20250"
    },
 
];

const News: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const toursToShow = showAll ? popularToursData : popularToursData.slice(0, 3);

    // Render tour card
    const renderTourCard = (tour: PopularTourData) => (
        <div key={tour.id} className="tour-card-news">
            <div className="card-images-news">
                <img src={tour.image} alt={tour.alt} />
            </div>
            <div className="tour-info-news">
                <h4>{tour.name}</h4>
                <p>
                    {tour.description}
                </p>

            </div>
            <div className="info-checkout-news">
                    <strong>{tour.date}</strong>
                </div>
        </div>
    );
    return (
        <>
            <section className="popular-tours-news">
                <div className="tour-infomation-news">
                    <div className="info1-news">
                        <h3>Hạ Long khám phá sự đặc sắc và cập nhật tin tức mới nhất</h3>
                    </div>
                    <div className="info2-news">
                        <label>Hạ Long: Bí mật và cuộc sống trong vịnh - Khám phá và cập nhật nhứng tin tức mới hấp dẫn từ điểm đến tuyệt với này.</label>
                    </div>
                </div>

                <div className="tour-list">
                    {toursToShow.map(tour => renderTourCard(tour))}
                </div>

                <div className="popularship">
                    <button onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Thu gọn' : 'Xem tất cả'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                            <path d="M15 1.66797L18.3333 5.0013M18.3333 5.0013L15 8.33464M18.3333 5.0013H1.66666" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default News;