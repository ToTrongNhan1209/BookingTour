import React from 'react';
import Header from '../../components/Header';
import SearchCruise from '../../components/SearchCruise';
import Footer from '../../components/Footer';
// import Hero from '../../components/Hero';
const SearchCruisePage: React.FC = () => {
    return (
        <>
        <div className="layout-main">
        <section className='HeroSeach mt-94'>
            <Header />
            <section className="hero">
                <div className="search-box">
                    <h2>Bạn lựa chọn du thuyền Hạ Long nào?</h2>
                    <p>Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn</p>
                    <form>
                        <input type="text" placeholder="Nhập tên du thuyền" required />
                        <select>
                            <option value="">Tất cả địa điểm</option>
                            <option value="halong">Vịnh Hạ Long</option>
                            <option value="lanha">Vịnh Lan Hạ</option>
                            <option value="catba">Đảo Cát Bà</option>
                        </select>
                        <select>
                            <option value="">Tất cả mức giá</option>
                            <option value="under2m">Dưới 2 triệu</option>
                            <option value="2m-4m">2-4 triệu</option>
                            <option value="over4m">Trên 4 triệu</option>
                        </select>
                        <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                    </form>
                </div>
            </section>
            </section>

            <SearchCruise />
            <Footer />
            </div>
        </>
    );
};

export default SearchCruisePage;
