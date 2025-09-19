import React from 'react';
import Header from '../../components/Header';
import News from '../../components/news';
import Footer from '../../components/Footer';
import Pagination from '../../components/pagination';

const Blog: React.FC = () => {
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
                        <div className="blog-tab-item">
                            
                        </div>
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
