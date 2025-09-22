import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Instructions: React.FC = () => {
  return (
    <>
      <Header />
      <div className="privacy-page mt-94">
        <div className="container">
          <h1 className="page-title">HƯỚNG DẪN SỬ DỤNG</h1>
          <div className="page-subtitle">--</div>
          <div className="terms-section">
            <h2 className="section-title">1: DÀNH CHO KHÁCH HÀNG CÁ NHÂN: ĐẶT DU THUYỀN, ĐẶT VÉ MÁY BAY</h2>
            <div className="section-content">
              <p><b>1.1 Du thuyền Hạ Long:</b></p>
              <ul>
                <li>Bước 1: Tìm kiếm du thuyền phù hợp với yêu cầu của quý khách.</li>
                <li>Bước 2: Nhập phòng và du thuyền cần đặt cùng với họ và tên, số điện thoại, địa chỉ email để nhân viên tư vấn của Tovivu liên hệ.</li>
                <li>Bước 3: Chọn "Đặt ngay" để đặt dịch vụ.</li>
                <li>Bước 4: Thông tin của khách hàng được gửi về trung tâm xử lý dữ liệu của website.</li>
                <li>Bước 5: Nhân viên tư vấn sẽ kiểm tra tính có sẵn của dịch vụ và tính hợp lệ của đơn hàng sau đó gọi điện liên hệ với khách để yêu cầu chuyển tiền.</li>
                <li>Bước 6: Sau khi khách hàng chuyển tiền, nhân viên tư vấn sẽ tiến hành đặt dịch vụ với các bên đối tác.</li>
                <li>Bước 7: Nhân viên tư vấn sẽ gửi phiếu xác nhận dịch vụ bao gồm mã đơn hàng, thông tin khách hàng, thông tin dịch vụ và tổng giá trị dịch vụ.</li>
              </ul>
              <p><b>1.2 Vé máy bay:</b></p>
              <ul>
                <li>Bước 1: Tìm kiếm chuyến bay phù hợp với yêu cầu của quý khách.</li>
                <li>Bước 2: Nhập thông tin khách gồm: họ và tên, số điện thoại, xác thực bằng địa chỉ email và ấn “Tiếp” đến bước thanh toán.</li>
                <li>Bước 3: Thanh toán bằng mã QR cùng số tiền hiển thị trên màn hình.</li>
                <li>Bước 4: Vé xuất sẽ được gửi về địa chỉ email của quý khách hàng và email totrongnhan1209@gmail.com của website.</li>
                <li>Bước 5: Nhân viên tư vấn sẽ kiểm tra lại vé đã được gửi đến quý khách hàng hay chưa để hỗ trợ kịp thời.</li>
              </ul>
            </div>
          </div>

          <div className="terms-section">
            <h2 className="section-title">2: QUY TRÍNH HỦY ĐƠN HÀNG</h2>
            <div className="section-content">
              <p><b>2.1 Du thuyền Hạ Long:</b></p>
              <ul>
                <li>Khách hàng liên hệ để hủy đơn hàng với Tovivu bằng 1 trong các hình thức.</li>
                <li>Gửi yêu cầu theo form “liên hệ” trên website</li>
                <li>Gửi thông tin tới địa chỉ email: totrongnhan1209@gmail.com.</li>
                <li>Gọi điện thoại tới số điện thoại: 0981 587 469</li>
                <li>Liên hệ với nhân viên phụ trách đơn hàng của quý khách.</li>
              </ul>
              <p><b>2.2 Vé máy bay:</b></p>
              <ul>
                <li>Vé máy bay sau khi xuất vé thành công sẽ không thể hủy trên website cũng như hệ thống vé máy bay của các hãng hàng không.</li>
                <li>Khách hàng liên hệ với nhân viên tư vấn để được hỗ trợ xử lý vé sau khi xuất vé thành công.</li>
              </ul>
            </div>
          </div>
          
          <div className="terms-section">
            <h2 className="section-title">3: GIẢI QUYẾT CÁC PHÁT SINH TRONG QUÁ TRÌNH GIAO DỊCH</h2>
            <div className="section-content">
              <ul>
                <li>Tovivu luôn có trách nhiệm tiếp nhận và xử lý khiếu nại của khách hàng liên quan đến giao dịch tại: Tovivu.com</li>
                <li>Khi có tranh chấp xảy ra, quý khách hàng liên hệ ngay với Tovivu theo số hotline: 0981 587 469 hoặc gửi email theo địa chỉ email: info@Tovivu.com. Chúng tôi sẽ liên hệ lại ngay với quý khách hàng để giải quyết các phát sinh.</li>
                <li>Mọi tranh chấp phát sinh giữa Tovivu và thành viên sẽ được giải quyết trên cơ sở thương lượng. Trường hợp không đạt được thỏa thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa án kinh tế để giải quyết.</li>
                <li>Khi tranh chấp phát sinh giữa khách hàng với nhà cung cấp dịch vụ trực tiếp, ban quản lý website sẽ có trách nhiệm cung cấp cho khách hàng thông tin về người bán, tích cực hỗ trợ khách hàng hoặc đại diện khách hàng bảo vệ quyền lợi và lợi ích hợp pháp của mình.</li>
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

export default Instructions;
