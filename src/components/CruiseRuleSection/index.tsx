import React, { useState } from 'react';

const rules = [
    {
        title: 'Thời gian nhận phòng',
        content: (
            <span>
                Giờ nhận phòng từ 12h15-12h30. Nếu quý khách không sủ dụng dịch vụ xe đưa đón của tàu và tự di chuyển, vui lòng có mặt tại bến tàu muộn nhất là 11h45 để làm thủ tục trước khi lên tàu.
            </span>
        ),
    },
    {
        title: 'Thời gian trả phòng',
        content: (
            <span>
                Giờ trả phòng từ 9h30-10h30 tùy thuộc vào lịch trình của tàu. Sau khi trả phòng, quý khách sẽ được phục vụ bữa trưa trên tàu trước khi tàu cập bến.
            </span>
        ),
    },
    {
        title: 'Quy định nhận phòng',
        content: (
            <span>
                Đối với người lớn: quý khách vui lòng gửi ảnh chụp CCCD hoặc CMT hoặc Hộ chiếu.<br />
                Đối với trẻ em dưới 14 tuổi: quý khách vui lòng gửi ảnh chụp Giấy khai sinh hoặc Hộ chiếu<br />
                Những giấy tờ trên, quý khách vui lòng gửi trước ít nhất 03 ngày trước khi đi tàu và sẽ được yêu cầu xuất trình khi làm thủ tục lên tàu.
            </span>
        ),
    },
    {
        title: 'Giá phòng đã bao gồm',
        content: (
            <ul>
                <li>Hướng dẫn viên trên tàu</li>
                <li>Các bữa ăn theo tiêu chuẩn (01 bữa trưa, 01 bữa tối, 01 bữa sáng, 1 bữa trưa nhẹ)</li>
                <li>Lớp học nấu ăn, Bơi lội (nếu thời tiết cho phép), xem phim, câu mực, xem tivi vệ tinh</li>
                <li>Phòng tập gym trên tàu</li>
                <li>Vé tham quan tại các điểm có trong chương trình</li>
                <li>Phòng theo tiêu chuẩn 5 sao trên du thuyền</li>
                <li>Đồ uống chào mừng, khăn lạnh</li>
                <li>Nước lọc trong mỗi phòng</li>
            </ul>
        ),
    },
    {
        title: 'Giá phòng không bao gồm',
        content: (
            <span>
                Mỗi du thuyền sẽ có những quy định riêng về mức phụ thu trẻ em, giường phụ hay phụ thu cuối tuần. Quý khách có thể kiểm tra lại với nhân viên của chúng tôi để được tư vấn chi tiết và cụ thể.
            </span>
        ),
    },
    {
        title: 'Huỷ đặt phòng',
        content: (
            <span>
                Những mức giá tốt trên đây đều có điều kiện chung là không được hoàn/hủy và được phép đổi ngày. Quý khách vui lòng liên hệ với chúng tôi để nhận được sự hỗ trợ tốt nhất.
            </span>
        ),
    },
    {
        title: 'Hoãn hủy do điều kiện thời tiết',
        content: (
            <span>
                Trong trường hợp điều kiện thời tiết không cho phép thực hiện chuyến đi, Ban Quản lý Vịnh sẽ có chỉ đạo trực tiếp. Chúng tôi sẽ gửi tới quý khách chính sách cụ thể của từng du thuyền.
            </span>
        ),
    },
];

const CruiseRuleSection: React.FC = () => {
    // Mặc định mở hết
    const [openArr, setOpenArr] = useState<boolean[]>(rules.map(() => true));

    const handleToggle = (idx: number) => {
        setOpenArr(arr => arr.map((open, i) => (i === idx ? !open : open)));
    };

    return (
        <div className="cruise-rule-section">
            <div className="cruise-intro-title">Quy định chung và lưu ý</div>
            <div className="blog-detail-divider"></div>
            <div className="cruise-rule-list">
                {rules.map((rule, idx) => (
                    <div className="cruise-rule-item" key={idx}>
                        <div className="cruise-rule-title" onClick={() => handleToggle(idx)}>
                            {rule.title}
                            <button className="cruise-rule-toggle" type="button">
                                {openArr[idx] ? (
                                    <i className='icon-route'>
                                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </i>
                                ) : (
                                    <i className='icon-route-active'>
                                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </i>
                                )}
                            </button>
                        </div>
                        {openArr[idx] && (
                            <div className="cruise-rule-content">{rule.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CruiseRuleSection;