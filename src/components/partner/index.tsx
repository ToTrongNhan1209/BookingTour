import React from 'react';

type Partner = { id: string; name: string; file: string };

const PARTNERS: Partner[] = [
    { id: 'p1', name: 'Vietjet', file: '/images/partner/partner1.png' },
    { id: 'p2', name: 'Vietnam Airlines', file: '/images/partner/partner2.png' },
    { id: 'p3', name: 'Jetstar', file: '/images/partner/partner3.png' },
    { id: 'p4', name: 'Bamboo', file: '/images/partner/partner4.png' },
    { id: 'p5', name: 'United', file: '/images/partner/partner5.png' },
    { id: 'p6', name: 'Hongkong Airlines', file: '/images/partner/partner6.png' },
    { id: 'p7', name: 'Air France', file: '/images/partner/partner7.png' },
    { id: 'p8', name: 'Air Canada', file: '/images/partner/partner8.png' },
    { id: 'p9', name: 'American Airlines', file: '/images/partner/partner9.png' },
    { id: 'p10', name: 'Cathay Pacific', file: '/images/partner/partner10.png' },
    { id: 'p11', name: 'China Airlines', file: '/images/partner/partner11.png' },
    { id: 'p12', name: 'EVA Air', file: '/images/partner/partner12.png' },
    { id: 'p13', name: 'Korean Air', file: '/images/partner/partner13.png' },
    { id: 'p14', name: 'Malaysia', file: '/images/partner/partner14.png' },
    { id: 'p15', name: 'Philippine Airlines', file: '/images/partner/partner15.png' },
];

const Partner: React.FC = () => {
    return (
        <section className="partner-section">
            <div className="partner-shell">
                <div className="rf-grid">
                    <div className="rf-col-left">
                        <h2 className="rf-title">Đối tác Cùng các<br />Hãng máy bay lớn</h2>
                        <div className="blog-detail-divider" aria-hidden />
                    </div>

                    <div className="rf-col-right">
                        <p className="rf-desc">
                            Đối tác hàng đầu với các hãng máy bay lớn: Ưu đãi độc quyền dành riêng cho bạn
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

export default Partner;