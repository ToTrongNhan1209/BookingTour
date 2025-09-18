import React, { useState } from 'react';

type HeroProps = {
    title?: string;
    subtitle?: string;
    videoSrc?: string;
    searchPlaceholder?: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, videoSrc, searchPlaceholder }) => {
    const [locationOpen, setLocationOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [locationLabel, setLocationLabel] = useState<string>('Tất cả địa điểm');
    const [priceLabel, setPriceLabel] = useState<string>('Tất cả mức giá');

    const toggleLocation = () => {
        setLocationOpen(prev => !prev);
        setPriceOpen(false);
    };

    const togglePrice = () => {
        setPriceOpen(prev => !prev);
        setLocationOpen(false);
    };

    const chooseLocation = (label: string) => {
        setLocationLabel(label);
        setLocationOpen(false);
    };

    const choosePrice = (label: string) => {
        setPriceLabel(label);
        setPriceOpen(false);
    };

    return (
        <>
        <section className={`hero ${videoSrc ? 'has-video' : 'no-video'}`}>
        <div className="hero-bg">
          {videoSrc && (
            <video src={videoSrc} autoPlay muted loop playsInline></video>
          )}
        </div>
        <div className="search-box">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
          <form>
            <label className="field">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </span>
              <input type="text" placeholder={searchPlaceholder || 'Tìm kiếm...'} required />
            </label>

            <label className="field dropdown">
              <button type="button" className={`dropdown-toggle ${locationOpen ? 'open' : ''}`} onClick={toggleLocation} aria-expanded={locationOpen}>
                <span className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                <span className="btn-label">{locationLabel}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </button>
              {locationOpen && (
                <ul className="dropdown-menu">
                  <li><button type="button" className="dropdown-item" onClick={() => chooseLocation('Tất cả địa điểm')}>Tất cả địa điểm</button></li>
                  <li><button type="button" className="dropdown-item" onClick={() => chooseLocation('Vịnh Hạ Long')}>Vịnh Hạ Long</button></li>
                  <li><button type="button" className="dropdown-item" onClick={() => chooseLocation('Vịnh Lan Hạ')}>Vịnh Lan Hạ</button></li>
                  <li><button type="button" className="dropdown-item" onClick={() => chooseLocation('Đảo Cát Bà')}>Đảo Cát Bà</button></li>
                </ul>
              )}
            </label>

            <label className="field dropdown">
              <button type="button" className={`dropdown-toggle ${priceOpen ? 'open' : ''}`} onClick={togglePrice} aria-expanded={priceOpen}>
                <span className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 10V9.91667C15 8.85812 14.1419 8 13.0833 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H10.9583C9.87678 16 9 15.1232 9 14.0417V14M12 17.5V6.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                <span className="btn-label">{priceLabel}</span>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </button>
              {priceOpen && (
                <ul className="dropdown-menu">
                  <li><button type="button" className="dropdown-item" onClick={() => choosePrice('Tất cả mức giá')}>Tất cả mức giá</button></li>
                  <li><button type="button" className="dropdown-item" onClick={() => choosePrice('Dưới 2 triệu')}>Dưới 2 triệu</button></li>
                  <li><button type="button" className="dropdown-item" onClick={() => choosePrice('2-4 triệu')}>2-4 triệu</button></li>
                  <li><button type="button" className="dropdown-item" onClick={() => choosePrice('Trên 4 triệu')}>Trên 4 triệu</button></li>
                </ul>
              )}
            </label>

            <button type="submit" className="btn btn-primary">Tìm kiếm</button>
          </form>
        </div>
      </section>
      </>
    )
}

export default Hero;