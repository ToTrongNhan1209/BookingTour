import React, { useState } from 'react';


const IntroSelect: React.FC = () => {

  return (

    <div className="cruise-intro-section">
      <div className="cruise-intro-title">Giới thiệu</div>
      <div className="blog-detail-divider"></div>
      <div className="cruise-intro-subtitle">Giới thiệu về du thuyền</div>
      <div className="cruise-intro-desc">
        Du thuyền Heritage Cruises Bình Chuẩn có kiến trúc độc đáo, thiết kế mang đậm nét truyền thống và lịch sử. Với 20 phòng rộng rãi và tất cả các cabin có bồn tắm cạnh cửa kính lớn, có ban công với tầm nhìn toàn cảnh vịnh Lan Hạ. Trên du thuyền nhiều tiện nghi nổi bật mà du thuyền thường không có như phòng tranh, thư viện, gian hàng bán đồ lưu niệm, quầy bar liên kề hồ bơi.
      </div>
      <div className="cruise-intro-img-wrapper">
        <img
          className="cruise-intro-img"
          src="/images/intro/intro1.webp"
          alt="Du thuyền tuyệt đẹp về đêm"
        />
        <div className="cruise-intro-img-caption">Du thuyền tuyệt đẹp về đêm</div>
      </div>

      <div className="cruise-intro-desc">
        Đặc biệt, du thuyền có bể bơi bốn mùa mang lại cảm giác hài lòng cho những du khách đi vào mùa lạnh. Đây chính là điểm thú vị của du thuyền và hoàn toàn phù hợp với những gia đình có trẻ nhỏ. Bên cạnh đó là quầy bar với rất nhiều đồ uống ngon miệng và được trang trí đẹp mắt. Thật tuyệt vời khi bạn vừa nhâm nhi 1 ly cocktail, vừa ngâm mình trong nước ấm.
      </div>
      <div className="cruise-intro-img-wrapper">
        <img
          className="cruise-intro-img"
          src="/images/intro/intro2.webp"
          alt="Bể bơi bốn mùa của du thuyền"
        />
        <div className="cruise-intro-img-caption">Bể bơi bốn mùa của du thuyền</div>
      </div>
      <div className="cruise-intro-desc">
        Nhà hàng Tonkin của du thuyền thiết kế theo lối kiến trúc Đông Dương và đậm tính nghệ thuật sẽ phục vụ du khách các bữa ăn tươi ngon trong chuyến đi. Bên cạnh sự nổi trội về phòng nghỉ và tiện ích thì lịch trình tàu cũng rất thú vị. Những điểm tham quan như: làng chài Việt Hải,  hang Sáng Tối hay đảo Ba Trái Đào đều rất nổi tiếng và không thể bỏ qua.....
      </div>
      <div className="cruise-intro-img-wrapper">
        <img
          className="cruise-intro-img"
          src="/images/intro/intro3.webp"
          alt="Nhà hàng Tonkin"
        />
        <div className="cruise-intro-img-caption">Nhà hàng Tonkin</div>
      </div>
    </div>
  );
};

export default IntroSelect;