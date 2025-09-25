import React, { useState } from 'react';

// Interface cho dữ liệu khách sạn
interface HotelData {
    id: number;
    name: string;
    location: string;
    description: string;
    price: string;
    salePrice: string;
    image: string;
    alt: string;
    starRating: number;
    rooms: number;
    rating: number;
    reviewCount: number;
    amenities: string[];
}

// Interface cho filter options
interface FilterOptions {
    starRating: number[];
    amenities: string[];
}

// Mảng dữ liệu các khách sạn
const hotelData: HotelData[] = [
    {
        id: 1,
        name: "DeLaSea Phát Linh Hạ Long",
        location: "Vịnh Hạ Long",
        description: "326 phòng",
        price: "1,950,000đ / phòng",
        salePrice: "1,550,000đ / phòng",
        image: "/images/khachsan/halong.webp",
        alt: "Khách sạn Ambassador",
        starRating: 5,
        rooms: 20,
        rating: 5.0,
        reviewCount: 2,
        amenities: ["Phòng có bồn tắm", "Lễ tân 24h", "Nhà hàng", "Wifi miễn phí", "Ban công/Cửa sổ"]
    }, 
    {
        id: 2,
        name: "Citadines Marina Hạ Long",
        location: "Vịnh Hạ Long",
        description: "200 phòng",
        price: "2,000,000đ / phòng",
        salePrice: "1,600,000đ / phòng",
        image: "/images/khachsan/mariot.webp",
        alt: "Citadines Marina Hạ Long",
        starRating: 4,
        rooms: 20,
        rating: 4.9,
        reviewCount: 12,
        amenities: ["Wifi miễn phí", "Lễ tân 24h", "Nhà hàng", "Ban công/Cửa sổ", "Bể bơi ngoài trời"]
    },
    {
        id: 3,
        name: "Sea Star Hotel Hạ Long",
        location: "Vịnh Hạ Long",
        description: "354 phòng",
        price: "2,700,000đ / khách",
        salePrice: "2,300,000đ / khách",
        image: "/images/khachsan/halong.webp",
        alt: "Sea Star Hotel Hạ Long",
        starRating: 5,
        rooms: 43,
        rating: 5.0,
        reviewCount: 4,
        amenities: ["Bể bơi ngoài trời", "Lễ tân 24h", "Nhà hàng", "Ban công/Cửa sổ", "Wifi miễn phí"]
    },
    {
        id: 4,
        name: "Wyndham Legend Hạ Long",
        location: "Vịnh Hạ Long",
        description: "450 phòng",
        price: "2,500,000đ / khách",
        salePrice: "1,700,000đ / khách",
        image: "/images/khachsan/halong.webp",
        alt: "Wyndham Legend Hạ Long",
        starRating: 5,
        rooms: 21,
        rating: 5.0,
        reviewCount: 7,
        amenities: ["Phòng có bồn tắm", "Lễ tân 24h", "Nhà hàng", "Ban công/Cửa sổ", "Wifi miễn phí"]
    },
    {
        id: 5,
        name: "Hạ long Dream Hotel",
        location: "Vịnh Hạ Long",
        description: "30 phòng",
        price: "1,500,000đ / khách",
        salePrice: "1,000,000đ / khách",
        image: "/images/khachsan/halong.webp",
        alt: "Hạ long Dream Hotel",
        starRating: 3,
        rooms: 30,
        rating: 5.0,
        reviewCount: 4,
        amenities: ["Phòng có bồn tắm", "Lễ tân 24h", "Nhà hàng", "Ban công/Cửa sổ", "Wifi miễn phí"]
    }
];

// Danh sách tiện ích theo hình ảnh
const amenitiesList = [
    "Bể bơi ngoài trời",
    "Nhà hàng", 
    "Wifi miễn phí",
    "Lễ tân 24h",
    "Phòng có bồn tắm",
    "Ban công/Cửa sổ"
];

const SearchHotel: React.FC = () => {
    const [filters, setFilters] = useState<FilterOptions>({
        starRating: [],
        amenities: []
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const itemsPerPage = 5;
    const totalItems = 73; // Tổng số khách sạn như trong hình

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

    // Xử lý filter
    const handleStarRatingChange = (rating: number) => {
        setFilters(prev => ({
            ...prev,
            starRating: prev.starRating.includes(rating)
                ? prev.starRating.filter(r => r !== rating)
                : [...prev.starRating, rating]
        }));
    };

    const handleAmenityChange = (amenity: string) => {
        setFilters(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }));
    };

    const resetFilters = () => {
        setFilters({
            starRating: [],
            amenities: []
        });
    };

    // Lọc khách sạn
    const filteredHotels = hotelData.filter(hotel => {
        const matchesStarRating = filters.starRating.length === 0 || 
            filters.starRating.some(rating => hotel.starRating === rating);
        
        const matchesAmenities = filters.amenities.length === 0 ||
            filters.amenities.every(amenity => hotel.amenities.includes(amenity));
        
        return matchesStarRating && matchesAmenities;
    });

    // Pagination logic
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const openFilterModal = () => {
        setIsFilterModalOpen(true);
    };

    const closeFilterModal = () => {
        setIsFilterModalOpen(false);
    };

    const applyFilters = () => {
        closeFilterModal();
    };

    // Render hotel card
    const renderHotelCard = (hotel: HotelData) => (
        <div key={hotel.id} className="cruise-card">
            <div className="cruise-image">
                <img src={hotel.image} alt={hotel.alt} />
                <StarRating rating={hotel.rating} reviewCount={hotel.reviewCount} />
            </div>
            <div className="cruise-content">
                <div className="cruise-location">
                    <span>{hotel.location}</span>
                </div>
                <h3 className="cruise-title">{hotel.name}</h3>
                <p className="cruise-description">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_219_9124)">
                            <path d="M10 8.49211V11.6679M10 8.49211C10.2331 8.49211 10.4637 8.5408 10.6767 8.63545L17.5001 11.6679C17.5132 13.4264 17.0465 15.1551 16.1501 16.6679M10 8.49211C9.76691 8.49211 9.53645 8.5408 9.32342 8.63545L2.50008 11.6679C2.4615 14.0377 3.29485 16.339 4.84175 18.1346M10 1.66797V4.16797M15.8334 10.8346V5.83464C15.8334 5.39261 15.6578 4.96868 15.3452 4.65612C15.0326 4.34356 14.6087 4.16797 14.1667 4.16797H5.83335C5.39133 4.16797 4.9674 4.34356 4.65484 4.65612C4.34228 4.96868 4.16669 5.39261 4.16669 5.83464V10.8346M1.66669 17.5013C2.16669 17.918 2.66669 18.3346 3.75002 18.3346C5.83335 18.3346 5.83335 16.668 7.91669 16.668C9.00002 16.668 9.50002 17.0846 10 17.5013C10.5 17.918 11 18.3346 12.0834 18.3346C14.1667 18.3346 14.1667 16.668 16.25 16.668C17.3334 16.668 17.8334 17.0846 18.3334 17.5013" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_219_9124">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {hotel.description}</p>
                <div className="cruise-amenities">
                    {hotel.amenities.slice(0, 6).map((amenity, index) => (
                        <span key={index} className="amenity-tag">{amenity}</span>
                    ))}
                    {hotel.amenities.length > 6 && (
                        <span className="amenity-more">+ {hotel.amenities.length - 6}</span>
                    )}
                </div>
                <div className="cruise-footer">
                    <div className="cruise-price">
                        <strong>{hotel.price}</strong>
                    </div>
                    <button className="book-button">Đặt ngay</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="search-cruise-page">
            <div className="search-container">
                {/* Filter Sidebar */}
                <div className="filter-sidebar">
                    <div className="filter-header">
                        <h3>Lọc kết quả</h3>
                        <button className="reset-button" onClick={resetFilters}>Đặt lại</button>
                    </div>

                    {/* Star Rating Filter */}
                    <div className="filter-section">
                        <h4>Xếp hạng sao</h4>
                        <div className="filter-options">
                            {[3, 4, 5].map(rating => (
                                <label key={rating} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={filters.starRating.includes(rating)}
                                        onChange={() => handleStarRatingChange(rating)}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="label-text">{rating} sao</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Amenities Filter */}
                    <div className="filter-section">
                        <h4>Tiện ích</h4>
                        <div className="filter-options">
                            {amenitiesList.map(amenity => (
                                <label key={amenity} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={filters.amenities.includes(amenity)}
                                        onChange={() => handleAmenityChange(amenity)}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="label-text">{amenity}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hotel List */}
                <div className="cruise-list">
                    {filteredHotels.map(hotel => renderHotelCard(hotel))}

                    <div className="pagination-container">
                <div className="pagination-info">
                    <span>Đang xem: {startItem} của {totalItems}</span>
                </div>
                <div className="pagination-controls">
                    <button 
                        className="pagination-btn prev-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Trước
                    </button>
                    
                    <div className="pagination-numbers">
                        {currentPage > 3 && (
                            <>
                                <button 
                                    className="pagination-number"
                                    onClick={() => handlePageChange(1)}
                                >
                                    1
                                </button>
                                {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
                            </>
                        )}
                        
                        {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                            const page = Math.max(1, currentPage - 1) + i;
                            if (page > totalPages) return null;
                            return (
                                <button
                                    key={page}
                                    className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            );
                        })}
                        
                        {currentPage < totalPages - 2 && (
                            <>
                                {currentPage < totalPages - 3 && <span className="pagination-ellipsis">...</span>}
                                <button 
                                    className="pagination-number"
                                    onClick={() => handlePageChange(totalPages)}
                                >
                                    {totalPages}
                                </button>
                            </>
                        )}
                    </div>
                    
                    <button 
                        className="pagination-btn next-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Tiếp
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
                </div>
            </div>

            {/* Pagination */}

            {/* Filter Toggle Button for Mobile */}
            <button className="filter-toggle" onClick={openFilterModal}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 4h18M3 12h18M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Lọc kết quả
            </button>

            {/* Filter Modal */}
            <div className={`filter-overlay ${isFilterModalOpen ? 'active' : ''}`} onClick={closeFilterModal}>
                <div className={`filter-modal ${isFilterModalOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="filter-modal-header">
                        <h3>Lọc kết quả</h3>
                        <button className="close-btn" onClick={closeFilterModal}>
                            ×
                        </button>
                    </div>
                    
                    <div className="filter-modal-content">
                        {/* Star Rating Filter */}
                        <div className="filter-section">
                            <h4>Xếp hạng sao</h4>
                            <div className="filter-options">
                                {[3, 4, 5].map(rating => (
                                    <label key={rating} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.starRating.includes(rating)}
                                            onChange={() => handleStarRatingChange(rating)}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="label-text">{rating} sao</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Amenities Filter */}
                        <div className="filter-section">
                            <h4>Tiện ích</h4>
                            <div className="filter-options">
                                {amenitiesList.map(amenity => (
                                    <label key={amenity} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={filters.amenities.includes(amenity)}
                                            onChange={() => handleAmenityChange(amenity)}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="label-text">{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="filter-modal-footer">
                        <button className="btn btn-secondary" onClick={resetFilters}>
                            Đặt lại
                        </button>
                        <button className="btn btn-primary" onClick={applyFilters}>
                            Áp dụng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchHotel;
