import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    rating: number;
    reviewCount: number;
}

// Mảng dữ liệu các tour phổ biến
const popularToursData: PopularTourData[] = [
    {
        id: 1,
        name: "Citadines Marina Hạ Long",
        location: "Vịnh Hạ Long",
        description: "580 phòng",
        price: "4,150,000đ / phòng",
        image: "/images/khachsan/citadines.webp",
        alt: "Citadines Marina Hạ Long",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        rating: 4.8,
        reviewCount: 124
    },
    {
        id: 2,
        name: "Anya Hotel Quy Nhơn",
        location: "Quy NhơnNhơn",
        description: "229 phòng ",
        price: "3,850,000đ / phòng",
        image: "public/images/khachsan/anya.webp",
        alt: "Anya Hotel Quy Nhơn",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 46,
        rating: 4.6,
        reviewCount: 89
    },
    {
        id: 3,
        name: "Grand Tourane Hotel Đà Nẵng ",
        location: "Đà Nẵng",
        description: "188 phòng ",
        price: "5,150,000đ / phòng",
        image: "/images/khachsan/grandtourand.webp",
        alt: "Grand Tourane Hotel Đà Nẵng",
        launchYear: "2023",
        material: "Tàu vỏ Kim loại",
        rooms: 56,
        rating: 4.9,
        reviewCount: 156
    },
    {
        id: 4,
        name: "Nha Trang Marriott Resort",
        location: "Nha Trang ",
        description: "8229 phòng",
        price: "4,800,000đ / phòng",
        image: "/images/khachsan/mariot.webp",
        alt: "Nha Trang Marriott Resort",
        launchYear: "2022",
        material: "Tàu vỏ Kim loại",
        rooms: 32,
        rating: 4.7,
        reviewCount: 98
    },
    {
        id: 5,
        name: "Sol by Meliá Phú Quốc",
        location: "Vịnh Hạ Long",
        description: "284 phòng ",
        price: "3,200,000đ / phòng",
        image: "/images/khachsan/melias.webp",
        alt: "Sol by Meliá Phú Quốc",
        launchYear: "2021",
        material: "Tàu vỏ Kim loại",
        rooms: 24,
        rating: 4.5,
        reviewCount: 67
    },
    {
        id: 6,
        name: "Sapa Jade Hill Resort & Sapa",
        location: "Vịnh Hạ Long",
        description: "66 phòng ",
        price: "4,500,000đ / phòng",
        image: "/images/khachsan/sapajade.webp",
        alt: "Sapa Jade Hill Resort & Sapa",
        launchYear: "2020",
        material: "Tàu vỏ Kim loại",
        rooms: 40,
        rating: 4.4,
        reviewCount: 112
    }
];

const PopularHotel: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const toursToShow = showAll ? popularToursData : popularToursData.slice(0, 6);

    // Component đánh giá sao
    const StarRating: React.FC<{ rating: number; reviewCount: number }> = ({ rating, reviewCount }) => {
        return (
            <div className="rating-badge">
                <div className="rating-content">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f79009">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="rating-text">{rating} ({reviewCount}) đánh giá</span>
                </div>
            </div>
        );
    };

    // Render tour card
    const renderTourCard = (tour: PopularTourData) => (
        <div key={tour.id} className="tour-card">
            <div className="card-images">
                <img src={tour.image} alt={tour.alt} />
                <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />
            </div>
            <div className="tour-info-hotel">
                <div className="info-category">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M12.3333 6.66536C12.3333 9.99403 8.64063 13.4607 7.40063 14.5314C7.28511 14.6182 7.14449 14.6652 6.99996 14.6652C6.85543 14.6652 6.71481 14.6182 6.59929 14.5314C5.35929 13.4607 1.66663 9.99403 1.66663 6.66536C1.66663 5.25088 2.22853 3.89432 3.22872 2.89413C4.22892 1.89393 5.58547 1.33203 6.99996 1.33203C8.41445 1.33203 9.771 1.89393 10.7712 2.89413C11.7714 3.89432 12.3333 5.25088 12.3333 6.66536Z" stroke="black" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.99996 8.66536C8.10453 8.66536 8.99996 7.76993 8.99996 6.66536C8.99996 5.5608 8.10453 4.66536 6.99996 4.66536C5.89539 4.66536 4.99996 5.5608 4.99996 6.66536C4.99996 7.76993 5.89539 8.66536 6.99996 8.66536Z" stroke="black" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {tour.location}
                    </span>
                </div>

                <h4>{tour.name}</h4>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 3.5H4C3.20435 3.5 2.44129 3.81607 1.87868 4.37868C1.31607 4.94129 1 5.70435 1 6.5V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H6C6.16471 20.4991 6.32665 20.4576 6.47145 20.3791C6.61625 20.3006 6.73941 20.1876 6.83 20.05L8.54 17.5H15.46L17.17 20.05C17.2606 20.1876 17.3838 20.3006 17.5285 20.3791C17.6733 20.4576 17.8353 20.4991 18 20.5H22C22.2652 20.5 22.5196 20.3946 22.7071 20.2071C22.8946 20.0196 23 19.7652 23 19.5V6.5C23 5.70435 22.6839 4.94129 22.1213 4.37868C21.5587 3.81607 20.7956 3.5 20 3.5ZM21 18.5H18.54L16.83 16C16.7454 15.8531 16.6248 15.7302 16.4796 15.6428C16.3344 15.5553 16.1694 15.5062 16 15.5H8C7.83529 15.5009 7.67335 15.5424 7.52855 15.6209C7.38375 15.6994 7.26059 15.8124 7.17 15.95L5.46 18.5H3V13.5H21V18.5ZM7 11.5V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5H10C10.2652 9.5 10.5196 9.60536 10.7071 9.79289C10.8946 9.98043 11 10.2348 11 10.5V11.5H7ZM13 11.5V10.5C13 10.2348 13.1054 9.98043 13.2929 9.79289C13.4804 9.60536 13.7348 9.5 14 9.5H16C16.2652 9.5 16.5196 9.60536 16.7071 9.79289C16.8946 9.98043 17 10.2348 17 10.5V11.5H13ZM21 11.5H19V10.5C19 9.70435 18.6839 8.94129 18.1213 8.37868C17.5587 7.81607 16.7956 7.5 16 7.5H14C13.2599 7.50441 12.5476 7.78221 12 8.28C11.4524 7.78221 10.7401 7.50441 10 7.5H8C7.20435 7.5 6.44129 7.81607 5.87868 8.37868C5.31607 8.94129 5 9.70435 5 10.5V11.5H3V6.5C3 6.23478 3.10536 5.98043 3.29289 5.79289C3.48043 5.60536 3.73478 5.5 4 5.5H20C20.2652 5.5 20.5196 5.60536 20.7071 5.79289C20.8946 5.98043 21 6.23478 21 6.5V11.5Z" fill="#475467"></path></svg>
                    {tour.description}
                </p>
                <div className="info-checkout">
                    <div className="checkout-price">
                        <strong className='priceSale'>{tour.price}</strong>
                        <strong className='price'>{tour.price}</strong>
                    </div>

                    <div className="btn btn-css">Đặt ngay</div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            <section className="popular-tours">
                <div className="hotel-infomation">
                    <div className="info1-hotel">
                        <h3>Khám phá và trải nghiệm
                            tất cả dịch vụ tuyệt vời nhất
                            từ các khách sạn trên mọi miền
                            đất nước cùng To Vivu.</h3>
                    </div>
                    <div className="info2-hotel">
                        <label>Không gian nghỉ dưỡng sang trọng, tiện nghi và hiện đại cùng dịch vụ chuyên nghiệp, Mixi Vivu tự hào mang đến những trải nghiệm hoàn hảo cho kỳ nghỉ của bạn, giúp bạn tận hưởng từng khoảnh khắc một cách đáng nhớ và trọn vẹn nhất!.</label>
                    </div>
                </div>

                <div className="tour-list">
                    {toursToShow.map(tour => renderTourCard(tour))}
                </div>

                <div className="popularship">
                   <Link to='/tim-khach-san'>
                   <button onClick={() => setShowAll(!showAll)}>
                        Xem tất cả khách sạn
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                            <path d="M15 1.66797L18.3333 5.0013M18.3333 5.0013L15 8.33464M18.3333 5.0013H1.66666" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default PopularHotel;