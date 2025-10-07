import React from 'react';

type Partner = { id: string; name: string; file: string };

const PARTNERS: Partner[] = [
    { id: 'p1', name: 'Vietjet', file: '/images/partnercruise/partnercruise1.png' },
    { id: 'p2', name: 'Vietnam Airlines', file: '/images/partnercruise/partnercruise2.png' },
    { id: 'p3', name: 'Jetstar', file: '/images/partnercruise/partnercruise3.png' },
    { id: 'p4', name: 'Bamboo', file: '/images/partnercruise/partnercruise4.png' },
    { id: 'p5', name: 'United', file: '/images/partnercruise/partnercruise5.png' },
    { id: 'p6', name: 'Hongkong Airlines', file: '/images/partnercruise/partnercruise6.png' },
    { id: 'p7', name: 'Air France', file: '/images/partnercruise/partnercruise7.png' },
    { id: 'p8', name: 'Air Canada', file: '/images/partnercruise/partnercruise8.png' },
    { id: 'p9', name: 'American Airlines', file: '/images/partnercruise/partnercruise9.png' },
    { id: 'p10', name: 'Cathay Pacific', file: '/images/partnercruise/partnercruise10.png' },
];

const PartnerCruise: React.FC = () => {
    return (
        <section className="partner-section partnercruise-section">
            <div className="partner-shell">
                <div className="rf-grid">
                    <div className="rf-col-left">
                        <h2 className="rf-title">Đối tác Cùng các<br />Hãng du thuyền lớn</h2>
                        <div className="blog-detail-divider" aria-hidden />
                    </div>

                    <div className="rf-col-right">
                        <p className="rf-desc">
                           Đối tác hàng đầu với các hãng du thuyền danh tiếng: Ưu đãi độc quyền dành riêng cho bạn
                        </p>
                    </div>
                </div>

                <div className="partner-logos" role="list">
                    {PARTNERS.map(p => (
                        <div className="partner-item" key={p.id} role="listitem" title={p.name}>
                            <img
                                src={`${p.file}`}
                                alt={p.name}
                                loading="lazy"
                                className="partner-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerCruise;