import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section - Company Information */}
                <div className="footer-left">
                    <div className="footer-logo">
                        <div className="logo-icon">
                            <div className="logo"><a href="/" data-discover="true"><span>Tovivu</span></a></div>

                        </div>
                    </div>
                    
                    <div className="company-info">
                        <h3 className="company-name">Công ty TNHH Du Lịch và Dịch Vụ Tovivu</h3>
                        <p className="company-address">
                            Tầng 3, số nhà 12, ngõ 09, phường Tân Chánh Hiệp, quận 12, TP. Hồ Chí Minh
                        </p>
                        <p className="business-registration">
                            Mã số doanh nghiệp: 0110455372 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 05/06/2023
                        </p>
                    </div>
                </div>

                {/* Right Section - Navigation Links */}
                <div className="footer-right">
                    {/* Column 1: Giới thiệu */}
                    <div className="footer-column">
                        <h4 className="column-title">GIỚI THIỆU</h4>
                        <ul className="footer-links">
                            <li><a href="/ve-chung-toi">Về chúng tôi</a></li>
                            <li><a href="/dieu-khoan-su-dung">Điều khoản và điều kiện</a></li>
                            <li><a href="/chinh-sach-rieng-tu">Chính sách riêng tư</a></li>
                            <li><a href="/huong-dan-su-dung">Hướng dẫn sử dụng</a></li>
                            <li><a href="/hinh-thuc-thanh-toan">Hình thức thanh toán</a></li>
                            <li><a href="/lien-he">Liên hệ</a></li>
                            <li className="contact-info">
                                <span className="contact-label">Hotline:</span>
                                <a href="tel:0981587469" className="contact-value">0981587469</a>
                            </li>
                            <li className="contact-info">
                                <span className="contact-label">Email:</span>
                                <a href="mailto:totrongnhan1209@gmail.com" className="contact-value">totrongnhan1209@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Điểm đến */}
                    <div className="footer-column">
                        <h4 className="column-title">ĐIỂM ĐẾN</h4>
                        <ul className="footer-links">
                            <li><a href="#halong">Vịnh Hạ Long</a></li>
                            <li><a href="#lanha">Vịnh Lan Hạ</a></li>
                            <li><a href="#catba">Đảo Cát Bà</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Du thuyền */}
                    <div className="footer-column">
                        <h4 className="column-title">DU THUYỀN</h4>
                        <ul className="footer-links">
                            <li><a href="/tin-tuc">Blog</a></li>
                            <li><a href="/quy-dinh-du-thuyen">Quy định chung và lưu ý</a></li>
                            <li><a href="#faq">Câu hỏi thường gặp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Bottom Separator Line */}
            <div className="footer-separator"></div>
        </footer>
    );
};

export default Footer;
