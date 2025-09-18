import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <section className="topbar">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <img src="./images/logotovivu.png" alt="Tovivu Logo"/>
                        </div>
                        <nav className="main-nav">
                            <a href="/tim-du-thuyen">Tìm du thuyền</a>
                            <a href="#">Tìm vé máy bay</a>
                            <a href="#">Tìm khách sạn</a>
                            <a href="#">Tìm địa điểm</a>
                            <a href="#">Về chúng tôi</a>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="hotline">
                            <i className="fa-solid fa-phone"></i><span> Hotline: 0981587489</span>
                            <div className="divhot">Liên hệ Tovivu</div>
                        </div>
                        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7Z" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7Z" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17Z" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17Z" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
                <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                    <div className="mobile-menu-header">
                        <div className="logo">
                            <img src="./images/logotovivu.png" alt="Tovivu Logo"/>
                        </div>
                        <button className="close-btn" onClick={closeMobileMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <nav className="mobile-nav">
                        <a href="/tim-du-thuyen" onClick={closeMobileMenu}>Tìm du thuyền</a>
                        <a href="#" onClick={closeMobileMenu}>Tìm vé máy bay</a>
                        <a href="#" onClick={closeMobileMenu}>Tìm khách sạn</a>
                        <a href="#" onClick={closeMobileMenu}>Tìm địa điểm</a>
                        <a href="#" onClick={closeMobileMenu}>Về chúng tôi</a>
                    </nav>
                    <div className="mobile-contact">
                        <div className="mobile-hotline">
                            <i className="fa-solid fa-phone"></i>
                            <span>Hotline: 0981587489</span>
                        </div>
                        <button className="mobile-contact-btn" onClick={closeMobileMenu}>
                            Liên hệ Tovivu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;