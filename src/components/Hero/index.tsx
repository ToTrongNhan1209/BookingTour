import React from 'react';

const Hero: React.FC = () => {
    return (
        <>
        <section className="hero">
        <div className="hero-bg">
          <video src="./video/video.mp4" autoPlay muted loop playsInline></video>
        </div>
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
      </>
    )
}

export default Hero;