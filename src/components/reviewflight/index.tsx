// ...existing code...
import React, { useState, useEffect } from 'react';

type Review = {
    id: string;
    name: string;
    content: string;
    date?: string;
};

const reviews: Review[] = [
    {
        id: '1',
        name: 'Chị Lê Thùy',
        content:
            'Alo, mình và gia đình vừa về. Cảm ơn bên bạn đặt vé cho mình nhé! Cả nhà đi vui lắm bạn ạ. May là bạn tư vấn cho mình giờ vì nhà mình có trẻ nhỏ. Chuyến bay chuẩn giờ, chỗ ngồi đẹp. Lần sau, mình lại nhờ bạn đặt vé nhé!',
        date: '07/05/2024',
    },
    {
        id: '2',
        name: 'Cô Minh Hòa',
        content:
            'Dịch vụ tốt, nhân viên nhiệt tình. Chuyến đi rất thoải mái, ăn uống trên máy bay ổn, sẽ sử dụng tiếp.',
        date: '08/05/2024',
    },
    {
        id: '3',
        name: 'Anh Quang Anh',
        content: 'Mọi thứ ổn, điểm trừ nhỏ là delay 20 phút nhưng bù lại hỗ trợ ổn.',
        date: '01/08/2024',
    },
    {
        id: '4',
        name: 'Chị Giang',
        content: 'Tuyệt vời, cảm ơn đội ngũ đã hỗ trợ đặt vé nhanh chóng.',
        date: '12/09/2024',
    },
    {
        id: '5',
        name: 'Bạn Chu Huyền',
        content:
            'Alo, mình và gia đình vừa về. Cảm ơn bên bạn đặt vé cho mình nhé! Cả nhà đi vui lắm bạn ạ. May là bạn tư vấn cho mình giờ vì nhà mình có trẻ nhỏ. Chuyến bay chuẩn giờ, chỗ ngồi đẹp. Lần sau, mình lại nhờ bạn đặt vé nhé!',
        date: '21/09/2024',
    },
];

const ReviewFlight: React.FC = () => {
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
        <section className="rf-section">
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

export default ReviewFlight;