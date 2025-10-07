import React, { useState } from 'react';

type HeroProps = {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  searchPlaceholder?: string;
};

const cruiseNames = [
  "Du thuyền Paradise Elegance Hạ Long",
  "Du thuyền Paradise Peak",
  "Du thuyền Aspira",
  "Du thuyền Paradise Grand",
  "Du thuyền Genesis Regal",
  "Du thuyền Stellar of the Seas",
  "Du thuyền Heritage Bình Chuẩn",
  "Du thuyền Orchid Classic",
  "Du thuyền Mon Cheri",
  "Du thuyền La Regina Legend",
  "Du thuyền Capella",
  "Du thuyền Scarlet Pearl",
  "Du thuyền Ambassador",
  "Du thuyền Athena Luxury",
  "Du thuyền Era",
  "Du thuyền President",
  "Du thuyền Indochine",
  "Du thuyền Royal",
  "Du thuyền Jasmine",
  "Du thuyền Glory Legend",
  "Du thuyền V'Spirit Premier"
];

const cruiseLocations = [
  "Tất cả địa điểm",
  "Vịnh Hạ Long",
  "Vịnh Lan Hạ",
  "Đảo Cát Bà",
];
const cruisePrices = [
  "Tất cả mức giá",
  "Dưới 2 triệu",
  "2-4 triệu",
  "Trên 4 triệu"
];

// Thêm mảng cruiseSlugs để map tên sang slug
const cruiseSlugs: { name: string; slug: string }[] = [
  { name: "Du thuyền Paradise Elegance Hạ Long", slug: "du-thuyen-paradise-elegance-ha-long" },
  { name: "Du thuyền Paradise Peak", slug: "du-thuyen-paradise-peak" },
  { name: "Du thuyền Aspira", slug: "du-thuyen-aspira" },
  { name: "Du thuyền Paradise Grand", slug: "du-thuyen-paradise-grand" },
  { name: "Du thuyền Genesis Regal", slug: "du-thuyen-genesis-regal" },
  { name: "Du thuyền Stellar of the Seas", slug: "du-thuyen-stellar-of-the-seas" },
  { name: "Du thuyền Heritage Bình Chuẩn", slug: "du-thuyen-heritage-binh-chuan" },
  { name: "Du thuyền Orchid Classic", slug: "du-thuyen-orchid-classic" },
  { name: "Du thuyền Mon Cheri", slug: "du-thuyen-mon-cheri" },
  { name: "Du thuyền La Regina Legend", slug: "du-thuyen-la-regina-legend" },
  { name: "Du thuyền Capella", slug: "du-thuyen-capella" },
  { name: "Du thuyền Scarlet Pearl", slug: "du-thuyen-scarlet-pearl" },
  { name: "Du thuyền Ambassador", slug: "du-thuyen-ambassador" },
  { name: "Du thuyền Athena Luxury", slug: "du-thuyen-athena-luxury" },
  { name: "Du thuyền Era", slug: "du-thuyen-era" },
  { name: "Du thuyền President", slug: "du-thuyen-president" },
  { name: "Du thuyền Indochine", slug: "du-thuyen-indochine" },
  { name: "Du thuyền Royal", slug: "du-thuyen-royal" },
  { name: "Du thuyền Jasmine", slug: "du-thuyen-jasmine" },
  { name: "Du thuyền Glory Legend", slug: "du-thuyen-glory-legend" },
  { name: "Du thuyền V'Spirit Premier", slug: "du-thuyen-vspirit-premier" }
];

const HeroHotel: React.FC<HeroProps> = ({ title, subtitle, videoSrc, searchPlaceholder }) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [locationLabel, setLocationLabel] = useState<string>('Tất cả địa điểm');
  const [priceLabel, setPriceLabel] = useState<string>('Tất cả mức giá');
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const filteredResults = cruiseNames.filter(name => name.toLowerCase().includes(search.toLowerCase()));

  const [locationSearch, setLocationSearch] = useState('');
  const [showLocationResults, setShowLocationResults] = useState(false);
  const filteredLocations = cruiseLocations.filter(loc => loc.toLowerCase().includes(locationSearch.toLowerCase()));

  const [priceSearch, setPriceSearch] = useState('');
  const [showPriceResults, setShowPriceResults] = useState(false);
  const filteredPrices = cruisePrices.filter(price => price.toLowerCase().includes(priceSearch.toLowerCase()));

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
          <form autoComplete="off">
            <label className="field dropdown" >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </span>
              <input
                className='dropdown-toggle'
                type="text"
                placeholder={searchPlaceholder || 'Tìm kiếm...'}
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setShowResults(e.target.value.length > 0);
                }}
                onFocus={() => setShowResults(search.length > 0)}
                onBlur={() => setTimeout(() => setShowResults(false), 150)}
                required
                style={{ width: '100%' }}
              />
              {showResults && filteredResults.length > 0 && (
                <ul className="search-results" style={{
                  position: 'absolute',
                  minWidth: '500px',
                  top: '130%',
                  left: 0,
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(16,24,40,.12)',
                  padding: '12px 0',
                  zIndex: 100,
                  listStyle: 'none',
                  margin: 0,
                  border: '1px solid #e8e8e8',
                  maxHeight: '260px',
                  overflowY: 'auto',
                  fontFamily: 'Archivo Medium',
                  fontSize: '15px',
                  textAlign: 'left'
                }}>
                  {filteredResults.map((name, idx) => {
                    const found = cruiseSlugs.find(item => item.name === name);
                    return (
                      <li key={idx} style={{ padding: '10px 24px', cursor: 'pointer', color: '#222', fontWeight: 500 }}
                        onMouseDown={() => {
                          setSearch(name);
                          setShowResults(false);
                          if (found) {
                            window.location.href = `/chi-tiet-du-thuyen/${found.slug}`;
                          }
                        }}
                      >{name}</li>
                    );
                  })}
                </ul>
              )}
            </label>

            <label className="field dropdown" onBlur={e => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setLocationOpen(false);
                setShowLocationResults(false);
              }
            }} tabIndex={-1}>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </span>
              <input
                className={`dropdown-toggle1${locationOpen ? ' open' : ''}`}
                type="text"
                value={locationSearch || locationLabel}
                placeholder="Chọn địa điểm..."
                readOnly={false}
                onClick={() => {
                  setLocationOpen(true);
                  setShowLocationResults(true);
                }}
                onChange={e => {
                  setLocationSearch(e.target.value);
                  setShowLocationResults(true);
                  setLocationOpen(true);
                }}
                onFocus={() => setShowLocationResults(true)}
                aria-expanded={locationOpen}
                style={{ cursor: 'pointer' }}
              />

              {locationOpen && showLocationResults && (
                <ul className="search-results1" >
                  {filteredLocations.map((loc, idx) => (
                    <li key={idx} style={{ padding: '10px 24px', cursor: 'pointer', color: '#222', fontWeight: 500 }} onMouseDown={() => {
                      setLocationLabel(loc);
                      setLocationSearch('');
                      setLocationOpen(false);
                      setShowLocationResults(false);
                    }}>
                      {loc}
                    </li>
                  ))}
                </ul>
              )}

            </label>

            <label className="field dropdown" onBlur={e => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setPriceOpen(false);
                setShowPriceResults(false);
              }
            }} tabIndex={-1}>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 10V9.91667C15 8.85812 14.1419 8 13.0833 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H10.9583C9.87678 16 9 15.1232 9 14.0417V14M12 17.5V6.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </span>
              <input
                className={`dropdown-toggle1${priceOpen ? ' open' : ''}`}
                type="text"
                value={priceSearch || priceLabel}
                placeholder="Chọn mức giá..."
                readOnly={false}
                onClick={() => {
                  setPriceOpen(true);
                  setShowPriceResults(true);
                }}
                onChange={e => {
                  setPriceSearch(e.target.value);
                  setShowPriceResults(true);
                  setPriceOpen(true);
                }}
                onFocus={() => setShowPriceResults(true)}
                aria-expanded={priceOpen}
                style={{ cursor: 'pointer' }}
              />
              {priceOpen && showPriceResults && (
                <ul className="search-results1" >
                  {filteredPrices.map((price, idx) => (
                    <li key={idx} style={{ padding: '10px 24px', cursor: 'pointer', color: '#222', fontWeight: 500 }} onMouseDown={() => {  
                      setPriceLabel(price);
                      setPriceSearch('');
                      setPriceOpen(false);
                      setShowPriceResults(false);
                    }}>
                      {price}
                    </li>
                  ))}
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

export default HeroHotel;