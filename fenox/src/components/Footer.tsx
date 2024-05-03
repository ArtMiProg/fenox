import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const socialLinks = [
    { src: "/social-icons/vk.jpg", alt: "VK" },
    { src: "/social-icons/youtube.png", alt: "YouTube" },
    { src: "/social-icons/viber.jpg", alt: "Viber" },
    { src: "/social-icons/telegram.png", alt: "Telegram" },
    { src: "/drives_icon.png", alt: "DRIVE2.RU" }
  ];

  const footerLinks = [
    "Политика конфиденциальности",
    "Пользовательское соглашение",
    "Правила начисления бонусных баллов",
    "Договор оферты",
    "Контакты"
  ];

  return (
    <footer className="footer">
      <div className="upper-part">
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <Link key={index} to="/empty" className="social-link">
              <img src={link.src} alt={link.alt} />
            </Link>
          ))}
        </div>
        <div className="logo">
          <img src="/fenox.png" alt="Footer Logo" />
        </div>
      </div>
      <div className="footerLinks">
        {footerLinks.map((link, index) => (
          <Link key={index} to="/empty">{link}</Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer;