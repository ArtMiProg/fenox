import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {

  return (
    <footer className="footer">
      <div className="upper-part">
        <div className="social-icons">
          <Link to="#"><img src="/vk_icon.png" alt="VK" /></Link>
          <Link to="#"><img src="/youtube_icon.png" alt="YouTube" /></Link>
          <Link to="#"><img src="/viber_icon.png" alt="Viber" /></Link>
          <Link to="#"><img src="/telegram_icon.png" alt="Telegram" /></Link>
          <Link to="#"><img src="/drives_icon.png" alt="Drives" /></Link>
        </div>
        <div className="logo">
          <img src="/fenox.png" alt="Footer Logo" />
        </div>
      </div>
      <div className="footerLinks">
        <Link to="#">Политика конфиденциальности</Link>
        <Link to="#">Пользовательское соглашение</Link>
        <Link to="#">Правила начисления бонусных баллов</Link>
        <Link to="#">Договор оферты</Link>
        <Link to="#">Контакты</Link>
      </div>
    </footer>
  )
}

export default Footer;