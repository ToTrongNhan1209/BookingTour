import React, { useState } from 'react';
import Header from '../../components/Header';
import News from '../../components/news';
import Footer from '../../components/Footer';
import Pagination from '../../components/pagination';


const tabItems = [
    { key: 'all', label: 'Tất cả' },
    { key: 'dulich', label: 'Du lịch' },
    { key: 'khachsan', label: 'Khách sạn' },
    { key: 'duthuyen', label: 'Du thuyền' },
];

const Blog: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <>
            <Header />
            <div className="layout-94">
                <section className='Blog-container mt-94'>
                    <div className="blog-header">
                        <div className="blog-header-title">
                            <h4>Hạ Long: Khám phá Sự đặc sắc <br /> và Cập nhật tin tức mới nhất</h4>
                        </div>
                            <label>Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này.</label>
                    </div>
                    
                 <div className="blog-tab">
                        <div className="blog-tab-list">
                            {tabItems.map(tab => (
                                <button
                                    key={tab.key}
                                    className={`blog-tab-btn${activeTab === tab.key ? ' active' : ''}`}
                                    onClick={() => setActiveTab(tab.key)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        {/* <div className="blog-tab-item">
                          
                        </div> */}
                    </div>
                      <News />
                    <Pagination />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Blog;
