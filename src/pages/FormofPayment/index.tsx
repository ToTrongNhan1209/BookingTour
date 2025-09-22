import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FormofPayment: React.FC = () => {
  return (
    <>
      <Header />
      <div className="privacy-page mt-94">
        <div className="container">
          <h1 className="page-title">HÌNH THỨC THANH TOÁN</h1>
          <div className="page-subtitle">--</div>
          <div className="terms-section">
            <h2 className="section-title">1: THANH TOÁN BẰNG MÃ QR</h2>
            <div className="section-content">
              <p><b>1.1 Du thuyền Hạ Long:</b></p>
              <p>Đối với vé máy bay, sau khi đặt vé thành công, quý khách chọn hình thức thanh toán trực tuyến qua QR trên website. Khi thanh toán thành công, quý khách sẽ nhận được vé điện tử qua địa chỉ email của quý khách đã đăng ký.  </p>
            </div>
          </div>

          <div className="terms-section">
            <h2 className="section-title">2: THANH TOÁN BẰNG CHUYỂN KKHOẢN NGÂN HÀNG</h2>
            <div className="section-content">
              <p>Tên tài khoản <b>Công ty TNHH Du Lịch và Dịch Vụ Tovivu</b></p>
              <p>Số tài khoản <b>1234 6789 05</b></p>
              <p>Ngân hàng <b>Techcombank, Chi nhánh Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh</b></p>
              <p>Nội dung chuyển khoản: <b>Họ và tên + Số điện thoại + Mã đơn hàng</b></p>
              <p>Ví dụ: <b>Nguyễn Văn A - 0981587469 - DH123456</b></p>
              <p>Quý khách vui lòng chuyển khoản đúng số tiền hiển thị </p>

            </div>
          </div>
          
          <div className="terms-section">
            <h2 className="section-title">3: THNAH TOÁN TẠI VĂN PHÒNG CỦA Tovivu</h2>
            <div className="section-content">
              <ul>
                <li>Tầng 3, số nhà 12, ngõ 09, phường Tân Chánh Hiệp, quận 12, TP. Hồ Chí Minh</li>
                <li>Số điện thoại Hotline: 0981 587 469</li>
                <li>Giờ làm việc : Thứ 2 - Thứ 6 (8h - 17h)</li>
                <li>Khi thực hiện các giao dịch trên website, bắt buộc các thành viên phải thực hiện đúng theo các quy trình hướng dẫn.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default FormofPayment;
