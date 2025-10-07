import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Interface cho dữ liệu tour phổ biến
interface PopularTourData {
    id: number;
    name: string;
    slug: string;
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
    amenities: string[];
}

// Mảng dữ liệu các tour phổ biến

const popularToursData: PopularTourData[] = [
    {
        id: 1,
        name: "Du thuyền Ambassador Hạ Long",
        slug: "du-thuyen-ambassador-ha-long",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2012 - Tàu vỏ Kim loại - 20 phòng",
        price: "3,200,000đ / khách",
        image: "/images/duthuyen/ambasado.webp",
        alt: "Du thuyền Ambassador",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        rating: 5.0,
        reviewCount: 2,
        amenities: ["Phòng gia đình", "Giáp biển", "Quầy bar", "Lễ tân 24 giờ", "Nhà hàng", "Ban công riêng", "Wi-Fi", "Két an toàn"]
    },
    {
        id: 2,
        name: "Du thuyền Heritage Bình Chuẩn Cát Bà",
        slug: "du-thuyen-heritage-binh-chuan-cat-ba",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2019 - Tàu vỏ Kim loại - 20 phòng",
        price: "4,150,000đ / khách",
        image: "/images/duthuyen/duthuyenHerign.webp",
        alt: "Du thuyền Heritage",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        rating: 4.9,
        reviewCount: 12,
        amenities: ["Có bể sục", "Bao gồm tất cả các bữa ăn", "Quầy bar", "Lễ tân 24 giờ", "Nhà hàng", "Wi-Fi miễn phí", "Miễn phí kayaking", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Miễn phí xe đưa đón", "Có bể bơi ngoài trời", "Phòng không hút thuốc", "Du thuyền 5 sao", "Chỗ đỗ xe"]
    },
    {
        id: 3,
        name: "Du thuyền Grand Pioneers",
        slug: "du-thuyen-grand-pioneers",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2019 - Tàu vỏ Kim loại - 43 phòng",
        price: "4,125,000đ / khách",
        image: "/images/duthuyen/Grand picasso.webp",
        alt: "Du thuyền Grand Pioneers",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 43,
        rating: 5.0,
        reviewCount: 4,
        amenities: ["Bao gồm tất cả các bữa ăn", "Giáp biển", "Quầy bar", "Lễ tân 24 giờ", "Nhà hàng", "Wi-Fi miễn phí", "Miễn phí kayaking", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Miễn phí xe đưa đón", "Có bể bơi ngoài trời", "Phòng không hút thuốc", "Du thuyền 5 sao"]
    },
    {
        id: 4,
        name: "Du thuyền Capella",
        slug: "du-thuyen-capella",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2019 - Tàu vỏ Kim loại - 21 phòng",
        price: "3,700,000đ / khách",
        image: "/images/duthuyen/capella.webp",
        alt: "Du thuyền Capella",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 21,
        rating: 5.0,
        reviewCount: 7,
        amenities: ["Phòng gia đình", "Bao gồm tất cả các bữa ăn", "Quầy bar", "Lễ tân 24 giờ", "Nhà hàng", "Wi-Fi miễn phí", "Miễn phí kayaking", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Miễn phí xe đưa đón", "Có bể bơi ngoài trời", "Phòng không hút thuốc", "Du thuyền 5 sao"]
    },
    {
        id: 5,
        name: "Du thuyền Scarlet Pearl",
        slug: "du-thuyen-scarlet-pearl",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2020 - Tàu vỏ Kim loại - 30 phòng",
        price: "3,500,000đ / khách",
        image: "/images/duthuyen/scarlet.webp",
        alt: "Du thuyền Scarlet Pearl",
        launchYear: "2020",
        material: "Tàu vỏ Kim loại",
        rooms: 30,
        rating: 5.0,
        reviewCount: 4,
        amenities: ["Bao gồm tất cả các bữa ăn", "Quầy bar", "Lễ tân 24 giờ", "Nhà hàng", "Wi-Fi miễn phí", "Miễn phí kayaking", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Miễn phí xe đưa đón", "Có bể bơi ngoài trời", "Phòng không hút thuốc", "Du thuyền 5 sao"]
    },
    {
        id: 6,
        name: "Du thuyền La Regina Legend",
        slug: "du-thuyen-la-regina-legend",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2021 - Tàu vỏ Kim loại - 24 phòng",
        price: "4,300,000đ / khách",
        image: "/images/duthuyen/scarlet.webp",
        alt: "Du thuyền La Regina Legend",
        launchYear: "2021",
        material: "Tàu vỏ Kim loại",
        rooms: 24,
        rating: 4.8,
        reviewCount: 6,
        amenities: ["Phòng gia đình", "Bao gồm tất cả các bữa ăn", "Giáp biển", "Quầy bar", "Lễ tân 24 giờ", "Nhà hàng", "Wi-Fi miễn phí", "Miễn phí kayaking", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Miễn phí xe đưa đón", "Có bể bơi ngoài trời", "Phòng không hút thuốc", "Du thuyền 5 sao"]
    },
    {
        id: 7,
        name: "Du thuyền Paradise Elegance",
        slug: "du-thuyen-paradise-elegance",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2017 - Tàu vỏ Kim loại - 31 phòng",
        price: "3,800,000đ / khách",
        image: "/images/duthuyen/paradise_elegance.webp",
        alt: "Du thuyền Paradise Elegance",
        launchYear: "2017",
        material: "Tàu vỏ Kim loại",
        rooms: 31,
        rating: 4.9,
        reviewCount: 10,
        amenities: ["Ban công riêng", "Wi-Fi", "Két an toàn", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 8,
        name: "Du thuyền Athena Luxury",
        slug: "du-thuyen-athena-luxury",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2016 - Tàu vỏ Kim loại - 21 phòng",
        price: "3,600,000đ / khách",
        image: "/images/duthuyen/athena_luxury.webp",
        alt: "Du thuyền Athena Luxury",
        launchYear: "2016",
        material: "Tàu vỏ Kim loại",
        rooms: 21,
        rating: 4.8,
        reviewCount: 8,
        amenities: ["Phòng gia đình", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 9,
        name: "Du thuyền Mon Cheri",
        slug: "du-thuyen-mon-cheri",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2018 - Tàu vỏ Kim loại - 18 phòng",
        price: "4,000,000đ / khách",
        image: "/images/duthuyen/mon_cheri.webp",
        alt: "Du thuyền Mon Cheri",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 18,
        rating: 4.7,
        reviewCount: 6,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 10,
        name: "Du thuyền Orchid Classic",
        slug: "du-thuyen-orchid-classic",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2016 - Tàu vỏ Kim loại - 14 phòng",
        price: "4,200,000đ / khách",
        image: "/images/duthuyen/orchid_classic.webp",
        alt: "Du thuyền Orchid Classic",
        launchYear: "2016",
        material: "Tàu vỏ Kim loại",
        rooms: 14,
        rating: 4.9,
        reviewCount: 9,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 11,
        name: "Du thuyền Stellar of the Seas",
        slug: "du-thuyen-stellar-of-the-seas",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2018 - Tàu vỏ Kim loại - 22 phòng",
        price: "4,500,000đ / khách",
        image: "/images/duthuyen/stellar_seas.webp",
        alt: "Du thuyền Stellar of the Seas",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 22,
        rating: 5.0,
        reviewCount: 12,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Có bể bơi ngoài trời"]
    },
    {
        id: 12,
        name: "Du thuyền Peony",
        slug: "du-thuyen-peony",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2018 - Tàu vỏ Kim loại - 20 phòng",
        price: "3,900,000đ / khách",
        image: "/images/duthuyen/peony.webp",
        alt: "Du thuyền Peony",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        rating: 4.8,
        reviewCount: 7,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 13,
        name: "Du thuyền Era",
        slug: "du-thuyen-era",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2017 - Tàu vỏ Kim loại - 18 phòng",
        price: "4,100,000đ / khách",
        image: "/images/duthuyen/era.webp",
        alt: "Du thuyền Era",
        launchYear: "2017",
        material: "Tàu vỏ Kim loại",
        rooms: 18,
        rating: 4.7,
        reviewCount: 5,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 14,
        name: "Du thuyền President",
        slug: "du-thuyen-president",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2018 - Tàu vỏ Kim loại - 46 phòng",
        price: "5,000,000đ / khách",
        image: "/images/duthuyen/president.webp",
        alt: "Du thuyền President",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 46,
        rating: 5.0,
        reviewCount: 15,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Có bể bơi ngoài trời"]
    },
    {
        id: 15,
        name: "Du thuyền Indochine",
        slug: "du-thuyen-indochine",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2019 - Tàu vỏ Kim loại - 43 phòng",
        price: "4,800,000đ / khách",
        image: "/images/duthuyen/indochine.webp",
        alt: "Du thuyền Indochine",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 43,
        rating: 4.9,
        reviewCount: 11,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Có bể bơi ngoài trời"]
    },
    {
        id: 16,
        name: "Du thuyền Heritage",
        slug: "du-thuyen-heritage",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2019 - Tàu vỏ Kim loại - 20 phòng",
        price: "4,150,000đ / khách",
        image: "/images/duthuyen/heritage.webp",
        alt: "Du thuyền Heritage",
        launchYear: "2019",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        rating: 4.9,
        reviewCount: 12,
        amenities: ["Có bể sục", "Bao gồm tất cả các bữa ăn", "Quầy bar", "Lễ tân 24 giờ", "Nhà hàng", "Wi-Fi miễn phí", "Miễn phí kayaking", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Miễn phí xe đưa đón", "Có bể bơi ngoài trời", "Phòng không hút thuốc", "Du thuyền 5 sao", "Chỗ đỗ xe"]
    },
    {
        id: 17,
        name: "Du thuyền La Regina Grand",
        slug: "du-thuyen-la-regina-grand",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2020 - Tàu vỏ Kim loại - 27 phòng",
        price: "4,350,000đ / khách",
        image: "/images/duthuyen/laregina_grand.webp",
        alt: "Du thuyền La Regina Grand",
        launchYear: "2020",
        material: "Tàu vỏ Kim loại",
        rooms: 27,
        rating: 4.8,
        reviewCount: 9,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí", "Có bể bơi ngoài trời"]
    },
    {
        id: 18,
        name: "Du thuyền Signature",
        slug: "du-thuyen-signature",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2013 - Tàu vỏ Kim loại - 12 phòng",
        price: "3,900,000đ / khách",
        image: "/images/duthuyen/signature.webp",
        alt: "Du thuyền Signature",
        launchYear: "2013",
        material: "Tàu vỏ Kim loại",
        rooms: 12,
        rating: 4.7,
        reviewCount: 6,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 19,
        name: "Du thuyền Royal",
        slug: "du-thuyen-royal",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2015 - Tàu vỏ Kim loại - 16 phòng",
        price: "3,700,000đ / khách",
        image: "/images/duthuyen/royal.webp",
        alt: "Du thuyền Royal",
        launchYear: "2015",
        material: "Tàu vỏ Kim loại",
        rooms: 16,
        rating: 4.8,
        reviewCount: 7,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 20,
        name: "Du thuyền Jasmine",
        slug: "du-thuyen-jasmine",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2012 - Tàu vỏ Kim loại - 23 phòng",
        price: "3,600,000đ / khách",
        image: "/images/duthuyen/jasmine.webp",
        alt: "Du thuyền Jasmine",
        launchYear: "2012",
        material: "Tàu vỏ Kim loại",
        rooms: 23,
        rating: 4.7,
        reviewCount: 5,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 21,
        name: "Du thuyền Glory Legend",
        slug: "du-thuyen-glory-legend",
        location: "Vịnh Hạ Long",
        description: "Hạ thủy 2014 - Tàu vỏ Kim loại - 17 phòng",
        price: "3,500,000đ / khách",
        image: "/images/duthuyen/glory_legend.webp",
        alt: "Du thuyền Glory Legend",
        launchYear: "2014",
        material: "Tàu vỏ Kim loại",
        rooms: 17,
        rating: 4.6,
        reviewCount: 4,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
    },
    {
        id: 22,
        name: "Du thuyền V'Spirit Premier",
        slug: "du-thuyen-vspirit-premier",
        location: "Vịnh Lan Hạ",
        description: "Hạ thủy 2018 - Tàu vỏ Kim loại - 20 phòng",
        price: "3,800,000đ / khách",
        image: "/images/duthuyen/vspirit_premier.webp",
        alt: "Du thuyền V'Spirit Premier",
        launchYear: "2018",
        material: "Tàu vỏ Kim loại",
        rooms: 20,
        rating: 4.8,
        reviewCount: 8,
        amenities: ["Ban công riêng", "Wi-Fi miễn phí", "Nhà hàng", "Quầy bar", "Lễ tân 24 giờ", "Trung tâm Spa & chăm sóc sức khoẻ", "Chỗ đỗ xe miễn phí"]
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
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="rating-text">{rating} ({reviewCount}) đánh giá</span>
                </div>
            </div>
        );
    };

    // Render tour card
    const renderTourCard = (tour: PopularTourData) => (
        <Link to={`/chi-tiet-du-thuyen/${tour.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                        <Link to={`/chi-tiet-du-thuyen/${tour.slug}`} style={{ textDecoration: 'none' }}>
                            <div className="btn btn-css">Đặt ngay</div>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
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
                    <Link to="/tim-du-thuyen" style={{ textDecoration: 'none' }}>
                        <button>
                            Xem tất cả
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

export default PopularTour;