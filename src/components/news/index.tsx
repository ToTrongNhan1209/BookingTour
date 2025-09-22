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
    {
        id: 4,
        name: "Lịch sơ duyệt và tổng duyệt diễu binh 2/9 năm 2025",
        location: "Vịnh Hạ Long",
        description: "Dưới đây là thông tin chi tiết lịch sơ duyệt và tổng duyệt diễu binh 2/9 năm 2025 tại Quảng trường Ba Đình, Hà Nội.",
        price: "5,150,000đ / khách",
        image: "/images/news/soduyet.webp",
        alt: "Du thuyền Grand Pioneers",
        launchYear: "2023",
        material: "Tàu vỏ Kim loại",
        rooms: 56,
        date: "11/08/20250"
    },
    {
        id: 5,
        name: "5 Khu Phố Ẩm Thực “Gây Mê” Ở Quy Nhơn – Vui Cả Ngày, No Cả Đêm",
        location: "Quy Nhơn",
        description: "Bên cạnh những bãi biển tuyệt đẹp, Quy Nhơn còn “níu chân” du khách bằng nền ẩm thực phong phú, dân dã mà khó cưỡng. Từ sáng tinh mơ đến khuya muộn, bạn có thể dễ dàng tìm thấy những khu phố ăn uống tấp nập, thơm nức mùi đặc sản. Và nếu bạn đang lên kế hoạch ăn “sạch” Quy Nhơn thì đừng bỏ lỡ 5 con phố ẩm thực nổi tiếng dưới đây nhé!.",
        price: "5,150,000đ / khách",
        image: "/images/news/5khupho.webp",
        alt: "Du thuyền Grand Pioneers",
        launchYear: "2023",
        material: "Tàu vỏ Kim loại",
        rooms: 56,
        date: "11/08/20250"
    },
    {
        id: 6,
        name: "3 hòn đảo đẹp tại Quy Nhơn mà du khách không thể bỏ qua",
        location: "Vịnh Hạ Long",
        description: "Không chỉ sở hữu bờ biển dài thơ mộng, Quy Nhơn còn có nhiều hòn đảo hoang sơ và quyến rũ, rất thích hợp cho những chuyến du lịch thiên nhiên, khám phá hoặc nghỉ dưỡng ngắn ngày. Trong số đó, ba cái tên nổi bật và đáng đến nhất là Hòn Khô, Cù Lao Xanh và Hòn Sẹo. Mỗi đảo mang một nét đẹp riêng biệt về địa hình, cảnh quan và trải nghiệm du lịch.",
        price: "5,150,000đ / khách",
        image: "/images/news/3hondao.webp",
        alt: "Du thuyền Grand Pioneers",
        launchYear: "2023",
        material: "Tàu vỏ Kim loại",
        rooms: 56,
        date: "11/08/20250"
    },

];

const News: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const toursToShow = showAll ? popularToursData : popularToursData.slice(0, 6);

    // Render tour card
    const renderTourCard = (tour: PopularTourData) => (
        <Link to={`/tin-tuc/${tour.id}`} key={tour.id} >
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
        </Link>
    );
    return (
        <>
            <div className="tour-list">
                {toursToShow.map(tour => renderTourCard(tour))}
            </div>
        </>
    )
}

export default News;