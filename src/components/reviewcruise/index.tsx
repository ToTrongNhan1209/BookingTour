// ...existing code...
import React, { useState, useEffect } from 'react';

type Review = {
    id: string;
    name: string;
    cruise?: string;
    content: string;
    date?: string;
};

const reviews: Review[] = [
    {
        id: '1',
        name: 'Chị Thu Hà',
        cruise: 'Heritage Bình Chuẩn',
        content:
            ' Chị rất cảm ơn team đã tư vấn cho chị chọn du thuyền Heritage Bình Chuẩn. Bố mẹ chị rất ưng í em ạ! Tàu đẹp, mang đậm phong cách Á Đông. Đồ ăn hợp khẩu vị. Các bạn nhân viên trên tàu nhiệt tình và chu đáo.',
        date: '07/05/2024',
    },
    {
        id: '2',
        name: 'Anh Khánh',
        cruise: 'Du thuyền Stellar of the Seas',
        content:
            'Anh chọn ngày đi tàu trùng với sinh nhật vợ anh. Muốn là món quà tặng vợ. Với lại, vợ anh thích chụp ảnh nữa. Anh thấy bạn bè bảo đặt tàu này hơi khó vì rất hot, hay kín phòng. May quá bên em lại có phòng tàu này. Cảm ơn dịch vụ của bên em nhé! Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.',
        date: '08/05/2024',
    },
    {
        id: '3',
        name: 'Chị Linh - Anh Dũng',
        content: 'Tour du thuyền 2 ngày 1 đêm rất tuyệt vời,tôi đc ngắm vẻ đẹp cả vịnh Hạ Long,khám phá các hang động. Nhân viên tư vấn nhiệt tình,phục vụ chu đáo. Đồ ăn ngon,phòng ốc đẹp. Đây thực sự là trải nghiệm đáng nhớ,mình sẽ tiếp tục ủng hộ và giới thiệu cho bạn bè. Cảm ơn du thuyền!',
        date: '01/08/2024',
    },
    {
        id: '4',
        name: 'Bạn Minh Hoàng',
        content: 'Cảm ơn team đã cho mình trải nghiệm quá ưng ý. Đi đúng hôm thời tiết đẹp,ngắm cảnh vịnh Hạ Long đẹp tuyệt vời. Nhân viên tư vấn nhiệt tình còn note lại khách dị ứng món gì,phục vụ chu đáo, buffet hải sản tươi ngon,phòng ốc đẹp Tuyệt vời lắm !!!.',
        date: '12/09/2024',
    },
    {
        id: '5',
        name: 'Cô Thanh Hằng và bạn',
        content:
            'Du thuyền 5 sao và sự trải nghiệm tuyệt vời. Tour của chúng tôi đi rất đầy đủ như theo chương trình đã thông báo trước. Đồ ăn khá đa dạng, nấu vừa với khẩu vị của tất cả mọi độ tuổi từ bé đến các bác U80. Chúng tôi được trải nghiệm gần như đầy đủ các hoạt động chèo kayak,thăm hang,thăm vịnh.... và loại hải sản tươi ngon Rất đáng nhớ !!!',
        date: '21/09/2024',
    },
];

const ReviewCruise: React.FC = () => {
    const [activeId, setActiveId] = useState<string>(reviews[0].id);

    const active = reviews.find(r => r.id === activeId) || reviews[0];

    useEffect(() => {
        const tick = () => {
            setActiveId(prev => {
                const idx = reviews.findIndex(r => r.id === prev);
                const next = (idx + 1) % reviews.length;
                return reviews[next].id;
            });
        };

        const timer = setInterval(tick, 5000); 
        return () => clearInterval(timer);
    }, []); // run once

    return (
        <section className="rf-section rf-cruise-section">
            <div className="rf-shell">
                <div className="rf-grid">
                    <div className="rf-col-left">
                        <h2 className="rf-title">Đánh giá từ những<br />người đã trải nghiệm</h2>
                        <div className="blog-detail-divider" aria-hidden />
                    </div>

                    <div className="rf-col-right">

                        <p className="rf-desc">
                            Khách hàng chia sẻ về những kỷ niệm tuyệt vời trên chuyến du lịch với chúng tôi.
                        </p>
                    </div>
                </div>

                <div className="rf-review-wrap">
                    <div className="rf-quote-icon" aria-hidden>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                            <g clip-path="url(#clip0_441_1054)">
                                <path d="M0 13.6C0 6.9 4.1 1.8 11.7 0L13.7 2.6C8.9 4.2 6.8 6.2 6.8 8.6C6.8 10 7.5 10.6 9.5 11.3C10.9 11.9 12.9 13.3 12.9 16.1C12.9 19.2 10.4 21.8 6.8 21.8C2.9 21.8 0 18.3 0 13.6ZM16.2 13.6C16.2 6.9 20.5 1.8 28 0L30 2.6C25.3 4.2 23.1 6.1 23.1 8.5C23.1 9.9 23.8 10.5 25.8 11.2C27.2 11.8 29.2 13.2 29.2 16C29.2 19.1 26.6 21.7 23.1 21.7C19.1 21.8 16.2 18.3 16.2 13.6Z" fill="#77DADA" />
                            </g>
                            <defs>
                                <clipPath id="clip0_441_1054">
                                    <rect width="30" height="22" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className="rf-review-content">
                        <h3 className="rf-heading">{active.cruise}</h3>
                        <p className="rf-text">{active.content}</p>
                        <div className="rf-author">{active.name} <span className="rf-author-sep">-</span></div>
                    </div>
                </div>

                <div className="rf-pills">
                    {reviews.map(r => (
                        <button
                            key={r.id}
                            type="button"
                            className={`rf-pill ${r.id === activeId ? 'active' : ''}`}
                            onClick={() => setActiveId(r.id)}
                        >
                            {r.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewCruise;