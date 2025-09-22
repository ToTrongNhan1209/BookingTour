import React, { useState } from 'react';

// Interface cho dữ liệu tour
interface TourData {
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
    type: 'featured' | 'regular';
}

// Mảng dữ liệu mặc định (có thể được override qua props)
const defaultTourData: TourData[] = [
    { id: 1, name: 'Vịnh Hạ Long', location: 'Vịnh Hạ Long', description: 'Vịnh Hạ Long ', price: '', image: '/images/khachsan/ninhbinh.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
    { id: 2, name: 'Vịnh Lan Hạ', location: 'Vịnh Lan Hạ', description: 'Vịnh Lan Hạ ', price: '', image: '/images/khachsan/danang.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
    { id: 3, name: 'Đảo Cát Bà', location: 'Đảo Cát Bà', description: 'Đảo Cát Bà ', price: '', image: '/images/khachsan/nhatrang.webp', alt: 'Resort ABC', launchYear: '', material: '', rooms: 0, type: 'featured' },
];

// // Mảng các category để lọc (tuỳ chọn sử dụng)
// const categories = [
//     { id: 'all', name: 'Tất cả', value: 'all' },
//     { id: 'halong', name: 'Vịnh Hạ Long', value: 'halong' },
//     { id: 'catba', name: 'Cát Bà', value: 'catba' }
// ];

type CategoryProps = {
    title?: string;
    subtitle?: string;
    tours?: TourData[];
};

const CategoryCN: React.FC<CategoryProps> = ({ title, subtitle, tours }) => {
    const sourceTours = tours && tours.length > 0 ? tours : defaultTourData;
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [filteredTours, setFilteredTours] = useState<TourData[]>(sourceTours);

    // // Hàm lọc tour theo category
    // const filterToursByCategory = (category: string) => {
    //     setSelectedCategory(category);
        
    //     if (category === 'all') {
    //         setFilteredTours(sourceTours);
    //     } else {
    //         const filtered = sourceTours.filter(tour => {
    //             if (category === 'halong') {
    //                 return tour.location === 'Vịnh Hạ Long';
    //             } else if (category === 'catba') {
    //                 return tour.location === 'Cát Bà';
    //             }
    //             return true;
    //         });
    //         setFilteredTours(filtered);
    //     }
    // };

    // Hàm render tour list với layout phù hợp
    const renderTourList = () => {
        if (selectedCategory === 'catba') {
            // Chỉ hiển thị tour Cát Bà với layout đặc biệt
            const catbaTours = filteredTours.filter(tour => tour.location === 'Cát Bà');
            return (
                <div className="tour-list">
                    {catbaTours.map(tour => (
                        <div key={tour.id} className="tour-card-category">
                            <div className="card-images-category">
                                <img src={tour.image} alt={tour.alt} />
                            </div>
                            <div className="tour-info-category">
                                <h4>{tour.name}</h4>
                                <div className="info-checkout">
                                    <div className="btn btn-css-category">Đặt ngay</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            // Hiển thị tất cả tour với layout thông thường
            return (
                <div className="tour-list">
                    {filteredTours.map(tour => renderTourCard(tour))}
                </div>
            );
        }
    };

    // Render tour card dựa trên type
    const renderTourCard = (tour: TourData) => {
        if (tour.type === 'featured') {
            return (
                <div key={tour.id} className="tour-card-category">
                    <div className="card-images-category">
                        <img src={tour.image} alt={tour.alt} />
                    </div>
                    <div className="tour-info-category">
                        <h4>{tour.name}</h4>
                        <div className="info-checkout">
                            <div className="btn btn-css-category">Xem ngay</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={tour.id} className="tour-card">
                    <img src={tour.image} alt={tour.alt} />
                    <div className="tour-info">
                        <span>{tour.location}</span>
                        <h4>{tour.name}</h4>
                        <p>{tour.description}</p>
                        <strong>{tour.price}</strong>
                        <button className="btn btn-primary">Xem ngay</button>
                    </div>
                </div>
            );
        }
    };
    return (
        <>
            <section className="popular-category">
                <div className="category-infomation">
                    <div className="infomation-name">
                        <span>{title || 'Các điểm đến của Tovivu'}</span>
                    </div>
                    { (subtitle || 'Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến thiên đường thiên nhiên') && (
                        <p>{subtitle || 'Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến thiên đường thiên nhiên'}</p>
                    )}
                </div>

                {/* Category Filter Buttons */}
                {/* <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                            onClick={() => filterToursByCategory(category.value)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div> */}

                {renderTourList()}

                {/* <div className="popularship">
                    <button>Xem tất cả du thuyền <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                        <path d="M15 1.66797L18.3333 5.0013M18.3333 5.0013L15 8.33464M18.3333 5.0013H1.66666" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </div> */}
            </section>
        </>
    )
}

export default CategoryCN;