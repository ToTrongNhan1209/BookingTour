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
    rating: number;
    reviewCount: number;
}

// Mảng dữ liệu các tour phổ biến
const popularToursData: PopularTourData[] = [
    {
        id: 1,
        name: "Du thuyền Heritage Bình Chuẩn Cát Bà",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2019 - Tàu vỏ Kim loại - 20 phòng",
        price: "4,150,000đ / khách",
        image: "/images/duthuyen/duthuyenHerign.webp",
        alt: "Du thuyền Heritage",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        rating: 4.8,
        reviewCount: 124
    },
    {
        id: 2,
        name: "Du thuyền Ambassador Hạ Long",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2018 - Tàu vỏ Kim loại - 46 phòng",
        price: "3,850,000đ / khách",
        image: "/images/duthuyen/ambasado.webp",
        alt: "Du thuyền Ambassador",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 46,
        rating: 4.6,
        reviewCount: 89
    },
    {
        id: 3,
        name: "Du thuyền Grand Pioneers",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2023 - Tàu vỏ Kim loại - 56 phòng",
        price: "5,150,000đ / khách",
        image: "/images/duthuyen/Grand picasso.webp",
        alt: "Du thuyền Grand Pioneers",
        launchYear: "2023",
        material: "Tàu vỏ Kim loại",
        rooms: 56,
        rating: 4.9,
        reviewCount: 156
    },
    {
        id: 4,
        name: "Du thuyền Capella",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2022 - Tàu vỏ Kim loại - 32 phòng",
        price: "4,800,000đ / khách",
        image: "/images/duthuyen/capella.webp",
        alt: "Du thuyền Capella",
        launchYear: "2022",
        material: "Tàu vỏ Kim loại",
        rooms: 32,
        rating: 4.7,
        reviewCount: 98
    },
    {
        id: 5,
        name: "Du thuyền Scarlet Pearl",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2021 - Tàu vỏ Kim loại - 24 phòng",
        price: "3,200,000đ / khách",
        image: "/images/duthuyen/scarlet.webp",
        alt: "Du thuyền Scarlet Pearl",
        launchYear: "2021",
        material: "Tàu vỏ Kim loại",
        rooms: 24,
        rating: 4.5,
        reviewCount: 67
    },
    {
        id: 6,
        name: "Du thuyền Lyra Grandeur",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2020 - Tàu vỏ Kim loại - 40 phòng",
        price: "4,500,000đ / khách",
        image: "/images/duthuyen/lyra.webp",
        alt: "Du thuyền Lyra Grandeur",
        launchYear: "2020",
        material: "Tàu vỏ Kim loại",
        rooms: 40,
        rating: 4.4,
        reviewCount: 112
    }
];

const PopularTour: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const toursToShow = showAll ? popularToursData : popularToursData.slice(0, 6);

    // Component đánh giá sao
    const StarRating: React.FC<{ rating: number; reviewCount: number }> = ({ rating, reviewCount }) => {
        return (
            <div className="rating-badge">
                <div className="rating-content">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f79009">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
            <div className="tour-info">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_219_9124)">
                            <path d="M10 8.49211V11.6679M10 8.49211C10.2331 8.49211 10.4637 8.5408 10.6767 8.63545L17.5001 11.6679C17.5132 13.4264 17.0465 15.1551 16.1501 16.6679M10 8.49211C9.76691 8.49211 9.53645 8.5408 9.32342 8.63545L2.50008 11.6679C2.4615 14.0377 3.29485 16.339 4.84175 18.1346M10 1.66797V4.16797M15.8334 10.8346V5.83464C15.8334 5.39261 15.6578 4.96868 15.3452 4.65612C15.0326 4.34356 14.6087 4.16797 14.1667 4.16797H5.83335C5.39133 4.16797 4.9674 4.34356 4.65484 4.65612C4.34228 4.96868 4.16669 5.39261 4.16669 5.83464V10.8346M1.66669 17.5013C2.16669 17.918 2.66669 18.3346 3.75002 18.3346C5.83335 18.3346 5.83335 16.668 7.91669 16.668C9.00002 16.668 9.50002 17.0846 10 17.5013C10.5 17.918 11 18.3346 12.0834 18.3346C14.1667 18.3346 14.1667 16.668 16.25 16.668C17.3334 16.668 17.8334 17.0846 18.3334 17.5013" stroke="black" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_219_9124">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {tour.description}
                </p>
                <div className="info-checkout">
                    <strong>{tour.price}</strong>
                    <div className="btn btn-css">Đặt ngay</div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            <section className="popular-tours">
                <div className="tour-infomation">
                    <div className="info1">
                        <h3>Du thuyền mới và phổ biến nhất</h3>
                    </div>
                    <div className="info2">
                        <label>Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên.</label>
                    </div>
                </div>

                <div className="tour-list">
                    {toursToShow.map(tour => renderTourCard(tour))}
                </div>

                <div className="popularship">
                    <button onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Thu gọn' : 'Xem tất cả du thuyền'} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                            <path d="M15 1.66797L18.3333 5.0013M18.3333 5.0013L15 8.33464M18.3333 5.0013H1.66666" stroke="gray"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default PopularTour;