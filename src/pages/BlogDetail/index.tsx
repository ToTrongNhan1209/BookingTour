import React from 'react';
import Header from '../../components/Header';
import LinkDirection from '../../components/linkdirection';
import Footer from '../../components/Footer';
const BlogDetail: React.FC = () => {
    return (
        <>
            <Header />
            <LinkDirection  />

            <div className="blog-detail-container">
                <div className="blog-detail-content">
                    <h1 className="blog-detail-title">
                        Top 5 loại trà Đà Lạt ngon mà bạn nhất định phải thử
                    </h1>
                    <div className="blog-detail-date">22/09/2025</div>
                    <div className="blog-detail-divider"></div>
                    <div className="blog-detail-desc">
                        <em>
                            Đà Lạt không chỉ nổi tiếng với khí hậu mát lành, hoa tươi bốn mùa mà còn là “thiên đường của trà”. Từ những đồi chè xanh mướt ở Cầu Đất đến những quán trà ấm cúng trong lòng thành phố, mỗi tách trà đều mang hương vị riêng – vừa tinh khiết vừa an yên. Dưới đây là 5 loại trà ngon nhất định phải thử khi du lịch Đà Lạt.
                        </em>
                    </div>
                    <div className="blog-detail-image">
                        <img src="/images/blogs/dalatblog1.webp" alt="Calista Cruise 6 sao" />
                    </div>


                </div>

                <div className="blog-detail-output">
                    <p className="ouput-content">
                        <b>1. Trà Oolong Cầu Đất </b>
                    </p>
                    <p className="ouput-content">
                        <b> Nguồn gốc:</b> Trồng tại Cầu Đất – vùng đất cao hơn 1.600m so với mực nước biển, khí hậu mát lạnh quanh năm.
                    </p>
                    <p className="ouput-content">
                        <b> Hương vị: </b> Trà Oolong có hương thơm dịu, thoang thoảng mùi hoa lan, vị chát nhẹ ở đầu lưỡi nhưng hậu ngọt sâu. Khi pha chuẩn, nước trà có màu vàng hổ phách trong vắt.
                    </p>
                    <p className="ouput-content">
                        <b>Công dụng: </b>
                    </p>
                    <p className="ouput-content">
                        • Giàu chất chống oxy hóa (polyphenol), ngăn ngừa lão hóa.
                    </p>
                    <p className="ouput-content">
                        • Hỗ trợ tiêu hóa, giảm cholesterol.
                    </p>
                    <p className="ouput-content">
                        • Tạo cảm giác tỉnh táo, tập trung.
                    </p>
                    <p className="ouput-content">
                        • Điểm nhấn: Là loại trà cao cấp nhất Đà Lạt, thường được chọn làm quà biếu vì sang trọng, có thể bảo quản lâu.
                    </p>

                    <figure>
                        <img src="/images/blogs/dalatblog2.webp" alt="" />
                    </figure>

                    <p className="ouput-content">
                        <b>2. Trà xanh Cầu Đất </b>
                    </p>
                    <p className="ouput-content">
                        <b> Nguồn gốc:</b> Được hái từ những lá trà non vào sáng sớm, sau đó chế biến nhanh để giữ màu xanh tự nhiên.
                    </p>
                    <p className="ouput-content">
                        <b> Hương vị: </b>  Vị chát nhẹ, hơi đắng khi mới uống nhưng hậu ngọt thanh, mát lành. Nước trà có màu xanh ngọc hoặc vàng nhạt tùy cách pha.
                    </p>
                    <p className="ouput-content">
                        <b>Công dụng: </b>
                    </p>
                    <p className="ouput-content">
                        • Thanh nhiệt, giải độc cơ thể.
                    </p>
                    <p className="ouput-content">
                        • Hỗ trợ giảm cân nhờ tăng cường trao đổi chất.
                    </p>
                    <p className="ouput-content">
                        • Cung cấp caffeine tự nhiên, giúp tỉnh táo mà không gây hồi hộp như cà phê.
                    </p>
                    <p className="ouput-content">
                        •  Điểm nhấn: Đây là loại trà phổ biến nhất, giá thành vừa phải, thích hợp uống hằng ngày.
                    </p>

                    <figure>
                        <img src="/images/blogs/dalatblog3.webp" alt="" />
                    </figure>

                    <p className="ouput-content">
                        <b>3. Trà Atiso – biểu tượng của Đà Lạt </b>
                    </p>
                    <p className="ouput-content">
                        <b> Nguồn gốc:</b>  Được trồng nhiều tại các nông trại Đà Lạt, đặc biệt là Trại Mát, Đơn Dương. Atiso được chế biến thành trà túi lọc hoặc hoa atiso sấy khô.
                    </p>
                    <p className="ouput-content">
                        <b> Hương vị: </b>  Dịu nhẹ, thanh mát, không quá chát. Nước trà trong, có thể thêm mật ong hoặc đường phèn để dễ uống hơn.
                    </p>
                    <p className="ouput-content">
                        <b>Công dụng: </b>
                    </p>
                    <p className="ouput-content">
                        • Thanh lọc gan, lợi mật, hỗ trợ tiêu hóa.
                    </p>
                    <p className="ouput-content">
                        • Giúp ngủ ngon và giảm stress.
                    </p>
                    <p className="ouput-content">
                        • Làm mát cơ thể, giải nhiệt trong những ngày nắng nóng.
                    </p>
                    <p className="ouput-content">
                        • Điểm nhấn: Đây là loại trà đặc sản nổi tiếng nhất Đà Lạt, hầu như du khách nào cũng mua về làm quà.
                    </p>

                    <figure>
                        <img src="/images/blogs/dalatblog4.webp" alt="" />
                    </figure>

                    <p className="ouput-content">
                        <b>4. Trà Hoa Hồng & Trà Thảo Mộc</b>
                    </p>
                    <p className="ouput-content">
                        <b> Nguồn gốc:</b> Đà Lạt là xứ sở hoa, nên hoa hồng, hoa cúc, oải hương được sấy khô để pha trà.
                    </p>
                    <p className="ouput-content">
                        <b> Hương vị: </b>
                    </p>
                    <p className="ouput-content">
                        • Trà hoa hồng: thơm ngọt, lãng mạn, hậu vị dịu.
                    </p>
                    <p className="ouput-content">
                        • Trà hoa cúc: vị hơi đắng, mát, thích hợp uống buổi tối.
                    </p>
                    <p className="ouput-content">
                        • Trà lavender: hương thơm thư giãn, dễ ngủ.
                    </p>
                    <p className="ouput-content">
                        <b>Công dụng: </b>
                    </p>
                    <p className="ouput-content">
                        • Trà hoa hồng: đẹp da, cân bằng nội tiết tố.
                    </p>
                    <p className="ouput-content">
                        • Trà hoa cúc: an thần, tốt cho mắt và gan.
                    </p>
                    <p className="ouput-content">
                        • Trà lavender: giảm căng thẳng, giúp ngủ sâu.
                    </p>

                    <figure>
                        <img src="/images/blogs/dalatblog5.webp" alt="" />
                    </figure>

                    <p className="ouput-content">
                        <b>5. Trà Trái Cây Đà Lạt</b>
                    </p>
                    <p className="ouput-content">
                        <b> Nguồn gốc:</b>  Là sự kết hợp giữa lá trà xanh/oolong với trái cây đặc sản Đà Lạt: dâu tằm, dâu tây, cam quýt sấy khô.
                    </p>
                    <p className="ouput-content">
                        <b> Hương vị: </b>Tươi mới, chua ngọt tự nhiên, dễ uống, có thể pha nóng hoặc lạnh.
                    </p>
                    <p className="ouput-content">
                        <b>Công dụng: </b>
                    </p>
                    <p className="ouput-content">
                        • Bổ sung vitamin C, tăng sức đề kháng.
                    </p>
                    <p className="ouput-content">
                        • Giúp giải khát, hỗ trợ tiêu hóa.
                    </p>
                    <p className="ouput-content">
                        • Thích hợp với giới trẻ hoặc người không quen uống trà đắng.
                    </p>
                    <p className="ouput-content">
                        • Điểm nhấn: Loại trà “biến tấu” hiện đại, phù hợp để làm quà tặng cho bạn bè, đặc biệt khi muốn một hương vị lạ miệng.
                    </p>

                    <p className="ouput-content">
                        <b> Mỗi loại trà Đà Lạt mang một hương vị và công dụng riêng: Oolong sang trọng, Trà xanh gần gũi, Atiso đặc trưng, Trà hoa tinh tế, Trà trái cây trẻ trung. Khi du lịch Đà Lạt, đừng quên thử ít nhất một loại, hoặc mang về vài gói trà làm quà – để hương vị phố núi còn theo bạn thật lâu sau chuyến đi.</b>T
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BlogDetail;