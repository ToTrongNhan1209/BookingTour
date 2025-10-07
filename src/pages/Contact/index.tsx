import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        content: ""
    });
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setSuccess(null);
        setError(null);
        try {
            await emailjs.send(
                "service_xxxxx", // Thay bằng service ID của bạn
                "template_xxxxx", // Thay bằng template ID của bạn
                {
                    from_name: form.name,
                    from_email: form.email,
                    from_phone: form.phone,
                    message: form.content,
                },
                "user_xxxxx" // Thay bằng user ID của bạn
            );
            setSuccess("Gửi liên hệ thành công!");
            setForm({ name: "", email: "", phone: "", content: "" });
        } catch (err) {
            setError("Gửi liên hệ thất bại. Vui lòng thử lại.");
        }
        setSending(false);
    };

    return (
        <>
            <Header />
            <section className="flight-hero">
                <div className="flight-hero-bg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4545065405814!2d106.62420897480605!3d10.852993989300455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1730822730655!5m2!1svi!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-container">
                    <div className="contact-title">
                        Khám phá Hạ Long thông qua Du thuyền
                    </div>
                    <div className="contact-desc">
                        Khám phá Hạ Long qua Du thuyền cùng Tovivu - Hãy liên hệ ngay để trải nghiệm hành trình tuyệt vời!
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-field">
                            <label className="contact-label">Họ và tên</label>
                            <div className="contact-input">
                                <input name="name" value={form.name} onChange={handleChange} placeholder="Nhập họ và tên" type="text" required />
                            </div>
                        </div>
                        <div className="contact-label-col2">
                            <div className="contact-form-field">
                                <label className="contact-label">Email</label>
                                <div className="contact-input">
                                    <input name="email" value={form.email} onChange={handleChange} placeholder="Nhập email" type="email" required />
                                </div>
                            </div>
                            <div className="contact-form-field">
                                <label className="contact-label">Số điện thoại</label>
                                <div className="contact-input">
                                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Nhập số điện thoại" type="text" required />
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-field">
                            <label className="contact-label">Nội dung</label>
                            <textarea className="contact-input contact-textarea" name="content" value={form.content} onChange={handleChange} placeholder="Nhập yêu cầu của bạn" />
                        </div>
                        <button type="submit" className="contact-btn" disabled={sending}>
                            {sending ? "Đang gửi..." : "Liên hệ với Tovivu"} <span style={{ marginLeft: 8 }}>→</span>
                        </button>
                        {success && <div style={{ color: "#2ec4b6", marginTop: 8 }}>{success}</div>}
                        {error && <div style={{ color: "#e63946", marginTop: 8 }}>{error}</div>}
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactPage;
