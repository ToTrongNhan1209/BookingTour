import React, { useState } from 'react';
import Pagination from '../pagination';
const reviewSummary = {
  avg: 4.92,
  total: 12,
  bars: [
    { star: 1, count: 0 },
    { star: 2, count: 0 },
    { star: 3, count: 0 },
    { star: 4, count: 1 },
    { star: 5, count: 11 },
  ],
};

const reviews = [
  {
    name: 'Tran Quoc Viet',
    stars: 4,
    content: 'tốt',
    date: '07/05/2024',
  },
  {
    name: 'Nguyen Quynh Chi',
    stars: 5,
    content: 'tuyệt vời',
    date: '08/05/2024',
  },
  {
    name: 'Tran Doanh',
    stars: 5,
    content: 'Du thuyền đẹp, phòng ốc rộng rãi nhiều góc chụp hình. Tư vấn nhiệt tình cho khách hàng cách đi chuyến cho hợp lý.',
    date: '01/08/2024',
  },
];

const ReviewSection: React.FC = () => {
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(reviews.length / pageSize);

  // Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    content: '',
    stars: 0,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStarChange = (star: number) => {
    setForm({ ...form, stars: star });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi đánh giá ở đây
    setForm({ name: '', phone: '', email: '', content: '', stars: 0 });
  };

  // Pagination logic
  const pagedReviews = reviews.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="review-section">
      <div className="review-search-card">
        <div className="review-title">Đánh giá ({reviewSummary.total})</div>
        <div className="review-header-row">
          <div className="review-search">
            <div className="review-search-input">
              <label className='search-input-padding'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#98a2b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <input placeholder="Tìm đánh giá" />
              </label>
            </div>
            <button className="review-send-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">

                <path d="M11.2443 4.17391C11.4758 3.50799 11.5916 3.17503 11.7627 3.08276C11.9108 3.00289 12.0892 3.00289 12.2373 3.08276C12.4084 3.17503 12.5242 3.50799 12.7556 4.17391L14.2859 8.5763C14.3518 8.76583 14.3847 8.86059 14.4441 8.93116C14.4965 8.9935 14.5634 9.04209 14.6389 9.07269C14.7244 9.10734 14.8247 9.10938 15.0253 9.11347L19.6851 9.20843C20.3899 9.22279 20.7423 9.22998 20.883 9.36423C21.0047 9.48042 21.0598 9.65005 21.0297 9.81559C20.9948 10.0069 20.7139 10.2198 20.1521 10.6458L16.438 13.4615C16.2782 13.5828 16.1982 13.6434 16.1494 13.7216C16.1063 13.7908 16.0808 13.8694 16.075 13.9506C16.0685 14.0426 16.0975 14.1387 16.1556 14.3307L17.5053 18.7918C17.7094 19.4666 17.8115 19.804 17.7273 19.9792C17.6544 20.1309 17.5101 20.2357 17.3433 20.2582C17.1506 20.2841 16.8613 20.0828 16.2826 19.6801L12.4569 17.018C12.2922 16.9034 12.2099 16.8461 12.1204 16.8239C12.0413 16.8042 11.9587 16.8042 11.8796 16.8239C11.7901 16.8461 11.7078 16.9034 11.5431 17.018L7.71738 19.6801C7.1387 20.0828 6.84936 20.2841 6.65666 20.2582C6.48988 20.2357 6.34559 20.1309 6.2727 19.9792C6.18848 19.804 6.29056 19.4666 6.49471 18.7918L7.84436 14.3307C7.90246 14.1387 7.93151 14.0426 7.92497 13.9506C7.91919 13.8694 7.89365 13.7908 7.85056 13.7216C7.80179 13.6434 7.72184 13.5828 7.56195 13.4615L3.84791 10.6458C3.28611 10.2198 3.00521 10.0069 2.97034 9.81559C2.94015 9.65005 2.99527 9.48042 3.11699 9.36423C3.25764 9.22998 3.61007 9.22279 4.31492 9.20843L8.97472 9.11347C9.17533 9.10938 9.27564 9.10734 9.3611 9.07269C9.43659 9.04209 9.50346 8.9935 9.5559 8.93116C9.61526 8.86059 9.6482 8.76583 9.71408 8.5763L11.2443 4.17391Z" stroke="#0e4f4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              Gửi đánh giá
            </button>
          </div>
        </div>
      </div>
      <div className="blog-detail-divider"></div>

      <div className="review-summary-card">
        <div className="review-summary-score">
          <h4>{reviewSummary.avg}</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M11.2443 4.17391C11.4758 3.50799 11.5916 3.17503 11.7627 3.08276C11.9108 3.00289 12.0892 3.00289 12.2373 3.08276C12.4084 3.17503 12.5242 3.50799 12.7556 4.17391L14.2859 8.5763C14.3518 8.76583 14.3847 8.86059 14.4441 8.93116C14.4965 8.9935 14.5634 9.04209 14.6389 9.07269C14.7244 9.10734 14.8247 9.10938 15.0253 9.11347L19.6851 9.20843C20.3899 9.22279 20.7423 9.22998 20.883 9.36423C21.0047 9.48042 21.0598 9.65005 21.0297 9.81559C20.9948 10.0069 20.7139 10.2198 20.1521 10.6458L16.438 13.4615C16.2782 13.5828 16.1982 13.6434 16.1494 13.7216C16.1063 13.7908 16.0808 13.8694 16.075 13.9506C16.0685 14.0426 16.0975 14.1387 16.1556 14.3307L17.5053 18.7918C17.7094 19.4666 17.8115 19.804 17.7273 19.9792C17.6544 20.1309 17.5101 20.2357 17.3433 20.2582C17.1506 20.2841 16.8613 20.0828 16.2826 19.6801L12.4569 17.018C12.2922 16.9034 12.2099 16.8461 12.1204 16.8239C12.0413 16.8042 11.9587 16.8042 11.8796 16.8239C11.7901 16.8461 11.7078 16.9034 11.5431 17.018L7.71738 19.6801C7.1387 20.0828 6.84936 20.2841 6.65666 20.2582C6.48988 20.2357 6.34559 20.1309 6.2727 19.9792C6.18848 19.804 6.29056 19.4666 6.49471 18.7918L7.84436 14.3307C7.90246 14.1387 7.93151 14.0426 7.92497 13.9506C7.91919 13.8694 7.89365 13.7908 7.85056 13.7216C7.80179 13.6434 7.72184 13.5828 7.56195 13.4615L3.84791 10.6458C3.28611 10.2198 3.00521 10.0069 2.97034 9.81559C2.94015 9.65005 2.99527 9.48042 3.11699 9.36423C3.25764 9.22998 3.61007 9.22279 4.31492 9.20843L8.97472 9.11347C9.17533 9.10938 9.27564 9.10734 9.3611 9.07269C9.43659 9.04209 9.50346 8.9935 9.5559 8.93116C9.61526 8.86059 9.6482 8.76583 9.71408 8.5763L11.2443 4.17391Z" stroke="#f79009" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div className="review-summary-bar-list">
          {reviewSummary.bars.map(bar => (
            <div className="review-summary-bar-row" key={bar.star}>
              <span className="review-bar-label">{bar.star} sao</span>
              <div className="review-bar-bg">
                <div
                  className="review-bar-fill"
                  style={{
                    width: `${bar.count / reviewSummary.total * 100}%`,
                  }}
                ></div>
              </div>
              <span className="review-bar-count">{bar.count} đánh giá</span>
            </div>
          ))}
        </div>
      </div>
      <div className="review-list">
        {pagedReviews.map((r, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-card-stars">
              {Array.from({ length: r.stars }).map((_, i) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.2443 4.17391C11.4758 3.50799 11.5916 3.17503 11.7627 3.08276C11.9108 3.00289 12.0892 3.00289 12.2373 3.08276C12.4084 3.17503 12.5242 3.50799 12.7556 4.17391L14.2859 8.5763C14.3518 8.76583 14.3847 8.86059 14.4441 8.93116C14.4965 8.9935 14.5634 9.04209 14.6389 9.07269C14.7244 9.10734 14.8247 9.10938 15.0253 9.11347L19.6851 9.20843C20.3899 9.22279 20.7423 9.22998 20.883 9.36423C21.0047 9.48042 21.0598 9.65005 21.0297 9.81559C20.9948 10.0069 20.7139 10.2198 20.1521 10.6458L16.438 13.4615C16.2782 13.5828 16.1982 13.6434 16.1494 13.7216C16.1063 13.7908 16.0808 13.8694 16.075 13.9506C16.0685 14.0426 16.0975 14.1387 16.1556 14.3307L17.5053 18.7918C17.7094 19.4666 17.8115 19.804 17.7273 19.9792C17.6544 20.1309 17.5101 20.2357 17.3433 20.2582C17.1506 20.2841 16.8613 20.0828 16.2826 19.6801L12.4569 17.018C12.2922 16.9034 12.2099 16.8461 12.1204 16.8239C12.0413 16.8042 11.9587 16.8042 11.8796 16.8239C11.7901 16.8461 11.7078 16.9034 11.5431 17.018L7.71738 19.6801C7.1387 20.0828 6.84936 20.2841 6.65666 20.2582C6.48988 20.2357 6.34559 20.1309 6.2727 19.9792C6.18848 19.804 6.29056 19.4666 6.49471 18.7918L7.84436 14.3307C7.90246 14.1387 7.93151 14.0426 7.92497 13.9506C7.91919 13.8694 7.89365 13.7908 7.85056 13.7216C7.80179 13.6434 7.72184 13.5828 7.56195 13.4615L3.84791 10.6458C3.28611 10.2198 3.00521 10.0069 2.97034 9.81559C2.94015 9.65005 2.99527 9.48042 3.11699 9.36423C3.25764 9.22998 3.61007 9.22279 4.31492 9.20843L8.97472 9.11347C9.17533 9.10938 9.27564 9.10734 9.3611 9.07269C9.43659 9.04209 9.50346 8.9935 9.5559 8.93116C9.61526 8.86059 9.6482 8.76583 9.71408 8.5763L11.2443 4.17391Z" stroke="#f79009" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              ))}
              {Array.from({ length: 5 - r.stars }).map((_, i) => (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.2443 4.17391C11.4758 3.50799 11.5916 3.17503 11.7627 3.08276C11.9108 3.00289 12.0892 3.00289 12.2373 3.08276C12.4084 3.17503 12.5242 3.50799 12.7556 4.17391L14.2859 8.5763C14.3518 8.76583 14.3847 8.86059 14.4441 8.93116C14.4965 8.9935 14.5634 9.04209 14.6389 9.07269C14.7244 9.10734 14.8247 9.10938 15.0253 9.11347L19.6851 9.20843C20.3899 9.22279 20.7423 9.22998 20.883 9.36423C21.0047 9.48042 21.0598 9.65005 21.0297 9.81559C20.9948 10.0069 20.7139 10.2198 20.1521 10.6458L16.438 13.4615C16.2782 13.5828 16.1982 13.6434 16.1494 13.7216C16.1063 13.7908 16.0808 13.8694 16.075 13.9506C16.0685 14.0426 16.0975 14.1387 16.1556 14.3307L17.5053 18.7918C17.7094 19.4666 17.8115 19.804 17.7273 19.9792C17.6544 20.1309 17.5101 20.2357 17.3433 20.2582C17.1506 20.2841 16.8613 20.0828 16.2826 19.6801L12.4569 17.018C12.2922 16.9034 12.2099 16.8461 12.1204 16.8239C12.0413 16.8042 11.9587 16.8042 11.8796 16.8239C11.7901 16.8461 11.7078 16.9034 11.5431 17.018L7.71738 19.6801C7.1387 20.0828 6.84936 20.2841 6.65666 20.2582C6.48988 20.2357 6.34559 20.1309 6.2727 19.9792C6.18848 19.804 6.29056 19.4666 6.49471 18.7918L7.84436 14.3307C7.90246 14.1387 7.93151 14.0426 7.92497 13.9506C7.91919 13.8694 7.89365 13.7908 7.85056 13.7216C7.80179 13.6434 7.72184 13.5828 7.56195 13.4615L3.84791 10.6458C3.28611 10.2198 3.00521 10.0069 2.97034 9.81559C2.94015 9.65005 2.99527 9.48042 3.11699 9.36423C3.25764 9.22998 3.61007 9.22279 4.31492 9.20843L8.97472 9.11347C9.17533 9.10938 9.27564 9.10734 9.3611 9.07269C9.43659 9.04209 9.50346 8.9935 9.5559 8.93116C9.61526 8.86059 9.6482 8.76583 9.71408 8.5763L11.2443 4.17391Z" stroke="#98a2b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              ))}
            </div>
            <div className="review-card-name">{r.name}</div>
            <div className="review-card-content">{r.content}</div>
            <div className="review-card-date">{r.date}</div>
          </div>
        ))}
      </div>
      <Pagination />
      <form className="review-form-section" onSubmit={handleSubmit}>
        <div className="review-form-row">
          <div className="review-form-group">
            <label className="review-form-label">Chất lượng</label>
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => handleStarChange(i + 1)}
                >
                 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none' ><path d="M11.2443 4.17391C11.4758 3.50799 11.5916 3.17503 11.7627 3.08276C11.9108 3.00289 12.0892 3.00289 12.2373 3.08276C12.4084 3.17503 12.5242 3.50799 12.7556 4.17391L14.2859 8.5763C14.3518 8.76583 14.3847 8.86059 14.4441 8.93116C14.4965 8.9935 14.5634 9.04209 14.6389 9.07269C14.7244 9.10734 14.8247 9.10938 15.0253 9.11347L19.6851 9.20843C20.3899 9.22279 20.7423 9.22998 20.883 9.36423C21.0047 9.48042 21.0598 9.65005 21.0297 9.81559C20.9948 10.0069 20.7139 10.2198 20.1521 10.6458L16.438 13.4615C16.2782 13.5828 16.1982 13.6434 16.1494 13.7216C16.1063 13.7908 16.0808 13.8694 16.075 13.9506C16.0685 14.0426 16.0975 14.1387 16.1556 14.3307L17.5053 18.7918C17.7094 19.4666 17.8115 19.804 17.7273 19.9792C17.6544 20.1309 17.5101 20.2357 17.3433 20.2582C17.1506 20.2841 16.8613 20.0828 16.2826 19.6801L12.4569 17.018C12.2922 16.9034 12.2099 16.8461 12.1204 16.8239C12.0413 16.8042 11.9587 16.8042 11.8796 16.8239C11.7901 16.8461 11.7078 16.9034 11.5431 17.018L7.71738 19.6801C7.1387 20.0828 6.84936 20.2841 6.65666 20.2582C6.48988 20.2357 6.34559 20.1309 6.2727 19.9792C6.18848 19.804 6.29056 19.4666 6.49471 18.7918L7.84436 14.3307C7.90246 14.1387 7.93151 14.0426 7.92497 13.9506C7.91919 13.8694 7.89365 13.7908 7.85056 13.7216C7.80179 13.6434 7.72184 13.5828 7.56195 13.4615L3.84791 10.6458C3.28611 10.2198 3.00521 10.0069 2.97034 9.81559C2.94015 9.65005 2.99527 9.48042 3.11699 9.36423C3.25764 9.22998 3.61007 9.22279 4.31492 9.20843L8.97472 9.11347C9.17533 9.10938 9.27564 9.10734 9.3611 9.07269C9.43659 9.04209 9.50346 8.9935 9.5559 8.93116C9.61526 8.86059 9.6482 8.76583 9.71408 8.5763L11.2443 4.17391Z" stroke={form.stars > i ? "#f79009" : "#98a2b3"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                </button>
              ))}
            </div>
          </div>
          <div className="review-form-group">
            <label className="review-form-label">Họ và tên <span style={{ color: '#f79009' }}>*</span></label>
            <input
              className="review-form-input"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              required
              placeholder="Nhập họ và tên"
            />
          </div>
        </div>
        <div className="review-form-row">
          <div className="review-form-group">
            <label className="review-form-label">Số điện thoại</label>
            <input
              className="review-form-input"
              name="phone"
              value={form.phone}
              onChange={handleFormChange}
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="review-form-group">
            <label className="review-form-label">Địa chỉ email <span style={{ color: '#f79009' }}>*</span></label>
            <input
              className="review-form-input"
              name="email"
              value={form.email}
              onChange={handleFormChange}
              required
              placeholder="Nhập email"
              type="email"
            />
          </div>
        </div>
        <div className="review-form-group" style={{ marginBottom: 12 }}>
          <label className="review-form-label">Đánh giá của bạn</label>
          <textarea
            className="review-form-textarea"
            name="content"
            value={form.content}
            onChange={handleFormChange}
            placeholder="Nhập yêu cầu của bạn"
            required
          />
        </div>
        <div className="review-form-btn-row">
          <button className="review-form-btn" type="submit">
            Gửi <svg width="18" height="18" fill="none"><path d="M2 16L16 2M16 2L11 2M16 2L16 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewSection;