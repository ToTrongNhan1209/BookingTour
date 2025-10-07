import React, { useState, useRef } from 'react';

const HeroFlight: React.FC = () => {
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');
  const [cheapMonth, setCheapMonth] = useState(false);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  // set default date to today in yyyy-mm-dd (suitable for <input type="date">)
  const todayForInput = (): string => new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState<string>(() => todayForInput());

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const dateRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý tìm kiếm chuyến bay, date ở dạng 'yyyy-mm-dd'
    console.log({ from, to, date, adults, children, infants, tripType, cheapMonth });
  };

  const handleDateFocus = () => {
    // một số browser hỗ trợ showPicker() để mở date picker programmatically
    const el = dateRef.current as any;
    if (el && typeof el.showPicker === 'function') {
      el.showPicker();
    }
  };

  return (
    <section className="flight-hero">
      <div className="flight-hero-bg">
        <video src="/video/flight.mp4" autoPlay muted loop playsInline></video>
      </div>
      <div className="flight-hero-shell">
        <header className="flight-head">
          <h1 className="flight-title">Mở cánh cửa khám phá cùng Tovivu</h1>
          <p className="flight-subtitle">Tovivu - Đặt chân lên đỉnh mây với một bước nhảy</p>
        </header>
        <form className="flight-search-box" onSubmit={handleSubmit}>
          <div className="flight-search-top">
            <div className="flight-radio-group">
              <label className="flight-radio">
                <input type="radio" name="tripType" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
                <span>Một chiều</span>
              </label>
              <label className="flight-radio">
                <input type="radio" name="tripType" checked={tripType === 'roundtrip'} onChange={() => setTripType('roundtrip')} />
                <span>Khứ hồi</span>
              </label>
            </div>
            <label className="flight-checkbox">
              <input type="checkbox" checked={cheapMonth} onChange={e => setCheapMonth(e.target.checked)} />
              <span>Vé rẻ nhất tháng</span>
            </label>
          </div>

          <div className="flight-search-grid">
            <div className="flight-label-col2">
              <div className="flight-form-field">
                <label className="flight-label">Điểm đi</label>
                <div className="flight-input">
                  <span className="flight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19.1667 7.76666C19.2189 7.55255 19.1891 7.32665 19.0833 7.13333C18.8133 6.6647 18.4533 6.25401 18.0241 5.92483C17.5949 5.59565 17.105 5.35445 16.5824 5.21509C16.0597 5.07572 15.5147 5.04093 14.9786 5.1127C14.4425 5.18447 13.9259 5.3614 13.4583 5.63333L11.6667 6.66666L7.49999 4.70833C7.38154 4.64696 7.25007 4.61493 7.11666 4.61493C6.98325 4.61493 6.85179 4.64696 6.73333 4.70833L4.23333 6.15C4.10978 6.22126 4.00659 6.32305 3.93363 6.44561C3.86068 6.56818 3.8204 6.70741 3.81666 6.85C3.81263 6.99364 3.8458 7.13588 3.91297 7.26292C3.98014 7.38995 4.07901 7.49746 4.2 7.575L6.95 9.30833L5.49999 10.1417L1.51666 10.625C1.35653 10.6448 1.2056 10.7107 1.08218 10.8146C0.958764 10.9185 0.868172 11.0561 0.821404 11.2105C0.774636 11.3649 0.773703 11.5296 0.818719 11.6845C0.863735 11.8395 0.952763 11.978 1.07499 12.0833L4.02499 14.6333C4.41337 15.004 4.91075 15.2398 5.44353 15.3058C5.97632 15.3719 6.51621 15.2646 6.98333 15L18.75 8.275C18.8503 8.22294 18.9389 8.15103 19.0106 8.06365C19.0822 7.97626 19.1353 7.87522 19.1667 7.76666ZM6.22499 13.6C6.06492 13.6881 5.88033 13.7211 5.69964 13.694C5.51896 13.6669 5.35218 13.5812 5.225 13.45L3.64166 12.0917L5.91666 11.8167C6.02846 11.8023 6.13619 11.7655 6.23333 11.7083L9.03333 10.1C9.15807 10.028 9.26202 9.9249 9.33505 9.80076C9.40807 9.67662 9.44768 9.53567 9.45 9.39166C9.4517 9.24864 9.41657 9.10758 9.34798 8.98206C9.27938 8.85654 9.17963 8.7508 9.05833 8.675L6.30833 6.93333L7.225 6.40833L11.3917 8.34166C11.5101 8.40303 11.6416 8.43506 11.775 8.43506C11.9084 8.43506 12.0399 8.40303 12.1583 8.34166L14.2917 7.10833C14.7288 6.86333 15.2295 6.75538 15.7288 6.79847C16.2281 6.84156 16.7029 7.03371 17.0917 7.35L6.22499 13.6Z" fill="#98A2B3"></path></svg>
                  </span>
                  <input type="text" placeholder="Vui lòng nhập điểm đi"  onChange={e => setFrom(e.target.value)} />
                </div>
              </div>
              <div className="flight-form-field">
                <label className="flight-label">Điểm đến</label>
                <div className="flight-input">
                  <span className="flight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.6 13.525C17.3129 12.4729 16.6248 11.5754 15.6833 11.025L13.925 9.99997L13.525 5.44164C13.514 5.3085 13.4712 5.17995 13.4001 5.06682C13.3291 4.9537 13.2318 4.85932 13.1167 4.79164L10.6167 3.3583C10.49 3.28516 10.3463 3.24666 10.2 3.24666C10.0537 3.24666 9.91001 3.28516 9.78333 3.3583C9.65667 3.42747 9.55015 3.52835 9.47419 3.65106C9.39822 3.77376 9.35543 3.91409 9.35 4.0583L9.225 7.3083L7.76666 6.47497L5.38333 3.26664C5.28642 3.13805 5.15432 3.04029 5.00303 2.98519C4.85173 2.93009 4.68771 2.92 4.5308 2.95614C4.37389 2.99228 4.23081 3.07311 4.11886 3.18885C4.00691 3.30459 3.93089 3.45028 3.9 3.6083L3.175 7.44997C3.04874 7.97076 3.09316 8.51834 3.30171 9.01196C3.51027 9.50559 3.87191 9.91914 4.33333 10.1916L16.05 16.95C16.2383 17.0608 16.4626 17.0931 16.6746 17.0401C16.8866 16.9871 17.0693 16.853 17.1833 16.6666C17.4582 16.197 17.6366 15.6772 17.7082 15.1378C17.7797 14.5983 17.7429 14.05 17.6 13.525ZM16.0333 15L5.16666 8.74997C5.01083 8.65485 4.89056 8.51118 4.82431 8.34106C4.75807 8.17093 4.74953 7.98376 4.8 7.8083L5.18333 5.77497L6.56666 7.6083C6.63384 7.69952 6.7189 7.77608 6.81666 7.8333L9.60833 9.44997C9.73282 9.52197 9.87383 9.56052 10.0176 9.56189C10.1614 9.56325 10.3032 9.52737 10.429 9.45774C10.5548 9.38811 10.6605 9.2871 10.7357 9.16454C10.811 9.04198 10.8532 8.90203 10.8583 8.7583L10.9917 5.5083L11.9 6.0333L12.3 10.5916C12.3119 10.7256 12.356 10.8546 12.4285 10.9678C12.5011 11.081 12.5999 11.1749 12.7167 11.2416L14.85 12.5C15.1275 12.6601 15.3706 12.8736 15.5651 13.1282C15.7596 13.3828 15.9018 13.6734 15.9833 13.9833C16.0763 14.3141 16.0934 14.6616 16.0333 15Z" fill="#98A2B3"></path></svg>
                  </span>
                  <input type="text" placeholder="Vui lòng nhập điểm đến" value={to} onChange={e => setTo(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="flight-label-col2">
              <div className="flight-form-field">
                <label className="flight-label">Ngày đi</label>
                <div className="flight-input">
                  <span className="flight-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 9H21M7 3V5M17 3V5M6 12H10V16H6V12ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#98a2b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                  </span>
                  <input
                    ref={dateRef}
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    onFocus={handleDateFocus}
                    aria-label="Ngày đi"
                  />
                </div>
              </div>
            </div>

            <div className="flight-label-col-4">
              <div className="flight-label-col2">
                <div className="flight-form-field">
                  <label className="flight-label">Người lớn</label>
                  <div className="flight-input">
                    <span className="flight-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#98a2b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                    <input type="number" min={1} value={adults} onChange={e => setAdults(Number(e.target.value))} />
                  </div>
                </div>
                <div className="flight-form-field">
                  <label className="flight-label">Trẻ em</label>
                  <div className="flight-input">
                    <span className="flight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#98a2b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                    <input type="number" min={0} value={children} onChange={e => setChildren(Number(e.target.value))} />
                  </div>
                </div>
              </div>

              <div className="flight-label-col2">
                <div className="flight-form-field">
                  <label className="flight-label">Em bé</label>
                  <div className="flight-input">
                    <span className="flight-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#98a2b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                    <input type="number" value={infants} onChange={e => setInfants(Number(e.target.value))} />
                  </div>
                </div>

                <button type="submit" className="flight-btn">Tìm chuyến bay</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroFlight;