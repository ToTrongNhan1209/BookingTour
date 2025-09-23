import React, { useState } from 'react';

const roomTypes = [
  {
    id: 1,
    name: 'Phòng Delta Suite',
    img: '/images/room/room1.webp',
    price: 4150000,
    size: '33 m²',
    max: 2,
  },
  {
    id: 2,
    name: 'Phòng Ocean Suite',
    img: '/images/room/room2.webp',
    price: 4370000,
    size: '33 m²',
    max: 2,
  },
  {
    id: 3,
    name: 'Phòng Captain Suite',
    img: '/images/room/room3.webp',
    price: 4620000,
    size: '38 m²',
    max: 2,
  },
  {
    id: 4,
    name: 'Phòng Regal Suite',
    img: '/images/room/room4.webp',
    price: 4870000,
    size: '46 m²',
    max: 2,
  },
];

const RoomSelect: React.FC = () => {
  const [qty, setQty] = useState(roomTypes.map(() => 0));

  const handleChange = (idx: number, delta: number) => {
    setQty(qty =>
      qty.map((q, i) => (i === idx ? Math.max(0, q + delta) : q))
    );
  };

  const handleClear = () => setQty(roomTypes.map(() => 0));

  const total = qty.reduce((sum, q, idx) => sum + q * roomTypes[idx].price, 0);

  return (
    
    <div className="room-select-section">
      <div className="room-select-title">Các loại phòng & giá</div>
      <div className="blog-detail-divider"></div>
      <div className="room-select-card">
        <button className="room-select-clear" onClick={handleClear}>
          Xóa lựa chọn
        </button>
        <div className="room-select-list">
          {roomTypes.map((room, idx) => (
            <div className="room-select-item" key={room.id}>
              <img className="room-select-img" src={room.img} alt={room.name} />
              <div className="room-select-info">
                <a className="room-select-name" href="#">{room.name}</a>
                <div className="room-select-meta">
                  <div className='room-select-meta-detail'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 3.5H4C3.20435 3.5 2.44129 3.81607 1.87868 4.37868C1.31607 4.94129 1 5.70435 1 6.5V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H6C6.16471 20.4991 6.32665 20.4576 6.47145 20.3791C6.61625 20.3006 6.73941 20.1876 6.83 20.05L8.54 17.5H15.46L17.17 20.05C17.2606 20.1876 17.3838 20.3006 17.5285 20.3791C17.6733 20.4576 17.8353 20.4991 18 20.5H22C22.2652 20.5 22.5196 20.3946 22.7071 20.2071C22.8946 20.0196 23 19.7652 23 19.5V6.5C23 5.70435 22.6839 4.94129 22.1213 4.37868C21.5587 3.81607 20.7956 3.5 20 3.5ZM21 18.5H18.54L16.83 16C16.7454 15.8531 16.6248 15.7302 16.4796 15.6428C16.3344 15.5553 16.1694 15.5062 16 15.5H8C7.83529 15.5009 7.67335 15.5424 7.52855 15.6209C7.38375 15.6994 7.26059 15.8124 7.17 15.95L5.46 18.5H3V13.5H21V18.5ZM7 11.5V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5H10C10.2652 9.5 10.5196 9.60536 10.7071 9.79289C10.8946 9.98043 11 10.2348 11 10.5V11.5H7ZM13 11.5V10.5C13 10.2348 13.1054 9.98043 13.2929 9.79289C13.4804 9.60536 13.7348 9.5 14 9.5H16C16.2652 9.5 16.5196 9.60536 16.7071 9.79289C16.8946 9.98043 17 10.2348 17 10.5V11.5H13ZM21 11.5H19V10.5C19 9.70435 18.6839 8.94129 18.1213 8.37868C17.5587 7.81607 16.7956 7.5 16 7.5H14C13.2599 7.50441 12.5476 7.78221 12 8.28C11.4524 7.78221 10.7401 7.50441 10 7.5H8C7.20435 7.5 6.44129 7.81607 5.87868 8.37868C5.31607 8.94129 5 9.70435 5 10.5V11.5H3V6.5C3 6.23478 3.10536 5.98043 3.29289 5.79289C3.48043 5.60536 3.73478 5.5 4 5.5H20C20.2652 5.5 20.5196 5.60536 20.7071 5.79289C20.8946 5.98043 21 6.23478 21 6.5V11.5Z" fill="#475467"></path></svg>
                    {room.size}
                  </div>
                  <div className='room-select-meta-detail'>
                    Tối đa: {room.max}  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
              </div>
              <div className="room-select-price">
                {room.price.toLocaleString()} đ
                <div className='price-name'>/khách</div>
              </div>
              <div className="room-select-qty">
                <button className="room-select-qty-btn" onClick={() => handleChange(idx, -1)}>-</button>
                <span>{qty[idx]}</span>
                <button className="room-select-qty-btn" onClick={() => handleChange(idx, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="room-select-footer">
          <div className="room-select-total-price">
            Tổng tiền<br />
            <span className="room-select-total">{total.toLocaleString()} đ</span>
          </div>
          <div className="room-select-actions">
            <button className="room-select-btn-outline">Thuê trọn tàu</button>
            <button className="room-select-btn">Đặt ngay &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelect;